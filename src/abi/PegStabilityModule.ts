import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    BuyStable: event("0xaf36edb96ebc8dba83bc66ee2d3bb726e66d123092f55cfa78fe52ff2d676e5d", "BuyStable(address,uint256,uint256)", {"user": indexed(p.address), "stableAmt": p.uint256, "usdrAmt": p.uint256}),
    Deny: event("0x184450df2e323acec0ed3b5c7531b81f9b4cdef7914dfd4c0a4317416bb5251b", "Deny(address)", {"account": indexed(p.address)}),
    File: event("0xe986e40cc8c151830d4f61050f4fb2e4add8567caad2d5f5496f9158e91fe4c7", "File(bytes32,uint256)", {"what": indexed(p.bytes32), "data": p.uint256}),
    Rely: event("0xdd0e34038ac38b2a1ce960229778ac48a8719bc900b6c4f8d0475c6e8b385a60", "Rely(address)", {"account": indexed(p.address)}),
    RoleAdminChanged: event("0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff", "RoleAdminChanged(bytes32,bytes32,bytes32)", {"role": indexed(p.bytes32), "previousAdminRole": indexed(p.bytes32), "newAdminRole": indexed(p.bytes32)}),
    RoleGranted: event("0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d", "RoleGranted(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    RoleRevoked: event("0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b", "RoleRevoked(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    SellStable: event("0x820b786576f5bef1d45edb358059adac901bf4477497e710a1cb5238904b2edc", "SellStable(address,uint256,uint256)", {"user": indexed(p.address), "stableAmt": p.uint256, "usdrAmt": p.uint256}),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: viewFun("0xa217fddf", "DEFAULT_ADMIN_ROLE()", {}, p.bytes32),
    buyStable: fun("0x4ef05cd0", "buyStable(address,uint256)", {"user": p.address, "stableAmt": p.uint256}, ),
    collateralAdapter: viewFun("0x246786e2", "collateralAdapter()", {}, p.address),
    deny: fun("0x9c52a7f1", "deny(address)", {"account": p.address}, ),
    file: fun("0x29ae8114", "file(bytes32,uint256)", {"what": p.bytes32, "data": p.uint256}, ),
    getRoleAdmin: viewFun("0x248a9ca3", "getRoleAdmin(bytes32)", {"role": p.bytes32}, p.bytes32),
    grantRole: fun("0x2f2ff15d", "grantRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    hasRole: viewFun("0x91d14854", "hasRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, p.bool),
    ilkId: viewFun("0xffd7e45b", "ilkId()", {}, p.bytes32),
    rely: fun("0x65fae35e", "rely(address)", {"account": p.address}, ),
    renounceRole: fun("0x36568abe", "renounceRole(bytes32,address)", {"role": p.bytes32, "callerConfirmation": p.address}, ),
    reserveAccounting: viewFun("0x9d155075", "reserveAccounting()", {}, p.address),
    revokeRole: fun("0xd547741f", "revokeRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    sellStable: fun("0xa052093c", "sellStable(address,uint256)", {"user": p.address, "stableAmt": p.uint256}, ),
    stableToken: viewFun("0xa9d75b2b", "stableToken()", {}, p.address),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    tin: viewFun("0x568d4b6f", "tin()", {}, p.uint256),
    to18ConversionFactor: viewFun("0x4010f777", "to18ConversionFactor()", {}, p.uint256),
    tout: viewFun("0xfae036d5", "tout()", {}, p.uint256),
    usdr: viewFun("0xada13fc6", "usdr()", {}, p.address),
    usdrAdapter: viewFun("0x7fa518e6", "usdrAdapter()", {}, p.address),
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

    ilkId() {
        return this.eth_call(functions.ilkId, {})
    }

    reserveAccounting() {
        return this.eth_call(functions.reserveAccounting, {})
    }

    stableToken() {
        return this.eth_call(functions.stableToken, {})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }

    tin() {
        return this.eth_call(functions.tin, {})
    }

    to18ConversionFactor() {
        return this.eth_call(functions.to18ConversionFactor, {})
    }

    tout() {
        return this.eth_call(functions.tout, {})
    }

    usdr() {
        return this.eth_call(functions.usdr, {})
    }

    usdrAdapter() {
        return this.eth_call(functions.usdrAdapter, {})
    }

    vaultEngine() {
        return this.eth_call(functions.vaultEngine, {})
    }
}

/// Event types
export type BuyStableEventArgs = EParams<typeof events.BuyStable>
export type DenyEventArgs = EParams<typeof events.Deny>
export type FileEventArgs = EParams<typeof events.File>
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

export type IlkIdParams = FunctionArguments<typeof functions.ilkId>
export type IlkIdReturn = FunctionReturn<typeof functions.ilkId>

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

export type StableTokenParams = FunctionArguments<typeof functions.stableToken>
export type StableTokenReturn = FunctionReturn<typeof functions.stableToken>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type TinParams = FunctionArguments<typeof functions.tin>
export type TinReturn = FunctionReturn<typeof functions.tin>

export type To18ConversionFactorParams = FunctionArguments<typeof functions.to18ConversionFactor>
export type To18ConversionFactorReturn = FunctionReturn<typeof functions.to18ConversionFactor>

export type ToutParams = FunctionArguments<typeof functions.tout>
export type ToutReturn = FunctionReturn<typeof functions.tout>

export type UsdrParams = FunctionArguments<typeof functions.usdr>
export type UsdrReturn = FunctionReturn<typeof functions.usdr>

export type UsdrAdapterParams = FunctionArguments<typeof functions.usdrAdapter>
export type UsdrAdapterReturn = FunctionReturn<typeof functions.usdrAdapter>

export type VaultEngineParams = FunctionArguments<typeof functions.vaultEngine>
export type VaultEngineReturn = FunctionReturn<typeof functions.vaultEngine>

