"use client";

import { motion } from "framer-motion";
import { Search, Loader2 } from "lucide-react";
import { useState } from "react";

interface SearchFormProps {
  label: string;
  placeholder: string;
  buttonText: string;
  note?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading?: boolean;
}

export function SearchForm({
  label,
  placeholder,
  buttonText,
  note,
  value,
  onChange,
  onSubmit,
  isLoading
}: SearchFormProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.form 
      onSubmit={onSubmit} 
      className="flex flex-col gap-6 w-full max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-3">
        <label className="body-lg text-ink-muted text-center mb-2">{label}</label>
        
        <motion.div 
          className="relative flex flex-col md:flex-row items-center w-full bg-surface-1 md:rounded-[100px] rounded-[32px] border p-2 md:pl-8 overflow-hidden"
          animate={{
            borderColor: isFocused ? "var(--accent-blue)" : "var(--hairline)",
            boxShadow: isFocused ? "0 0 0 4px rgba(0, 153, 255, 0.15)" : "0 24px 64px -24px rgba(0,0,0,0.5)",
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center w-full flex-1 px-4 md:px-0 py-4 md:py-0">
            <Search className="w-8 h-8 text-ink-muted mr-4 flex-shrink-0" />
            <input 
              type="text" 
              placeholder={placeholder} 
              value={value}
              onChange={onChange}
              disabled={isLoading}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="flex-1 bg-transparent border-none outline-none text-ink w-full placeholder:text-ink-muted/50"
              style={{ fontSize: "clamp(20px, 3vw, 36px)", fontWeight: 500, letterSpacing: "-1px" }}
            />
          </div>
          <button 
            type="submit" 
            disabled={isLoading || !value.trim()} 
            className="btn-primary flex items-center justify-center md:rounded-[100px] rounded-2xl w-full md:w-auto px-8 py-5 transition-all mt-2 md:mt-0 md:ml-2"
            style={{ fontSize: "18px", minWidth: "200px" }}
          >
            {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : buttonText}
          </button>
        </motion.div>
        
        {note && (
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3 }}
            className="body-sm text-ink-muted text-center mt-2"
          >
            {note}
          </motion.p>
        )}
      </div>
    </motion.form>
  );
}
