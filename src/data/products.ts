export interface Product {
  id: string;
  name: string;
  nameJa: string;
  description: string;
  descriptionJa: string;
  price: number;
  image: string;
  scent: string;
  scentJa: string;
  category: "floral" | "woody" | "citrus" | "herbal" | "seasonal";
  burnTime: string;
  size: string;
  ingredients: string[];
  mood: string[];
  featured?: boolean;
  new?: boolean;
}

export const products: Product[] = [
  {
    id: "hinoki-forest",
    name: "Hinoki Forest",
    nameJa: "檜の森",
    description: "A serene walk through ancient cypress groves, with notes of fresh hinoki, cedar, and subtle moss.",
    descriptionJa: "古い檜林を歩くような静謐な香り。檜、杉、そして苔の微かな香りが調和します。",
    price: 3800,
    image: "/images/hinoki-forest.jpg",
    scent: "Hinoki, Cedar, Moss",
    scentJa: "檜・杉・苔",
    category: "woody",
    burnTime: "45時間",
    size: "200g",
    ingredients: ["国産大豆ワックス", "檜精油", "杉精油", "コットン芯"],
    mood: ["relaxation", "meditation", "focus"],
    featured: true,
  },
  {
    id: "sakura-bloom",
    name: "Sakura Bloom",
    nameJa: "桜咲く",
    description: "The fleeting beauty of cherry blossoms captured in wax. Delicate floral notes with a hint of green tea.",
    descriptionJa: "儚い桜の美しさを閉じ込めた香り。繊細な花の香りと緑茶のほのかな風味。",
    price: 3500,
    image: "/images/sakura-bloom.jpg",
    scent: "Cherry Blossom, Green Tea",
    scentJa: "桜・緑茶",
    category: "floral",
    burnTime: "40時間",
    size: "180g",
    ingredients: ["国産大豆ワックス", "桜エキス", "緑茶精油", "コットン芯"],
    mood: ["romance", "spring", "gentle"],
    featured: true,
    new: true,
  },
  {
    id: "yuzu-morning",
    name: "Yuzu Morning",
    nameJa: "柚子の朝",
    description: "Bright and uplifting citrus to start your day. Fresh yuzu with subtle ginger undertones.",
    descriptionJa: "爽やかな柑橘で朝を始める。柚子の香りに生姜の微かなアクセント。",
    price: 3200,
    image: "/images/yuzu-morning.jpg",
    scent: "Yuzu, Ginger",
    scentJa: "柚子・生姜",
    category: "citrus",
    burnTime: "35時間",
    size: "160g",
    ingredients: ["国産大豆ワックス", "柚子精油", "生姜精油", "コットン芯"],
    mood: ["energizing", "fresh", "morning"],
    featured: true,
  },
  {
    id: "matcha-ceremony",
    name: "Matcha Ceremony",
    nameJa: "茶の湯",
    description: "The tranquil essence of a tea ceremony. Rich matcha with whispers of roasted rice.",
    descriptionJa: "茶道の静寂なエッセンス。濃い抹茶と炒り米の香り。",
    price: 3600,
    image: "/images/matcha-ceremony.jpg",
    scent: "Matcha, Roasted Rice",
    scentJa: "抹茶・炒り米",
    category: "herbal",
    burnTime: "42時間",
    size: "190g",
    ingredients: ["国産大豆ワックス", "抹茶エキス", "炒り米香料", "コットン芯"],
    mood: ["meditation", "calm", "focus"],
  },
  {
    id: "sandalwood-dusk",
    name: "Sandalwood Dusk",
    nameJa: "白檀の黄昏",
    description: "Warm and grounding sandalwood for peaceful evenings. Rich, creamy, and deeply calming.",
    descriptionJa: "穏やかな夜のための温かく落ち着く白檀。豊かでクリーミー、深く癒される香り。",
    price: 4200,
    image: "/images/sandalwood-dusk.jpg",
    scent: "Sandalwood, Vanilla",
    scentJa: "白檀・バニラ",
    category: "woody",
    burnTime: "50時間",
    size: "220g",
    ingredients: ["国産大豆ワックス", "白檀精油", "バニラ香料", "コットン芯"],
    mood: ["relaxation", "evening", "romantic"],
  },
  {
    id: "wisteria-rain",
    name: "Wisteria Rain",
    nameJa: "藤雨",
    description: "Purple cascades of wisteria after spring rain. Floral sweetness with dewy freshness.",
    descriptionJa: "春雨の後の藤の花。甘い花の香りと朝露のような爽やかさ。",
    price: 3400,
    image: "/images/wisteria-rain.jpg",
    scent: "Wisteria, Rain",
    scentJa: "藤・雨",
    category: "floral",
    burnTime: "38時間",
    size: "170g",
    ingredients: ["国産大豆ワックス", "藤精油", "アクアノート", "コットン芯"],
    mood: ["spring", "gentle", "dreamy"],
    new: true,
  },
  {
    id: "autumn-bonfire",
    name: "Autumn Bonfire",
    nameJa: "秋の焚火",
    description: "Crackling warmth of an autumn bonfire. Smoky wood with hints of cinnamon and dried leaves.",
    descriptionJa: "秋の焚き火のぬくもり。スモーキーな木の香りにシナモンと落ち葉のアクセント。",
    price: 3900,
    image: "/images/autumn-bonfire.jpg",
    scent: "Smoke, Cinnamon, Leaves",
    scentJa: "煙・シナモン・落ち葉",
    category: "seasonal",
    burnTime: "48時間",
    size: "210g",
    ingredients: ["国産大豆ワックス", "スモーク香料", "シナモン精油", "コットン芯"],
    mood: ["cozy", "autumn", "nostalgic"],
    featured: true,
  },
  {
    id: "ocean-breeze",
    name: "Ocean Breeze",
    nameJa: "潮風",
    description: "Fresh sea air with mineral notes. Clean, crisp, and infinitely refreshing.",
    descriptionJa: "ミネラル感のある新鮮な海風。清潔で爽やか、無限にリフレッシュ。",
    price: 3300,
    image: "/images/ocean-breeze.jpg",
    scent: "Sea Salt, Driftwood",
    scentJa: "海塩・流木",
    category: "citrus",
    burnTime: "40時間",
    size: "180g",
    ingredients: ["国産大豆ワックス", "マリンノート", "ウッディノート", "コットン芯"],
    mood: ["fresh", "summer", "energizing"],
  },
];

