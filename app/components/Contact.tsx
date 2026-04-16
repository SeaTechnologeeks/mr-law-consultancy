"use client";

import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold-400 font-medium tracking-wider uppercase text-sm mb-3">Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Ready to discuss your legal matter? Schedule a consultation with our team.
          </p>
          <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full mt-6" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-navy-800 border border-gold-500/10">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Email</p>
                    <a href="mailto:info@mrlaw.co.za" className="text-white hover:text-gold-400 transition-colors">
                      info@mrlaw.co.za
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Phone</p>
                    <a href="tel:+27123456789" className="text-white hover:text-gold-400 transition-colors">
                      +27 12 345 6789
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Location</p>
                    <p className="text-white">Johannesburg, South Africa</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Office Hours</p>
                    <p className="text-white">Mon - Fri: 08:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Card */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-500/5 border border-gold-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">Prefer a Call?</h3>
              <p className="text-slate-300 mb-4">
                Schedule a free initial consultation to discuss your legal needs.
              </p>
              <a
                href="tel:+27123456789"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="p-6 md:p-8 rounded-xl bg-navy-800 border border-gold-500/10">
            <h3 className="text-xl font-semibold text-white mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-slate-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-gold-500/20 text-white placeholder-slate-500 focus:border-gold-500/50 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-slate-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-gold-500/20 text-white placeholder-slate-500 focus:border-gold-500/50 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm text-slate-400 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-gold-500/20 text-white placeholder-slate-500 focus:border-gold-500/50 focus:outline-none transition-colors"
                  placeholder="+27 XX XXX XXXX"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm text-slate-400 mb-2">Service Required</label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-gold-500/20 text-white focus:border-gold-500/50 focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="employment">Employment Relations</option>
                  <option value="delictual">Delictual Claims</option>
                  <option value="insurance">Insurance Law</option>
                  <option value="matrimonial">Matrimonial Disputes</option>
                  <option value="contractual">Contractual Matters</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-slate-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-gold-500/20 text-white placeholder-slate-500 focus:border-gold-500/50 focus:outline-none transition-colors resize-none"
                  placeholder="Briefly describe your legal matter..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
