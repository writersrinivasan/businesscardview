import { card } from "@/config/card";
import { Icon } from "./Icon";

export function SocialLinks() {
  const { socials } = card;

  if (!socials.length) return null;

  return (
    <section className="animate-fade-up" aria-label="Social media links">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
        Connect with me
      </h2>
      <div className="grid grid-cols-4 gap-3 sm:grid-cols-6">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            title={s.label}
            aria-label={s.label}
            className="group flex aspect-square items-center justify-center rounded-2xl bg-white text-slate-600 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:bg-brand hover:text-white hover:shadow-md"
          >
            <Icon name={s.icon} className="h-6 w-6" />
          </a>
        ))}
      </div>
    </section>
  );
}
