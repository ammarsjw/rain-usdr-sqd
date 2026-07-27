/**
 * All indexed contract addresses come from the environment so the same squid can serve any
 * deployment (staging, production, forks) without a code change.
 */
const envAddresses = [
    process.env.VAULT_ENGINE_ADDRESS,
    process.env.USDR_ADDRESS,
    process.env.COLLATERAL_ADAPTER_ADDRESS,
    process.env.OSM_ADDRESS,
    process.env.PRICE_CONVERTER_ADDRESS,
    process.env.PSM_ADDRESS,
    process.env.RESERVE_ACCOUNTING_ADDRESS,
    process.env.SOLVENCY_ENGINE_ADDRESS,
    process.env.BALANCE_SHEET_ADDRESS,
    process.env.PRICE_CURVE_ADDRESS,
    process.env.LIQUIDATION_TRIGGER_ADDRESS,
    process.env.RAIN_CLIPPER_ADDRESS,
    process.env.CIRCUIT_BREAKER_ADDRESS,
    process.env.GOVERNOR_ADDRESS
];

export const contractAddresses: string[] = envAddresses
    .filter((address): address is string => typeof address === "string" && address.length > 0)
    .map((address) => address.toLowerCase());

if (contractAddresses.length === 0) {
    throw new Error("No contract addresses configured. Set the *_ADDRESS environment variables.");
}
