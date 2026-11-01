# ip-01-p5-works · 《互动编程》作业一

- **课程**：数字媒体艺术专业 · 2026 秋季学期
- **作业**：创意代码的基本原理（p5.js，权重 20%）
- **作者**：郑可滢
- **技术**：p5.js（`p5@2.3.3`，通过 CDN 加载），需联网
- **仓库要求**：公开仓库 + 已开启 GitHub Pages + 根目录 `index.html` 为索引页

## 作品清单（两个作品页）

| 文件 | 作品 | 说明 |
|---|---|---|
| `index.html` | 索引页 | 两个作品的入口导航 |
| `static.html` | 几何构成（静态） | 仅用形状 / 颜色 / 位置构图；`setup()` 中 `noLoop()`，一次性绘制，无动画循环 |
| `dynamic.html` | 几何构成（动态） | 同一套几何语言 + `draw()` 循环 + 实时交互（Intelligent chance），画面随时间变化 |
| `static-sketch.js` / `static-style.css` | 静态作品源码 | 由桌面「郑可滢 几何构成1」而来 |
| `dynamic-sketch.js` / `dynamic-style.css` | 动态作品源码 | 由桌面「郑可滢 几何构成2 / Intelligent chance」而来 |

## 创作说明

两份作品用同一套视觉语言（包豪斯式几何形 + 红 / 蓝 / 黄 / 青限定色板）做对照：
**静态版**只用 `setup()` 一次性摆放形状、颜色、位置，强调构图秩序；
**动态版**在此基础上引入 `draw()` 循环，让同一组元素随时间产生律动与变化，
回应"创意代码的基本原理"——从静止的结构到运动中的结构。

## 本地预览

```bash
python -m http.server 8000
# 浏览器打开 http://localhost:8000
```

## 部署到 GitHub Pages

1. 在 GitHub 新建**公开**仓库，仓库名 `ip-01-p5-works`。
2. 在本目录执行：

```bash
git remote add origin https://github.com/<你的用户名>/ip-01-p5-works.git
git branch -M main
git add .
git commit -m "作业一：p5.js 创意代码的基本原理"
git push -u origin main
```

3. 仓库 → **Settings → Pages** → Source 选 `main` 分支 `/ (root)` → Save。
4. 约 1 分钟后访问 `https://<你的用户名>.github.io/ip-01-p5-works/` 即可看到索引页与两个作品。

## 录屏检查清单（提交用）

- [ ] 文件目录（展示仓库结构）
- [ ] 打开代码
- [ ] 本地运行起来（http://localhost:8000）
- [ ] 实时操作演示（动态作品随帧律动 / 交互）
- [ ] 仓库网页（展示提交记录 / GitHub Pages 链接）
- [ ] 导出 `学号_姓名_作业1.mp4`（mp4 / H.264，≥1280×720）
