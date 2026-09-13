"use client";

import { LuRefreshCw, LuTriangleAlert } from "react-icons/lu";

function ErrorIcon() {
  return (
    <div className="mb-6 flex justify-center">
      <div
        className="w-24 h-24 flex items-center justify-center"
        style={{ backgroundColor: "rgba(247, 127, 0, 0.08)", borderRadius: "var(--rounded-circle)" }}
      >
        <LuTriangleAlert size={48} color="var(--color-accent)" />
      </div>
    </div>
  );
}

function ErrorMessage({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="text-body-sm mb-8 max-w-md mx-auto" style={{ color: "var(--color-steel)" }}>
      Detail: {message}
    </p>
  );
}

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      className="min-h-dvh flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #fef9ef 0%, #ffffff 40%, #fff5f5 100%)",
      }}
    >
      <div className="section-container text-center py-20 animate-fade-in-up">
        <ErrorIcon />
        <h1 className="text-display-lg mb-4" style={{ color: "var(--color-ink-deep)" }}>
          Terjadi Kesalahan
        </h1>
        <p className="text-subtitle-md mb-2 max-w-md mx-auto" style={{ color: "var(--color-charcoal)" }}>
          Maaf, terjadi kesalahan saat memuat halaman ini.
        </p>
        <ErrorMessage message={error.message} />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={reset} className="btn-primary text-base!">
            <LuRefreshCw size={18} />
            Coba Lagi
          </button>
          <a href="/" className="btn-secondary text-base!">
            Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  );
}
