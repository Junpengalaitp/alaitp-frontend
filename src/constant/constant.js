/**
 * the categories form custom trained SpaCy model is more detailed, here combines similar categories to demonstration.
 */
export const combinedCategories = "languages,libraryFramework,data,division,platform,approach,swe,general,protocol,computerScience"

/**
 * map showing category text to categories
 */
export const categoryText = {
  languages: "Programing Language",
  libraryFramework: "Library/Framework",
  data: "Data Store/Transmission",
  division: "Job Division",
  platform: "Platform",
  approach: "Development Approach",
  swe: "Software Development Life Cycle",
  general: "General/Soft Skill",
  protocol: "Protocol",
  computerScience: "Computer Science"
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
