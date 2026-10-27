import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const sourceDir = path.join(projectRoot, 'Iptv The smarters Pro');

const BASE_URL = 'https://thesmartersiptv.com';

// Localized UI Chrome Dictionaries
const UI_STRINGS = {
  fr: {
    home: 'Accueil',
    channels: 'Chaînes',
    pricing: 'Tarifs',
    support: 'Support',
    getAccess: 'Accès Immédiat',
    viewPlans: 'Voir les abonnements',
    liveSupport: 'Support en direct',
    plansEyebrow: 'Abonnements 4K',
    plansH2: 'Choisissez votre formule',
    plansP: 'Accès immédiat à toutes les chaînes, films et séries en Ultra HD.',
    plansBtn: 'Consulter nos tarifs & commander',
    faqEyebrow: 'Questions fréquentes',
    faqSuffix: 'Réponses à vos questions',
    footerDesc: "Fournisseur IPTV premium et guides d'installation officiels pour l'application IPTV Smarters Pro sur tous vos écrans connectés.",
    navHeading: 'Navigation',
    legalHeading: 'Légal & Support',
    terms: "Conditions d'utilisation",
    privacy: 'Confidentialité',
    contact: 'Contactez-nous'
  },
  de: {
    home: 'Startseite',
    channels: 'Sender',
    pricing: 'Preise',
    support: 'Support',
    getAccess: 'Sofort Freischalten',
    viewPlans: 'Preise & Pakete ansehen',
    liveSupport: 'Live-Support kontaktieren',
    plansEyebrow: '4K IPTV Abonnements',
    plansH2: 'Wählen Sie Ihr passendes Paket',
    plansP: 'Sofortiger Zugriff auf alle Sender, Bundesliga und Serien in Ultra HD.',
    plansBtn: 'Preise einsehen & bestellen',
    faqEyebrow: 'Häufig gestellte Fragen',
    faqSuffix: 'Antworten auf Ihre Fragen',
    footerDesc: 'Führender IPTV-Anbieter und offizielle Einrichtungsanleitungen für IPTV Smarters Pro auf allen Geräten.',
    navHeading: 'Navigation',
    legalHeading: 'Rechtliches & Support',
    terms: 'Nutzungsbedingungen',
    privacy: 'Datenschutz',
    contact: 'Kontakt aufnehmen'
  },
  es: {
    home: 'Inicio',
    channels: 'Canales',
    pricing: 'Precios',
    support: 'Soporte',
    getAccess: 'Acceso Inmediato',
    viewPlans: 'Ver planes y precios',
    liveSupport: 'Soporte en directo',
    plansEyebrow: 'Suscripciones 4K',
    plansH2: 'Elige tu fórmula ideal',
    plansP: 'Acceso inmediato a todos los canales de fútbol, películas y series en Ultra HD.',
    plansBtn: 'Consultar tarifas y ordenar',
    faqEyebrow: 'Preguntas frecuentes',
    faqSuffix: 'Respuestas a tus dudas',
    footerDesc: 'Proveedor IPTV de referencia y guías oficiales de instalación para IPTV Smarters Pro en todos tus dispositivos.',
    navHeading: 'Navegación',
    legalHeading: 'Legal y Soporte',
    terms: 'Condiciones de uso',
    privacy: 'Privacidad',
    contact: 'Contáctanos'
  },
  it: {
    home: 'Home',
    channels: 'Canali',
    pricing: 'Prezzi',
    support: 'Supporto',
    getAccess: 'Accesso Immediato',
    viewPlans: 'Vedi i piani',
    liveSupport: 'Supporto in tempo reale',
    plansEyebrow: 'Abbonamenti 4K',
    plansH2: 'Scegli il tuo piano ideale',
    plansP: 'Accesso istantaneo a tutti i canali Serie A, cinema e serie in Ultra HD.',
    plansBtn: 'Consulta i prezzi e ordina',
    faqEyebrow: 'Domande frequenti',
    faqSuffix: 'Risposte alle tue domande',
    footerDesc: 'Fornitore IPTV premium e guide ufficiali di installazione per IPTV Smarters Pro su ogni dispositivo.',
    navHeading: 'Navigazione',
    legalHeading: 'Legale e Supporto',
    terms: 'Termini di servizio',
    privacy: 'Privacy Policy',
    contact: 'Contattaci'
  },
  nl: {
    home: 'Home',
    channels: 'Zenders',
    pricing: 'Prijzen',
    support: 'Klantenservice',
    getAccess: 'Direct Starten',
    viewPlans: 'Bekijk abonnementen',
    liveSupport: 'Live klantenondersteuning',
    plansEyebrow: '4K IPTV Pakketten',
    plansH2: 'Kies uw gewenste abonnement',
    plansP: 'Directe toegang tot alle zenders, Eredivisie, Formule 1 en films in Ultra HD.',
    plansBtn: 'Tarieven bekijken & bestellen',
    faqEyebrow: 'Veelgestelde vragen',
    faqSuffix: 'Antwoorden op uw vragen',
    footerDesc: 'Hoogwaardige IPTV provider en officiële installatiehandleidingen voor IPTV Smarters Pro op al uw schermen.',
    navHeading: 'Navigatie',
    legalHeading: 'Juridisch & Hulp',
    terms: 'Gebruiksvoorwaarden',
    privacy: 'Privacybeleid',
    contact: 'Neem contact op'
  }
};

