"use client";

import { CheckCircle, ArrowRight, Gavel } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We meet to understand your situation, gather facts, and identify your objectives.",
  },
  {
    number: "02",
    title: "Objective Assessment",
    description: "We analyze the merits of your case and provide an honest evaluation of your prospects.",
  },
  {
    number: "03",
    title: "Strategic Resolution",
    description: "We pursue negotiation and settlement options to achieve a favourable outcome efficiently.",
  },
  {
    number: "04",
    title: "Litigation Support",
    description: "If court action is necessary, we refer you to high-calibre attorneys at discounted rates.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-20 sm:py-28 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold-400 font-medium tracking-wider uppercase text-sm mb-3">Our Process</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            How We Work
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            After a careful assessment of the matters and attempts at dispute resolution, 
            when it is deemed plausible to refer the matter to court, we assist our clients 
            in referring the case to high-calibre attorneys at a discounted rate.
          </p>
          <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full mt-6" />
        </div>
        
        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl bg-navy-700/30 border border-gold-500/10 group hover:border-gold-500/30 transition-all duration-300"
            >
              <span className="absolute top-4 right-4 text-4xl font-bold text-gold-500/20 group-hover:text-gold-500/30 transition-colors">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold text-white mb-3 relative z-10">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Services List */}
        <div className="bg-navy-900/50 rounded-2xl p-8 md:p-12 border border-gold-500/10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Gavel className="w-8 h-8 text-gold-400" />
                <h3 className="text-2xl font-bold text-white">Our Services Include</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Legal advisory on complex matters",
                  "Drafting of legal opinions",
                  "Contract drafting and review",
                  "Negotiations and settlements",
                  "Risk management consultation",
                  "Attorney referral services",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col justify-center">
              <blockquote className="text-xl md:text-2xl font-light text-white leading-relaxed mb-6">
                &ldquo;We believe that <span className="text-gold-400 font-medium">prevention and early resolution</span> 
                serve our clients better than prolonged conflict.&rdquo;
              </blockquote>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-medium transition-colors group"
              >
                Discuss Your Matter
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
