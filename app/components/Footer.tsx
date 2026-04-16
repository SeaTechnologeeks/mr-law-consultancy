import { Scale } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-navy-800 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scale className="w-6 h-6 text-gold-400" />
              <span className="text-xl font-bold text-white">
                MR LAW <span className="text-gold-400">CONSULTANCY</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Resolution driven legal advisory services. Prioritizing settlement 
              over high-cost litigation.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-400 hover:text-gold-400 transition-colors text-sm">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-gold-400 transition-colors text-sm">Services</a>
              </li>
              <li>
                <a href="#approach" className="text-slate-400 hover:text-gold-400 transition-colors text-sm">Our Approach</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-gold-400 transition-colors text-sm">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Practice Areas</h4>
            <ul className="space-y-2">
              <li className="text-slate-400 text-sm">Employment Relations</li>
              <li className="text-slate-400 text-sm">Delictual Claims</li>
              <li className="text-slate-400 text-sm">Insurance Law</li>
              <li className="text-slate-400 text-sm">Matrimonial Disputes</li>
              <li className="text-slate-400 text-sm">Contractual Matters</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-gold-500/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} MR LAW CONSULTANCY. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Resolution Driven Legal Advisory
          </p>
        </div>
      </div>
    </footer>
  );
}
