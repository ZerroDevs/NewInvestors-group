'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedCompass() {
  return (
    <div className="absolute -bottom-24 -left-24 sm:-bottom-32 sm:-left-32 opacity-[0.08] pointer-events-none z-0">
      <motion.svg 
        width="400" 
        height="400" 
        viewBox="0 0 100 100" 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="text-[#C5A869]"
      >
        {/* Outer dashed ring */}
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
        
        {/* Inner solid ring */}
        <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="1" />
        
        {/* Architectural / Compass Star */}
        <path 
          d="M50 2 L54 46 L98 50 L54 54 L50 98 L46 54 L2 50 L46 46 Z" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
        />
        
        {/* Secondary diagonal star */}
        <path 
          d="M15 15 L47 47 M85 15 L53 47 M85 85 L53 53 M15 85 L47 53" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1"
          opacity="0.5" 
        />
        
        {/* Center dot */}
        <circle cx="50" cy="50" r="3" fill="currentColor" />
      </motion.svg>
    </div>
  );
}
