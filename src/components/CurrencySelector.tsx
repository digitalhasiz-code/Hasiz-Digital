"use client";

interface CurrencySelectorProps {
  variant?: string;
  className?: string;
}

export default function CurrencySelector(_props?: CurrencySelectorProps) {
  // Currency is automatically detected based on the visitor's country/timezone.
  // Manual selector is hidden as per client instruction.
  return null;
}
