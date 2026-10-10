# MintfolioThemePress

独立 Astro 主题，所有数据仅从 Core 公开 API 获取。不要导入宿主配置、内容集合或 Core 私有实现。

只为核心功能编写测试；主题视觉修改通过实际构建和浏览器检查验证。

- Node.js >= 22.12.0。
- vendor 保存实际本地依赖归档，更新使用 npm run deps:update。保留 package.json 中的正式 semver。
- 提交源码、文档、lockfile 和必要的 vendor，忽略 node_modules、dist、artifacts 与缓存。
