/**
 * Shared time formatting utilities for daemon UIs.
 */

/** Time unit constants in milliseconds. */
export const TIME_UNITS = {
    SECOND: 1000,
    MINUTE: 60_000,
    HOUR: 3_600_000,
    DAY: 86_400_000,
} as const;

/**
 * Format a date string as a human-readable relative time (e.g., "3m ago", "2h ago").
 */
export function formatRelativeTime(dateString: string): string {
    const date = new Date(dateString);
    const now = Date.now();
    const diffMs = now - date.getTime();

    if (diffMs < 0) return "just now";
    if (diffMs < TIME_UNITS.MINUTE) return "just now";
    if (diffMs < TIME_UNITS.HOUR) {
        const mins = Math.floor(diffMs / TIME_UNITS.MINUTE);
        return `${mins}m ago`;
    }
    if (diffMs < TIME_UNITS.DAY) {
        const hours = Math.floor(diffMs / TIME_UNITS.HOUR);
        return `${hours}h ago`;
    }
    const days = Math.floor(diffMs / TIME_UNITS.DAY);
    return `${days}d ago`;
}

/**
 * Format uptime in seconds to a human-readable string (e.g., "2h 15m", "3d 4h").
 */
export function formatUptime(seconds: number): string {
    if (seconds < 60) return `${Math.floor(seconds)}s`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
    if (seconds < 86400) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        return m > 0 ? `${h}h ${m}m` : `${h}h`;
    }
    const d = Math.floor(seconds / 86400);
    const h = Math.floor((seconds % 86400) / 3600);
    return h > 0 ? `${d}d ${h}h` : `${d}d`;
}