export const scentCategories = [
  { id: "all", nameJa: "すべて", name: "All" },
  { id: "floral", nameJa: "花", name: "Floral" },
  { id: "woody", nameJa: "ウッディ", name: "Woody" },
  { id: "citrus", nameJa: "シトラス", name: "Citrus" },
  { id: "herbal", nameJa: "ハーブ", name: "Herbal" },
  { id: "seasonal", nameJa: "季節", name: "Seasonal" },
];

export const subscriptionPlans = [
  {
    id: "monthly",
    name: "月の灯り",
    nameEn: "Monthly Glow",
    price: 3500,
    description: "毎月届く、季節に合わせた香りのキャンドル",
    features: [
      "月替わりのキャンドル1個",
      "季節限定の香り",
      "送料無料",
      "いつでも解約可能",
    ],
  },
  {
    id: "quarterly",
    name: "四季の灯り",
    nameEn: "Seasonal Collection",
    price: 9800,
    description: "3ヶ月ごとに届く、贅沢なキャンドルセット",
    features: [
      "3種類のキャンドルセット",
      "限定デザインの容器",
      "お香のサンプル付き",
      "送料無料",
      "10%オフ",
    ],
    popular: true,
  },
  {
    id: "annual",
    name: "年間の灯り",
    nameEn: "Annual Illumination",
    price: 36000,
    description: "一年を通じて届く、特別な体験",
    features: [
      "毎月届くキャンドル",
      "年4回の限定ギフト",
      "会員限定の香り",
      "優先予約権",
      "20%オフ",
    ],
  },
];
