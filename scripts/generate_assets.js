const fs = require('fs');
const path = require('path');

const destDir = path.join(__dirname, '..', 'assets', 'images');
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

const assets = {
  'wedding-haldi-ceremony.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 600" width="100%" height="100%">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFBEB"/>
        <stop offset="50%" stop-color="#FEF3C7"/>
        <stop offset="100%" stop-color="#FDE68A"/>
      </linearGradient>
      <radialGradient id="marigoldGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#F59E0B"/>
        <stop offset="70%" stop-color="#D97706"/>
        <stop offset="100%" stop-color="#B45309"/>
      </radialGradient>
      <radialGradient id="brassUrli" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stop-color="#FDE68A"/>
        <stop offset="45%" stop-color="#D4AF37"/>
        <stop offset="85%" stop-color="#92400E"/>
        <stop offset="100%" stop-color="#78350F"/>
      </radialGradient>
      <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#22C55E"/>
        <stop offset="100%" stop-color="#15803D"/>
      </linearGradient>
    </defs>
    <rect width="500" height="600" rx="24" fill="url(#bgGrad)"/>
    <g opacity="0.9">
      <line x1="50" y1="0" x2="50" y2="180" stroke="#D97706" stroke-width="2" stroke-dasharray="3,5"/>
      <line x1="120" y1="0" x2="120" y2="140" stroke="#D97706" stroke-width="2" stroke-dasharray="3,5"/>
      <line x1="250" y1="0" x2="250" y2="200" stroke="#D97706" stroke-width="2" stroke-dasharray="3,5"/>
      <line x1="380" y1="0" x2="380" y2="140" stroke="#D97706" stroke-width="2" stroke-dasharray="3,5"/>
      <line x1="450" y1="0" x2="450" y2="180" stroke="#D97706" stroke-width="2" stroke-dasharray="3,5"/>
      <circle cx="50" cy="60" r="16" fill="url(#marigoldGrad)"/>
      <circle cx="50" cy="100" r="18" fill="#FBBF24"/>
      <circle cx="50" cy="140" r="18" fill="url(#marigoldGrad)"/>
      <circle cx="50" cy="180" r="16" fill="#F59E0B"/>
      <circle cx="120" cy="50" r="15" fill="url(#marigoldGrad)"/>
      <circle cx="120" cy="90" r="18" fill="#FBBF24"/>
      <circle cx="120" cy="130" r="16" fill="url(#marigoldGrad)"/>
      <circle cx="250" cy="40" r="15" fill="url(#marigoldGrad)"/>
      <circle cx="250" cy="80" r="18" fill="#FBBF24"/>
      <circle cx="250" cy="120" r="18" fill="url(#marigoldGrad)"/>
      <circle cx="250" cy="160" r="20" fill="#F59E0B"/>
      <circle cx="250" cy="200" r="16" fill="#FBBF24"/>
      <circle cx="380" cy="50" r="15" fill="url(#marigoldGrad)"/>
      <circle cx="380" cy="90" r="18" fill="#FBBF24"/>
      <circle cx="380" cy="130" r="16" fill="url(#marigoldGrad)"/>
      <circle cx="450" cy="60" r="16" fill="url(#marigoldGrad)"/>
      <circle cx="450" cy="100" r="18" fill="#FBBF24"/>
      <circle cx="450" cy="140" r="18" fill="url(#marigoldGrad)"/>
      <circle cx="450" cy="180" r="16" fill="#F59E0B"/>
    </g>
    <g transform="translate(250, 420)">
      <ellipse cx="0" cy="65" rx="180" ry="30" fill="#78350F" opacity="0.25"/>
      <ellipse cx="0" cy="40" rx="160" ry="48" fill="url(#brassUrli)" stroke="#B45309" stroke-width="4"/>
      <ellipse cx="0" cy="36" rx="140" ry="38" fill="#FEF08A" opacity="0.9"/>
      <path d="M-140,30 Q-180,10 -150,0 Q-120,10 -130,30" fill="url(#leafGrad)"/>
      <path d="M140,30 Q180,10 150,0 Q120,10 130,30" fill="url(#leafGrad)"/>
      <circle cx="-70" cy="34" r="16" fill="url(#marigoldGrad)"/>
      <circle cx="-30" cy="28" r="14" fill="#F59E0B"/>
      <circle cx="20" cy="32" r="18" fill="url(#marigoldGrad)"/>
      <circle cx="65" cy="38" r="15" fill="#FBBF24"/>
      <circle cx="-10" cy="48" r="16" fill="#D97706"/>
      <circle cx="0" cy="22" r="12" fill="#FEF08A"/>
      <ellipse cx="0" cy="35" rx="24" ry="12" fill="#B45309"/>
      <path d="M0,20 Q-6,28 0,33 Q6,28 0,20" fill="#EF4444"/>
      <path d="M0,23 Q-3,28 0,32 Q3,28 0,23" fill="#FBBF24"/>
    </g>
    <g transform="translate(250, 260)">
      <ellipse cx="0" cy="25" rx="60" ry="16" fill="#78350F" opacity="0.2"/>
      <ellipse cx="0" cy="15" rx="55" ry="22" fill="url(#brassUrli)" stroke="#92400E" stroke-width="2"/>
      <ellipse cx="0" cy="12" rx="46" ry="16" fill="#EAB308"/>
      <ellipse cx="0" cy="10" rx="38" ry="12" fill="#FACC15"/>
      <text x="0" y="-35" font-family="'Rozha One', serif, sans-serif" font-size="24" font-weight="bold" fill="#92400E" text-anchor="middle" letter-spacing="2">HALDI CEREMONY</text>
      <text x="0" y="-12" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600" fill="#B45309" text-anchor="middle" letter-spacing="2">Auspicious Golden Turmeric Blessings</text>
    </g>
  </svg>`,

  'wedding-mehendi-art.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 600" width="100%" height="100%">
    <defs>
      <linearGradient id="bgMehendi" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#064E3B"/>
        <stop offset="50%" stop-color="#047857"/>
        <stop offset="100%" stop-color="#065F46"/>
      </linearGradient>
    </defs>
    <rect width="500" height="600" rx="24" fill="url(#bgMehendi)"/>
    <g transform="translate(250, 270)" stroke="#FDE68A" fill="none" stroke-width="1.5">
      <circle cx="0" cy="0" r="140" stroke-dasharray="4,4" opacity="0.7"/>
      <circle cx="0" cy="0" r="125" stroke-width="2"/>
      <circle cx="0" cy="0" r="110" stroke-dasharray="2,3"/>
      <circle cx="0" cy="0" r="90" stroke-width="2"/>
      <circle cx="0" cy="0" r="60" stroke-dasharray="6,4"/>
      <circle cx="0" cy="0" r="30" fill="#F59E0B" opacity="0.3"/>
      <g id="petals">
        <path d="M0,-90 C15,-115 25,-120 0,-138 C-25,-120 -15,-115 0,-90" fill="#D97706" opacity="0.4"/>
        <path d="M0,-60 C10,-75 18,-80 0,-90 C-18,-80 -10,-75 0,-60" fill="#F59E0B" opacity="0.7"/>
        <circle cx="0" cy="-125" r="3" fill="#FDE68A"/>
      </g>
      <use href="#petals" transform="rotate(30)"/>
      <use href="#petals" transform="rotate(60)"/>
      <use href="#petals" transform="rotate(90)"/>
      <use href="#petals" transform="rotate(120)"/>
      <use href="#petals" transform="rotate(150)"/>
      <use href="#petals" transform="rotate(180)"/>
      <use href="#petals" transform="rotate(210)"/>
      <use href="#petals" transform="rotate(240)"/>
      <use href="#petals" transform="rotate(270)"/>
      <use href="#petals" transform="rotate(300)"/>
      <use href="#petals" transform="rotate(330)"/>
      <circle cx="0" cy="0" r="16" fill="#FDE68A"/>
    </g>
    <path d="M30,30 Q90,30 110,80 Q130,130 90,150 Q50,160 30,120 Z" fill="none" stroke="#F59E0B" stroke-width="2" opacity="0.6"/>
    <path d="M470,30 Q410,30 390,80 Q370,130 410,150 Q450,160 470,120 Z" fill="none" stroke="#F59E0B" stroke-width="2" opacity="0.6"/>
    <text x="250" y="470" font-family="'Rozha One', serif, sans-serif" font-size="24" font-weight="bold" fill="#FEF08A" text-anchor="middle" letter-spacing="3">MEHENDI KI RAAT</text>
    <text x="250" y="500" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#A7F3D0" text-anchor="middle" letter-spacing="2">HENNA, MUSIC &amp; CELEBRATION</text>
  </svg>`,

  'wedding-nikah-mehrab.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 600" width="100%" height="100%">
    <defs>
      <linearGradient id="bgNikah" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#022C22"/>
        <stop offset="60%" stop-color="#064E3B"/>
        <stop offset="100%" stop-color="#04251B"/>
      </linearGradient>
    </defs>
    <rect width="500" height="600" rx="24" fill="url(#bgNikah)"/>
    <path d="M60,560 L60,260 Q60,120 180,80 Q250,40 250,20 Q250,40 320,80 Q440,120 440,260 L440,560" fill="none" stroke="#F59E0B" stroke-width="3"/>
    <path d="M80,560 L80,270 Q80,140 190,100 Q250,65 250,45 Q250,65 310,100 Q420,140 420,270 L420,560" fill="none" stroke="#FDE68A" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.7"/>
    <g transform="translate(250, 110)">
      <line x1="0" y1="-60" x2="0" y2="0" stroke="#F59E0B" stroke-width="2"/>
      <polygon points="0,0 -16,14 -12,42 0,54 12,42 16,14" fill="#D97706" stroke="#FDE68A" stroke-width="2"/>
      <circle cx="0" cy="28" r="7" fill="#FEF08A"/>
    </g>
    <g transform="translate(130, 160)">
      <line x1="0" y1="-80" x2="0" y2="0" stroke="#F59E0B" stroke-width="1.5"/>
      <polygon points="0,0 -12,10 -9,30 0,40 9,30 12,10" fill="#D97706" stroke="#FDE68A" stroke-width="1.5"/>
      <circle cx="0" cy="20" r="5" fill="#FEF08A"/>
    </g>
    <g transform="translate(370, 160)">
      <line x1="0" y1="-80" x2="0" y2="0" stroke="#F59E0B" stroke-width="1.5"/>
      <polygon points="0,0 -12,10 -9,30 0,40 9,30 12,10" fill="#D97706" stroke="#FDE68A" stroke-width="1.5"/>
      <circle cx="0" cy="20" r="5" fill="#FEF08A"/>
    </g>
    <g transform="translate(250, 280)">
      <path d="M15,-30 A 30 30 0 1 0 15 30 A 24 24 0 1 1 15 -30 Z" fill="#FDE68A"/>
      <polygon points="30,-5 33,4 42,4 35,9 38,18 30,13 22,18 25,9 18,4 27,4" fill="#FDE68A"/>
      <text x="0" y="75" font-family="'Playfair Display', serif" font-size="22" font-weight="bold" fill="#FDE68A" text-anchor="middle" letter-spacing="3">NIKAH &amp; WALIMA</text>
      <text x="0" y="105" font-family="'Outfit', sans-serif" font-size="12" fill="#6EE7B7" text-anchor="middle" letter-spacing="2">IN THE NAME OF ALLAH</text>
    </g>
  </svg>`,

  'birthday-safari-wild-one.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 600" width="100%" height="100%">
    <defs>
      <linearGradient id="bgSafari" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FEF3C7"/>
        <stop offset="100%" stop-color="#ECFDF5"/>
      </linearGradient>
    </defs>
    <rect width="500" height="600" rx="24" fill="url(#bgSafari)"/>
    <g fill="#15803D" opacity="0.75">
      <path d="M-20,-20 Q80,20 120,90 Q80,70 20,40 Z"/>
      <path d="M40,-20 Q120,40 140,120 Q90,90 30,40 Z" fill="#16A34A"/>
      <path d="M520,-20 Q420,20 380,90 Q420,70 480,40 Z"/>
      <path d="M460,-20 Q380,40 360,120 Q410,90 470,40 Z" fill="#16A34A"/>
    </g>
    <g transform="translate(250, 260)">
      <circle cx="0" cy="0" r="90" fill="#F59E0B"/>
      <g fill="#D97706">
        <circle cx="0" cy="-90" r="18"/>
        <circle cx="64" cy="-64" r="18"/>
        <circle cx="90" cy="0" r="18"/>
        <circle cx="64" cy="64" r="18"/>
        <circle cx="0" cy="90" r="18"/>
        <circle cx="-64" cy="64" r="18"/>
        <circle cx="-90" cy="0" r="18"/>
        <circle cx="-64" cy="-64" r="18"/>
      </g>
      <circle cx="0" cy="0" r="72" fill="#FDE68A"/>
      <circle cx="-50" cy="-50" r="20" fill="#F59E0B"/>
      <circle cx="-50" cy="-50" r="12" fill="#FED7AA"/>
      <circle cx="50" cy="-50" r="20" fill="#F59E0B"/>
      <circle cx="50" cy="-50" r="12" fill="#FED7AA"/>
      <circle cx="-24" cy="-12" r="7" fill="#1F2937"/>
      <circle cx="-22" cy="-14" r="2.5" fill="#FFFFFF"/>
      <circle cx="24" cy="-12" r="7" fill="#1F2937"/>
      <circle cx="26" cy="-14" r="2.5" fill="#FFFFFF"/>
      <polygon points="0,4 -10,-4 10,-4" fill="#92400E"/>
      <path d="M-10,12 Q0,22 10,12" fill="none" stroke="#92400E" stroke-width="3" stroke-linecap="round"/>
      <polygon points="-24,-65 0,-85 24,-65 14,-50 -14,-50" fill="#EAB308" stroke="#CA8A04" stroke-width="2"/>
      <circle cx="0" cy="-85" r="3.5" fill="#EF4444"/>
    </g>
    <text x="250" y="430" font-family="'Outfit', sans-serif" font-size="42" font-weight="900" fill="#B45309" text-anchor="middle" letter-spacing="2">WILD ONE!</text>
    <text x="250" y="465" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="bold" fill="#047857" text-anchor="middle" letter-spacing="3">FIRST BIRTHDAY SAFARI</text>
  </svg>`,

  'birthday-milestone-gold.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 600" width="100%" height="100%">
    <defs>
      <linearGradient id="bgDarkGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0B0F19"/>
        <stop offset="50%" stop-color="#1E1B4B"/>
        <stop offset="100%" stop-color="#030712"/>
      </linearGradient>
      <linearGradient id="goldShimmer" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FEF08A"/>
        <stop offset="50%" stop-color="#EAB308"/>
        <stop offset="100%" stop-color="#CA8A04"/>
      </linearGradient>
    </defs>
    <rect width="500" height="600" rx="24" fill="url(#bgDarkGold)"/>
    <g fill="#EAB308" opacity="0.7">
      <circle cx="60" cy="80" r="3"/>
      <circle cx="120" cy="140" r="4" fill="#FDE68A"/>
      <circle cx="90" cy="220" r="2"/>
      <circle cx="420" cy="90" r="4" fill="#FDE68A"/>
      <circle cx="380" cy="180" r="3"/>
      <circle cx="450" cy="250" r="2"/>
      <rect x="100" y="60" width="6" height="12" rx="2" transform="rotate(25 100 60)" fill="#FACC15"/>
      <rect x="400" y="120" width="6" height="12" rx="2" transform="rotate(-35 400 120)" fill="#FACC15"/>
    </g>
    <g transform="translate(250, 240)">
      <g transform="rotate(-15)">
        <path d="M-18,-60 L-18,0 Q-18,40 -2,45 L-2,100 L-16,100 L-16,106 L12,106 L12,100 L-2,100 L-2,45 Q14,40 14,0 L14,-60 Z" fill="none" stroke="url(#goldShimmer)" stroke-width="2.5"/>
        <path d="M-16,-10 L-16,0 Q-16,35 -2,40 Q12,35 12,0 L12,-10 Z" fill="#EAB308" opacity="0.6"/>
      </g>
      <g transform="rotate(15)">
        <path d="M-14,-60 L-14,0 Q-14,40 2,45 L2,100 L-12,100 L-12,106 L16,106 L16,100 L2,100 L2,45 Q18,40 18,0 L18,-60 Z" fill="none" stroke="url(#goldShimmer)" stroke-width="2.5"/>
        <path d="M-12,-10 L-12,0 Q-12,35 2,40 Q16,35 16,0 L16,-10 Z" fill="#EAB308" opacity="0.6"/>
      </g>
      <polygon points="0,-35 4,-20 18,-18 6,-10 8,5 0,-5 -8,5 -6,-10 -18,-18 -4,-20" fill="#FFF" opacity="0.9"/>
    </g>
    <text x="250" y="420" font-family="'Cinzel', serif" font-size="32" font-weight="bold" fill="url(#goldShimmer)" text-anchor="middle" letter-spacing="4">CHEERS TO 30!</text>
    <text x="250" y="455" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="600" fill="#94A3B8" text-anchor="middle" letter-spacing="3">MILESTONE CELEBRATION &amp; DINNER</text>
  </svg>`,

  'festival-diwali-grand.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 600" width="100%" height="100%">
    <defs>
      <linearGradient id="bgDiwali" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E1B4B"/>
        <stop offset="60%" stop-color="#311042"/>
        <stop offset="100%" stop-color="#0F172A"/>
      </linearGradient>
      <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#FEF08A"/>
        <stop offset="40%" stop-color="#F59E0B"/>
        <stop offset="80%" stop-color="#EF4444"/>
        <stop offset="100%" stop-color="transparent"/>
      </radialGradient>
    </defs>
    <rect width="500" height="600" rx="24" fill="url(#bgDiwali)"/>
    <g stroke="#FDE68A" stroke-width="1.5" opacity="0.7">
      <path d="M100,80 L100,50 M100,80 L125,65 M100,80 L130,80 M100,80 L120,100 M100,80 L75,65 M100,80 L70,80 M100,80 L80,100"/>
      <path d="M400,90 L400,60 M400,90 L425,75 M400,90 L430,90 M400,90 L420,110 M400,90 L375,75 M400,90 L370,90 M400,90 L380,110"/>
    </g>
    <g transform="translate(250, 310)">
      <circle cx="0" cy="-50" r="60" fill="url(#flameGlow)"/>
      <path d="M0,-95 Q-15,-50 0,-30 Q15,-50 0,-95" fill="#EF4444"/>
      <path d="M0,-85 Q-10,-50 0,-32 Q10,-50 0,-85" fill="#FBBF24"/>
      <path d="M0,-70 Q-5,-48 0,-34 Q5,-48 0,-70" fill="#FFF"/>
      <path d="M-100,0 Q-110,40 0,55 Q110,40 100,0 Q60,15 0,15 Q-60,15 -100,0 Z" fill="#D97706" stroke="#FBBF24" stroke-width="3"/>
      <ellipse cx="0" cy="0" rx="100" ry="16" fill="#B45309"/>
      <ellipse cx="0" cy="0" rx="85" ry="12" fill="#78350F"/>
      <path d="M-30,50 L-45,95 L45,95 L30,50 Z" fill="#B45309" stroke="#F59E0B" stroke-width="2"/>
      <g fill="#F59E0B">
        <circle cx="-120" cy="90" r="14"/>
        <circle cx="-80" cy="95" r="14" fill="#FBBF24"/>
        <circle cx="-40" cy="98" r="14"/>
        <circle cx="0" cy="100" r="15" fill="#FBBF24"/>
        <circle cx="40" cy="98" r="14"/>
        <circle cx="80" cy="95" r="14" fill="#FBBF24"/>
        <circle cx="120" cy="90" r="14"/>
      </g>
    </g>
    <text x="250" y="480" font-family="'Rozha One', serif" font-size="28" font-weight="bold" fill="#FDE68A" text-anchor="middle" letter-spacing="4">SHUBH DEEPAVALI</text>
    <text x="250" y="515" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#FCD34D" text-anchor="middle" letter-spacing="2">FESTIVAL OF LIGHTS &amp; PROSPERITY</text>
  </svg>`,

  'festival-christmas-cozy.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 600" width="100%" height="100%">
    <defs>
      <linearGradient id="bgXmas" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#064E3B"/>
        <stop offset="60%" stop-color="#022C22"/>
        <stop offset="100%" stop-color="#0F172A"/>
      </linearGradient>
    </defs>
    <rect width="500" height="600" rx="24" fill="url(#bgXmas)"/>
    <g transform="translate(250, 240)">
      <polygon points="0,-120 7,-100 28,-100 12,-86 18,-66 0,-78 -18,-66 -12,-86 -28,-100 -7,-100" fill="#FBBF24"/>
      <polygon points="0,-80 -50,-20 50,-20" fill="#15803D"/>
      <polygon points="0,-30 -80,45 80,45" fill="#166534"/>
      <polygon points="0,30 -115,120 115,120" fill="#14532D"/>
      <rect x="-18" y="120" width="36" height="40" fill="#78350F" rx="4"/>
      <circle cx="-25" cy="-35" r="7" fill="#EF4444"/>
      <circle cx="20" cy="-25" r="7" fill="#F59E0B"/>
      <circle cx="-45" cy="25" r="8" fill="#38BDF8"/>
      <circle cx="40" cy="30" r="8" fill="#EF4444"/>
      <circle cx="-70" cy="100" r="9" fill="#FBBF24"/>
      <circle cx="0" cy="85" r="9" fill="#EC4899"/>
      <circle cx="65" cy="105" r="9" fill="#38BDF8"/>
    </g>
    <text x="250" y="450" font-family="'Playfair Display', serif" font-size="30" font-weight="bold" fill="#FDE68A" text-anchor="middle" letter-spacing="3">MERRY CHRISTMAS</text>
    <text x="250" y="485" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#93C5FD" text-anchor="middle" letter-spacing="2">JOYOUS FEAST &amp; CELEBRATION</text>
  </svg>`,

  'housewarming-pooja-kalash.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 600" width="100%" height="100%">
    <defs>
      <linearGradient id="bgHome" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFDF7"/>
        <stop offset="100%" stop-color="#FEF3C7"/>
      </linearGradient>
      <radialGradient id="kalashGold" cx="40%" cy="35%" r="65%">
        <stop offset="0%" stop-color="#FEF08A"/>
        <stop offset="50%" stop-color="#F59E0B"/>
        <stop offset="100%" stop-color="#92400E"/>
      </radialGradient>
    </defs>
    <rect width="500" height="600" rx="24" fill="url(#bgHome)"/>
    <g transform="translate(250, 270)">
      <ellipse cx="0" cy="120" rx="80" ry="18" fill="#78350F" opacity="0.2"/>
      <ellipse cx="0" cy="-60" rx="36" ry="42" fill="#78350F"/>
      <g fill="#15803D">
        <path d="M-30,-50 C-70,-90 -90,-80 -100,-40 C-70,-35 -50,-40 -30,-50 Z"/>
        <path d="M-15,-60 C-40,-115 -25,-125 0,-80 Z"/>
        <path d="M15,-60 C40,-115 25,-125 0,-80 Z"/>
        <path d="M30,-50 C70,-90 90,-80 100,-40 C70,-35 50,-40 30,-50 Z"/>
      </g>
      <path d="M-36,-25 L36,-25 L50,0 C80,50 65,110 0,115 C-65,110 -80,50 -50,0 Z" fill="url(#kalashGold)" stroke="#B45309" stroke-width="2"/>
      <path d="M-40,40 L40,40 M-35,60 L35,60" stroke="#DC2626" stroke-width="4"/>
      <g fill="#DC2626">
        <path d="M-12,20 L12,20 M0,8 L0,32" stroke="#DC2626" stroke-width="3"/>
      </g>
    </g>
    <text x="250" y="460" font-family="'Rozha One', serif" font-size="26" font-weight="bold" fill="#78350F" text-anchor="middle" letter-spacing="3">GRIHA PRAVESH</text>
    <text x="250" y="490" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#B45309" text-anchor="middle" letter-spacing="2">HOUSEWARMING &amp; POOJA</text>
  </svg>`,

  'babyshower-cradle-stars.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 600" width="100%" height="100%">
    <defs>
      <linearGradient id="bgBaby" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FDF2F8"/>
        <stop offset="50%" stop-color="#FFF1F2"/>
        <stop offset="100%" stop-color="#F0FDF4"/>
      </linearGradient>
    </defs>
    <rect width="500" height="600" rx="24" fill="url(#bgBaby)"/>
    <g transform="translate(250, 240)">
      <line x1="-70" y1="-140" x2="-70" y2="-60" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="3,3"/>
      <line x1="70" y1="-140" x2="70" y2="-60" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="3,3"/>
      <path d="M-100,-40 Q0,-50 100,-40 L85,40 Q0,70 -85,40 Z" fill="#FDE68A" stroke="#D97706" stroke-width="2"/>
      <path d="M-75,0 Q0,20 75,0" stroke="#F59E0B" stroke-width="2" fill="none"/>
      <g fill="#F472B6" opacity="0.8">
        <circle cx="-50" cy="40" r="10"/>
        <circle cx="-25" cy="48" r="10" fill="#34D399"/>
        <circle cx="0" cy="52" r="10" fill="#F472B6"/>
        <circle cx="25" cy="48" r="10" fill="#38BDF8"/>
        <circle cx="50" cy="40" r="10"/>
      </g>
      <g fill="#F59E0B">
        <polygon points="0,-100 3,-90 12,-90 5,-84 8,-74 0,-80 -8,-74 -5,-84 -12,-90 -3,-90"/>
        <polygon points="-80,-110 -77,-102 -70,-102 -75,-98 -73,-90 -80,-94 -87,-90 -85,-98 -90,-102 -83,-102"/>
        <polygon points="80,-110 83,-102 90,-102 85,-98 87,-90 80,-94 73,-90 75,-98 70,-102 77,-102"/>
      </g>
    </g>
    <text x="250" y="420" font-family="'Great Vibes', cursive" font-size="36" fill="#DB2777" text-anchor="middle">A Little Miracle</text>
    <text x="250" y="455" font-family="'Outfit', sans-serif" font-size="20" font-weight="bold" fill="#047857" text-anchor="middle" letter-spacing="3">BABY SHOWER &amp; NAMING</text>
  </svg>`,

  'wedding-christian-chapel.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 600" width="100%" height="100%">
    <defs>
      <linearGradient id="bgChapel" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#F8FAFC"/>
        <stop offset="50%" stop-color="#F1F5F9"/>
        <stop offset="100%" stop-color="#E2E8F0"/>
      </linearGradient>
    </defs>
    <rect width="500" height="600" rx="24" fill="url(#bgChapel)"/>
    <g transform="translate(250, 240)">
      <path d="M-90,140 L-90,-20 Q-90,-120 0,-150 Q90,-120 90,-20 L90,140 Z" fill="none" stroke="#94A3B8" stroke-width="2.5"/>
      <path d="M-70,140 L-70,-15 Q-70,-95 0,-125 Q70,-95 70,-15 L70,140 Z" fill="none" stroke="#CBD5E1" stroke-width="1.5"/>
      <g stroke="#C5A059" stroke-width="3">
        <line x1="0" y1="-80" x2="0" y2="40"/>
        <line x1="-30" y1="-40" x2="30" y2="-40"/>
      </g>
      <circle cx="0" cy="80" r="28" fill="#F8FAFC" stroke="#94A3B8" stroke-width="2"/>
      <g fill="#BE185D" opacity="0.85">
        <circle cx="-12" cy="74" r="8"/>
        <circle cx="8" cy="70" r="9" fill="#F43F5E"/>
        <circle cx="0" cy="86" r="9" fill="#E11D48"/>
      </g>
    </g>
    <text x="250" y="440" font-family="'Cinzel', serif" font-size="24" font-weight="bold" fill="#334155" text-anchor="middle" letter-spacing="3">HOLY MATRIMONY</text>
    <text x="250" y="470" font-family="'Great Vibes', cursive" font-size="20" fill="#64748B" text-anchor="middle">United in Faith &amp; Love</text>
  </svg>`,

  'birthday-princess-castle.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 600" width="100%" height="100%">
    <defs>
      <linearGradient id="bgPrincess" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FDF2F8"/>
        <stop offset="50%" stop-color="#FCE7F3"/>
        <stop offset="100%" stop-color="#F5D0FE"/>
      </linearGradient>
    </defs>
    <rect width="500" height="600" rx="24" fill="url(#bgPrincess)"/>
    <g transform="translate(250, 240)">
      <rect x="-80" y="-30" width="160" height="120" fill="#F472B6" rx="8"/>
      <rect x="-110" y="-80" width="45" height="170" fill="#EC4899" rx="4"/>
      <polygon points="-87.5,-130 -115,-80 -60,-80" fill="#DB2777"/>
      <rect x="65" y="-80" width="45" height="170" fill="#EC4899" rx="4"/>
      <polygon points="87.5,-130 60,-80 115,-80" fill="#DB2777"/>
      <rect x="-35" y="-95" width="70" height="90" fill="#DB2777" rx="4"/>
      <polygon points="0,-160 -40,-95 40,-95" fill="#BE185D"/>
      <path d="M-25,90 L-25,35 Q-25,10 0,10 Q25,10 25,35 L25,90 Z" fill="#FDE68A"/>
    </g>
    <text x="250" y="420" font-family="'Great Vibes', cursive" font-size="42" fill="#DB2777" text-anchor="middle">Princess Celebration</text>
    <text x="250" y="455" font-family="'Outfit', sans-serif" font-size="16" font-weight="bold" fill="#7C3AED" text-anchor="middle" letter-spacing="3">MAGICAL BIRTHDAY PARTY</text>
  </svg>`,

  'corporate-summit-abstract.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 600" width="100%" height="100%">
    <defs>
      <linearGradient id="bgCorp" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#1E293B"/>
        <stop offset="100%" stop-color="#0284C7"/>
      </linearGradient>
    </defs>
    <rect width="500" height="600" rx="24" fill="url(#bgCorp)"/>
    <g transform="translate(250, 240)" stroke="#38BDF8" fill="none" opacity="0.85">
      <polygon points="0,-100 90,-45 90,65 0,120 -90,65 -90,-45" stroke-width="2.5"/>
      <polygon points="0,-70 60,-32 60,45 0,85 -60,45 -60,-32" stroke-width="1.5" stroke-dasharray="4,4"/>
      <line x1="0" y1="-100" x2="0" y2="120" stroke-width="1"/>
      <line x1="-90" y1="-45" x2="90" y2="65" stroke-width="1"/>
      <line x1="-90" y1="65" x2="90" y2="-45" stroke-width="1"/>
      <circle cx="0" cy="0" r="16" fill="#38BDF8"/>
      <circle cx="0" cy="-100" r="7" fill="#F8FAFC"/>
      <circle cx="90" cy="-45" r="7" fill="#F8FAFC"/>
      <circle cx="90" cy="65" r="7" fill="#F8FAFC"/>
      <circle cx="0" cy="120" r="7" fill="#F8FAFC"/>
      <circle cx="-90" cy="65" r="7" fill="#F8FAFC"/>
      <circle cx="-90" cy="-45" r="7" fill="#F8FAFC"/>
    </g>
    <text x="250" y="420" font-family="'Outfit', sans-serif" font-size="28" font-weight="900" fill="#F8FAFC" text-anchor="middle" letter-spacing="4">NEXUS AI SUMMIT</text>
    <text x="250" y="455" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#38BDF8" text-anchor="middle" letter-spacing="3">GLOBAL INNOVATION KEYNOTE</text>
  </svg>`,

  'anniversary-golden-jubilee.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 600" width="100%" height="100%">
    <defs>
      <linearGradient id="bgAnniv" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1A0B0E"/>
        <stop offset="60%" stop-color="#2D0F16"/>
        <stop offset="100%" stop-color="#0F0507"/>
      </linearGradient>
      <linearGradient id="goldLaurel" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FEF08A"/>
        <stop offset="50%" stop-color="#EAB308"/>
        <stop offset="100%" stop-color="#92400E"/>
      </linearGradient>
    </defs>
    <rect width="500" height="600" rx="24" fill="url(#bgAnniv)"/>
    <g transform="translate(250, 240)">
      <circle cx="-25" cy="0" r="50" fill="none" stroke="url(#goldLaurel)" stroke-width="8"/>
      <circle cx="25" cy="0" r="50" fill="none" stroke="url(#goldLaurel)" stroke-width="8"/>
      <polygon points="0,-70 5,-50 25,-48 10,-35 14,-15 0,-25 -14,-15 -10,-35 -25,-48 -5,-50" fill="#FFF"/>
    </g>
    <text x="250" y="380" font-family="'Cinzel', serif" font-size="38" font-weight="bold" fill="url(#goldLaurel)" text-anchor="middle" letter-spacing="4">50 YEARS</text>
    <text x="250" y="415" font-family="'Great Vibes', cursive" font-size="28" fill="#FDE68A" text-anchor="middle">Golden Wedding Jubilee</text>
    <text x="250" y="445" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600" fill="#FDA4AF" text-anchor="middle" letter-spacing="2">A LIFETIME OF ENDURING LOVE</text>
  </svg>`
};

for (const [filename, content] of Object.entries(assets)) {
  fs.writeFileSync(path.join(destDir, filename), content.trim(), 'utf8');
  console.log('Created asset:', filename);
}
console.log('Assets written successfully!');
