import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Activated: event("0x3ec796be1be7d03bff3a62b9fa594a60e947c1809bced06d929f145308ae57ce", "Activated(uint256)", {"deviation": p.uint256}),
    Checked: event("0xcab88aead24041289177eaef7c6f88ca4744aa83613f0d718cc13a28c7dbbaed", "Checked(uint256,bool)", {"deviation": p.uint256, "active": p.bool}),
    Deactivated: event("0x1142a68cc39970640eb3524e77b91f78be21abc64f20f5919387eb46699bb772", "Deactivated()", {}),
    File: event("0xe986e40cc8c151830d4f61050f4fb2e4add8567caad2d5f5496f9158e91fe4c7", "File(bytes32,uint256)", {"what": indexed(p.bytes32), "data": p.uint256}),
    RoleAdminChanged: event("0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff", "RoleAdminChanged(bytes32,bytes32,bytes32)", {"role": indexed(p.bytes32), "previousAdminRole": indexed(p.bytes32), "newAdminRole": indexed(p.bytes32)}),
    RoleGranted: event("0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d", "RoleGranted(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    RoleRevoked: event("0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b", "RoleRevoked(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: viewFun("0xa217fddf", "DEFAULT_ADMIN_ROLE()", {}, p.bytes32),
    ILK_ID: viewFun("0x8255570a", "ILK_ID()", {}, p.bytes32),
    PIP: viewFun("0xd632fd1d", "PIP()", {}, p.address),
    TREND_WINDOW: viewFun("0xf5b738b7", "TREND_WINDOW()", {}, p.uint256),
    active: viewFun("0x02fb0c5e", "active()", {}, p.bool),
    calmBlocks: viewFun("0x5993cf90", "calmBlocks()", {}, p.uint256),
    calmCount: viewFun("0xa8465c66", "calmCount()", {}, p.uint256),
    check: fun("0x919840ad", "check()", {}, ),
    file: fun("0x29ae8114", "file(bytes32,uint256)", {"what": p.bytes32, "data": p.uint256}, ),
    getRoleAdmin: viewFun("0x248a9ca3", "getRoleAdmin(bytes32)", {"role": p.bytes32}, p.bytes32),
    grantRole: fun("0x2f2ff15d", "grantRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    hasRole: viewFun("0x91d14854", "hasRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, p.bool),
    lastCheckedBlock: viewFun("0x7f76614b", "lastCheckedBlock()", {}, p.uint256),
    renounceRole: fun("0x36568abe", "renounceRole(bytes32,address)", {"role": p.bytes32, "callerConfirmation": p.address}, ),
    revokeRole: fun("0xd547741f", "revokeRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    threshold: viewFun("0x42cde4e8", "threshold()", {}, p.uint256),
    trendPrice: viewFun("0x3076fb57", "trendPrice()", {}, p.uint256),
    trendTimestamp: viewFun("0x6fa9c1d5", "trendTimestamp()", {}, p.uint256),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE() {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, {})
    }

    ILK_ID() {
        return this.eth_call(functions.ILK_ID, {})
    }

    PIP() {
        return this.eth_call(functions.PIP, {})
    }

    TREND_WINDOW() {
        return this.eth_call(functions.TREND_WINDOW, {})
    }

    active() {
        return this.eth_call(functions.active, {})
    }

    calmBlocks() {
        return this.eth_call(functions.calmBlocks, {})
    }

    calmCount() {
        return this.eth_call(functions.calmCount, {})
    }

    getRoleAdmin(role: GetRoleAdminParams["role"]) {
        return this.eth_call(functions.getRoleAdmin, {role})
    }

    hasRole(role: HasRoleParams["role"], account: HasRoleParams["account"]) {
        return this.eth_call(functions.hasRole, {role, account})
    }

    lastCheckedBlock() {
        return this.eth_call(functions.lastCheckedBlock, {})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }

    threshold() {
        return this.eth_call(functions.threshold, {})
    }

    trendPrice() {
        return this.eth_call(functions.trendPrice, {})
    }

    trendTimestamp() {
        return this.eth_call(functions.trendTimestamp, {})
    }
}

/// Event types
export type ActivatedEventArgs = EParams<typeof events.Activated>
export type CheckedEventArgs = EParams<typeof events.Checked>
export type DeactivatedEventArgs = EParams<typeof events.Deactivated>
export type FileEventArgs = EParams<typeof events.File>
export type RoleAdminChangedEventArgs = EParams<typeof events.RoleAdminChanged>
export type RoleGrantedEventArgs = EParams<typeof events.RoleGranted>
export type RoleRevokedEventArgs = EParams<typeof events.RoleRevoked>

/// Function types
export type DEFAULT_ADMIN_ROLEParams = FunctionArguments<typeof functions.DEFAULT_ADMIN_ROLE>
export type DEFAULT_ADMIN_ROLEReturn = FunctionReturn<typeof functions.DEFAULT_ADMIN_ROLE>

export type ILK_IDParams = FunctionArguments<typeof functions.ILK_ID>
export type ILK_IDReturn = FunctionReturn<typeof functions.ILK_ID>

export type PIPParams = FunctionArguments<typeof functions.PIP>
export type PIPReturn = FunctionReturn<typeof functions.PIP>

export type TREND_WINDOWParams = FunctionArguments<typeof functions.TREND_WINDOW>
export type TREND_WINDOWReturn = FunctionReturn<typeof functions.TREND_WINDOW>

export type ActiveParams = FunctionArguments<typeof functions.active>
export type ActiveReturn = FunctionReturn<typeof functions.active>

export type CalmBlocksParams = FunctionArguments<typeof functions.calmBlocks>
export type CalmBlocksReturn = FunctionReturn<typeof functions.calmBlocks>

export type CalmCountParams = FunctionArguments<typeof functions.calmCount>
export type CalmCountReturn = FunctionReturn<typeof functions.calmCount>

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

export type LastCheckedBlockParams = FunctionArguments<typeof functions.lastCheckedBlock>
export type LastCheckedBlockReturn = FunctionReturn<typeof functions.lastCheckedBlock>

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

export type TrendTimestampParams = FunctionArguments<typeof functions.trendTimestamp>
export type TrendTimestampReturn = FunctionReturn<typeof functions.trendTimestamp>

