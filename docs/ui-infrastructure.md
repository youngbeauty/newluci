# NewLuci UI 基建指南

> **品牌调性：** Warm & Creative (橙色系)
> **设计风格：** 现代 SaaS 落地页，类似 Cluely
> **技术栈：** Next.js 16 + React 19 + Tailwind v4 + shadcn/ui

---

## 📐 设计系统概览

### 核心配色方案

基于现有的橙色系统：

```css
/* Primary Brand Colors */
--yellow: #E6551E          /* 主品牌色 */
--yellow-hover: #C44A1A    /* Hover 状态 */
--yellow-light: #FFF4F0    /* 浅色背景 */

/* Text Colors */
--text-0: rgba(32, 31, 38, 1)      /* 主文本 */
--text-1: rgba(32, 31, 38, 0.8)    /* 次要文本 */
--text-2: rgba(32, 31, 38, 0.6)    /* 辅助文本 */
--text-3: rgba(32, 31, 38, 0.35)   /* 禁用文本 */

/* Background Colors */
--bg-0: #ffffff            /* 主背景 */
--bg-1: #ffffff            /* 卡片背景 */
--bg-2: #ffffff            /* 浮层背景 */
```

### 字体系统

**标题字体：** Space Grotesk
- 用途：Hero 大标题、Section 标题、卡片标题
- 权重：400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)
- 特点：现代、科技感、几何线条

**正文字体：** DM Sans
- 用途：段落文本、按钮文字、导航菜单
- 权重：400 (Regular), 500 (Medium), 700 (Bold)
- 特点：易读性强、专业、简洁

**Google Fonts 引入：**
```typescript
import { Space_Grotesk, DM_Sans } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700']
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '700']
})
```

### 间距系统 (8px Base Grid)

```css
--space-xs: 0.5rem    /* 8px */
--space-sm: 1rem      /* 16px */
--space-md: 1.5rem    /* 24px */
--space-lg: 2rem      /* 32px */
--space-xl: 3rem      /* 48px */
--space-2xl: 4rem     /* 64px */
--space-3xl: 6rem     /* 96px */
```

### 动画时长

```css
--transition-fast: 150ms      /* 快速交互 (hover, click) */
--transition-normal: 200ms    /* 标准交互 (dropdown, modal) */
--transition-slow: 300ms      /* 复杂动画 (page transition) */
```

---

## 🎨 落地页组件架构

### 组件目录结构

```
components/
├── landing/              # 落地页专用组件
│   ├── hero.tsx          # 英雄区 - 大标题 + CTA + 视觉
│   ├── feature-grid.tsx  # 功能网格 (3-4列卡片)
│   ├── testimonial.tsx   # 用户评价轮播
│   ├── pricing.tsx       # 定价卡片 (3档)
│   ├── faq.tsx           # FAQ 手风琴
│   ├── cta-section.tsx   # 最终 CTA 区域
│   └── logo-cloud.tsx    # 客户 Logo 展示
├── ui/                   # shadcn/ui 基础组件
│   ├── button.tsx
│   ├── card.tsx
│   └── ...
└── shared/               # 共享组件
    ├── navbar.tsx
    ├── footer.tsx
    └── theme-toggle.tsx
```

### 推荐的落地页结构

基于 **Minimal Single Column Pattern**：

```tsx
<main>
  <Navbar />                    {/* 顶部导航 */}
  <Hero />                      {/* 英雄区 - 主标题 + CTA */}
  <FeatureGrid />               {/* 3-4个核心功能 */}
  <SocialProof />               {/* Logo Cloud 或简短数据 */}
  <Testimonial />               {/* 用户评价（可选）*/}
  <Pricing />                   {/* 定价（可选）*/}
  <FAQ />                       {/* FAQ 手风琴（可选）*/}
  <CTASection />                {/* 最终 CTA */}
  <Footer />                    {/* 页脚 */}
</main>
```

**设计原则：**
- ✅ 单列布局，移动优先
- ✅ 大量留白，减少视觉噪音
- ✅ 单一明确 CTA（避免选择困难）
- ✅ 最多 3 个核心卖点
- ❌ 避免复杂导航
- ❌ 避免隐藏联系方式

