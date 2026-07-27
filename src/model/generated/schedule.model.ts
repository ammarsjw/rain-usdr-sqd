import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BigIntColumn as BigIntColumn_, BytesColumn as BytesColumn_, IntColumn as IntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class Schedule {
    constructor(props?: Partial<Schedule>) {
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
    actionId!: bigint

    @BytesColumn_({nullable: false})
    target!: Uint8Array

    @BytesColumn_({nullable: false})
    data!: Uint8Array

    @BigIntColumn_({nullable: false})
    eta!: bigint
}
