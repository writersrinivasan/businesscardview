import fs from "node:fs";
import QRCode from "qrcode";

const URL = "https://businesscardview.vercel.app/";

// Generate QR as an SVG string, then pull out its inner <path> elements
// and the module count so we can place it precisely inside the poster.
const qrSvg = await QRCode.toString(URL, {
  type: "svg",
  margin: 1,
  color: { dark: "#1a1a1a", light: "#00000000" }, // transparent light so the frame shows
});

// Extract viewBox module count (e.g. "0 0 31 31")
const vbMatch = qrSvg.match(/viewBox="0 0 (\d+) (\d+)"/);
const modules = vbMatch ? Number(vbMatch[1]) : 31;
// Extract the dark stroke path (the QR itself). qrcode emits a bg rect + a stroke path.
const pathMatch = qrSvg.match(/<path stroke="#1a1a1a" d="([^"]+)"/);
const qrPathD = pathMatch ? pathMatch[1] : "";

// Place the QR in a 340x340 area starting at (270,510) in poster coords.
const QR_X = 270, QR_Y = 510, QR_SIZE = 340;
const scale = QR_SIZE / modules;

const poster = `<svg xmlns="http://www.w3.org/2000/svg" width="880" height="1180" viewBox="0 0 880 1180" font-family="Arial, Helvetica, sans-serif">
  <rect width="880" height="1180" rx="40" fill="#fffaf0"/>
  <rect x="20" y="20" width="840" height="1140" rx="28" fill="#ffffff" stroke="#ffe6a8" stroke-width="2"/>
  <path d="M20 48 a28 28 0 0 1 28 -28 h784 a28 28 0 0 1 28 28 v70 h-840 z" fill="#f5a800"/>
  <text x="440" y="92" text-anchor="middle" fill="#ffffff" font-size="34" font-weight="700" letter-spacing="1">ONE YOTO</text>
  <text x="440" y="235" text-anchor="middle" font-size="120" font-weight="800" fill="#f5a800">yoto<tspan fill="#f01e14" font-size="70" dy="-40">1</tspan></text>
  <text x="440" y="320" text-anchor="middle" fill="#1a1a1a" font-size="40" font-weight="700">Srinivasan Ramanujam</text>
  <text x="440" y="363" text-anchor="middle" fill="#f5a800" font-size="24" font-weight="600">GenAI &amp; Agentic AI Consultant · Founder</text>
  <text x="440" y="443" text-anchor="middle" fill="#444" font-size="30" font-weight="600">Scan to open my digital card</text>
  <rect x="240" y="480" width="400" height="400" rx="28" fill="#ffffff" stroke="#f5a800" stroke-width="4"/>
  <g transform="translate(${QR_X},${QR_Y}) scale(${scale})">
    <path stroke="#1a1a1a" stroke-width="1" d="${qrPathD}"/>
  </g>
  <path d="M240 520 v-16 a24 24 0 0 1 24 -24 h16" fill="none" stroke="#f01e14" stroke-width="6" stroke-linecap="round"/>
  <path d="M640 520 v-16 a24 24 0 0 0 -24 -24 h-16" fill="none" stroke="#f01e14" stroke-width="6" stroke-linecap="round"/>
  <path d="M240 840 v16 a24 24 0 0 0 24 24 h16" fill="none" stroke="#f01e14" stroke-width="6" stroke-linecap="round"/>
  <path d="M640 840 v16 a24 24 0 0 1 -24 24 h-16" fill="none" stroke="#f01e14" stroke-width="6" stroke-linecap="round"/>
  <text x="440" y="945" text-anchor="middle" fill="#1a1a1a" font-size="26" font-weight="600">businesscardview.vercel.app</text>
  <text x="440" y="1010" text-anchor="middle" fill="#666" font-size="21">Social links · Company · Products &amp; Services</text>
  <text x="440" y="1042" text-anchor="middle" fill="#666" font-size="21">Save my contact · Share in one tap</text>
  <path d="M20 1092 h840 v40 a28 28 0 0 1 -28 28 h-784 a28 28 0 0 1 -28 -28 z" fill="#f5a800"/>
  <text x="440" y="1140" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="600">An Agentic AI Product Development Company</text>
</svg>
`;

fs.writeFileSync("qr-poster.svg", poster);

// Also write a standalone QR (solid white bg) for reuse in slides/print.
const qrStandalone = await QRCode.toString(URL, {
  type: "svg",
  margin: 2,
  width: 640,
  color: { dark: "#1a1a1a", light: "#ffffff" },
});
fs.writeFileSync("qr-code.svg", qrStandalone);

console.log("Wrote qr-poster.svg and qr-code.svg (self-contained).");
