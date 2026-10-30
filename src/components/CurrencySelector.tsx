"use client";

import { useState, useRef, useEffect } from "react";
import { useCurrency } from "@/context/CurrencyContext";
import { supportedCurrencies, CurrencyCode } from "@/data/pricing";
import { ChevronDown, Globe, Check } from "lucide-react";

interface CurrencySelectorProps {
  variant?: "header" | "inline";
  className?: string;
}

export default function CurrencySelector({ variant = "header", className = "" }: CurrencySelectorProps) {
  const { currency, setCurrency, currencyConfig } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currencies = Object.values(supportedCurrencies);

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center gap-1.5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue ${
          variant === "header"
            ? "px-2.5 py-1.5 text-xs font-semibold text-navy-900 bg-slate-100 hover:bg-slate-200/80 border border-slate-200/60"
            : "px-3.5 py-2 text-sm font-semibold text-navy-900 bg-white hover:bg-slate-50 border border-surface-border shadow-subtle"
        }`}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="text-base leading-none">{currencyConfig.flag}</span>
        <span className="font-mono">{currencyConfig.code}</span>
        <span className="text-slate-400 font-sans">({currencyConfig.symbol})</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-60 rounded-xl bg-white shadow-elevated border border-surface-border p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-2.5 py-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-100">
            Select Your Currency
          </div>
          <div className="max-h-64 overflow-y-auto py-1 scrollbar-thin">
            {currencies.map((curr) => {
              const isSelected = curr.code === currency;
              return (
                <button
                  key={curr.code}
                  type="button"
                  onClick={() => {
                    setCurrency(curr.code as CurrencyCode);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs transition-colors ${
                    isSelected
                      ? "bg-blue-50 text-brand-blue font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-navy-900"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base leading-none">{curr.flag}</span>
                    <span className="font-medium">{curr.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[11px] text-slate-400">({curr.symbol})</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-brand-blue" />}
                  </div>
                </button>
              );
            })}
          </div>
          <div className="px-2.5 py-1.5 text-[10px] text-slate-400 border-t border-slate-100 bg-slate-50 rounded-b-lg">
            Auto-detected based on your region.
          </div>
        </div>
      )}
    </div>
  );
}

