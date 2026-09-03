import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    DistributeSurplus: event("0x2715d9b8da95cf181c609d2011dfc1e6a5af190b40cce4d013e1eb368fabe459", "DistributeSurplus(uint256)", {"excess": p.uint256}),
    Fess: event("0x7a3f1a1ebf14b193365bc7468b58eb3b80ae1638635424aae4eec386da2f02ba", "Fess(uint256)", {"tab": p.uint256}),
    'File(bytes32 indexed,uint256)': event("0xe986e40cc8c151830d4f61050f4fb2e4add8567caad2d5f5496f9158e91fe4c7", "File(bytes32,uint256)", {"what": indexed(p.bytes32), "data": p.uint256}),
    'File(bytes32 indexed,address)': event("0x8fef588b5fc1afbf5b2f06c1a435d513f208da2e6704c3d8f0e0ec91167066ba", "File(bytes32,address)", {"what": indexed(p.bytes32), "addr": p.address}),
    Flog: event("0x77f6d637bdb297972e16e03f99afbda73b21a36342b99e24dca178d404e6ab9f", "Flog(uint256,uint256)", {"era": indexed(p.uint256), "tab": p.uint256}),
    Heal: event("0x917d6982889419f491488c036c2e6abe788b07222064ab462158ec64ca2c4db7", "Heal(uint256)", {"rad": p.uint256}),
    RoleAdminChanged: event("0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff", "RoleAdminChanged(bytes32,bytes32,bytes32)", {"role": indexed(p.bytes32), "previousAdminRole": indexed(p.bytes32), "newAdminRole": indexed(p.bytes32)}),
    RoleGranted: event("0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d", "RoleGranted(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    RoleRevoked: event("0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b", "RoleRevoked(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    SnapshotReserve: event("0x2b5e275c7a189a6b87a21849009efd8bac1f4525a312b4604e3d43d5dd28bae4", "SnapshotReserve(uint256)", {"reserve": p.uint256}),
    Suck: event("0x7e266d2c9b5648cbc163cf6405c44a8b1f3e4affdcf6154e80d6b9cbcba4370e", "Suck(address,uint256)", {"kpr": indexed(p.address), "rad": p.uint256}),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: viewFun("0xa217fddf", "DEFAULT_ADMIN_ROLE()", {}, p.bytes32),
    VAULT_ENGINE: viewFun("0xfc0f6fd2", "VAULT_ENGINE()", {}, p.address),
    buybackReceiver: viewFun("0x1df59e2f", "buybackReceiver()", {}, p.address),
    distributeSurplus: fun("0xc80a0a7f", "distributeSurplus()", {}, p.uint256),
    fess: fun("0x697efb78", "fess(uint256)", {"tab": p.uint256}, ),
    'file(bytes32,uint256)': fun("0x29ae8114", "file(bytes32,uint256)", {"what": p.bytes32, "data": p.uint256}, ),
    'file(bytes32,address)': fun("0xd4e8be83", "file(bytes32,address)", {"what": p.bytes32, "data": p.address}, ),
    flog: fun("0xd7ee674b", "flog(uint256)", {"era": p.uint256}, ),
    getRoleAdmin: viewFun("0x248a9ca3", "getRoleAdmin(bytes32)", {"role": p.bytes32}, p.bytes32),
    grantRole: fun("0x2f2ff15d", "grantRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    hasRole: viewFun("0x91d14854", "hasRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, p.bool),
    heal: fun("0xf37ac61c", "heal(uint256)", {"rad": p.uint256}, ),
    humpFloor: viewFun("0xb810e3e3", "humpFloor()", {}, p.uint256),
    humpRate: viewFun("0xad80d42f", "humpRate()", {}, p.uint256),
    humpTarget: viewFun("0x02c0bf36", "humpTarget()", {}, p.uint256),
    laggedReserve: viewFun("0x8a809d5f", "laggedReserve()", {}, p.uint256),
    laggedReserveAt: viewFun("0xa6d84d2b", "laggedReserveAt()", {}, p.uint256),
    renounceRole: fun("0x36568abe", "renounceRole(bytes32,address)", {"role": p.bytes32, "callerConfirmation": p.address}, ),
    reserveAccounting: viewFun("0x9d155075", "reserveAccounting()", {}, p.address),
    revokeRole: fun("0xd547741f", "revokeRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    sin: viewFun("0xcb5cc109", "sin(uint256)", {"era": p.uint256}, p.uint256),
    snapshotReserve: fun("0x99597c24", "snapshotReserve()", {}, ),
    solvencyEngine: viewFun("0xa898ed1e", "solvencyEngine()", {}, p.address),
    suck: fun("0x0465b2b8", "suck(address,uint256)", {"kpr": p.address, "rad": p.uint256}, ),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    totalQueuedSin: viewFun("0xb4f8ea10", "totalQueuedSin()", {}, p.uint256),
    wait: viewFun("0x64bd7013", "wait()", {}, p.uint256),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE() {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, {})
    }

    VAULT_ENGINE() {
        return this.eth_call(functions.VAULT_ENGINE, {})
    }

    buybackReceiver() {
        return this.eth_call(functions.buybackReceiver, {})
    }

    getRoleAdmin(role: GetRoleAdminParams["role"]) {
        return this.eth_call(functions.getRoleAdmin, {role})
    }

    hasRole(role: HasRoleParams["role"], account: HasRoleParams["account"]) {
        return this.eth_call(functions.hasRole, {role, account})
    }

    humpFloor() {
        return this.eth_call(functions.humpFloor, {})
    }

    humpRate() {
        return this.eth_call(functions.humpRate, {})
    }

    humpTarget() {
        return this.eth_call(functions.humpTarget, {})
    }

    laggedReserve() {
        return this.eth_call(functions.laggedReserve, {})
    }

    laggedReserveAt() {
        return this.eth_call(functions.laggedReserveAt, {})
    }

    reserveAccounting() {
        return this.eth_call(functions.reserveAccounting, {})
    }

    sin(era: SinParams["era"]) {
        return this.eth_call(functions.sin, {era})
    }

    solvencyEngine() {
        return this.eth_call(functions.solvencyEngine, {})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }

    totalQueuedSin() {
        return this.eth_call(functions.totalQueuedSin, {})
    }

    wait() {
        return this.eth_call(functions.wait, {})
    }
}

/// Event types
export type DistributeSurplusEventArgs = EParams<typeof events.DistributeSurplus>
export type FessEventArgs = EParams<typeof events.Fess>
export type FileEventArgs_0 = EParams<typeof events['File(bytes32 indexed,uint256)']>
export type FileEventArgs_1 = EParams<typeof events['File(bytes32 indexed,address)']>
export type FlogEventArgs = EParams<typeof events.Flog>
export type HealEventArgs = EParams<typeof events.Heal>
export type RoleAdminChangedEventArgs = EParams<typeof events.RoleAdminChanged>
export type RoleGrantedEventArgs = EParams<typeof events.RoleGranted>
export type RoleRevokedEventArgs = EParams<typeof events.RoleRevoked>
export type SnapshotReserveEventArgs = EParams<typeof events.SnapshotReserve>
export type SuckEventArgs = EParams<typeof events.Suck>

/// Function types
export type DEFAULT_ADMIN_ROLEParams = FunctionArguments<typeof functions.DEFAULT_ADMIN_ROLE>
export type DEFAULT_ADMIN_ROLEReturn = FunctionReturn<typeof functions.DEFAULT_ADMIN_ROLE>

export type VAULT_ENGINEParams = FunctionArguments<typeof functions.VAULT_ENGINE>
export type VAULT_ENGINEReturn = FunctionReturn<typeof functions.VAULT_ENGINE>

export type BuybackReceiverParams = FunctionArguments<typeof functions.buybackReceiver>
export type BuybackReceiverReturn = FunctionReturn<typeof functions.buybackReceiver>

export type DistributeSurplusParams = FunctionArguments<typeof functions.distributeSurplus>
export type DistributeSurplusReturn = FunctionReturn<typeof functions.distributeSurplus>

export type FessParams = FunctionArguments<typeof functions.fess>
export type FessReturn = FunctionReturn<typeof functions.fess>

export type FileParams_0 = FunctionArguments<typeof functions['file(bytes32,uint256)']>
export type FileReturn_0 = FunctionReturn<typeof functions['file(bytes32,uint256)']>

export type FileParams_1 = FunctionArguments<typeof functions['file(bytes32,address)']>
export type FileReturn_1 = FunctionReturn<typeof functions['file(bytes32,address)']>

export type FlogParams = FunctionArguments<typeof functions.flog>
export type FlogReturn = FunctionReturn<typeof functions.flog>

export type GetRoleAdminParams = FunctionArguments<typeof functions.getRoleAdmin>
export type GetRoleAdminReturn = FunctionReturn<typeof functions.getRoleAdmin>

export type GrantRoleParams = FunctionArguments<typeof functions.grantRole>
export type GrantRoleReturn = FunctionReturn<typeof functions.grantRole>

export type HasRoleParams = FunctionArguments<typeof functions.hasRole>
export type HasRoleReturn = FunctionReturn<typeof functions.hasRole>

export type HealParams = FunctionArguments<typeof functions.heal>
export type HealReturn = FunctionReturn<typeof functions.heal>

export type HumpFloorParams = FunctionArguments<typeof functions.humpFloor>
export type HumpFloorReturn = FunctionReturn<typeof functions.humpFloor>

export type HumpRateParams = FunctionArguments<typeof functions.humpRate>
export type HumpRateReturn = FunctionReturn<typeof functions.humpRate>

export type HumpTargetParams = FunctionArguments<typeof functions.humpTarget>
export type HumpTargetReturn = FunctionReturn<typeof functions.humpTarget>

export type LaggedReserveParams = FunctionArguments<typeof functions.laggedReserve>
export type LaggedReserveReturn = FunctionReturn<typeof functions.laggedReserve>

export type LaggedReserveAtParams = FunctionArguments<typeof functions.laggedReserveAt>
export type LaggedReserveAtReturn = FunctionReturn<typeof functions.laggedReserveAt>

export type RenounceRoleParams = FunctionArguments<typeof functions.renounceRole>
export type RenounceRoleReturn = FunctionReturn<typeof functions.renounceRole>

export type ReserveAccountingParams = FunctionArguments<typeof functions.reserveAccounting>
export type ReserveAccountingReturn = FunctionReturn<typeof functions.reserveAccounting>

export type RevokeRoleParams = FunctionArguments<typeof functions.revokeRole>
export type RevokeRoleReturn = FunctionReturn<typeof functions.revokeRole>

export type SinParams = FunctionArguments<typeof functions.sin>
export type SinReturn = FunctionReturn<typeof functions.sin>

export type SnapshotReserveParams = FunctionArguments<typeof functions.snapshotReserve>
export type SnapshotReserveReturn = FunctionReturn<typeof functions.snapshotReserve>

export type SolvencyEngineParams = FunctionArguments<typeof functions.solvencyEngine>
export type SolvencyEngineReturn = FunctionReturn<typeof functions.solvencyEngine>

export type SuckParams = FunctionArguments<typeof functions.suck>
export type SuckReturn = FunctionReturn<typeof functions.suck>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type TotalQueuedSinParams = FunctionArguments<typeof functions.totalQueuedSin>
export type TotalQueuedSinReturn = FunctionReturn<typeof functions.totalQueuedSin>

export type WaitParams = FunctionArguments<typeof functions.wait>
export type WaitReturn = FunctionReturn<typeof functions.wait>

