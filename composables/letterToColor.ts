export function useLetterToColor() {
  const hslToHex = (h: number, s: number, l: number): string => {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
  };

  const letterToColor = (letter: string): string => {
    const upperLetter = letter.toUpperCase();
    if (upperLetter < 'A' || upperLetter > 'Z') return '#fdfaf6';

    const position = upperLetter.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    const hue = (position * 360 / 26) % 360;
    return hslToHex(hue, 30, 85);
  };

  const getTextColor = (bgColor: string): string => {
    // Simple contrast check (for dark/light text)
    const hex = bgColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 150 ? '#45474b' : '#fdfaf6';
  };

  return {
    letterToColor,
    getTextColor
  };
}