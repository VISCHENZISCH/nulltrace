"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center px-4 pt-32 pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-[400px] flex flex-col"
      >
        <div className="mb-8">
          <h1 className="text-[28px] font-medium leading-tight mb-2">Connectez-vous</h1>
          <p className="text-[15px] text-ink-muted">Accédez à votre historique d'investigations.</p>
        </div>

        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
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
            <label className="text-[13px] text-ink-muted font-medium ml-1 group-focus-within:text-ink transition-colors">Mot de passe</label>
            <div className="relative flex items-center">
              <Lock className="absolute left-4 w-5 h-5 text-ink-muted group-focus-within:text-accent-blue transition-colors" />
              <input 
                type={showPassword ? "text" : "password"} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          <button 
            disabled={!email || !password}
            className="w-full bg-white text-black hover:bg-gray-200 disabled:bg-surface-2 disabled:text-ink-muted disabled:cursor-not-allowed mt-4 flex justify-between items-center px-6 py-4 rounded-xl font-medium text-[16px] transition-colors"
          >
            Continuer <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-8 flex flex-col gap-4">
          <p className="text-[14px] text-ink-muted">
            Vous n'avez pas de compte ?{" "}
            <Link href="/register" className="text-ink underline underline-offset-4 hover:text-white transition-colors">Inscrivez-vous</Link>
          </p>
          <p className="text-[14px] text-ink-muted">
            Mot de passe oublié ?{" "}
            <Link href="#" className="text-ink underline underline-offset-4 hover:text-white transition-colors">Réinitialiser le mot de passe</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
