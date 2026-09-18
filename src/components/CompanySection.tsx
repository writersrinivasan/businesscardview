import { card } from "@/config/card";
import { Icon } from "./Icon";

export function CompanySection() {
  const { company } = card;

  return (
    <section className="animate-fade-up" aria-label="Company details">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
        Company
      </h2>

      <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
        <h3 className="text-lg font-semibold">{company.name}</h3>
        <p className="mt-1 text-sm text-slate-500">{company.description}</p>

        <dl className="mt-4 space-y-3 text-sm">
          <ContactRow icon="website" label={company.website.replace(/^https?:\/\//, "")} href={company.website} external />
          <ContactRow icon="email" label={company.email} href={`mailto:${company.email}`} />
          <ContactRow icon="phone" label={company.phone} href={`tel:${company.phone.replace(/\s/g, "")}`} />
          <div className="flex items-center gap-3 text-slate-600">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-soft text-brand">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
              </svg>
            </span>
            <span>{company.location}</span>
          </div>
        </dl>

        <a
          href={company.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Visit Website
        </a>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  href,
  external,
}: {
  icon: "website" | "email" | "phone";
  label: string;
  href: string;
  external?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-soft text-brand">
        <Icon name={icon} />
      </span>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="truncate text-slate-600 transition hover:text-brand"
      >
        {label}
      </a>
    </div>
  );
}
