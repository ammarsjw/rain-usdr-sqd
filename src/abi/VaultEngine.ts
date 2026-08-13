import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Cage: event("0x2308ed18a14e800c39b86eb6ea43270105955ca385b603b64eca89f98ae8fbda", "Cage()", {}),
    'File(bytes32 indexed,uint256)': event("0xe986e40cc8c151830d4f61050f4fb2e4add8567caad2d5f5496f9158e91fe4c7", "File(bytes32,uint256)", {"what": indexed(p.bytes32), "data": p.uint256}),
    'File(bytes32 indexed,address)': event("0x8fef588b5fc1afbf5b2f06c1a435d513f208da2e6704c3d8f0e0ec91167066ba", "File(bytes32,address)", {"what": indexed(p.bytes32), "addr": p.address}),
    'File(bytes32 indexed,bytes32 indexed,uint256)': event("0x851aa1caf4888170ad8875449d18f0f512fd6deb2a6571ea1a41fb9f95acbcd1", "File(bytes32,bytes32,uint256)", {"ilkId": indexed(p.bytes32), "what": indexed(p.bytes32), "data": p.uint256}),
    Flux: event("0x5718eae79ffb8b6c98c497e5029a903705cf6a33a17aaab32de7fe198d8d8a0d", "Flux(bytes32,address,address,uint256)", {"ilkId": indexed(p.bytes32), "from": indexed(p.address), "to": indexed(p.address), "wad": p.uint256}),
    Frob: event("0xe37707842c8387f7c3c357f1d6c5bf57084e681573bdda024fae70cf0ecde80e", "Frob(bytes32,address,address,address,int256,int256)", {"ilkId": indexed(p.bytes32), "u": indexed(p.address), "v": p.address, "w": p.address, "dink": p.int256, "dart": p.int256}),
    Grab: event("0x1b2837fd40844c96cf39e52acaae7902fb74257fe20b1b7df5458b97d896c636", "Grab(bytes32,address,address,address,int256,int256)", {"ilkId": indexed(p.bytes32), "u": indexed(p.address), "v": p.address, "w": p.address, "dink": p.int256, "dart": p.int256}),
    Heal: event("0xf45656a54542e115023bb56558fa8a669119d7b2cc53bbc6c11b6ffc3b36e965", "Heal(address,uint256)", {"account": indexed(p.address), "rad": p.uint256}),
    Hope: event("0xaa731fc3330498a56e191236785be109218ed38365faa8c33965e6de3b78ee4c", "Hope(address,address)", {"owner": indexed(p.address), "operator": indexed(p.address)}),
    Init: event("0xeeb45f27c5b399a603237b10d4803743d494bfc24c3a004cadb716c41033a555", "Init(bytes32)", {"ilkId": indexed(p.bytes32)}),
    Move: event("0xdeb3a6837278f6e9914a507e4d73f08e841d8fca434fb97d4307b3b0d3d6b105", "Move(address,address,uint256)", {"from": indexed(p.address), "to": indexed(p.address), "rad": p.uint256}),
    Nope: event("0x181131ad57ffc99f2486240a094384037710b935bcd941b626ca2856316bb2c5", "Nope(address,address)", {"owner": indexed(p.address), "operator": indexed(p.address)}),
    RoleAdminChanged: event("0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff", "RoleAdminChanged(bytes32,bytes32,bytes32)", {"role": indexed(p.bytes32), "previousAdminRole": indexed(p.bytes32), "newAdminRole": indexed(p.bytes32)}),
    RoleGranted: event("0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d", "RoleGranted(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    RoleRevoked: event("0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b", "RoleRevoked(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    Slip: event("0x0d5f62756a04d37a9bb68fd20b97c7c6a03e96ab87385a99f99c2463157dba4e", "Slip(bytes32,address,int256)", {"ilkId": indexed(p.bytes32), "user": indexed(p.address), "wad": p.int256}),
    Suck: event("0x02d16dda43fd89f02e33ce23ecf0251cdc426807cc72ae74d37e8d3681dae7e5", "Suck(address,address,uint256)", {"u": indexed(p.address), "v": indexed(p.address), "rad": p.uint256}),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: viewFun("0xa217fddf", "DEFAULT_ADMIN_ROLE()", {}, p.bytes32),
    cage: fun("0x69245009", "cage()", {}, ),
    can: viewFun("0x4538c4eb", "can(address,address)", {"owner": p.address, "operator": p.address}, p.uint256),
    collateral: viewFun("0x685a4366", "collateral(bytes32,address)", {"ilkId": p.bytes32, "user": p.address}, p.uint256),
    debt: viewFun("0x0dca59c1", "debt()", {}, p.uint256),
    'file(bytes32,bytes32,uint256)': fun("0x1a0b287e", "file(bytes32,bytes32,uint256)", {"ilkId": p.bytes32, "what": p.bytes32, "data": p.uint256}, ),
    'file(bytes32,uint256)': fun("0x29ae8114", "file(bytes32,uint256)", {"what": p.bytes32, "data": p.uint256}, ),
    'file(bytes32,address)': fun("0xd4e8be83", "file(bytes32,address)", {"what": p.bytes32, "data": p.address}, ),
    flux: fun("0x6111be2e", "flux(bytes32,address,address,uint256)", {"ilkId": p.bytes32, "from": p.address, "to": p.address, "wad": p.uint256}, ),
    frob: fun("0x76088703", "frob(bytes32,address,address,address,int256,int256)", {"ilkId": p.bytes32, "u": p.address, "v": p.address, "w": p.address, "dink": p.int256, "dart": p.int256}, ),
    getRoleAdmin: viewFun("0x248a9ca3", "getRoleAdmin(bytes32)", {"role": p.bytes32}, p.bytes32),
    globalLine: viewFun("0x0a91f0ce", "globalLine()", {}, p.uint256),
    governor: viewFun("0x0c340a24", "governor()", {}, p.address),
    grab: fun("0x7bab3f40", "grab(bytes32,address,address,address,int256,int256)", {"ilkId": p.bytes32, "u": p.address, "v": p.address, "w": p.address, "dink": p.int256, "dart": p.int256}, ),
    grantRole: fun("0x2f2ff15d", "grantRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    hasRole: viewFun("0x91d14854", "hasRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, p.bool),
    heal: fun("0xf37ac61c", "heal(uint256)", {"rad": p.uint256}, ),
    hope: fun("0xa3b22fc4", "hope(address)", {"operator": p.address}, ),
    ilks: viewFun("0xd9638d36", "ilks(bytes32)", {"ilkId": p.bytes32}, {"globalArt": p.uint256, "globalInk": p.uint256, "rate": p.uint256, "spot": p.uint256, "line": p.uint256, "dust": p.uint256}),
    init: fun("0x3b663195", "init(bytes32)", {"ilkId": p.bytes32}, ),
    live: viewFun("0x957aa58c", "live()", {}, p.uint256),
    move: fun("0xbb35783b", "move(address,address,uint256)", {"from": p.address, "to": p.address, "rad": p.uint256}, ),
    nope: fun("0xdc4d20fa", "nope(address)", {"operator": p.address}, ),
    renounceRole: fun("0x36568abe", "renounceRole(bytes32,address)", {"role": p.bytes32, "callerConfirmation": p.address}, ),
    revokeRole: fun("0xd547741f", "revokeRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    sin: viewFun("0xf059212a", "sin(address)", {"debtSink": p.address}, p.uint256),
    slip: fun("0x7cdd3fde", "slip(bytes32,address,int256)", {"ilkId": p.bytes32, "user": p.address, "wad": p.int256}, ),
    solvencyEngine: viewFun("0xa898ed1e", "solvencyEngine()", {}, p.address),
    suck: fun("0xf24e23eb", "suck(address,address,uint256)", {"u": p.address, "v": p.address, "rad": p.uint256}, ),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    urns: viewFun("0x2424be5c", "urns(bytes32,address)", {"ilkId": p.bytes32, "vaultOwner": p.address}, {"ink": p.uint256, "art": p.uint256}),
    usdr: viewFun("0x6c2d6dc1", "usdr(address)", {"user": p.address}, p.uint256),
    vice: viewFun("0x2d61a355", "vice()", {}, p.uint256),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE() {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, {})
    }

    can(owner: CanParams["owner"], operator: CanParams["operator"]) {
        return this.eth_call(functions.can, {owner, operator})
    }

    collateral(ilkId: CollateralParams["ilkId"], user: CollateralParams["user"]) {
        return this.eth_call(functions.collateral, {ilkId, user})
    }

    debt() {
        return this.eth_call(functions.debt, {})
    }

    getRoleAdmin(role: GetRoleAdminParams["role"]) {
        return this.eth_call(functions.getRoleAdmin, {role})
    }

    globalLine() {
        return this.eth_call(functions.globalLine, {})
    }

    governor() {
        return this.eth_call(functions.governor, {})
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

    sin(debtSink: SinParams["debtSink"]) {
        return this.eth_call(functions.sin, {debtSink})
    }

    solvencyEngine() {
        return this.eth_call(functions.solvencyEngine, {})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }

    urns(ilkId: UrnsParams["ilkId"], vaultOwner: UrnsParams["vaultOwner"]) {
        return this.eth_call(functions.urns, {ilkId, vaultOwner})
    }

    usdr(user: UsdrParams["user"]) {
        return this.eth_call(functions.usdr, {user})
    }

    vice() {
        return this.eth_call(functions.vice, {})
    }
}

/// Event types
export type CageEventArgs = EParams<typeof events.Cage>
export type FileEventArgs_0 = EParams<typeof events['File(bytes32 indexed,uint256)']>
export type FileEventArgs_1 = EParams<typeof events['File(bytes32 indexed,address)']>
export type FileEventArgs_2 = EParams<typeof events['File(bytes32 indexed,bytes32 indexed,uint256)']>
export type FluxEventArgs = EParams<typeof events.Flux>
export type FrobEventArgs = EParams<typeof events.Frob>
export type GrabEventArgs = EParams<typeof events.Grab>
export type HealEventArgs = EParams<typeof events.Heal>
export type HopeEventArgs = EParams<typeof events.Hope>
export type InitEventArgs = EParams<typeof events.Init>
export type MoveEventArgs = EParams<typeof events.Move>
export type NopeEventArgs = EParams<typeof events.Nope>
export type RoleAdminChangedEventArgs = EParams<typeof events.RoleAdminChanged>
export type RoleGrantedEventArgs = EParams<typeof events.RoleGranted>
export type RoleRevokedEventArgs = EParams<typeof events.RoleRevoked>
export type SlipEventArgs = EParams<typeof events.Slip>
export type SuckEventArgs = EParams<typeof events.Suck>

/// Function types
export type DEFAULT_ADMIN_ROLEParams = FunctionArguments<typeof functions.DEFAULT_ADMIN_ROLE>
export type DEFAULT_ADMIN_ROLEReturn = FunctionReturn<typeof functions.DEFAULT_ADMIN_ROLE>

export type CageParams = FunctionArguments<typeof functions.cage>
export type CageReturn = FunctionReturn<typeof functions.cage>

export type CanParams = FunctionArguments<typeof functions.can>
export type CanReturn = FunctionReturn<typeof functions.can>

export type CollateralParams = FunctionArguments<typeof functions.collateral>
export type CollateralReturn = FunctionReturn<typeof functions.collateral>

export type DebtParams = FunctionArguments<typeof functions.debt>
export type DebtReturn = FunctionReturn<typeof functions.debt>

export type FileParams_0 = FunctionArguments<typeof functions['file(bytes32,bytes32,uint256)']>
export type FileReturn_0 = FunctionReturn<typeof functions['file(bytes32,bytes32,uint256)']>

export type FileParams_1 = FunctionArguments<typeof functions['file(bytes32,uint256)']>
export type FileReturn_1 = FunctionReturn<typeof functions['file(bytes32,uint256)']>

export type FileParams_2 = FunctionArguments<typeof functions['file(bytes32,address)']>
export type FileReturn_2 = FunctionReturn<typeof functions['file(bytes32,address)']>

export type FluxParams = FunctionArguments<typeof functions.flux>
export type FluxReturn = FunctionReturn<typeof functions.flux>

export type FrobParams = FunctionArguments<typeof functions.frob>
export type FrobReturn = FunctionReturn<typeof functions.frob>

export type GetRoleAdminParams = FunctionArguments<typeof functions.getRoleAdmin>
export type GetRoleAdminReturn = FunctionReturn<typeof functions.getRoleAdmin>

export type GlobalLineParams = FunctionArguments<typeof functions.globalLine>
export type GlobalLineReturn = FunctionReturn<typeof functions.globalLine>

export type GovernorParams = FunctionArguments<typeof functions.governor>
export type GovernorReturn = FunctionReturn<typeof functions.governor>

export type GrabParams = FunctionArguments<typeof functions.grab>
export type GrabReturn = FunctionReturn<typeof functions.grab>

export type GrantRoleParams = FunctionArguments<typeof functions.grantRole>
export type GrantRoleReturn = FunctionReturn<typeof functions.grantRole>

export type HasRoleParams = FunctionArguments<typeof functions.hasRole>
export type HasRoleReturn = FunctionReturn<typeof functions.hasRole>

export type HealParams = FunctionArguments<typeof functions.heal>
export type HealReturn = FunctionReturn<typeof functions.heal>

export type HopeParams = FunctionArguments<typeof functions.hope>
export type HopeReturn = FunctionReturn<typeof functions.hope>

export type IlksParams = FunctionArguments<typeof functions.ilks>
export type IlksReturn = FunctionReturn<typeof functions.ilks>

export type InitParams = FunctionArguments<typeof functions.init>
export type InitReturn = FunctionReturn<typeof functions.init>

export type LiveParams = FunctionArguments<typeof functions.live>
export type LiveReturn = FunctionReturn<typeof functions.live>

export type MoveParams = FunctionArguments<typeof functions.move>
export type MoveReturn = FunctionReturn<typeof functions.move>

export type NopeParams = FunctionArguments<typeof functions.nope>
export type NopeReturn = FunctionReturn<typeof functions.nope>

export type RenounceRoleParams = FunctionArguments<typeof functions.renounceRole>
export type RenounceRoleReturn = FunctionReturn<typeof functions.renounceRole>

export type RevokeRoleParams = FunctionArguments<typeof functions.revokeRole>
export type RevokeRoleReturn = FunctionReturn<typeof functions.revokeRole>

export type SinParams = FunctionArguments<typeof functions.sin>
export type SinReturn = FunctionReturn<typeof functions.sin>

export type SlipParams = FunctionArguments<typeof functions.slip>
export type SlipReturn = FunctionReturn<typeof functions.slip>

export type SolvencyEngineParams = FunctionArguments<typeof functions.solvencyEngine>
export type SolvencyEngineReturn = FunctionReturn<typeof functions.solvencyEngine>

export type SuckParams = FunctionArguments<typeof functions.suck>
export type SuckReturn = FunctionReturn<typeof functions.suck>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type UrnsParams = FunctionArguments<typeof functions.urns>
export type UrnsReturn = FunctionReturn<typeof functions.urns>

export type UsdrParams = FunctionArguments<typeof functions.usdr>
export type UsdrReturn = FunctionReturn<typeof functions.usdr>

export type ViceParams = FunctionArguments<typeof functions.vice>
export type ViceReturn = FunctionReturn<typeof functions.vice>

