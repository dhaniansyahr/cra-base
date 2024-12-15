/* eslint-disable @typescript-eslint/no-unused-expressions */
interface HSL {
  h: number;
  s: number;
  l: number;
}

interface RGB {
  r: number;
  g: number;
  b: number;
}

export function hexToRgb(hex: string): RGB {
  if (typeof hex !== "string") {
    throw new TypeError("Expected a string for hex color");
  }

  hex = hex.replace(/^#/, "");

  let r: number, g: number, b: number;
  if (hex.length === 3) {
    r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
    g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
    b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
  } else {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  }

  return { r, g, b };
}

export function rgbToHsl(r: number, g: number, b: number): HSL {
  (r /= 255), (g /= 255), (b /= 255);

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return {
    h: parseFloat((h * 360).toFixed(2)),
    s: parseFloat((s * 100).toFixed(2)),
    l: parseFloat((l * 100).toFixed(2)),
  };
}

export function hexToHsl(hex = "#000000"): HSL {
  const { r, g, b } = hexToRgb(hex);

  return rgbToHsl(r, g, b);
}
