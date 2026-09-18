import { card } from "@/config/card";

export function ProductsSection() {
  const { products } = card;

  if (!products.length) return null;

  return (
    <section className="animate-fade-up" aria-label="Products and services">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
        Products &amp; Services
      </h2>

      <div className="grid gap-3">
        {products.map((p) => {
          const Wrapper = p.url ? "a" : "div";
          const linkProps = p.url
            ? { href: p.url, target: "_blank", rel: "noopener noreferrer" }
            : {};

          return (
            <Wrapper
              key={p.name}
              {...linkProps}
              className={`flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 transition ${
                p.url ? "hover:-translate-y-0.5 hover:shadow-md" : ""
              }`}
            >
              {p.badge && (
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-xl">
                  {p.badge}
                </span>
              )}
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold">{p.name}</h3>
                  {p.price && (
                    <span className="shrink-0 rounded-full bg-brand-soft px-2.5 py-0.5 text-xs font-semibold text-brand">
                      {p.price}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-slate-500">{p.description}</p>
              </div>
              {p.url && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="mt-1 h-4 w-4 shrink-0 text-slate-300"
                  aria-hidden
                >
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}
