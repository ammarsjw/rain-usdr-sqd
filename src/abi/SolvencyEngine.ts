import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    AddVolatileIlk: event("0x9f18973ffe1697bc37451ee876c856ed2e039f564a18687caae7dfc17d30116f", "AddVolatileIlk(bytes32)", {"ilkId": indexed(p.bytes32)}),
    Deny: event("0x184450df2e323acec0ed3b5c7531b81f9b4cdef7914dfd4c0a4317416bb5251b", "Deny(address)", {"account": indexed(p.address)}),
    File: event("0xe986e40cc8c151830d4f61050f4fb2e4add8567caad2d5f5496f9158e91fe4c7", "File(bytes32,uint256)", {"what": indexed(p.bytes32), "data": p.uint256}),
    InvariantChecked: event("0x2ba99f67a85051641806035b942769c163c26579094d10165250b0ec4f7109a6", "InvariantChecked(uint256,uint256,bool)", {"reserve": p.uint256, "worstCaseLoss": p.uint256, "passed": p.bool}),
    Rely: event("0xdd0e34038ac38b2a1ce960229778ac48a8719bc900b6c4f8d0475c6e8b385a60", "Rely(address)", {"account": indexed(p.address)}),
    RoleAdminChanged: event("0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff", "RoleAdminChanged(bytes32,bytes32,bytes32)", {"role": indexed(p.bytes32), "previousAdminRole": indexed(p.bytes32), "newAdminRole": indexed(p.bytes32)}),
    RoleGranted: event("0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d", "RoleGranted(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    RoleRevoked: event("0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b", "RoleRevoked(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: viewFun("0xa217fddf", "DEFAULT_ADMIN_ROLE()", {}, p.bytes32),
    addVolatileIlk: fun("0xb4f7398a", "addVolatileIlk(bytes32)", {"ilkId": p.bytes32}, ),
    checkInvariant: fun("0xe79487da", "checkInvariant()", {}, {"loss": p.uint256, "reserve": p.uint256}),
    deny: fun("0x9c52a7f1", "deny(address)", {"account": p.address}, ),
    externalExposure: viewFun("0xeef93b5f", "externalExposure()", {}, p.address),
    'file(bytes32,uint256)': fun("0x29ae8114", "file(bytes32,uint256)", {"what": p.bytes32, "data": p.uint256}, ),
    'file(bytes32,address)': fun("0xd4e8be83", "file(bytes32,address)", {"what": p.bytes32, "data": p.address}, ),
    getRoleAdmin: viewFun("0x248a9ca3", "getRoleAdmin(bytes32)", {"role": p.bytes32}, p.bytes32),
    grantRole: fun("0x2f2ff15d", "grantRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    hasRole: viewFun("0x91d14854", "hasRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, p.bool),
    rely: fun("0x65fae35e", "rely(address)", {"account": p.address}, ),
    renounceRole: fun("0x36568abe", "renounceRole(bytes32,address)", {"role": p.bytes32, "callerConfirmation": p.address}, ),
    reserveAccounting: viewFun("0x9d155075", "reserveAccounting()", {}, p.address),
    revokeRole: fun("0xd547741f", "revokeRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    stressDepth: viewFun("0xc077d72a", "stressDepth()", {}, p.uint256),
    stressMarkdown: viewFun("0xd88e644f", "stressMarkdown()", {}, p.uint256),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    vaultEngine: viewFun("0xf29176c3", "vaultEngine()", {}, p.address),
    volatileIlks: viewFun("0x70e9cef8", "volatileIlks(uint256)", {"_0": p.uint256}, p.bytes32),
    worstCaseLoss: viewFun("0x6b5634f7", "worstCaseLoss()", {}, p.uint256),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE() {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, {})
    }

    externalExposure() {
        return this.eth_call(functions.externalExposure, {})
    }

    getRoleAdmin(role: GetRoleAdminParams["role"]) {
        return this.eth_call(functions.getRoleAdmin, {role})
    }

    hasRole(role: HasRoleParams["role"], account: HasRoleParams["account"]) {
        return this.eth_call(functions.hasRole, {role, account})
    }

    reserveAccounting() {
        return this.eth_call(functions.reserveAccounting, {})
    }

    stressDepth() {
        return this.eth_call(functions.stressDepth, {})
    }

    stressMarkdown() {
        return this.eth_call(functions.stressMarkdown, {})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }

    vaultEngine() {
        return this.eth_call(functions.vaultEngine, {})
    }

    volatileIlks(_0: VolatileIlksParams["_0"]) {
        return this.eth_call(functions.volatileIlks, {_0})
    }

    worstCaseLoss() {
        return this.eth_call(functions.worstCaseLoss, {})
    }
}

/// Event types
export type AddVolatileIlkEventArgs = EParams<typeof events.AddVolatileIlk>
export type DenyEventArgs = EParams<typeof events.Deny>
export type FileEventArgs = EParams<typeof events.File>
export type InvariantCheckedEventArgs = EParams<typeof events.InvariantChecked>
export type RelyEventArgs = EParams<typeof events.Rely>
export type RoleAdminChangedEventArgs = EParams<typeof events.RoleAdminChanged>
export type RoleGrantedEventArgs = EParams<typeof events.RoleGranted>
export type RoleRevokedEventArgs = EParams<typeof events.RoleRevoked>

/// Function types
export type DEFAULT_ADMIN_ROLEParams = FunctionArguments<typeof functions.DEFAULT_ADMIN_ROLE>
export type DEFAULT_ADMIN_ROLEReturn = FunctionReturn<typeof functions.DEFAULT_ADMIN_ROLE>

export type AddVolatileIlkParams = FunctionArguments<typeof functions.addVolatileIlk>
export type AddVolatileIlkReturn = FunctionReturn<typeof functions.addVolatileIlk>

export type CheckInvariantParams = FunctionArguments<typeof functions.checkInvariant>
export type CheckInvariantReturn = FunctionReturn<typeof functions.checkInvariant>

export type DenyParams = FunctionArguments<typeof functions.deny>
export type DenyReturn = FunctionReturn<typeof functions.deny>

export type ExternalExposureParams = FunctionArguments<typeof functions.externalExposure>
export type ExternalExposureReturn = FunctionReturn<typeof functions.externalExposure>

export type FileParams_0 = FunctionArguments<typeof functions['file(bytes32,uint256)']>
export type FileReturn_0 = FunctionReturn<typeof functions['file(bytes32,uint256)']>

export type FileParams_1 = FunctionArguments<typeof functions['file(bytes32,address)']>
export type FileReturn_1 = FunctionReturn<typeof functions['file(bytes32,address)']>

export type GetRoleAdminParams = FunctionArguments<typeof functions.getRoleAdmin>
export type GetRoleAdminReturn = FunctionReturn<typeof functions.getRoleAdmin>

export type GrantRoleParams = FunctionArguments<typeof functions.grantRole>
export type GrantRoleReturn = FunctionReturn<typeof functions.grantRole>

export type HasRoleParams = FunctionArguments<typeof functions.hasRole>
export type HasRoleReturn = FunctionReturn<typeof functions.hasRole>

export type RelyParams = FunctionArguments<typeof functions.rely>
export type RelyReturn = FunctionReturn<typeof functions.rely>

export type RenounceRoleParams = FunctionArguments<typeof functions.renounceRole>
export type RenounceRoleReturn = FunctionReturn<typeof functions.renounceRole>

export type ReserveAccountingParams = FunctionArguments<typeof functions.reserveAccounting>
export type ReserveAccountingReturn = FunctionReturn<typeof functions.reserveAccounting>

export type RevokeRoleParams = FunctionArguments<typeof functions.revokeRole>
export type RevokeRoleReturn = FunctionReturn<typeof functions.revokeRole>

export type StressDepthParams = FunctionArguments<typeof functions.stressDepth>
export type StressDepthReturn = FunctionReturn<typeof functions.stressDepth>

export type StressMarkdownParams = FunctionArguments<typeof functions.stressMarkdown>
export type StressMarkdownReturn = FunctionReturn<typeof functions.stressMarkdown>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type VaultEngineParams = FunctionArguments<typeof functions.vaultEngine>
export type VaultEngineReturn = FunctionReturn<typeof functions.vaultEngine>

export type VolatileIlksParams = FunctionArguments<typeof functions.volatileIlks>
export type VolatileIlksReturn = FunctionReturn<typeof functions.volatileIlks>

export type WorstCaseLossParams = FunctionArguments<typeof functions.worstCaseLoss>
export type WorstCaseLossReturn = FunctionReturn<typeof functions.worstCaseLoss>

