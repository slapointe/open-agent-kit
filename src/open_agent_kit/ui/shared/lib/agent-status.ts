/**
 * Shared agent run status constants, labels, and colors.
 */

/** Agent run status enum-like object. */
export const AGENT_RUN_STATUS = {
    PENDING: "pending",
    RUNNING: "running",
    COMPLETED: "completed",
    FAILED: "failed",
    CANCELLED: "cancelled",
    TIMEOUT: "timeout",
} as const;

export type AgentRunStatusType = (typeof AGENT_RUN_STATUS)[keyof typeof AGENT_RUN_STATUS];

/** Human-readable labels for each status. */
export const AGENT_RUN_STATUS_LABELS: Record<AgentRunStatusType, string> = {
    pending: "Pending",
    running: "Running",
    completed: "Completed",
    failed: "Failed",
    cancelled: "Cancelled",
    timeout: "Timeout",
};

/** Status color classes with badge and dot variants. */
interface StatusColors {
    badge: string;
    dot: string;
}

/** Tailwind color classes for each status. */
export const AGENT_RUN_STATUS_COLORS: Record<AgentRunStatusType, StatusColors> = {
    pending: {
        badge: "bg-muted text-muted-foreground",
        dot: "bg-muted-foreground",
    },
    running: {
        badge: "bg-yellow-500/10 text-yellow-600",
        dot: "bg-yellow-500 animate-pulse",
    },
    completed: {
        badge: "bg-green-500/10 text-green-600",
        dot: "bg-green-500",
    },
    failed: {
        badge: "bg-red-500/10 text-red-600",
        dot: "bg-red-500",
    },
    cancelled: {
        badge: "bg-gray-500/10 text-gray-500",
        dot: "bg-gray-500",
    },
    timeout: {
        badge: "bg-orange-500/10 text-orange-600",
        dot: "bg-orange-500",
    },
};
