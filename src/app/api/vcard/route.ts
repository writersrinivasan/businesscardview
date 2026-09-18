import { buildVCard } from "@/lib/vcard";
import { card } from "@/config/card";

export const dynamic = "force-static";

export function GET() {
  const vcf = buildVCard();
  const filename = `${card.profile.name.replace(/\s+/g, "_")}.vcf`;

  return new Response(vcf, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
