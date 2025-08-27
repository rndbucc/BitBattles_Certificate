"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoadingScreen({
  params,
}: {
  params: Promise<{ recipientId: string }>;
}) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  const matrixLines = useMemo(() => {
    const characters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%*@";
    const lines: string[] = [];
    for (let i = 0; i < 30; i++) {
      let line = "";
      for (let j = 0; j < 80; j++) {
        line += characters[Math.floor(Math.random() * characters.length)];
      }
      lines.push(line);
    }
    return lines;
  }, []);

  useEffect(() => {
    let animationFrame: number;
    let startTime: number | null = null;

    const durationMs = 2600;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const pct = Math.min(100, Math.floor((elapsed / durationMs) * 100));
      setProgress(pct);
      if (pct < 100) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  useEffect(() => {
    const go = async () => {
      const { recipientId } = await params;
      const redirectDelayMs = 2800; // a bit after progress completes
      const timer = setTimeout(() => {
        router.push(`/${recipientId}`);
      }, redirectDelayMs);
      return () => clearTimeout(timer);
    };
    void go();
  }, [params, router]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Themed base background */}
      <div className="absolute inset-0 bg-[#0b1a10]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1a10] via-[#0f2a18] to-[#0b1a10] opacity-90" />

      {/* Matrix rain layer (lightweight loop) */}
      <div className="absolute inset-0 pointer-events-none select-none [mask-image:linear-gradient(180deg,transparent,black_20%,black_80%,transparent)]">
        <div
          className="absolute w-full h-full"
          style={{ transform: "translateZ(0)" }}
        >
          {matrixLines.map((line, idx) => (
            <div
              key={idx}
              className="font-mono text-[10px] sm:text-[12px] leading-[1.15] text-[#29f16d]/25 will-change-transform"
              style={{
                position: "absolute",
                top: `${(idx * 3.5) % 100}vh`,
                left: 0,
                right: 0,
                animation: `scrollDown ${8 + (idx % 5)}s linear infinite`,
                whiteSpace: "pre",
              }}
            >
              {line}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center mb-8">
          <h1 className="title-kragx text-3xl sm:text-4xl mb-2">
            Initializing Secure Lookup
          </h1>
          <p className="font-cinzel text-[#efda9b]/80">
            Establishing connection to certificate vault…
          </p>
        </div>

        {/* Loading bar */}
        <div className="w-full max-w-xl">
          <div className="h-3 rounded-full bg-[#1a3a26] border border-[#2d6a3f] overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#33ff88] via-[#a7ff00] to-[#33ff88] shadow-[0_0_12px_#33ff88]"
              style={{ width: `${progress}%`, transition: "width 80ms linear" }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-[#9ce3b5] font-mono text-xs">
            <span>Decrypting payload</span>
            <span>{progress}%</span>
          </div>
        </div>

        {/* Status lines */}
        <div className="mt-8 w-full max-w-xl font-mono text-xs sm:text-sm text-[#9ce3b5]/80 space-y-1">
          <div className="flex items-center justify-between">
            <span>[AUTH]</span>
            <span>token=ok</span>
          </div>
          <div className="flex items-center justify-between">
            <span>[CERT-INDEX]</span>
            <span>querying…</span>
          </div>
          <div className="flex items-center justify-between">
            <span>[ROUTE]</span>
            <span>redirecting on complete</span>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes scrollDown {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  );
}
