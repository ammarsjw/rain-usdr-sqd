import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Cancel: event("0x8bf30e7ff26833413be5f69e1d373744864d600b664204b4a2f9844a8eedb9ed", "Cancel(uint256)", {"id": indexed(p.uint256)}),
    Execute: event("0xddb556f1d2c1ec821e910b019d3685b229db152a0ecd517ca7e24b8bd7139289", "Execute(uint256)", {"id": indexed(p.uint256)}),
    Pause: event("0x8320b06dce22cc23cd6092e0b675403852c085d54c3a0ffe955142be6b68190e", "Pause(bytes32,uint256)", {"scope": p.bytes32, "pausedAt": p.uint256}),
    RoleAdminChanged: event("0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff", "RoleAdminChanged(bytes32,bytes32,bytes32)", {"role": indexed(p.bytes32), "previousAdminRole": indexed(p.bytes32), "newAdminRole": indexed(p.bytes32)}),
    RoleGranted: event("0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d", "RoleGranted(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    RoleRevoked: event("0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b", "RoleRevoked(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    Schedule: event("0x3c6707a803383c1cd9e21e119e5094696d04a2a56cfd60b5e1846bc38d4d946f", "Schedule(uint256,address,bytes,uint256)", {"id": indexed(p.uint256), "target": indexed(p.address), "data": p.bytes, "eta": p.uint256}),
    Unpause: event("0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33", "Unpause()", {}),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: viewFun("0xa217fddf", "DEFAULT_ADMIN_ROLE()", {}, p.bytes32),
    PAUSE_MAX: viewFun("0x06775138", "PAUSE_MAX()", {}, p.uint256),
    cancel: fun("0x40e58ee5", "cancel(uint256)", {"id": p.uint256}, ),
    changeCount: viewFun("0xf35f6447", "changeCount()", {}, p.uint256),
    changes: viewFun("0x8d62c64e", "changes(uint256)", {"changeId": p.uint256}, {"target": p.address, "data": p.bytes, "eta": p.uint256, "executed": p.bool, "cancelled": p.bool}),
    delay: viewFun("0x6a42b8f8", "delay()", {}, p.uint256),
    execute: fun("0xfe0d94c1", "execute(uint256)", {"id": p.uint256}, p.bytes),
    getRoleAdmin: viewFun("0x248a9ca3", "getRoleAdmin(bytes32)", {"role": p.bytes32}, p.bytes32),
    grantRole: fun("0x2f2ff15d", "grantRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    hasRole: viewFun("0x91d14854", "hasRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, p.bool),
    pause: fun("0xed56531a", "pause(bytes32)", {"scope": p.bytes32}, ),
    pauseScope: viewFun("0xad1b1487", "pauseScope()", {}, p.bytes32),
    paused: viewFun("0x5c975abb", "paused()", {}, p.bool),
    pausedAt: viewFun("0x2e55d0f2", "pausedAt()", {}, p.uint256),
    renounceRole: fun("0x36568abe", "renounceRole(bytes32,address)", {"role": p.bytes32, "callerConfirmation": p.address}, ),
    revokeRole: fun("0xd547741f", "revokeRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    schedule: fun("0xb2fe131e", "schedule(address,bytes)", {"target": p.address, "data": p.bytes}, p.uint256),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    unpause: fun("0x3f4ba83a", "unpause()", {}, ),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE() {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, {})
    }

    PAUSE_MAX() {
        return this.eth_call(functions.PAUSE_MAX, {})
    }

    changeCount() {
        return this.eth_call(functions.changeCount, {})
    }

    changes(changeId: ChangesParams["changeId"]) {
        return this.eth_call(functions.changes, {changeId})
    }

    delay() {
        return this.eth_call(functions.delay, {})
    }

    getRoleAdmin(role: GetRoleAdminParams["role"]) {
        return this.eth_call(functions.getRoleAdmin, {role})
    }

    hasRole(role: HasRoleParams["role"], account: HasRoleParams["account"]) {
        return this.eth_call(functions.hasRole, {role, account})
    }

    pauseScope() {
        return this.eth_call(functions.pauseScope, {})
    }

    paused() {
        return this.eth_call(functions.paused, {})
    }

    pausedAt() {
        return this.eth_call(functions.pausedAt, {})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }
}

/// Event types
export type CancelEventArgs = EParams<typeof events.Cancel>
export type ExecuteEventArgs = EParams<typeof events.Execute>
export type PauseEventArgs = EParams<typeof events.Pause>
export type RoleAdminChangedEventArgs = EParams<typeof events.RoleAdminChanged>
export type RoleGrantedEventArgs = EParams<typeof events.RoleGranted>
export type RoleRevokedEventArgs = EParams<typeof events.RoleRevoked>
export type ScheduleEventArgs = EParams<typeof events.Schedule>
export type UnpauseEventArgs = EParams<typeof events.Unpause>

/// Function types
export type DEFAULT_ADMIN_ROLEParams = FunctionArguments<typeof functions.DEFAULT_ADMIN_ROLE>
export type DEFAULT_ADMIN_ROLEReturn = FunctionReturn<typeof functions.DEFAULT_ADMIN_ROLE>

export type PAUSE_MAXParams = FunctionArguments<typeof functions.PAUSE_MAX>
export type PAUSE_MAXReturn = FunctionReturn<typeof functions.PAUSE_MAX>

export type CancelParams = FunctionArguments<typeof functions.cancel>
export type CancelReturn = FunctionReturn<typeof functions.cancel>

export type ChangeCountParams = FunctionArguments<typeof functions.changeCount>
export type ChangeCountReturn = FunctionReturn<typeof functions.changeCount>

export type ChangesParams = FunctionArguments<typeof functions.changes>
export type ChangesReturn = FunctionReturn<typeof functions.changes>

export type DelayParams = FunctionArguments<typeof functions.delay>
export type DelayReturn = FunctionReturn<typeof functions.delay>

export type ExecuteParams = FunctionArguments<typeof functions.execute>
export type ExecuteReturn = FunctionReturn<typeof functions.execute>

export type GetRoleAdminParams = FunctionArguments<typeof functions.getRoleAdmin>
export type GetRoleAdminReturn = FunctionReturn<typeof functions.getRoleAdmin>

export type GrantRoleParams = FunctionArguments<typeof functions.grantRole>
export type GrantRoleReturn = FunctionReturn<typeof functions.grantRole>

export type HasRoleParams = FunctionArguments<typeof functions.hasRole>
export type HasRoleReturn = FunctionReturn<typeof functions.hasRole>

export type PauseParams = FunctionArguments<typeof functions.pause>
export type PauseReturn = FunctionReturn<typeof functions.pause>

export type PauseScopeParams = FunctionArguments<typeof functions.pauseScope>
export type PauseScopeReturn = FunctionReturn<typeof functions.pauseScope>

export type PausedParams = FunctionArguments<typeof functions.paused>
export type PausedReturn = FunctionReturn<typeof functions.paused>

export type PausedAtParams = FunctionArguments<typeof functions.pausedAt>
export type PausedAtReturn = FunctionReturn<typeof functions.pausedAt>

export type RenounceRoleParams = FunctionArguments<typeof functions.renounceRole>
export type RenounceRoleReturn = FunctionReturn<typeof functions.renounceRole>

export type RevokeRoleParams = FunctionArguments<typeof functions.revokeRole>
export type RevokeRoleReturn = FunctionReturn<typeof functions.revokeRole>

export type ScheduleParams = FunctionArguments<typeof functions.schedule>
export type ScheduleReturn = FunctionReturn<typeof functions.schedule>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type UnpauseParams = FunctionArguments<typeof functions.unpause>
export type UnpauseReturn = FunctionReturn<typeof functions.unpause>

