/**
 * Shared UI constants for power state management and polling.
 */

import type { PowerState } from "../hooks/use-power-state";

// ---------------------------------------------------------------------------
// Power state thresholds (use-power-state.tsx)
// ---------------------------------------------------------------------------

/** Time of inactivity before entering idle state (60 seconds). */
export const POWER_IDLE_THRESHOLD_MS = 60_000;

/** Time of inactivity before entering deep sleep state (5 minutes). */
export const POWER_DEEP_SLEEP_THRESHOLD_MS = 300_000;

/** Debounce interval for high-frequency DOM activity events (200ms). */
export const POWER_ACTIVITY_DEBOUNCE_MS = 200;

// ---------------------------------------------------------------------------
// Polling multipliers (use-power-query.ts)
// ---------------------------------------------------------------------------

/** Multipliers applied to polling intervals based on power state. */
export const POWER_MULTIPLIERS: Record<PowerState, number> = {
    active: 1,
    idle: 2,
    deep_sleep: 5,
    hidden: 10,
};

/** Maximum heartbeat interval when tab is hidden (60 seconds). */
export const HEARTBEAT_HIDDEN_CAP_MS = 60_000;

/** Maximum heartbeat interval during deep sleep (30 seconds). */
export const HEARTBEAT_DEEP_SLEEP_CAP_MS = 30_000;
