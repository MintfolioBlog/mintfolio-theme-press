// @ts-check
/**
 * Press 主题的完整配置示例，列出了全部可配置项。
 *
 * 用法：复制到站点的 `_mintfolio/theme.config.mjs`，再按需修改。
 * - 没写的字段使用主题默认值；下面的取值都是默认值。
 * - 改完重启 `mintfolio dev`；`mintfolio theme check` 会指出写错的字段名或取值。
 * - 站点名称、个人资料、导航、分页等内容设置在 `site.config.ts` 中，不在这里。
 */
export default {
  // 使用的主题包。
  theme: '@mintfolio/theme-press',

  // 主题外观设置，只对上面这个主题有效。
  settings: {
    // 印刷强调色，格式 '#RRGGBB'，用于几何封面、标记和交互反馈。默认 '#e6482e'（朱红）。
    // 也可以试试酸黄 '#d0e527'。
    accentColor: '#e6482e',

    // 纸张底色，格式 '#RRGGBB'。默认 '#f3efe5'。建议用浅色，以保持墨黑正文和细线清晰。
    paperColor: '#f3efe5',

    // 页面顶部的巨型刊头文字。默认 'PRESS'；设为 '' 时使用站点名称。
    // 英文以大写显示；字号按文字长度自动缩放，短词效果最好。
    masthead: 'PRESS',

    // 首页主标题，用 \n 换行。默认 ''，即使用站点描述；没有站点描述时使用站点名称。
    // 例如：'让文字，\n留下回声。'
    heroHeadline: '',

    // 首页引言，显示在主标题下方。默认 ''。
    // 留空时：主标题用了站点描述，就显示作者简介；否则显示站点描述或作者简介。
    heroSubtitle: '',

    // 页边手记：首页侧栏的大字短句，用 \n 换行。默认 ''，即使用个人资料中的个性签名；两者都为空时隐藏。
    editorNote: '',

    // 首页显示的文章数量，范围 1–20。默认 6。
    homePostCount: 6,

    // 首篇文章没有封面时，是否显示主题自带的几何插画。默认 true；false 时显示简洁的字样封面。
    showGeometry: true,
  },

  // 可选：用自己的 Astro 文件替换主题的某个页面，路径相对 `_mintfolio/`。
  // 可替换的页面：home / post / archive / page / notFound。写法见 Core 文档的 Theme API。
  // overrides: {
  //   pages: {
  //     archive: './overrides/archive.astro',
  //   },
  // },
};
