"use client";

import { useEffect, useState } from "react";
import { card } from "@/config/card";

export function ShareBar() {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [shareUrl, setShareUrl] = useState(card.siteUrl);

  // Prefer the live URL the visitor is actually on (works before you set a domain).
  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href.split("#")[0]);
    }
  }, []);

  const shareTitle = `${card.profile.name} — ${card.profile.title}`;

  async function handleShare() {
    const data = {
      title: shareTitle,
      text: card.profile.tagline,
      url: shareUrl,
    };
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(data);
        return;
      } catch {
        // user cancelled or share failed — fall back to copy
      }
    }
    await handleCopy();
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard blocked; no-op
    }
  }

  return (
    <>
      {/* Sticky action bar */}
      <div className="sticky bottom-0 z-30 mt-2 -mx-5 border-t border-slate-200/70 bg-white/80 px-5 py-3 backdrop-blur">
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={handleShare}
            className="col-span-3 inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 sm:col-span-1"
          >
            <ShareIcon />
            Share
          </button>

          <button
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
          >
            <CopyIcon />
            {copied ? "Copied!" : "Copy"}
          </button>

          <button
            onClick={() => setShowQR(true)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
          >
            <QrIcon />
            QR
          </button>

          <a
            href="/api/vcard"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
          >
            <ContactIcon />
            Save
          </a>
        </div>
      </div>

      {/* QR modal */}
      {showQR && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6"
          onClick={() => setShowQR(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Scan QR code"
        >
          <div
            className="w-full max-w-xs rounded-3xl bg-white p-6 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold">Scan to open</h3>
            <p className="mt-1 text-sm text-slate-500">
              Point a camera at this code to open the card.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/api/qr"
              alt="QR code linking to this card"
              className="mx-auto mt-4 h-56 w-56 rounded-2xl ring-1 ring-slate-100"
            />
            <button
              onClick={() => setShowQR(false)}
              className="mt-5 w-full rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M18 8a3 3 0 1 0-2.8-4H15a3 3 0 0 0 .1 1.9L8.9 9.4a3 3 0 1 0 0 5.2l6.2 3.5A3 3 0 1 0 18 16a3 3 0 0 0-2 .8l-6.2-3.5a3 3 0 0 0 0-2.6L16 7.2A3 3 0 0 0 18 8Z" />
    </svg>
  );
}
function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M9 2a2 2 0 0 0-2 2v1H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V6.8a2 2 0 0 0-.6-1.4l-2.8-2.8A2 2 0 0 0 15.2 2H9Zm0 2h6v2a2 2 0 0 0 2 2h2v9h-1V9a2 2 0 0 0-2-2H9V4Z" />
    </svg>
  );
}
function QrIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M3 3h8v8H3V3Zm2 2v4h4V5H5Zm8-2h8v8h-8V3Zm2 2v4h4V5h-4ZM3 13h8v8H3v-8Zm2 2v4h4v-4H5Zm8 0h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-4 4h2v2h-2v-2Zm2-2h2v2h-2v-2Zm2 2h2v2h-2v-2Z" />
    </svg>
  );
}
function ContactIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.4 0-8 2.7-8 6v2h16v-2c0-3.3-3.6-6-8-6Z" />
    </svg>
  );
}
