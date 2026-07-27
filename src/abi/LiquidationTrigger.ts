import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Bark: event("0x85258d09e1e4ef299ff3fc11e74af99563f022d21f3f940db982229dc2a3358c", "Bark(bytes32,address,uint256,uint256,uint256,address,uint256)", {"ilkId": indexed(p.bytes32), "urn": indexed(p.address), "ink": p.uint256, "art": p.uint256, "due": p.uint256, "clip": p.address, "id": p.uint256}),
    Cage: event("0x2308ed18a14e800c39b86eb6ea43270105955ca385b603b64eca89f98ae8fbda", "Cage()", {}),
    Deny: event("0x184450df2e323acec0ed3b5c7531b81f9b4cdef7914dfd4c0a4317416bb5251b", "Deny(address)", {"account": indexed(p.address)}),
    Digs: event("0x54f095dc7308776bf01e8580e4dd40fd959ea4bf50b069975768320ef8d77d8a", "Digs(bytes32,uint256)", {"ilkId": indexed(p.bytes32), "rad": p.uint256}),
    'File(bytes32 indexed,uint256)': event("0xe986e40cc8c151830d4f61050f4fb2e4add8567caad2d5f5496f9158e91fe4c7", "File(bytes32,uint256)", {"what": indexed(p.bytes32), "data": p.uint256}),
    'File(bytes32 indexed,address)': event("0x8fef588b5fc1afbf5b2f06c1a435d513f208da2e6704c3d8f0e0ec91167066ba", "File(bytes32,address)", {"what": indexed(p.bytes32), "addr": p.address}),
    'File(bytes32 indexed,bytes32 indexed,uint256)': event("0x851aa1caf4888170ad8875449d18f0f512fd6deb2a6571ea1a41fb9f95acbcd1", "File(bytes32,bytes32,uint256)", {"ilkId": indexed(p.bytes32), "what": indexed(p.bytes32), "data": p.uint256}),
    'File(bytes32 indexed,bytes32 indexed,address)': event("0x4ff2caaa972a7c6629ea01fae9c93d73cc307d13ea4c369f9bbbb7f9b7e9461d", "File(bytes32,bytes32,address)", {"ilkId": indexed(p.bytes32), "what": indexed(p.bytes32), "addr": p.address}),
    Rely: event("0xdd0e34038ac38b2a1ce960229778ac48a8719bc900b6c4f8d0475c6e8b385a60", "Rely(address)", {"account": indexed(p.address)}),
    RoleAdminChanged: event("0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff", "RoleAdminChanged(bytes32,bytes32,bytes32)", {"role": indexed(p.bytes32), "previousAdminRole": indexed(p.bytes32), "newAdminRole": indexed(p.bytes32)}),
    RoleGranted: event("0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d", "RoleGranted(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    RoleRevoked: event("0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b", "RoleRevoked(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: viewFun("0xa217fddf", "DEFAULT_ADMIN_ROLE()", {}, p.bytes32),
    Dirt: viewFun("0xeda6e121", "Dirt()", {}, p.uint256),
    Hole: viewFun("0xaf7cfeb1", "Hole()", {}, p.uint256),
    balanceSheet: viewFun("0x22285cf6", "balanceSheet()", {}, p.address),
    bark: fun("0xed998908", "bark(bytes32,address,address)", {"ilkId": p.bytes32, "urn": p.address, "kpr": p.address}, p.uint256),
    cage: fun("0x69245009", "cage()", {}, ),
    chop: viewFun("0xd7926538", "chop(bytes32)", {"ilkId": p.bytes32}, p.uint256),
    circuitBreaker: viewFun("0x16efd941", "circuitBreaker()", {}, p.address),
    deny: fun("0x9c52a7f1", "deny(address)", {"account": p.address}, ),
    digs: fun("0xc87193f4", "digs(bytes32,uint256)", {"ilkId": p.bytes32, "rad": p.uint256}, ),
    'file(bytes32,bytes32,uint256)': fun("0x1a0b287e", "file(bytes32,bytes32,uint256)", {"ilkId": p.bytes32, "what": p.bytes32, "data": p.uint256}, ),
    'file(bytes32,uint256)': fun("0x29ae8114", "file(bytes32,uint256)", {"what": p.bytes32, "data": p.uint256}, ),
    'file(bytes32,address)': fun("0xd4e8be83", "file(bytes32,address)", {"what": p.bytes32, "data": p.address}, ),
    'file(bytes32,bytes32,address)': fun("0xebecb39d", "file(bytes32,bytes32,address)", {"ilkId": p.bytes32, "what": p.bytes32, "clip_": p.address}, ),
    getRoleAdmin: viewFun("0x248a9ca3", "getRoleAdmin(bytes32)", {"role": p.bytes32}, p.bytes32),
    grantRole: fun("0x2f2ff15d", "grantRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    hasRole: viewFun("0x91d14854", "hasRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, p.bool),
    ilks: viewFun("0xd9638d36", "ilks(bytes32)", {"ilkId": p.bytes32}, {"clip": p.address, "chop": p.uint256, "hole": p.uint256, "dirt": p.uint256}),
    live: viewFun("0x957aa58c", "live()", {}, p.uint256),
    rely: fun("0x65fae35e", "rely(address)", {"account": p.address}, ),
    renounceRole: fun("0x36568abe", "renounceRole(bytes32,address)", {"role": p.bytes32, "callerConfirmation": p.address}, ),
    revokeRole: fun("0xd547741f", "revokeRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    throttle: viewFun("0xd96d7c17", "throttle()", {}, p.uint256),
    vaultEngine: viewFun("0xf29176c3", "vaultEngine()", {}, p.address),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE() {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, {})
    }

    Dirt() {
        return this.eth_call(functions.Dirt, {})
    }

    Hole() {
        return this.eth_call(functions.Hole, {})
    }

    balanceSheet() {
        return this.eth_call(functions.balanceSheet, {})
    }

    chop(ilkId: ChopParams["ilkId"]) {
        return this.eth_call(functions.chop, {ilkId})
    }

    circuitBreaker() {
        return this.eth_call(functions.circuitBreaker, {})
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

    live() {
        return this.eth_call(functions.live, {})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }

    throttle() {
        return this.eth_call(functions.throttle, {})
    }

    vaultEngine() {
        return this.eth_call(functions.vaultEngine, {})
    }
}

/// Event types
export type BarkEventArgs = EParams<typeof events.Bark>
export type CageEventArgs = EParams<typeof events.Cage>
export type DenyEventArgs = EParams<typeof events.Deny>
export type DigsEventArgs = EParams<typeof events.Digs>
export type FileEventArgs_0 = EParams<typeof events['File(bytes32 indexed,uint256)']>
export type FileEventArgs_1 = EParams<typeof events['File(bytes32 indexed,address)']>
export type FileEventArgs_2 = EParams<typeof events['File(bytes32 indexed,bytes32 indexed,uint256)']>
export type FileEventArgs_3 = EParams<typeof events['File(bytes32 indexed,bytes32 indexed,address)']>
export type RelyEventArgs = EParams<typeof events.Rely>
export type RoleAdminChangedEventArgs = EParams<typeof events.RoleAdminChanged>
export type RoleGrantedEventArgs = EParams<typeof events.RoleGranted>
export type RoleRevokedEventArgs = EParams<typeof events.RoleRevoked>

/// Function types
export type DEFAULT_ADMIN_ROLEParams = FunctionArguments<typeof functions.DEFAULT_ADMIN_ROLE>
export type DEFAULT_ADMIN_ROLEReturn = FunctionReturn<typeof functions.DEFAULT_ADMIN_ROLE>

export type DirtParams = FunctionArguments<typeof functions.Dirt>
export type DirtReturn = FunctionReturn<typeof functions.Dirt>

export type HoleParams = FunctionArguments<typeof functions.Hole>
export type HoleReturn = FunctionReturn<typeof functions.Hole>

export type BalanceSheetParams = FunctionArguments<typeof functions.balanceSheet>
export type BalanceSheetReturn = FunctionReturn<typeof functions.balanceSheet>

export type BarkParams = FunctionArguments<typeof functions.bark>
export type BarkReturn = FunctionReturn<typeof functions.bark>

export type CageParams = FunctionArguments<typeof functions.cage>
export type CageReturn = FunctionReturn<typeof functions.cage>

export type ChopParams = FunctionArguments<typeof functions.chop>
export type ChopReturn = FunctionReturn<typeof functions.chop>

export type CircuitBreakerParams = FunctionArguments<typeof functions.circuitBreaker>
export type CircuitBreakerReturn = FunctionReturn<typeof functions.circuitBreaker>

export type DenyParams = FunctionArguments<typeof functions.deny>
export type DenyReturn = FunctionReturn<typeof functions.deny>

export type DigsParams = FunctionArguments<typeof functions.digs>
export type DigsReturn = FunctionReturn<typeof functions.digs>

export type FileParams_0 = FunctionArguments<typeof functions['file(bytes32,bytes32,uint256)']>
export type FileReturn_0 = FunctionReturn<typeof functions['file(bytes32,bytes32,uint256)']>

export type FileParams_1 = FunctionArguments<typeof functions['file(bytes32,uint256)']>
export type FileReturn_1 = FunctionReturn<typeof functions['file(bytes32,uint256)']>

export type FileParams_2 = FunctionArguments<typeof functions['file(bytes32,address)']>
export type FileReturn_2 = FunctionReturn<typeof functions['file(bytes32,address)']>

export type FileParams_3 = FunctionArguments<typeof functions['file(bytes32,bytes32,address)']>
export type FileReturn_3 = FunctionReturn<typeof functions['file(bytes32,bytes32,address)']>

export type GetRoleAdminParams = FunctionArguments<typeof functions.getRoleAdmin>
export type GetRoleAdminReturn = FunctionReturn<typeof functions.getRoleAdmin>

export type GrantRoleParams = FunctionArguments<typeof functions.grantRole>
export type GrantRoleReturn = FunctionReturn<typeof functions.grantRole>

export type HasRoleParams = FunctionArguments<typeof functions.hasRole>
export type HasRoleReturn = FunctionReturn<typeof functions.hasRole>

export type IlksParams = FunctionArguments<typeof functions.ilks>
export type IlksReturn = FunctionReturn<typeof functions.ilks>

export type LiveParams = FunctionArguments<typeof functions.live>
export type LiveReturn = FunctionReturn<typeof functions.live>

export type RelyParams = FunctionArguments<typeof functions.rely>
export type RelyReturn = FunctionReturn<typeof functions.rely>

export type RenounceRoleParams = FunctionArguments<typeof functions.renounceRole>
export type RenounceRoleReturn = FunctionReturn<typeof functions.renounceRole>

export type RevokeRoleParams = FunctionArguments<typeof functions.revokeRole>
export type RevokeRoleReturn = FunctionReturn<typeof functions.revokeRole>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type ThrottleParams = FunctionArguments<typeof functions.throttle>
export type ThrottleReturn = FunctionReturn<typeof functions.throttle>

export type VaultEngineParams = FunctionArguments<typeof functions.vaultEngine>
export type VaultEngineReturn = FunctionReturn<typeof functions.vaultEngine>

