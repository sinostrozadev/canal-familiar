export const escapeXml = value => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

export function symbolLayout(panel) {
  const circles = [[110, 90], [370, 225]];
  const lines = [[80, 205, 170, 205], [310, 105, 400, 105], [310, 165, 400, 165]];
  const triangles = [[240, 65], [240, 185]];

  return [
    ...circles.slice(0, panel.circles).map(([cx, cy]) =>
      `<circle cx="${cx}" cy="${cy}" r="34" class="circle"/>`),
    ...lines.slice(0, panel.lines).map(([x1, y1, x2, y2]) =>
      `<path d="M${x1} ${y1}H${x2}" class="line"/>`),
    ...triangles.slice(0, panel.triangles).map(([x, y]) =>
      `<path d="M${x} ${y}l45 78h-90Z" class="triangle"/>`)
  ].join("");
}
