import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    AddCommitter: event("0xc871dc6554951ceeadd9fa74a35411fd9083fa2cbbe44e9b0ebbc0b4bca0a7ca", "AddCommitter(address)", {"account": indexed(p.address)}),
    AddRecorder: event("0xa6de2f022c9aba9068ff89c61f11e64e1eef82343341ada34bb3ffba2a8611b8", "AddRecorder(address)", {"account": indexed(p.address)}),
    Deny: event("0x184450df2e323acec0ed3b5c7531b81f9b4cdef7914dfd4c0a4317416bb5251b", "Deny(address)", {"account": indexed(p.address)}),
    RecordDecrease: event("0xc88a43d6d2c54675911b44e4fcc798a7d911d80e527d9fb0445601c6a759eb1c", "RecordDecrease(uint256,uint256)", {"wad": p.uint256, "totalReserve": p.uint256}),
    RecordIncrease: event("0x0218ee0d46604a656c3cbbf68bd9584b85bda7a6b77136092e210fe5d1d4202a", "RecordIncrease(uint256,uint256)", {"wad": p.uint256, "totalReserve": p.uint256}),
    Rely: event("0xdd0e34038ac38b2a1ce960229778ac48a8719bc900b6c4f8d0475c6e8b385a60", "Rely(address)", {"account": indexed(p.address)}),
    RemoveCommitter: event("0x7e10e432298311a6e8b3ac2db903c9d8e89a137ea670aee0b38094e1c45a8b42", "RemoveCommitter(address)", {"account": indexed(p.address)}),
    RemoveRecorder: event("0xf61c3407f38376a878a5a4e548b56479be5969a888e5845f89f4fb6fa9732efb", "RemoveRecorder(address)", {"account": indexed(p.address)}),
    RoleAdminChanged: event("0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff", "RoleAdminChanged(bytes32,bytes32,bytes32)", {"role": indexed(p.bytes32), "previousAdminRole": indexed(p.bytes32), "newAdminRole": indexed(p.bytes32)}),
    RoleGranted: event("0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d", "RoleGranted(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    RoleRevoked: event("0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b", "RoleRevoked(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    UpdateCommittedEscrow: event("0xa0392a73ad4eed9d6a7feb3a22a6ef1a634fe545d1a52fe21a9d04860b428d37", "UpdateCommittedEscrow(uint256,uint256)", {"wad": p.uint256, "freeSlack": p.uint256}),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: viewFun("0xa217fddf", "DEFAULT_ADMIN_ROLE()", {}, p.bytes32),
    addCommitter: fun("0x922a6e45", "addCommitter(address)", {"account": p.address}, ),
    addRecorder: fun("0x6e35017c", "addRecorder(address)", {"account": p.address}, ),
    committedEscrow: viewFun("0x56b301e1", "committedEscrow()", {}, p.uint256),
    deny: fun("0x9c52a7f1", "deny(address)", {"account": p.address}, ),
    freeSlack: viewFun("0xe21ad0a7", "freeSlack()", {}, p.uint256),
    getRoleAdmin: viewFun("0x248a9ca3", "getRoleAdmin(bytes32)", {"role": p.bytes32}, p.bytes32),
    grantRole: fun("0x2f2ff15d", "grantRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    hasRole: viewFun("0x91d14854", "hasRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, p.bool),
    recordDecrease: fun("0xd72426de", "recordDecrease(uint256)", {"wad": p.uint256}, ),
    recordIncrease: fun("0xa7f1d155", "recordIncrease(uint256)", {"wad": p.uint256}, ),
    rely: fun("0x65fae35e", "rely(address)", {"account": p.address}, ),
    removeCommitter: fun("0x34702f03", "removeCommitter(address)", {"account": p.address}, ),
    removeRecorder: fun("0x8f9771a6", "removeRecorder(address)", {"account": p.address}, ),
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
export type AddCommitterEventArgs = EParams<typeof events.AddCommitter>
export type AddRecorderEventArgs = EParams<typeof events.AddRecorder>
export type DenyEventArgs = EParams<typeof events.Deny>
export type RecordDecreaseEventArgs = EParams<typeof events.RecordDecrease>
export type RecordIncreaseEventArgs = EParams<typeof events.RecordIncrease>
export type RelyEventArgs = EParams<typeof events.Rely>
export type RemoveCommitterEventArgs = EParams<typeof events.RemoveCommitter>
export type RemoveRecorderEventArgs = EParams<typeof events.RemoveRecorder>
export type RoleAdminChangedEventArgs = EParams<typeof events.RoleAdminChanged>
export type RoleGrantedEventArgs = EParams<typeof events.RoleGranted>
export type RoleRevokedEventArgs = EParams<typeof events.RoleRevoked>
export type UpdateCommittedEscrowEventArgs = EParams<typeof events.UpdateCommittedEscrow>

/// Function types
export type DEFAULT_ADMIN_ROLEParams = FunctionArguments<typeof functions.DEFAULT_ADMIN_ROLE>
export type DEFAULT_ADMIN_ROLEReturn = FunctionReturn<typeof functions.DEFAULT_ADMIN_ROLE>

export type AddCommitterParams = FunctionArguments<typeof functions.addCommitter>
export type AddCommitterReturn = FunctionReturn<typeof functions.addCommitter>

export type AddRecorderParams = FunctionArguments<typeof functions.addRecorder>
export type AddRecorderReturn = FunctionReturn<typeof functions.addRecorder>

export type CommittedEscrowParams = FunctionArguments<typeof functions.committedEscrow>
export type CommittedEscrowReturn = FunctionReturn<typeof functions.committedEscrow>

export type DenyParams = FunctionArguments<typeof functions.deny>
export type DenyReturn = FunctionReturn<typeof functions.deny>

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

export type RelyParams = FunctionArguments<typeof functions.rely>
export type RelyReturn = FunctionReturn<typeof functions.rely>

export type RemoveCommitterParams = FunctionArguments<typeof functions.removeCommitter>
export type RemoveCommitterReturn = FunctionReturn<typeof functions.removeCommitter>

export type RemoveRecorderParams = FunctionArguments<typeof functions.removeRecorder>
export type RemoveRecorderReturn = FunctionReturn<typeof functions.removeRecorder>

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

