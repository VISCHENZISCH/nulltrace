"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Lock, Mail, ArrowRight, Check, Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const checks = [
    { label: "12 caractères minimum", isValid: password.length >= 12 },
    { label: "Au moins une lettre minuscule", isValid: /[a-z]/.test(password) },
    { label: "Au moins une lettre majuscule", isValid: /[A-Z]/.test(password) },
    { label: "Au moins un chiffre", isValid: /[0-9]/.test(password) },
    { label: "Au moins un symbole spécial", isValid: /[^A-Za-z0-9]/.test(password) },
  ];

  const allValid = checks.every(check => check.isValid);

  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center px-4 pt-32 pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-[420px] flex flex-col"
      >
        <div className="mb-8">
          <h1 className="text-[28px] font-medium leading-tight mb-2">Créez votre compte</h1>
          <p className="text-[15px] text-ink-muted">Rejoignez l'écosystème d'investigation.</p>
        </div>

        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-1.5 group">
            <label className="text-[13px] text-ink-muted font-medium ml-1 group-focus-within:text-ink transition-colors">Nom complet</label>
            <div className="relative flex items-center">
              <User className="absolute left-4 w-5 h-5 text-ink-muted group-focus-within:text-accent-blue transition-colors" />
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe" 
                className="w-full bg-canvas text-ink pl-12 pr-4 py-3.5 rounded-xl border border-hairline focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 outline-none transition-all text-[15px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5 group">
            <label className="text-[13px] text-ink-muted font-medium ml-1 group-focus-within:text-ink transition-colors">Adresse e-mail</label>
            <div className="relative flex items-center">
              <Mail className="absolute left-4 w-5 h-5 text-ink-muted group-focus-within:text-accent-blue transition-colors" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="analyste@soc.com" 
                className="w-full bg-canvas text-ink pl-12 pr-4 py-3.5 rounded-xl border border-hairline focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 outline-none transition-all text-[15px]"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-1.5 group">
            <label className="text-[13px] text-ink-muted font-medium ml-1 group-focus-within:text-ink transition-colors">Mot de passe robuste</label>
            <div className="relative flex items-center">
              <Lock className="absolute left-4 w-5 h-5 text-ink-muted group-focus-within:text-accent-blue transition-colors" />
              <input 
                type={showPassword ? "text" : "password"} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
                placeholder="••••••••••••" 
                className="w-full bg-canvas text-ink pl-12 pr-12 py-3.5 rounded-xl border border-hairline focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 outline-none transition-all text-[15px]"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-ink-muted hover:text-ink transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {(isPasswordFocused || password.length > 0) && (
              <motion.div 
                initial={{ opacity: 0, height: 0, marginTop: -10 }}
                animate={{ opacity: 1, height: "auto", marginTop: 0 }}
                exit={{ opacity: 0, height: 0, marginTop: -10 }}
                className="overflow-hidden"
              >
                <div className="flex flex-col gap-2 p-4 bg-surface-1 rounded-xl border border-hairline mt-1">
                  {checks.map((check, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`flex items-center justify-center w-5 h-5 rounded-full transition-colors duration-300 ${check.isValid ? 'bg-semantic-success/20 text-semantic-success' : 'bg-surface-2 text-ink-muted'}`}>
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span className={`text-[13px] transition-colors duration-300 ${check.isValid ? 'text-ink' : 'text-ink-muted'}`}>
                        {check.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button 
            disabled={!allValid || !name || !email}
            className="w-full bg-white text-black hover:bg-gray-200 disabled:bg-surface-2 disabled:text-ink-muted disabled:cursor-not-allowed mt-4 flex justify-between items-center px-6 py-4 rounded-xl font-medium text-[16px] transition-colors"
          >
            Créer mon compte <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-8 flex flex-col gap-4">
          <p className="text-[14px] text-ink-muted">
            Déjà un compte ?{" "}
            <Link href="/login" className="text-ink underline underline-offset-4 hover:text-white transition-colors">Connectez-vous</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
