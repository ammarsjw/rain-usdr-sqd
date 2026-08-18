import {
    USDR_ADDRESS,
    VAULT_ENGINE_ADDRESS,
    COLLATERAL_ADAPTER_ADDRESS,
    PRICE_CONVERTER_ADDRESS,
    OSM_ADDRESS,
    RESERVE_ACCOUNTING_ADDRESS,
    SOLVENCY_ENGINE_ADDRESS,
    BALANCE_SHEET_ADDRESS,
    PRICE_CURVE_ADDRESS,
    LIQUIDATION_TRIGGER_ADDRESS,
    DUTCH_AUCTION_ADDRESS,
    CIRCUIT_BREAKER_ADDRESS,
    PSM_ADDRESS,
    GOVERNOR_ADDRESS,
    END_ADDRESS
} from "./config/deployments";

// All indexed addresses as an array.
const configAddresses = [
    USDR_ADDRESS,
    VAULT_ENGINE_ADDRESS,
    COLLATERAL_ADAPTER_ADDRESS,
    PRICE_CONVERTER_ADDRESS,
    OSM_ADDRESS,
    RESERVE_ACCOUNTING_ADDRESS,
    SOLVENCY_ENGINE_ADDRESS,
    BALANCE_SHEET_ADDRESS,
    PRICE_CURVE_ADDRESS,
    LIQUIDATION_TRIGGER_ADDRESS,
    DUTCH_AUCTION_ADDRESS,
    CIRCUIT_BREAKER_ADDRESS,
    PSM_ADDRESS,
    GOVERNOR_ADDRESS,
    END_ADDRESS
];

// Forcing lower case addresses.
export const contractAddresses: string[] = configAddresses
    .filter((address): address is string => typeof address === "string" && address.length > 0)
    .map((address) => address.toLowerCase());

// Invalidating array if empty.
if (contractAddresses.length === 0) {
    throw new Error("No contract addresses configured. Set the addresses in config/deployments.");
}
