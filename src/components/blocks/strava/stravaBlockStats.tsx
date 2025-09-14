import { StravaStats } from "@/types/strava";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Calendar, Map, Timer, Trophy } from "lucide-react";

interface StravaBlockStatsProps {
  stats: StravaStats;
  isLoading: boolean;
}

const StravaBlockStats = ({ stats, isLoading }: StravaBlockStatsProps) => {
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    return `${hours}h`;
  };

  const formatTimeDetailed = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  };

  const progressPercentage =
    (stats.yearly.distance / stats.yearly.target) * 100;
  const remaining = Math.max(0, stats.yearly.target - stats.yearly.distance);

  const donutData = [
    { name: "Completed", value: stats.yearly.distance, color: "#22c55e" },
    { name: "Remaining", value: remaining, color: "#e5e7eb" },
  ];

  const COLORS = [
    "#ef4444",
    "#f97316",
    "#eab308",
    "#22c55e",
    "#3b82f6",
    "#8b5cf6",
    "#ec4899",
  ];

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-200 animate-pulse rounded-lg h-64"
          ></div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-6 gap-4 mt-6">
      <div className="grid grid-cols-4 gap-6 col-span-6">
        <div className="flex gap-2 bg-blue-300 p-3 rounded-xl border-4 border-gray-900 shadow-[4px_4px_0_0_#000]">
          <span className="flex items-center justify-center w-10 h-10 bg-blue-500 border-2 border-gray-900 rounded-full">
            <Map className="size-5 stroke-gray-900" />
          </span>
          <div>
            <p className="text-blue-600 font-semibold">Week Distance</p>
            <p className="text-lg font-bold">
              {stats.weekly
                .reduce((sum, day) => sum + day.distance, 0)
                .toFixed(1)}{" "}
              km
            </p>
          </div>
        </div>
        <div className="flex gap-2 bg-green-300 p-3 rounded-xl border-4 border-gray-900 shadow-[4px_4px_0_0_#000]">
          <span className="flex items-center justify-center w-10 h-10 bg-green-500 border-2 border-gray-900 rounded-full">
            <Timer className="size-5 stroke-gray-900" />
          </span>
          <div>
            <p className="text-green-600 font-semibold">Week Time</p>
            <p className="text-lg font-bold">
              {formatTime(stats.weekly.reduce((sum, day) => sum + day.time, 0))}
            </p>
          </div>
        </div>
        <div className="flex gap-2 bg-yellow-300 p-3 rounded-xl border-4 border-gray-900 shadow-[4px_4px_0_0_#000]">
          <span className="flex items-center justify-center w-10 h-10 bg-yellow-500 border-2 border-gray-900 rounded-full">
            <Trophy className="size-5 stroke-gray-900" />
          </span>
          <div>
            <p className="text-purple-600 font-semibold">Activities</p>
            <p className="text-lg font-bold">
              {stats.weekly.reduce((sum, day) => sum + day.activities, 0)}
            </p>
          </div>
        </div>
        <div className="flex gap-4  bg-purple-300 p-4 rounded-xl border-4 border-gray-900 shadow-[4px_4px_0_0_#000]">
          <span className="flex items-center justify-center w-10 h-10 bg-purple-500 border-2 border-gray-900 rounded-full">
            <Calendar className="size-5 stroke-gray-900" />
          </span>
          <div>
            <p className="text-xl font-semibold">Active Days</p>
            <p className="">
              {stats.weekly.filter((day) => day.activities > 0).length}
              out of 7 days this week
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2 p-8 bg-white border-4 border-gray-900 rounded-xl shadow-[6px_6px_0_0_#000]">
        <h3>Total distance</h3>
        <p>{stats.yearly.distance.toLocaleString()} km</p>
        <p>
          {progressPercentage.toFixed(1)}% of{" "}
          {stats.yearly.target.toLocaleString()} km goal
        </p>
      </div>
      <div className="col-span-2 p-8 bg-white border-4 border-gray-900 rounded-xl shadow-[6px_6px_0_0_#000]">
        <h3>Activites</h3>
        <p className="text-3xl font-bold">{stats.yearly.activities}</p>
        <p className=" text-sm mt-1">
          {Math.round(stats.yearly.activities / (new Date().getMonth() + 1))}{" "}
          per month avg
        </p>
      </div>
      <div className="col-span-2 p-8 bg-white border-4 border-gray-900 rounded-xl shadow-[6px_6px_0_0_#000]">
        <h3 className="text-lg font-semibold mb-2">Total Time</h3>
        <p className="text-3xl font-bold">{formatTime(stats.yearly.time)}</p>
        <p className="text-blue-100 text-sm mt-1">
          {formatTimeDetailed(stats.yearly.time / stats.yearly.activities || 0)}{" "}
          avg per activity
        </p>
      </div>
      <div className="col-span-6 p-8 bg-white border-4 border-gray-900 rounded-xl shadow-[6px_6px_0_0_#000]">
        <h3 className="text-xl font-semibold mb-4 text-center">
          This Week's Activities
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={stats.weekly}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis yAxisId="distance" orientation="left" axisLine={false} />
            <YAxis yAxisId="time" orientation="right" axisLine={false} />
            <Tooltip
              formatter={(value, name) => {
                if (name === "Distance")
                  return [`${Number(value).toFixed(1)} km`, name];
                if (name === "Time")
                  return [formatTimeDetailed(Number(value)), name];
                return [value, name];
              }}
            />

            <Bar
              yAxisId="distance"
              dataKey="distance"
              fill="#d8b4fe"
              name="Distance"
              radius={4}
            />
            <Bar
              yAxisId="time"
              dataKey="time"
              fill="#f9a8d4"
              name="Time"
              radius={4}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="col-span-3 p-8 bg-white border-4 border-gray-900 rounded-xl shadow-[6px_6px_0_0_#000]">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Annual Distance Goal
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={donutData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={0}
              dataKey="value"
            >
              {donutData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => [`${Number(value).toFixed(1)} km`, ""]}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="text-center mt-4">
          <p className="text-2xl font-bold text-gray-900">
            {progressPercentage.toFixed(1)}%
          </p>
          <p className="text-gray-600">{remaining.toFixed(1)} km remaining</p>
        </div>
      </div>
      <div className="col-span-3 p-8 bg-white border-4 border-gray-900 rounded-xl shadow-[6px_6px_0_0_#000]">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Activity Types
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={stats.yearly.activityTypes}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="distance"
              label={({ type, distance }) =>
                `${type}: ${distance.toFixed(0)}km`
              }
            >
              {stats.yearly.activityTypes.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => [
                `${Number(value).toFixed(1)} km`,
                "Distance",
              ]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export { StravaBlockStats };
