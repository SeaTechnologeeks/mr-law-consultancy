"use client";

import { Scale, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(217, 119, 6, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(217, 119, 6, 0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo/Icon */}
        <div className="mb-8 flex justify-center animate-fade-in-up opacity-0">
          <div className="p-4 rounded-full border border-amber-500/30 bg-amber-500/5 hover:bg-amber-500/10 transition-all duration-500 hover:scale-110">
            <Scale className="w-12 h-12 text-amber-400" />
          </div>
        </div>

        {/* Company Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 animate-fade-in-up opacity-0 delay-100">
          <span className="text-white">MR LAW</span>
          <span className="text-amber-400"> CONSULTANCY</span>
        </h1>

        {/* Tagline */}
        <div className="mb-8 animate-fade-in-up opacity-0 delay-200">
          <span className="inline-block px-6 py-2 border border-amber-500/40 rounded-full text-amber-300 text-lg tracking-widest uppercase font-medium hover:border-amber-500/60 transition-colors">
            Resolution Driven
          </span>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 animate-fade-in-up opacity-0 delay-300">
          We provide tailored legal advisory services fit for client&apos;s needs pertaining to
          employment relations, delictual claims, insurance law, matrimonial disputes,
          and contractual matters.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up opacity-0 delay-400">
          <a
            href="#contact"
            className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-1"
          >
            Schedule Consultation
          </a>
          <a
            href="#services"
            className="px-8 py-4 border border-amber-500/50 text-amber-300 hover:bg-amber-500/10 font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce animate-fade-in opacity-0 delay-500">
        <a href="#about" className="text-amber-400/60 hover:text-amber-400 transition-colors" aria-label="Scroll to about section">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}
