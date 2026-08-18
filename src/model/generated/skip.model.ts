import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BigIntColumn as BigIntColumn_, BytesColumn as BytesColumn_, IntColumn as IntColumn_, Index as Index_} from "@subsquid/typeorm-store"

@Entity_()
export class Skip {
    constructor(props?: Partial<Skip>) {
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

    @BigIntColumn_({nullable: false})
    auctionId!: bigint

    @Index_("idx_skip_vault_id_fbd27ad3")
    @BigIntColumn_({nullable: false})
    vaultId!: bigint

    @BigIntColumn_({nullable: false})
    lot!: bigint

    @BigIntColumn_({nullable: false})
    art!: bigint
}