---

## 🧩 核心组件设计规范

### Hero Section

**用途：** 落地页最重要的第一印象区域

**必备元素：**
1. 大标题 (text-5xl md:text-7xl)
2. 副标题/描述 (text-xl md:text-2xl)
3. 主 CTA 按钮
4. 可选：视觉元素（插图、截图、视频）

**Tailwind 类名参考：**
```tsx
<section className="min-h-screen flex items-center justify-center px-4 py-20">
  <div className="max-w-6xl mx-auto text-center">
    <h1 className="font-heading text-5xl md:text-7xl font-bold text-text-0 mb-6">
      Your Hero Headline
    </h1>
    <p className="font-body text-xl md:text-2xl text-text-1 mb-8 max-w-3xl mx-auto">
      Your compelling value proposition in one sentence.
    </p>
    <button className="bg-yellow hover:bg-yellow-hover text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200">
      Get Started
    </button>
  </div>
</section>
```

**关键设计规则：**
- 标题限制 8-12 个字（中文）或 6-10 个单词（英文）
- 副标题限制 1-2 句话
- CTA 按钮用橙色 (`bg-yellow`)
- 响应式：移动端减小字号，保持可读性

---

### Feature Grid

**用途：** 展示 3-4 个核心功能/优势

**布局：** 3列网格（移动端 1列）

**卡片结构：**
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
  {features.map((feature) => (
    <div
      key={feature.id}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-grey-1"
    >
      <div className="w-12 h-12 bg-yellow-light-default rounded-lg flex items-center justify-center mb-4">
        <feature.icon className="w-6 h-6 text-yellow" />
      </div>
      <h3 className="font-heading text-xl font-semibold text-text-0 mb-2">
        {feature.title}
      </h3>
      <p className="font-body text-text-2">
        {feature.description}
      </p>
    </div>
  ))}
</div>
```

**设计要求：**
- ✅ 使用 Lucide Icons，不用 emoji
- ✅ 毛玻璃效果 (`bg-white/80 backdrop-blur-sm`)
- ✅ Hover 状态有 shadow 变化
- ✅ 图标用品牌色点缀
- ❌ 不要用 `scale` transform（会导致布局抖动）

---

### CTA Button

**标准样式：**
```tsx
/* Primary CTA (橙色) */
className="bg-yellow hover:bg-yellow-hover text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 cursor-pointer"

/* Secondary CTA (白色边框) */
className="bg-transparent hover:bg-yellow-light-hover border-2 border-yellow text-yellow px-8 py-4 rounded-lg font-medium transition-colors duration-200 cursor-pointer"

/* Subtle CTA (灰色) */
className="bg-grey-0 hover:bg-grey-1 text-text-0 px-6 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer"
```

**尺寸规范：**
- Large (Hero): `px-8 py-4 text-lg`
- Medium (Section): `px-6 py-3 text-base`
- Small (Card): `px-4 py-2 text-sm`

**必须遵守的规则：**
- ✅ 所有按钮必须有 `cursor-pointer`
- ✅ 使用 `transition-colors duration-200` 而非 `transition-all`
- ✅ Hover 状态只改变颜色，不改变尺寸
- ❌ 禁止使用 `hover:scale-105`（会导致布局抖动）

---

## 🎭 动画系统

### 现有动画库

你已经集成了 `tw-animate-css`，可以直接使用：

```tsx
/* 淡入淡出 */
className="animate-fade-in"

/* 向上滑入 */
className="animate-slide-up"

/* 脉冲效果 */
className="animate-pulse"
```

### 自定义动画（已在 globals.css 中）

```css
/* 1. Aurora 渐变背景 */
className="animate-aurora"

/* 2. Shine 光泽效果 */
className="animate-shine"

/* 3. Breathe 呼吸效果 */
className="animate-breathe"
```

### 推荐的落地页动画方案

**Hero 区域：**
```tsx
<h1 className="animate-fade-in animation-delay-100">
  Your Headline
</h1>
<p className="animate-fade-in animation-delay-300">
  Your description
</p>
<button className="animate-fade-in animation-delay-500">
  CTA Button
