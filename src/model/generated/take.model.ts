import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BigIntColumn as BigIntColumn_, BytesColumn as BytesColumn_, IntColumn as IntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class Take {
    constructor(props?: Partial<Take>) {
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

    @BigIntColumn_({nullable: false})
    auctionId!: bigint

    @BigIntColumn_({nullable: false})
    max!: bigint

    @BigIntColumn_({nullable: false})
    price!: bigint

    @BigIntColumn_({nullable: false})
    owe!: bigint

    @BigIntColumn_({nullable: false})
    tab!: bigint

    @BigIntColumn_({nullable: false})
    lot!: bigint

    @BytesColumn_({nullable: false})
    usr!: Uint8Array
}