// High-Volume / Low-KD International Keyword Clusters
const internationalClusters = [
  // 🇫🇷 FRENCH CLUSTER (/fr/...)
  {
    lang: 'fr',
    langName: 'Français',
    slug: 'abonnement-iptv',
    keyword: 'Abonnement IPTV',
    volume: 22200,
    kd: 0,
    intent: 'Commercial',
    title: "Abonnement IPTV 4K — Chaînes en Direct & VOD Sans Coupure",
    desc: "Abonnement IPTV haute performance pour IPTV Smarters Pro. Profitez de plus de 20 000 chaînes 4K/FHD, films et séries VOD avec technologie anti-freeze.",
    heroTitle: "Abonnement IPTV Premium 4K",
    heroDesc: "Découvrez l'abonnement IPTV de référence en France et en Europe. Conçu spécifiquement pour une compatibilité parfaite avec l'application IPTV Smarters Pro, vos Smart TV, FireStick et smartphones.",
    sections: [
      {
        h2: "Serveurs Stables Haute Vitesse & Anti-Coupure",
        p: "Notre infrastructure serveur équilibrée garantit un streaming fluide sans mise en mémoire tampon, même pendant les grands événements sportifs en direct (Ligue des Champions, Ligue 1, Formule 1)."
      },
      {
        h2: "Guide EPG & Replay Intégrés",
        p: "Bénéficiez d'un guide électronique des programmes (EPG) complet et actualisé en continu, ainsi que du TV Catchup pour ne plus jamais manquer vos émissions préférées."
      },
      {
        h2: "Activation Instantanée via Xtream Codes",
        p: "Recevez vos identifiants sécurisés (URL serveur, nom d'utilisateur et mot de passe) immédiatement par e-mail après confirmation de votre commande."
      }
    ],
    faqs: [
      {
        q: "Comment fonctionne l'abonnement IPTV avec Smarters Pro ?",
        a: "Il vous suffit de télécharger IPTV Smarters Pro sur votre appareil, de cliquer sur 'Connexion avec l'API Xtream Codes' et d'entrer les identifiants reçus par e-mail pour accéder instantanément à vos chaînes."
      },
      {
        q: "Quels sont les appareils compatibles ?",
        a: "Notre abonnement fonctionne sur Smart TV (Samsung, LG, Philips), Amazon Fire TV Stick, Android Box, smartphones et tablettes (iOS/Android), ainsi que sur PC et Mac."
      },
      {
        q: "Le service est-il compatible avec les VPN ?",
        a: "Oui, notre service IPTV est 100% compatible avec tous les fournisseurs de VPN majeurs pour garantir votre confidentialité et contourner les bridages des opérateurs."
      }
    ]
  },
  {
    lang: 'fr',
    langName: 'Français',
    slug: 'meilleur-iptv-france',
    keyword: 'Meilleur IPTV France',
    volume: 6600,
    kd: 4,
    intent: 'Commercial',
    title: "Meilleur IPTV France 2026 — Fournisseur N°1 Testé & Approuvé",
    desc: "Classement du meilleur IPTV en France : qualité 4K UHD, zapping ultra-rapide et support 24/7 pour IPTV Smarters Pro et Fire TV.",
    heroTitle: "Le Meilleur Fournisseur IPTV en France",
    heroDesc: "Optez pour la qualité supérieure avec notre réseau CDN premium dédié aux chaînes françaises et internationales en Full HD et 4K 60FPS.",
    sections: [
      {
        h2: "Qualité d'Image 4K & Son Dolby Digital",
        p: "Profitez de flux vidéo sans compression agressive pour une netteté cristalline sur vos écrans 4K et téléviseurs grand format."
      },
      {
        h2: "Bibliothèque VOD Complète Mise à Jour",
        p: "Accédez à plus de 60 000 films et séries récents avec choix des pistes audio en français et sous-titres multilingues."
      },
      {
        h2: "Assistance Technique Réactive 24/7",
        p: "Notre équipe technique vous accompagne pas à pas pour la configuration de vos applications et la résolution rapide de vos questions."
      }
    ],
    faqs: [
      {
        q: "Pourquoi nous choisir comme meilleur IPTV en France ?",
        a: "Nous investissons dans des serveurs dédiés non saturés pour offrir une stabilité de 99,9%, un support technique en français et un catalogue continuellement enrichi."
      },
      {
        q: "Puis-je tester avant de m'engager sur un abonnement annuel ?",
        a: "Oui, nous proposons différentes durées d'abonnement (1 mois, 3 mois, 6 mois, 12 mois) vous permettant de vérifier la qualité sur vos équipements avant un engagement à long terme."
      }
    ]
  },
  {
    lang: 'fr',
    langName: 'Français',
    slug: 'installer-iptv-smarters-sur-firestick',
    keyword: 'Installer IPTV Smarters sur FireStick',
    volume: 4400,
    kd: 0,
    intent: 'Informational/Commercial',
    title: "Comment Installer IPTV Smarters Pro sur FireStick — Tutoriel 2026",
    desc: "Guide étape par étape pour installer et configurer IPTV Smarters Pro sur Amazon Fire TV Stick via l'application Downloader.",
    heroTitle: "Installation IPTV Smarters sur Fire TV Stick",
    heroDesc: "Tutoriel complet et facile pour télécharger l'APK officiel IPTV Smarters Pro sur FireStick et activer vos identifiants Xtream Codes en moins de 3 minutes.",
    sections: [
      {
        h2: "Étape 1 : Installer l'application Downloader",
        p: "Depuis l'écran d'accueil de votre FireStick, rendez-vous dans 'Rechercher', tapez 'Downloader' et installez l'application officielle orange."
      },
      {
        h2: "Étape 2 : Activer les sources inconnues",
        p: "Allez dans Paramètres > Ma Fire TV > Options pour les développeurs > Installer les applications inconnues, puis activez Downloader."
      },
      {
        h2: "Étape 3 : Télécharger et configurer l'APK",
        p: "Ouvrez Downloader, saisissez le code de téléchargement rapide Smarters Pro, installez l'application, puis connectez-vous avec vos identifiants 4K."
      }
    ],
    faqs: [
      {
        q: "L'application IPTV Smarters Pro est-elle gratuite sur FireStick ?",
        a: "Oui, le lecteur IPTV Smarters Pro est gratuit au téléchargement. Il vous suffit ensuite d'y insérer votre abonnement pour visionner les chaînes."
      },
      {
        q: "Que faire en cas de message 'Échec d'autorisation' sur FireStick ?",
        a: "Vérifiez attentivement qu'aucun espace ou barre oblique (/) inutile n'a été inséré à la fin de l'URL du serveur, et assurez-vous que votre abonnement est bien actif."
      }
    ]
  },

  // 🇩🇪 GERMAN CLUSTER (/de/...)
  {
    lang: 'de',
    langName: 'Deutsch',
    slug: 'iptv-kaufen',
    keyword: 'IPTV Kaufen',
    volume: 12100,
    kd: 4,
    intent: 'Commercial',
    title: "IPTV Kaufen 2026 — Premium IPTV Abo für Smarters Pro in 4K",
    desc: "IPTV kaufen für Deutschland, Österreich und Schweiz. Über 20.000 Live-Sender, Bundesliga in 4K 60FPS und VOD ohne Ruckeln.",
    heroTitle: "IPTV Kaufen: Schnell, Stabil & in 4K",
    heroDesc: "Holen Sie sich das führende IPTV-Abonnement im deutschsprachigen Raum. Entwickelt für reibungslose Wiedergabe auf IPTV Smarters Pro, Smart TV und Fire TV Stick.",
    sections: [
      {
        h2: "Anti-Puffer-Technologie für Live-Sport",
        p: "Dank unseres modernen Server-Netzwerks genießen Sie Bundesliga, Champions League und Motorsport in gestochen scharfem 4K UHD ohne Ladezeiten."
      },
      {
        h2: "Sofortige Freischaltung per Xtream Codes",
        p: "Nach erfolgreicher Bestellung erhalten Sie Ihre Zugangsdaten (Server-URL, Benutzername, Passwort) in wenigen Augenblicken per E-Mail zugestellt."
      },
      {
        h2: "Deutsche Sender & Internationale Vielfalt",
        p: "Umfassendes Programm inklusive aller öffentlich-rechtlichen und privaten Sender in HD/FHD sowie einer riesigen Mediathek aus Filmen und Serien."
      }
    ],
    faqs: [
      {
        q: "Wie richte ich mein IPTV Abo nach dem Kauf ein?",
        a: "Öffnen Sie IPTV Smarters Pro auf Ihrem Gerät, wählen Sie 'Login with Xtream Codes API' und tragen Sie die Zugangsdaten aus Ihrer Bestätigungsmail ein."
      },
      {
        q: "Funktioniert das IPTV Abo mit VPN?",
        a: "Ja, unser Service ist vollständig kompatibel mit gängigen VPN-Diensten für maximale Anonymität und unterbrechungsfreies Streaming."
      }
    ]
  },
  {
    lang: 'de',
    langName: 'Deutsch',
    slug: 'bester-iptv-anbieter',
    keyword: 'Bester IPTV Anbieter',
    volume: 9900,
    kd: 8,
    intent: 'Commercial',
    title: "Bester IPTV Anbieter Deutschland — Test & Vergleich 2026",
    desc: "Entdecken Sie den besten IPTV Anbieter für deutsche Nutzer. Getestete Serverstabilität, 4K Qualität, EPG Programmvorschau und 24/7 Support.",
    heroTitle: "Ihr Bester IPTV Anbieter im Vergleich",
    heroDesc: "Verlässliche Übertragungen, modernste Codecs und kundenfreundlicher Service machen uns zur ersten Wahl für IPTV-Streaming.",
    sections: [
      {
        h2: "99,9% Server-Verfügbarkeit",
        p: "Unsere Load-Balancing-Technologie leitet Ihren Stream automatisch über den schnellsten Serverknoten, um Ruckler zur Prime-Time zu verhindern."
      },
      {
        h2: "Kompatibel mit allen Smart TVs & Streaming-Sticks",
        p: "Optimiert für Samsung Tizen, LG webOS, Amazon Fire TV, Android TV Boxen, Apple TV und PC."
      },
      {
        h2: "Vollständiger EPG Programm-Guide",
        p: "Übersichtliche elektronische Programmzeitschrift (EPG), damit Sie stets wissen, was auf Ihren Lieblingssendern läuft."
      }
    ],
    faqs: [
      {
        q: "Was zeichnet den besten IPTV Anbieter aus?",
        a: "Hohe Bandbreite, dedizierte Server zur Vermeidung von Überlastung, aktuelle EPG-Daten und ein schneller technischer Kundendienst."
      }
    ]
  },

  // 🇪🇸 SPANISH CLUSTER (/es/...)
  {
    lang: 'es',
    langName: 'Español',
    slug: 'comprar-iptv-espana',
    keyword: 'Comprar IPTV España',
    volume: 4400,
    kd: 0,
    intent: 'Commercial',
    title: "Comprar IPTV España 2026 — Servicio IPTV Estable en 4K Sin Cortes",
    desc: "Comprar IPTV en España para IPTV Smarters Pro. Fútbol en vivo (LaLiga, Champions), más de 20.000 canales 4K y películas VOD sin interrupciones.",
    heroTitle: "Comprar IPTV España en Calidad 4K",
    heroDesc: "La suscripción IPTV más estable para España y Latinoamérica. Máxima fluidez en retransmisiones deportivas en directo y cine a la carta.",
    sections: [
      {
        h2: "Fútbol en Directo y Deportes en 60FPS",
        p: "Disfruta de todos los partidos de LaLiga, competiciones europeas y eventos PPV con tecnología anti-buffering que elimina el retardo."
      },
      {
        h2: "Activación Inmediata con Xtream Codes",
        p: "Recibe los datos de conexión directamente en tu correo electrónico al instante para empezar a disfrutar en Smart TV o FireStick."
      },
      {
        h2: "Compatibilidad Total con Dispositivos",
        p: "Funciona perfectamente en televisores Samsung Tizen, LG webOS, dispositivos Amazon Fire TV, Android y dispositivos Apple."
      }
    ],
    faqs: [
      {
        q: "¿Cómo configuro mi suscripción IPTV en Smarters Pro?",
        a: "Abre IPTV Smarters Pro en tu tele o teléfono, selecciona 'Iniciar sesión con API Xtream Codes' e introduce los datos que te enviamos por email."
      },
      {
        q: "¿Puedo usar una VPN con mi suscripción?",
        a: "Sí, nuestro servicio IPTV es totalmente compatible con VPN para proteger tu privacidad y evitar posibles bloqueos de operadores de internet."
      }
    ]
  },
  {
    lang: 'es',
    langName: 'Español',
    slug: 'mejor-iptv-sin-cortes',
    keyword: 'Mejor IPTV Sin Cortes',
    volume: 3600,
    kd: 0,
    intent: 'Commercial',
    title: "Mejor IPTV Sin Cortes — Canales 4K Ultra HD y VOD España",
    desc: "Descubre el mejor servicio IPTV sin cortes para Smart TV y FireStick. Servidores dedicados con 99.9% de estabilidad y soporte continuo.",
    heroTitle: "El Mejor Servicio IPTV Sin Cortes",
    heroDesc: "Olvídate de la pantalla congelada. Nuestra arquitectura de servidores de alta velocidad ofrece una transmisión limpia e ininterrumpida.",
    sections: [
      {
        h2: "Tecnología Anti-Congelamiento",
        p: "Balanceo de carga inteligente que distribuye las conexiones entre nodos dedicados de alta capacidad."
      },
      {
        h2: "Guía de Programación EPG Actualizada",
        p: "Consulta los horarios y sinopsis de tus programas favoritos directamente desde la interfaz de tu reproductor."
      },
      {
        h2: "Catálogo VOD de Películas y Series en Español",
        p: "Miles de títulos actualizados semanalmente con audio en castellano, latino y versión original subtitulada."
      }
    ],
    faqs: [
      {
        q: "¿Qué velocidad de internet se recomienda para IPTV 4K sin cortes?",
        a: "Se recomienda una conexión estable de al menos 25-30 Mbps para streaming en calidad 4K Ultra HD y 15 Mbps para canales Full HD."
      }
    ]
  },

  // 🇮🇹 ITALIAN CLUSTER (/it/...)
  {
    lang: 'it',
    langName: 'Italiano',
    slug: 'abbonamento-iptv',
    keyword: 'Abbonamento IPTV',
    volume: 8100,
    kd: 2,
    intent: 'Commercial',
    title: "Abbonamento IPTV 4K — Serie A e Champions Senza Blocchi 2026",
    desc: "Abbonamento IPTV per IPTV Smarters Pro. Oltre 20.000 canali, Sky Sport, DAZN, cinema e serie TV in qualità 4K Ultra HD con server anti-blocco.",
    heroTitle: "Abbonamento IPTV Premium 4K",
    heroDesc: "La migliore IPTV in Italia per stabilità, supporto e qualità visiva. Goditi tutte le partite di calcio e i tuoi programmi preferiti senza rallentamenti.",
    sections: [
      {
        h2: "Server Dedicati Anti-Blocco",
        p: "Streaming stabile e fluido a 60FPS per Serie A, Champions League e Formula 1 anche nei momenti di picco."
      },
      {
        h2: "Attivazione Istantanea Xtream Codes",
        p: "Ricevi le tue credenziali di accesso immediatamente via email e WhatsApp per iniziare a guardare subito."
      }
    ],
    faqs: [
      {
        q: "Come si attiva l'abbonamento su IPTV Smarters Pro?",
        a: "Basta aprire l'app, scegliere 'Login con API Xtream Codes' e inserire i parametri ricevuti via email."
      }
    ]
  },

  // 🇳🇱 DUTCH CLUSTER (/nl/...)
  {
    lang: 'nl',
    langName: 'Nederlands',
    slug: 'iptv-kopen',
    keyword: 'IPTV Kopen',
    volume: 5400,
    kd: 3,
    intent: 'Commercial',
    title: "IPTV Kopen 2026 — Beste IPTV Abonnement Nederland & België",
    desc: "IPTV kopen voor IPTV Smarters Pro. Meer dan 20.000 zenders, Viaplay, Ziggo Sport, Eredivisie in 4K en VOD zonder haperingen.",
    heroTitle: "IPTV Kopen: Betrouwbaar & Snel in 4K",
    heroDesc: "Het toonaangevende IPTV abonnement voor Nederland en Vlaanderen. Geen haperingen, supersnelle zaptijden en directe activatie.",
    sections: [
      {
        h2: "Anti-Freeze Servers voor Live Sport",
        p: "Geniet van Formule 1, Eredivisie en Champions League in haarscherpe 4K 60FPS beeldkwaliteit."
      },
      {
        h2: "Directe Levering via E-mail",
        p: "Na betaling ontvangt u binnen 5 minuten uw Xtream Codes inloggegevens om direct te streamen."
      }
    ],
    faqs: [
      {
        q: "Hoe installeer ik het abonnement op mijn TV?",
        a: "Open IPTV Smarters Pro, klik op 'Login with Xtream Codes API' en voer de ontvangen inloggegevens in."
      }
    ]
  }
];