</button>
```

**Feature Cards（Scroll-triggered，需要 framer-motion）：**
```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Card content */}
</motion.div>
```

**性能建议：**
- ✅ 使用 `transform` 和 `opacity`（GPU 加速）
- ✅ 使用 `will-change: transform` 预热动画
- ✅ 检查 `prefers-reduced-motion`
- ❌ 避免动画 `width`, `height`, `margin`（会触发 reflow）

---

## 🌗 Light/Dark Mode 规范

### 颜色对比度要求

**Light Mode：**
- 主文本：`#201F26` (text-0) - 对比度 15:1 ✅
- 次要文本：`#201F26` @ 80% opacity - 对比度 8.5:1 ✅
- 辅助文本：`#201F26` @ 60% opacity - 对比度 4.8:1 ✅
- 最小要求：4.5:1 (WCAG AA)

**Dark Mode：**
- 主文本：`#F9F9F9` (text-0) - 对比度 13:1 ✅
- 次要文本：`#F9F9F9` @ 80% opacity - 对比度 7.5:1 ✅
- 辅助文本：`#F9F9F9` @ 60% opacity - 对比度 4.2:1 ⚠️ (略低)

### 玻璃卡片透明度

**Light Mode：**
```css
bg-white/80        /* 80% 不透明度 - 清晰可见 */
border-grey-1      /* 边框必须可见 */
```

**Dark Mode：**
```css
bg-bg-1/80         /* 80% 不透明度 */
border-white/10    /* 10% 白色边框 */
```

**常见错误：**
❌ Light mode 用 `bg-white/10`（太透明，看不清）
❌ Dark mode 用 `border-grey-1`（太亮，不协调）

---

## ♿ 无障碍访问 (a11y) Checklist

### 必须遵守的规则

- [ ] **颜色对比度：** 文本与背景对比度 ≥ 4.5:1
- [ ] **Focus 状态：** 所有可交互元素有可见 focus ring
- [ ] **Alt 文本：** 所有有意义的图片有 `alt` 属性
- [ ] **ARIA 标签：** 图标按钮有 `aria-label`
- [ ] **键盘导航：** Tab 顺序符合视觉顺序
- [ ] **表单标签：** 输入框有 `<label>` 或 `aria-label`
- [ ] **减少动画：** 检查 `prefers-reduced-motion`

### Focus Ring 样式

使用 Tailwind 的默认 focus ring：

```tsx
/* 默认 (已在 globals.css 配置) */
className="outline-ring/50"

/* 自定义 focus ring */
className="focus:ring-2 focus:ring-yellow focus:ring-offset-2"
```

**检查方法：**
按 Tab 键遍历页面，确保每个可交互元素都有明显的焦点指示器。

---

## 📱 响应式断点

### Tailwind 默认断点

```css
sm:  640px   /* 手机横屏 */
md:  768px   /* 平板竖屏 */
lg:  1024px  /* 平板横屏 / 小笔记本 */
xl:  1280px  /* 桌面 */
2xl: 1536px  /* 大桌面 */
```

### 推荐的响应式策略

**移动优先（Mobile First）：**

```tsx
/* 基础样式 = 移动端 */
<div className="px-4 py-8 text-center">
  {/* 移动端：居中，小间距 */}
</div>

/* 平板及以上 */
<div className="px-4 md:px-8 py-8 md:py-16 text-center md:text-left">
  {/* 平板：增加间距，左对齐 */}
</div>

/* 桌面 */
<div className="px-4 md:px-8 lg:px-16 py-8 md:py-16 lg:py-24 text-center md:text-left">
  {/* 桌面：更大间距 */}
</div>
```

**关键尺寸验证：**
- 375px (iPhone SE) - 最小支持宽度
- 768px (iPad Portrait) - 平板竖屏
- 1024px (iPad Landscape) - 平板横屏
- 1440px (常见桌面分辨率)

---

## ⚡ 性能优化

### 图片优化

**使用 Next.js Image 组件：**

