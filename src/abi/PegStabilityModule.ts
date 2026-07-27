import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    BuyStable: event("0xa3ea69919a75724d1e4530d72df75b1fa04eaf370f8262bfef97133a5e75167e", "BuyStable(bytes32,address,uint256,uint256)", {"ilkId": indexed(p.bytes32), "user": indexed(p.address), "stableAmt": p.uint256, "usdrAmt": p.uint256}),
    Deny: event("0x184450df2e323acec0ed3b5c7531b81f9b4cdef7914dfd4c0a4317416bb5251b", "Deny(address)", {"account": indexed(p.address)}),
    File: event("0x851aa1caf4888170ad8875449d18f0f512fd6deb2a6571ea1a41fb9f95acbcd1", "File(bytes32,bytes32,uint256)", {"ilkId": indexed(p.bytes32), "what": indexed(p.bytes32), "data": p.uint256}),
    Init: event("0xfa2715184140b1bc488c6d441dff1ffe0c9431862a0ad8db95a2474caa3f9811", "Init(bytes32,address)", {"ilkId": indexed(p.bytes32), "token": indexed(p.address)}),
    Rely: event("0xdd0e34038ac38b2a1ce960229778ac48a8719bc900b6c4f8d0475c6e8b385a60", "Rely(address)", {"account": indexed(p.address)}),
    RoleAdminChanged: event("0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff", "RoleAdminChanged(bytes32,bytes32,bytes32)", {"role": indexed(p.bytes32), "previousAdminRole": indexed(p.bytes32), "newAdminRole": indexed(p.bytes32)}),
    RoleGranted: event("0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d", "RoleGranted(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    RoleRevoked: event("0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b", "RoleRevoked(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    SellStable: event("0xd7f09203289f7d56e59ab5e9cc0a35f5163ff093491d3010c8a7ca3f747f19a2", "SellStable(bytes32,address,uint256,uint256)", {"ilkId": indexed(p.bytes32), "user": indexed(p.address), "stableAmt": p.uint256, "usdrAmt": p.uint256}),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: viewFun("0xa217fddf", "DEFAULT_ADMIN_ROLE()", {}, p.bytes32),
    buyStable: fun("0xc762d2b4", "buyStable(bytes32,address,uint256)", {"ilkId": p.bytes32, "user": p.address, "stableAmt": p.uint256}, ),
    collateralAdapter: viewFun("0x246786e2", "collateralAdapter()", {}, p.address),
    deny: fun("0x9c52a7f1", "deny(address)", {"account": p.address}, ),
    file: fun("0x1a0b287e", "file(bytes32,bytes32,uint256)", {"ilkId": p.bytes32, "what": p.bytes32, "data": p.uint256}, ),
    getRoleAdmin: viewFun("0x248a9ca3", "getRoleAdmin(bytes32)", {"role": p.bytes32}, p.bytes32),
    grantRole: fun("0x2f2ff15d", "grantRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    hasRole: viewFun("0x91d14854", "hasRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, p.bool),
    ilks: viewFun("0xd9638d36", "ilks(bytes32)", {"ilkId": p.bytes32}, {"token": p.address, "to18ConversionFactor": p.uint256, "tin": p.uint256, "tout": p.uint256}),
    init: fun("0x3b663195", "init(bytes32)", {"ilkId": p.bytes32}, ),
    rely: fun("0x65fae35e", "rely(address)", {"account": p.address}, ),
    renounceRole: fun("0x36568abe", "renounceRole(bytes32,address)", {"role": p.bytes32, "callerConfirmation": p.address}, ),
    reserveAccounting: viewFun("0x9d155075", "reserveAccounting()", {}, p.address),
    revokeRole: fun("0xd547741f", "revokeRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    sellStable: fun("0x2d02ef8b", "sellStable(bytes32,address,uint256)", {"ilkId": p.bytes32, "user": p.address, "stableAmt": p.uint256}, ),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    usdr: viewFun("0xada13fc6", "usdr()", {}, p.address),
    vaultEngine: viewFun("0xf29176c3", "vaultEngine()", {}, p.address),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE() {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, {})
    }

    collateralAdapter() {
        return this.eth_call(functions.collateralAdapter, {})
    }

    getRoleAdmin(role: GetRoleAdminParams["role"]) {
        return this.eth_call(functions.getRoleAdmin, {role})
    }

    hasRole(role: HasRoleParams["role"], account: HasRoleParams["account"]) {
        return this.eth_call(functions.hasRole, {role, account})
    }

    ilks(ilkId: IlksParams["ilkId"]) {
        return this.eth_call(functions.ilks, {ilkId})
    }

    reserveAccounting() {
        return this.eth_call(functions.reserveAccounting, {})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }

    usdr() {
        return this.eth_call(functions.usdr, {})
    }

    vaultEngine() {
        return this.eth_call(functions.vaultEngine, {})
    }
}

/// Event types
export type BuyStableEventArgs = EParams<typeof events.BuyStable>
export type DenyEventArgs = EParams<typeof events.Deny>
export type FileEventArgs = EParams<typeof events.File>
export type InitEventArgs = EParams<typeof events.Init>
export type RelyEventArgs = EParams<typeof events.Rely>
export type RoleAdminChangedEventArgs = EParams<typeof events.RoleAdminChanged>
export type RoleGrantedEventArgs = EParams<typeof events.RoleGranted>
export type RoleRevokedEventArgs = EParams<typeof events.RoleRevoked>
export type SellStableEventArgs = EParams<typeof events.SellStable>

/// Function types
export type DEFAULT_ADMIN_ROLEParams = FunctionArguments<typeof functions.DEFAULT_ADMIN_ROLE>
export type DEFAULT_ADMIN_ROLEReturn = FunctionReturn<typeof functions.DEFAULT_ADMIN_ROLE>

export type BuyStableParams = FunctionArguments<typeof functions.buyStable>
export type BuyStableReturn = FunctionReturn<typeof functions.buyStable>

export type CollateralAdapterParams = FunctionArguments<typeof functions.collateralAdapter>
export type CollateralAdapterReturn = FunctionReturn<typeof functions.collateralAdapter>

export type DenyParams = FunctionArguments<typeof functions.deny>
export type DenyReturn = FunctionReturn<typeof functions.deny>

export type FileParams = FunctionArguments<typeof functions.file>
export type FileReturn = FunctionReturn<typeof functions.file>

export type GetRoleAdminParams = FunctionArguments<typeof functions.getRoleAdmin>
export type GetRoleAdminReturn = FunctionReturn<typeof functions.getRoleAdmin>

export type GrantRoleParams = FunctionArguments<typeof functions.grantRole>
export type GrantRoleReturn = FunctionReturn<typeof functions.grantRole>

export type HasRoleParams = FunctionArguments<typeof functions.hasRole>
export type HasRoleReturn = FunctionReturn<typeof functions.hasRole>

export type IlksParams = FunctionArguments<typeof functions.ilks>
export type IlksReturn = FunctionReturn<typeof functions.ilks>

export type InitParams = FunctionArguments<typeof functions.init>
export type InitReturn = FunctionReturn<typeof functions.init>

export type RelyParams = FunctionArguments<typeof functions.rely>
export type RelyReturn = FunctionReturn<typeof functions.rely>

export type RenounceRoleParams = FunctionArguments<typeof functions.renounceRole>
export type RenounceRoleReturn = FunctionReturn<typeof functions.renounceRole>

export type ReserveAccountingParams = FunctionArguments<typeof functions.reserveAccounting>
export type ReserveAccountingReturn = FunctionReturn<typeof functions.reserveAccounting>

export type RevokeRoleParams = FunctionArguments<typeof functions.revokeRole>
export type RevokeRoleReturn = FunctionReturn<typeof functions.revokeRole>

export type SellStableParams = FunctionArguments<typeof functions.sellStable>
export type SellStableReturn = FunctionReturn<typeof functions.sellStable>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type UsdrParams = FunctionArguments<typeof functions.usdr>
export type UsdrReturn = FunctionReturn<typeof functions.usdr>

export type VaultEngineParams = FunctionArguments<typeof functions.vaultEngine>
export type VaultEngineReturn = FunctionReturn<typeof functions.vaultEngine>

