# Latex Fit Lab — 乳胶工具站（Astro 版）

一个用 Astro 搭的静态工具站，第一阶段 4 个页面：首页、尺寸计算器、测量指南、厚度指南。
所有内容都是静态 HTML，没有任何外部依赖，产物可以整个文件夹上传到 Cloudflare Pages。

---

## 一、文件结构（只看你以后要改的）

| 路径 | 作用 |
| --- | --- |
| `src/site.config.mjs` | **全站配置**：站点名、域名、邮箱、Google/Bing 验证码、每一页的标题和描述 |
| `src/data/fit-model.mjs` | **负松量经验值**：各厚度的削减百分比、各部位调整、松紧偏好。改这里，工具页和厚度页同时更新 |
| `src/pages/` | 每个页面一个文件；文件名就是网址 |
| `src/components/Calculator.astro` | 尺寸计算器（包含全部前台逻辑和测量单生成） |
| `public/` | 原样复制的静态文件：favicon、OG 分享图、IndexNow 密钥文件 |
| `dist/` | 构建产物（`npm run build` 之后生成，上传的就是这个文件夹） |

改数字只改 `src/data/fit-model.mjs`，改文字/标题只改对应的 `src/pages/*.astro`。

## 二、本地预览和构建

需要 Node.js（本机已装）。在项目文件夹里执行（PowerShell 里 npm 要用 `npm.cmd`）：

    npm.cmd install      # 第一次才需要，联网安装 Astro
    npm.cmd run dev      # 本地预览，浏览器打开 http://localhost:4321
    npm.cmd run build    # 生成 dist/ 文件夹，就是要上传的东西

## 三、部署到 Cloudflare Pages（和你以前一样）

1. 执行 `npm.cmd run build`
2. 打开 Cloudflare → Workers & Pages → 找到 latex-tools 项目 → Create new deployment
3. 把 `dist` 文件夹里的所有内容上传（注意：上传 dist 里面的内容，不是 dist 这个文件夹本身）

## 四、SEO 已经做好的部分（上线前不用动）

- 每页独立 TDK，标题控制在 60 字符内、描述 155 字符内
- canonical、`lang="en"`、Open Graph、Twitter Card、OG 分享图
- 结构化数据：WebSite、Organization、WebApplication、HowTo、FAQPage、BreadcrumbList
- `sitemap.xml` 和 `robots.txt` 由代码在构建时自动生成，网址取自 `site.config.mjs`，不会写错
- noindex 只用在 404 页面
- 每页只有一个 H1，标题层级递进；所有交互都在页面内代码，不依赖外部脚本
- 全站移动端适配，无第三方请求（加载快 = Core Web Vitals 好）

## 五、上线后要做的三件事

1. **Google Search Console**：网址检查 → 提交 `https://latex-tools.pages.dev/sitemap.xml`
   （验证码已经写进页面里了，`site.config.mjs` 里的 `verification.google` 就是你现在用的那个）
2. **Bing 站长工具**：登录后可以直接导入 Google Search Console 的站点，然后提交同一个 sitemap
3. **IndexNow**：`public/indexnow-key.txt` 里已经放好密钥，文件必须能通过
   `https://latex-tools.pages.dev/indexnow-key.txt` 访问到；之后每次更新内容，可以用它通知 Bing 立刻抓取

## 六、以后加站点的正确姿势

复制整个 `latex-tools-site` 文件夹改名，然后只改三处：
`src/site.config.mjs`（站点名、域名、TDK）、`src/data/fit-model.mjs`（该行业的经验值）、`src/pages/`（页面内容）。
结构和 SEO 部分不需要重做。