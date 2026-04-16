"use client";

import { Target, Shield, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold-400 font-medium tracking-wider uppercase text-sm mb-3">About Us</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Our Philosophy
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full" />
        </div>
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              Our strategic approach is the prioritization of <span className="text-gold-400 font-semibold">resolution over high-cost and prolonged litigation</span>. 
              We believe that the best legal outcomes are achieved when disputes are resolved efficiently 
              and amicably.
            </p>
            <p className="text-slate-400 leading-relaxed">
              In considering the influx of legal disputes at the courts and tribunals, we aim at 
              assisting clients to resolve their disputes amicably by negotiating favourable settlement 
              terms, minimizing legal costs, and sparing our clients the hostility of prolonged years 
              of litigation.
            </p>
            <p className="text-slate-400 leading-relaxed">
              We conduct an objective assessment of the prospects of success to assist our clients 
              in making an informed decision whether to pursue litigation, settle, or defend a matter.
            </p>
          </div>
          
          <div className="bg-navy-700/50 rounded-2xl p-8 border border-gold-500/10">
            <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed">
              &ldquo;Justice is not about winning at all costs &mdash; it&apos;s about finding 
              the <span className="text-gold-400">right resolution</span>.&rdquo;
            </blockquote>
            <cite className="block mt-6 text-gold-400 not-italic">&mdash; MR LAW CONSULTANCY</cite>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-6 rounded-xl bg-navy-700/30 border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
              <Target className="w-6 h-6 text-gold-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Objective Assessment</h3>
            <p className="text-slate-400">Clear evaluation of prospects before any action</p>
          </div>
          
          <div className="group p-6 rounded-xl bg-navy-700/30 border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
              <Shield className="w-6 h-6 text-gold-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Cost Protection</h3>
            <p className="text-slate-400">Minimize legal expenses through strategic resolution</p>
          </div>
          
          <div className="group p-6 rounded-xl bg-navy-700/30 border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
              <Users className="w-6 h-6 text-gold-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Network Access</h3>
            <p className="text-slate-400">High-calibre attorney referrals at discounted rates</p>
          </div>
        </div>
      </div>
    </section>
  );
}
