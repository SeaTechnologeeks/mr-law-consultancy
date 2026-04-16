"use client";

import { Briefcase, AlertCircle, FileCheck, HeartHandshake, FileText, Scale } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Employment Relations",
    description: "Comprehensive advisory on workplace disputes, unfair dismissal claims, disciplinary proceedings, and employment contract matters.",
    areas: ["Unfair dismissal", "Disciplinary hearings", "Employment contracts", "CCMA referrals"],
  },
  {
    icon: AlertCircle,
    title: "Delictual Claims",
    description: "Expert guidance on civil wrongs causing harm, including negligence claims, personal injury matters, and damages assessments.",
    areas: ["Negligence claims", "Personal injury", "Damages assessment", "Third-party claims"],
  },
  {
    icon: FileCheck,
    title: "Insurance Law",
    description: "Specialized advice on policy interpretation, claim disputes, and coverage matters for both insurers and policyholders.",
    areas: ["Policy interpretation", "Claim disputes", "Coverage analysis", "Bad faith claims"],
  },
  {
    icon: HeartHandshake,
    title: "Matrimonial Disputes",
    description: "Sensitive handling of family law matters including divorce proceedings, maintenance disputes, and settlement negotiations.",
    areas: ["Divorce proceedings", "Maintenance disputes", "Settlement agreements", "Property division"],
  },
  {
    icon: FileText,
    title: "Contractual Matters",
    description: "Drafting, review, and advisory on commercial agreements, breach of contract disputes, and enforcement actions.",
    areas: ["Contract drafting", "Breach disputes", "Agreement review", "Enforcement actions"],
  },
  {
    icon: Scale,
    title: "Dispute Resolution",
    description: "Strategic negotiation and mediation services to resolve conflicts without the need for costly court proceedings.",
    areas: ["Mediation", "Negotiation", "Settlement facilitation", "Arbitration support"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold-400 font-medium tracking-wider uppercase text-sm mb-3">Our Practice Areas</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Legal Services
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We provide tailored legal advisory services designed to meet your specific needs 
            and achieve favourable outcomes.
          </p>
          <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full mt-6" />
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-navy-800 border border-gold-500/10 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-500/5"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                  <service.icon className="w-6 h-6 text-gold-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gold-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-1">
                    {service.areas.map((area, areaIndex) => (
                      <li key={areaIndex} className="text-slate-500 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gold-500/60 rounded-full" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
