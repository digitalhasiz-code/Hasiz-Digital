"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { 
  CurrencyCode, 
  CurrencyConfig, 
  supportedCurrencies, 
  servicesPricing,
  ServicePricing
} from "@/data/pricing";

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  currencyConfig: CurrencyConfig;
  formatServiceStartingPrice: (slug: string) => string;
  getServicePricing: (slug: string) => ServicePricing | undefined;
  formatAmount: (amountByCurrency: Record<CurrencyCode, number>) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

function detectUserCurrency(): CurrencyCode {
  if (typeof window === "undefined") return "USD";

  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const lang = (navigator.language || "").toLowerCase();

    // Pakistan check
    if (tz.includes("Karachi") || lang.includes("-pk") || lang === "ur") {
      return "PKR";
    }

    // UK check
    if (tz.includes("London") || lang === "en-gb") {
      return "GBP";
    }

    // UAE check
    if (tz.includes("Dubai") || tz.includes("Abu_Dhabi") || lang.includes("-ae")) {
      return "AED";
    }

    // Saudi Arabia check
    if (tz.includes("Riyadh") || lang.includes("-sa")) {
      return "SAR";
    }

    // India check
    if (tz.includes("Kolkata") || tz.includes("Calcutta") || lang.includes("-in")) {
      return "INR";
    }

    // Canada check
    if (tz.includes("Toronto") || tz.includes("Vancouver") || tz.includes("Montreal") || lang.includes("-ca")) {
      return "CAD";
    }

    // Australia check
    if (tz.includes("Sydney") || tz.includes("Melbourne") || tz.includes("Brisbane") || tz.includes("Perth") || lang.includes("-au")) {
      return "AUD";
    }

    // Europe check
    if (
      tz.startsWith("Europe/") || 
      ["de", "fr", "es", "it", "nl", "pt"].some(l => lang.startsWith(l))
    ) {
      return "EUR";
    }
  } catch (e) {
    // Fallback to USD
  }

  return "USD";
}

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("USD");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("hasiz_preferred_currency") as CurrencyCode | null;
    if (saved && supportedCurrencies[saved]) {
      setCurrencyState(saved);
    } else {
      const detected = detectUserCurrency();
      setCurrencyState(detected);
    }
  }, []);

  const setCurrency = (code: CurrencyCode) => {
    if (supportedCurrencies[code]) {
      setCurrencyState(code);
      try {
        localStorage.setItem("hasiz_preferred_currency", code);
      } catch (e) {}
    }
  };

  const currentConfig = supportedCurrencies[currency] || supportedCurrencies.USD;

  const formatServiceStartingPrice = (slug: string): string => {
    const service = servicesPricing[slug];
    if (!service) return "$1,000";
    const amount = service.startingPrice[currency] ?? service.startingPrice.USD;
    return currentConfig.format(amount);
  };

  const getServicePricing = (slug: string): ServicePricing | undefined => {
    return servicesPricing[slug];
  };

  const formatAmount = (amountByCurrency: Record<CurrencyCode, number>): string => {
    const amount = amountByCurrency[currency] ?? amountByCurrency.USD;
    return currentConfig.format(amount);
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        currencyConfig: currentConfig,
        formatServiceStartingPrice,
        getServicePricing,
        formatAmount
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    // Safe SSR fallback
    return {
      currency: "USD" as CurrencyCode,
      setCurrency: () => {},
      currencyConfig: supportedCurrencies.USD,
      formatServiceStartingPrice: (slug: string) => {
        const s = servicesPricing[slug];
        return s ? supportedCurrencies.USD.format(s.startingPrice.USD) : "$1,000";
      },
      getServicePricing: (slug: string) => servicesPricing[slug],
      formatAmount: (amounts: Record<CurrencyCode, number>) => supportedCurrencies.USD.format(amounts.USD ?? 1000)
    };
  }
  return context;
}
