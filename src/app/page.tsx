import { ProfileHeader } from "@/components/ProfileHeader";
import { SocialLinks } from "@/components/SocialLinks";
import { CompanySection } from "@/components/CompanySection";
import { ProductsSection } from "@/components/ProductsSection";
import { ShareBar } from "@/components/ShareBar";
import { card } from "@/config/card";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col bg-amber-50/40">
      {/* Decorative top gradient (brand amber) */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-64 bg-gradient-to-b from-brand/25 to-transparent" />

      <div className="relative flex flex-1 flex-col gap-8 px-5 pt-8 pb-4">
        {/* Brand logo */}
        <div className="flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt={`${card.company.name} logo`}
            className="h-14 w-auto object-contain"
          />
        </div>

        <ProfileHeader />
        <SocialLinks />
        <CompanySection />
        <ProductsSection />

        <footer className="pt-2 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} {card.company.name}
        </footer>

        <ShareBar />
      </div>
    </main>
  );
}
