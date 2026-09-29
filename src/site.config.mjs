/*
 * 全站唯一配置中心。
 * 站点名、域名、每页的 TDK（标题 / 描述 / 主关键词）都在这里改，改完全站生效。
 * title 控制在 60 字符以内、description 控制在 155 字符以内（含品牌后缀），这是 Google 的显示上限。
 */

export const SITE = {
  url: 'https://latex-tools.pages.dev',
  name: 'Latex Fit Lab',
  tagline: 'Fit, thickness and care tools for latex clothing',

  // GEO：页面与结构化数据里的发布/更新日期。以后改了内容，把 updated 改成当天。
  published: '2026-09-28',
  updated: '2026-09-29',
  email: 'latexpapa@latexpapa.com',
  // 上线后建议换成真实品牌名和真实邮箱；站点名会出现在标题后缀和结构化数据里。

  verification: {
    google: '2AyL_UnLnHfOFQTyTsuwMSUsq5aD1JfIelroMhRNBCw',
    bing: '',
  },

  // IndexNow（Bing / Yandex 即时收录）。public/indexnow-key.txt 的内容必须与这个值完全一致。
  indexNowKey: 'f3c1a9d4e7b24c8f9a6d5e0b7c3f1a8d',

  // Cloudflare Web Analytics（免费、不放 cookie、不需要隐私弹窗）。留空则不下发统计脚本。
  cloudflareAnalyticsToken: '95426c3ce8034fbbacf0b69b11738472',
};

export const PAGES = [
  {
    path: '/',
    title: 'Latex Clothing Size Calculator & Fit Tools',
    description:
      'Free latex clothing size calculator. Enter your measurements to see the finished sizes a maker should cut, plus a copy-ready sheet you can send to any maker.',
    keyword: 'latex clothing size calculator',
    ogType: 'website',
  },
  {
    path: '/size-calculator/',
    title: 'Latex Size Calculator: Finished Garment Sizes',
    description:
      'Work out how much smaller a latex garment should be cut. Enter your measurements to get a suggested finished size for every part, plus a copy-ready sheet.',
    keyword: 'latex clothing size calculator',
    ogType: 'website',
  },
  {
    path: '/measure-guide/',
    title: 'How to Measure for Latex Clothing',
    description:
      'How to measure for latex clothing: the nine measurements a maker needs, the three parts customers get wrong most, and how to measure yourself with a tape.',
    keyword: 'how to measure for latex clothing',
    ogType: 'article',
  },
  {
    path: '/thickness-guide/',
    title: 'Latex Thickness Guide: 0.25 to 1.00mm',
    description:
      'Latex catsuit thickness explained: how 0.25, 0.40, 0.60, 0.80 and 1.00 mm sheeting differ in stretch, durability, look and how much reduction a pattern needs.',
    keyword: 'latex catsuit thickness',
    ogType: 'article',
  },
];