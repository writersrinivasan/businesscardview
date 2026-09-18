import QRCode from "qrcode";
import { card } from "@/config/card";

export const dynamic = "force-static";

export async function GET() {
  const svg = await QRCode.toString(card.siteUrl, {
    type: "svg",
    margin: 1,
    width: 320,
    color: {
      dark: "#0f172a",
      light: "#ffffff",
    },
  });

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
