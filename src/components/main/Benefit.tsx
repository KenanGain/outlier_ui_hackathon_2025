// components/main/Benefit.tsx

import { cn } from "@/lib/utils";
import {
  IconShieldCheck,
  IconLockPin,
  IconCloudLock,
  IconRobotFace,
  IconMovie,
  IconClockHour4,
  IconScale,
  IconGrowth
} from "@tabler/icons-react";

export function FintechBenefits() {
  const benefits = [
    {
      title: "Military-Grade Security",
      description: "256-bit encryption & multi-factor authentication for all transactions",
      icon: <IconShieldCheck className="text-blue-500" />,
    },
    {
      title: "AI Fraud Detection",
      description: "Real-time transaction monitoring with machine learning algorithms",
      icon: <IconRobotFace className="text-green-500" />,
    },
    {
      title: "Blockchain Technology",
      description: "Immutable transaction records with distributed ledger technology",
      icon: <IconLockPin className="text-purple-500" />,
    },
    {
      title: "Cloud Banking",
      description: "Secure cloud infrastructure with 99.99% uptime guarantee",
      icon: <IconCloudLock className="text-cyan-500" />,
    },
    {
      title: "Mobile-First Platform",
      description: "Full banking capabilities in our iOS/Android apps",
      icon: <IconMovie className="text-pink-500" />,
    },
    {
      title: "24/7 Processing",
      description: "Real-time payments and instant settlement",
      icon: <IconClockHour4 className="text-orange-500" />,
    },
    {
      title: "Regulatory Compliance",
      description: "Full compliance with PCI DSS, GDPR, and financial regulations",
      icon: <IconScale className="text-yellow-500" />,
    },
    {
      title: "Scalable Solutions",
      description: "Enterprise-grade infrastructure that grows with your business",
      icon: <IconGrowth className="text-teal-500" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {benefits.map((benefit, index) => (
        <Benefit key={benefit.title} {...benefit} index={index} />
      ))}
    </div>
  );
}

const Benefit = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/benefit dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800",
        "hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-transparent dark:hover:from-blue-900/20"
      )}
    >
      <div className="mb-4 relative z-10 px-8 text-neutral-600 dark:text-neutral-400">
        <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="text-lg font-semibold mb-2 relative z-10 px-8">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/benefit:h-8 w-1 rounded-tr-full rounded-br-full bg-blue-200 dark:bg-blue-900 group-hover/benefit:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/benefit:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-8">
        {description}
      </p>
      
      {/* Hover effect background */}
      {index < 4 && (
        <div className="opacity-0 group-hover/benefit:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-50/30 dark:from-blue-900/10 to-transparent pointer-events-none" />
      )}
    </div>
  );
};