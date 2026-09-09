import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BigIntColumn as BigIntColumn_, BytesColumn as BytesColumn_, IntColumn as IntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class File {
    constructor(props?: Partial<File>) {
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

    @BytesColumn_({nullable: true})
    ilkId!: Uint8Array | undefined | null

    @BytesColumn_({nullable: false})
    what!: Uint8Array

    @BigIntColumn_({nullable: true})
    dataUint!: bigint | undefined | null

    @BytesColumn_({nullable: true})
    dataAddress!: Uint8Array | undefined | null

    @BytesColumn_({nullable: true})
    dataBytes32!: Uint8Array | undefined | null
}
