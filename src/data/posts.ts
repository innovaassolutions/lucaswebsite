export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: 'tips' | 'news' | 'reviews' | 'builds' | 'skins';
  rarity: 'legendary' | 'epic' | 'rare';
  readTime: number;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "best-landing-spots-chapter-6",
    title: "Top 5 Landing Spots in Chapter 6 Season 1",
    excerpt: "Looking for the best places to drop? I've tested all the new POIs and found the spots with the best loot and rotation options!",
    content: `
<h2>Finding the Perfect Drop</h2>

<p>Hey everyone, Lucas here! After playing hundreds of matches this season, I've figured out the absolute BEST landing spots for Chapter 6. Whether you're going for high-kill games or just want to survive to the end, I've got you covered!</p>

<h2>1. Demon's Dojo</h2>

<p>This is my personal favorite this season. The dojo has <strong>amazing loot density</strong> with multiple chests in a small area. Plus, the martial arts theme is super cool! The ninja NPCs here can give you some awesome quests too.</p>

<p>Pro tip: Land on the roof first to grab the guaranteed chest, then work your way down through the building.</p>

<h2>2. Seaport City</h2>

<p>If you like hot drops with lots of action, Seaport City is the place to be. It's got:</p>

<ul>
  <li>Tons of floor loot</li>
  <li>Multiple vending machines</li>
  <li>Great rotation options with boats nearby</li>
  <li>Usually 5-10 players drop here</li>
</ul>

<h2>3. Nightshift Forest</h2>

<p>For a more chill drop, Nightshift Forest is perfect. It's usually uncontested and has enough loot for a full squad. The spooky vibes are awesome too!</p>

<blockquote>
"The best players know when to fight and when to loot up first" - a lesson I learned the hard way!
</blockquote>

<h2>4. Mount Olympus</h2>

<p>The mythic weapons here are INSANE. If you can grab Zeus's Lightning Bolt, you're basically guaranteed top 10. Just be ready for a fight because everyone wants those mythics!</p>

<h2>5. Restored Reels</h2>

<p>This movie studio POI is underrated. Great loot, fun theme, and most players skip it. It's my go-to spot when I want to play for the win.</p>

<h3>Final Thoughts</h3>

<p>Remember, the best landing spot is the one that matches your playstyle. If you're cracked at fighting, go for the hot drops. If you prefer playing smart, choose the quieter spots and loot up!</p>

<p>Let me know in the comments what YOUR favorite landing spot is! See you on the Battle Bus! 🚌</p>
    `,
    date: "2024-12-15",
    category: "tips",
    rarity: "legendary",
    readTime: 4,
    featured: true
  },
  {
    slug: "winter-fest-2024-guide",
    title: "Winterfest 2024: Complete Free Rewards Guide",
    excerpt: "Don't miss out on these amazing free skins and cosmetics! Here's everything you need to know about Winterfest 2024.",
    content: `
<h2>Winterfest is HERE!</h2>

<p>YO! Winterfest 2024 just dropped and it's absolutely STACKED with free rewards. I'm so hyped to share everything you need to know to get all the goodies!</p>

<h2>How It Works</h2>

<p>Just like previous years, you'll visit the Winterfest cabin every day to open a present. There are <strong>14 presents total</strong>, and you can open one per day. But here's the cool part - you can choose which present to open!</p>

<h3>The Free Skins</h3>

<p>This year we're getting TWO free skins:</p>

<ul>
  <li><strong>Frost Commander</strong> - An icy soldier with reactive effects</li>
  <li><strong>Snowbell</strong> - A super cute holiday-themed skin</li>
</ul>

<p>Both skins come with their own back blings too!</p>

<h2>Other Rewards</h2>

<p>Besides the skins, you can get:</p>

<ul>
  <li>2 Pickaxes</li>
  <li>3 Wraps</li>
  <li>2 Emotes</li>
  <li>1 Glider</li>
  <li>Music packs and loading screens</li>
</ul>

<h2>Present Selection Tips</h2>

<p>Want to know a secret? The presents are the same for everyone! Here's how to figure out what's inside each one:</p>

<blockquote>
Check online guides or watch streamers open their presents first. Then you can pick exactly which ones you want!
</blockquote>

<h3>Don't Forget the Challenges!</h3>

<p>There are also special Winterfest challenges that give you extra XP and exclusive rewards. Make sure to complete them before the event ends on January 7th!</p>

<p>Happy holidays everyone! Let's get these free rewards! 🎄❄️</p>
    `,
    date: "2024-12-20",
    category: "news",
    rarity: "epic",
    readTime: 3,
    featured: true
  },
  {
    slug: "building-tips-for-beginners",
    title: "Building 101: Master the Basics in 2024",
    excerpt: "New to building? These tips will help you go from noob to pro in no time! Learn walls, ramps, and basic techniques.",
    content: `
<h2>Why Building Matters</h2>

<p>Hey everyone! So many new players ask me about building, so I wanted to make a complete guide. Building is what makes Fortnite different from other battle royales, and mastering it is KEY to getting those Victory Royales!</p>

<h2>The Basic Builds</h2>

<h3>Walls</h3>

<p>Walls are your best friend! Whenever you get shot at, immediately throw up a wall. It's called <strong>"panic building"</strong> and it will save your life SO many times.</p>

<h3>Ramps</h3>

<p>Ramps give you height advantage. In Fortnite, <strong>height = power</strong>. Always try to get above your opponent!</p>

<h3>Floors</h3>

<p>Floors protect you from below and let you extend your builds. They're also great for creating peek spots.</p>

<h2>Your First Combo: The Ramp Rush</h2>

<p>Here's the simplest push technique:</p>

<ul>
  <li>Place a ramp</li>
  <li>Place a wall in front of the ramp</li>
  <li>Repeat as you move forward</li>
</ul>

<p>This protects you while you gain height on your opponent!</p>

<h2>Practice Tips</h2>

<p>The best way to improve is to practice! Here's what I do:</p>

<ul>
  <li>Spend 10 minutes in creative mode every day</li>
  <li>Practice building in no-pressure situations</li>
  <li>Watch pro players and try to copy their techniques</li>
  <li>Don't be afraid to die while learning!</li>
</ul>

<blockquote>
Everyone was bad at building at first. The only way to get better is to keep trying!
</blockquote>

<h3>My Settings</h3>

<p>I recommend these settings for building:</p>

<ul>
  <li>Builder Pro control scheme (essential!)</li>
  <li>Turbo Building ON</li>
  <li>Confirm Edit on Release ON</li>
</ul>

<p>Good luck out there, and remember - practice makes perfect! 🔨</p>
    `,
    date: "2024-12-10",
    category: "builds",
    rarity: "rare",
    readTime: 5
  },
  {
    slug: "best-skins-december-2024",
    title: "My Top 10 Skins of December 2024",
    excerpt: "From collabs to original designs, here are the skins that are absolutely FIRE this month!",
    content: `
<h2>December's Best Skins!</h2>

<p>What's up everyone! December has been INSANE for skins in the item shop. Here are my personal top 10 picks from this month!</p>

<h2>10. Snowmando</h2>

<p>A classic Winterfest skin that comes back every year. Love the snowman vibes!</p>

<h2>9. Glacial Rex</h2>

<p>An ice version of the T-Rex skin. The reactive frost effects are super cool.</p>

<h2>8. Blizzabelle</h2>

<p>Free last year but still one of my favorite holiday skins. So clean!</p>

<h2>7. Frost Broker</h2>

<p>The business suit + ice combo is unique and looks awesome in-game.</p>

<h2>6. Polar Patroller</h2>

<p>GIANT POLAR BEAR. Need I say more? Absolute unit of a skin.</p>

<h2>5. Lady Gaga - Chromatica Armor</h2>

<p>The collab skin is fire! All three styles are incredible and the built-in emotes are chef's kiss.</p>

<h2>4. Ariana Grande</h2>

<p>She came back to the shop! One of the best concert skins ever made.</p>

<h2>3. Tron Legacy Skins</h2>

<p>The light trail effects on these are UNREAL. They glow in the dark zones!</p>

<h2>2. Kratos (God of War)</h2>

<p>Absolute legend. Comes with the Leviathan Axe pickaxe and Mimir back bling!</p>

<h2>1. OG Remix: Renegade Raider</h2>

<p>The remix version of this OG skin is perfect. Everyone can finally have a version of this iconic skin!</p>

<blockquote>
Remember: Every skin is a winner if YOU like it! Don't let anyone tell you your favorite skin isn't cool.
</blockquote>

<p>What's YOUR favorite skin this month? Let me know! 🎮</p>
    `,
    date: "2024-12-18",
    category: "skins",
    rarity: "epic",
    readTime: 4
  },
  {
    slug: "mythic-weapons-guide",
    title: "All Mythic Weapons Ranked - Chapter 6 Season 1",
    excerpt: "Which mythic is worth fighting for? I break down every mythic weapon and tell you if they're OP or not worth the risk!",
    content: `
<h2>Mythic Weapon Tier List</h2>

<p>Mythic weapons are back and they're BROKEN (in a good way)! But which ones are actually worth risking your game for? Let's break it down!</p>

<h2>S-TIER (Must Have)</h2>

<h3>Zeus's Lightning Bolt</h3>

<p>This thing is INSANE. It chains lightning to nearby enemies and does massive damage. The range is crazy and it's basically a free win in final circles.</p>

<p><strong>Damage:</strong> 90 per bolt</p>
<p><strong>Special:</strong> Chain lightning hits up to 3 enemies</p>

<h3>Cerberus's Assault Rifle</h3>

<p>Three-headed beast of a gun. Fast fire rate, huge damage, barely any recoil. Best AR in the game right now.</p>

<h2>A-TIER (Really Good)</h2>

<h3>Hades's Snap</h3>

<p>Teleports you a short distance and damages nearby enemies. Amazing for repositioning and escaping the storm.</p>

<h3>Ares's Blade</h3>

<p>Mythic melee weapon with insane lunge distance. Great for piece control and finishing kills.</p>

<h2>B-TIER (Situationally Good)</h2>

<h3>Poseidon's Trident</h3>

<p>Powerful but slow. Great for breaking builds but the throw animation is too long. Only good if you can catch someone off guard.</p>

<h2>Tips for Getting Mythics</h2>

<ul>
  <li>Land directly on the boss location</li>
  <li>Bring a squad - bosses have tons of HP</li>
  <li>Grab a weapon first before attacking</li>
  <li>Third-party other players fighting the boss</li>
</ul>

<blockquote>
Sometimes the best play is letting someone else kill the boss, then taking them out after they're weak!
</blockquote>

<h3>Are Mythics Worth It?</h3>

<p>Honestly? Yes, but only if you're confident in early game fights. If you're going for wins, sometimes it's better to skip the mythic and play safe.</p>

<p>Good luck hunting those mythics! ⚡🔱</p>
    `,
    date: "2024-12-12",
    category: "reviews",
    rarity: "legendary",
    readTime: 5,
    featured: true
  },
  {
    slug: "zero-build-vs-build-mode",
    title: "Zero Build vs Build Mode: Which Should YOU Play?",
    excerpt: "The ultimate debate! I compare both modes and help you figure out which one fits your playstyle better.",
    content: `
<h2>The Great Debate</h2>

<p>Ever since Zero Build came out, the Fortnite community has been DIVIDED. Some people think building is what makes Fortnite special. Others think Zero Build is the best thing Epic ever did. So which one should YOU play?</p>

<h2>Zero Build Mode</h2>

<h3>Pros</h3>

<ul>
  <li>Easier to learn</li>
  <li>Focus purely on aiming and positioning</li>
  <li>Overshield makes you tankier</li>
  <li>Games feel more chill</li>
  <li>Great for playing with friends who are new</li>
</ul>

<h3>Cons</h3>

<ul>
  <li>Less skill expression</li>
  <li>Can feel random sometimes</li>
  <li>Getting caught in the open = death</li>
  <li>Cover is limited to what's on the map</li>
</ul>

<h2>Build Mode</h2>

<h3>Pros</h3>

<ul>
  <li>Higher skill ceiling</li>
  <li>Create your own cover anywhere</li>
  <li>More satisfying when you outplay someone</li>
  <li>The "real" Fortnite experience</li>
  <li>Competitive scene is all Build Mode</li>
</ul>

<h3>Cons</h3>

<ul>
  <li>Steep learning curve</li>
  <li>Can be frustrating against better builders</li>
  <li>Sweats everywhere 😅</li>
</ul>

<h2>My Recommendation</h2>

<p>Here's what I think:</p>

<blockquote>
Start with Zero Build to learn the game basics, then move to Build Mode when you're ready for a challenge!
</blockquote>

<p>If you just want to chill and have fun with friends, Zero Build is perfect. If you want to grind, improve, and eventually go competitive, Build Mode is where it's at.</p>

<p>Personally, I play both! Zero Build when I'm tired or playing with new friends, Build Mode when I want to sweat and improve.</p>

<p>What mode do you prefer? No wrong answers here! 🏗️</p>
    `,
    date: "2024-12-08",
    category: "tips",
    rarity: "rare",
    readTime: 4
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getPostsByCategory(category: BlogPost['category']): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getAllCategories(): BlogPost['category'][] {
  return ['tips', 'news', 'reviews', 'builds', 'skins'];
}

export const categoryLabels: Record<BlogPost['category'], string> = {
  tips: '💡 Tips & Tricks',
  news: '📰 News',
  reviews: '⭐ Reviews',
  builds: '🔨 Building',
  skins: '🎨 Skins'
};

export const categoryColors: Record<BlogPost['category'], string> = {
  tips: 'bg-green-500',
  news: 'bg-blue-500',
  reviews: 'bg-yellow-500',
  builds: 'bg-orange-500',
  skins: 'bg-purple-500'
};
