/**
 * Converts a 0x-prefixed hex string into the Uint8Array representation used by Bytes columns.
 */
export const hexToBytes = (hex: string): Uint8Array => {
    const stripped = hex.startsWith("0x") ? hex.slice(2) : hex;
    const padded = stripped.length % 2 === 0 ? stripped : `0${stripped}`;
    const bytes = new Uint8Array(padded.length / 2);

    for (let i = 0; i < bytes.length; i++) {
        bytes[i] = parseInt(padded.slice(i * 2, i * 2 + 2), 16);
    }

    return bytes;
};
