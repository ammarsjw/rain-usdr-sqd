import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BigIntColumn as BigIntColumn_, BytesColumn as BytesColumn_, IntColumn as IntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class Grab {
    constructor(props?: Partial<Grab>) {
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

    @BytesColumn_({nullable: false})
    u!: Uint8Array

    @BytesColumn_({nullable: false})
    v!: Uint8Array

    @BytesColumn_({nullable: false})
    w!: Uint8Array

    @BigIntColumn_({nullable: false})
    dink!: bigint

    @BigIntColumn_({nullable: false})
    dart!: bigint
}
