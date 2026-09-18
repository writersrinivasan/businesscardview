import { card } from "@/config/card";

/**
 * Builds a vCard 3.0 string from the card config so clients can
 * save the contact with one tap. Includes name, org, title,
 * phone, email, website, and all social URLs.
 */
export function buildVCard(): string {
  const { profile, company, socials } = card;

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${escape(profile.name)};;;`,
    `FN:${escape(profile.name)}`,
    `ORG:${escape(company.name)}`,
    `TITLE:${escape(profile.title)}`,
    `TEL;TYPE=WORK,VOICE:${company.phone}`,
    `EMAIL;TYPE=WORK:${company.email}`,
    `URL:${company.website}`,
    `ADR;TYPE=WORK:;;${escape(company.location)};;;;`,
    `NOTE:${escape(profile.tagline)}`,
    ...socials.map((s) => `URL:${s.url}`),
    "END:VCARD",
  ];

  return lines.join("\r\n");
}

function escape(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}
