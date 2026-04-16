"use client";

import { Scale } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-navy-900 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gold-500/20 rounded-full animate-ping" />
          <div className="relative p-6 rounded-full border-2 border-gold-500/30 bg-gold-500/5">
            <Scale className="w-12 h-12 text-gold-400 animate-pulse" />
          </div>
        </div>
        <p className="text-gold-400 font-medium tracking-wider uppercase text-sm animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
