/**
 * Shared UI styling constants for config components.
 */

/** CSS classes for test result display states. */
export const TEST_RESULT_CLASSES: Record<string, string> = {
    pending_load: "bg-yellow-50 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200",
    success: "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-200",
    error: "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-200",
};

/** CSS classes for step badge states. */
export const STEP_BADGE_CLASSES = {
    complete: "bg-primary text-primary-foreground",
    incomplete: "bg-muted text-muted-foreground border border-border",
} as const;