```tsx
import Image from 'next/image'

<Image
  src="/hero-image.png"
  alt="Product screenshot"
  width={1200}
  height={800}
  priority              // Hero 图片优先加载
  placeholder="blur"    // 模糊占位符
  blurDataURL="..."     // 低质量占位图
/>

// 其他图片（懒加载）
<Image
  src="/feature-icon.png"
  alt="Feature icon"
  width={48}
  height={48}
  loading="lazy"        // 懒加载
/>
```

**配置远程图片域名（next.config.js）：**

```js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.yourdomain.com',
      },
    ],
  },
}
```

### 字体优化

**使用 `next/font` 自动优化：**

```tsx
// app/layout.tsx
import { Space_Grotesk } from 'next/font/google'

const font = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',      // 避免 FOIT (Flash of Invisible Text)
  preload: true,        // 预加载
})
```

### 动画性能

**推荐的 CSS 属性（GPU 加速）：**
- ✅ `transform: translate()`, `scale()`, `rotate()`
- ✅ `opacity`
- ✅ `filter: blur()`

**避免的 CSS 属性（触发 reflow）：**
- ❌ `width`, `height`
- ❌ `margin`, `padding`
- ❌ `top`, `left`, `right`, `bottom`

**检查动画性能：**
```tsx
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🚀 实施路线图

### Week 1: 核心组件 (🔴 CRITICAL)

- [ ] 更新字体系统（Space Grotesk + DM Sans）
- [ ] 创建 Hero 组件
- [ ] 创建 Feature Grid 组件
- [ ] 创建 CTA Section 组件
- [ ] 测试响应式（375px, 768px, 1024px, 1440px）

### Week 2: 增强体验 (🟡 HIGH)

- [ ] 添加微交互动画（hover, focus）
- [ ] 创建 Testimonial 组件
- [ ] 创建 Logo Cloud 组件
- [ ] 集成 Framer Motion（scroll-triggered animations）
- [ ] Dark mode 对比度调优

### Week 3: 完善细节 (🟢 MEDIUM)

- [ ] 创建 Pricing 组件（可选）
- [ ] 创建 FAQ 组件（可选）
- [ ] 性能优化（图片、字体、动画）
- [ ] 无障碍访问审计
- [ ] 创建组件文档/Storybook

---

## 📋 Pre-Delivery Checklist

**每次发布前必须检查：**

### 视觉质量
- [ ] 无 emoji 作为 UI 图标（使用 Lucide Icons）
- [ ] 所有图标来自统一图标库
- [ ] Hover 状态不会导致布局抖动
- [ ] 品牌色使用一致（`bg-yellow`, `text-yellow`）

### 交互
- [ ] 所有可点击元素有 `cursor-pointer`
- [ ] Hover 状态有明确视觉反馈
- [ ] 过渡动画流畅（150-300ms）
- [ ] Focus 状态对键盘导航可见

### Light/Dark Mode
- [ ] Light mode 文本对比度 ≥ 4.5:1
- [ ] 玻璃元素在 light mode 清晰可见
- [ ] 边框在两种模式下都可见
- [ ] 两种模式都经过测试

### 布局
- [ ] 浮动元素距离边缘有适当间距
- [ ] 固定导航栏不会遮挡内容
- [ ] 在 375px, 768px, 1024px, 1440px 响应正常
- [ ] 无水平滚动条

### 无障碍访问
- [ ] 所有图片有 alt 文本
- [ ] 表单输入框有标签
- [ ] 颜色不是唯一的信息指示器
- [ ] `prefers-reduced-motion` 被遵守

---

## 🔗 参考资源

### 设计灵感
- [Cluely](https://cluely.com) - 参考风格
- [Linear](https://linear.app) - 极简设计
- [Vercel](https://vercel.com) - 现代 SaaS

### 技术文档
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Next.js 15 Docs](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)
- [Framer Motion](https://www.framer.com/motion/)

### 无障碍访问
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### 字体
- [Google Fonts - Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
- [Google Fonts - DM Sans](https://fonts.google.com/specimen/DM+Sans)

---

## 📞 支持与反馈

如有问题或建议，请参考：
- 设计系统：`design-system/newluci/MASTER.md`
- UI/UX 规则：`.claude/skills/ui-ux-pro-max/`

**最后更新：** 2026-01-28
