"use client";

import { Container } from "@/components/global/layout/container/container";
import { useEffect, useState } from "react";
import { StravaStats } from "@/types/strava";

import { StravaBlockStats } from "./stravaBlockStats";

const StravaBlock = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [stats, setStats] = useState<StravaStats | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("====================");
    console.log("StravaBlock");
    console.log("====================");

    const fecthStravaStats = async () => {
      try {
        setIsLoading(true);
        const stravaResponse = await fetch("/api/strava/stats");

        if (!stravaResponse) {
          throw new Error("Error fetching Strava stats");
        }

        const stravaData = await stravaResponse.json();

        setStats(stravaData);
        console.log("stravaResponse", stravaData);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    fecthStravaStats();
  }, []);

  if (error || !stats) {
    return (
      <div className="p-6 bg-red-100 border border-red-300 rounded-lg">
        <p className="text-red-700">{error || "No data available"}</p>
      </div>
    );
  }

  return (
    <section className="py-32 bg-orange-300 border-t-2 border-b-2 border-gray-900">
      <Container className="max-w-7xl">
        <h2 className="font-black text-3xl text-gray-900">Strava Block</h2>
        <p className="text-gray-800 text-xs">
          Last updated: {new Date(stats.lastUpdated).toLocaleString()}
        </p>
        <StravaBlockStats stats={stats} isLoading={isLoading} />
      </Container>
    </section>
  );
};

export { StravaBlock };
