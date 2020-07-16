import {categoryText} from "../../constant/constant";

export const i18nText = (type, lang) => {
    return i18nMap[type][lang]
}

const i18nMap = {
  "searchButton": {
    "en": "Search",
    "cn": "搜索"
  },
  "navHome": {
    "en": "Home",
    "cn": "主页"
  },
  "navAbout": {
    "en": "About Me",
    "cn": "关于"
  },
  "navContact": {
    "en": "Contact Me",
    "cn": "联络方式"
  },
  "seeMoreButton": {
    "en": "See More",
    "cn": "展开"
  },
  "seeLessButton": {
    "en": "See Less",
    "cn": "收起"
  },
  ...categoryText
}

