import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BigIntColumn as BigIntColumn_, BytesColumn as BytesColumn_, IntColumn as IntColumn_, Index as Index_} from "@subsquid/typeorm-store"

@Entity_()
export class Kick {
    constructor(props?: Partial<Kick>) {
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

    @BytesColumn_({nullable: false})
    ilkId!: Uint8Array

    @BigIntColumn_({nullable: false})
    top!: bigint

    @BigIntColumn_({nullable: false})
    tab!: bigint

    @BigIntColumn_({nullable: false})
    lot!: bigint

    @Index_("idx_kick_vault_id_f336711a")
    @BigIntColumn_({nullable: false})
    vaultId!: bigint

    @BytesColumn_({nullable: false})
    usr!: Uint8Array

    @BytesColumn_({nullable: false})
    kpr!: Uint8Array

    @BigIntColumn_({nullable: false})
    coin!: bigint
}
