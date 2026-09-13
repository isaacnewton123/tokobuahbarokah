"use client";

import { useSyncExternalStore } from "react";

function getWIBTime(): Date {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utc + 7 * 3600000);
}

function checkStoreOpen(): boolean {
  const wib = getWIBTime();
  const hours = wib.getHours();
  const minutes = wib.getMinutes();
  return (hours > 9 || (hours === 9 && minutes >= 0)) && hours < 17;
}

let currentOpen = false;

function subscribeToStoreStatus(callback: () => void) {
  const interval = setInterval(() => {
    const newOpen = checkStoreOpen();
    if (newOpen !== currentOpen) {
      currentOpen = newOpen;
      callback();
    }
  }, 60_000);
  return () => clearInterval(interval);
}

function getSnapshot(): boolean {
  currentOpen = checkStoreOpen();
  return currentOpen;
}

function getServerSnapshot(): boolean {
  return false;
}

function PulsingDot({ isOpen }: { isOpen: boolean }) {
  return (
    <span className="relative flex h-3 w-3">
      {isOpen && (
        <span
          className="absolute inline-flex h-full w-full rounded-full opacity-75"
          style={{
            backgroundColor: "var(--color-success)",
            animation: "pulse-ring 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
          }}
        />
      )}
      <span
        className="relative inline-flex rounded-full h-3 w-3"
        style={{ backgroundColor: isOpen ? "var(--color-success)" : "var(--color-critical)" }}
      />
    </span>
  );
}

function StatusLabel({ isOpen }: { isOpen: boolean }) {
  return (
    <span className="text-body-sm-bold" style={{ color: isOpen ? "var(--color-primary)" : "var(--color-critical)" }}>
      {isOpen ? "Buka Sekarang" : "Tutup"}
    </span>
  );
}

function StatusMessage({ isOpen }: { isOpen: boolean }) {
  return (
    <span className="text-body-sm" style={{ color: "var(--color-steel)" }}>
      {isOpen ? "Jam Operasional: 09:00 – 17:00 WIB" : "Buka kembali besok pukul 09:00 WIB"}
    </span>
  );
}

export default function StoreStatus() {
  const open = useSyncExternalStore(
    (cb) => subscribeToStoreStatus(cb),
    getSnapshot,
    getServerSnapshot,
  );

  return (
    <section className="section-container" style={{ paddingTop: "var(--space-xl)" }}>
      <div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4 px-6 mx-auto animate-fade-in"
        style={{
          backgroundColor: open ? "rgba(45, 106, 79, 0.06)" : "rgba(228, 30, 63, 0.06)",
          borderRadius: "var(--rounded-full)",
          border: `1px solid ${open ? "rgba(45, 106, 79, 0.15)" : "rgba(228, 30, 63, 0.15)"}`,
          maxWidth: "fit-content",
        }}
      >
        <div className="flex items-center gap-2">
          <PulsingDot isOpen={open} />
          <StatusLabel isOpen={open} />
        </div>
        <span className="hidden sm:block" style={{ width: "1px", height: "16px", backgroundColor: "var(--color-hairline)" }} />
        <StatusMessage isOpen={open} />
      </div>
    </section>
  );
}
