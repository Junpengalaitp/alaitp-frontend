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
  sf: "soft skill",
  tl: "tool",
  at: "architect",
  pd: "product",
  ql: "quality",
  of: "offer",
  tm: "team",
  cp: "company",
  all: "all"
}

export const categoryI18nMap = {
  "programming language": {
    "en": "programming language",
    "cn": "编程语言"
  },
  "other language": {
    "en": "other language",
    "cn": "其他语言"
  },
  "library": {
    "en": "library",
    "cn": "第三方库"
  },
  "framework": {
    "en": "framework",
    "cn": "框架"
  },
  "computer science": {
    "en": "computer science",
    "cn": "计算机科学"
  },
  "artificial intelligence": {
    "en": "artificial intelligence",
    "cn": "人工智能"
  },
  "protocol": {
    "en": "protocol",
    "cn": "协议"
  },
  "data storage": {
    "en": "data storage",
    "cn": "数据存储"
  },
  "data transmission": {
    "en": "data transmission",
    "cn": "数据传输"
  },
  "division": {
    "en": "division",
    "cn": "职责分类"
  },
  "position": {
    "en": "position",
    "cn": "职位分类"
  },
  "work experience": {
    "en": "work experience",
    "cn": "工作经验"
  },
  "operating system": {
    "en": "operating system",
    "cn": "操作系统"
  },
  "server": {
    "en": "server",
    "cn": "服务器"
  },
  "approach": {
    "en": "approach",
    "cn": "开发方法"
  },
  "software engineering": {
    "en": "software engineering",
    "cn": "软件开发"
  },
  "platform": {
    "en": "platform",
    "cn": "平台"
  },
  "general": {
    "en": "general",
    "cn": "通用技能"
  },
  "soft skill": {
    "en": "soft skill",
    "cn": "软技能"
  },
  "tool": {
    "en": "tool",
    "cn": "工具"
  },
  "architect": {
    "en": "architect",
    "cn": "架构"
  },
  "product": {
    "en": "product",
    "cn": "产品"
  },
  "quality": {
    "en": "quality",
    "cn": "质量"
  },
  "offer": {
    "en": "offer",
    "cn": "待遇"
  },
  "team": {
    "en": "team",
    "cn": "团队"
  },
  "company": {
    "en": "company",
    "cn": "公司"
  },
  "all": {
    "en": "all category",
    "cn": "全部类别"
  }
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
export const sideNavItems = {
  "Project Initiative": {
    "cn": "项目起因"
  },
  "Time Management": {
    "cn": "时间管理"
  },
  "Workout Routine": {
    "cn": "健身习惯"
  },
  "Reading Habit": {
    "cn": "阅读习惯"
  },
  "Coding Practice": {
    "cn": "代码练习"
  },
  "Learning Method": {
    "cn": "学习方式"
  },
}
