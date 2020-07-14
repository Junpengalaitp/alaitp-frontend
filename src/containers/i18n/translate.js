export const translate = text => {
  return enCnMap[text] || text
}

const enCnMap = {
  "Search": "搜索"
}