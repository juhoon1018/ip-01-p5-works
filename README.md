# ip-01-p5-works · 《互动编程》作业一

> 课程：数字媒体艺术专业 · 2026 秋季学期
> 作业：创意代码的基本原理（p5.js，权重 20%）
> 仓库要求：公开仓库 + 已开启 GitHub Pages + 根目录 `index.html` 为索引页

## 作品清单（两个作品页）

| 文件 | 作品 | 来源 | 说明 |
|---|---|---|---|
| `index.html` | 索引页 | 新建 | 两个作品的入口导航 |
| `static.html` | 几何构成（静态） | 桌面 `郑可滢 几何构成1` | 仅用形状/颜色/位置，`setup()` 中 `noLoop()`，无动画循环 |
| `kinetic.html` | 几何构成（动态） | 桌面 `郑可滢 几何构成2`（Intelligent chance） | 同套几何语言 + `draw()` 循环 + 正弦律动 |
| `work1/` | 作品一源文件 | 复制自 `郑可滢 几何构成1/几何构成` | `sketch.js` / `style.css` |
| `work2/` | 作品二源文件 | 复制自 `郑可滢 几何构成2/Intelligent chance_...` | `sketch.js` / `style.css` |

> 桌面原文件未改动，本仓库为副本。
> 作品通过 CDN 加载 p5.js（`p5@2.3.3`），需要联网。

## 本地预览

```bash
python -m http.server 8000
# 打开 http://localhost:8000
```

## 部署到 GitHub Pages

1. 在 GitHub 新建**公开**仓库，仓库名 `ip-01-p5-works`。
2. 把本目录全部文件推送到仓库（main 分支）：
   ```bash
   git init
   git add .
   git commit -m "作业一：p5.js 创意代码的基本原理"
   git branch -M main
   git remote add origin https://github.com/<你的用户名>/ip-01-p5-works.git
   git push -u origin main
   ```
3. 仓库 → Settings → Pages → Source 选 `main` 分支 `/ (root)` → Save。
4. 等待约 1 分钟，访问 `https://<你的用户名>.github.io/ip-01-p5-works/`
   应能看到索引页，并分别打开两个作品页。

## 录屏检查清单（提交用）

- [ ] 文件目录（展示仓库结构）
- [ ] 打开代码
- [ ] 本地运行起来（http://localhost:8000）
- [ ] 实时操作演示（动态作品随帧律动）
- [ ] 仓库网页（能看到提交记录 / GitHub Pages 链接）
- [ ] 导出 `学号_姓名_作业1.mp4`（mp4 / H.264，≥1280×720）

## 备注

- 作业二（Three.js）= 桌面 `3d小游戏`，将单独建 `ip-02-three-game` 仓库处理。
