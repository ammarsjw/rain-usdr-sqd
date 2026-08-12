import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BigIntColumn as BigIntColumn_, BytesColumn as BytesColumn_, IntColumn as IntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class RoleAdminChanged {
    constructor(props?: Partial<RoleAdminChanged>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @BigIntColumn_({nullable: false})
    blockNumber!: bigint

    @BigIntColumn_({nullable: false})
    blockTimestamp!: bigint

    @BytesColumn_({nullable: false})
    transactionHash!: Uint8Array

    @BytesColumn_({nullable: false})
    contractAddress!: Uint8Array

    @IntColumn_({nullable: false})
    eventLogIndex!: number

    @BytesColumn_({nullable: false})
    role!: Uint8Array

    @BytesColumn_({nullable: false})
    previousAdminRole!: Uint8Array

    @BytesColumn_({nullable: false})
    newAdminRole!: Uint8Array
}
