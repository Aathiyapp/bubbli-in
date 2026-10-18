/**
 * Bubbli Invitation Studio 2.0 - Cultural & Decorative SVG Asset Library
 * High-quality vector ornaments for Indian and international design styles.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.BubbliOrnaments = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const ORNAMENTS = {
    // 1. South Indian Temple & Kolam Motifs
    kolamCorner: function (color = 'currentColor', size = 64) {
      return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="ornament-svg">
        <path d="M10 90 C10 50, 50 10, 90 10" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M20 90 C20 60, 60 20, 90 20" stroke="${color}" stroke-width="1.5" stroke-dasharray="3 3"/>
        <circle cx="50" cy="50" r="4" fill="${color}"/>
        <circle cx="30" cy="30" r="3" fill="${color}"/>
        <circle cx="70" cy="30" r="2.5" fill="${color}"/>
        <circle cx="30" cy="70" r="2.5" fill="${color}"/>
        <path d="M10 10 L30 10 M10 10 L10 30" stroke="${color}" stroke-width="2"/>
        <circle cx="10" cy="10" r="3" fill="${color}"/>
      </svg>`;
    },

    templeArch: function (color = '#C8A45D', accent = '#7B1E2B') {
      return `<svg viewBox="0 0 600 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto ornament-svg">
        <path d="M50 150 L50 70 Q300 -20 550 70 L550 150" stroke="${color}" stroke-width="3" fill="none"/>
        <path d="M70 150 L70 78 Q300 -2 530 78 L530 150" stroke="${color}" stroke-width="1.5" stroke-dasharray="4 4" fill="none"/>
        <circle cx="300" cy="24" r="9" fill="${color}"/>
        <circle cx="300" cy="24" r="5" fill="${accent}"/>
        <path d="M275 38 Q300 28 325 38 Q300 48 275 38 Z" fill="${color}"/>
        <g stroke="${color}" stroke-width="1.5">
          <circle cx="180" cy="50" r="3" fill="${color}"/>
          <circle cx="420" cy="50" r="3" fill="${color}"/>
          <circle cx="120" cy="80" r="3" fill="${color}"/>
          <circle cx="480" cy="80" r="3" fill="${color}"/>
        </g>
      </svg>`;
    },

    // 2. Royal Mughal Arch & Dome
    mughalArch: function (color = '#D4AF37') {
      return `<svg viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto ornament-svg">
        <path d="M20 200 L20 100 Q140 100 200 60 Q250 10 250 5 Q250 10 300 60 Q360 100 480 100 L480 200" stroke="${color}" stroke-width="3.5" fill="none"/>
        <path d="M35 200 L35 110 Q145 110 205 72 Q250 25 250 20 Q250 25 295 72 Q355 110 465 110 L465 200" stroke="${color}" stroke-width="1.5" stroke-dasharray="4 3" fill="none"/>
        <circle cx="250" cy="10" r="5" fill="${color}"/>
        <path d="M240 25 Q250 15 260 25 Q250 35 240 25 Z" fill="${color}"/>
      </svg>`;
    },

    // 3. Traditional Mandala
    mandalaCenter: function (color = '#D4AF37', size = 180) {
      return `<svg width="${size}" height="${size}" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="ornament-svg animate-spin-slow">
        <circle cx="100" cy="100" r="90" stroke="${color}" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.6"/>
        <circle cx="100" cy="100" r="75" stroke="${color}" stroke-width="2"/>
        <circle cx="100" cy="100" r="55" stroke="${color}" stroke-width="1.5"/>
        <circle cx="100" cy="100" r="30" stroke="${color}" stroke-width="2"/>
        <circle cx="100" cy="100" r="8" fill="${color}"/>
        ${Array.from({length: 12}).map((_, i) => {
          const angle = (i * 30) * Math.PI / 180;
          const x1 = 100 + 35 * Math.cos(angle);
          const y1 = 100 + 35 * Math.sin(angle);
          const x2 = 100 + 70 * Math.cos(angle);
          const y2 = 100 + 70 * Math.sin(angle);
          return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${color}" stroke-width="1.5"/>
                  <circle cx="${x2.toFixed(1)}" cy="${y2.toFixed(1)}" r="3" fill="${color}"/>`;
        }).join('')}
      </svg>`;
    },

    // 4. Marigold & Mango Leaf Toran (Garland)
    marigoldToran: function (primary = '#EA580C', yellow = '#FBBF24', green = '#15803D') {
      return `<svg viewBox="0 0 600 70" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto ornament-svg">
        <path d="M0 10 Q150 40 300 10 Q450 40 600 10" stroke="${green}" stroke-width="3" fill="none"/>
        ${[40, 100, 160, 220, 280, 320, 380, 440, 500, 560].map((x, idx) => {
          const y = (idx % 2 === 0) ? 22 : 16;
          const c = (idx % 2 === 0) ? primary : yellow;
          return `
            <!-- Mango Leaf -->
            <path d="M${x-5} 12 Q${x} 32 ${x+5} 12 Z" fill="${green}"/>
            <!-- Marigold Blossom -->
            <circle cx="${x}" cy="${y+12}" r="11" fill="${c}"/>
            <circle cx="${x}" cy="${y+12}" r="6" fill="${(c === primary) ? yellow : primary}"/>
          `;
        }).join('')}
      </svg>`;
    },

    // 5. Sacred Diya / Lamp
    diyaLamp: function (color = '#D97706', flame = '#EF4444', glow = '#FDE047') {
      return `<svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-14 h-10 inline-block ornament-svg">
        <!-- Flame glow -->
        <circle cx="40" cy="18" r="14" fill="${glow}" opacity="0.4"/>
        <!-- Flame -->
        <path d="M40 6 C43 14, 46 18, 44 24 C42 27, 38 27, 36 24 C34 18, 37 14, 40 6 Z" fill="${flame}"/>
        <!-- Base / Bowl -->
        <path d="M15 32 Q40 35 65 32 Q60 52 40 52 Q20 52 15 32 Z" fill="${color}"/>
        <path d="M15 32 C25 30, 55 30, 65 32 C55 36, 25 36, 15 32 Z" fill="${color}" opacity="0.8"/>
        <!-- Stand -->
        <path d="M34 52 L46 52 L48 56 L32 56 Z" fill="${color}"/>
      </svg>`;
    },

    // 6. Sacred Kalash with Coconut & Mango Leaves
    kalashMotif: function (color = '#D4AF37', copper = '#B45309') {
      return `<svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-16 h-20 inline-block ornament-svg">
        <!-- Coconut -->
        <circle cx="50" cy="35" r="16" fill="${copper}"/>
        <!-- Mango leaves -->
        <path d="M50 35 L26 22 Q40 14 50 35 Z" fill="#15803D"/>
        <path d="M50 35 L74 22 Q60 14 50 35 Z" fill="#15803D"/>
        <path d="M50 35 L50 8 Q55 18 50 35 Z" fill="#16A34A"/>
        <!-- Kalash pot -->
        <path d="M36 48 L64 48 L68 56 Q78 72 68 96 L32 96 Q22 72 32 56 Z" fill="${color}" stroke="${copper}" stroke-width="2"/>
        <ellipse cx="50" cy="48" rx="14" ry="4" fill="${copper}"/>
        <!-- Stand -->
        <rect x="36" y="96" width="28" height="6" rx="2" fill="${copper}"/>
        <!-- Swastik or sacred dot -->
        <circle cx="50" cy="74" r="4" fill="${copper}"/>
      </svg>`;
    },

    // 7. Botanical Eucalyptus & Rose Wreath
    botanicalWreath: function (leafColor = '#4B7B61', roseColor = '#D9777F', size = 180) {
      return `<svg width="${size}" height="${size}" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="ornament-svg">
        <circle cx="100" cy="100" r="82" stroke="${leafColor}" stroke-width="1.2" stroke-dasharray="6 3" opacity="0.6"/>
        <circle cx="100" cy="100" r="86" stroke="${leafColor}" stroke-width="1.5"/>
        <!-- Eucalyptus Leaves around circle -->
        ${Array.from({length: 8}).map((_, i) => {
          const deg = i * 45;
          const rad = deg * Math.PI / 180;
          const x = 100 + 86 * Math.cos(rad);
          const y = 100 + 86 * Math.sin(rad);
          return `<g transform="translate(${x.toFixed(1)}, ${y.toFixed(1)}) rotate(${deg})">
            <path d="M0 0 Q10 -15 20 -8 Q10 8 0 0 Z" fill="${leafColor}" opacity="0.8"/>
            <path d="M0 0 Q-10 -15 -20 -8 Q-10 8 0 0 Z" fill="${leafColor}" opacity="0.7"/>
            <circle cx="0" cy="0" r="4" fill="${roseColor}"/>
          </g>`;
        }).join('')}
      </svg>`;
    },

    // 8. Art Deco Luxury Geometric Corner
    artDecoCorner: function (color = '#C5A059', size = 70) {
      return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="ornament-svg">
        <path d="M10 90 L10 10 L90 10" stroke="${color}" stroke-width="3"/>
        <path d="M22 90 L22 22 L90 22" stroke="${color}" stroke-width="1.5"/>
        <path d="M34 90 L34 34 L90 34" stroke="${color}" stroke-width="1"/>
        <polygon points="10,10 25,10 10,25" fill="${color}"/>
        <rect x="28" y="28" width="12" height="12" fill="none" stroke="${color}" stroke-width="1.5" transform="rotate(45 34 34)"/>
      </svg>`;
    },

    // 9. Modern Festive Confetti & Sparkles
    festiveSparkles: function (gold = '#F59E0B', pink = '#EC4899', cyan = '#06B6D4') {
      return `<svg viewBox="0 0 500 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto ornament-svg">
        <!-- Stars & Sparkles -->
        <path d="M40 30 Q50 30 50 20 Q50 30 60 30 Q50 30 50 40 Q50 30 40 30 Z" fill="${gold}"/>
        <path d="M450 40 Q460 40 460 30 Q460 40 470 40 Q460 40 460 50 Q460 40 450 40 Z" fill="${pink}"/>
        <path d="M250 15 Q256 15 256 9 Q256 15 262 15 Q256 15 256 21 Q256 15 250 15 Z" fill="${gold}"/>
        <!-- Confetti pieces -->
        <rect x="110" y="25" width="8" height="4" rx="2" fill="${cyan}" transform="rotate(25 110 25)"/>
        <rect x="380" y="20" width="8" height="4" rx="2" fill="${gold}" transform="rotate(-30 380 20)"/>
        <circle cx="180" cy="45" r="3" fill="${pink}"/>
        <circle cx="320" cy="35" r="2.5" fill="${cyan}"/>
        <circle cx="80" cy="65" r="2" fill="${gold}"/>
        <circle cx="420" cy="70" r="3" fill="${gold}"/>
      </svg>`;
    },

    // 10. Calligraphic Flourish Divider
    calligraphicDivider: function (color = 'currentColor', width = 260) {
      return `<svg width="${width}" height="28" viewBox="0 0 260 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto ornament-svg">
        <path d="M10 14 C60 14, 80 5, 115 14 C123 16, 127 16, 130 14 C133 16, 137 16, 145 14 C180 5, 200 14, 250 14" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="130" cy="14" r="3.5" fill="${color}"/>
        <circle cx="120" cy="14" r="2" fill="${color}"/>
        <circle cx="140" cy="14" r="2" fill="${color}"/>
      </svg>`;
    },

    // 11. Minimalist Diamond Divider
    diamondDivider: function (color = 'currentColor', width = 200) {
      return `<svg width="${width}" height="18" viewBox="0 0 200 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto ornament-svg">
        <line x1="10" y1="9" x2="85" y2="9" stroke="${color}" stroke-width="1.2"/>
        <polygon points="100,3 106,9 100,15 94,9" fill="${color}"/>
        <line x1="115" y1="9" x2="190" y2="9" stroke="${color}" stroke-width="1.2"/>
      </svg>`;
    },

    // 12. Christmas Holly, Pine & Golden Star
    hollyPine: function (gold = '#D4AF37', red = '#991B1B', green = '#15803D') {
      return `<svg viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-[280px] h-auto mx-auto ornament-svg">
        <!-- Pine Sprigs Left -->
        <path d="M70 45 Q110 35 140 40" stroke="${green}" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M85 38 L80 30 M100 36 L98 26 M115 36 L118 26 M130 38 L135 28" stroke="${green}" stroke-width="1.8" stroke-linecap="round"/>
        <!-- Pine Sprigs Right -->
        <path d="M230 45 Q190 35 160 40" stroke="${green}" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M215 38 L220 30 M200 36 L202 26 M185 36 L182 26 M170 38 L165 28" stroke="${green}" stroke-width="1.8" stroke-linecap="round"/>
        <!-- Holly Leaves Center -->
        <path d="M150 40 C140 30 135 20 150 15 C165 20 160 30 150 40 Z" fill="${green}"/>
        <path d="M150 40 C135 45 125 55 135 65 C148 60 148 48 150 40 Z" fill="${green}"/>
        <path d="M150 40 C165 45 175 55 165 65 C152 60 152 48 150 40 Z" fill="${green}"/>
        <!-- Red Berries -->
        <circle cx="145" cy="40" r="5" fill="${red}"/>
        <circle cx="155" cy="40" r="5" fill="${red}"/>
        <circle cx="150" cy="47" r="4.5" fill="#B91C1C"/>
        <!-- Golden Star on top -->
        <polygon points="150,4 153,11 160,11 154,15 156,22 150,18 144,22 146,15 140,11 147,11" fill="${gold}"/>
      </svg>`;
    },

    // 13. Islamic Crescent Moon & Star Motif
    crescentStar: function (gold = '#FBBF24', size = 64) {
      return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto ornament-svg">
        <!-- Crescent -->
        <path d="M60 20 A38 38 0 1 0 60 80 A30 30 0 1 1 60 20 Z" fill="${gold}"/>
        <!-- Star -->
        <polygon points="68,40 70,47 77,47 71,51 73,58 68,54 63,58 65,51 59,47 66,47" fill="${gold}"/>
      </svg>`;
    }
  };

  return {
    getOrnament: function (name, options = {}) {
      if (typeof ORNAMENTS[name] === 'function') {
        return ORNAMENTS[name](options.color, options.size || options.width, options.accent);
      }
      return '';
    },
    listOrnaments: function () {
      return Object.keys(ORNAMENTS);
    },
    ORNAMENTS: ORNAMENTS
  };
}));
