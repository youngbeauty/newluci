# css-redesign2

## 现状评价（简短）
- 优点：语义化 token 体系完整、亮暗色都有、品牌色阶完善、动画基础到位
- 需要修：
  - `--font-sans` 指向 `--font-manrope`，但项目里实际是 Geist → 字体变量不一致
  - `--animate-shine` 和 `@keyframes shine` 被定义了两次，后面的会覆盖前面
  - Light 模式 `--bg-0..3` 全是白色 → 缺少层次
  - `--yellow` 实际是橙色，命名会误导（建议改名 or 注释说明）

## 橙色搭配建议（酷炫科技感）
- 主背景（深墨蓝/黑）：#0B0F14 / #12161D / #1A212B
- 冷色点缀（霓虹青）：#67E8F9 / #22D3EE
- 橙色只做“高亮、CTA、指标”，不要铺满
- 占比建议：深色背景 70% / 中性表面 20% / 橙色 10%

## 橙色分级建议（更霓虹）
- `orange-0` #FFF4ED
- `orange-1` #FFE4D1
- `orange-2` #FFC6A4
- `orange-3` #FFA876
- `orange-4` #FF8747
- `orange-5` #E6551E  ← 主色
- `orange-6` #C5481A
- `orange-7` #9F3A14
- `orange-8` #742A0E
- `orange-9` #4F1C0A

可额外加一个“发光”色：
- `orange-glow` #FF9A3C（你已有 `--gradient-orange`，可直接用）

## 亮/暗模式建议（最小改动）

**Light（白天）**
- `--bg-0` #FFF9F6
- `--bg-1` #FFFFFF
- `--bg-2` #FFF1EA
- `--bg-3` #F7EDE7

**Dark（晚上）**
- `--bg-0` #0B0F14
- `--bg-1` #151A21
- `--bg-2` #1E2530
- `--bg-3` #272F3A
