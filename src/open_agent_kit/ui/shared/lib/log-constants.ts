/**
 * Shared log viewer constants and types.
 */

/** A single tag option within a category. */
export interface TagOption {
    value: string;
    display: string;
}

/** A tag category for filtering log lines. */
export interface TagCategory {
    label: string;
    tags: TagOption[];
}

/** Default line count options for the log viewer. */
export const DEFAULT_LINE_COUNT_OPTIONS = [50, 100, 250, 500, 1000] as const;

/** Default number of log lines to display. */
export const DEFAULT_LINE_COUNT = 100;

/** Default daemon log tag categories (log level filtering). */
export const DAEMON_LOG_TAG_CATEGORIES: TagCategory[] = [
    {
        label: "Log Levels",
        tags: [
            { value: "DEBUG", display: "Debug" },
            { value: "INFO", display: "Info" },
            { value: "WARNING", display: "Warning" },
            { value: "ERROR", display: "Error" },
        ],
    },
];
