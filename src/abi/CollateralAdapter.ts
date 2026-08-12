import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Cage: event("0x4a9efa0a0e3f548761a6924fe06ac5cb94ecdbc08b10d855bbcc04e37c4910db", "Cage(bytes32)", {"ilkId": indexed(p.bytes32)}),
    Exit: event("0xa3ae4ef58d1a6c0820e2b8f53fdf7b8261d36962b6755d261c428ae604a193bf", "Exit(bytes32,address,uint256)", {"ilkId": indexed(p.bytes32), "user": indexed(p.address), "amount": p.uint256}),
    Init: event("0xfa2715184140b1bc488c6d441dff1ffe0c9431862a0ad8db95a2474caa3f9811", "Init(bytes32,address)", {"ilkId": indexed(p.bytes32), "token": indexed(p.address)}),
    Join: event("0x47397615fccb06323acd051bda0997c5f7d678b2b44ce340a8f0a4c97dc9bf32", "Join(bytes32,address,uint256)", {"ilkId": indexed(p.bytes32), "user": indexed(p.address), "amount": p.uint256}),
    RoleAdminChanged: event("0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff", "RoleAdminChanged(bytes32,bytes32,bytes32)", {"role": indexed(p.bytes32), "previousAdminRole": indexed(p.bytes32), "newAdminRole": indexed(p.bytes32)}),
    RoleGranted: event("0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d", "RoleGranted(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    RoleRevoked: event("0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b", "RoleRevoked(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: viewFun("0xa217fddf", "DEFAULT_ADMIN_ROLE()", {}, p.bytes32),
    VAULT_ENGINE: viewFun("0xfc0f6fd2", "VAULT_ENGINE()", {}, p.address),
    cage: fun("0xe2702fdc", "cage(bytes32)", {"ilkId": p.bytes32}, ),
    exit: fun("0x8569cb59", "exit(bytes32,address,uint256)", {"ilkId": p.bytes32, "user": p.address, "amount": p.uint256}, ),
    getRoleAdmin: viewFun("0x248a9ca3", "getRoleAdmin(bytes32)", {"role": p.bytes32}, p.bytes32),
    grantRole: fun("0x2f2ff15d", "grantRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    hasRole: viewFun("0x91d14854", "hasRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, p.bool),
    ilks: viewFun("0xd9638d36", "ilks(bytes32)", {"ilkId": p.bytes32}, {"token": p.address, "dec": p.uint8, "isUsdr": p.bool, "live": p.uint256}),
    init: fun("0x2aa71e24", "init(bytes32,address)", {"ilkId": p.bytes32, "token": p.address}, ),
    join: fun("0x0b5dd6fa", "join(bytes32,address,uint256)", {"ilkId": p.bytes32, "user": p.address, "amount": p.uint256}, ),
    renounceRole: fun("0x36568abe", "renounceRole(bytes32,address)", {"role": p.bytes32, "callerConfirmation": p.address}, ),
    revokeRole: fun("0xd547741f", "revokeRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE() {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, {})
    }

    VAULT_ENGINE() {
        return this.eth_call(functions.VAULT_ENGINE, {})
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

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }
}

/// Event types
export type CageEventArgs = EParams<typeof events.Cage>
export type ExitEventArgs = EParams<typeof events.Exit>
export type InitEventArgs = EParams<typeof events.Init>
export type JoinEventArgs = EParams<typeof events.Join>
export type RoleAdminChangedEventArgs = EParams<typeof events.RoleAdminChanged>
export type RoleGrantedEventArgs = EParams<typeof events.RoleGranted>
export type RoleRevokedEventArgs = EParams<typeof events.RoleRevoked>

/// Function types
export type DEFAULT_ADMIN_ROLEParams = FunctionArguments<typeof functions.DEFAULT_ADMIN_ROLE>
export type DEFAULT_ADMIN_ROLEReturn = FunctionReturn<typeof functions.DEFAULT_ADMIN_ROLE>

export type VAULT_ENGINEParams = FunctionArguments<typeof functions.VAULT_ENGINE>
export type VAULT_ENGINEReturn = FunctionReturn<typeof functions.VAULT_ENGINE>

export type CageParams = FunctionArguments<typeof functions.cage>
export type CageReturn = FunctionReturn<typeof functions.cage>

export type ExitParams = FunctionArguments<typeof functions.exit>
export type ExitReturn = FunctionReturn<typeof functions.exit>

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

export type JoinParams = FunctionArguments<typeof functions.join>
export type JoinReturn = FunctionReturn<typeof functions.join>

export type RenounceRoleParams = FunctionArguments<typeof functions.renounceRole>
export type RenounceRoleReturn = FunctionReturn<typeof functions.renounceRole>

export type RevokeRoleParams = FunctionArguments<typeof functions.revokeRole>
export type RevokeRoleReturn = FunctionReturn<typeof functions.revokeRole>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

