import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    RecordDecrease: event("0xc88a43d6d2c54675911b44e4fcc798a7d911d80e527d9fb0445601c6a759eb1c", "RecordDecrease(uint256,uint256)", {"wad": p.uint256, "totalReserve": p.uint256}),
    RecordIncrease: event("0x0218ee0d46604a656c3cbbf68bd9584b85bda7a6b77136092e210fe5d1d4202a", "RecordIncrease(uint256,uint256)", {"wad": p.uint256, "totalReserve": p.uint256}),
    RoleAdminChanged: event("0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff", "RoleAdminChanged(bytes32,bytes32,bytes32)", {"role": indexed(p.bytes32), "previousAdminRole": indexed(p.bytes32), "newAdminRole": indexed(p.bytes32)}),
    RoleGranted: event("0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d", "RoleGranted(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    RoleRevoked: event("0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b", "RoleRevoked(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    UpdateCommittedEscrow: event("0xa0392a73ad4eed9d6a7feb3a22a6ef1a634fe545d1a52fe21a9d04860b428d37", "UpdateCommittedEscrow(uint256,uint256)", {"wad": p.uint256, "freeSlack": p.uint256}),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: viewFun("0xa217fddf", "DEFAULT_ADMIN_ROLE()", {}, p.bytes32),
    committedEscrow: viewFun("0x56b301e1", "committedEscrow()", {}, p.uint256),
    freeSlack: viewFun("0xe21ad0a7", "freeSlack()", {}, p.uint256),
    getRoleAdmin: viewFun("0x248a9ca3", "getRoleAdmin(bytes32)", {"role": p.bytes32}, p.bytes32),
    grantRole: fun("0x2f2ff15d", "grantRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    hasRole: viewFun("0x91d14854", "hasRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, p.bool),
    recordDecrease: fun("0xd72426de", "recordDecrease(uint256)", {"wad": p.uint256}, ),
    recordIncrease: fun("0xa7f1d155", "recordIncrease(uint256)", {"wad": p.uint256}, ),
    renounceRole: fun("0x36568abe", "renounceRole(bytes32,address)", {"role": p.bytes32, "callerConfirmation": p.address}, ),
    revokeRole: fun("0xd547741f", "revokeRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    totalReserve: viewFun("0x4c68df67", "totalReserve()", {}, p.uint256),
    updateCommittedEscrow: fun("0xcec774c1", "updateCommittedEscrow(uint256)", {"wad": p.uint256}, ),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE() {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, {})
    }

    committedEscrow() {
        return this.eth_call(functions.committedEscrow, {})
    }

    freeSlack() {
        return this.eth_call(functions.freeSlack, {})
    }

    getRoleAdmin(role: GetRoleAdminParams["role"]) {
        return this.eth_call(functions.getRoleAdmin, {role})
    }

    hasRole(role: HasRoleParams["role"], account: HasRoleParams["account"]) {
        return this.eth_call(functions.hasRole, {role, account})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }

    totalReserve() {
        return this.eth_call(functions.totalReserve, {})
    }
}

/// Event types
export type RecordDecreaseEventArgs = EParams<typeof events.RecordDecrease>
export type RecordIncreaseEventArgs = EParams<typeof events.RecordIncrease>
export type RoleAdminChangedEventArgs = EParams<typeof events.RoleAdminChanged>
export type RoleGrantedEventArgs = EParams<typeof events.RoleGranted>
export type RoleRevokedEventArgs = EParams<typeof events.RoleRevoked>
export type UpdateCommittedEscrowEventArgs = EParams<typeof events.UpdateCommittedEscrow>

/// Function types
export type DEFAULT_ADMIN_ROLEParams = FunctionArguments<typeof functions.DEFAULT_ADMIN_ROLE>
export type DEFAULT_ADMIN_ROLEReturn = FunctionReturn<typeof functions.DEFAULT_ADMIN_ROLE>

export type CommittedEscrowParams = FunctionArguments<typeof functions.committedEscrow>
export type CommittedEscrowReturn = FunctionReturn<typeof functions.committedEscrow>

export type FreeSlackParams = FunctionArguments<typeof functions.freeSlack>
export type FreeSlackReturn = FunctionReturn<typeof functions.freeSlack>

export type GetRoleAdminParams = FunctionArguments<typeof functions.getRoleAdmin>
export type GetRoleAdminReturn = FunctionReturn<typeof functions.getRoleAdmin>

export type GrantRoleParams = FunctionArguments<typeof functions.grantRole>
export type GrantRoleReturn = FunctionReturn<typeof functions.grantRole>

export type HasRoleParams = FunctionArguments<typeof functions.hasRole>
export type HasRoleReturn = FunctionReturn<typeof functions.hasRole>

export type RecordDecreaseParams = FunctionArguments<typeof functions.recordDecrease>
export type RecordDecreaseReturn = FunctionReturn<typeof functions.recordDecrease>

export type RecordIncreaseParams = FunctionArguments<typeof functions.recordIncrease>
export type RecordIncreaseReturn = FunctionReturn<typeof functions.recordIncrease>

export type RenounceRoleParams = FunctionArguments<typeof functions.renounceRole>
export type RenounceRoleReturn = FunctionReturn<typeof functions.renounceRole>

export type RevokeRoleParams = FunctionArguments<typeof functions.revokeRole>
export type RevokeRoleReturn = FunctionReturn<typeof functions.revokeRole>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type TotalReserveParams = FunctionArguments<typeof functions.totalReserve>
export type TotalReserveReturn = FunctionReturn<typeof functions.totalReserve>

export type UpdateCommittedEscrowParams = FunctionArguments<typeof functions.updateCommittedEscrow>
export type UpdateCommittedEscrowReturn = FunctionReturn<typeof functions.updateCommittedEscrow>

