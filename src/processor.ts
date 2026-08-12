import { EvmBatchProcessor } from "@subsquid/evm-processor";

import { events as balanceSheetEvents } from "./abi/BalanceSheet";
import { events as circuitBreakerEvents } from "./abi/CircuitBreaker";
import { events as collateralAdapterEvents } from "./abi/CollateralAdapter";
import { events as dutchAuctionEvents } from "./abi/DutchAuction";
import { events as governorEvents } from "./abi/Governor";
import { events as liquidationTriggerEvents } from "./abi/LiquidationTrigger";
import { events as oracleSecurityModuleEvents } from "./abi/OracleSecurityModule";
import { events as pegStabilityModuleEvents } from "./abi/PegStabilityModule";
import { events as priceConverterEvents } from "./abi/PriceConverter";
import { events as priceCurveEvents } from "./abi/PriceCurve";
import { events as reserveAccountingEvents } from "./abi/ReserveAccounting";
import { events as solvencyEngineEvents } from "./abi/SolvencyEngine";
import { events as usdrEvents } from "./abi/USDR";
import { events as vaultEngineEvents } from "./abi/VaultEngine";
import { START_BLOCK } from "./config/deployments";

import { contractAddresses } from "./contracts";

const gateway = process.env.GATEWAY!;
const sqdApiKey = process.env.SQD_API_KEY;
const rpcEndpoint = process.env.RPC_HTTP!;
const rateLimit = Number(process.env.RATE_LIMIT);

const startBlock = Number(START_BLOCK);

export const processor = new EvmBatchProcessor()
    .setGateway({
        url: gateway,
        apiKey: sqdApiKey
    })
    .setRpcEndpoint({
        url: rpcEndpoint,
        rateLimit: rateLimit
    })
    .setBlockRange({ from: startBlock })
    .setFinalityConfirmation(10)
    .addLog({
        address: contractAddresses,
        transaction: true,
        transactionLogs: true,
        topic0: [
            // Access control (shared by all privileged contracts).
            vaultEngineEvents.RoleGranted.topic,
            vaultEngineEvents.RoleRevoked.topic,
            vaultEngineEvents.RoleAdminChanged.topic,
            // File overloads (topics shared across the system).
            vaultEngineEvents["File(bytes32 indexed,uint256)"].topic,
            vaultEngineEvents["File(bytes32 indexed,bytes32 indexed,uint256)"].topic,
            balanceSheetEvents["File(bytes32 indexed,address)"].topic,
            liquidationTriggerEvents["File(bytes32 indexed,bytes32 indexed,address)"].topic,
            priceConverterEvents["File(bytes32 indexed,bytes32 indexed,address)"].topic,
            // VaultEngine.
            vaultEngineEvents.Hope.topic,
            vaultEngineEvents.Nope.topic,
            vaultEngineEvents.Init.topic,
            vaultEngineEvents.Cage.topic,
            collateralAdapterEvents.Init.topic,
            collateralAdapterEvents.Cage.topic,
            vaultEngineEvents.Slip.topic,
            vaultEngineEvents.Flux.topic,
            vaultEngineEvents.Move.topic,
            vaultEngineEvents.Frob.topic,
            vaultEngineEvents.Grab.topic,
            vaultEngineEvents.Heal.topic,
            vaultEngineEvents.Suck.topic,
            // USDR.
            usdrEvents.Transfer.topic,
            // CollateralAdapter.
            collateralAdapterEvents.Join.topic,
            collateralAdapterEvents.Exit.topic,
            // OracleSecurityModule.
            oracleSecurityModuleEvents.Stop.topic,
            oracleSecurityModuleEvents.Start.topic,
            oracleSecurityModuleEvents.Void.topic,
            oracleSecurityModuleEvents.Change.topic,
            oracleSecurityModuleEvents.Poke.topic,
            // PriceConverter.
            priceConverterEvents.Poke.topic,
            // PegStabilityModule (Init/File topics shared with the adapter/system File above).
            pegStabilityModuleEvents.SellStable.topic,
            pegStabilityModuleEvents.BuyStable.topic,
            // ReserveAccounting.
            reserveAccountingEvents.RecordIncrease.topic,
            reserveAccountingEvents.RecordDecrease.topic,
            reserveAccountingEvents.UpdateCommittedEscrow.topic,
            // SolvencyEngine.
            solvencyEngineEvents.AddVolatileIlk.topic,
            solvencyEngineEvents.InvariantChecked.topic,
            // BalanceSheet.
            balanceSheetEvents.Fess.topic,
            balanceSheetEvents.Heal.topic,
            balanceSheetEvents.Suck.topic,
            balanceSheetEvents.DistributeSurplus.topic,
            // LiquidationTrigger.
            liquidationTriggerEvents.Bark.topic,
            liquidationTriggerEvents.Digs.topic,
            // DutchAuction.
            dutchAuctionEvents.Kick.topic,
            dutchAuctionEvents.Take.topic,
            dutchAuctionEvents.Redo.topic,
            dutchAuctionEvents.Yank.topic,
            // CircuitBreaker.
            circuitBreakerEvents.Activated.topic,
            circuitBreakerEvents.Deactivated.topic,
            circuitBreakerEvents.Checked.topic,
            // Governor.
            governorEvents.Schedule.topic,
            governorEvents.Execute.topic,
            governorEvents.Cancel.topic,
            governorEvents.Pause.topic,
            governorEvents.Unpause.topic
        ]
    });

// PriceCurve only emits File(bytes32,uint256), whose topic is already included above.
void priceCurveEvents;
