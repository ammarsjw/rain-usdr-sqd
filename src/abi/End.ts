import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Cage: event("0x2308ed18a14e800c39b86eb6ea43270105955ca385b603b64eca89f98ae8fbda", "Cage()", {}),
    CageIlk: event("0xc5641fcf8aa82f718f3abb5b236de4eb3cec8e1473ade7faf2ec6b515a6df3c4", "CageIlk(bytes32,uint256,uint256)", {"ilkId": indexed(p.bytes32), "tag": p.uint256, "art": p.uint256}),
    Cash: event("0xb0427ab31ef341ab40829cdb3181c4ad669757d542a403c5eb23abd0936e6592", "Cash(bytes32,address,uint256,uint256)", {"ilkId": indexed(p.bytes32), "usr": indexed(p.address), "wad": p.uint256, "ink": p.uint256}),
    'File(bytes32 indexed,uint256)': event("0xe986e40cc8c151830d4f61050f4fb2e4add8567caad2d5f5496f9158e91fe4c7", "File(bytes32,uint256)", {"what": indexed(p.bytes32), "data": p.uint256}),
    'File(bytes32 indexed,address)': event("0x8fef588b5fc1afbf5b2f06c1a435d513f208da2e6704c3d8f0e0ec91167066ba", "File(bytes32,address)", {"what": indexed(p.bytes32), "addr": p.address}),
    Flow: event("0xcaa94cd06e4b9af0aa88e83202a7334360770cbf3469e3da1cbaf86d095bf09e", "Flow(bytes32,uint256)", {"ilkId": indexed(p.bytes32), "fix": p.uint256}),
    Free: event("0x4ebe103f84f84654c8d039ee6d5ea841e809ca8b93de2198fe79c4d1bca36581", "Free(bytes32,uint256,address,uint256)", {"ilkId": indexed(p.bytes32), "vaultId": indexed(p.uint256), "owner": indexed(p.address), "ink": p.uint256}),
    Pack: event("0x47a981d8cbc0f6df64c9be4ce0a423071a088bd46c549bbd11a4d566e031fe0c", "Pack(address,uint256)", {"usr": indexed(p.address), "wad": p.uint256}),
    RoleAdminChanged: event("0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff", "RoleAdminChanged(bytes32,bytes32,bytes32)", {"role": indexed(p.bytes32), "previousAdminRole": indexed(p.bytes32), "newAdminRole": indexed(p.bytes32)}),
    RoleGranted: event("0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d", "RoleGranted(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    RoleRevoked: event("0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b", "RoleRevoked(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    Skim: event("0x293a0ac08b820abfdd6cd73dfee6e8bc1fe58e9384b6bf89c66b6dfc04f8110e", "Skim(bytes32,uint256,uint256,uint256)", {"ilkId": indexed(p.bytes32), "vaultId": indexed(p.uint256), "wad": p.uint256, "art": p.uint256}),
    Skip: event("0xf3af7a34755c7569babe67da2b9a7c42a2631f9097638bfe105f20abf3f40dcc", "Skip(bytes32,uint256,uint256,uint256,uint256)", {"ilkId": indexed(p.bytes32), "auctionId": indexed(p.uint256), "vaultId": indexed(p.uint256), "lot": p.uint256, "art": p.uint256}),
    Thaw: event("0x1d80c08fcaae77e805a6ea398f9bf4a855c663cfee51ccdf7144f627019190e7", "Thaw(uint256)", {"debt": p.uint256}),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: viewFun("0xa217fddf", "DEFAULT_ADMIN_ROLE()", {}, p.bytes32),
    VAULT_ENGINE: viewFun("0xfc0f6fd2", "VAULT_ENGINE()", {}, p.address),
    art: viewFun("0xf4df0361", "art(bytes32)", {"ilkId": p.bytes32}, p.uint256),
    bag: viewFun("0x9255f809", "bag(address)", {"usr": p.address}, p.uint256),
    balanceSheet: viewFun("0x22285cf6", "balanceSheet()", {}, p.address),
    'cage()': fun("0x69245009", "cage()", {}, ),
    'cage(bytes32)': fun("0xe2702fdc", "cage(bytes32)", {"ilkId": p.bytes32}, ),
    cash: fun("0xfe8507c6", "cash(bytes32,uint256)", {"ilkId": p.bytes32, "wad": p.uint256}, ),
    debt: viewFun("0x0dca59c1", "debt()", {}, p.uint256),
    'file(bytes32,uint256)': fun("0x29ae8114", "file(bytes32,uint256)", {"what": p.bytes32, "data": p.uint256}, ),
    'file(bytes32,address)': fun("0xd4e8be83", "file(bytes32,address)", {"what": p.bytes32, "data": p.address}, ),
    fix: viewFun("0x63fad85e", "fix(bytes32)", {"ilkId": p.bytes32}, p.uint256),
    flow: fun("0x4a10eaa6", "flow(bytes32)", {"ilkId": p.bytes32}, ),
    free: fun("0xd8ccd0f3", "free(uint256)", {"vaultId": p.uint256}, ),
    gap: viewFun("0xe6ee62aa", "gap(bytes32)", {"ilkId": p.bytes32}, p.uint256),
    getRoleAdmin: viewFun("0x248a9ca3", "getRoleAdmin(bytes32)", {"role": p.bytes32}, p.bytes32),
    grantRole: fun("0x2f2ff15d", "grantRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    hasRole: viewFun("0x91d14854", "hasRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, p.bool),
    liquidationTrigger: viewFun("0xfe7532fd", "liquidationTrigger()", {}, p.address),
    live: viewFun("0x957aa58c", "live()", {}, p.uint256),
    out: viewFun("0xc939ebfc", "out(bytes32,address)", {"ilkId": p.bytes32, "usr": p.address}, p.uint256),
    pack: fun("0x6ea42555", "pack(uint256)", {"wad": p.uint256}, ),
    priceConverter: viewFun("0xb9385510", "priceConverter()", {}, p.address),
    renounceRole: fun("0x36568abe", "renounceRole(bytes32,address)", {"role": p.bytes32, "callerConfirmation": p.address}, ),
    revokeRole: fun("0xd547741f", "revokeRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    skim: fun("0x6939aaf5", "skim(uint256)", {"vaultId": p.uint256}, ),
    skip: fun("0x503ecf06", "skip(bytes32,uint256)", {"ilkId": p.bytes32, "auctionId": p.uint256}, ),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    tag: viewFun("0xee6447b5", "tag(bytes32)", {"ilkId": p.bytes32}, p.uint256),
    thaw: fun("0x5920375c", "thaw()", {}, ),
    wait: viewFun("0x64bd7013", "wait()", {}, p.uint256),
    when: viewFun("0xe2b0caef", "when()", {}, p.uint256),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE() {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, {})
    }

    VAULT_ENGINE() {
        return this.eth_call(functions.VAULT_ENGINE, {})
    }

    art(ilkId: ArtParams["ilkId"]) {
        return this.eth_call(functions.art, {ilkId})
    }

    bag(usr: BagParams["usr"]) {
        return this.eth_call(functions.bag, {usr})
    }

    balanceSheet() {
        return this.eth_call(functions.balanceSheet, {})
    }

    debt() {
        return this.eth_call(functions.debt, {})
    }

    fix(ilkId: FixParams["ilkId"]) {
        return this.eth_call(functions.fix, {ilkId})
    }

    gap(ilkId: GapParams["ilkId"]) {
        return this.eth_call(functions.gap, {ilkId})
    }

    getRoleAdmin(role: GetRoleAdminParams["role"]) {
        return this.eth_call(functions.getRoleAdmin, {role})
    }

    hasRole(role: HasRoleParams["role"], account: HasRoleParams["account"]) {
        return this.eth_call(functions.hasRole, {role, account})
    }

    liquidationTrigger() {
        return this.eth_call(functions.liquidationTrigger, {})
    }

    live() {
        return this.eth_call(functions.live, {})
    }

    out(ilkId: OutParams["ilkId"], usr: OutParams["usr"]) {
        return this.eth_call(functions.out, {ilkId, usr})
    }

    priceConverter() {
        return this.eth_call(functions.priceConverter, {})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }

    tag(ilkId: TagParams["ilkId"]) {
        return this.eth_call(functions.tag, {ilkId})
    }

    wait() {
        return this.eth_call(functions.wait, {})
    }

    when() {
        return this.eth_call(functions.when, {})
    }
}

/// Event types
export type CageEventArgs = EParams<typeof events.Cage>
export type CageIlkEventArgs = EParams<typeof events.CageIlk>
export type CashEventArgs = EParams<typeof events.Cash>
export type FileEventArgs_0 = EParams<typeof events['File(bytes32 indexed,uint256)']>
export type FileEventArgs_1 = EParams<typeof events['File(bytes32 indexed,address)']>
export type FlowEventArgs = EParams<typeof events.Flow>
export type FreeEventArgs = EParams<typeof events.Free>
export type PackEventArgs = EParams<typeof events.Pack>
export type RoleAdminChangedEventArgs = EParams<typeof events.RoleAdminChanged>
export type RoleGrantedEventArgs = EParams<typeof events.RoleGranted>
export type RoleRevokedEventArgs = EParams<typeof events.RoleRevoked>
export type SkimEventArgs = EParams<typeof events.Skim>
export type SkipEventArgs = EParams<typeof events.Skip>
export type ThawEventArgs = EParams<typeof events.Thaw>

/// Function types
export type DEFAULT_ADMIN_ROLEParams = FunctionArguments<typeof functions.DEFAULT_ADMIN_ROLE>
export type DEFAULT_ADMIN_ROLEReturn = FunctionReturn<typeof functions.DEFAULT_ADMIN_ROLE>

export type VAULT_ENGINEParams = FunctionArguments<typeof functions.VAULT_ENGINE>
export type VAULT_ENGINEReturn = FunctionReturn<typeof functions.VAULT_ENGINE>

export type ArtParams = FunctionArguments<typeof functions.art>
export type ArtReturn = FunctionReturn<typeof functions.art>

export type BagParams = FunctionArguments<typeof functions.bag>
export type BagReturn = FunctionReturn<typeof functions.bag>

export type BalanceSheetParams = FunctionArguments<typeof functions.balanceSheet>
export type BalanceSheetReturn = FunctionReturn<typeof functions.balanceSheet>

export type CageParams_0 = FunctionArguments<typeof functions['cage()']>
export type CageReturn_0 = FunctionReturn<typeof functions['cage()']>

export type CageParams_1 = FunctionArguments<typeof functions['cage(bytes32)']>
export type CageReturn_1 = FunctionReturn<typeof functions['cage(bytes32)']>

export type CashParams = FunctionArguments<typeof functions.cash>
export type CashReturn = FunctionReturn<typeof functions.cash>

export type DebtParams = FunctionArguments<typeof functions.debt>
export type DebtReturn = FunctionReturn<typeof functions.debt>

export type FileParams_0 = FunctionArguments<typeof functions['file(bytes32,uint256)']>
export type FileReturn_0 = FunctionReturn<typeof functions['file(bytes32,uint256)']>

export type FileParams_1 = FunctionArguments<typeof functions['file(bytes32,address)']>
export type FileReturn_1 = FunctionReturn<typeof functions['file(bytes32,address)']>

export type FixParams = FunctionArguments<typeof functions.fix>
export type FixReturn = FunctionReturn<typeof functions.fix>

export type FlowParams = FunctionArguments<typeof functions.flow>
export type FlowReturn = FunctionReturn<typeof functions.flow>

export type FreeParams = FunctionArguments<typeof functions.free>
export type FreeReturn = FunctionReturn<typeof functions.free>

export type GapParams = FunctionArguments<typeof functions.gap>
export type GapReturn = FunctionReturn<typeof functions.gap>

export type GetRoleAdminParams = FunctionArguments<typeof functions.getRoleAdmin>
export type GetRoleAdminReturn = FunctionReturn<typeof functions.getRoleAdmin>

export type GrantRoleParams = FunctionArguments<typeof functions.grantRole>
export type GrantRoleReturn = FunctionReturn<typeof functions.grantRole>

export type HasRoleParams = FunctionArguments<typeof functions.hasRole>
export type HasRoleReturn = FunctionReturn<typeof functions.hasRole>

export type LiquidationTriggerParams = FunctionArguments<typeof functions.liquidationTrigger>
export type LiquidationTriggerReturn = FunctionReturn<typeof functions.liquidationTrigger>

export type LiveParams = FunctionArguments<typeof functions.live>
export type LiveReturn = FunctionReturn<typeof functions.live>

export type OutParams = FunctionArguments<typeof functions.out>
export type OutReturn = FunctionReturn<typeof functions.out>

export type PackParams = FunctionArguments<typeof functions.pack>
export type PackReturn = FunctionReturn<typeof functions.pack>

export type PriceConverterParams = FunctionArguments<typeof functions.priceConverter>
export type PriceConverterReturn = FunctionReturn<typeof functions.priceConverter>

export type RenounceRoleParams = FunctionArguments<typeof functions.renounceRole>
export type RenounceRoleReturn = FunctionReturn<typeof functions.renounceRole>

export type RevokeRoleParams = FunctionArguments<typeof functions.revokeRole>
export type RevokeRoleReturn = FunctionReturn<typeof functions.revokeRole>

export type SkimParams = FunctionArguments<typeof functions.skim>
export type SkimReturn = FunctionReturn<typeof functions.skim>

export type SkipParams = FunctionArguments<typeof functions.skip>
export type SkipReturn = FunctionReturn<typeof functions.skip>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type TagParams = FunctionArguments<typeof functions.tag>
export type TagReturn = FunctionReturn<typeof functions.tag>

export type ThawParams = FunctionArguments<typeof functions.thaw>
export type ThawReturn = FunctionReturn<typeof functions.thaw>

export type WaitParams = FunctionArguments<typeof functions.wait>
export type WaitReturn = FunctionReturn<typeof functions.wait>

export type WhenParams = FunctionArguments<typeof functions.when>
export type WhenReturn = FunctionReturn<typeof functions.when>

