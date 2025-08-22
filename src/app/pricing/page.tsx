'use client';

import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Star } from 'lucide-react';

const PricingPage = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for trying out our service",
      features: [
        "1 AI chatbot",
        "100 conversations/month",
        "Basic customization",
        "Community support",
        "7-day response time"
      ],
      cta: "Get Started Free",
      popular: false,
      highlight: false
    },
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "1 AI chatbot",
        "1,000 conversations/month",
        "Basic customization", 
        "Email support",
        "WordPress plugin",
        "24-hour response time"
      ],
      cta: "Start Free Trial",
      popular: false,
      highlight: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Best for growing businesses",
      features: [
        "5 AI chatbots",
        "10,000 conversations/month",
        "Advanced customization",
        "Priority support",
        "All integrations",
        "Analytics dashboard",
        "Human handover",
        "1-hour response time"
      ],
      cta: "Start Free Trial",
      popular: true,
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Unlimited chatbots",
        "Unlimited conversations",
        "White-label solution",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee",
        "Advanced analytics",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false,
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">
                ChatBot Pro
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/product" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Product</Link>
              <Link href="/chat-widget" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Chat Widget</Link>
              <Link href="/wordpress" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">WordPress</Link>
              <Link href="/pricing" className="text-blue-600 font-medium">Pricing</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Contact</Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg transition-colors">
                Login
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-12 lg:px-16">
          <div className="max-w-6xl mx-auto">
            {/* Page header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-blue-600 mr-2" />
                <span className="text-blue-600 font-medium">Pricing Plans</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Simple, Transparent{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Pricing
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Choose the plan that fits your needs. All paid plans include a 14-day free trial.
              </p>
            </div>

            {/* Pricing cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white border rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col ${
                    plan.popular
                      ? "border-blue-600 shadow-blue-600/10"
                      : "border-slate-200 hover:border-blue-600/50"
                  } ${plan.highlight ? "ring-2 ring-blue-600/20" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg whitespace-nowrap">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-slate-600 mb-6">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline justify-center mb-6">
                      <span className="text-5xl font-bold text-slate-900">
                        {plan.price}
                      </span>
                      <span className="text-slate-600 ml-2 text-lg">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full group mt-auto py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${
                      plan.popular 
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90" 
                        : "border-2 border-slate-200 text-slate-900 hover:border-blue-600 hover:text-blue-600"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>

            {/* Features comparison */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <h3 className="text-2xl font-bold text-center mb-8 text-slate-900">
                All plans include our core features
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900">AI-Powered</h4>
                  <p className="text-sm text-slate-600">
                    Advanced AI technology for natural conversations
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900">Easy Integration</h4>
                  <p className="text-sm text-slate-600">
                    Simple setup with popular platforms and websites
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900">24/7 Available</h4>
                  <p className="text-sm text-slate-600">
                    Your chatbot works around the clock for your customers
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ and contact */}
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900">
                Questions about pricing?
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                We're here to help you choose the right plan for your business.
              </p>
              <div className="flex justify-center">
                <button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ChatBot Pro
              </div>
              <p className="text-slate-400">
                AI-powered chatbots for modern businesses
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 ChatBot Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PricingPage;
