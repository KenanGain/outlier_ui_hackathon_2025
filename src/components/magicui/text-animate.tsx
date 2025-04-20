'use client';

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { type ElementType, type ReactNode } from "react";
import type { MotionProps, Variants } from "framer-motion";

type AnimationType = "text" | "word" | "character";
type AnimationVariant = "fadeIn" | "blurIn" | "slideUp";

interface TextAnimateProps extends MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variants?: Variants;
  as?: ElementType;
  startOnView?: boolean;
  once?: boolean;
  by?: AnimationType;
  animation?: AnimationVariant;
}

const staggerTimings: Record<AnimationType, number> = {
  text: 0.06,
  word: 0.05,
  character: 0.03,
};

const animationVariants: Record<AnimationVariant, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  },
  blurIn: {
    hidden: { opacity: 0, filter: "blur(12px)" },
    visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.6 } },
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
};

export function TextAnimate({
  children,
  delay = 0,
  duration = 0.6,
  variants,
  className,
  as: Component = "div",
  startOnView = true,
  once = false,
  by = "text",
  animation = "fadeIn",
  ...props
}: TextAnimateProps) {
  const MotionComponent = motion(Component);

  const processChildren = (child: ReactNode): ReactNode[] => {
    if (typeof child === "string") {
      switch (by) {
        case "word": {
          // Split words while preserving original spaces
          const wordsWithSpaces = child.split(/(\s+)/);
          return wordsWithSpaces.filter(item => item.length > 0).map((segment, i) => (
            <motion.span key={i} className="inline-block whitespace-pre-wrap">
              {segment}
            </motion.span>
          ));
        }

        case "character":
          return child.split("").map((char, i) => (
            <motion.span key={i} className="inline-block">
              {char}
            </motion.span>
          ));

        default:
          return [<motion.span key="text">{child}</motion.span>];
      }
    }
    return [child];
  };

  const baseVariants = variants || animationVariants[animation];

  return (
    <AnimatePresence>
      <MotionComponent
        initial="hidden"
        animate={startOnView ? "visible" : undefined}
        whileInView={startOnView ? "visible" : undefined}
        exit="hidden"
        viewport={{ once, margin: "0px 0px -100px 0px" }}
        className={cn("text-gray-900 dark:text-gray-100", className)}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (child === null || child === undefined) return null;
          
          return processChildren(child).map((processedChild, index) => (
            <motion.span
              key={index}
              variants={baseVariants}
              transition={{
                delay: delay + (index * staggerTimings[by]),
                duration,
                ease: "easeOut"
              }}
            >
              {processedChild}
            </motion.span>
          ));
        })}
      </MotionComponent>
    </AnimatePresence>
  );
}