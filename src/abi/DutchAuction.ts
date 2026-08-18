import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Cage: event("0x2308ed18a14e800c39b86eb6ea43270105955ca385b603b64eca89f98ae8fbda", "Cage()", {}),
    'File(bytes32 indexed,uint256)': event("0xe986e40cc8c151830d4f61050f4fb2e4add8567caad2d5f5496f9158e91fe4c7", "File(bytes32,uint256)", {"what": indexed(p.bytes32), "data": p.uint256}),
    'File(bytes32 indexed,address)': event("0x8fef588b5fc1afbf5b2f06c1a435d513f208da2e6704c3d8f0e0ec91167066ba", "File(bytes32,address)", {"what": indexed(p.bytes32), "addr": p.address}),
    Kick: event("0x2d401861ff46b9558290672fd6c70bbac0595c769d4fa16f1a468f55c8e7386b", "Kick(uint256,uint256,uint256,uint256,uint256,address,address,uint256)", {"id": indexed(p.uint256), "top": p.uint256, "tab": p.uint256, "lot": p.uint256, "vaultId": indexed(p.uint256), "usr": p.address, "kpr": indexed(p.address), "coin": p.uint256}),
    Redo: event("0x275de7ecdd375b5e8049319f8b350686131c219dd4dc450a08e9cf83b03c865f", "Redo(uint256,uint256,uint256,uint256,address,address,uint256)", {"id": indexed(p.uint256), "top": p.uint256, "tab": p.uint256, "lot": p.uint256, "usr": indexed(p.address), "kpr": indexed(p.address), "coin": p.uint256}),
    RoleAdminChanged: event("0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff", "RoleAdminChanged(bytes32,bytes32,bytes32)", {"role": indexed(p.bytes32), "previousAdminRole": indexed(p.bytes32), "newAdminRole": indexed(p.bytes32)}),
    RoleGranted: event("0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d", "RoleGranted(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    RoleRevoked: event("0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b", "RoleRevoked(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    Take: event("0x05e309fd6ce72f2ab888a20056bb4210df08daed86f21f95053deb19964d86b1", "Take(uint256,uint256,uint256,uint256,uint256,uint256,address)", {"id": indexed(p.uint256), "max": p.uint256, "price": p.uint256, "owe": p.uint256, "tab": p.uint256, "lot": p.uint256, "usr": indexed(p.address)}),
    Upchost: event("0x55fdb012a699c045403977212c8fc12fd6d1642fa30eac085dc592c29077ce05", "Upchost(uint256)", {"chost": p.uint256}),
    Yank: event("0x2c5d2826eb5903b8fc201cf48094b858f42f61c7eaac9aaf43ebed490138144e", "Yank(uint256)", {"id": indexed(p.uint256)}),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: viewFun("0xa217fddf", "DEFAULT_ADMIN_ROLE()", {}, p.bytes32),
    ILK_ID: viewFun("0x8255570a", "ILK_ID()", {}, p.bytes32),
    VAULT_ENGINE: viewFun("0xfc0f6fd2", "VAULT_ENGINE()", {}, p.address),
    active: viewFun("0x8033d581", "active(uint256)", {"_0": p.uint256}, p.uint256),
    buf: viewFun("0x15232515", "buf()", {}, p.uint256),
    cage: fun("0x69245009", "cage()", {}, ),
    calc: viewFun("0x96f1b6be", "calc()", {}, p.address),
    chip: viewFun("0xb61500e4", "chip()", {}, p.uint64),
    chost: viewFun("0xba2cdc75", "chost()", {}, p.uint256),
    count: viewFun("0x06661abd", "count()", {}, p.uint256),
    cusp: viewFun("0x49ed5931", "cusp()", {}, p.uint256),
    dog: viewFun("0xc3b3ad7f", "dog()", {}, p.address),
    'file(bytes32,uint256)': fun("0x29ae8114", "file(bytes32,uint256)", {"what": p.bytes32, "data": p.uint256}, ),
    'file(bytes32,address)': fun("0xd4e8be83", "file(bytes32,address)", {"what": p.bytes32, "data": p.address}, ),
    getRoleAdmin: viewFun("0x248a9ca3", "getRoleAdmin(bytes32)", {"role": p.bytes32}, p.bytes32),
    getStatus: viewFun("0x5c622a0e", "getStatus(uint256)", {"id": p.uint256}, {"needsRedo": p.bool, "price": p.uint256, "lot": p.uint256, "tab": p.uint256}),
    governor: viewFun("0x0c340a24", "governor()", {}, p.address),
    grantRole: fun("0x2f2ff15d", "grantRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    hasRole: viewFun("0x91d14854", "hasRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, p.bool),
    kick: fun("0x8188afde", "kick(uint256,uint256,uint256,address,address)", {"tab": p.uint256, "lot": p.uint256, "vaultId": p.uint256, "usr": p.address, "kpr": p.address}, p.uint256),
    kicks: viewFun("0xcfdd3302", "kicks()", {}, p.uint256),
    list: viewFun("0x0f560cd7", "list()", {}, p.array(p.uint256)),
    live: viewFun("0x957aa58c", "live()", {}, p.uint256),
    pip: viewFun("0xd741e2f9", "pip()", {}, p.address),
    redo: fun("0xd843416d", "redo(uint256,address)", {"id": p.uint256, "kpr": p.address}, ),
    renounceRole: fun("0x36568abe", "renounceRole(bytes32,address)", {"role": p.bytes32, "callerConfirmation": p.address}, ),
    revokeRole: fun("0xd547741f", "revokeRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    sales: viewFun("0xb5f522f7", "sales(uint256)", {"id": p.uint256}, {"pos": p.uint256, "tab": p.uint256, "lot": p.uint256, "vaultId": p.uint256, "usr": p.address, "tic": p.uint96, "top": p.uint256}),
    stopped: viewFun("0x75f12b21", "stopped()", {}, p.uint256),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    tail: viewFun("0x13d8c840", "tail()", {}, p.uint256),
    take: fun("0x81a794cb", "take(uint256,uint256,uint256,address,bytes)", {"id": p.uint256, "amt": p.uint256, "max": p.uint256, "who": p.address, "data": p.bytes}, ),
    tip: viewFun("0x2755cd2d", "tip()", {}, p.uint192),
    upchost: fun("0x0cbb5862", "upchost()", {}, ),
    vow: viewFun("0x626cb3c5", "vow()", {}, p.address),
    yank: fun("0x26e027f1", "yank(uint256)", {"id": p.uint256}, ),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE() {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, {})
    }

    ILK_ID() {
        return this.eth_call(functions.ILK_ID, {})
    }

    VAULT_ENGINE() {
        return this.eth_call(functions.VAULT_ENGINE, {})
    }

    active(_0: ActiveParams["_0"]) {
        return this.eth_call(functions.active, {_0})
    }

    buf() {
        return this.eth_call(functions.buf, {})
    }

    calc() {
        return this.eth_call(functions.calc, {})
    }

    chip() {
        return this.eth_call(functions.chip, {})
    }

    chost() {
        return this.eth_call(functions.chost, {})
    }

    count() {
        return this.eth_call(functions.count, {})
    }

    cusp() {
        return this.eth_call(functions.cusp, {})
    }

    dog() {
        return this.eth_call(functions.dog, {})
    }

    getRoleAdmin(role: GetRoleAdminParams["role"]) {
        return this.eth_call(functions.getRoleAdmin, {role})
    }

    getStatus(id: GetStatusParams["id"]) {
        return this.eth_call(functions.getStatus, {id})
    }

    governor() {
        return this.eth_call(functions.governor, {})
    }

    hasRole(role: HasRoleParams["role"], account: HasRoleParams["account"]) {
        return this.eth_call(functions.hasRole, {role, account})
    }

    kicks() {
        return this.eth_call(functions.kicks, {})
    }

    list() {
        return this.eth_call(functions.list, {})
    }

    live() {
        return this.eth_call(functions.live, {})
    }

    pip() {
        return this.eth_call(functions.pip, {})
    }

    sales(id: SalesParams["id"]) {
        return this.eth_call(functions.sales, {id})
    }

    stopped() {
        return this.eth_call(functions.stopped, {})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }

    tail() {
        return this.eth_call(functions.tail, {})
    }

    tip() {
        return this.eth_call(functions.tip, {})
    }

    vow() {
        return this.eth_call(functions.vow, {})
    }
}

/// Event types
export type CageEventArgs = EParams<typeof events.Cage>
export type FileEventArgs_0 = EParams<typeof events['File(bytes32 indexed,uint256)']>
export type FileEventArgs_1 = EParams<typeof events['File(bytes32 indexed,address)']>
export type KickEventArgs = EParams<typeof events.Kick>
export type RedoEventArgs = EParams<typeof events.Redo>
export type RoleAdminChangedEventArgs = EParams<typeof events.RoleAdminChanged>
export type RoleGrantedEventArgs = EParams<typeof events.RoleGranted>
export type RoleRevokedEventArgs = EParams<typeof events.RoleRevoked>
export type TakeEventArgs = EParams<typeof events.Take>
export type UpchostEventArgs = EParams<typeof events.Upchost>
export type YankEventArgs = EParams<typeof events.Yank>

/// Function types
export type DEFAULT_ADMIN_ROLEParams = FunctionArguments<typeof functions.DEFAULT_ADMIN_ROLE>
export type DEFAULT_ADMIN_ROLEReturn = FunctionReturn<typeof functions.DEFAULT_ADMIN_ROLE>

export type ILK_IDParams = FunctionArguments<typeof functions.ILK_ID>
export type ILK_IDReturn = FunctionReturn<typeof functions.ILK_ID>

export type VAULT_ENGINEParams = FunctionArguments<typeof functions.VAULT_ENGINE>
export type VAULT_ENGINEReturn = FunctionReturn<typeof functions.VAULT_ENGINE>

export type ActiveParams = FunctionArguments<typeof functions.active>
export type ActiveReturn = FunctionReturn<typeof functions.active>

export type BufParams = FunctionArguments<typeof functions.buf>
export type BufReturn = FunctionReturn<typeof functions.buf>

export type CageParams = FunctionArguments<typeof functions.cage>
export type CageReturn = FunctionReturn<typeof functions.cage>

export type CalcParams = FunctionArguments<typeof functions.calc>
export type CalcReturn = FunctionReturn<typeof functions.calc>

export type ChipParams = FunctionArguments<typeof functions.chip>
export type ChipReturn = FunctionReturn<typeof functions.chip>

export type ChostParams = FunctionArguments<typeof functions.chost>
export type ChostReturn = FunctionReturn<typeof functions.chost>

export type CountParams = FunctionArguments<typeof functions.count>
export type CountReturn = FunctionReturn<typeof functions.count>

export type CuspParams = FunctionArguments<typeof functions.cusp>
export type CuspReturn = FunctionReturn<typeof functions.cusp>

export type DogParams = FunctionArguments<typeof functions.dog>
export type DogReturn = FunctionReturn<typeof functions.dog>

export type FileParams_0 = FunctionArguments<typeof functions['file(bytes32,uint256)']>
export type FileReturn_0 = FunctionReturn<typeof functions['file(bytes32,uint256)']>

export type FileParams_1 = FunctionArguments<typeof functions['file(bytes32,address)']>
export type FileReturn_1 = FunctionReturn<typeof functions['file(bytes32,address)']>

export type GetRoleAdminParams = FunctionArguments<typeof functions.getRoleAdmin>
export type GetRoleAdminReturn = FunctionReturn<typeof functions.getRoleAdmin>

export type GetStatusParams = FunctionArguments<typeof functions.getStatus>
export type GetStatusReturn = FunctionReturn<typeof functions.getStatus>

export type GovernorParams = FunctionArguments<typeof functions.governor>
export type GovernorReturn = FunctionReturn<typeof functions.governor>

export type GrantRoleParams = FunctionArguments<typeof functions.grantRole>
export type GrantRoleReturn = FunctionReturn<typeof functions.grantRole>

export type HasRoleParams = FunctionArguments<typeof functions.hasRole>
export type HasRoleReturn = FunctionReturn<typeof functions.hasRole>

export type KickParams = FunctionArguments<typeof functions.kick>
export type KickReturn = FunctionReturn<typeof functions.kick>

export type KicksParams = FunctionArguments<typeof functions.kicks>
export type KicksReturn = FunctionReturn<typeof functions.kicks>

export type ListParams = FunctionArguments<typeof functions.list>
export type ListReturn = FunctionReturn<typeof functions.list>

export type LiveParams = FunctionArguments<typeof functions.live>
export type LiveReturn = FunctionReturn<typeof functions.live>

export type PipParams = FunctionArguments<typeof functions.pip>
export type PipReturn = FunctionReturn<typeof functions.pip>

export type RedoParams = FunctionArguments<typeof functions.redo>
export type RedoReturn = FunctionReturn<typeof functions.redo>

export type RenounceRoleParams = FunctionArguments<typeof functions.renounceRole>
export type RenounceRoleReturn = FunctionReturn<typeof functions.renounceRole>

export type RevokeRoleParams = FunctionArguments<typeof functions.revokeRole>
export type RevokeRoleReturn = FunctionReturn<typeof functions.revokeRole>

export type SalesParams = FunctionArguments<typeof functions.sales>
export type SalesReturn = FunctionReturn<typeof functions.sales>

export type StoppedParams = FunctionArguments<typeof functions.stopped>
export type StoppedReturn = FunctionReturn<typeof functions.stopped>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type TailParams = FunctionArguments<typeof functions.tail>
export type TailReturn = FunctionReturn<typeof functions.tail>

export type TakeParams = FunctionArguments<typeof functions.take>
export type TakeReturn = FunctionReturn<typeof functions.take>

export type TipParams = FunctionArguments<typeof functions.tip>
export type TipReturn = FunctionReturn<typeof functions.tip>

export type UpchostParams = FunctionArguments<typeof functions.upchost>
export type UpchostReturn = FunctionReturn<typeof functions.upchost>

export type VowParams = FunctionArguments<typeof functions.vow>
export type VowReturn = FunctionReturn<typeof functions.vow>

export type YankParams = FunctionArguments<typeof functions.yank>
export type YankReturn = FunctionReturn<typeof functions.yank>

