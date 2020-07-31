import {categoryI18nMap, categoryText, sideNavItems} from "./constant";

export const i18nText = (type, lang) => {
  return i18nMap[type][lang] || type
}


const i18nMap = {
  "searchButton": {
    "en": "Search",
    "cn": "搜索"
  },
  "navHome": {
    "en": "Home",
    "cn": "主 页"
  },
  "navAbout": {
    "en": "About",
    "cn": "关于我"
  },
  "navContact": {
    "en": "Contact",
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
  "modalButton": {
    "en": "close",
    "cn": "关闭"
  },
  "cloudCategoryButton": {
    "en": "select category",
    "cn": "选择类别"
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
  "chartGroupHeading1": {
    "en": "The Most Wanted Skills in Search Result",
    "cn": "搜索结果中最受欢迎的技术的分类排名"
  },
  "chartGroupHeading2": {
    "en": "(Click to See Correlated skills)",
    "cn": "(点击查看关联的技术)"
  },
  "modelHeadingLeft": {
    "en": "Most correlated skill with ",
    "cn": "在搜索结果中与"
  },
  "modelHeadingRight": {
    "en": " in search result",
    "cn": "同时出现最多的词"
  },
  "seeJobButtonText": {
    "en": "See Job Text",
    "cn": "查看工作描述"
  },
  "clickNotice": {
    "en": "click here to know me!  ",
    "cn": "点击这里来了解我！ "
  },
  "keywordOverlay": {
    "en": "click to see correlated words",
    "cn": "点击查看关联词"
  },
  "wordCategory": {
    "en": "word category: ",
    "cn": "词语类别："
  },
  "barText": {
    "en": "click to see correlated words with ",
    "cn": "点击查看关联词："
  },
  "wechatQR": {
    "en": "Scan the QR Code to add me on WeChat",
    "cn": "微信扫一扫加我好友"
  },
  "contact": {
    "en": "Contact Me",
    "cn": "欢迎联络"
  },
  ...categoryText,
  ...categoryI18nMap,
  ...sideNavItems,
}





