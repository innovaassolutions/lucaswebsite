import Link from 'next/link';

export const metadata = {
  title: "About Lucas | Lucas's Fortnite Blog",
  description: "Learn more about Lucas and why he started this Fortnite blog!"
};

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[var(--victory-gold)] to-[var(--legendary-orange)] flex items-center justify-center text-black text-5xl font-bold shadow-lg shadow-[var(--victory-gold)]/30">
            L
          </div>
          <h1 
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            HEY, I&apos;M <span className="text-[var(--victory-gold)]">LUCAS!</span>
          </h1>
          <p className="text-xl text-[var(--loot-blue)]">
            13 years old • Fortnite Enthusiast • Victory Royale Collector
          </p>
        </div>

        {/* About Content */}
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 md:p-10 mb-10">
          <h2 
            className="text-2xl font-bold text-[var(--victory-gold)] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            🎮 ABOUT ME
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              What&apos;s up! I&apos;m Lucas and I&apos;m absolutely OBSESSED with Fortnite! I started playing back in Chapter 2 and I&apos;ve been hooked ever since. There&apos;s just something about the building, the battle royale action, and all the awesome skins that keeps me coming back every single day!
            </p>
            <p>
              I created this blog to share everything I know about Fortnite with you guys. Whether it&apos;s the best landing spots, building tips, skin reviews, or breaking news about the latest updates - I want to help YOU get more Victory Royales!
            </p>
            <p>
              When I&apos;m not playing Fortnite, I&apos;m probably watching Fortnite streams, reading Fortnite news, or thinking about Fortnite. Yeah, you could say I&apos;m a bit obsessed! 😅
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[var(--victory-gold)]" style={{ fontFamily: 'var(--font-display)' }}>
              2+
            </div>
            <div className="text-sm text-gray-400">Years Playing</div>
          </div>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[var(--loot-blue)]" style={{ fontFamily: 'var(--font-display)' }}>
              500+
            </div>
            <div className="text-sm text-gray-400">Victory Royales</div>
          </div>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[var(--epic-purple)]" style={{ fontFamily: 'var(--font-display)' }}>
              200+
            </div>
            <div className="text-sm text-gray-400">Skins Owned</div>
          </div>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[var(--legendary-orange)]" style={{ fontFamily: 'var(--font-display)' }}>
              ∞
            </div>
            <div className="text-sm text-gray-400">Love for Fortnite</div>
          </div>
        </div>

        {/* Favorite Things */}
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 md:p-10 mb-10">
          <h2 
            className="text-2xl font-bold text-[var(--loot-blue)] mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            ⭐ MY FAVORITES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-[var(--victory-gold)] mb-2">Favorite Skin</h3>
              <p className="text-gray-300">Renegade Raider (the OG Remix version since I couldn&apos;t get the original!)</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[var(--victory-gold)] mb-2">Favorite Weapon</h3>
              <p className="text-gray-300">Pump Shotgun - nothing beats a clean 200 pump!</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[var(--victory-gold)] mb-2">Favorite Landing Spot</h3>
              <p className="text-gray-300">Tilted Towers forever! Even when it&apos;s not in the game I miss it.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[var(--victory-gold)] mb-2">Favorite Game Mode</h3>
              <p className="text-gray-300">Squads with my friends, or Solo Arena when I&apos;m feeling competitive!</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[var(--victory-gold)] mb-2">Favorite Season</h3>
              <p className="text-gray-300">Chapter 2 Season 4 - the Marvel season was INSANE!</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[var(--victory-gold)] mb-2">Favorite Emote</h3>
              <p className="text-gray-300">Take The L (for when I win) or GG (for respect)</p>
            </div>
          </div>
        </div>

        {/* Why Blog */}
        <div className="bg-gradient-to-r from-[var(--storm-purple)] to-[var(--storm-blue)] rounded-xl p-6 md:p-10 mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--victory-gold)]/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              📝 WHY I STARTED THIS BLOG
            </h2>
            <div className="space-y-4 text-gray-200">
              <p>
                I always wanted a place to share all the Fortnite knowledge I&apos;ve picked up over the years. My friends are always asking me for tips and the best places to land, so I thought &quot;why not help even more people?&quot;
              </p>
              <p>
                My goal is to help players of all skill levels improve their game and enjoy Fortnite even more. Whether you&apos;re just starting out or you&apos;re already a pro, I hope you find something useful here!
              </p>
              <p className="text-[var(--victory-gold)] font-medium">
                Thanks for visiting my blog! Let&apos;s get those Wins! 🏆
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/blog" className="btn-primary inline-block">
            Check Out My Posts →
          </Link>
        </div>
      </div>
    </div>
  );
}
