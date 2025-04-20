// components/main/FintechFeatures.tsx
'use client';

import type React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type MarketData = {
  name: string;
  value: number;
};

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("p-6 relative overflow-hidden bg-gray-900/50 border border-gray-800/50 rounded-xl backdrop-blur-sm", className)}>
    {children}
  </div>
);

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => (
  <p className="text-xl md:text-2xl font-semibold mb-2 text-white">
    {children}
  </p>
);

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => (
  <p className="text-sm text-gray-300 mb-4">
    {children}
  </p>
);

export function FintechFeaturesSection() {
  const features = [
    {
      title: "Real-time Market Analytics",
      description: "Monitor global financial markets with millisecond latency updates",
      skeleton: <SkeletonOne />,
      className: "col-span-12 md:col-span-6",
    },
    {
      title: "Portfolio Performance",
      description: "AI-powered insights into your investment portfolio health",
      skeleton: <SkeletonTwo />,
      className: "col-span-12 md:col-span-6",
    },
    {
      title: "Financial Education Hub",
      description: "Master modern finance with our expert-curated video library",
      skeleton: <SkeletonThree />,
      className: "col-span-12 md:col-span-6",
    },
    {
      title: "Global Transactions Network",
      description: "Instant cross-border payments across 150+ currencies",
      skeleton: <SkeletonFour />,
      className: "col-span-12 md:col-span-6",
    },
  ];

  return (
    <div className="relative z-20 py-10 lg:py-24 p-10 w-full mx-auto px-4 bg-gray-950">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Next-Generation Financial Infrastructure
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Comprehensive tools for modern finance - market analysis, portfolio management, 
          global payments, and financial education in one platform
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {features.map((feature) => (
          <FeatureCard key={feature.title} className={feature.className}>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
            <div className="h-80 z-50">{feature.skeleton}</div>
          </FeatureCard>
        ))}
      </div>
    </div>
  );
}

const SkeletonOne = () => {
  // Sample market data with time series for line chart
  const marketData = [
    { name: 'Jan', NASDAQ: 14800, SP500: 4600, DJIA: 36000 },
    { name: 'Feb', NASDAQ: 15200, SP500: 4700, DJIA: 36500 },
    { name: 'Mar', NASDAQ: 14900, SP500: 4650, DJIA: 36200 },
    { name: 'Apr', NASDAQ: 15500, SP500: 4800, DJIA: 37000 },
    { name: 'May', NASDAQ: 15800, SP500: 4900, DJIA: 37500 },
    { name: 'Jun', NASDAQ: 16000, SP500: 5000, DJIA: 39000 },
  ];

  return (
    <div className="h-full p-2">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={marketData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} />
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip 
            formatter={(value) => `$${value.toLocaleString()}`}
            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: '#f8fafc' }}
            itemStyle={{ color: '#f8fafc' }}
            labelStyle={{ color: '#f8fafc' }}
          />
          <Legend wrapperStyle={{ color: '#f8fafc' }} />
          <Line type="monotone" dataKey="NASDAQ" stroke="#3b82f6" strokeWidth={2} dot={false} activeDot={{ r: 6 }} />
          <Line type="monotone" dataKey="SP500" stroke="#10b981" strokeWidth={2} dot={false} activeDot={{ r: 6 }} />
          <Line type="monotone" dataKey="DJIA" stroke="#6366f1" strokeWidth={2} dot={false} activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const SkeletonTwo = () => {
  // Portfolio allocation data for pie chart
  const portfolioData = [
    { name: 'Stocks', value: 60 },
    { name: 'Bonds', value: 25 },
    { name: 'Crypto', value: 15 },
  ];
  
  const COLORS = ['#3b82f6', '#10b981', '#f59e0b'];

  return (
    <div className="h-full p-2">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={portfolioData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={{ stroke: '#94a3b8' }}
          >
            {portfolioData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => `${value}%`}
            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: '#f8fafc' }}
            itemStyle={{ color: '#f8fafc' }}
          />
          <Legend 
            wrapperStyle={{ color: '#f8fafc' }}
            formatter={(value) => <span style={{ color: '#f8fafc' }}>{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

const SkeletonThree = () => (
  <div className="flex h-full  rounded-lg  group">
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
      <div className="h-16 w-16 md:h-20 md:w-20 bg-red-600 rounded-full flex items-center justify-center">
        <IconBrandYoutubeFilled className="h-10 w-10 text-white" />
      </div>
    </div>
    <div className="h-full w-full bg-gray-800 rounded-lg overflow-hidden">
      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-gray-800 via-blue-900 to-gray-900">
        <div className="absolute inset-0 ">
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-cyan-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="text-xl text-white font-medium">Financial Masterclass</div>
      </div>
    </div>
  </div>
);

const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let phi = 0;
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 350* 2,
      height: 350 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.2],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.1, 0.8, 1],
      markers: [
        { location: [40.7128, -74.006], size: 0.1 },  // NYC
        { location: [51.5074, -0.1278], size: 0.1 },   // London
        { location: [35.6762, 139.6503], size: 0.1 },  // Tokyo
        { location: [22.3193, 114.1694], size: 0.1 },  // Hong Kong
        { location: [1.3521, 103.8198], size: 0.1 },   // Singapore
        { location: [19.0760, 72.8777], size: 0.1 },   // Mumbai
        { location: [-33.8688, 151.2093], size: 0.1 }, // Sydney
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.005;
      },
    });

    return () => globe.destroy();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

const SkeletonFour = () => (
  <div className="flex h-full  items-center justify-center rounded-lg ">
    <div className="absolute inset-0 rounded-md bg-gradient-to-b from-transparent to-blue-900/30 z-10 pointer-events-none" />
    <Globe className="absolute inset-1 " />
  </div>
);