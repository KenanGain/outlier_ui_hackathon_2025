// components/main/forex.tsx
"use client";

import { motion } from "framer-motion";
import ForexMap from "@/components/ui/forex-map";


export default function ForexPlatforms() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-slate-50 dark:bg-slate-950"
    > 
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-amber-500 to-blue-600 bg-clip-text text-transparent"
          >
            World's Largest Forex Platforms
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Connecting global markets through premier forex exchange platforms handling over $7.5 trillion daily
          </motion.p>
        </div>
        
        <ForexMap />
        
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          {['Forex.com', 'IG Markets', 'Saxo Bank'].map((platform, i) => (
            <motion.div
              key={platform}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1 + 0.5 }}
              className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{platform}</h3>
              <p className="text-slate-600 dark:text-slate-400">
                {platform === 'Forex.com' && '200+ currency pairs'}
                {platform === 'IG Markets' && '17,000+ markets'}
                {platform === 'Saxo Bank' && 'Institutional-grade trading'}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}