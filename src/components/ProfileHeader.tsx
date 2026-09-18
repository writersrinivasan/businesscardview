import { card } from "@/config/card";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function ProfileHeader() {
  const { profile } = card;

  return (
    <header className="flex flex-col items-center text-center animate-fade-up">
      <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-brand/30 blur-lg" />
        {profile.avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={profile.avatar}
            alt={profile.name}
            className="relative h-28 w-28 rounded-full object-cover ring-4 ring-white shadow-lg"
          />
        ) : (
          <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-brand text-3xl font-bold text-white ring-4 ring-white shadow-lg">
            {initials(profile.name)}
          </div>
        )}
      </div>

      <h1 className="mt-4 text-2xl font-bold tracking-tight">{profile.name}</h1>
      <p className="mt-1 font-medium text-brand">{profile.title}</p>
      <p className="mt-2 max-w-xs text-sm text-slate-500">{profile.tagline}</p>
    </header>
  );
}
