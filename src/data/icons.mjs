/*
 * 图标库（内联 SVG，线条风格）。
 * 新增图标只要在这里加一条 name: '内部路径'，图标组件和计算器会自动认到。
 * 统一 24x24 视窗、1.5px 描边、颜色跟随 currentColor。
 */

export const ICONS = {
  // 款式
  catsuit:
    '<circle cx="12" cy="4.4" r="2.2"/><path d="M12 6.8c-1.9 0-3.1 1.3-3.1 3v4.2h6.2V9.8c0-1.7-1.2-3-3.1-3z"/><path d="M8.9 10.2 6.6 15.4M15.1 10.2l2.3 5.2"/><path d="M10.2 14v6.6M13.8 14v6.6"/>',
  neckentry:
    '<circle cx="12" cy="4.4" r="2.2"/><path d="M12 6.8c-1.9 0-3.1 1.3-3.1 3v4.2h6.2V9.8c0-1.7-1.2-3-3.1-3z"/><path d="M8.9 10.2 6.6 15.4M15.1 10.2l2.3 5.2"/><path d="M10.2 14v6.6M13.8 14v6.6"/><path d="M9.6 8.4a3.2 3.2 0 0 0 4.8 0"/>',
  dress:
    '<path d="M9.5 3.5h5"/><path d="M9.5 3.5v2.8L7 20.5h10l-2.5-14.2V3.5"/>',
  top:
    '<path d="M9.2 4.2 5 6.3l1.6 4 2.1-.9V20h6.6V9.4l2.1.9 1.6-4-4.2-2.1-3 2.1z"/>',
  leggings:
    '<path d="M8.2 3.5h7.6l1.1 17h-4l-1-8.4-1 8.4h-4z"/>',

  // 材质与参数
  layers:
    '<path d="M12 3.2 3.2 7.6 12 12l8.8-4.4z"/><path d="M4.6 12.4 12 16.1l7.4-3.7"/><path d="M4.6 16.2 12 19.9l7.4-3.7"/>',
  snug:
    '<path d="M3 12h4.5M16.5 12H21"/><path d="M11.5 8.3 8 12l3.5 3.7M12.5 8.3 16 12l-3.5 3.7"/>',
  star:
    '<path d="M12 3.6l2.5 5.1 5.6.8-4 4 .9 5.6-5-2.7-5 2.7.9-5.6-4-4 5.6-.8z"/>',
  ruler:
    '<rect x="2.8" y="8" width="18.4" height="8" rx="2"/><path d="M7 8v3M11 8v3M15 8v3M19 8v3"/>',

  // 身体各部位
  chest:
    '<circle cx="12" cy="9.4" r="5.1"/><path d="M3 16.4h18"/><path d="M5.8 14.2 3 16.4l2.8 2.2M18.2 14.2 21 16.4l-2.8 2.2"/>',
  underbust:
    '<path d="M5.6 7a7.2 7.2 0 0 1 12.8 0"/><path d="M3 12.6h18"/><path d="M5.8 10.4 3 12.6l2.8 2.2M18.2 10.4 21 12.6l-2.8 2.2"/>',
  waist:
    '<path d="M6.2 3.4c1.6 4.1 2.3 6.7 2.3 8.9s-.7 4.8-2.3 8.9M17.8 3.4c-1.6 4.1-2.3 6.7-2.3 8.9s.7 4.8 2.3 8.9"/><path d="M3.6 12.3h16.8"/>',
  hip:
    '<path d="M7 3.6c0 5.4-1.1 8.4-3 11.6M17 3.6c0 5.4 1.1 8.4 3 11.6"/><path d="M4 17.4c2.4 2 5.1 3 8 3s5.6-1 8-3"/>',
  thigh:
    '<path d="M8.6 3.4h6.8v6.9c0 3.4-1.4 5.2-3.4 5.2s-3.4-1.8-3.4-5.2z"/><path d="M6.2 8.4h11.6"/>',
  upperarm:
    '<path d="M9.2 3.6h5.6v5c0 2.7-.9 4.2-2.8 4.2s-2.8-1.5-2.8-4.2z"/><path d="M6.8 7.4h10.4"/><path d="M10 16.8h4"/>',
  neck:
    '<path d="M7 4.2 12 9l5-4.8"/><path d="M9.2 12.6a2.8 2.8 0 0 0 5.6 0"/>',
  torsolength:
    '<path d="M6.2 3.8h11.6"/><path d="M12 5.2v13.6"/><path d="M9.4 7.4 12 4.8l2.6 2.6M9.4 16.6 12 19.2l2.6-2.6"/>',
};

const OPEN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">';

export function svgFor(name) {
  const inner = ICONS[name];
  if (!inner) return '';
  return OPEN + inner + '</svg>';
}