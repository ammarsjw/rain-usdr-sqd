import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Cage: event("0x2308ed18a14e800c39b86eb6ea43270105955ca385b603b64eca89f98ae8fbda", "Cage()", {}),
    'File(bytes32 indexed,uint256)': event("0xe986e40cc8c151830d4f61050f4fb2e4add8567caad2d5f5496f9158e91fe4c7", "File(bytes32,uint256)", {"what": indexed(p.bytes32), "data": p.uint256}),
    'File(bytes32 indexed,bytes32 indexed,uint256)': event("0x851aa1caf4888170ad8875449d18f0f512fd6deb2a6571ea1a41fb9f95acbcd1", "File(bytes32,bytes32,uint256)", {"ilkId": indexed(p.bytes32), "what": indexed(p.bytes32), "data": p.uint256}),
    'File(bytes32 indexed,address)': event("0x8fef588b5fc1afbf5b2f06c1a435d513f208da2e6704c3d8f0e0ec91167066ba", "File(bytes32,address)", {"what": indexed(p.bytes32), "addr": p.address}),
    Kick: event("0x8df3b52e5b69166eef74c6f57b6e30c0124414594725814b6c354d3afaa0166e", "Kick(uint256,bytes32,uint256,uint256,uint256,uint256,address,address,uint256)", {"id": indexed(p.uint256), "ilkId": indexed(p.bytes32), "top": p.uint256, "tab": p.uint256, "lot": p.uint256, "vaultId": p.uint256, "usr": p.address, "kpr": indexed(p.address), "coin": p.uint256}),
    Redo: event("0xc5279254d8a0c2faceb2c305cf779a5ec90f95352895df1c631aedded66621a7", "Redo(uint256,bytes32,uint256,uint256,uint256,address,address,uint256)", {"id": indexed(p.uint256), "ilkId": indexed(p.bytes32), "top": p.uint256, "tab": p.uint256, "lot": p.uint256, "usr": p.address, "kpr": indexed(p.address), "coin": p.uint256}),
    RoleAdminChanged: event("0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff", "RoleAdminChanged(bytes32,bytes32,bytes32)", {"role": indexed(p.bytes32), "previousAdminRole": indexed(p.bytes32), "newAdminRole": indexed(p.bytes32)}),
    RoleGranted: event("0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d", "RoleGranted(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    RoleRevoked: event("0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b", "RoleRevoked(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    Take: event("0x8b01e19fed83797f051319aa8d46968bf35c7aaeb5053f89e4e449c373327c98", "Take(uint256,bytes32,uint256,uint256,uint256,uint256,uint256,address)", {"id": indexed(p.uint256), "ilkId": indexed(p.bytes32), "max": p.uint256, "price": p.uint256, "owe": p.uint256, "tab": p.uint256, "lot": p.uint256, "usr": indexed(p.address)}),
    Upchost: event("0x131272119b93f2c8348150d0aa7f5f7ed52b0355f56b3af56bd2e3266c8a8851", "Upchost(bytes32,uint256)", {"ilkId": indexed(p.bytes32), "chost": p.uint256}),
    Yank: event("0x2c5d2826eb5903b8fc201cf48094b858f42f61c7eaac9aaf43ebed490138144e", "Yank(uint256)", {"id": indexed(p.uint256)}),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: viewFun("0xa217fddf", "DEFAULT_ADMIN_ROLE()", {}, p.bytes32),
    VAULT_ENGINE: viewFun("0xfc0f6fd2", "VAULT_ENGINE()", {}, p.address),
    active: viewFun("0x8033d581", "active(uint256)", {"_0": p.uint256}, p.uint256),
    balanceSheet: viewFun("0x22285cf6", "balanceSheet()", {}, p.address),
    cage: fun("0x69245009", "cage()", {}, ),
    chip: viewFun("0xb61500e4", "chip()", {}, p.uint64),
    count: viewFun("0x06661abd", "count()", {}, p.uint256),
    'file(bytes32,bytes32,uint256)': fun("0x1a0b287e", "file(bytes32,bytes32,uint256)", {"ilkId": p.bytes32, "what": p.bytes32, "data": p.uint256}, ),
    'file(bytes32,uint256)': fun("0x29ae8114", "file(bytes32,uint256)", {"what": p.bytes32, "data": p.uint256}, ),
    'file(bytes32,address)': fun("0xd4e8be83", "file(bytes32,address)", {"what": p.bytes32, "data": p.address}, ),
    getRoleAdmin: viewFun("0x248a9ca3", "getRoleAdmin(bytes32)", {"role": p.bytes32}, p.bytes32),
    getStatus: viewFun("0x5c622a0e", "getStatus(uint256)", {"id": p.uint256}, {"needsRedo": p.bool, "price": p.uint256, "lot": p.uint256, "tab": p.uint256}),
    governor: viewFun("0x0c340a24", "governor()", {}, p.address),
    grantRole: fun("0x2f2ff15d", "grantRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    hasRole: viewFun("0x91d14854", "hasRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, p.bool),
    ilks: viewFun("0xd9638d36", "ilks(bytes32)", {"ilkId": p.bytes32}, {"buf": p.uint256, "tail": p.uint256, "cusp": p.uint256, "chost": p.uint256}),
    kick: fun("0x9cc52572", "kick(bytes32,uint256,uint256,uint256,address,address)", {"ilkId": p.bytes32, "tab": p.uint256, "lot": p.uint256, "vaultId": p.uint256, "usr": p.address, "kpr": p.address}, p.uint256),
    kicks: viewFun("0xcfdd3302", "kicks()", {}, p.uint256),
    liquidationTrigger: viewFun("0xfe7532fd", "liquidationTrigger()", {}, p.address),
    'list()': viewFun("0x0f560cd7", "list()", {}, p.array(p.uint256)),
    'list(bytes32)': viewFun("0x13d49a8b", "list(bytes32)", {"ilkId": p.bytes32}, p.array(p.uint256)),
    live: viewFun("0x957aa58c", "live()", {}, p.uint256),
    oracleSecurityModule: viewFun("0xabee5462", "oracleSecurityModule()", {}, p.address),
    priceCurve: viewFun("0x7de1d164", "priceCurve()", {}, p.address),
    redo: fun("0xd843416d", "redo(uint256,address)", {"id": p.uint256, "kpr": p.address}, ),
    renounceRole: fun("0x36568abe", "renounceRole(bytes32,address)", {"role": p.bytes32, "callerConfirmation": p.address}, ),
    revokeRole: fun("0xd547741f", "revokeRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    sales: viewFun("0xb5f522f7", "sales(uint256)", {"id": p.uint256}, {"ilkId": p.bytes32, "pos": p.uint256, "tab": p.uint256, "lot": p.uint256, "vaultId": p.uint256, "usr": p.address, "tic": p.uint96, "top": p.uint256}),
    stopped: viewFun("0x75f12b21", "stopped()", {}, p.uint256),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    take: fun("0x81a794cb", "take(uint256,uint256,uint256,address,bytes)", {"id": p.uint256, "amt": p.uint256, "max": p.uint256, "who": p.address, "data": p.bytes}, ),
    tip: viewFun("0x2755cd2d", "tip()", {}, p.uint192),
    upchost: fun("0xa51a2113", "upchost(bytes32)", {"ilkId": p.bytes32}, ),
    yank: fun("0x26e027f1", "yank(uint256)", {"id": p.uint256}, ),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE() {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, {})
    }

    VAULT_ENGINE() {
        return this.eth_call(functions.VAULT_ENGINE, {})
    }

    active(_0: ActiveParams["_0"]) {
        return this.eth_call(functions.active, {_0})
    }

    balanceSheet() {
        return this.eth_call(functions.balanceSheet, {})
    }

    chip() {
        return this.eth_call(functions.chip, {})
    }

    count() {
        return this.eth_call(functions.count, {})
    }

    getRoleAdmin(role: GetRoleAdminParams["role"]) {
        return this.eth_call(functions.getRoleAdmin, {role})
    }

    getStatus(id: GetStatusParams["id"]) {
        return this.eth_call(functions.getStatus, {id})
    }

    governor() {
        return this.eth_call(functions.governor, {})
    }

    hasRole(role: HasRoleParams["role"], account: HasRoleParams["account"]) {
        return this.eth_call(functions.hasRole, {role, account})
    }

    ilks(ilkId: IlksParams["ilkId"]) {
        return this.eth_call(functions.ilks, {ilkId})
    }

    kicks() {
        return this.eth_call(functions.kicks, {})
    }

    liquidationTrigger() {
        return this.eth_call(functions.liquidationTrigger, {})
    }

    'list()'() {
        return this.eth_call(functions['list()'], {})
    }

    'list(bytes32)'(ilkId: ListParams_1["ilkId"]) {
        return this.eth_call(functions['list(bytes32)'], {ilkId})
    }

    live() {
        return this.eth_call(functions.live, {})
    }

    oracleSecurityModule() {
        return this.eth_call(functions.oracleSecurityModule, {})
    }

    priceCurve() {
        return this.eth_call(functions.priceCurve, {})
    }

    sales(id: SalesParams["id"]) {
        return this.eth_call(functions.sales, {id})
    }

    stopped() {
        return this.eth_call(functions.stopped, {})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }

    tip() {
        return this.eth_call(functions.tip, {})
    }
}

/// Event types
export type CageEventArgs = EParams<typeof events.Cage>
export type FileEventArgs_0 = EParams<typeof events['File(bytes32 indexed,uint256)']>
export type FileEventArgs_1 = EParams<typeof events['File(bytes32 indexed,bytes32 indexed,uint256)']>
export type FileEventArgs_2 = EParams<typeof events['File(bytes32 indexed,address)']>
export type KickEventArgs = EParams<typeof events.Kick>
export type RedoEventArgs = EParams<typeof events.Redo>
export type RoleAdminChangedEventArgs = EParams<typeof events.RoleAdminChanged>
export type RoleGrantedEventArgs = EParams<typeof events.RoleGranted>
export type RoleRevokedEventArgs = EParams<typeof events.RoleRevoked>
export type TakeEventArgs = EParams<typeof events.Take>
export type UpchostEventArgs = EParams<typeof events.Upchost>
export type YankEventArgs = EParams<typeof events.Yank>

/// Function types
export type DEFAULT_ADMIN_ROLEParams = FunctionArguments<typeof functions.DEFAULT_ADMIN_ROLE>
export type DEFAULT_ADMIN_ROLEReturn = FunctionReturn<typeof functions.DEFAULT_ADMIN_ROLE>

export type VAULT_ENGINEParams = FunctionArguments<typeof functions.VAULT_ENGINE>
export type VAULT_ENGINEReturn = FunctionReturn<typeof functions.VAULT_ENGINE>

export type ActiveParams = FunctionArguments<typeof functions.active>
export type ActiveReturn = FunctionReturn<typeof functions.active>

export type BalanceSheetParams = FunctionArguments<typeof functions.balanceSheet>
export type BalanceSheetReturn = FunctionReturn<typeof functions.balanceSheet>

export type CageParams = FunctionArguments<typeof functions.cage>
export type CageReturn = FunctionReturn<typeof functions.cage>

export type ChipParams = FunctionArguments<typeof functions.chip>
export type ChipReturn = FunctionReturn<typeof functions.chip>

export type CountParams = FunctionArguments<typeof functions.count>
export type CountReturn = FunctionReturn<typeof functions.count>

export type FileParams_0 = FunctionArguments<typeof functions['file(bytes32,bytes32,uint256)']>
export type FileReturn_0 = FunctionReturn<typeof functions['file(bytes32,bytes32,uint256)']>

export type FileParams_1 = FunctionArguments<typeof functions['file(bytes32,uint256)']>
export type FileReturn_1 = FunctionReturn<typeof functions['file(bytes32,uint256)']>

export type FileParams_2 = FunctionArguments<typeof functions['file(bytes32,address)']>
export type FileReturn_2 = FunctionReturn<typeof functions['file(bytes32,address)']>

export type GetRoleAdminParams = FunctionArguments<typeof functions.getRoleAdmin>
export type GetRoleAdminReturn = FunctionReturn<typeof functions.getRoleAdmin>

export type GetStatusParams = FunctionArguments<typeof functions.getStatus>
export type GetStatusReturn = FunctionReturn<typeof functions.getStatus>

export type GovernorParams = FunctionArguments<typeof functions.governor>
export type GovernorReturn = FunctionReturn<typeof functions.governor>

export type GrantRoleParams = FunctionArguments<typeof functions.grantRole>
export type GrantRoleReturn = FunctionReturn<typeof functions.grantRole>

export type HasRoleParams = FunctionArguments<typeof functions.hasRole>
export type HasRoleReturn = FunctionReturn<typeof functions.hasRole>

export type IlksParams = FunctionArguments<typeof functions.ilks>
export type IlksReturn = FunctionReturn<typeof functions.ilks>

export type KickParams = FunctionArguments<typeof functions.kick>
export type KickReturn = FunctionReturn<typeof functions.kick>

export type KicksParams = FunctionArguments<typeof functions.kicks>
export type KicksReturn = FunctionReturn<typeof functions.kicks>

export type LiquidationTriggerParams = FunctionArguments<typeof functions.liquidationTrigger>
export type LiquidationTriggerReturn = FunctionReturn<typeof functions.liquidationTrigger>

export type ListParams_0 = FunctionArguments<typeof functions['list()']>
export type ListReturn_0 = FunctionReturn<typeof functions['list()']>

export type ListParams_1 = FunctionArguments<typeof functions['list(bytes32)']>
export type ListReturn_1 = FunctionReturn<typeof functions['list(bytes32)']>

export type LiveParams = FunctionArguments<typeof functions.live>
export type LiveReturn = FunctionReturn<typeof functions.live>

export type OracleSecurityModuleParams = FunctionArguments<typeof functions.oracleSecurityModule>
export type OracleSecurityModuleReturn = FunctionReturn<typeof functions.oracleSecurityModule>

export type PriceCurveParams = FunctionArguments<typeof functions.priceCurve>
export type PriceCurveReturn = FunctionReturn<typeof functions.priceCurve>

export type RedoParams = FunctionArguments<typeof functions.redo>
export type RedoReturn = FunctionReturn<typeof functions.redo>

export type RenounceRoleParams = FunctionArguments<typeof functions.renounceRole>
export type RenounceRoleReturn = FunctionReturn<typeof functions.renounceRole>

export type RevokeRoleParams = FunctionArguments<typeof functions.revokeRole>
export type RevokeRoleReturn = FunctionReturn<typeof functions.revokeRole>

export type SalesParams = FunctionArguments<typeof functions.sales>
export type SalesReturn = FunctionReturn<typeof functions.sales>

export type StoppedParams = FunctionArguments<typeof functions.stopped>
export type StoppedReturn = FunctionReturn<typeof functions.stopped>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type TakeParams = FunctionArguments<typeof functions.take>
export type TakeReturn = FunctionReturn<typeof functions.take>

export type TipParams = FunctionArguments<typeof functions.tip>
export type TipReturn = FunctionReturn<typeof functions.tip>

export type UpchostParams = FunctionArguments<typeof functions.upchost>
export type UpchostReturn = FunctionReturn<typeof functions.upchost>

export type YankParams = FunctionArguments<typeof functions.yank>
export type YankReturn = FunctionReturn<typeof functions.yank>