function generatePageHtml(c) {
  const pageUrl = `${BASE_URL}/${c.lang}/${c.slug}/`;
  const ui = UI_STRINGS[c.lang] || UI_STRINGS.fr;

  const sectionsHtml = c.sections.map(s => `
        <section>
          <h2>${s.h2}</h2>
          <p>${s.p}</p>
        </section>`).join('');

  const faqsHtml = c.faqs.map((f, i) => `
          <details class="faq-item"${i === 0 ? ' open' : ''}>
            <summary class="faq-summary">
              <span class="faq-num">0${i + 1}</span>
              <span class="faq-q">${f.q}</span>
              <span class="faq-chevron">⌄</span>
            </summary>
            <div class="faq-answer">
              <p>${f.a}</p>
            </div>
          </details>`).join('');

  const faqSchemaItems = c.faqs.map(f => `{
              "@type": "Question",
              "name": ${JSON.stringify(f.q)},
              "acceptedAnswer": {
                "@type": "Answer",
                "text": ${JSON.stringify(f.a)}
              }
            }`).join(',\n            ');

  return `<!doctype html>
<html lang="${c.lang}">
<head>
  <!-- programmatic-multilingual-page:v2 -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${c.title}</title>
  <meta name="description" content="${c.desc}">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <link rel="canonical" href="${pageUrl}">
  <link rel="icon" type="image/svg+xml" href="/assets/images/brand/favicon.svg">
  <link rel="apple-touch-icon" href="/assets/images/brand/logo.png">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="${c.title}">
  <meta property="og:description" content="${c.desc}">
  <meta property="og:url" content="${pageUrl}">
  <meta property="og:image" content="${BASE_URL}/og-image.jpg">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${c.title}">
  <meta name="twitter:description" content="${c.desc}">
  <meta name="twitter:image" content="${BASE_URL}/og-image.jpg">

  <!-- Stylesheets -->
  <link rel="stylesheet" href="/assets/css/main.css">
  <link rel="stylesheet" href="/assets/css/product-pages.css">
  <link rel="stylesheet" href="/assets/css/modern-ui.css">
  <link rel="stylesheet" href="/assets/css/heroui.css">

  <!-- JSON-LD Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "${pageUrl}#webpage",
        "url": "${pageUrl}",
        "name": ${JSON.stringify(c.title)},
        "description": ${JSON.stringify(c.desc)},
        "inLanguage": "${c.lang}"
      },
      {
        "@type": "Product",
        "@id": "${pageUrl}#product",
        "name": ${JSON.stringify(c.keyword)},
        "image": "${BASE_URL}/assets/images/brand/logo.png",
        "description": ${JSON.stringify(c.desc)},
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "EUR",
          "lowPrice": "14.99",
          "highPrice": "69.99",
          "offerCount": "4",
          "availability": "https://schema.org/InStock",
          "url": "${BASE_URL}/${c.lang}/pricing/"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "${pageUrl}#faq",
        "mainEntity": [
          ${faqSchemaItems}
        ]
      }
    ]
  }
  </script>
</head>
<body>
  <header class="kw-header">
    <a href="/${c.lang}/" class="kw-brand">IPTV Smarters Pro</a>
    <nav>
      <a href="/${c.lang}/">${ui.home}</a>
      <a href="/${c.lang}/channels/">${ui.channels}</a>
      <a href="/${c.lang}/pricing/">${ui.pricing}</a>
      <a href="/${c.lang}/contact/">${ui.support}</a>
    </nav>
    <a href="/${c.lang}/pricing/" class="kw-trial">${ui.getAccess}</a>
  </header>

  <main>
    <div class="breadcrumbs">
      <a href="/${c.lang}/">${ui.home}</a>
      <span>/</span>
      <a href="/${c.lang}/">${c.langName}</a>
      <span>/</span>
      <span>${c.keyword}</span>
    </div>

    <section class="kw-hero">
      <span class="eyebrow">${c.intent} • Volume ${c.volume.toLocaleString()}/mo</span>
      <h1>${c.heroTitle}</h1>
      <p>${c.heroDesc}</p>
      <div class="hero-actions">
        <a href="/${c.lang}/pricing/">${ui.viewPlans}</a>
        <a href="/${c.lang}/contact/">${ui.liveSupport}</a>
      </div>
    </section>

    <div class="kw-copy">
      ${sectionsHtml}
    </div>

    <!-- Pricing Section Shortcut -->
    <section class="plans" id="plans">
      <span class="eyebrow">${ui.plansEyebrow}</span>
      <h2>${ui.plansH2}</h2>
      <p>${ui.plansP}</p>
      <div class="hero-actions" style="margin-top:20px;">
        <a href="/${c.lang}/pricing/">${ui.plansBtn}</a>
      </div>
    </section>

    <!-- FAQ Accordion -->
    <section class="faq">
      <span class="eyebrow">${ui.faqEyebrow}</span>
      <h2>${c.keyword} : ${ui.faqSuffix}</h2>
      <div class="faq-list">
        ${faqsHtml}
      </div>
    </section>
  </main>

  <footer>
    <div>
      <a href="/${c.lang}/" class="kw-brand" style="display:inline-block;margin-bottom:12px;">IPTV Smarters Pro</a>
      <p style="font-size:13px;max-width:320px;line-height:1.6;">${ui.footerDesc}</p>
    </div>
    <nav>
      <strong style="color:#fff;margin-bottom:8px;display:block;">${ui.navHeading}</strong>
      <a href="/${c.lang}/">${ui.home}</a>
      <a href="/${c.lang}/pricing/">${ui.pricing}</a>
      <a href="/${c.lang}/channels/">${ui.channels}</a>
      <a href="/${c.lang}/features/">Features</a>
    </nav>
    <nav>
      <strong style="color:#fff;margin-bottom:8px;display:block;">${ui.legalHeading}</strong>
      <a href="/${c.lang}/terms/">${ui.terms}</a>
      <a href="/${c.lang}/privacy/">${ui.privacy}</a>
      <a href="/${c.lang}/contact/">${ui.contact}</a>
    </nav>
  </footer>
</body>
</html>`;
}

export function run() {
  console.log(`Generating ${internationalClusters.length} multilingual programmatic SEO landing pages...`);

  let count = 0;
  for (const c of internationalClusters) {
    const dirPath = path.join(sourceDir, c.lang, c.slug);
    fs.mkdirSync(dirPath, { recursive: true });

    const filePath = path.join(dirPath, 'index.html');
    const html = generatePageHtml(c);
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`- Created: /${c.lang}/${c.slug}/ (Vol: ${c.volume.toLocaleString()}/mo, KD: ${c.kd}%)`);
    count++;
  }

  console.log(`Successfully generated ${count} multilingual programmatic pages with native localized chrome!`);
}

// Run if called directly
run();
