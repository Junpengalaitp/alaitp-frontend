/**
 * the categories form custom trained SpaCy model is more detailed, here combines similar categories to demonstration.
 */
export const combinedCategories = "languages,libraryFramework,data,division,platform,approach,swe,general,protocol,computerScience"

/**
 * map showing category text to categories
 */
export const categoryText = {
  "languages": {
    "en": "Programing Language",
    "cn": "编程语言"
  },
  "libraryFramework": {
    "en": "Library/Framework",
    "cn": "框架/库"
  },
  "data": {
    "en":"Data Store/Transmission",
    "cn": "数据储存/传输"
  },
  "division": {
    "en": "Job Division",
    "cn": "职位分类"
  },
  "platform": {
    "en": "Platform",
    "cn": "平台"
  },
  "approach": {
    "en": "Development Approach",
    "cn": "开发方法"
  },
  "swe": {
    "en": "Software Development Life Cycle",
    "cn": "软件开发"
  },
  "general": {
    "en": "General/Soft Skill",
    "cn": "软技能"
  },
  "protocol": {
    "en": "Protocol",
    "cn": "协议"
  },
  "computerScience": {
    "en": "Computer Science",
    "cn": "计算机科学"
  }
}

/**
 * map colors to categories
 */
export const categoryColorMap = {
  "PROGRAMMING_LANGUAGE": "primary",
  "OTHER_LANGUAGE": "primary",
  "LIBRARY": "info",
  "FRAMEWORK": "info",
  "DATA_STORAGE": "warning",
  "DATA_TRANSMISSION": "warning",
  "PLATFORM": "success",
  "SERVER": "success",
  "OS": "success",
  "APPROACH": "secondary",
  "SOFTWARE_ENGINEERING": "secondary",
  "POSITION": "danger",
  "DIVISION": "danger",
  "WORK_EXPERIENCE": "danger"
};

/**
 * category map for tag cloud
 */
export const categoryMap = {
  pl: "programming language",
  ol: "other language",
  lb: "library",
  fw: "framework",
  cs: "computer science",
  ai: "artificial intelligence",
  pt: "protocol",
  ds: "data storage",
  dt: "data transmission",
  dv: "division",
  ps: "position",
  we: "work experience",
  os_: "operating system",
  sv: "server",
  ap: "approach",
  se: "software engineering",
  pf: "platform",
  ge: "general",
  sf: "soft skills",
  tl: "tool",
  at: "architect",
  pd: "product",
  ql: "quality",
  of: "offer",
  tm: "team",
  cp: "company"
}

/**
 * map min bar length to categories
 */
export const categoryMinBarLength = {
  languages: 60,
  libraryFramework: 100,
  data: 80,
  division: 120,
  platform: 140,
  approach: 140,
  swe: 100,
  general: 120,
  protocol: 60,
  computerScience: 140
}

/**
 * personal page side nav items
 */
export const navItems = ["Project Initiative", "Time Management", "Coding Practice", "Workout Routine", "Reading Habit"]
