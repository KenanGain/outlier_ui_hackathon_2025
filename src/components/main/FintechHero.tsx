'use client';
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TextAnimate } from "@/components/magicui/text-animate";

const COLORS_TOP = ["#1E67C6", "#13FFAA", "#0D9488", "#0369A1"];

const FintechHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="mb-6">
          <TextAnimate
            by="character"
            animation="blurIn"
            delay={0.2}
            className="inline-block rounded-full bg-gray-600/50 px-4 py-2 text-sm"
          >
            Next-Gen  Financial Platform
          </TextAnimate>
        </div>

        {/* Main Heading */}
        <h1 className="max-w-4xl mx-auto bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-4xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
          <TextAnimate by="word" animation="blurIn" delay={0.4}>
            AI-Powered Financial Solutions Built on Secure Blockchain
          </TextAnimate>
        </h1>

        {/* Features List */}
        <div className="my-8 space-y-4 max-w-2xl mx-auto">
          {[
            "Cloud-Based Financial Infrastructure",
            "Blockchain-Secured Transactions",
            "AI-Driven Market Predictions"
          ].map((feature, index) => (
            <div key={feature} className="flex items-center justify-center gap-2">
              <span className="text-cyan-400">✦</span>
              <TextAnimate 
                by="word" 
                animation="blurIn" 
                delay={0.6 + index * 0.2}
              >
                {feature}
              </TextAnimate>
            </div>
          ))}
        </div>

        <div className="mt-8">
  <motion.button
    whileHover={{ 
      scale: 1.05,
      y: -2
    }}
    whileTap={{ 
      scale: 0.95,
      y: 2 
    }}
    className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-600/30 to-cyan-500/30 px-6 py-3 backdrop-blur-lg transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(34,211,238,0.3)] mx-auto"
  >
    {/* Animated background */}
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 100 }}
      transition={{
        repeat: Infinity,
        duration: 2.5,
        ease: "linear",
      }}
      className="absolute inset-0 opacity-20"
      style={{
        background: `linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent)`,
      }}
    />
    
    {/* Button content */}
    <div className="relative flex items-center gap-2">
      <TextAnimate 
        animation="blurIn" 
        delay={1.2}
        className="text-lg font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
      >
        Get Started
      </TextAnimate>
      <motion.div
        initial={{ x: 0 }}
        whileHover={{ 
          x: 5,
          rotate: 45
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="inline-block"
      >
        <ArrowRight className="text-cyan-400 transition-all" />
      </motion.div>
    </div>
  </motion.button>
</div>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm max-w-6xl mx-auto">
          {[
            { title: "256-bit Encryption", subtitle: "Bank-grade security" },
            { title: "AI Analytics", subtitle: "Real-time insights" },
            { title: "Cloud Native", subtitle: "Global scalability" }
          ].map((stat, index) => (
            <div key={stat.title} className="border-l-2 border-cyan-400 pl-3 text-left">
              <TextAnimate animation="blurIn" delay={1.4 + index * 0.2}>
                <h3 className="text-cyan-400">{stat.title}</h3>
                <p className="text-gray-400 mt-1">{stat.subtitle}</p>
              </TextAnimate>
            </div>
          ))}
        </div>
      </div>

      {/* Star Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={100} count={3000} factor={3} fade speed={1} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default FintechHero;