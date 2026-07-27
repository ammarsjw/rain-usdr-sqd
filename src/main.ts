import { events as balanceSheetEvents } from "./abi/BalanceSheet";
import { events as circuitBreakerEvents } from "./abi/CircuitBreaker";
import { events as collateralAdapterEvents } from "./abi/CollateralAdapter";
import { events as dutchAuctionEvents } from "./abi/DutchAuction";
import { events as governorEvents } from "./abi/Governor";
import { events as liquidationTriggerEvents } from "./abi/LiquidationTrigger";
import { events as oracleSecurityModuleEvents } from "./abi/OracleSecurityModule";
import { events as pegStabilityModuleEvents } from "./abi/PegStabilityModule";
import { events as priceConverterEvents } from "./abi/PriceConverter";
import { events as reserveAccountingEvents } from "./abi/ReserveAccounting";
import { events as solvencyEngineEvents } from "./abi/SolvencyEngine";
import { events as usdrEvents } from "./abi/USDR";
import { events as vaultEngineEvents } from "./abi/VaultEngine";
import { contractAddresses } from "./contracts";
import { idFromEventLogIndex } from "./id";
import {
    Activated,
    AddCommitter,
    AddRecorder,
    AddVolatileIlk,
    BalanceSheetHeal,
    BalanceSheetSuck,
    Bark,
    BuyStable,
    Cage,
    Cancel,
    Change,
    Checked,
    Deactivated,
    Deny,
    Digs,
    Diss,
    DistributeSurplus,
    Execute,
    Exit,
    Fess,
    File,
    Flux,
    Frob,
    Grab,
    Hope,
    Init,
    InvariantChecked,
    Join,
    Kick,
    Kiss,
    Move,
    Nope,
    OsmPoke,
    Pause,
    RecordDecrease,
    RecordIncrease,
    Redo,
    Rely,
    RemoveCommitter,
    RemoveRecorder,
    Schedule,
    SellStable,
    Slip,
    SpotPoke,
    Start,
    Stop,
    Take,
    Transfer,
    Unpause,
    UpdateCommittedEscrow,
    VaultHeal,
    VaultSuck,
    Void,
    Yank
} from "./model";
import { processor } from "./processor";
import { hexToBytes } from "./utils";
import { TypeormDatabase } from "@subsquid/typeorm-store";

const addressSet = new Set(contractAddresses);

