import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BigIntColumn as BigIntColumn_, BytesColumn as BytesColumn_, IntColumn as IntColumn_, Index as Index_} from "@subsquid/typeorm-store"

@Entity_()
export class Cash {
    constructor(props?: Partial<Cash>) {
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
    ilkId!: Uint8Array

    @Index_("idx_cash_usr_17308915")
    @BytesColumn_({nullable: false})
    usr!: Uint8Array

    @BigIntColumn_({nullable: false})
    wad!: bigint

    @BigIntColumn_({nullable: false})
    ink!: bigint
}
