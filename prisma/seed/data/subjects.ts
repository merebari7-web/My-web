export interface SubjectSeed {
  name: string;
  slug: string;
  description: string;
  icon: string;
  colorToken: string;
  category: string;
}

export const subjectsData: SubjectSeed[] = [
  { name: "English Studies", slug: "english-studies", description: "Reading, writing, grammar, comprehension and oral English.", icon: "BookOpen", colorToken: "primary", category: "Core" },
  { name: "English Language", slug: "english-language", description: "Grammar, comprehension, essay writing, oral forms and literature appreciation for WAEC/JAMB.", icon: "BookOpen", colorToken: "primary", category: "Core" },
  { name: "Mathematics", slug: "mathematics", description: "Number, algebra, geometry, mensuration, statistics and problem solving.", icon: "Calculator", colorToken: "accent", category: "Core" },
  { name: "Basic Science & Technology", slug: "basic-science-technology", description: "Introductory science, health and technology concepts for primary pupils.", icon: "Atom", colorToken: "primary", category: "Core" },
  { name: "Basic Science", slug: "basic-science", description: "Foundational biology, chemistry and physics concepts for JSS.", icon: "Atom", colorToken: "primary", category: "Core" },
  { name: "Basic Technology", slug: "basic-technology", description: "Introduction to technology, tools, materials, drawing and safety.", icon: "Wrench", colorToken: "accent", category: "Vocational" },
  { name: "National Values Education", slug: "national-values-education", description: "Civic Education, Social Studies and Security Education combined.", icon: "ShieldCheck", colorToken: "primary", category: "Values" },
  { name: "Civic Education", slug: "civic-education", description: "Citizenship, rights, duties, democracy and government in Nigeria.", icon: "Landmark", colorToken: "primary", category: "Values" },
  { name: "Social Studies", slug: "social-studies", description: "Society, culture, family life and social institutions in Nigeria.", icon: "Users", colorToken: "accent", category: "Values" },
  { name: "Security Education", slug: "security-education", description: "Personal safety, community security and disaster preparedness.", icon: "ShieldAlert", colorToken: "primary", category: "Values" },
  { name: "Pre-Vocational Studies", slug: "pre-vocational-studies", description: "Home Economics and Agriculture skills for primary pupils.", icon: "Hammer", colorToken: "accent", category: "Vocational" },
  { name: "Home Economics", slug: "home-economics", description: "Nutrition, family living, textiles and home management.", icon: "ChefHat", colorToken: "accent", category: "Vocational" },
  { name: "Agricultural Science", slug: "agricultural-science", description: "Crop and animal production, farm tools, soil science and agribusiness.", icon: "Sprout", colorToken: "primary", category: "Vocational" },
  { name: "Cultural & Creative Arts", slug: "cultural-creative-arts", description: "Music, drawing, drama, and Nigerian cultural heritage.", icon: "Palette", colorToken: "accent", category: "Arts" },
  { name: "Christian Religious Studies", slug: "christian-religious-studies", description: "Bible knowledge, Christian living and moral instruction.", icon: "BookMarked", colorToken: "primary", category: "Religion" },
  { name: "Islamic Religious Studies", slug: "islamic-religious-studies", description: "Quranic knowledge, Islamic history and moral instruction.", icon: "BookMarked", colorToken: "primary", category: "Religion" },
  { name: "Hausa Language", slug: "hausa-language", description: "Reading, writing, grammar and literature in Hausa.", icon: "Languages", colorToken: "accent", category: "Language" },
  { name: "Igbo Language", slug: "igbo-language", description: "Reading, writing, grammar and literature in Igbo.", icon: "Languages", colorToken: "accent", category: "Language" },
  { name: "Yoruba Language", slug: "yoruba-language", description: "Reading, writing, grammar and literature in Yorùbá.", icon: "Languages", colorToken: "accent", category: "Language" },
  { name: "French", slug: "french", description: "Beginner to intermediate French language skills.", icon: "Languages", colorToken: "primary", category: "Language" },
  { name: "Arabic", slug: "arabic", description: "Introductory Arabic reading, writing and comprehension.", icon: "Languages", colorToken: "primary", category: "Language" },
  { name: "History", slug: "history", description: "Nigerian, African and world history.", icon: "ScrollText", colorToken: "accent", category: "Humanities" },
  { name: "Computer Studies", slug: "computer-studies", description: "ICT literacy, computer hardware/software and basic coding.", icon: "Laptop", colorToken: "primary", category: "Technology" },
  { name: "Physical & Health Education", slug: "physical-health-education", description: "Sports, fitness, hygiene and personal health.", icon: "Dumbbell", colorToken: "accent", category: "Health" },
  { name: "Business Studies", slug: "business-studies", description: "Introduction to keyboarding, office practice, commerce and entrepreneurship.", icon: "Briefcase", colorToken: "primary", category: "Vocational" },
  { name: "Physics", slug: "physics", description: "Mechanics, waves, electricity, magnetism and modern physics.", icon: "Atom", colorToken: "primary", category: "Science Stream" },
  { name: "Chemistry", slug: "chemistry", description: "Atomic structure, chemical bonding, reactions and organic chemistry.", icon: "FlaskConical", colorToken: "accent", category: "Science Stream" },
  { name: "Biology", slug: "biology", description: "Cell biology, genetics, ecology and human physiology.", icon: "Leaf", colorToken: "primary", category: "Science Stream" },
  { name: "Further Mathematics", slug: "further-mathematics", description: "Advanced algebra, calculus, mechanics and statistics.", icon: "Sigma", colorToken: "accent", category: "Science Stream" },
  { name: "Technical Drawing", slug: "technical-drawing", description: "Geometric construction, orthographic and isometric projection.", icon: "Ruler", colorToken: "primary", category: "Science Stream" },
  { name: "Geography", slug: "geography", description: "Physical, human and economic geography of Nigeria and the world.", icon: "Globe2", colorToken: "accent", category: "Science Stream" },
  { name: "Financial Accounting", slug: "financial-accounting", description: "Bookkeeping, ledgers, financial statements and analysis.", icon: "Receipt", colorToken: "primary", category: "Commercial Stream" },
  { name: "Commerce", slug: "commerce", description: "Trade, distribution channels, business ownership and commerce documents.", icon: "Store", colorToken: "accent", category: "Commercial Stream" },
  { name: "Economics", slug: "economics", description: "Microeconomics, macroeconomics and the Nigerian economy.", icon: "TrendingUp", colorToken: "primary", category: "Commercial Stream" },
  { name: "Office Practice", slug: "office-practice", description: "Office procedures, records management and business communication.", icon: "FileText", colorToken: "accent", category: "Commercial Stream" },
  { name: "Marketing", slug: "marketing", description: "Marketing mix, market research and consumer behaviour.", icon: "Megaphone", colorToken: "primary", category: "Commercial Stream" },
  { name: "Insurance", slug: "insurance", description: "Principles of insurance, risk management and insurance practice in Nigeria.", icon: "Shield", colorToken: "accent", category: "Commercial Stream" },
  { name: "Literature-in-English", slug: "literature-in-english", description: "Prose, drama, poetry and literary appreciation.", icon: "BookText", colorToken: "primary", category: "Arts Stream" },
  { name: "Government", slug: "government", description: "Political theory, systems of government and international relations.", icon: "Landmark", colorToken: "accent", category: "Arts Stream" },
  { name: "Visual Arts", slug: "visual-arts", description: "Drawing, painting, sculpture and art appreciation.", icon: "Palette", colorToken: "primary", category: "Arts Stream" },
  { name: "Music", slug: "music", description: "Music theory, Nigerian instruments and performance.", icon: "Music", colorToken: "accent", category: "Arts Stream" },
  { name: "Trade/Entrepreneurship", slug: "trade-entrepreneurship", description: "Practical trade skills and entrepreneurship for self-reliance.", icon: "Rocket", colorToken: "primary", category: "Vocational" },
];
