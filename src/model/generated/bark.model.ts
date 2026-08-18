import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BigIntColumn as BigIntColumn_, BytesColumn as BytesColumn_, IntColumn as IntColumn_, Index as Index_} from "@subsquid/typeorm-store"

@Entity_()
export class Bark {
    constructor(props?: Partial<Bark>) {
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

    @Index_("idx_bark_vault_id_bd86ceb8")
    @BigIntColumn_({nullable: false})
    vaultId!: bigint

    @Index_("idx_bark_urn_909d1448")
    @BytesColumn_({nullable: false})
    urn!: Uint8Array

    @BigIntColumn_({nullable: false})
    ink!: bigint

    @BigIntColumn_({nullable: false})
    art!: bigint

    @BigIntColumn_({nullable: false})
    due!: bigint

    @BytesColumn_({nullable: false})
    clip!: Uint8Array

    @BigIntColumn_({nullable: false})
    auctionId!: bigint
}
