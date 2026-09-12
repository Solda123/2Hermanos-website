import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <defs>
    <!-- Outer rim gradient -->
    <linearGradient id="blueRing" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0052D4"/>
      <stop offset="50%" stop-color="#0072FF"/>
      <stop offset="100%" stop-color="#00C6FF"/>
    </linearGradient>

    <!-- 2 gradient -->
    <linearGradient id="twoGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0066FF"/>
      <stop offset="50%" stop-color="#0080FF"/>
      <stop offset="100%" stop-color="#00A3FF"/>
    </linearGradient>

    <!-- Cyan block gradient -->
    <linearGradient id="cyanBlock" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0099FF"/>
      <stop offset="100%" stop-color="#0066FF"/>
    </linearGradient>

    <!-- Dark block gradient -->
    <linearGradient id="darkBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090E17"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>

    <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#0072FF" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- Outer Ring -->
  <circle cx="250" cy="250" r="236" fill="url(#darkBg)" stroke="url(#blueRing)" stroke-width="12" filter="url(#subtleGlow)" />
  <circle cx="250" cy="250" r="226" fill="none" stroke="#1E293B" stroke-width="2" opacity="0.6"/>

  <!-- Pixel / Square Accent Cluster on top-right of H -->
  <!-- Top white square -->
  <rect x="336" y="96" width="46" height="46" rx="12" fill="#FFFFFF" />
  
  <!-- Right cyan square -->
  <rect x="372" y="146" width="54" height="46" rx="12" fill="#0080FF" />
  
  <!-- Left-bottom cyan square -->
  <rect x="335" y="186" width="46" height="46" rx="12" fill="url(#cyanBlock)" />

  <!-- Connecting joint -->
  <rect x="360" y="172" width="22" height="24" rx="4" fill="#0070F3" />

  <!-- Large Center "2H" -->
  <g transform="translate(90, 80)">
    <!-- Stylized "2" with Gradient -->
    <path d="M 10 75 C 10 32 38 8 82 8 C 126 8 152 32 152 68 C 152 98 132 125 98 156 L 46 204 L 152 204 L 152 245 L 8 245 L 8 208 L 78 140 C 102 116 114 96 114 74 C 114 52 98 42 80 42 C 60 42 46 54 44 75 Z" fill="url(#twoGradient)"/>

    <!-- Bold White "H" -->
    <path d="M 160 14 L 202 14 L 202 108 L 278 108 L 278 14 L 320 14 L 320 245 L 278 245 L 278 146 L 202 146 L 202 245 L 160 245 Z" fill="#FFFFFF"/>
  </g>

  <!-- "2Hermanos" Text -->
  <g transform="translate(250, 372)" text-anchor="middle">
    <text font-family="'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif" font-weight="900" font-size="52" letter-spacing="-1">
      <tspan fill="url(#twoGradient)">2</tspan>
      <tspan fill="#FFFFFF">Hermanos</tspan>
    </text>
  </g>

  <!-- Horizontal Cyan Line Divider -->
  <line x1="86" y1="396" x2="414" y2="396" stroke="#0072FF" stroke-width="4" stroke-linecap="round"/>

  <!-- "Soluciones integrales" Text -->
  <g transform="translate(250, 432)" text-anchor="middle">
    <text font-family="'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif" font-weight="400" font-size="26" fill="#F8FAFC" letter-spacing="3.5">
      Soluciones integrales
    </text>
  </g>
</svg>`;

async function generate() {
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Save SVG
  const svgPath = path.join(publicDir, 'logo-2hermanos.svg');
  fs.writeFileSync(svgPath, svgContent, 'utf-8');
  console.log('Saved SVG to', svgPath);

  // Generate PNG (high-res 1000x1000)
  const pngPath1 = path.join(publicDir, 'LOGO 2 HERMANOS.png');
  const pngPath2 = path.join(publicDir, 'logo-2hermanos.png');

  await sharp(Buffer.from(svgContent))
    .resize(1000, 1000)
    .png()
    .toFile(pngPath1);
  console.log('Generated PNG at', pngPath1);

  await sharp(Buffer.from(svgContent))
    .resize(1000, 1000)
    .png()
    .toFile(pngPath2);
  console.log('Generated PNG at', pngPath2);
}

generate().catch(console.error);
