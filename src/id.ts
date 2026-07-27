/**
 * Builds a unique entity id from the transaction hash and the event log index. Every event in
 * this squid maps to exactly one log, so this pair is always unique.
 */
export const idFromEventLogIndex = (transactionHash: string, logIndex: number): string => {
    return `${transactionHash}-${logIndex.toString().padStart(8, "0")}`;
};
