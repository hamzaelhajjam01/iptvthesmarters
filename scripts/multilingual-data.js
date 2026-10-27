/**
 * Comprehensive Multilingual Localization Data
 * Incorporating DataForSEO Keywords and Native Nuances across 10 Global Locales
 */

export const BASE_URL = 'https://thesmartersiptv.com';

export const LANGUAGES = [
  {
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷',
    dir: 'ltr',
    locale: 'fr_FR',
    whatsappText: 'Bonjour%20IPTV%20Smarters%20Pro%2C%20je%20souhaite%20commander%20un%20abonnement%20IPTV%204K.',
    keywords: ['Abonnement IPTV', 'Meilleur IPTV France', 'IPTV Smarters Pro 4K', 'Chaînes IPTV France', 'Prix abonnement IPTV', 'IPTV sans coupure'],
    nav: {
      home: 'Accueil',
      services: 'Services IPTV',
      features: 'Fonctionnalités',
      channels: 'Chaînes',
      pricing: 'Tarifs',
      guides: 'Guides',
      contact: 'Contact',
      cta: 'Commencer',
      support: 'Assistance'
    },
    carousel: {
      badge: 'VOD 4K & Séries',
      title: 'Streaming Films Blockbusters & Séries Incontournables en 4K',
      subtitle: 'Plus de 60 000 films et séries récents en VOD Ultra-Haute Définition avec pistes audio en français et zapping instantané.',
      moviesTitle: 'Films Blockbusters Populaires (2023 - 2024)',
      seriesTitle: 'Séries TV Tendances & Cultes',
      sportsTitle: 'Sport en Direct & Grandes Ligues en 60FPS',
      sportsSub: 'Diffusez le football en direct (Ligue des Champions, Ligue 1, Premier League), la Formule 1, l\'UFC et la NBA en 4K 60FPS sans aucune coupure.'
    },
    pricing: {
      metaTitle: 'Abonnement IPTV Smarters Pro — Tarifs Dès 14,95€ | Serveurs 4K Stables',
      metaDesc: 'Consultez les prix de notre abonnement IPTV Smarters Pro 4K. Plus de 20 000 chaînes en direct, VOD illimitée, anti-coupure et activation instantanée.',
      kicker: 'Formules d\'Abonnement',
      h1: 'Des tarifs simples, <br class="hidden md:block"><span class="text-gradient">transparents.</span>',
      subtitle: 'Accédez en illimité à toutes les chaînes IPTV Smarters Pro, films et séries en 4K. Paiement sécurisé et activation immédiate.',
      deviceTabs: ['1 Appareil', '2 Appareils', '3 Appareils'],
      savePercent: ['Économisez 14%', 'Économisez 33%', 'Économisez 50%', 'Économisez 67%'],
      popularBadge: 'Le Plus Choisi',
      diamondBadge: 'Formule Diamant · Meilleure Valeur',
      diamondRate: 'Soit seulement',
      plans: [
        { months: 1, name: '1 Mois', price: '14.95€', rawPrice: 14.95 },
        { months: 3, name: '3 Mois', price: '29.95€', rawPrice: 29.95 },
        { months: 6, name: '6 Mois', price: '44.95€', rawPrice: 44.95 },
        { months: 12, name: '12 Mois', price: '59.95€', rawPrice: 59.95 },
        { months: 24, name: '24 Mois', price: '99.95€', rawPrice: 99.95 }
      ],
      features: [
        'Toutes les chaînes premium (France & Monde)',
        'VOD films & séries 4K/FHD en illimité',
        'Compatible tous supports (Smart TV, FireStick, iOS/Android)',
        'Flux 4K UHD 60FPS avec technologie anti-freeze',
        'Guide TV (EPG) & Replay intégrés',
        'Support client prioritaire 24h/24 et 7j/7'
      ],
      ctaButton: 'Continuer sur WhatsApp',
      trustCards: [
        {
          title: 'Paiements Sécurisés',
          desc: 'Transactions chiffrées de bout en bout. Nous acceptons les cartes bancaires internationales et les cryptomonnaies.'
        },
        {
          title: 'Assistance Technique 24/7',
          desc: 'Notre équipe d\'experts est joignable en continu par WhatsApp et Telegram pour vous guider lors de l\'installation.'
        },
        {
          title: 'Activation Instantanée',
          desc: 'Vos identifiants Xtream Codes vous sont transmis dans les minutes suivant votre commande pour commencer immédiatement.'
        }
      ],
      faqs: [
        {
          q: "L'application IPTV Smarters Pro est-elle gratuite ?",
          a: "Oui, le lecteur IPTV Smarters Pro est gratuit à télécharger. Toutefois, il nécessite un abonnement actif auprès d'un fournisseur comme nous pour débloquer le flux des chaînes et le catalogue VOD."
        },
        {
          q: "Comment activer mes codes sur IPTV Smarters Pro ?",
          a: "Lancez l'application, sélectionnez 'Connexion via API Xtream Codes', puis renseignez le nom de votre choix, l'identifiant, le mot de passe et l'URL du serveur transmis après votre commande."
        },
        {
          q: "Puis-je utiliser l'abonnement sur plusieurs écrans en même temps ?",
          a: "Oui, si vous choisissez notre formule 2 ou 3 appareils, vous pouvez visionner des programmes simultanément sur différents téléviseurs ou smartphones sans conflit."
        },
        {
          q: "Le service fonctionne-t-il avec un VPN ?",
          a: "Absolument. Nos serveurs sont 100% compatibles avec tous les VPN (NordVPN, ExpressVPN, Surfshark, etc.) pour protéger votre vie privée et contourner les restrictions des FAI."
        }
      ]
    },
    channels: {
      metaTitle: 'Liste des Chaînes IPTV Smarters Pro 2026 — Plus de 20 000 Chaînes 4K',
      metaDesc: 'Consultez la liste complète des chaînes IPTV : TNT française, beIN Sports, Canal+, RMC, chaînes internationales, cinéma et séries en direct 4K.',
      kicker: 'Catalogue en Direct',
      h1: 'Toutes Vos Chaînes <span class="text-gradient">Favorites en 4K.</span>',
      subtitle: 'Plus de 20 000 chaînes en direct couvrant le sport, le cinéma, l\'actualité et les bouquets internationaux en qualité Ultra HD 60FPS.',
      searchPlaceholder: 'Rechercher une chaîne (ex. Canal+, beIN Sports, TF1, RMC)...',
      categories: [
        { id: 'all', name: 'Toutes' },
        { id: 'sports', name: 'Sport & Ligues' },
        { id: 'movies', name: 'Cinéma & VOD' },
        { id: 'entertainment', name: 'Divertissement' },
        { id: 'news', name: 'Actualités & Docs' },
        { id: 'kids', name: 'Enfants & Famille' },
        { id: 'international', name: 'International' }
      ],
      badgeText: 'Serveurs Haute Disponibilité 99.9%',
      sampleChannels: [
        { name: 'Canal+ 4K UHD', cat: 'movies', quality: '4K 60FPS' },
        { name: 'beIN Sports 1 FHD', cat: 'sports', quality: '1080p 60FPS' },
        { name: 'beIN Sports 2 FHD', cat: 'sports', quality: '1080p 60FPS' },
        { name: 'RMC Sport 1 4K', cat: 'sports', quality: '4K 60FPS' },
        { name: 'TF1 4K Direct', cat: 'entertainment', quality: '4K HDR' },
        { name: 'M6 Full HD', cat: 'entertainment', quality: '1080p' },
        { name: 'Canal+ Cinéma', cat: 'movies', quality: '1080p' },
        { name: 'Canal+ Grand Écran', cat: 'movies', quality: '1080p' },
        { name: 'Eurosport 1 4K', cat: 'sports', quality: '4K 60FPS' },
        { name: 'DAZN 1 Live', cat: 'sports', quality: '1080p 60FPS' },
        { name: 'National Geographic', cat: 'news', quality: '1080p' },
        { name: 'Discovery Science', cat: 'news', quality: '1080p' },
        { name: 'Disney Channel FHD', cat: 'kids', quality: '1080p' },
        { name: 'Cartoon Network', cat: 'kids', quality: '1080p' },
        { name: 'Sky Sports Main Event', cat: 'international', quality: '4K 60FPS' },
        { name: 'Sky Cinema Premiere', cat: 'international', quality: '1080p' }
      ]
    },
    features: {
      metaTitle: 'Fonctionnalités IPTV Smarters Pro — Streaming 4K, Anti-Freeze & Multi-Écrans',
      metaDesc: 'Découvrez les atouts de notre service IPTV pour Smarters Pro : technologie anti-coupure, serveurs haute vitesse, guide EPG et replay 7 jours.',
      kicker: 'Technologie & Performance',
      h1: 'L\'Excellence du Streaming <br><span class="text-gradient">Sans Aucune Coupure.</span>',
      subtitle: 'Une infrastructure réseau équilibrée sur plus de 50 nœuds mondiaux pour une fluidité absolue sur Smart TV, FireStick et PC.',
      items: [
        {
          title: 'Technologie Anti-Freeze 99.9%',
          desc: 'Notre algorithme de routage dynamique sélectionne instantanément le serveur le plus rapide pour éviter toute mise en mémoire tampon.'
        },
        {
          title: 'Flux 4K UHD Réel & 60FPS',
          desc: 'Qualité d\'image exceptionnelle sans compression agressive, idéale pour apprécier le sport rapide et les films en grand format.'
        },
        {
          title: 'Multi-Écran Quad-View',
          desc: 'Visionnez jusqu\'à 4 événements sportifs en direct simultanément sur un seul écran grâce au mode multi-flux de Smarters Pro.'
        },
        {
          title: 'Guide TV Électronique (EPG) Précis',
          desc: 'Programmation complète et mise à jour en temps réel avec résumés des émissions et horaires exacts.'
        },
        {
          title: 'TV Catch-Up & Replay 7 Jours',
          desc: 'Ne ratez aucun match ni émission : revenez en arrière jusqu\'à 7 jours pour revoir vos programmes à la demande.'
        },
        {
          title: 'Compatibilité Totale & VPN Friendly',
          desc: 'Compatible avec Smart TV (Samsung, LG), Android TV, Fire TV, Apple TV, MAG, PC ainsi que tous les VPN du marché.'
        }
      ]
    },
    contact: {
      metaTitle: 'Contact & Support IPTV Smarters Pro — Assistance Réactive 24/7',
      metaDesc: 'Besoin d\'aide pour votre abonnement IPTV ou la configuration de Smarters Pro ? Contactez notre équipe technique disponible 24h/24 via WhatsApp et Telegram.',
      kicker: 'Assistance Client 24/7',
      h1: 'Nous Sommes Là Pour <span class="text-gradient">Vous Aider.</span>',
      subtitle: 'Notre équipe d\'assistance technique répond à toutes vos questions en moins de 10 minutes.'
    }
  },

  {
    code: 'de',
    name: 'Deutsch',
    flag: '🇩🇪',
    dir: 'ltr',
    locale: 'de_DE',
    whatsappText: 'Hallo%20IPTV%20Smarters%20Pro%20Support%2C%20ich%20m%C3%B6chte%20ein%20IPTV%20Abo%20f%C3%BCr%20Deutschland%20bestellen.',
    keywords: ['IPTV Kaufen', 'Bester IPTV Anbieter', 'IPTV Deutschland 4K', 'IPTV Smarters Pro Deutsch', 'IPTV Senderliste', 'IPTV Preise'],
    nav: {
      home: 'Startseite',
      services: 'IPTV-Dienste',
      features: 'Funktionen',
      channels: 'Sender',
      pricing: 'Preise',
      guides: 'Anleitungen',
      contact: 'Kontakt',
      cta: 'Jetzt Starten',
      support: 'Support'
    },
    carousel: {
      badge: '4K VOD & Mediathek',
      title: 'Blockbuster-Filme & Top-Serien in 4K Streamen',
      subtitle: 'Über 60.000 aktuelle Filme und vollständige TV-Serien in brillanter Ultra-HD-Qualität mit deutscher Tonspur und rasanten Umschaltzeiten.',
      moviesTitle: 'Top Blockbuster-Filme (2023 - 2024)',
      seriesTitle: 'Beliebte TV-Serien & Staffeln',
      sportsTitle: 'Live-Sport & Top-Ligen in 60FPS',
      sportsSub: 'Bundesliga, UEFA Champions League, Formel 1, UFC und Premier League live in 4K 60FPS ohne Ruckeln und ohne Pufferung genießen.'
    },
    pricing: {
      metaTitle: 'IPTV Kaufen — Bester IPTV Anbieter Deutschland ab 14,95€ | 4K UHD',
      metaDesc: 'IPTV kaufen für Deutschland, Österreich und Schweiz. Über 20.000 Live-Sender, Bundesliga in 4K, riesige VOD-Auswahl und sofortige Freischaltung.',
      kicker: 'Abonnement-Modelle',
      h1: 'Einfache, transparente <br class="hidden md:block"><span class="text-gradient">Preise.</span>',
      subtitle: 'Voller Zugriff auf alle IPTV Smarters Pro Sender, Filme und Serien in 4K. Sichere Bezahlung und Freischaltung in wenigen Minuten.',
      deviceTabs: ['1 Gerät', '2 Geräte', '3 Geräte'],
      savePercent: ['14% Sparen', '33% Sparen', '50% Sparen', '67% Sparen'],
      popularBadge: 'Am Beliebtesten',
      diamondBadge: 'Diamond-Plan · Bester Wert',
      diamondRate: 'Entspricht nur',
      plans: [
        { months: 1, name: '1 Monat', price: '14.95€', rawPrice: 14.95 },
        { months: 3, name: '3 Monate', price: '29.95€', rawPrice: 29.95 },
        { months: 6, name: '6 Monate', price: '44.95€', rawPrice: 44.95 },
        { months: 12, name: '12 Monate', price: '59.95€', rawPrice: 59.95 },
        { months: 24, name: '24 Monate', price: '99.95€', rawPrice: 99.95 }
      ],
      features: [
        'Alle deutschen Premium- & Pay-TV Sender (Sky, DAZN)',
        'Riesige VOD Film- & Serien-Mediathek in 4K',
        'Kompatibel mit allen Geräten (Smart TV, FireStick, PC)',
        'Anti-Freeze-Technologie für ruckelfreien Live-Sport',
        'EPG elektronischer Programmführer & Replay',
        'Technischer Kundenservice rund um die Uhr (24/7)'
      ],
      ctaButton: 'Weiter zu WhatsApp',
      trustCards: [
        {
          title: 'Sichere Zahlungsmethoden',
          desc: 'Geschützte Transaktionen mit modernster Verschlüsselung. Akzeptanz gängiger Kreditkarten sowie Krypto.'
        },
        {
          title: '24/7 Experten-Support',
          desc: 'Unser deutschsprachiger Support hilft Ihnen direkt über WhatsApp oder Telegram bei Einrichtung und Fragen.'
        },
        {
          title: 'Sofortige Bereitstellung',
          desc: 'Ihre Xtream Codes Zugangsdaten erhalten Sie unmittelbar nach dem Kauf per E-Mail zur sofortigen Nutzung.'
        }
      ],
      faqs: [
        {
          q: "Wie richte ich mein IPTV Abo nach dem Kauf ein?",
          a: "Öffnen Sie IPTV Smarters Pro auf Ihrem Gerät, wählen Sie 'Login with Xtream Codes API' und tragen Sie Benutzername, Passwort und Server-URL aus Ihrer Bestätigungsmail ein."
        },
        {
          q: "Funktioniert das IPTV Abo mit VPN?",
          a: "Ja, unser Service ist uneingeschränkt kompatibel mit führenden VPN-Anbietern für maximale Privatsphäre und Schutz vor Provider-Drosselungen."
        },
        {
          q: "Kann ich Bundesliga und Champions League ohne Ruckeln sehen?",
          a: "Ja, dank dedizierter Hochgeschwindigkeitsserver mit 60FPS-Übertragung laufen alle Top-Spiele ohne Ladekreise und Unterbrechungen."
        }
      ]
    },
    channels: {
      metaTitle: 'IPTV Senderliste Deutschland 2026 — Über 20.000 Sender in 4K',
      metaDesc: 'Vollständige IPTV Senderliste: Sky Sport, DAZN, Bundesliga, ARD, ZDF, Privatsender, VOD Filme und internationale Kanäle in Full HD & 4K.',
      kicker: 'Senderübersicht',
      h1: 'Erstklassige Sendervielfalt <span class="text-gradient">in 4K UHD.</span>',
      subtitle: 'Entdecken Sie über 20.000 Live-Sender aus Deutschland, Österreich, der Schweiz und aller Welt in gestochen scharfer 4K 60FPS Qualität.',
      searchPlaceholder: 'Sender suchen (z.B. Sky Sport, DAZN, ZDF, RTL)...',
      categories: [
        { id: 'all', name: 'Alle Sender' },
        { id: 'sports', name: 'Sport & Bundesliga' },
        { id: 'movies', name: 'Filme & Serien' },
        { id: 'entertainment', name: 'Unterhaltung' },
        { id: 'news', name: 'Nachrichten & Doku' },
        { id: 'kids', name: 'Kinder & Familie' },
        { id: 'international', name: 'International' }
      ],
      badgeText: '99.9% Server-Verfügbarkeit',
      sampleChannels: [
        { name: 'Sky Sport Bundesliga UHD', cat: 'sports', quality: '4K 60FPS' },
        { name: 'DAZN 1 Bar HD', cat: 'sports', quality: '1080p 60FPS' },
        { name: 'DAZN 2 Bar HD', cat: 'sports', quality: '1080p 60FPS' },
        { name: 'Sky Cinema Premiere HD', cat: 'movies', quality: '1080p' },
        { name: 'Sky Cinema Action HD', cat: 'movies', quality: '1080p' },
        { name: 'ZDF HD', cat: 'entertainment', quality: '1080p' },
        { name: 'Das Erste (ARD) HD', cat: 'entertainment', quality: '1080p' },
        { name: 'RTL UHD', cat: 'entertainment', quality: '4K HDR' },
        { name: 'ProSieben HD', cat: 'entertainment', quality: '1080p' },
        { name: 'Sky Sport F1 UHD', cat: 'sports', quality: '4K 60FPS' },
        { name: 'Discovery Channel HD', cat: 'news', quality: '1080p' },
        { name: 'National Geographic HD', cat: 'news', quality: '1080p' },
        { name: 'Disney Junior', cat: 'kids', quality: '1080p' },
        { name: 'Super RTL HD', cat: 'kids', quality: '1080p' },
        { name: 'ServusTV HD', cat: 'international', quality: '1080p' },
        { name: 'SRF zwei HD', cat: 'international', quality: '1080p' }
      ]
    },
    features: {
      metaTitle: 'IPTV Smarters Pro Funktionen — 4K 60FPS, Anti-Ruckel-Technik & EPG',
      metaDesc: 'Alle technischen Highlights für Smarters Pro im Überblick: Ausfallsicherheit, 4K Sport-Streams, Multi-Screen und 7-Tage Catch-Up.',
      kicker: 'Technik & Streaming-Vorteile',
      h1: 'High-End Streaming-Infrastruktur <br><span class="text-gradient">ohne Kompromisse.</span>',
      subtitle: 'Erstklassige Serverknoten in Frankfurt und Amsterdam sorgen für minimale Latenzzeiten und störungsfreie Wiedergabe.',
      items: [
        {
          title: '99.9% Anti-Puffer-Garantie',
          desc: 'Intelligentes Server-Clustering leitet Ihre Verbindung immer über den Server mit den geringsten Auslastungswerten.'
        },
        {
          title: 'Echtes 4K UHD & 60FPS',
          desc: 'Keine unscharfen Bilder: Sportübertragungen laufen mit vollen 60 Bildern pro Sekunde für flüssigste Ballbewegungen.'
        },
        {
          title: 'Multi-Screen Funktion',
          desc: 'Verfolgen Sie bis zu vier Live-Spiele gleichzeitig auf einem geteilten Bildschirm in der Smarters Pro App.'
        },
        {
          title: 'Vollständiger EPG Programmführer',
          desc: 'Stets aktuelle Programmvorschau für alle Sender mit Inhaltsangaben und Sendezeiten.'
        },
        {
          title: '7-Tage Replay & Catch-Up',
          desc: 'Verpasste Sendungen oder Spiele können Sie bis zu 7 Tage rückwirkend jederzeit starten.'
        },
        {
          title: 'Kompatibel mit allen Geräten & VPN',
          desc: 'Läuft problemlos auf Fire TV Stick, Samsung, LG webOS, Apple TV, PC und mit VPN-Schutz.'
        }
      ]
    },
    contact: {
      metaTitle: 'Kontakt & Kundenservice — IPTV Smarters Pro Support 24/7',
      metaDesc: 'Haben Sie Fragen zur Installation oder zu Ihrem Abonnement? Unser technischer Kundendienst steht Ihnen per WhatsApp und Telegram zur Verfügung.',
      kicker: 'Technischer Support 24/7',
      h1: 'Wir Sind Rund um die Uhr <span class="text-gradient">Für Sie Da.</span>',
      subtitle: 'Erhalten Sie schnelle und kompetente Antworten auf alle Einrichtungs- und Bestellfragen.'
    }
  },

  {
    code: 'es',
    name: 'Español',
    flag: '🇪🇸',
    dir: 'ltr',
    locale: 'es_ES',
    whatsappText: 'Hola%20soporte%20IPTV%20Smarters%20Pro%2C%20quiero%20contratar%20una%20suscripci%C3%B3n%20IPTV%20para%20Espa%C3%B1a.',
    keywords: ['Comprar IPTV España', 'Mejor IPTV Sin Cortes', 'IPTV Smarters Pro Español', 'Canales IPTV España', 'Suscripción IPTV 4K', 'Precios IPTV España'],
    nav: {
      home: 'Inicio',
      services: 'Servicios IPTV',
      features: 'Funciones',
      channels: 'Canales',
      pricing: 'Precios',
      guides: 'Guías',
      contact: 'Contacto',
      cta: 'Empezar Ahora',
      support: 'Soporte'
    },
    carousel: {
      badge: 'Cine & Series 4K',
      title: 'Películas de Estreno y Series Aclamadas en 4K',
      subtitle: 'Más de 60.000 títulos en VOD con audio en castellano y latino, calidad 4K UHD real y reproducción inmediata.',
      moviesTitle: 'Películas Más Taquilleras (2023 - 2024)',
      seriesTitle: 'Series de TV Más Populares y Tendencia',
      sportsTitle: 'Deportes en Vivo y Grandes Ligas en 60FPS',
      sportsSub: 'Sigue LaLiga EA Sports, Champions League, Fórmula 1, UFC y NBA en directo con tecnología anti-cortes y fluidez absoluta.'
    },
    pricing: {
      metaTitle: 'Comprar IPTV España — Mejor Servicio IPTV 4K Sin Cortes Desde 14,95€',
      metaDesc: 'Comprar IPTV para España con IPTV Smarters Pro. Más de 20.000 canales, fútbol en directo (LaLiga, Champions), películas VOD y activación inmediata.',
      kicker: 'Planes de Suscripción',
      h1: 'Precios simples, <br class="hidden md:block"><span class="text-gradient">transparentes.</span>',
      subtitle: 'Acceso ilimitado a todos los canales, películas y series en calidad 4K Ultra HD. Pagos seguros y entrega de credenciales al instante.',
      deviceTabs: ['1 Dispositivo', '2 Dispositivos', '3 Dispositivos'],
      savePercent: ['Ahorra 14%', 'Ahorra 33%', 'Ahorra 50%', 'Ahorra 67%'],
      popularBadge: 'Más Popular',
      diamondBadge: 'Plan Diamante · Máximo Ahorro',
      diamondRate: 'Equivale a solo',
      plans: [
        { months: 1, name: '1 Mes', price: '14.95€', rawPrice: 14.95 },
        { months: 3, name: '3 Meses', price: '29.95€', rawPrice: 29.95 },
        { months: 6, name: '6 Meses', price: '44.95€', rawPrice: 44.95 },
        { months: 12, name: '12 Meses', price: '59.95€', rawPrice: 59.95 },
        { months: 24, name: '24 Meses', price: '99.95€', rawPrice: 99.95 }
      ],
      features: [
        'Todos los canales españoles y mundiales (Movistar, DAZN)',
        'Catálogo de películas y series VOD en 4K/Full HD',
        'Compatible con Smart TV, FireStick, Android e iOS',
        'Fútbol en directo 60FPS con tecnología anti-cortes',
        'Guía EPG electrónica de programación y TV Catchup',
        'Atención al cliente personalizada y soporte 24/7'
      ],
      ctaButton: 'Continuar en WhatsApp',
      trustCards: [
        {
          title: 'Pagos 100% Seguros',
          desc: 'Pasarela de pago cifrada de máxima seguridad. Aceptamos tarjetas bancarias y criptomonedas.'
        },
        {
          title: 'Soporte Técnico Continuo',
          desc: 'Asistencia inmediata a través de WhatsApp y Telegram para guiarte paso a paso en la instalación.'
        },
        {
          title: 'Activación Inmediata',
          desc: 'Recibe tus datos de conexión (API Xtream Codes) en tu correo segundos después de confirmar tu pedido.'
        }
      ],
      faqs: [
        {
          q: "¿Cómo configuro mi suscripción en IPTV Smarters Pro?",
          a: "Abre la app, pulsa en 'Iniciar sesión con API Xtream Codes' y escribe el usuario, contraseña y URL del servidor que te enviamos al hacer tu pedido."
        },
        {
          q: "¿Se pueden ver partidos de LaLiga y Champions sin cortes?",
          a: "Sí, contamos con servidores dedicados y tecnología anti-buffering que garantizan transmisiones fluidas en 60FPS incluso en los partidos más concurridos."
        },
        {
          q: "¿Puedo usar una VPN con el servicio?",
          a: "Completamente. Nuestro servicio es compatible con todos los proveedores de VPN para garantizar tu privacidad y evitar posibles bloqueos de operadoras."
        }
      ]
    },
    channels: {
      metaTitle: 'Lista de Canales IPTV España 2026 — Más de 20.000 Canales 4K',
      metaDesc: 'Guía y lista completa de canales IPTV para España: Movistar LaLiga, DAZN, cine de estreno, canales internacionales y TDT en Full HD y 4K.',
      kicker: 'Canales en Directo',
      h1: 'Tus Canales Favoritos <span class="text-gradient">en Calidad 4K.</span>',
      subtitle: 'Disfruta de más de 20.000 canales de televisión en vivo con la programación deportiva y de entretenimiento más completa.',
      searchPlaceholder: 'Buscar canal (ej. Movistar LaLiga, DAZN, Antena 3)...',
      categories: [
        { id: 'all', name: 'Todos' },
        { id: 'sports', name: 'Deportes & Fútbol' },
        { id: 'movies', name: 'Cine & Series' },
        { id: 'entertainment', name: 'Entretenimiento' },
        { id: 'news', name: 'Noticias & Docus' },
        { id: 'kids', name: 'Infantil' },
        { id: 'international', name: 'Internacional' }
      ],
      badgeText: 'Servidores con Estabilidad 99.9%',
      sampleChannels: [
        { name: 'M+ LaLiga TV UHD', cat: 'sports', quality: '4K 60FPS' },
        { name: 'DAZN LaLiga 1 HD', cat: 'sports', quality: '1080p 60FPS' },
        { name: 'DAZN 1 Bar HD', cat: 'sports', quality: '1080p 60FPS' },
        { name: 'M+ Liga de Campeones UHD', cat: 'sports', quality: '4K 60FPS' },
        { name: 'M+ Estrenos HD', cat: 'movies', quality: '1080p' },
        { name: 'M+ Acción HD', cat: 'movies', quality: '1080p' },
        { name: 'Antena 3 Directo', cat: 'entertainment', quality: '1080p' },
        { name: 'Telecinco HD', cat: 'entertainment', quality: '1080p' },
        { name: 'La 1 UHD 4K', cat: 'entertainment', quality: '4K HDR' },
        { name: 'M+ Deportes UHD', cat: 'sports', quality: '4K 60FPS' },
        { name: 'National Geographic España', cat: 'news', quality: '1080p' },
        { name: 'Historia TV HD', cat: 'news', quality: '1080p' },
        { name: 'Disney Channel España', cat: 'kids', quality: '1080p' },
        { name: 'Nickelodeon HD', cat: 'kids', quality: '1080p' },
        { name: 'ESPN Deportes', cat: 'international', quality: '1080p' },
        { name: 'Fox Sports 1 UHD', cat: 'international', quality: '4K 60FPS' }
      ]
    },
    features: {
      metaTitle: 'Funciones IPTV Smarters Pro — Deportes en 60FPS, Anti-Cortes y EPG',
      metaDesc: 'Conoce todas las características de nuestro servicio: tecnología anti-congelamiento, calidad 4K UHD real, multi-pantalla y soporte 24/7.',
      kicker: 'Tecnología Avanzada',
      h1: 'Transmisión Fluida y Rápida <br><span class="text-gradient">Sin Ninguna Interrupción.</span>',
      subtitle: 'Infraestructura de servidores en España y Europa con ancho de banda ilimitado para una experiencia televisiva inmejorable.',
      items: [
        {
          title: 'Servidores Anti-Cortes 99.9%',
          desc: 'Balanceo dinámico que redistribuye el tráfico en tiempo real para evitar cualquier congelamiento de imagen.'
        },
        {
          title: 'Deportes en Directo en 60FPS',
          desc: 'Imágenes ultra-nítidas sin efecto fantasma, idóneas para ver fútbol de máxima intensidad y deportes de motor.'
        },
        {
          title: 'Modo Multi-Pantalla',
          desc: 'Mira hasta cuatro eventos deportivos al mismo tiempo en una sola pantalla gracias a la app Smarters Pro.'
        },
        {
          title: 'Guía de Programación EPG',
          desc: 'Toda la cartelera y sinopsis de programas actualizada al instante desde la interfaz del reproductor.'
        },
        {
          title: 'Grabación y Catchup de 7 Días',
          desc: 'Vuelve a ver cualquier partido o programa emitido durante la última semana cuando tú quieras.'
        },
        {
          title: 'Soporte VPN y Todos los Dispositivos',
          desc: 'Compatible con Smart TV Samsung, LG, Fire TV Stick, Android TV, iPhone, PC y servicios VPN.'
        }
      ]
    },
    contact: {
      metaTitle: 'Contacto y Soporte — IPTV Smarters Pro en Español 24/7',
      metaDesc: '¿Tienes dudas sobre tu pedido o necesitas asistencia técnica para configurar tu televisión? Habla con nuestro equipo en español por WhatsApp y Telegram.',
      kicker: 'Soporte Técnico 24/7',
      h1: 'Estamos Aquí Para <span class="text-gradient">Ayudarte.</span>',
      subtitle: 'Resolvemos cualquier consulta o activación en menos de 10 minutos.'
    }
  },

  {
    code: 'ar',
    name: 'العربية',
    flag: '🇸🇦',
    dir: 'rtl',
    locale: 'ar_SA',
    whatsappText: '%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%AF%D8%B9%D9%85%20IPTV%20Smarters%20Pro%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83%20%D8%A8%D8%AE%D8%AF%D9%85%D8%A9%20IPTV%204K.',
    keywords: ['اشتراك IPTV Smarters Pro', 'أفضل اشتراك IPTV بدون تقطيع', 'قنوات عربية وباقات رياضية 4K', 'سيرفر IPTV مستقر', 'أسعار اشتراك IPTV'],
    nav: {
      home: 'الرئيسية',
      services: 'خدمات IPTV',
      features: 'المميزات',
      channels: 'القنوات',
      pricing: 'الأسعار',
      guides: 'دليل التثبيت',
      contact: 'اتصل بنا',
      cta: 'ابدأ الآن',
      support: 'الدعم الفني'
    },
    carousel: {
      badge: 'أفلام ومسلسلات 4K',
      title: 'شاهد أحدث الأفلام والمسلسلات الحصرية بجودة 4K',
      subtitle: 'مكتبة VOD ضخمة تضم أكثر من 60,000 فيلم ومسلسل عربي وعالمي بأعلى دقة وبدون أي تقطيع.',
      moviesTitle: 'أقوى أفلام البوكس أوفيس (2023 - 2024)',
      seriesTitle: 'أشهر المسلسلات التلفزيونية الحصرية',
      sportsTitle: 'البث المباشر للرياضة وأقوى الدوريات العالمية بدقة 60FPS',
      sportsSub: 'دوري أبطال أوروبا، الدوريات الكبرى، قنوات beIN Sports، SSC، والفورمولا 1 ومباريات المصارعة بجودة 4K حقيقية.'
    },
    pricing: {
      metaTitle: 'اشتراك IPTV Smarters Pro — أفضل سيرفر IPTV 4K بدون تقطيع من 14.95$',
      metaDesc: 'احصل على أفضل اشتراك IPTV Smarters Pro فائق الجودة. أكثر من 20,000 قناة مباشرة، باقات رياضية 4K، أفلام ومسلسلات مع تفعيل فوري ودعم 24/7.',
      kicker: 'باقات الاشتراك',
      h1: 'أسعار بسيطة <br class="hidden md:block"><span class="text-gradient">وشفافة.</span>',
      subtitle: 'وصول غير محدود لجميع القنوات الرياضية والترفيهية ومكتبة الأفلام بدقة 4K فائقة السرعة مع تفعيل فوري لحسابك.',
      deviceTabs: ['جهاز واحد', 'جهازان', '3 أجهزة'],
      savePercent: ['وفر 14%', 'وفر 33%', 'وفر 50%', 'وفر 67%'],
      popularBadge: 'الأكثر طلباً',
      diamondBadge: 'الباقة الماسية · أفضل قيمة',
      diamondRate: 'بسعر شهري يعادل',
      plans: [
        { months: 1, name: 'شهر واحد', price: '14.95$', rawPrice: 14.95 },
        { months: 3, name: '3 أشهر', price: '29.95$', rawPrice: 29.95 },
        { months: 6, name: '6 أشهر', price: '44.95$', rawPrice: 44.95 },
        { months: 12, name: '12 شهراً', price: '59.95$', rawPrice: 59.95 },
        { months: 24, name: '24 شهراً', price: '99.95$', rawPrice: 99.95 }
      ],
      features: [
        'جميع القنوات الرياضية (beIN Sports, SSC) بجودة 4K',
        'مكتبة VOD ضخمة ومتجددة يومياً للأفلام والمسلسلات',
        'يعمل على جميع الشاشات الذكية، FireStick، الهواتف والكمبيوتر',
        'سيرفرات فائقة السرعة مع تقنية منع التقطيع (Anti-Freeze)',
        'دليل البرامج الإلكتروني (EPG) وخاصية إعادة البث',
        'دعم فني متخصص متوفر على مدار الساعة 24/7'
      ],
      ctaButton: 'المتابعة عبر واتساب',
      trustCards: [
        {
          title: 'دفع آمن ومحمي',
          desc: 'طرق دفع مشفرة بالكامل ومعتمدة عالمياً مع إمكانية الدفع بالبطاقات البنكية أو العملات الرقمية.'
        },
        {
          title: 'دعم فني عربي 24/7',
          desc: 'فريق دعم فني متمرس جاهز للإجابة على جميع استفساراتكم والمساعدة في التثبيت فوراً عبر واتساب وتيليجرام.'
        },
        {
          title: 'تفعيل فوري للاشتراك',
          desc: 'تصلك بيانات الدخول (Xtream Codes) عبر البريد الإلكتروني وواتساب خلال دقائق معدودة بعد الدفع.'
        }
      ],
      faqs: [
        {
          q: "كيف يمكنني تشغيل الاشتراك على تطبيق IPTV Smarters Pro؟",
          a: "قم بفتح التطبيق، اختر 'تسجيل الدخول عبر Xtream Codes API'، ثم أدخل اسم المستخدم وكلمة المرور ورابط السيرفر الذي نرسله لك فور الدفع."
        },
        {
          q: "هل يعمل الاشتراك بدون تقطيع أثناء المباريات الكبرى؟",
          a: "نعم، نعتمد على بنية تحتية سحابية مزودة بسيرفرات موازنة الحمل ومضادة للضغط، مما يضمن بثاً سلساً وثابتاً بدقة 60FPS حتى في ذروة المشاهدات."
        },
        {
          q: "هل الخدمة متوافقة مع برامج الـ VPN؟",
          a: "نعم بالكامل، الخدمة تعمل بسلاسة تامة مع جميع برامج VPN لضمان حماية بياناتك وتجاوز أي حظر من مزودي الإنترنت المحليين."
        }
      ]
    },
    channels: {
      metaTitle: 'قائمة قنوات اشتراك IPTV Smarters Pro 2026 — أكثر من 20,000 قناة 4K',
      metaDesc: 'تصفح قائمة القنوات الكاملة: باقات beIN Sports، SSC السعودية، قنوات الشاهد وOSN، قنوات الأطفال والأفلام بدقة 4K وFull HD.',
      kicker: 'باقة القنوات المباشرة',
      h1: 'أقوى القنوات المباشرة <span class="text-gradient">بدقة 4K.</span>',
      subtitle: 'أكثر من 20,000 قناة عربية وعالمية تغطي كافة الرياضات الحية والبطولات القارية والبرامج الترفيهية.',
      searchPlaceholder: 'ابحث عن قناة (مثال: beIN Sports, SSC, MBC, OSN)...',
      categories: [
        { id: 'all', name: 'الكل' },
        { id: 'sports', name: 'الرياضة والبطولات' },
        { id: 'movies', name: 'السينما والأفلام' },
        { id: 'entertainment', name: 'الترفيه والمنوعات' },
        { id: 'news', name: 'الأخبار والوثائقيات' },
        { id: 'kids', name: 'الأطفال والكرتون' },
        { id: 'international', name: 'القنوات العالمية' }
      ],
      badgeText: 'سيرفرات فائقة الثبات بنسبة 99.9%',
      sampleChannels: [
        { name: 'beIN Sports 1 4K Direct', cat: 'sports', quality: '4K 60FPS' },
        { name: 'beIN Sports 2 Premium FHD', cat: 'sports', quality: '1080p 60FPS' },
        { name: 'SSC Sports 1 HD (دوري روشن)', cat: 'sports', quality: '1080p 60FPS' },
        { name: 'SSC Sports 5 HD', cat: 'sports', quality: '1080p 60FPS' },
        { name: 'MBC 1 HD', cat: 'entertainment', quality: '1080p' },
        { name: 'MBC Masr HD', cat: 'entertainment', quality: '1080p' },
        { name: 'OSN Movies Premiere 4K', cat: 'movies', quality: '4K' },
        { name: 'OSN Action HD', cat: 'movies', quality: '1080p' },
        { name: 'Rotana Cinema HD', cat: 'movies', quality: '1080p' },
        { name: 'Al Jazeera News HD', cat: 'news', quality: '1080p' },
        { name: 'Al Arabiya HD', cat: 'news', quality: '1080p' },
        { name: 'National Geographic Abu Dhabi', cat: 'news', quality: '1080p' },
        { name: 'Spacetoon HD', cat: 'kids', quality: '1080p' },
        { name: 'MBC 3 HD', cat: 'kids', quality: '1080p' },
        { name: 'Sky Sports Premier League UHD', cat: 'international', quality: '4K 60FPS' },
        { name: 'Canal+ Foot 4K France', cat: 'international', quality: '4K 60FPS' }
      ]
    },
    features: {
      metaTitle: 'مميزات اشتراك IPTV Smarters Pro — بث 4K، منع التقطيع ودعم الشاشات المتعددة',
      metaDesc: 'تعرف على الخصائص التقنية الحصرية: سيرفرات مضادة للحظر، دقة 60FPS للرياضة، تشغيل حتى 4 شاشات ودعم فني على مدار الساعة.',
      kicker: 'البنية التحتية والتقنية',
      h1: 'بث فضائي متطور <br><span class="text-gradient">بدون أي انقطاع.</span>',
      subtitle: 'أحدث بروتوكولات البث مع توزيع جغرافي للأحمال يضمن جودة أسطورية على شاشتك.',
      items: [
        {
          title: 'تقنية منع التقطيع (Anti-Freeze)',
          desc: 'سيرفرات فائقة التطور توزع الضغط تلقائياً لضمان عدم توقف الصورة أثناء المباريات المهمة.'
        },
        {
          title: 'دقة 4K حقيقية مع 60 إطار بالثانية',
          desc: 'متعة بصرية فائقة لمشاهدة المباريات الرياضية بأعلى دقة وأقصى درجات السلاسة.'
        },
        {
          title: 'خاصية الشاشات المتعددة (Multi-Screen)',
          desc: 'تابع ما يصل إلى أربع مباريات مباشرة في نفس الوقت على شاشة واحدة عبر مشغل Smarters Pro.'
        },
        {
          title: 'دليل البرامج التلفزيوني (EPG)',
          desc: 'جدول برامج إلكتروني دقيق ومحدث لحظة بلحظة مع نبذة عن كل برنامج وموعد عرضه.'
        },
        {
          title: 'مكتبة VOD متجددة للأفلام والمسلسلات',
          desc: 'آلاف الساعات من أحدث الأفلام والمسلسلات العربية والتركية والأجنبية المترجمة والمدبلجة.'
        },
        {
          title: 'توافق شامل مع جميع الأجهزة والـ VPN',
          desc: 'يعمل على أجهزة Smart TV (سامسونج، إل جي)، شاومي، أمازون فاير ستيك، الهواتف الذكية وأجهزة الكمبيوتر.'
        }
      ]
    },
    contact: {
      metaTitle: 'اتصل بنا — خدمة عملاء IPTV Smarters Pro ودعم فني عربي 24/7',
      metaDesc: 'تواصل معنا مباشرة عبر واتساب وتيليجرام للحصول على مساعدة في التثبيت أو طلب تجربة أو تفعيل اشتراكك.',
      kicker: 'الدعم الفني المباشر',
      h1: 'فريقنا متاح دائماً <span class="text-gradient">لمساعدتكم.</span>',
      subtitle: 'نرد على كافة الاستفسارات خلال أقل من 10 دقائق على مدار الساعة.'
    }
  },

  {
    code: 'it',
    name: 'Italiano',
    flag: '🇮🇹',
    dir: 'ltr',
    locale: 'it_IT',
    whatsappText: 'Ciao%20supporto%20IPTV%20Smarters%20Pro%2C%20vorrei%20acquistare%20un%20abbonamento%20IPTV%20in%204K.',
    keywords: ['Abbonamento IPTV', 'Miglior IPTV Italia 4K', 'IPTV Smarters Pro Italiano', 'Canali IPTV Senza Blocchi', 'Prezzi Abbonamento IPTV'],
    nav: {
      home: 'Home',
      services: 'Servizi IPTV',
      features: 'Funzionalità',
      channels: 'Canali',
      pricing: 'Prezzi',
      guides: 'Guide',
      contact: 'Contatti',
      cta: 'Inizia Ora',
      support: 'Supporto'
    },
    carousel: {
      badge: 'Cinema & Serie TV 4K',
      title: 'Streaming Film Blockbuster e Serie TV in 4K',
      subtitle: 'Oltre 60.000 film e serie on-demand in Ultra HD 4K con audio in italiano e zero buffering.',
      moviesTitle: 'I Migliori Film Blockbuster (2023 - 2024)',
      seriesTitle: 'Serie TV di Tendenza e Più Votate',
      sportsTitle: 'Sport in Diretta e Grandi Campionati in 60FPS',
      sportsSub: 'Guarda Serie A, Champions League, Formula 1, MotoGP e UFC in diretta 4K 60FPS con tecnologia anti-blocco.'
    },
    pricing: {
      metaTitle: 'Abbonamento IPTV Smarters Pro — Miglior IPTV 4K Italia da 14,95€',
      metaDesc: 'Acquista il miglior abbonamento IPTV per l\'Italia con IPTV Smarters Pro. Oltre 20.000 canali, Serie A, Champions League, film VOD e attivazione istantanea.',
      kicker: 'Piani di Abbonamento',
      h1: 'Prezzi semplici e <br class="hidden md:block"><span class="text-gradient">trasparenti.</span>',
      subtitle: 'Accesso illimitato a tutti i canali, cinema e serie TV in qualità 4K Ultra HD. Pagamenti sicuri e attivazione immediata.',
      deviceTabs: ['1 Dispositivo', '2 Dispositivi', '3 Dispositivi'],
      savePercent: ['Risparmia 14%', 'Risparmia 33%', 'Risparmia 50%', 'Risparmia 67%'],
      popularBadge: 'Più Popolare',
      diamondBadge: 'Piano Diamante · Miglior Valore',
      diamondRate: 'Pari a soli',
      plans: [
        { months: 1, name: '1 Mese', price: '14.95€', rawPrice: 14.95 },
        { months: 3, name: '3 Mesi', price: '29.95€', rawPrice: 29.95 },
        { months: 6, name: '6 Mesi', price: '44.95€', rawPrice: 44.95 },
        { months: 12, name: '12 Mesi', price: '59.95€', rawPrice: 59.95 },
        { months: 24, name: '24 Mesi', price: '99.95€', rawPrice: 99.95 }
      ],
      features: [
        'Tutti i canali italiani e internazionali (Sky Sport, DAZN)',
        'VOD film e serie TV aggiornati continuamente in 4K',
        'Compatibile con Smart TV, FireStick, iOS e Android',
        'Streaming sportivo in 60FPS con tecnologia anti-blocco',
        'Guida EPG elettronica programmi e funzione Catchup',
        'Assistenza tecnica rapida e dedicata attiva 24/7'
      ],
      ctaButton: 'Continua su WhatsApp',
      trustCards: [
        {
          title: 'Pagamenti Sicuri al 100%',
          desc: 'Transazioni protette con crittografia SSL bancaria. Accettiamo carte di credito e criptovalute.'
        },
        {
          title: 'Supporto Tecnico 24/7',
          desc: 'I nostri esperti sono sempre disponibili via WhatsApp e Telegram per configurare i tuoi dispositivi.'
        },
        {
          title: 'Attivazione Immediata',
          desc: 'Ricevi i tuoi codici di accesso Xtream Codes pochi istanti dopo aver completato l\'ordine.'
        }
      ],
      faqs: [
        {
          q: "Come configuro l'abbonamento su IPTV Smarters Pro?",
          a: "Scarica l'app sul tuo televisore o smartphone, seleziona 'Accedi con API Xtream Codes' ed inserisci username, password e URL server inviati via email."
        },
        {
          q: "È possibile vedere le partite di Serie A senza blocchi?",
          a: "Sì, i nostri server ad alta capacità con bilanciamento di carico garantiscono trasmissioni stabili a 60FPS anche nei big match."
        },
        {
          q: "Il servizio funziona con una VPN?",
          a: "Assolutamente sì. Il nostro servizio è compatibile al 100% con tutti i principali provider VPN per tutelare la tua privacy."
        }
      ]
    },
    channels: {
      metaTitle: 'Lista Canali IPTV Italia 2026 — Oltre 20.000 Canali in 4K',
      metaDesc: 'Elenco canali IPTV completo per l\'Italia: Sky Sport, DAZN, Serie A, Champions League, cinema, documentari e canali esteri in Full HD e 4K.',
      kicker: 'Canali Live',
      h1: 'Tutti i Tuoi Canali <span class="text-gradient">in Qualità 4K.</span>',
      subtitle: 'Oltre 20.000 canali televisivi in diretta per sport, cinema, notizie e intrattenimento.',
      searchPlaceholder: 'Cerca canale (es. Sky Sport, DAZN, Rai 1, Canale 5)...',
      categories: [
        { id: 'all', name: 'Tutti' },
        { id: 'sports', name: 'Sport & Calcio' },
        { id: 'movies', name: 'Cinema & Serie' },
        { id: 'entertainment', name: 'Intrattenimento' },
        { id: 'news', name: 'News & Documentari' },
        { id: 'kids', name: 'Bambini & Ragazzi' },
        { id: 'international', name: 'Internazionali' }
      ],
      badgeText: 'Stabilità Server Garantita 99.9%',
      sampleChannels: [
        { name: 'Sky Sport Calcio UHD', cat: 'sports', quality: '4K 60FPS' },
        { name: 'DAZN 1 HD Italia', cat: 'sports', quality: '1080p 60FPS' },
        { name: 'Sky Sport Uno 4K', cat: 'sports', quality: '4K 60FPS' },
        { name: 'Sky Sport F1 UHD', cat: 'sports', quality: '4K 60FPS' },
        { name: 'Sky Cinema Uno HD', cat: 'movies', quality: '1080p' },
        { name: 'Sky Cinema Action HD', cat: 'movies', quality: '1080p' },
        { name: 'Rai 1 4K Direct', cat: 'entertainment', quality: '4K HDR' },
        { name: 'Canale 5 HD', cat: 'entertainment', quality: '1080p' },
        { name: 'Italia 1 HD', cat: 'entertainment', quality: '1080p' },
        { name: 'Eurosport 1 4K', cat: 'sports', quality: '4K 60FPS' },
        { name: 'Discovery Channel Italia', cat: 'news', quality: '1080p' },
        { name: 'National Geographic Italia', cat: 'news', quality: '1080p' },
        { name: 'Boing HD', cat: 'kids', quality: '1080p' },
        { name: 'Disney Junior Italia', cat: 'kids', quality: '1080p' },
        { name: 'BT Sport 1 UHD', cat: 'international', quality: '4K 60FPS' },
        { name: 'Movistar Liga de Campeones', cat: 'international', quality: '1080p' }
      ]
    },
    features: {
      metaTitle: 'Funzionalità IPTV Smarters Pro — Streaming 4K, Anti-Blocco e Multi-Schermo',
      metaDesc: 'Scopri i punti di forza del nostro abbonamento: server dedicati, fluidità 60FPS, guida EPG integrata e compatibilità universale.',
      kicker: 'Tecnologia di Streaming',
      h1: 'Stabilità e Fluidità <br><span class="text-gradient">Senza Interruzioni.</span>',
      subtitle: 'Connessioni dirette con data center europei per garantire zero ritardi e massima nitidezza visiva.',
      items: [
        {
          title: 'Tecnologia Anti-Blocco 99.9%',
          desc: 'Architettura multi-nodo che reindirizza istantaneamente la connessione in caso di congestione di rete.'
        },
        {
          title: 'Sport in Diretta a 60FPS',
          desc: 'Massima reattività nei movimenti con una frequenza di 60 frame al secondo per una visione impeccabile.'
        },
        {
          title: 'Visualizzazione Multi-Schermo',
          desc: 'Guarda contemporaneamente fino a 4 canali sportivi sul medesimo televisore tramite Smarters Pro.'
        },
        {
          title: 'Guida TV Elettronica (EPG)',
          desc: 'Palinsesto completo sempre sincronizzato con orari di programmazione e schede informative.'
        },
        {
          title: 'Catchup e Replay di 7 Giorni',
          desc: 'Possibilità di rivedere eventi e trasmissioni andate in onda nei 7 giorni precedenti.'
        },
        {
          title: 'Piena Compatibilità & VPN',
          desc: 'Utilizzabile su Smart TV (Samsung, LG), Amazon FireStick, Apple TV, PC e con qualsiasi VPN.'
        }
      ]
    },
    contact: {
      metaTitle: 'Contatti & Assistenza — Supporto IPTV Smarters Pro 24/7',
      metaDesc: 'Hai bisogno di supporto tecnico per configurare la tua applicazione o ordinare un abbonamento? Scrivici su WhatsApp e Telegram.',
      kicker: 'Supporto Clienti 24/7',
      h1: 'Siamo Sempre a <span class="text-gradient">Tua Disposizione.</span>',
      subtitle: 'Assistenza tecnica dedicata con risposte in meno di 10 minuti.'
    }
  },

  {
    code: 'nl',
    name: 'Nederlands',
    flag: '🇳🇱',
    dir: 'ltr',
    locale: 'nl_NL',
    whatsappText: 'Hallo%20IPTV%20Smarters%20Pro%2C%20ik%20wil%20graag%20een%20IPTV%20abonnement%20in%204K%20bestellen.',
    keywords: ['IPTV Kopen Nederland', 'Beste IPTV Abonnement Smarters Pro', 'Nederlandse Zenders 4K Zonder Haperingen', 'IPTV Prijzen', 'IPTV Testen'],
    nav: {
      home: 'Home',
      services: 'IPTV-Diensten',
      features: 'Functies',
      channels: 'Zenders',
      pricing: 'Prijzen',
      guides: 'Handleidingen',
      contact: 'Contact',
      cta: 'Nu Starten',
      support: 'Klantenservice'
    },
    carousel: {
      badge: '4K VOD & Series',
      title: 'Stream Blockbuster Films & Populaire Series in 4K',
      subtitle: 'Meer dan 60.000 recente films en complete series in Ultra HD 4K met Nederlandse ondertiteling en razendsnelle zaptijden.',
      moviesTitle: 'Top Blockbuster Films (2023 - 2024)',
      seriesTitle: 'Populaire TV Series & Seizoenen',
      sportsTitle: 'Live Sport & Grote Competities in 60FPS',
      sportsSub: 'Eredivisie, Champions League, Formule 1 met Max Verstappen en Viaplay Sport in 4K 60FPS zonder haperingen.'
    },
    pricing: {
      metaTitle: 'IPTV Kopen Nederland — Beste IPTV Abonnement 4K Vanaf 14,95€',
      metaDesc: 'Beste IPTV abonnement voor Nederland en België. Meer dan 20.000 zenders, Viaplay, Ziggo Sport, Eredivisie in 4K, VOD en directe activatie.',
      kicker: 'Abonnementspakketten',
      h1: 'Eenvoudige, transparante <br class="hidden md:block"><span class="text-gradient">prijzen.</span>',
      subtitle: 'Onbeperkte toegang tot alle live zenders, sportevenementen en VOD-films in 4K. Veilig betalen en directe activatie.',
      deviceTabs: ['1 Apparaat', '2 Apparaten', '3 Apparaten'],
      savePercent: ['Bespaar 14%', 'Bespaar 33%', 'Bespaar 50%', 'Bespaar 67%'],
      popularBadge: 'Meest Gekozen',
      diamondBadge: 'Diamond Pakket · Beste Waarde',
      diamondRate: 'Slechts',
      plans: [
        { months: 1, name: '1 Maand', price: '14.95€', rawPrice: 14.95 },
        { months: 3, name: '3 Maanden', price: '29.95€', rawPrice: 29.95 },
        { months: 6, name: '6 Maanden', price: '44.95€', rawPrice: 44.95 },
        { months: 12, name: '12 Maanden', price: '59.95€', rawPrice: 59.95 },
        { months: 24, name: '24 Maanden', price: '99.95€', rawPrice: 99.95 }
      ],
      features: [
        'Alle Nederlandse & Belgische zenders (Ziggo, Viaplay, ESPN)',
        'Enorme VOD bibliotheek met films en series in 4K UHD',
        'Geschikt voor Smart TV, FireStick, Android en Apple apparaten',
        'Anti-Freeze technologie voor vloeiende live sport op 60FPS',
        'Elektronische Programmagids (EPG) en 7 dagen TV Terugkijken',
        '24/7 vriendelijke klantenservice via WhatsApp en Telegram'
      ],
      ctaButton: 'Verder via WhatsApp',
      trustCards: [
        {
          title: 'Veilige Betalingen',
          desc: 'Al uw transacties verlopen via beveiligde versleutelde verbindingen. Wij accepteren creditcards en crypto.'
        },
        {
          title: '24/7 Technische Ondersteuning',
          desc: 'Onze deskundige helpdesk staat dag en nacht voor u klaar via WhatsApp en Telegram.'
        },
        {
          title: 'Directe Activatie',
          desc: 'Uw inloggegevens (Xtream Codes) ontvangt u binnen enkele minuten direct per e-mail.'
        }
      ],
      faqs: [
        {
          q: "Hoe stel ik IPTV Smarters Pro in op mijn televisie?",
          a: "Open de app, kies voor 'Login with Xtream Codes API' en vul uw naam, gebruikersnaam, wachtwoord en server-URL in die u per e-mail heeft ontvangen."
        },
        {
          q: "Kan ik Formule 1 en Eredivisie zonder haperingen bekijken?",
          a: "Jazeker, dankzij onze krachtige servers in Amsterdam streamt u alle sportevenementen in 60FPS zonder vertraging of buffering."
        },
        {
          q: "Is het abonnement compatibel met een VPN?",
          a: "Ja, onze servers werken perfect samen met alle populaire VPN-diensten (NordVPN, Surfshark, ExpressVPN) voor optimale privacy."
        }
      ]
    },
    channels: {
      metaTitle: 'IPTV Zenderlijst Nederland 2026 — Ruim 20.000 Zenders in 4K',
      metaDesc: 'Overzicht van alle IPTV zenders: ESPN Eredivisie, Ziggo Sport, Viaplay F1, NPO, RTL, films en internationale zenders in Full HD en 4K.',
      kicker: 'Live Zenderoverzicht',
      h1: 'Al Uw Favoriete Zenders <span class="text-gradient">in 4K Kwaliteit.</span>',
      subtitle: 'Meer dan 20.000 zenders met de beste sport, films, series, documentaires en kinderprogramma\'s in 4K 60FPS.',
      searchPlaceholder: 'Zoek een zender (bijv. ESPN, Ziggo Sport, NPO 1, RTL 4)...',
      categories: [
        { id: 'all', name: 'Alle Zenders' },
        { id: 'sports', name: 'Sport & F1' },
        { id: 'movies', name: 'Films & Series' },
        { id: 'entertainment', name: 'Entertainment' },
        { id: 'news', name: 'Nieuws & Docus' },
        { id: 'kids', name: 'Kids & Familie' },
        { id: 'international', name: 'Internationaal' }
      ],
      badgeText: '99.9% Server Beschikbaarheid',
      sampleChannels: [
        { name: 'ESPN 1 Eredivisie HD', cat: 'sports', quality: '1080p 60FPS' },
        { name: 'Ziggo Sport Select 4K', cat: 'sports', quality: '4K 60FPS' },
        { name: 'Viaplay F1 4K Live', cat: 'sports', quality: '4K 60FPS' },
        { name: 'NPO 1 UHD Direct', cat: 'entertainment', quality: '4K HDR' },
        { name: 'RTL 4 Full HD', cat: 'entertainment', quality: '1080p' },
        { name: 'Film1 Premiere HD', cat: 'movies', quality: '1080p' },
        { name: 'Film1 Action HD', cat: 'movies', quality: '1080p' },
        { name: 'Discovery Channel NL', cat: 'news', quality: '1080p' },
        { name: 'National Geographic NL', cat: 'news', quality: '1080p' },
        { name: 'Disney Channel NL', cat: 'kids', quality: '1080p' },
        { name: 'Nickelodeon NL', cat: 'kids', quality: '1080p' },
        { name: 'Sky Sports F1 UHD UK', cat: 'international', quality: '4K 60FPS' },
        { name: 'TNT Sports 1 4K UK', cat: 'international', quality: '4K 60FPS' }
      ]
    },
    features: {
      metaTitle: 'Functies IPTV Smarters Pro — 4K 60FPS, Anti-Freeze en Multi-Screen',
      metaDesc: 'Ontdek alle technische voordelen van ons IPTV abonnement: razendsnelle zaptijden, EPG gids, 7 dagen terugkijken en stabiele servers.',
      kicker: 'Geavanceerde Streaming',
      h1: 'Ultieme Stabiliteit <br><span class="text-gradient">Zonder Buffering.</span>',
      subtitle: 'Premium netwerkknooppunten in Europa met onbeperkte bandbreedte voor een vloeiende kijkervaring.',
      items: [
        {
          title: '99.9% Anti-Freeze Garantie',
          desc: 'Geavanceerde serverclustering verdeelt de belasting automatisch voor een storingsvrij beeld tijdens piekuren.'
        },
        {
          title: 'Echt 4K UHD & 60FPS Live Sport',
          desc: 'Haarscherpe beelden met 60 frames per seconde, ideaal voor snelle acties in het voetbal en de motorsport.'
        },
        {
          title: 'Multi-Screen Modus',
          desc: 'Kijk tegelijkertijd naar tot wel vier wedstrijden op één scherm via de IPTV Smarters Pro applicatie.'
        },
        {
          title: 'Altijd Actuele EPG Gids',
          desc: 'Volledige elektronische programmagids met gedetailleerde zenderinformatie en uitzendtijden.'
        },
        {
          title: '7 Dagen TV Terugkijken',
          desc: 'Heeft u een uitzending gemist? Kijk alle programma\'s van de afgelopen week eenvoudig terug.'
        },
        {
          title: 'Compatibel met Elk Apparaat & VPN',
          desc: 'Geschikt voor Smart TV (Samsung, LG), FireStick, Android Box, iOS, Windows en alle VPN-diensten.'
        }
      ]
    },
    contact: {
      metaTitle: 'Contact & Klantenservice — IPTV Smarters Pro Support 24/7',
      metaDesc: 'Vragen over installatie of bestelling? Onze Nederlandse klantenservice helpt u direct via WhatsApp en Telegram.',
      kicker: '24/7 Klantenservice',
      h1: 'Wij Staan Altijd <span class="text-gradient">Voor U Klaar.</span>',
      subtitle: 'Krijg binnen 10 minuten deskundig antwoord op al uw vragen.'
    }
  },

  {
    code: 'pt',
    name: 'Português',
    flag: '🇵🇹',
    dir: 'ltr',
    locale: 'pt_PT',
    whatsappText: 'Ol%C3%A1%20suporte%20IPTV%20Smarters%20Pro%2C%20gostaria%20de%20assinar%20um%20plano%20IPTV%204K.',
    keywords: ['Melhor IPTV Portugal', 'Comprar IPTV Smarters Pro 4K', 'Canais IPTV Sem Travamentos', 'Preço IPTV', 'Lista IPTV Portugal'],
    nav: {
      home: 'Início',
      services: 'Serviços IPTV',
      features: 'Recursos',
      channels: 'Canais',
      pricing: 'Planos & Preços',
      guides: 'Guias',
      contact: 'Contacto',
      cta: 'Começar Agora',
      support: 'Suporte'
    },
    carousel: {
      badge: 'Filmes & Séries 4K',
      title: 'Streaming de Filmes Blockbuster e Séries em 4K',
      subtitle: 'Mais de 60.000 filmes e séries atualizados em Ultra HD 4K com áudio dublado e legendado e sem travamentos.',
      moviesTitle: 'Filmes Mais Assistidos (2023 - 2024)',
      seriesTitle: 'Séries de TV Mais Populares',
      sportsTitle: 'Esportes ao Vivo e Grandes Ligas em 60FPS',
      sportsSub: 'Liga Portugal, Champions League, UFC e Fórmula 1 em 4K 60FPS com fluidez absoluta e tecnologia anti-congelamento.'
    },
    pricing: {
      metaTitle: 'Melhor IPTV Portugal — IPTV Smarters Pro 4K Sem Travamentos Desde 14,95€',
      metaDesc: 'Comprar o melhor serviço IPTV para Portugal. Mais de 20.000 canais, Sport TV, Eleven Sports, filmes VOD e ativação imediata.',
      kicker: 'Planos de Subscrição',
      h1: 'Preços simples, <br class="hidden md:block"><span class="text-gradient">transparentes.</span>',
      subtitle: 'Acesso total a todos os canais de desporto, filmes e séries em qualidade 4K Ultra HD. Pagamentos seguros e entrega imediata.',
      deviceTabs: ['1 Dispositivo', '2 Dispositivos', '3 Dispositivos'],
      savePercent: ['Poupe 14%', 'Poupe 33%', 'Poupe 50%', 'Poupe 67%'],
      popularBadge: 'Mais Popular',
      diamondBadge: 'Plano Diamante · Melhor Valor',
      diamondRate: 'Apenas',
      plans: [
        { months: 1, name: '1 Mês', price: '14.95€', rawPrice: 14.95 },
        { months: 3, name: '3 Meses', price: '29.95€', rawPrice: 29.95 },
        { months: 6, name: '6 Meses', price: '44.95€', rawPrice: 44.95 },
        { months: 12, name: '12 Meses', price: '59.95€', rawPrice: 59.95 },
        { months: 24, name: '24 Meses', price: '99.95€', rawPrice: 99.95 }
      ],
      features: [
        'Todos os canais de desporto portugueses e internacionais',
        'Biblioteca VOD completa com filmes e séries em 4K/FHD',
        'Compatível com Smart TV, FireStick, telemóvel e PC',
        'Tecnologia anti-travamento para desporto ao vivo a 60FPS',
        'Guia de programação EPG e funcionalidade de Gravação',
        'Suporte técnico dedicado disponível 24 horas por dia'
      ],
      ctaButton: 'Continuar no WhatsApp',
      trustCards: [
        {
          title: 'Pagamentos Seguros',
          desc: 'Processamento protegido com encriptação SSL. Aceitamos cartões bancários e criptomoedas.'
        },
        {
          title: 'Suporte Técnico 24/7',
          desc: 'A nossa equipa ajuda-o em minutos na configuração do seu dispositivo por WhatsApp e Telegram.'
        },
        {
          title: 'Ativação Instantânea',
          desc: 'Receba os seus dados Xtream Codes no seu email logo após a confirmação da encomenda.'
        }
      ],
      faqs: [
        {
          q: "Como configurar o IPTV Smarters Pro?",
          a: "Instale a aplicação, clique em 'Login com API Xtream Codes' e introduza os dados fornecidos por email para carregar os canais."
        },
        {
          q: "O serviço funciona sem travamentos nos jogos de futebol?",
          a: "Sim, os nossos servidores de alta velocidade distribuídos por vários nós garantem transmissão fluida a 60FPS sem interrupções."
        },
        {
          q: "Posso utilizar VPN com o serviço?",
          a: "Sim, a nossa plataforma é 100% compatível com VPN para garantir total privacidade e segurança."
        }
      ]
    },
    channels: {
      metaTitle: 'Lista de Canais IPTV Portugal 2026 — Mais de 20.000 Canais 4K',
      metaDesc: 'Consulte a lista completa: Sport TV, Eleven Sports / DAZN, canais generalistas (RTP, SIC, TVI), cinema e internacionais em 4K.',
      kicker: 'Canais em Direto',
      h1: 'Os Seus Canais Favoritos <span class="text-gradient">em Qualidade 4K.</span>',
      subtitle: 'Mais de 20.000 canais ao vivo de desporto, cinema, entretenimento e internacionais em 4K 60FPS.',
      searchPlaceholder: 'Pesquisar canal (ex. Sport TV, DAZN, SIC, TVI)...',
      categories: [
        { id: 'all', name: 'Todos' },
        { id: 'sports', name: 'Desporto & Futebol' },
        { id: 'movies', name: 'Cinema & Séries' },
        { id: 'entertainment', name: 'Entretenimento' },
        { id: 'news', name: 'Notícias & Docs' },
        { id: 'kids', name: 'Infantil' },
        { id: 'international', name: 'Internacional' }
      ],
      badgeText: 'Estabilidade de Servidor 99.9%',
      sampleChannels: [
        { name: 'Sport TV 1 HD Portugal', cat: 'sports', quality: '1080p 60FPS' },
        { name: 'DAZN 1 Portugal (Eleven)', cat: 'sports', quality: '1080p 60FPS' },
        { name: 'Sport TV 4K UHD', cat: 'sports', quality: '4K 60FPS' },
        { name: 'BTV 1 HD (Benfica TV)', cat: 'sports', quality: '1080p' },
        { name: 'SIC HD Direto', cat: 'entertainment', quality: '1080p' },
        { name: 'TVI HD Direto', cat: 'entertainment', quality: '1080p' },
        { name: 'RTP 1 Full HD', cat: 'entertainment', quality: '1080p' },
        { name: 'TVCine Top HD', cat: 'movies', quality: '1080p' },
        { name: 'TVCine Action HD', cat: 'movies', quality: '1080p' },
        { name: 'SIC Notícias HD', cat: 'news', quality: '1080p' },
        { name: 'Canal Panda HD', cat: 'kids', quality: '1080p' },
        { name: 'Cartoon Network Portugal', cat: 'kids', quality: '1080p' }
      ]
    },
    features: {
      metaTitle: 'Recursos IPTV Smarters Pro — 4K 60FPS, Anti-Travamentos e EPG',
      metaDesc: 'Conheça as vantagens: estabilidade 99.9%, qualidade 4K UHD real, modo multi-ecrã e suporte 24 horas por dia.',
      kicker: 'Tecnologia de Transmissão',
      h1: 'Streaming Impecável <br><span class="text-gradient">Sem Travamentos.</span>',
      subtitle: 'Servidores dedicados com tecnologia de ponta para garantir a melhor experiência televisiva.',
      items: [
        {
          title: 'Tecnologia Anti-Travamento 99.9%',
          desc: 'Roteamento inteligente que distribui as conexões em tempo real para evitar buffering.'
        },
        {
          title: 'Desporto ao Vivo em 60FPS',
          desc: 'Fluidez perfeita sem desfoque de movimento, ideal para assistir futebol de alta velocidade.'
        },
        {
          title: 'Modo Multi-Ecrã',
          desc: 'Assista a até 4 jogos em simultâneo no mesmo televisor com o IPTV Smarters Pro.'
        },
        {
          title: 'Guia de Programas EPG',
          desc: 'Programação completa sempre atualizada diretamente na interface do seu leitor.'
        },
        {
          title: 'Gravação e Replay de 7 Dias',
          desc: 'Reveja os seus programas e partidas favoritas até 7 dias após a transmissão.'
        },
        {
          title: 'Compatibilidade com Todos os Dispositivos',
          desc: 'Compatível com Smart TV (Samsung, LG), Fire TV Stick, Android, iPhone e VPNs.'
        }
      ]
    },
    contact: {
      metaTitle: 'Contacto & Suporte Técnico — IPTV Smarters Pro 24/7',
      metaDesc: 'Precisa de ajuda com a configuração ou tem dúvidas sobre a subscrição? Fale com a nossa equipa em português via WhatsApp e Telegram.',
      kicker: 'Suporte Técnico 24/7',
      h1: 'Estamos Sempre <span class="text-gradient">Disponíveis.</span>',
      subtitle: 'Respostas em menos de 10 minutos para qualquer questão técnica ou de compra.'
    }
  },

  {
    code: 'pt-br',
    name: 'Português (Brasil)',
    flag: '🇧🇷',
    dir: 'ltr',
    locale: 'pt_BR',
    whatsappText: 'Ol%C3%A1%20suporte%20IPTV%20Smarters%20Pro%2C%20quero%20assinar%20um%20plano%20IPTV%204K%20para%20o%20Brasil.',
    keywords: ['Melhor IPTV Brasil', 'Comprar IPTV Smarters Pro 4K', 'Canais IPTV Sem Travamentos', 'Preço Assinatura IPTV', 'Teste IPTV Grátis'],
    nav: {
      home: 'Início',
      services: 'Serviços IPTV',
      features: 'Recursos',
      channels: 'Canais',
      pricing: 'Planos & Preços',
      guides: 'Tutoriais',
      contact: 'Contato',
      cta: 'Começar Agora',
      support: 'Suporte'
    },
    carousel: {
      badge: 'Filmes & Séries 4K',
      title: 'Streaming de Filmes Blockbuster e Séries em 4K',
      subtitle: 'Mais de 60.000 filmes e séries atualizados em Ultra HD 4K com áudio dublado e legendado e sem travamentos.',
      moviesTitle: 'Filmes Mais Assistidos (2023 - 2024)',
      seriesTitle: 'Séries de TV Mais Populares',
      sportsTitle: 'Esportes ao Vivo e Grandes Ligas em 60FPS',
      sportsSub: 'Brasileirão, Copa do Brasil, Libertadores, UFC e Champions League em 4K 60FPS com fluidez absoluta e tecnologia anti-travamento.'
    },
    pricing: {
      metaTitle: 'Melhor IPTV Brasil — IPTV Smarters Pro 4K Sem Travamentos Desde 14,95$',
      metaDesc: 'Assinatura IPTV de alta performance para o Brasil. Mais de 20.000 canais, Premiere, SporTV, ESPN, filmes VOD e ativação imediata.',
      kicker: 'Planos de Assinatura',
      h1: 'Preços simples, <br class="hidden md:block"><span class="text-gradient">transparentes.</span>',
      subtitle: 'Acesso total a todos os canais de futebol, cinema e séries em 4K Ultra HD. Pagamentos seguros e entrega imediata.',
      deviceTabs: ['1 Dispositivo', '2 Dispositivos', '3 Dispositivos'],
      savePercent: ['Economize 14%', 'Economize 33%', 'Economize 50%', 'Economize 67%'],
      popularBadge: 'Mais Popular',
      diamondBadge: 'Plano Diamante · Maior Economia',
      diamondRate: 'Apenas',
      plans: [
        { months: 1, name: '1 Mês', price: '14.95$', rawPrice: 14.95 },
        { months: 3, name: '3 Meses', price: '29.95$', rawPrice: 29.95 },
        { months: 6, name: '6 Meses', price: '44.95$', rawPrice: 44.95 },
        { months: 12, name: '12 Meses', price: '59.95$', rawPrice: 59.95 },
        { months: 24, name: '24 Meses', price: '99.95$', rawPrice: 99.95 }
      ],
      features: [
        'Todos os canais Premiere, SporTV, ESPN e Combate',
        'Catálogo VOD gigante de filmes e séries dublados em 4K',
        'Compatível com Smart TV, TV Box, FireStick e celular',
        'Tecnologia anti-travamento com taxa de quadros a 60FPS',
        'Guia de programação EPG e função Replay de 7 dias',
        'Suporte técnico especializado 24 horas por dia'
      ],
      ctaButton: 'Continuar no WhatsApp',
      trustCards: [
        {
          title: 'Pagamento 100% Seguro',
          desc: 'Transações criptografadas com segurança máxima. Aceitamos cartões bancários e criptomoedas.'
        },
        {
          title: 'Suporte Técnico 24/7',
          desc: 'Atendimento rápido e em português no WhatsApp e Telegram para te ajudar na configuração.'
        },
        {
          title: 'Liberação Imediata',
          desc: 'Receba seus dados de acesso (Xtream Codes) no seu e-mail e WhatsApp logo após a confirmação.'
        }
      ],
      faqs: [
        {
          q: "Como configuro no aplicativo IPTV Smarters Pro?",
          a: "Basta abrir o aplicativo, clicar em 'Conectar com API Xtream Codes' e colocar o usuário, senha e URL do servidor que enviamos."
        },
        {
          q: "Trava nos jogos do Brasileirão e Libertadores?",
          a: "Não! Nossos servidores utilizam balanceamento de carga de alta capacidade que elimina o travamento mesmo em finais de campeonato."
        },
        {
          q: "Funciona em qualquer aparelho?",
          a: "Sim, é compatível com Smart TV Samsung Tizen, LG webOS, TV Box Android, Fire TV Stick, computadores e celulares."
        }
      ]
    },
    channels: {
      metaTitle: 'Lista de Canais IPTV Brasil 2026 — Mais de 20.000 Canais em 4K',
      metaDesc: 'Confira todos os canais: Premiere Futebol Clube, SporTV, ESPN, HBO, canais abertos e internacionais em 4K e Full HD.',
      kicker: 'Canais Ao Vivo',
      h1: 'Seus Canais Favoritos <span class="text-gradient">em Qualidade 4K.</span>',
      subtitle: 'Mais de 20.000 canais ao vivo de futebol, filmes, entretenimento e infantis com a máxima estabilidade.',
      searchPlaceholder: 'Buscar canal (ex. Premiere, SporTV, ESPN, Globo)...',
      categories: [
        { id: 'all', name: 'Todos' },
        { id: 'sports', name: 'Futebol & Esportes' },
        { id: 'movies', name: 'Filmes & Séries' },
        { id: 'entertainment', name: 'Entretenimento' },
        { id: 'news', name: 'Notícias & Docus' },
        { id: 'kids', name: 'Infantil' },
        { id: 'international', name: 'Internacional' }
      ],
      badgeText: 'Estabilidade de Servidor 99.9%',
      sampleChannels: [
        { name: 'Premiere Clubes 4K UHD', cat: 'sports', quality: '4K 60FPS' },
        { name: 'SporTV 1 HD Brasil', cat: 'sports', quality: '1080p 60FPS' },
        { name: 'ESPN Brasil HD', cat: 'sports', quality: '1080p 60FPS' },
        { name: 'Combate HD Ao Vivo', cat: 'sports', quality: '1080p' },
        { name: 'Globo SP 4K Ao Vivo', cat: 'entertainment', quality: '4K HDR' },
        { name: 'SBT HD Brasil', cat: 'entertainment', quality: '1080p' },
        { name: 'Record TV HD', cat: 'entertainment', quality: '1080p' },
        { name: 'Telecine Premium HD', cat: 'movies', quality: '1080p' },
        { name: 'Telecine Action HD', cat: 'movies', quality: '1080p' },
        { name: 'HBO Brasil 4K', cat: 'movies', quality: '4K' },
        { name: 'GloboNews HD', cat: 'news', quality: '1080p' },
        { name: 'Discovery Kids Brasil', cat: 'kids', quality: '1080p' }
      ]
    },
    features: {
      metaTitle: 'Recursos IPTV Smarters Pro Brasil — 4K 60FPS, Anti-Travamentos e EPG',
      metaDesc: 'Servidores dedicados no Brasil para garantir menor latência, futebol sem delay, catálogo VOD dublado e suporte 24h.',
      kicker: 'Tecnologia Avançada',
      h1: 'Transmissão Impecável <br><span class="text-gradient">Sem Nenhum Travamento.</span>',
      subtitle: 'Infraestrutura com nós de baixa latência em São Paulo e no exterior para fluidez total.',
      items: [
        {
          title: 'Tecnologia Anti-Travamento 99.9%',
          desc: 'Roteamento inteligente que elimina o congelamento de imagem mesmo em partidas com milhões de espectadores.'
        },
        {
          title: 'Futebol Ao Vivo em 60FPS',
          desc: 'Fluidez real para você não perder nenhum detalhe do passe ou do gol na sua TV 4K.'
        },
        {
          title: 'Modo Multi-Tela',
          desc: 'Acompanhe até quatro partidas simultâneas em uma única tela pelo IPTV Smarters Pro.'
        },
        {
          title: 'Guia de Programação EPG',
          desc: 'Programação completa com horários atualizados de todos os canais ao vivo.'
        },
        {
          title: 'Função Replay 7 Dias',
          desc: 'Perdeu o jogo ou seu programa favorito? Assista novamente quando quiser com o recurso de replay.'
        },
        {
          title: 'Compatibilidade Total & VPN',
          desc: 'Funciona perfeitamente em Smart TV (Samsung, LG), TV Box, Fire TV Stick e com serviços de VPN.'
        }
      ]
    },
    contact: {
      metaTitle: 'Contato & Suporte IPTV Smarters Pro Brasil 24/7',
      metaDesc: 'Dúvidas sobre a instalação ou seu plano? Nosso suporte em português responde em menos de 10 minutos via WhatsApp.',
      kicker: 'Atendimento 24/7',
      h1: 'Estamos Sempre Prontos <span class="text-gradient">Para Te Ajudar.</span>',
      subtitle: 'Atendimento humanizado e rápido pelo WhatsApp e Telegram.'
    }
  },

  {
    code: 'pl',
    name: 'Polski',
    flag: '🇵🇱',
    dir: 'ltr',
    locale: 'pl_PL',
    whatsappText: 'Dzie%C5%84%20dobry%2C%20chcia%C5%82bym%20zam%C3%B3wi%C4%87%20abonament%20IPTV%20w%20jako%C5%9Bci%204K.',
    keywords: ['IPTV Polska Abonament Smarters Pro', 'Najlepsza Telewizja IPTV Bez Zacięć', 'Polskie Kanały 4K Lista', 'Cennik IPTV'],
    nav: {
      home: 'Strona główna',
      services: 'Usługi IPTV',
      features: 'Funkcje',
      channels: 'Kanały',
      pricing: 'Cennik',
      guides: 'Poradniki',
      contact: 'Kontakt',
      cta: 'Rozpocznij',
      support: 'Pomoc'
    },
    carousel: {
      badge: 'Kino & Seriale 4K',
      title: 'Oglądaj Największe Hity Kinowe i Seriale w 4K',
      subtitle: 'Ponad 60 000 filmów i seriali na żądanie (VOD) w jakości Ultra HD z polskim lektorem i napisami.',
      moviesTitle: 'Największe Hity Filmowe (2023 - 2024)',
      seriesTitle: 'Najpopularniejsze Seriale TV',
      sportsTitle: 'Sport na Żywo i Główne Ligi w 60FPS',
      sportsSub: 'Ekstraklasa, Liga Mistrzów, Premier League, KSW, UFC i Formuła 1 na żywo w 4K 60FPS bez buforowania.'
    },
    pricing: {
      metaTitle: 'IPTV Polska Abonament Smarters Pro — Najlepsza IPTV 4K od 14,95€',
      metaDesc: 'Kup najlepszy abonament IPTV w Polsce. Ponad 20 000 kanałów, Canal+ Sport, Polsat Sport, Eleven Sports, VOD i natychmiastowa aktywacja.',
      kicker: 'Pakiety Abonamentowe',
      h1: 'Proste i przejrzyste <br class="hidden md:block"><span class="text-gradient">ceny.</span>',
      subtitle: 'Nieograniczony dostęp do wszystkich polskich i zagranicznych kanałów TV oraz biblioteki filmów w jakości 4K.',
      deviceTabs: ['1 Urządzenie', '2 Urządzenia', '3 Urządzenia'],
      savePercent: ['Oszczędzasz 14%', 'Oszczędzasz 33%', 'Oszczędzasz 50%', 'Oszczędzasz 67%'],
      popularBadge: 'Najczęściej Wybierany',
      diamondBadge: 'Pakiet Diamentowy · Najlepsza Wartość',
      diamondRate: 'Tylko',
      plans: [
        { months: 1, name: '1 Miesiąc', price: '14.95€', rawPrice: 14.95 },
        { months: 3, name: '3 Miesiące', price: '29.95€', rawPrice: 29.95 },
        { months: 6, name: '6 Miesięcy', price: '44.95€', rawPrice: 44.95 },
        { months: 12, name: '12 Miesięcy', price: '59.95€', rawPrice: 59.95 },
        { months: 24, name: '24 Miesiące', price: '99.95€', rawPrice: 99.95 }
      ],
      features: [
        'Wszystkie polskie kanały sportowe i filmowe (Canal+, Polsat)',
        'Ogromna biblioteka filmów VOD w 4K z polskim lektorem',
        'Działa na Smart TV, Fire TV Stick, Android oraz iOS',
        'Technologia Anti-Freeze zapobiegająca zacięciom obrazu',
        'Elektroniczny przewodnik programowy (EPG) i CatchUp',
        'Pomoc techniczna i wsparcie klienta 24/7'
      ],
      ctaButton: 'Przejdź do WhatsApp',
      trustCards: [
        {
          title: 'Bezpieczne Płatności',
          desc: 'Wszystkie transakcje są w pełni szyfrowane. Akceptujemy karty płatnicze oraz kryptowaluty.'
        },
        {
          title: 'Wsparcie Techniczne 24/7',
          desc: 'Nasz zespół pomoże Ci w konfiguracji aplikacji poprzez WhatsApp i Telegram.'
        },
        {
          title: 'Błyskawiczna Aktywacja',
          desc: 'Dane logowania Xtream Codes otrzymasz na swój e-mail zaledwie kilka minut po zamówieniu.'
        }
      ],
      faqs: [
        {
          q: "Jak skonfigurować IPTV Smarters Pro?",
          a: "Pobierz aplikację na telewizor lub telefon, wybierz 'Login with Xtream Codes API' i wprowadź dane otrzymane w mailu."
        },
        {
          q: "Czy transmisje sportowe działają bez zacięć?",
          a: "Tak, dzięki dedykowanym serwerom z technologią 60FPS mecze piłkarskie i gale sportów walki działają w 100% płynnie."
        },
        {
          q: "Czy mogę korzystać z VPN?",
          a: "Tak, nasza usługa jest w pełni kompatybilna z dowolnym VPN w celu ochrony prywatności."
        }
      ]
    },
    channels: {
      metaTitle: 'Lista Polskich Kanałów IPTV 2026 — Ponad 20 000 Kanałów 4K',
      metaDesc: 'Pełna lista kanałów: Canal+ Sport, Polsat Sport Premium, Eleven Sports, TVN, TVP, HBO i kanały zagraniczne w 4K.',
      kicker: 'Kanały na Żywo',
      h1: 'Wszystkie Twoje Kanały <span class="text-gradient">w Jakości 4K.</span>',
      subtitle: 'Ponad 20 000 kanałów na żywo z najlepszym sportem, filmami, wiadomościami i programami dla dzieci.',
      searchPlaceholder: 'Szukaj kanału (np. Canal+ Sport, Polsat, TVN)...',
      categories: [
        { id: 'all', name: 'Wszystkie' },
        { id: 'sports', name: 'Sport i Mecze' },
        { id: 'movies', name: 'Filmy i Seriale' },
        { id: 'entertainment', name: 'Rozrywka' },
        { id: 'news', name: 'Wiadomości i Doku' },
        { id: 'kids', name: 'Dzieci i Rodzina' },
        { id: 'international', name: 'Zagraniczne' }
      ],
      badgeText: 'Stabilność Serwerów 99.9%',
      sampleChannels: [
        { name: 'Canal+ Sport 4K UHD', cat: 'sports', quality: '4K 60FPS' },
        { name: 'Polsat Sport Premium 1 HD', cat: 'sports', quality: '1080p 60FPS' },
        { name: 'Eleven Sports 1 4K', cat: 'sports', quality: '4K 60FPS' },
        { name: 'TVP 1 4K Direct', cat: 'entertainment', quality: '4K HDR' },
        { name: 'TVN HD Polska', cat: 'entertainment', quality: '1080p' },
        { name: 'Polsat HD', cat: 'entertainment', quality: '1080p' },
        { name: 'HBO Polska HD', cat: 'movies', quality: '1080p' },
        { name: 'Canal+ Premium HD', cat: 'movies', quality: '1080p' },
        { name: 'Discovery Channel Polska', cat: 'news', quality: '1080p' },
        { name: 'MiniMini+ HD', cat: 'kids', quality: '1080p' }
      ]
    },
    features: {
      metaTitle: 'Funkcje IPTV Smarters Pro — 4K 60FPS, Brak Buforowania i EPG',
      metaDesc: 'Poznaj parametry techniczne: serwery anti-freeze, jakość 4K UHD, tryb multi-ekran i archiwum 7 dni.',
      kicker: 'Nowoczesna Technologia',
      h1: 'Niezrównana Stabilność <br><span class="text-gradient">Bez Buforowania.</span>',
      subtitle: 'Europejska sieć serwerów dedykowanych zapewniająca minimalne opóźnienia i natychmiastowe przełączanie kanałów.',
      items: [
        {
          title: 'Technologia Anti-Freeze 99.9%',
          desc: 'Dynamiczne rozpraszanie obciążenia zapobiega zawieszaniu się obrazu w kluczowych momentach meczu.'
        },
        {
          title: 'Sport na Żywo w 60FPS',
          desc: 'Maksymalna płynność dynamicznych scen sportowych w jakości 4K Ultra HD.'
        },
        {
          title: 'Widok Wieloekranowy (Multi-Screen)',
          desc: 'Oglądaj do 4 wydarzeń sportowych równocześnie na jednym ekranie telewizora.'
        },
        {
          title: 'Przewodnik Programowy EPG',
          desc: 'Zawsze aktualna ramówka telewizyjna ze szczegółowymi opisami programów.'
        },
        {
          title: 'Archiwum i Replay 7 Dni',
          desc: 'Przegapiłeś mecz lub ulubiony program? Obejrzyj go z poziomu archiwum do 7 dni wstecz.'
        },
        {
          title: 'Zgodność z Każdym Sprzętem i VPN',
          desc: 'Działa na Smart TV (Samsung, LG), FireStick, TV Box, smartfonach oraz z programami VPN.'
        }
      ]
    },
    contact: {
      metaTitle: 'Kontakt & Pomoc Techniczna — IPTV Smarters Pro 24/7',
      metaDesc: 'Masz pytania dotyczące konfiguracji lub zamówienia? Nasz zespół wsparcia jest dostępny 24/7 na WhatsApp i Telegramie.',
      kicker: 'Wsparcie Klienta 24/7',
      h1: 'Jesteśmy Zawsze do <span class="text-gradient">Twojej Dyspozycji.</span>',
      subtitle: 'Odpowiadamy na wiadomości w mniej niż 10 minut.'
    }
  },

  {
    code: 'ko',
    name: '한국어',
    flag: '🇰🇷',
    dir: 'ltr',
    locale: 'ko_KR',
    whatsappText: '%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94%20IPTV%20Smarters%20Pro%204K%20%EA%B5%AC%EB%8F%85%EC%9D%84%20%EC%8B%A0%EC%B2%AD%ED%95%98%EA%B3%A0%20%EC%8B%B6%EC%8A%B5%EB%8B%88%EB%8B%A4.',
    keywords: ['IPTV 스마터즈 프로 구독', '한국 및 글로벌 4K 채널 실시간 스트리밍', '버퍼링 없는 최고의 IPTV 서비스', 'IPTV 요금제 및 가격'],
    nav: {
      home: '홈',
      services: 'IPTV 서비스',
      features: '주요기능',
      channels: '채널목록',
      pricing: '요금제',
      guides: '설정가이드',
      contact: '고객지원',
      cta: '지금 시작하기',
      support: '고객지원'
    },
    carousel: {
      badge: '4K VOD 영화 & 시리즈',
      title: '최신 블록버스터 영화 및 인기 TV 시리즈 4K 스트리밍',
      subtitle: '60,000편 이상의 최신 영화와 VOD 시리즈를 초고화질 4K UHD로 끊김 없이 즉시 감상하세요.',
      moviesTitle: '최신 흥행 영화 (2023 - 2024)',
      seriesTitle: '글로벌 인기 TV 시리즈',
      sportsTitle: '실시간 스포츠 및 프리미어 리그 (4K 60FPS)',
      sportsSub: '손흥민 프리미어리그, 챔피언스리그, KBO, UFC, NBA를 버퍼링 없는 4K 60FPS 초고화질로 라이브 시청하세요.'
    },
    pricing: {
      metaTitle: 'IPTV Smarters Pro 구독 요금제 — 끊김 없는 4K 프리미엄 IPTV (월 14.95$부터)',
      metaDesc: 'IPTV 스마터즈 프로 프리미엄 구독 요금제 안내. 20,000개 이상의 실시간 4K 채널, 손흥민 프리미어리그, VOD 영화 및 즉시 계정 활성화.',
      kicker: '구독 요금제',
      h1: '간편하고 투명한 <br class="hidden md:block"><span class="text-gradient">요금제.</span>',
      subtitle: '모든 실시간 방송 채널과 최신 4K 영화 및 시리즈를 무제한으로 시청하세요. 안전한 결제와 즉각적인 계정 발급.',
      deviceTabs: ['기기 1대', '기기 2대', '기기 3대'],
      savePercent: ['14% 할인', '33% 할인', '50% 할인', '67% 할인'],
      popularBadge: '가장 인기 있는 플랜',
      diamondBadge: '다이아몬드 플랜 · 최고의 가치',
      diamondRate: '월 환산 금액',
      plans: [
        { months: 1, name: '1개월', price: '14.95$', rawPrice: 14.95 },
        { months: 3, name: '3개월', price: '29.95$', rawPrice: 29.95 },
        { months: 6, name: '6개월', price: '44.95$', rawPrice: 44.95 },
        { months: 12, name: '12개월', price: '59.95$', rawPrice: 59.95 },
        { months: 24, name: '24개월', price: '99.95$', rawPrice: 99.95 }
      ],
      features: [
        '국내 주요 방송 및 글로벌 스포츠(EPL, UCL) 4K 채널',
        '60,000편 이상의 초고화질 4K/FHD VOD 영화 및 드라마 라이브러리',
        '스마트 TV, 파이어스틱, 안드로이드, 아이폰 및 PC 완벽 지원',
        '버퍼링 방지(Anti-Freeze) 기술 및 초당 60프레임(60FPS) 고화질',
        '실시간 전자 편성표(EPG) 및 7일 다시보기(CatchUp)',
        '연중무휴 24시간 실시간 전문 기술 지원팀 운영'
      ],
      ctaButton: 'WhatsApp으로 주문하기',
      trustCards: [
        {
          title: '100% 안전한 결제 시스템',
          desc: '은행권 수준의 보안 암호화 결제를 지원합니다. 신용카드 및 암호화폐 결제가 가능합니다.'
        },
        {
          title: '24/7 전문 기술 지원',
          desc: '기기 설정이나 이용 중 궁금한 사항은 WhatsApp과 Telegram을 통해 언제든 즉시 안내해 드립니다.'
        },
        {
          title: '즉각적인 계정 발급',
          desc: '결제 완료 후 수 분 이내에 Xtream Codes 접속 정보가 이메일로 안전하게 자동 전송됩니다.'
        }
      ],
      faqs: [
        {
          q: "IPTV Smarters Pro 앱에서 어떻게 설정하나요?",
          a: "앱 실행 후 'Login with Xtream Codes API'를 선택하고, 결제 후 이메일로 받으신 사용자 이름, 비밀번호, 서버 URL을 입력하시면 즉시 채널이 로드됩니다."
        },
        {
          q: "해외 축구나 스포츠 중계 시 버퍼링이 없나요?",
          a: "네, 대용량 분산 서버 네트워크와 60FPS 전송 기술을 적용하여 접속자가 몰리는 프리미어리그 빅매치에서도 끊김 없이 매끄럽게 시청하실 수 있습니다."
        },
        {
          q: "VPN과 함께 사용할 수 있나요?",
          a: "물론입니다. 저희 서비스는 NordVPN, ExpressVPN 등 주요 VPN 서비스와 100% 호환되어 안전하고 자유로운 스트리밍을 보장합니다."
        }
      ]
    },
    channels: {
      metaTitle: '2026 IPTV 채널 목록 — 20,000개 이상의 글로벌 4K 방송',
      metaDesc: '스포티비, 프리미어리그, 해외 축구, 글로벌 뉴스, 영화, 엔터테인먼트 등 20,000개 이상의 전 세계 실시간 4K 채널 편성표를 확인하세요.',
      kicker: '실시간 채널 편성표',
      h1: '선호하는 모든 채널을 <span class="text-gradient">4K 고화질로.</span>',
      subtitle: '20,000개 이상의 국내외 실시간 채널을 초고화질 4K 60FPS로 끊김 없이 즐겨보세요.',
      searchPlaceholder: '채널 검색 (예: SPOTV, Sky Sports, tvN, SBS)...',
      categories: [
        { id: 'all', name: '전체 채널' },
        { id: 'sports', name: '스포츠 & 축구' },
        { id: 'movies', name: '영화 & 드라마' },
        { id: 'entertainment', name: '예능 & 오락' },
        { id: 'news', name: '뉴스 & 다큐' },
        { id: 'kids', name: '키즈 & 애니' },
        { id: 'international', name: '글로벌 방송' }
      ],
      badgeText: '99.9% 무결점 서버 가동률',
      sampleChannels: [
        { name: 'SPOTV ON 4K UHD', cat: 'sports', quality: '4K 60FPS' },
        { name: 'SPOTV Prime 1 HD', cat: 'sports', quality: '1080p 60FPS' },
        { name: 'Sky Sports Premier League UHD', cat: 'sports', quality: '4K 60FPS' },
        { name: 'tvN HD K-Drama', cat: 'entertainment', quality: '1080p' },
        { name: 'SBS HD Korea', cat: 'entertainment', quality: '1080p' },
        { name: 'KBS 2TV HD', cat: 'entertainment', quality: '1080p' },
        { name: 'JTBC HD Korea', cat: 'entertainment', quality: '1080p' },
        { name: 'OCN Movies 4K', cat: 'movies', quality: '4K' },
        { name: 'YTN News 24', cat: 'news', quality: '1080p' },
        { name: 'Tooniverse HD', cat: 'kids', quality: '1080p' }
      ]
    },
    features: {
      metaTitle: 'IPTV Smarters Pro 주요 기능 — 4K 60FPS, 버퍼링 제로 및 멀티스크린',
      metaDesc: '안티프리즈 무중단 전송, 초당 60프레임 스포츠 스트리밍, 4채널 동시 시청 멀티스크린, 7일 다시보기 기능을 제공합니다.',
      kicker: '차세대 스트리밍 기술',
      h1: '버퍼링 없는 완벽한 몰입감 <br><span class="text-gradient">초고화질 4K 전송.</span>',
      subtitle: '글로벌 초고속 CDN 노드를 통해 딜레이 없는 즉각적인 채널 전환과 안정적인 방송 품질을 제공합니다.',
      items: [
        {
          title: '99.9% 안티프리즈(Anti-Freeze) 기술',
          desc: '지능형 트래픽 분산 시스템을 통해 시청자가 급증하는 주요 스포츠 경기 시간대에도 버퍼링을 철저히 차단합니다.'
        },
        {
          title: '초당 60프레임(60FPS) 리얼 4K 화질',
          desc: '잔상 없는 부드러운 화면 전환으로 역동적인 축구와 모터스포츠의 생생한 감동을 그대로 전달합니다.'
        },
        {
          title: '4분할 멀티스크린 시청',
          desc: '동시간대에 진행되는 최대 4개의 경기를 한 화면에서 동시에 분할 시청할 수 있습니다.'
        },
        {
          title: '실시간 전자 프로그램 가이드(EPG)',
          desc: '방송 일정과 프로그램 상세 정보를 플레이어 내에서 실시간으로 간편하게 확인할 수 있습니다.'
        },
        {
          title: '7일 다시보기(Catch-Up)',
          desc: '놓친 본방송이나 새벽 경기 중계도 7일 전 방송까지 언제든지 다시 재생할 수 있습니다.'
        },
        {
          title: '모든 스마트 기기 및 VPN 완벽 호환',
          desc: '삼성, LG 스마트 TV, 안드로이드 TV 박스, 아마존 파이어스틱, 모바일 및 모든 VPN을 지원합니다.'
        }
      ]
    },
    contact: {
      metaTitle: '고객지원 및 문의 — IPTV Smarters Pro 24/7 실시간 상담',
      metaDesc: '기기 설정 지원이나 서비스 이용 문의가 있으신가요? WhatsApp 및 Telegram을 통해 연중무휴 24시간 실시간 지원을 받으실 수 있습니다.',
      kicker: '24시간 고객지원 센터',
      h1: '언제나 고객님의 곁에서 <span class="text-gradient">신속하게 지원합니다.</span>',
      subtitle: '전문 기술팀이 10분 이내에 신속하고 친절하게 답변해 드립니다.'
    }
  }
];
