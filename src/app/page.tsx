'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/main/Navbar";
import FintechHero from "@/components/main/FintechHero";
import { FintechBenefits } from "@/components/main/Benefit";
import { FintechFeaturesSection } from "@/components/main/FintechFeature";
import ForexPlatforms from "@/components/main/forex";
import { FinancialReviewsMarquee } from "@/components/main/reviews";

export default function Home() {
  // References for scroll-based animations
  const mainRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  const forexRef = useRef<HTMLDivElement>(null);
  // Add to existing useRef declarations
const reviewsRef = useRef<HTMLDivElement>(null);

// Add scroll progress for reviews section
const { scrollYProgress: reviewsScrollProgress } = useScroll({
  target: reviewsRef,
  offset: ["start end", "end start"]
});

// Add transform values
const reviewsOpacity = useTransform(reviewsScrollProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
const reviewsY = useTransform(reviewsScrollProgress, [0, 0.2], [50, 0]);
const reviewsBlur = useTransform(reviewsScrollProgress, [0, 0.2], ['blur(20px)', 'blur(0px)']);
  // Main scroll progress
  const { scrollYProgress } = useScroll();
  
  // Benefits section scroll effects
  const { scrollYProgress: benefitsScrollProgress } = useScroll({
    target: benefitsRef,
    offset: ["start end", "end start"]
  });
    // Add forex scroll progress
    const { scrollYProgress: forexScrollProgress } = useScroll({
      target: forexRef,
      offset: ["start end", "end start"]
    });
  // Features section scroll effects
  const { scrollYProgress: featuresScrollProgress } = useScroll({
    target: featuresRef,
    offset: ["start end", "end start"]
  });
    // Add blur transforms
    const heroBlur = useTransform(scrollYProgress, [0, 0.2], ['blur(0px)', 'blur(20px)']);
    const featuresBlur = useTransform(featuresScrollProgress, [0, 0.2], ['blur(20px)', 'blur(0px)']);
    const forexBlur = useTransform(forexScrollProgress, [0, 0.2], ['blur(20px)', 'blur(0px)']);
    const benefitsBlur = useTransform(benefitsScrollProgress, [0, 0.2], ['blur(20px)', 'blur(0px)']);
    const partnersBlur = useTransform(scrollYProgress, [0.5, 0.7], ['blur(20px)', 'blur(0px)']);
  
  // Transform values for parallax effects
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const benefitsOpacity = useTransform(benefitsScrollProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const partnersOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const featuresOpacity = useTransform(featuresScrollProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // Y-axis transformations for section transitions
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const benefitsY = useTransform(benefitsScrollProgress, [0, 0.2], [50, 0]);
  const featuresY = useTransform(featuresScrollProgress, [0, 0.2], [50, 0]);
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden" ref={mainRef}>
      <Navbar />
      
      <main className="flex-1 w-full">
        {/* Hero Section with Fade Out */}
        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="h-full w-full "
        >
          <FintechHero />
          
          {/* Gradient Dissolve Overlay */}
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.05, 0.2], [0, 1]) }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950 dark:from-gray-950 to-transparent pointer-events-none"
          />
        </motion.div>
        <motion.section 
          ref={featuresRef}
          style={{ 
            opacity: featuresOpacity,
            y: featuresY
          }}
          className="relative bg-gray-50 dark:bg-gray-900 z-10"
        >
          <FintechFeaturesSection />
        </motion.section>
        {/* New Forex Section */}
        <motion.section 
          ref={forexRef}
          style={{
            opacity: useTransform(forexScrollProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
            y: useTransform(forexScrollProgress, [0, 0.2], [50, 0]),
            filter: forexBlur
          }}
          className="relative py-24 bg-slate-100 dark:bg-slate-950 z-10"
        >
          <ForexPlatforms />
        </motion.section>

        

        {/* Benefits Section with Fade In */}
        <motion.section 
          ref={benefitsRef}
          style={{ 
            opacity: benefitsOpacity,
            y: benefitsY
          }}
          className="relative py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 z-10"
        >
          <div className="text-center  px-4">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
            >
              Enterprise-Grade Financial Infrastructure
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-300 max-w-2xl mx-auto text-lg"
            >
              Secure, compliant, and scalable solutions for modern finance
            </motion.p>
          </div>
          
          
          <FintechBenefits />
          
          {/* Bottom Gradient Transition */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-950/50 to-transparent" />
        </motion.section>
        <motion.section 
  ref={reviewsRef}
  style={{ 
    opacity: reviewsOpacity,
    y: reviewsY,
    filter: reviewsBlur
  }}
  className="relative z-10 bg-gradient-to-b from-blue-50 to-cyan-50 dark:from-slate-950 dark:to-slate-950"
>
  <FinancialReviewsMarquee />
</motion.section>
        {/* Partners Section with Parallax Gradient */}
        <motion.section 
          ref={partnersRef}
          className="relative min-h-screen flex items-center justify-center"
        >
          {/* Animated Background Gradient */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-500"
            style={{
              opacity: partnersOpacity,
              backgroundSize: useTransform(scrollYProgress, [0.5, 1], ['100%', '120%']),
              backgroundPosition: useTransform(scrollYProgress, [0.5, 1], ['center', 'center bottom'])
            }}
          >
            {/* Animated Blur Elements */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-70"
              style={{
                filter: useTransform(scrollYProgress, [0.5, 0.7], ['blur(50px)', 'blur(80px)'])
              }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white/30"
                  style={{
                    width: (i + 1) * 150,
                    height: (i + 1) * 150,
                    x: useTransform(scrollYProgress, [0.5, 0.9], [0, (i - 2) * 50]),
                    y: useTransform(scrollYProgress, [0.5, 0.9], [0, (i - 2) * -30]),
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
          
          {/* Content Overlay */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 text-center">
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold mb-12  text-white drop-shadow-lg"
            >
              Trusted by Financial Institutions Worldwide
            </motion.h3>
            
            {/* Partner Logos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {[
                'Global Banks', 
                'Insurance Companies', 
                'Fintech Startups', 
                'Government Agencies'
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="bg-white/10 p-6 rounded-xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="h-16 flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-white/20" />
                  </div>
                  <span className="text-white font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
            
            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-20 p-8 rounded-2xl backdrop-blur-lg bg-white/10 max-w-3xl mx-auto border border-white/20"
            >
              <h4 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Financial Infrastructure?</h4>
              <p className="text-gray-100 mb-8">Join thousands of institutions worldwide leveraging our cutting-edge platform</p>
              <button type="button" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300">
                Schedule a Demo
              </button>
            </motion.div>
          </div>
        </motion.section>
        {/* Reviews Section */}

        
        {/* Features Highlight Section */}
        <section className="bg-gray-50 dark:bg-gray-900 py-24">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Cutting-Edge Financial Technology
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Our platform combines the latest in fintech innovation with enterprise-grade security
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'AI-Powered Analytics',
                  description: 'Real-time market insights and predictive models',
                  icon: '📊'
                },
                {
                  title: 'Blockchain Security',
                  description: 'Immutable transaction records with end-to-end encryption',
                  icon: '🔐'
                },
                {
                  title: 'Global Compliance',
                  description: 'Automated regulatory reporting across jurisdictions',
                  icon: '🌐'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer with Gradient */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-xl font-bold mb-4 text-white">FintechApp</h4>
              <p className="text-sm text-gray-400">Next-generation financial infrastructure for the digital economy</p>
            </div>
            {['Products', 'Solutions', 'Resources', 'Company'].map((category) => (
              <div key={category}>
                <h5 className="text-white font-medium mb-4">{category}</h5>
                <ul className="space-y-2">
                  {['Overview', 'Features', 'Documentation', 'Support'].map((item) => (
                    <li key={item} className="text-sm">
                      <a href="/some-path" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2024 FintechApp. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="/security" className="text-gray-400 hover:text-white transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}