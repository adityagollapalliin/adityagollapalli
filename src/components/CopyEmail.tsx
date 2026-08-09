import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      onClick={copy}
      className="glow-ring group inline-flex items-center gap-3 rounded-xl bg-white/5 px-6 py-3 font-mono text-sm text-violet-200 backdrop-blur transition hover:bg-white/10"
      aria-live="polite"
    >
      <span>{email}</span>
      <span className="text-xs text-cyan-400 transition group-hover:text-cyan-300">
        {copied ? "✓ copied" : "copy"}
      </span>
    </button>
  );
}
