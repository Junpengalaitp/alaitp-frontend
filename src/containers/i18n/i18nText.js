import {categoryText} from "../../constant/constant";
import React from "react";

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
  "mainPageHeading": {
    "en": "Search For Most Demanded Technical Skills!",
    "cn": "搜索在IT行业工作中最受欢迎的技术!"
  },
  "introHeading1": {
    "en": "Welcome to my page",
    "cn": "欢迎来到我的主页"
  },
  "introHeading2": {
    "en": "This is a project I build for helping recruiters to know me.",
    "cn": "这个项目是用来帮助HR/猎头/面试官更好的了解我"
  },
  "introHeading3": {
    "en": "Click the Search button to know me and this project.",
    "cn": "点击搜索开始了解这个我和这个项目"
  },
  ...categoryText
}

