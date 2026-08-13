import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    BuyStable: event("0xa3ea69919a75724d1e4530d72df75b1fa04eaf370f8262bfef97133a5e75167e", "BuyStable(bytes32,address,uint256,uint256)", {"ilkId": indexed(p.bytes32), "user": indexed(p.address), "stableAmt": p.uint256, "usdrAmt": p.uint256}),
    File: event("0x8fef588b5fc1afbf5b2f06c1a435d513f208da2e6704c3d8f0e0ec91167066ba", "File(bytes32,address)", {"what": indexed(p.bytes32), "addr": p.address}),
    Init: event("0xfa2715184140b1bc488c6d441dff1ffe0c9431862a0ad8db95a2474caa3f9811", "Init(bytes32,address)", {"ilkId": indexed(p.bytes32), "token": indexed(p.address)}),
    RoleAdminChanged: event("0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff", "RoleAdminChanged(bytes32,bytes32,bytes32)", {"role": indexed(p.bytes32), "previousAdminRole": indexed(p.bytes32), "newAdminRole": indexed(p.bytes32)}),
    RoleGranted: event("0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d", "RoleGranted(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    RoleRevoked: event("0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b", "RoleRevoked(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    SellStable: event("0xd7f09203289f7d56e59ab5e9cc0a35f5163ff093491d3010c8a7ca3f747f19a2", "SellStable(bytes32,address,uint256,uint256)", {"ilkId": indexed(p.bytes32), "user": indexed(p.address), "stableAmt": p.uint256, "usdrAmt": p.uint256}),
}

export const functions = {
    COLLATERAL_ADAPTER: viewFun("0x4a2fff81", "COLLATERAL_ADAPTER()", {}, p.address),
    DEFAULT_ADMIN_ROLE: viewFun("0xa217fddf", "DEFAULT_ADMIN_ROLE()", {}, p.bytes32),
    RESERVE_ACCOUNTING: viewFun("0x0e985d9b", "RESERVE_ACCOUNTING()", {}, p.address),
    USDR: viewFun("0x31511b14", "USDR()", {}, p.address),
    VAULT_ENGINE: viewFun("0xfc0f6fd2", "VAULT_ENGINE()", {}, p.address),
    buyStable: fun("0xc762d2b4", "buyStable(bytes32,address,uint256)", {"ilkId": p.bytes32, "user": p.address, "stableAmt": p.uint256}, ),
    file: fun("0xd4e8be83", "file(bytes32,address)", {"what": p.bytes32, "data": p.address}, ),
    getRoleAdmin: viewFun("0x248a9ca3", "getRoleAdmin(bytes32)", {"role": p.bytes32}, p.bytes32),
    governor: viewFun("0x0c340a24", "governor()", {}, p.address),
    grantRole: fun("0x2f2ff15d", "grantRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    hasRole: viewFun("0x91d14854", "hasRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, p.bool),
    ilks: viewFun("0xd9638d36", "ilks(bytes32)", {"ilkId": p.bytes32}, {"token": p.address, "to18ConversionFactor": p.uint256}),
    init: fun("0x3b663195", "init(bytes32)", {"ilkId": p.bytes32}, ),
    renounceRole: fun("0x36568abe", "renounceRole(bytes32,address)", {"role": p.bytes32, "callerConfirmation": p.address}, ),
    revokeRole: fun("0xd547741f", "revokeRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    sellStable: fun("0x2d02ef8b", "sellStable(bytes32,address,uint256)", {"ilkId": p.bytes32, "user": p.address, "stableAmt": p.uint256}, ),
    solvencyEngine: viewFun("0xa898ed1e", "solvencyEngine()", {}, p.address),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
}

export class Contract extends ContractBase {

    COLLATERAL_ADAPTER() {
        return this.eth_call(functions.COLLATERAL_ADAPTER, {})
    }

    DEFAULT_ADMIN_ROLE() {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, {})
    }

    RESERVE_ACCOUNTING() {
        return this.eth_call(functions.RESERVE_ACCOUNTING, {})
    }

    USDR() {
        return this.eth_call(functions.USDR, {})
    }

    VAULT_ENGINE() {
        return this.eth_call(functions.VAULT_ENGINE, {})
    }

    getRoleAdmin(role: GetRoleAdminParams["role"]) {
        return this.eth_call(functions.getRoleAdmin, {role})
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

    solvencyEngine() {
        return this.eth_call(functions.solvencyEngine, {})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }
}

/// Event types
export type BuyStableEventArgs = EParams<typeof events.BuyStable>
export type FileEventArgs = EParams<typeof events.File>
export type InitEventArgs = EParams<typeof events.Init>
export type RoleAdminChangedEventArgs = EParams<typeof events.RoleAdminChanged>
export type RoleGrantedEventArgs = EParams<typeof events.RoleGranted>
export type RoleRevokedEventArgs = EParams<typeof events.RoleRevoked>
export type SellStableEventArgs = EParams<typeof events.SellStable>

/// Function types
export type COLLATERAL_ADAPTERParams = FunctionArguments<typeof functions.COLLATERAL_ADAPTER>
export type COLLATERAL_ADAPTERReturn = FunctionReturn<typeof functions.COLLATERAL_ADAPTER>

export type DEFAULT_ADMIN_ROLEParams = FunctionArguments<typeof functions.DEFAULT_ADMIN_ROLE>
export type DEFAULT_ADMIN_ROLEReturn = FunctionReturn<typeof functions.DEFAULT_ADMIN_ROLE>

export type RESERVE_ACCOUNTINGParams = FunctionArguments<typeof functions.RESERVE_ACCOUNTING>
export type RESERVE_ACCOUNTINGReturn = FunctionReturn<typeof functions.RESERVE_ACCOUNTING>

export type USDRParams = FunctionArguments<typeof functions.USDR>
export type USDRReturn = FunctionReturn<typeof functions.USDR>

export type VAULT_ENGINEParams = FunctionArguments<typeof functions.VAULT_ENGINE>
export type VAULT_ENGINEReturn = FunctionReturn<typeof functions.VAULT_ENGINE>

export type BuyStableParams = FunctionArguments<typeof functions.buyStable>
export type BuyStableReturn = FunctionReturn<typeof functions.buyStable>

export type FileParams = FunctionArguments<typeof functions.file>
export type FileReturn = FunctionReturn<typeof functions.file>

export type GetRoleAdminParams = FunctionArguments<typeof functions.getRoleAdmin>
export type GetRoleAdminReturn = FunctionReturn<typeof functions.getRoleAdmin>

export type GovernorParams = FunctionArguments<typeof functions.governor>
export type GovernorReturn = FunctionReturn<typeof functions.governor>

export type GrantRoleParams = FunctionArguments<typeof functions.grantRole>
export type GrantRoleReturn = FunctionReturn<typeof functions.grantRole>

export type HasRoleParams = FunctionArguments<typeof functions.hasRole>
export type HasRoleReturn = FunctionReturn<typeof functions.hasRole>

export type IlksParams = FunctionArguments<typeof functions.ilks>
export type IlksReturn = FunctionReturn<typeof functions.ilks>

export type InitParams = FunctionArguments<typeof functions.init>
export type InitReturn = FunctionReturn<typeof functions.init>

export type RenounceRoleParams = FunctionArguments<typeof functions.renounceRole>
export type RenounceRoleReturn = FunctionReturn<typeof functions.renounceRole>

export type RevokeRoleParams = FunctionArguments<typeof functions.revokeRole>
export type RevokeRoleReturn = FunctionReturn<typeof functions.revokeRole>

export type SellStableParams = FunctionArguments<typeof functions.sellStable>
export type SellStableReturn = FunctionReturn<typeof functions.sellStable>

export type SolvencyEngineParams = FunctionArguments<typeof functions.solvencyEngine>
export type SolvencyEngineReturn = FunctionReturn<typeof functions.solvencyEngine>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

