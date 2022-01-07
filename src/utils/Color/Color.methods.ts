const getRGB = (color: string) => {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5), 16);
  return [r, g, b];
};

const convertToHexColor = (value: number) => {
  return ('00' + Math.min(Math.max(0, value), 255).toString(16)).slice(-2);
};

// export functions
/**
 * Return a darker hex color
 * @param color hex color (eq. #abcdef)
 * @param percentage 0 ~ 1
 * @returns
 */
export const darken = (color: string, percentage: number) => {
  const [r, g, b] = getRGB(color);
  const rParam = Math.round(r * percentage);
  const gParam = Math.round(g * percentage);
  const bParam = Math.round(b * percentage);
  const rr = convertToHexColor(r - rParam);
  const gg = convertToHexColor(g - gParam);
  const bb = convertToHexColor(b - bParam);
  return '#' + rr + gg + bb;
};

/**
 * Return a lighter hex color
 * @param color hex color (eq. #abcdef)
 * @param percentage 0 ~ 1
 * @returns
 */
export const lighten = (color: string, percentage: number) => {
  const [r, g, b] = getRGB(color);
  const rParam = Math.round((255 - r) * percentage);
  const gParam = Math.round((255 - g) * percentage);
  const bParam = Math.round((255 - b) * percentage);
  const rr = convertToHexColor(r + rParam);
  const gg = convertToHexColor(g + gParam);
  const bb = convertToHexColor(b + bParam);
  return '#' + rr + gg + bb;
};

/**
 * Return a hex color with different transparency.
 * @param color hex color (eq. #abcdef)
 * @param percentage 0 ~ 1
 * @returns
 */
export const alpha = (color: string, percentage: number) => {
  const aa = convertToHexColor(Math.round(255 * percentage));
  return color + aa;
};
