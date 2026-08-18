import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BigIntColumn as BigIntColumn_, BytesColumn as BytesColumn_, IntColumn as IntColumn_, Index as Index_} from "@subsquid/typeorm-store"

@Entity_()
export class Free {
    constructor(props?: Partial<Free>) {
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

    @Index_("idx_free_vault_id_3a97b1fb")
    @BigIntColumn_({nullable: false})
    vaultId!: bigint

    @Index_("idx_free_owner_87a0ebee")
    @BytesColumn_({nullable: false})
    owner!: Uint8Array

    @BigIntColumn_({nullable: false})
    ink!: bigint
}
