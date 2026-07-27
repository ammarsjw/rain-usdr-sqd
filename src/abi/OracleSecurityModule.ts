import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Change: event("0x89712192d0d1795390587564d97b5eb2ccc0c8c9ae9eb1c0f260381583be5d1e", "Change(bytes32,address)", {"ilkId": indexed(p.bytes32), "src": indexed(p.address)}),
    Deny: event("0x184450df2e323acec0ed3b5c7531b81f9b4cdef7914dfd4c0a4317416bb5251b", "Deny(address)", {"account": indexed(p.address)}),
    Diss: event("0x12fdafd291eb287a54e3416070923d22aa5072f5ee04c4fb8361615e7508a37c", "Diss(address)", {"account": indexed(p.address)}),
    Kiss: event("0x6ffc0fabf0709270e42087e84a3bfc36041d3b281266d04ae1962185092fb244", "Kiss(address)", {"account": indexed(p.address)}),
    Poke: event("0x89dcaadc52f13d2bfc2f5e35ac7c4b784e4c1897749319d3bb8dff473ae32189", "Poke(bytes32,uint128,uint128)", {"ilkId": indexed(p.bytes32), "current": p.uint128, "next": p.uint128}),
    Rely: event("0xdd0e34038ac38b2a1ce960229778ac48a8719bc900b6c4f8d0475c6e8b385a60", "Rely(address)", {"account": indexed(p.address)}),
    RoleAdminChanged: event("0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff", "RoleAdminChanged(bytes32,bytes32,bytes32)", {"role": indexed(p.bytes32), "previousAdminRole": indexed(p.bytes32), "newAdminRole": indexed(p.bytes32)}),
    RoleGranted: event("0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d", "RoleGranted(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    RoleRevoked: event("0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b", "RoleRevoked(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    Start: event("0x7194369d8793b35143e14d28b0b5b23e1bcb13cc9f7d85714d756e221a5e2f2e", "Start(bytes32)", {"ilkId": indexed(p.bytes32)}),
    Stop: event("0xb2b5d93c5b4a778cde9a32e1def420b5510dd678e676a680704c1f4ab917968a", "Stop(bytes32)", {"ilkId": indexed(p.bytes32)}),
    Void: event("0x3c2f805af511d2a4822fc392e9814e75b8357eca9722ca74340c8d6edc2feafe", "Void(bytes32)", {"ilkId": indexed(p.bytes32)}),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: viewFun("0xa217fddf", "DEFAULT_ADMIN_ROLE()", {}, p.bytes32),
    change: fun("0x33395e8f", "change(bytes32,address)", {"ilkId": p.bytes32, "src_": p.address}, ),
    deny: fun("0x9c52a7f1", "deny(address)", {"account": p.address}, ),
    diss: fun("0x65c4ce7a", "diss(address)", {"account": p.address}, ),
    getRoleAdmin: viewFun("0x248a9ca3", "getRoleAdmin(bytes32)", {"role": p.bytes32}, p.bytes32),
    grantRole: fun("0x2f2ff15d", "grantRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    hasRole: viewFun("0x91d14854", "hasRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, p.bool),
    hop: viewFun("0xb0b8579b", "hop()", {}, p.uint16),
    kiss: fun("0xf29c29c4", "kiss(address)", {"account": p.address}, ),
    pass: viewFun("0x41505ac2", "pass(bytes32)", {"ilkId": p.bytes32}, p.bool),
    peek: viewFun("0x7f86d1eb", "peek(bytes32)", {"ilkId": p.bytes32}, {"_0": p.bytes32, "_1": p.bool}),
    peep: viewFun("0xf1d86223", "peep(bytes32)", {"ilkId": p.bytes32}, {"_0": p.bytes32, "_1": p.bool}),
    poke: fun("0x1504460f", "poke(bytes32)", {"ilkId": p.bytes32}, ),
    read: viewFun("0x61da1439", "read(bytes32)", {"ilkId": p.bytes32}, p.bytes32),
    rely: fun("0x65fae35e", "rely(address)", {"account": p.address}, ),
    renounceRole: fun("0x36568abe", "renounceRole(bytes32,address)", {"role": p.bytes32, "callerConfirmation": p.address}, ),
    revokeRole: fun("0xd547741f", "revokeRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    src: viewFun("0x126aee77", "src(bytes32)", {"ilkId": p.bytes32}, p.address),
    start: fun("0x015a18ed", "start(bytes32)", {"ilkId": p.bytes32}, ),
    stop: fun("0x63c4f031", "stop(bytes32)", {"ilkId": p.bytes32}, ),
    stopped: viewFun("0xf1337ae9", "stopped(bytes32)", {"ilkId": p.bytes32}, p.uint256),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    void: fun("0x43b203e8", "void(bytes32)", {"ilkId": p.bytes32}, ),
    zzz: viewFun("0x6e30225f", "zzz(bytes32)", {"ilkId": p.bytes32}, p.uint64),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE() {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, {})
    }

    getRoleAdmin(role: GetRoleAdminParams["role"]) {
        return this.eth_call(functions.getRoleAdmin, {role})
    }

    hasRole(role: HasRoleParams["role"], account: HasRoleParams["account"]) {
        return this.eth_call(functions.hasRole, {role, account})
    }

    hop() {
        return this.eth_call(functions.hop, {})
    }

    pass(ilkId: PassParams["ilkId"]) {
        return this.eth_call(functions.pass, {ilkId})
    }

    peek(ilkId: PeekParams["ilkId"]) {
        return this.eth_call(functions.peek, {ilkId})
    }

    peep(ilkId: PeepParams["ilkId"]) {
        return this.eth_call(functions.peep, {ilkId})
    }

    read(ilkId: ReadParams["ilkId"]) {
        return this.eth_call(functions.read, {ilkId})
    }

    src(ilkId: SrcParams["ilkId"]) {
        return this.eth_call(functions.src, {ilkId})
    }

    stopped(ilkId: StoppedParams["ilkId"]) {
        return this.eth_call(functions.stopped, {ilkId})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }

    zzz(ilkId: ZzzParams["ilkId"]) {
        return this.eth_call(functions.zzz, {ilkId})
    }
}

/// Event types
export type ChangeEventArgs = EParams<typeof events.Change>
export type DenyEventArgs = EParams<typeof events.Deny>
export type DissEventArgs = EParams<typeof events.Diss>
export type KissEventArgs = EParams<typeof events.Kiss>
export type PokeEventArgs = EParams<typeof events.Poke>
export type RelyEventArgs = EParams<typeof events.Rely>
export type RoleAdminChangedEventArgs = EParams<typeof events.RoleAdminChanged>
export type RoleGrantedEventArgs = EParams<typeof events.RoleGranted>
export type RoleRevokedEventArgs = EParams<typeof events.RoleRevoked>
export type StartEventArgs = EParams<typeof events.Start>
export type StopEventArgs = EParams<typeof events.Stop>
export type VoidEventArgs = EParams<typeof events.Void>

/// Function types
export type DEFAULT_ADMIN_ROLEParams = FunctionArguments<typeof functions.DEFAULT_ADMIN_ROLE>
export type DEFAULT_ADMIN_ROLEReturn = FunctionReturn<typeof functions.DEFAULT_ADMIN_ROLE>

export type ChangeParams = FunctionArguments<typeof functions.change>
export type ChangeReturn = FunctionReturn<typeof functions.change>

export type DenyParams = FunctionArguments<typeof functions.deny>
export type DenyReturn = FunctionReturn<typeof functions.deny>

export type DissParams = FunctionArguments<typeof functions.diss>
export type DissReturn = FunctionReturn<typeof functions.diss>

export type GetRoleAdminParams = FunctionArguments<typeof functions.getRoleAdmin>
export type GetRoleAdminReturn = FunctionReturn<typeof functions.getRoleAdmin>

export type GrantRoleParams = FunctionArguments<typeof functions.grantRole>
export type GrantRoleReturn = FunctionReturn<typeof functions.grantRole>

export type HasRoleParams = FunctionArguments<typeof functions.hasRole>
export type HasRoleReturn = FunctionReturn<typeof functions.hasRole>

export type HopParams = FunctionArguments<typeof functions.hop>
export type HopReturn = FunctionReturn<typeof functions.hop>

export type KissParams = FunctionArguments<typeof functions.kiss>
export type KissReturn = FunctionReturn<typeof functions.kiss>

export type PassParams = FunctionArguments<typeof functions.pass>
export type PassReturn = FunctionReturn<typeof functions.pass>

export type PeekParams = FunctionArguments<typeof functions.peek>
export type PeekReturn = FunctionReturn<typeof functions.peek>

export type PeepParams = FunctionArguments<typeof functions.peep>
export type PeepReturn = FunctionReturn<typeof functions.peep>

export type PokeParams = FunctionArguments<typeof functions.poke>
export type PokeReturn = FunctionReturn<typeof functions.poke>

export type ReadParams = FunctionArguments<typeof functions.read>
export type ReadReturn = FunctionReturn<typeof functions.read>

export type RelyParams = FunctionArguments<typeof functions.rely>
export type RelyReturn = FunctionReturn<typeof functions.rely>

export type RenounceRoleParams = FunctionArguments<typeof functions.renounceRole>
export type RenounceRoleReturn = FunctionReturn<typeof functions.renounceRole>

export type RevokeRoleParams = FunctionArguments<typeof functions.revokeRole>
export type RevokeRoleReturn = FunctionReturn<typeof functions.revokeRole>

export type SrcParams = FunctionArguments<typeof functions.src>
export type SrcReturn = FunctionReturn<typeof functions.src>

export type StartParams = FunctionArguments<typeof functions.start>
export type StartReturn = FunctionReturn<typeof functions.start>

export type StopParams = FunctionArguments<typeof functions.stop>
export type StopReturn = FunctionReturn<typeof functions.stop>

export type StoppedParams = FunctionArguments<typeof functions.stopped>
export type StoppedReturn = FunctionReturn<typeof functions.stopped>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type VoidParams = FunctionArguments<typeof functions.void>
export type VoidReturn = FunctionReturn<typeof functions.void>

export type ZzzParams = FunctionArguments<typeof functions.zzz>
export type ZzzReturn = FunctionReturn<typeof functions.zzz>

