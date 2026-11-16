const FORMAT = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

/** "2025-10-12" → "Oct 12, 2025". Read as UTC, so the day is the same on the server and in every browser. */
export const formatDate = (isoDate: string) => FORMAT.format(new Date(`${isoDate}T00:00:00Z`));
