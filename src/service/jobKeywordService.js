export const getAllKeywordsByCategory = (allKeywordsJson) => {
  const allKeywordsByCategory = {}
  for (const keywordList of Object.values(Object.values(allKeywordsJson))) {
    for (const keyword of keywordList) {
      const category = keyword.category
      const keywordName = keyword.keyword
      if (!allKeywordsByCategory.hasOwnProperty(category)) {
        allKeywordsByCategory[category] = []
      } 
      allKeywordsByCategory[category].push(keywordName)
    }
  }
  return allKeywordsByCategory
}

export const getAllKeywordsByJobId = (allKeywordsJson) => {
  const allKeywordsByJobId = {}
  
  return allKeywordsByJobId
}