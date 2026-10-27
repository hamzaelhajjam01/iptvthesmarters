import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourceDir = path.join(__dirname, '..', 'Iptv The smarters Pro');

/**
 * 1. Optimize French Hub (/fr/)
 * Target: "abonnement iptv" (22,200/mo, 0% KD), "meilleur iptv" (6,600/mo, 4% KD), "iptv smarters pro" (49,500/mo, 25% KD)
 */
function optimizeFrench() {
  const p = path.join(sourceDir, 'fr', 'index.html');
  if (!fs.existsSync(p)) return;
  let html = fs.readFileSync(p, 'utf8');

  // Title & Meta
  html = html.replace(
    /<title>[^<]+<\/title>/,
    '<title>Abonnement IPTV Smarters Pro — Meilleur IPTV 4K &amp; Guide 2026</title>'
  );
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    '<meta name="description" content="Découvrez le meilleur abonnement IPTV pour IPTV Smarters Pro en France. Plus de 20 000 chaînes 4K/FHD, films et séries VOD sans coupure, compatible Smart TV, FireStick et smartphone."'
  );

  // Hero H1
  html = html.replace(
    /<h1[^>]*>[\s\S]*?<\/h1>/,
    `<h1 class="hero-title text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
      Meilleur Abonnement IPTV Smarters Pro <span class="hero-title-accent block text-gradient">Flux 4K &amp; Chaînes en Direct</span>
    </h1>`
  );

  fs.writeFileSync(p, html, 'utf8');
  console.log('Successfully optimized French Hub (/fr/) for high-converting 0% KD keywords!');
}

/**
 * 2. Optimize German Hub (/de/)
 * Target: "iptv kaufen" (12,100/mo, 4% KD), "bester iptv anbieter" (880/mo, 6% KD), "iptv smarters pro" (22,200/mo, 0% KD)
 */
function optimizeGerman() {
  const p = path.join(sourceDir, 'de', 'index.html');
  if (!fs.existsSync(p)) return;
  let html = fs.readFileSync(p, 'utf8');

  // Title & Meta
  html = html.replace(
    /<title>[^<]+<\/title>/,
    '<title>IPTV Kaufen — Bester IPTV Anbieter für Smarters Pro (4K UHD)</title>'
  );
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    '<meta name="description" content="Premium IPTV kaufen für IPTV Smarters Pro. Bester IPTV Anbieter in Deutschland mit über 20.000 Live-Sendern, Bundesliga in 4K 60FPS und VOD ohne Pufferung."'
  );

  // Hero H1
  html = html.replace(
    /<h1[^>]*>[\s\S]*?<\/h1>/,
    `<h1 class="hero-title text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
      IPTV Kaufen für Smarters Pro <span class="hero-title-accent block text-gradient">Bester IPTV Anbieter in 4K</span>
    </h1>`
  );

  fs.writeFileSync(p, html, 'utf8');
  console.log('Successfully optimized German Hub (/de/) for high-converting 4% KD keywords!');
}

/**
 * 3. Optimize Spanish Hub (/es/)
 * Target: "comprar iptv" (880/mo, 0% KD), "iptv smarters pro" (14,800/mo, 0% KD)
 */
function optimizeSpanish() {
  const p = path.join(sourceDir, 'es', 'index.html');
  if (!fs.existsSync(p)) return;
  let html = fs.readFileSync(p, 'utf8');

  // Title & Meta
  html = html.replace(
    /<title>[^<]+<\/title>/,
    '<title>Comprar IPTV Smarters Pro — Mejor Servicio IPTV España 4K</title>'
  );
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    '<meta name="description" content="Comprar suscripción IPTV para IPTV Smarters Pro. Disfruta del mejor servicio IPTV en España con fútbol en vivo, canales 4K sin cortes y películas VOD."'
  );

  // Hero H1
  html = html.replace(
    /<h1[^>]*>[\s\S]*?<\/h1>/,
    `<h1 class="hero-title text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
      Comprar IPTV Smarters Pro <span class="hero-title-accent block text-gradient">Mejor Servicio IPTV en 4K</span>
    </h1>`
  );

  fs.writeFileSync(p, html, 'utf8');
  console.log('Successfully optimized Spanish Hub (/es/) for high-converting 0% KD keywords!');
}

optimizeFrench();
optimizeGerman();
optimizeSpanish();
