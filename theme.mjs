// @ts-check
import { defineTheme } from '@mintfolio/core/theme';

/** Press keeps editorial layout settings separate from the site's shared content. */
export default defineTheme({
  manifest: {
    id: 'press', name: 'Press', version: '0.4.1', engine: '^1.3.0',
    author: 'Mintfolio contributors',
    description: '奶油纸色、巨型刊头与细线版面的独立杂志主题。',
  },
  capabilities: { search: true, tags: true, categories: true, toc: true, encryptedPosts: true },
  pages: {
    home: './pages/home.astro', post: './pages/post.astro',
    archive: './pages/archive.astro', page: './pages/page.astro', notFound: './pages/notFound.astro',
  },
  settings: {
    accentColor: { type: 'color', label: '印刷强调色', description: '用于几何封面和少量重点标识。', default: '#e6482e' },
    paperColor: { type: 'color', label: '纸张底色', description: '建议选择浅色，以保持正文和细线清晰。', default: '#f3efe5' },
    masthead: { type: 'string', label: '大字刊头', description: '建议使用 3–8 个英文字母或 2–4 个汉字。', default: 'PRESS' },
    heroHeadline: { type: 'string', label: '首页主标题', description: '换行会保留，建议两行短句。', default: '让文字，\n留下回声。' },
    heroSubtitle: { type: 'string', label: '首页引言', description: '留空时使用站点介绍。', default: '' },
    editorNote: { type: 'string', label: '页边手记', default: '观察。思考。\n然后，把它写下来。' },
    homePostCount: { type: 'number', label: '首页文章数', default: 6, min: 1, max: 20 },
    showGeometry: { type: 'boolean', label: '无文章封面时显示几何插画', default: true },
  },
});
