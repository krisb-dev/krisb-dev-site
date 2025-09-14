export interface StravaStats {
  yearly: {
    distance: number;
    activities: number;
    time: number;
    target: number;
    activityTypes: Array<{
      type: string;
      distance: number;
    }>;
  };
  weekly: Array<{
    day: string;
    date: string;
    distance: number;
    time: number;
    activities: number;
  }>;
  lastUpdated: string;
}