const vaultEngineAddress = (process.env.VAULT_ENGINE_ADDRESS || "").toLowerCase();
const balanceSheetAddress = (process.env.BALANCE_SHEET_ADDRESS || "").toLowerCase();

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
    const entities: any[] = [];

    for (let block of ctx.blocks) {
        for (let e of block.logs) {
            if (!addressSet.has(e.address)) continue;

            const transaction = e.getTransaction();
            const base = {
                id: idFromEventLogIndex(transaction.hash, e.logIndex),
                blockNumber: BigInt(block.header.height),
                blockTimestamp: BigInt(parseInt((block.header.timestamp / 1000).toString())),
                transactionHash: hexToBytes(transaction.hash),
                contractAddress: hexToBytes(e.address),
                eventLogIndex: e.logIndex
            };
            const topic = e.topics[0];

            // Auth (shared by all privileged contracts).
            if (topic === vaultEngineEvents.Rely.topic) {
                const { account } = vaultEngineEvents.Rely.decode(e);
                entities.push(new Rely({ ...base, account: hexToBytes(account) }));
            } else if (topic === vaultEngineEvents.Deny.topic) {
                const { account } = vaultEngineEvents.Deny.decode(e);
                entities.push(new Deny({ ...base, account: hexToBytes(account) }));
            }

            // File overloads (topics shared across the system).
            else if (topic === vaultEngineEvents["File(bytes32 indexed,uint256)"].topic) {
                const { what, data } = vaultEngineEvents["File(bytes32 indexed,uint256)"].decode(e);
                entities.push(new File({ ...base, what: hexToBytes(what), dataUint: data }));
            } else if (topic === vaultEngineEvents["File(bytes32 indexed,bytes32 indexed,uint256)"].topic) {
                const decoded = vaultEngineEvents["File(bytes32 indexed,bytes32 indexed,uint256)"].decode(e);
                entities.push(
                    new File({
                        ...base,
                        ilkId: hexToBytes(decoded.ilkId),
                        what: hexToBytes(decoded.what),
                        dataUint: decoded.data
                    })
                );
            } else if (topic === balanceSheetEvents["File(bytes32 indexed,address)"].topic) {
                const { what, addr } = balanceSheetEvents["File(bytes32 indexed,address)"].decode(e);
                entities.push(new File({ ...base, what: hexToBytes(what), dataAddress: hexToBytes(addr) }));
            } else if (topic === liquidationTriggerEvents["File(bytes32 indexed,bytes32 indexed,address)"].topic) {
                const decoded = liquidationTriggerEvents["File(bytes32 indexed,bytes32 indexed,address)"].decode(e);
                entities.push(
                    new File({
                        ...base,
                        ilkId: hexToBytes(decoded.ilkId),
                        what: hexToBytes(decoded.what),
                        dataAddress: hexToBytes(decoded.addr)
                    })
                );
            }

            // Cage (ledger, converter and trigger share the argless topic; the adapter's
            // carries the ilk).
            else if (topic === vaultEngineEvents.Cage.topic) {
                entities.push(new Cage({ ...base }));
            } else if (topic === collateralAdapterEvents.Cage.topic) {
                const { ilkId } = collateralAdapterEvents.Cage.decode(e);
                entities.push(new Cage({ ...base, ilkId: hexToBytes(ilkId) }));
            }

            // VaultEngine.
            else if (topic === vaultEngineEvents.Hope.topic) {
                const { owner, operator } = vaultEngineEvents.Hope.decode(e);
                entities.push(new Hope({ ...base, owner: hexToBytes(owner), operator: hexToBytes(operator) }));
            } else if (topic === vaultEngineEvents.Nope.topic) {
                const { owner, operator } = vaultEngineEvents.Nope.decode(e);
                entities.push(new Nope({ ...base, owner: hexToBytes(owner), operator: hexToBytes(operator) }));
            } else if (topic === vaultEngineEvents.Init.topic) {
                const { ilkId } = vaultEngineEvents.Init.decode(e);
                entities.push(new Init({ ...base, ilkId: hexToBytes(ilkId) }));
            } else if (topic === collateralAdapterEvents.Init.topic) {
                const { ilkId, token } = collateralAdapterEvents.Init.decode(e);
                entities.push(new Init({ ...base, ilkId: hexToBytes(ilkId), token: hexToBytes(token) }));
            } else if (topic === vaultEngineEvents.Slip.topic) {
                const { ilkId, user, wad } = vaultEngineEvents.Slip.decode(e);
                entities.push(new Slip({ ...base, ilkId: hexToBytes(ilkId), user: hexToBytes(user), wad }));
            } else if (topic === vaultEngineEvents.Flux.topic) {
                const { ilkId, from, to, wad } = vaultEngineEvents.Flux.decode(e);
                entities.push(
                    new Flux({
                        ...base,
                        ilkId: hexToBytes(ilkId),
                        from: hexToBytes(from),
                        to: hexToBytes(to),
                        wad
                    })
                );
            } else if (topic === vaultEngineEvents.Move.topic) {
                const { from, to, rad } = vaultEngineEvents.Move.decode(e);
                entities.push(new Move({ ...base, from: hexToBytes(from), to: hexToBytes(to), rad }));
            } else if (topic === vaultEngineEvents.Frob.topic) {
                const { ilkId, u, v, w, dink, dart } = vaultEngineEvents.Frob.decode(e);
                entities.push(
                    new Frob({
                        ...base,
                        ilkId: hexToBytes(ilkId),
                        u: hexToBytes(u),
                        v: hexToBytes(v),
                        w: hexToBytes(w),
                        dink,
                        dart
                    })
                );
            } else if (topic === vaultEngineEvents.Grab.topic) {
                const { ilkId, u, v, w, dink, dart } = vaultEngineEvents.Grab.decode(e);
                entities.push(
                    new Grab({
                        ...base,
                        ilkId: hexToBytes(ilkId),
                        u: hexToBytes(u),
                        v: hexToBytes(v),
                        w: hexToBytes(w),
                        dink,
                        dart
                    })
                );
            } else if (topic === vaultEngineEvents.Heal.topic && e.address === vaultEngineAddress) {
                const { account, rad } = vaultEngineEvents.Heal.decode(e);
                entities.push(new VaultHeal({ ...base, account: hexToBytes(account), rad }));
            } else if (topic === vaultEngineEvents.Suck.topic && e.address === vaultEngineAddress) {
                const { u, v, rad } = vaultEngineEvents.Suck.decode(e);
                entities.push(new VaultSuck({ ...base, u: hexToBytes(u), v: hexToBytes(v), rad }));
            }

            // USDR.
            else if (topic === usdrEvents.Transfer.topic) {
                const { from, to, value } = usdrEvents.Transfer.decode(e);
                entities.push(new Transfer({ ...base, from: hexToBytes(from), to: hexToBytes(to), value }));
            }

            // CollateralAdapter.
            else if (topic === collateralAdapterEvents.Join.topic) {
                const { ilkId, user, amount } = collateralAdapterEvents.Join.decode(e);
                entities.push(new Join({ ...base, ilkId: hexToBytes(ilkId), user: hexToBytes(user), amount }));
            } else if (topic === collateralAdapterEvents.Exit.topic) {
                const { ilkId, user, amount } = collateralAdapterEvents.Exit.decode(e);
                entities.push(new Exit({ ...base, ilkId: hexToBytes(ilkId), user: hexToBytes(user), amount }));
            }

            // OracleSecurityModule.
            else if (topic === oracleSecurityModuleEvents.Stop.topic) {
                const { ilkId } = oracleSecurityModuleEvents.Stop.decode(e);
                entities.push(new Stop({ ...base, ilkId: hexToBytes(ilkId) }));
            } else if (topic === oracleSecurityModuleEvents.Start.topic) {
                const { ilkId } = oracleSecurityModuleEvents.Start.decode(e);
                entities.push(new Start({ ...base, ilkId: hexToBytes(ilkId) }));
            } else if (topic === oracleSecurityModuleEvents.Void.topic) {
                const { ilkId } = oracleSecurityModuleEvents.Void.decode(e);
                entities.push(new Void({ ...base, ilkId: hexToBytes(ilkId) }));
            } else if (topic === oracleSecurityModuleEvents.Change.topic) {
                const { ilkId, src } = oracleSecurityModuleEvents.Change.decode(e);
                entities.push(new Change({ ...base, ilkId: hexToBytes(ilkId), src: hexToBytes(src) }));
            } else if (topic === oracleSecurityModuleEvents.Kiss.topic) {
                const { account } = oracleSecurityModuleEvents.Kiss.decode(e);
                entities.push(new Kiss({ ...base, account: hexToBytes(account) }));
            } else if (topic === oracleSecurityModuleEvents.Diss.topic) {
                const { account } = oracleSecurityModuleEvents.Diss.decode(e);
                entities.push(new Diss({ ...base, account: hexToBytes(account) }));
            } else if (topic === oracleSecurityModuleEvents.Poke.topic) {
                const { ilkId, current, next } = oracleSecurityModuleEvents.Poke.decode(e);
                entities.push(new OsmPoke({ ...base, ilkId: hexToBytes(ilkId), current, next }));
            }

            // PriceConverter.
            else if (topic === priceConverterEvents.Poke.topic) {
                const { ilkId, val, spot } = priceConverterEvents.Poke.decode(e);
                entities.push(new SpotPoke({ ...base, ilkId: hexToBytes(ilkId), val: hexToBytes(val), spot }));
            }

            // PegStabilityModule.
            else if (topic === pegStabilityModuleEvents.SellStable.topic) {
                const { ilkId, user, stableAmt, usdrAmt } = pegStabilityModuleEvents.SellStable.decode(e);
                entities.push(
                    new SellStable({ ...base, ilkId: hexToBytes(ilkId), user: hexToBytes(user), stableAmt, usdrAmt })
                );
            } else if (topic === pegStabilityModuleEvents.BuyStable.topic) {
                const { ilkId, user, stableAmt, usdrAmt } = pegStabilityModuleEvents.BuyStable.decode(e);
                entities.push(
                    new BuyStable({ ...base, ilkId: hexToBytes(ilkId), user: hexToBytes(user), stableAmt, usdrAmt })
                );
            }

            // ReserveAccounting.
            else if (topic === reserveAccountingEvents.AddRecorder.topic) {
                const { account } = reserveAccountingEvents.AddRecorder.decode(e);
                entities.push(new AddRecorder({ ...base, account: hexToBytes(account) }));
            } else if (topic === reserveAccountingEvents.RemoveRecorder.topic) {
                const { account } = reserveAccountingEvents.RemoveRecorder.decode(e);
                entities.push(new RemoveRecorder({ ...base, account: hexToBytes(account) }));
            } else if (topic === reserveAccountingEvents.AddCommitter.topic) {
                const { account } = reserveAccountingEvents.AddCommitter.decode(e);
                entities.push(new AddCommitter({ ...base, account: hexToBytes(account) }));
            } else if (topic === reserveAccountingEvents.RemoveCommitter.topic) {
                const { account } = reserveAccountingEvents.RemoveCommitter.decode(e);
                entities.push(new RemoveCommitter({ ...base, account: hexToBytes(account) }));
            } else if (topic === reserveAccountingEvents.RecordIncrease.topic) {
                const { wad, totalReserve } = reserveAccountingEvents.RecordIncrease.decode(e);
                entities.push(new RecordIncrease({ ...base, wad, totalReserve }));
            } else if (topic === reserveAccountingEvents.RecordDecrease.topic) {
                const { wad, totalReserve } = reserveAccountingEvents.RecordDecrease.decode(e);
                entities.push(new RecordDecrease({ ...base, wad, totalReserve }));
            } else if (topic === reserveAccountingEvents.UpdateCommittedEscrow.topic) {
                const { wad, freeSlack } = reserveAccountingEvents.UpdateCommittedEscrow.decode(e);
                entities.push(new UpdateCommittedEscrow({ ...base, wad, freeSlack }));
            }

            // SolvencyEngine.
            else if (topic === solvencyEngineEvents.AddVolatileIlk.topic) {
                const { ilkId } = solvencyEngineEvents.AddVolatileIlk.decode(e);
                entities.push(new AddVolatileIlk({ ...base, ilkId: hexToBytes(ilkId) }));
            } else if (topic === solvencyEngineEvents.InvariantChecked.topic) {
                const { reserve, worstCaseLoss, passed } = solvencyEngineEvents.InvariantChecked.decode(e);
                entities.push(new InvariantChecked({ ...base, reserve, worstCaseLoss, passed }));
            }

            // BalanceSheet.
            else if (topic === balanceSheetEvents.Fess.topic) {
                const { tab } = balanceSheetEvents.Fess.decode(e);
                entities.push(new Fess({ ...base, tab }));
            } else if (topic === balanceSheetEvents.Heal.topic && e.address === balanceSheetAddress) {
                const { rad } = balanceSheetEvents.Heal.decode(e);
                entities.push(new BalanceSheetHeal({ ...base, rad }));
            } else if (topic === balanceSheetEvents.Suck.topic && e.address === balanceSheetAddress) {
                const { kpr, rad } = balanceSheetEvents.Suck.decode(e);
                entities.push(new BalanceSheetSuck({ ...base, kpr: hexToBytes(kpr), rad }));
            } else if (topic === balanceSheetEvents.DistributeSurplus.topic) {
                const { excess } = balanceSheetEvents.DistributeSurplus.decode(e);
                entities.push(new DistributeSurplus({ ...base, excess }));
            }

            // LiquidationTrigger.
            else if (topic === liquidationTriggerEvents.Bark.topic) {
                const { ilkId, urn, ink, art, due, clip, id } = liquidationTriggerEvents.Bark.decode(e);
                entities.push(
                    new Bark({
                        ...base,
                        ilkId: hexToBytes(ilkId),
                        urn: hexToBytes(urn),
                        ink,
                        art,
                        due,
                        clip: hexToBytes(clip),
                        auctionId: id
                    })
                );
            } else if (topic === liquidationTriggerEvents.Digs.topic) {
                const { ilkId, rad } = liquidationTriggerEvents.Digs.decode(e);
                entities.push(new Digs({ ...base, ilkId: hexToBytes(ilkId), rad }));
            }

            // DutchAuction.
            else if (topic === dutchAuctionEvents.Kick.topic) {
                const { id, top, tab, lot, usr, kpr, coin } = dutchAuctionEvents.Kick.decode(e);
                entities.push(
                    new Kick({
                        ...base,
                        auctionId: id,
                        top,
                        tab,
                        lot,
                        usr: hexToBytes(usr),
                        kpr: hexToBytes(kpr),
                        coin
                    })
                );
            } else if (topic === dutchAuctionEvents.Take.topic) {
                const { id, max, price, owe, tab, lot, usr } = dutchAuctionEvents.Take.decode(e);
                entities.push(new Take({ ...base, auctionId: id, max, price, owe, tab, lot, usr: hexToBytes(usr) }));
            } else if (topic === dutchAuctionEvents.Redo.topic) {
                const { id, top, tab, lot, usr, kpr, coin } = dutchAuctionEvents.Redo.decode(e);
                entities.push(
                    new Redo({
                        ...base,
                        auctionId: id,
                        top,
                        tab,
                        lot,
                        usr: hexToBytes(usr),
                        kpr: hexToBytes(kpr),
                        coin
                    })
                );
            } else if (topic === dutchAuctionEvents.Yank.topic) {
                const { id } = dutchAuctionEvents.Yank.decode(e);
                entities.push(new Yank({ ...base, auctionId: id }));
            }

            // CircuitBreaker.
            else if (topic === circuitBreakerEvents.Activated.topic) {
                const { deviation } = circuitBreakerEvents.Activated.decode(e);
                entities.push(new Activated({ ...base, deviation }));
            } else if (topic === circuitBreakerEvents.Deactivated.topic) {
                entities.push(new Deactivated({ ...base }));
            } else if (topic === circuitBreakerEvents.Checked.topic) {
                const { deviation, active } = circuitBreakerEvents.Checked.decode(e);
                entities.push(new Checked({ ...base, deviation, active }));
            }

            // Governor.
            else if (topic === governorEvents.Schedule.topic) {
                const { id, target, data, eta } = governorEvents.Schedule.decode(e);
                entities.push(
                    new Schedule({
                        ...base,
                        actionId: id,
                        target: hexToBytes(target),
                        data: hexToBytes(data),
                        eta
                    })
                );
            } else if (topic === governorEvents.Execute.topic) {
                const { id } = governorEvents.Execute.decode(e);
                entities.push(new Execute({ ...base, actionId: id }));
            } else if (topic === governorEvents.Cancel.topic) {
                const { id } = governorEvents.Cancel.decode(e);
                entities.push(new Cancel({ ...base, actionId: id }));
            } else if (topic === governorEvents.Pause.topic) {
                const { scope, pausedAt } = governorEvents.Pause.decode(e);
                entities.push(new Pause({ ...base, scope: hexToBytes(scope), pausedAt }));
            } else if (topic === governorEvents.Unpause.topic) {
                entities.push(new Unpause({ ...base }));
            }
        }
    }

    // Grouping by constructor so each entity type is inserted in a single batch.
    const byType = new Map<Function, any[]>();
    for (const entity of entities) {
        const bucket = byType.get(entity.constructor) ?? [];
        bucket.push(entity);
        byType.set(entity.constructor, bucket);
    }
    for (const [, bucket] of byType) {
        await ctx.store.insert(bucket);
    }
});
