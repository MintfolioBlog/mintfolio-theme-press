# Press

Press 是一个为长文与日常记录设计的 Mintfolio 主题。奶油纸色、墨黑巨型刊头、朱红几何图形和连续编号的文章索引，组成一份可持续更新的独立数字刊物。

它使用 Astro、原生 CSS 和 Core 的必要浏览器交互，不加载远程字体、CDN 脚本，也不依赖 React 或 Tailwind。

## 使用

需要 Node.js 22.12.0 及以上、`@mintfolio/core ^0.3.0` 和 Astro `^7.3.2`。主题契约版本为 `^1.1.0`。

在现有 Mintfolio 站点中安装并启用：

```sh
mintfolio theme install @mintfolio/theme-press --use
mintfolio dev
```

使用本地安装包时：

```sh
mintfolio theme install ./mintfolio-theme-press-0.4.0.tgz --use
```

切换后 Core 会在站点 `theme.config.mjs` 的 `settings` 中写入带注释的设置，编辑它控制外观；站点名称、个人资料、导航、文章、作者和订阅配置仍位于 `site.config.ts` 及内容目录中。

## 外观设置

```js
settings: {
  accentColor: '#e6482e',
  paperColor: '#f3efe5',
  masthead: 'PRESS',
  heroHeadline: '让文字，\n留下回声。',
  heroSubtitle: '',
  editorNote: '观察。思考。\n然后，把它写下来。',
  homePostCount: 6,
  showGeometry: true,
},
```

| 设置 | 用途 |
| --- | --- |
| `accentColor` | 强调色，用于几何封面、标记和交互反馈。默认朱红，也可尝试酸黄 `#d0e527`。 |
| `paperColor` | 纸张底色，建议保持浅色，以配合墨黑文字。 |
| `masthead` | 巨型刊头，建议 3–8 个英文字母或 2–4 个汉字。 |
| `heroHeadline` | 首页主标题，支持用 `\n` 换行。留空时使用站点名称。 |
| `heroSubtitle` | 首页引言，留空时使用站点介绍或个人简介。 |
| `editorNote` | 首页页边手记，支持换行。 |
| `homePostCount` | 首页文章数量，1–20，默认 6。 |
| `showGeometry` | 首篇文章没有封面时，是否显示主题原创几何图形。关闭后显示简洁的字样封面。 |

首页的首篇推荐沿用 Core 的文章排序，因此置顶文章优先。文章有封面时会使用它；没有封面时使用内置原创矢量图形，不需要准备额外图片。

## 页面与阅读

Press 自带五种完整 renderer：

- 首页：刊头、引言、首篇阅读入口、编号索引、作者和话题边栏。
- 文章页：公开正文或密码解锁界面、目录、作者、发布时间、更新时间、字数与阅读时长、系列目录、相关文章及相邻文章。
- 归档页：文章分页、分类入口、话题索引和 Core 全文搜索。
- 独立页面：显示 Core 提供的 Markdown 正文；内置关于页显示个人资料、联系方式、技能和项目。
- 404 页面：返回首页及文章档案的入口。

发布时间和更新时间使用站点语言及 `blog.timezone` 格式化。阅读统计、系列和推荐关系由 Core 提供，主题不会读取 Markdown 源文件或重新计算内容策略。没有配置可选数据时，对应区块会隐藏。

桌面文章页保留页边目录和较窄的阅读栏；小屏幕变为单栏，目录仍可直接访问。导航直接使用普通链接，不依赖脚本展开菜单。尊重系统的减少动画设置。

全文搜索、静态分页和密码文章分别复用 Core 的 `SearchPanel`、`Pagination`、`ProtectedArticle`，因此这些功能沿用 Core 的发布过滤、浏览器安全策略和错误处理。密码文章的标题等公开信息仍然可见。

## 本地开发

```sh
npm ci
npm run check
npm pack
```

`check` 使用 Astro 检查 renderer 和 TypeScript。主题本身没有独立的内容集合、站点路由或开发服务器；在一个 Mintfolio 站点中启用它即可预览真实内容。所有源码只依赖自身文件和 Core 的公开 npm 导出。

静态源码检查不代表所有浏览器场景已经验收。打包或部署前，应在实际站点检查较窄屏幕、长标题、图片、搜索结果和密码文章。

## 许可

主题代码和原创矢量图形使用 GPL-3.0-only。详见 [LICENSE](./LICENSE) 与 [第三方声明](./THIRD_PARTY_NOTICES.md)。

## 0.3.0 发行

主题包与 manifest 统一为 0.3.0，依赖 Mintfolio Core ^0.3.0。可使用 npm install @mintfolio/theme-press@0.3.0 安装，随后使用 mintfolio theme use @mintfolio/theme-press 切换。


0.4.0：支持 Core 0.4，配置示例采用 `_mintfolio/theme.config.mjs` 的 `settings`。Core 0.3 用户仍按该版本的配置方式使用。
