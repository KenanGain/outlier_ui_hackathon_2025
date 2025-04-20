// components/ui/forex-map.tsx
"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import { useTheme } from "next-themes";

interface ForexMapProps {
  platforms?: Array<{
    hq: { lat: number; lng: number; name: string };
    connections: Array<{ lat: number; lng: number; name: string }>;
  }>;
}

export default function ForexMap({
  platforms = [
    {
      hq: { lat: 40.7128, lng: -74.006, name: "Forex.com (NYC)" },
      connections: [
        { lat: 51.5074, lng: -0.1278, name: "London" },
        { lat: 35.6895, lng: 139.6917, name: "Tokyo" },
        { lat: 22.3193, lng: 114.1694, name: "Hong Kong" },
      ],
    },
    {
      hq: { lat: 51.5074, lng: -0.1278, name: "IG Markets (London)" },
      connections: [
        { lat: 40.7128, lng: -74.006, name: "New York" },
        { lat: -33.8688, lng: 151.2093, name: "Sydney" },
        { lat: 1.3521, lng: 103.8198, name: "Singapore" },
      ],
    },
    {
      hq: { lat: 55.6761, lng: 12.5683, name: "Saxo Bank (Copenhagen)" },
      connections: [
        { lat: 37.7749, lng: -122.4194, name: "San Francisco" },
        { lat: 48.8566, lng: 2.3522, name: "Paris" },
        { lat: 19.076, lng: 72.8777, name: "Mumbai" },
      ],
    },
  ],
}: ForexMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });
  const { theme } = useTheme();

  const svgMap = map.getSVG({
    radius: 0.22,
    color: theme === "dark" ? "#FFFFFF40" : "#00000040",
    shape: "circle",
    backgroundColor: theme === "dark" ? "#0f172a" : "#f8fafc",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[2/1] bg-gradient-to-br from-slate-900 to-blue-900 dark:from-slate-950 dark:to-blue-950 rounded-xl relative overflow-hidden">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)] opacity-50"
        alt="forex world map"
        draggable={false}
      />
      
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0"
      >
        <title>Forex Trading Network Map</title>
        {platforms.flatMap((platform, i) => 
          platform.connections.map((connection, j) => {
            const start = projectPoint(platform.hq.lat, platform.hq.lng);
            const end = projectPoint(connection.lat, connection.lng);
            return (
              <g key={`${i}-${j}`}>
                <motion.path
                  d={createCurvedPath(start, end)}
                  fill="none"
                  stroke="url(#forex-gradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: i * 0.3 + j * 0.1 }}
                />
              </g>
            );
          })
        )}

        <defs>
          <linearGradient id="forex-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {platforms.map((platform, i) => {
          const point = projectPoint(platform.hq.lat, platform.hq.lng);
          return (
            <g key={`hq-${i}`} className="cursor-pointer">
              <motion.circle
                cx={point.x}
                cy={point.y}
                r="4"
                fill="#f59e0b"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.2 }}
              />
              <motion.text
                x={point.x + 8}
                y={point.y + 4}
                fill="white"
                fontSize="10"
                fontWeight="bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.2 + 0.5 }}
              >
                {platform.hq.name}
              </motion.text>
            </g>
          );
        })}
      </svg>

      <div className="absolute bottom-8 left-8 right-8 bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-white mb-4">
          Global Forex Trading Network
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {platforms.map((platform) => (
            <div key={platform.hq.name} className="text-white">
              <h4 className="font-semibold text-amber-400">{platform.hq.name.split(' ')[0]}</h4>
              <p className="text-sm opacity-75">{platform.connections.length}+ global hubs</p>
            </div>
          ))}
          <div className="text-white">
            <h4 className="font-semibold text-emerald-400">24/7 Trading</h4>
            <p className="text-sm opacity-75">$7.5T daily volume</p>
          </div>
        </div>
      </div>
    </div>
  );
}