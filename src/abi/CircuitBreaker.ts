import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Activated: event("0x8e57021b78ab31ef6ce34223a89228a0bc3cc0675eb856bb308221842afe77bc", "Activated(bytes32,uint256)", {"ilkId": indexed(p.bytes32), "deviation": p.uint256}),
    AddIlk: event("0x74ceb2982b813d6b690af89638316706e6acb9a48fced388741b61b510f165b7", "AddIlk(bytes32)", {"ilkId": indexed(p.bytes32)}),
    Checked: event("0xd81b631c69ddf3df79b1b416cdcebd338fcc41fec5c12073ca0df44f9ecb912c", "Checked(bytes32,uint256,bool)", {"worstIlk": indexed(p.bytes32), "maxDeviation": p.uint256, "active": p.bool}),
    Deactivated: event("0x1142a68cc39970640eb3524e77b91f78be21abc64f20f5919387eb46699bb772", "Deactivated()", {}),
    File: event("0xe986e40cc8c151830d4f61050f4fb2e4add8567caad2d5f5496f9158e91fe4c7", "File(bytes32,uint256)", {"what": indexed(p.bytes32), "data": p.uint256}),
    RemoveIlk: event("0x42f3b824eb9d522b949ff3d8f70db1872c46f3fc68b6df1a4c8d6aaebfcb6796", "RemoveIlk(bytes32)", {"ilkId": indexed(p.bytes32)}),
    RoleAdminChanged: event("0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff", "RoleAdminChanged(bytes32,bytes32,bytes32)", {"role": indexed(p.bytes32), "previousAdminRole": indexed(p.bytes32), "newAdminRole": indexed(p.bytes32)}),
    RoleGranted: event("0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d", "RoleGranted(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    RoleRevoked: event("0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b", "RoleRevoked(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: viewFun("0xa217fddf", "DEFAULT_ADMIN_ROLE()", {}, p.bytes32),
    OBS_COUNT: viewFun("0x709dfa2d", "OBS_COUNT()", {}, p.uint256),
    ORACLE_SECURITY_MODULE: viewFun("0xad711c32", "ORACLE_SECURITY_MODULE()", {}, p.address),
    VAULT_ENGINE: viewFun("0xfc0f6fd2", "VAULT_ENGINE()", {}, p.address),
    activatedAt: viewFun("0x597be6d1", "activatedAt()", {}, p.uint256),
    active: viewFun("0x02fb0c5e", "active()", {}, p.bool),
    addIlk: fun("0xf2dd3992", "addIlk(bytes32)", {"ilkId": p.bytes32}, ),
    calmPeriod: viewFun("0xa2bc60f1", "calmPeriod()", {}, p.uint256),
    check: fun("0x919840ad", "check()", {}, ),
    file: fun("0x29ae8114", "file(bytes32,uint256)", {"what": p.bytes32, "data": p.uint256}, ),
    getRoleAdmin: viewFun("0x248a9ca3", "getRoleAdmin(bytes32)", {"role": p.bytes32}, p.bytes32),
    grantRole: fun("0x2f2ff15d", "grantRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    hasRole: viewFun("0x91d14854", "hasRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, p.bool),
    ilkCount: viewFun("0xb64e0001", "ilkCount()", {}, p.uint256),
    isWatched: viewFun("0xb169e315", "isWatched(bytes32)", {"ilkId": p.bytes32}, p.bool),
    lastObsTimestamp: viewFun("0xde83d719", "lastObsTimestamp()", {}, p.uint256),
    obsInterval: viewFun("0x1c9c1f90", "obsInterval()", {}, p.uint256),
    removeIlk: fun("0xd094b1f1", "removeIlk(bytes32)", {"ilkId": p.bytes32}, ),
    renounceRole: fun("0x36568abe", "renounceRole(bytes32,address)", {"role": p.bytes32, "callerConfirmation": p.address}, ),
    revokeRole: fun("0xd547741f", "revokeRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    threshold: viewFun("0x42cde4e8", "threshold()", {}, p.uint256),
    trendPrice: viewFun("0xa9b10d7b", "trendPrice(bytes32)", {"ilkId": p.bytes32}, p.uint256),
    watchedIlks: viewFun("0x554fbc40", "watchedIlks(uint256)", {"_0": p.uint256}, p.bytes32),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE() {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, {})
    }

    OBS_COUNT() {
        return this.eth_call(functions.OBS_COUNT, {})
    }

    ORACLE_SECURITY_MODULE() {
        return this.eth_call(functions.ORACLE_SECURITY_MODULE, {})
    }

    VAULT_ENGINE() {
        return this.eth_call(functions.VAULT_ENGINE, {})
    }

    activatedAt() {
        return this.eth_call(functions.activatedAt, {})
    }

    active() {
        return this.eth_call(functions.active, {})
    }

    calmPeriod() {
        return this.eth_call(functions.calmPeriod, {})
    }

    getRoleAdmin(role: GetRoleAdminParams["role"]) {
        return this.eth_call(functions.getRoleAdmin, {role})
    }

    hasRole(role: HasRoleParams["role"], account: HasRoleParams["account"]) {
        return this.eth_call(functions.hasRole, {role, account})
    }

    ilkCount() {
        return this.eth_call(functions.ilkCount, {})
    }

    isWatched(ilkId: IsWatchedParams["ilkId"]) {
        return this.eth_call(functions.isWatched, {ilkId})
    }

    lastObsTimestamp() {
        return this.eth_call(functions.lastObsTimestamp, {})
    }

    obsInterval() {
        return this.eth_call(functions.obsInterval, {})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }

    threshold() {
        return this.eth_call(functions.threshold, {})
    }

    trendPrice(ilkId: TrendPriceParams["ilkId"]) {
        return this.eth_call(functions.trendPrice, {ilkId})
    }

    watchedIlks(_0: WatchedIlksParams["_0"]) {
        return this.eth_call(functions.watchedIlks, {_0})
    }
}

/// Event types
export type ActivatedEventArgs = EParams<typeof events.Activated>
export type AddIlkEventArgs = EParams<typeof events.AddIlk>
export type CheckedEventArgs = EParams<typeof events.Checked>
export type DeactivatedEventArgs = EParams<typeof events.Deactivated>
export type FileEventArgs = EParams<typeof events.File>
export type RemoveIlkEventArgs = EParams<typeof events.RemoveIlk>
export type RoleAdminChangedEventArgs = EParams<typeof events.RoleAdminChanged>
export type RoleGrantedEventArgs = EParams<typeof events.RoleGranted>
export type RoleRevokedEventArgs = EParams<typeof events.RoleRevoked>

/// Function types
export type DEFAULT_ADMIN_ROLEParams = FunctionArguments<typeof functions.DEFAULT_ADMIN_ROLE>
export type DEFAULT_ADMIN_ROLEReturn = FunctionReturn<typeof functions.DEFAULT_ADMIN_ROLE>

export type OBS_COUNTParams = FunctionArguments<typeof functions.OBS_COUNT>
export type OBS_COUNTReturn = FunctionReturn<typeof functions.OBS_COUNT>

export type ORACLE_SECURITY_MODULEParams = FunctionArguments<typeof functions.ORACLE_SECURITY_MODULE>
export type ORACLE_SECURITY_MODULEReturn = FunctionReturn<typeof functions.ORACLE_SECURITY_MODULE>

export type VAULT_ENGINEParams = FunctionArguments<typeof functions.VAULT_ENGINE>
export type VAULT_ENGINEReturn = FunctionReturn<typeof functions.VAULT_ENGINE>

export type ActivatedAtParams = FunctionArguments<typeof functions.activatedAt>
export type ActivatedAtReturn = FunctionReturn<typeof functions.activatedAt>

export type ActiveParams = FunctionArguments<typeof functions.active>
export type ActiveReturn = FunctionReturn<typeof functions.active>

export type AddIlkParams = FunctionArguments<typeof functions.addIlk>
export type AddIlkReturn = FunctionReturn<typeof functions.addIlk>

export type CalmPeriodParams = FunctionArguments<typeof functions.calmPeriod>
export type CalmPeriodReturn = FunctionReturn<typeof functions.calmPeriod>

export type CheckParams = FunctionArguments<typeof functions.check>
export type CheckReturn = FunctionReturn<typeof functions.check>

export type FileParams = FunctionArguments<typeof functions.file>
export type FileReturn = FunctionReturn<typeof functions.file>

export type GetRoleAdminParams = FunctionArguments<typeof functions.getRoleAdmin>
export type GetRoleAdminReturn = FunctionReturn<typeof functions.getRoleAdmin>

export type GrantRoleParams = FunctionArguments<typeof functions.grantRole>
export type GrantRoleReturn = FunctionReturn<typeof functions.grantRole>

export type HasRoleParams = FunctionArguments<typeof functions.hasRole>
export type HasRoleReturn = FunctionReturn<typeof functions.hasRole>

export type IlkCountParams = FunctionArguments<typeof functions.ilkCount>
export type IlkCountReturn = FunctionReturn<typeof functions.ilkCount>

export type IsWatchedParams = FunctionArguments<typeof functions.isWatched>
export type IsWatchedReturn = FunctionReturn<typeof functions.isWatched>

export type LastObsTimestampParams = FunctionArguments<typeof functions.lastObsTimestamp>
export type LastObsTimestampReturn = FunctionReturn<typeof functions.lastObsTimestamp>

export type ObsIntervalParams = FunctionArguments<typeof functions.obsInterval>
export type ObsIntervalReturn = FunctionReturn<typeof functions.obsInterval>

export type RemoveIlkParams = FunctionArguments<typeof functions.removeIlk>
export type RemoveIlkReturn = FunctionReturn<typeof functions.removeIlk>

export type RenounceRoleParams = FunctionArguments<typeof functions.renounceRole>
export type RenounceRoleReturn = FunctionReturn<typeof functions.renounceRole>

export type RevokeRoleParams = FunctionArguments<typeof functions.revokeRole>
export type RevokeRoleReturn = FunctionReturn<typeof functions.revokeRole>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type ThresholdParams = FunctionArguments<typeof functions.threshold>
export type ThresholdReturn = FunctionReturn<typeof functions.threshold>

export type TrendPriceParams = FunctionArguments<typeof functions.trendPrice>
export type TrendPriceReturn = FunctionReturn<typeof functions.trendPrice>

export type WatchedIlksParams = FunctionArguments<typeof functions.watchedIlks>
export type WatchedIlksReturn = FunctionReturn<typeof functions.watchedIlks>

