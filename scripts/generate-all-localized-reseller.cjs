const fs = require('fs');
const path = require('path');
const { generateUniversalHeader, generateUniversalFooter } = require('./universal-components.cjs');

const translations = {
  fr: {
    title: 'Panel Revendeur IPTV — Lancez Votre Business IPTV | IPTV Smarters Pro',
    desc: 'Devenez revendeur IPTV avec Smarters Pro. Crédits sans expiration, panel marque blanche Xtream, marge nette 60-70%. Packs dès 99$. Test 24h gratuit inclus.',
    badge: 'DISPONIBLE • LANCEZ VOTRE BUSINESS IPTV',
    h1: 'Panel Revendeur IPTV — <span class="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Lancez Votre Business IPTV</span>',
    heroP: 'Créez votre propre marque IPTV propulsée par l\'infrastructure Smarters. Achetez des crédits en gros, créez des tests et abonnements sur votre panel personnalisé, et conservez 60 à 70% de marge nette.',
    chips: {
      noBuffer: 'Zéro Coupure',
      noExpire: 'Crédits Sans Expiration',
      uptime: '99,99% Disponibilité Garantie',
      support: 'Support WhatsApp 24/7'
    },
    btnPackages: 'Voir les Packs de Crédits ↓',
    btnTrial: 'Obtenir un Test 24h Gratuit',
    trustText: 'Activation immédiate • Configuration assistée en 15 min • 99,9% uptime streaming',
    benefitsBadge: 'AVANTAGES REVENDEUR',
    benefitsTitle: 'Pourquoi Choisir Notre Programme Revendeur ?',
    benefitsSub: 'Tout ce dont vous avez besoin pour lancer et développer un service de streaming rentable dès le premier jour.',
    card1Title: 'Zéro Coupure',
    card1Desc: 'Serveurs dédiés 20 Gbps avec répartition de charge et garantie 99,9% uptime. Vos clients profitent des directs sportifs et films en 4K sans aucun freeze.',
    card2Title: 'Crédits Sans Expiration',
    card2Desc: 'Vos crédits achetés restent dans votre compte à vie jusqu\'à ce que vous les assigniez à un abonnement client actif. Zéro risque, zéro capital perdu.',
    card3Title: 'Panel Marque Blanche',
    card3Desc: 'Interface web complète compatible Xtream Codes. Créez, prolongez, suspendez et gérez vos comptes clients sous votre propre identité de marque.',
    card4Title: 'Support Prioritaire 24/7',
    card4Desc: 'Ligne WhatsApp directe avec nos ingénieurs pour vos activations en lot, gestion des bouquets, assistance technique et recharges immédiates.',
    processBadge: 'FONCTIONNEMENT',
    processTitle: 'Comment Fonctionne le Système de Crédits',
    processSub: '3 étapes simples pour lancer votre activité et gérer vos clients.',
    step1Title: 'Choisissez Votre Pack de Crédits',
    step1Desc: '1 crédit = 1 mois d\'abonnement pour un client. 12 crédits = 1 an. Les crédits ne périment jamais.',
    step2Title: 'Configuration Immédiate du Panel',
    step2Desc: 'Contactez-nous sur WhatsApp. Recevez vos identifiants d\'accès au panel et vos crédits rechargés en moins de 15 minutes.',
    step3Title: 'Vendez et Conservez Vos Bénéfices',
    step3Desc: 'Générez des tests 24h gratuits, vendez à vos propres tarifs et conservez 60 à 70% de marge nette sur chaque renouvellement.',
    pricingBadge: 'TARIFS DE GROS',
    pricingTitle: 'Packs de Crédits Revendeur IPTV',
    pricingSub: '1 CRÉDIT = 1 MOIS DE SERVICE • CRÉDITS SANS EXPIRATION • ASSISTANCE REVENDEUR 24/7',
    tier1: {
      badge: 'Pack Découverte',
      credits: '20 Crédits',
      sub: 'Idéal pour tester la demande et configurer votre panel',
      price: '99 $',
      rate: '4,95 $ / crédit',
      f1: '20 mois-clients de service',
      f2: 'Activation immédiate du panel revendeur',
      f3: 'Tests 24h gratuits illimités',
      f4: 'Crédits valables à vie',
      btn: 'Commander sur WhatsApp'
    },
    tier2: {
      badge: 'Plus Populaire',
      credits: '50 Crédits',
      sub: 'Meilleur équilibre entre marge et investissement',
      price: '289 $',
      rate: '5,78 $ / crédit équivalent',
      f1: '50 mois-clients de service',
      f2: 'Panel marque blanche avec création de sous-revendeurs',
      f3: 'Tests 24h & 48h illimités',
      f4: '100+ chaînes EPG & générateur m3u auto',
      btn: 'Commander sur WhatsApp'
    },
    tier3: {
      badge: 'Volume Élevé',
      credits: '150 Crédits',
      sub: 'Pour revendeurs actifs dépassant 50 abonnés',
      price: '649 $',
      rate: '4,33 $ / crédit',
      f1: '150 mois-clients de service',
      f2: 'Routage de flux haute priorité',
      f3: 'Gestionnaire de compte WhatsApp dédié',
      f4: 'Crédits valables à vie',
      btn: 'Commander sur WhatsApp'
    },
    tier4: {
      badge: 'Meilleure Offre',
      credits: '300 Crédits',
      sub: 'Marge maximale pour professionnels de l\'IPTV',
      price: '1 199 $',
      rate: '3,99 $ / crédit • Meilleur tarif de gros',
      f1: '300 mois-clients de service',
      f2: 'Droits complets de gestion sous-revendeurs',
      f3: 'DNS personnalisé & marque blanche totale',
      f4: 'Support technique prioritaire à vie',
      btn: 'Commander sur WhatsApp'
    },
    calcBadge: 'SIMULATEUR INTERACTIF',
    calcTitle: 'Calculateur de Bénéfices Revendeur IPTV',
    calcSub: 'Simulez vos revenus mensuels et annuels selon le nombre de clients et vos tarifs de vente.',
    lblClients: 'Clients Actifs',
    lblPrice: 'Prix de Vente Mensuel ($)',
    lblDuration: 'Durée de Facturation',
    durMonthly: 'Mensuel (1 crédit / mois)',
    durQuarterly: 'Trimestriel (3 crédits / 3 mois)',
    durAnnual: 'Annuel (12 crédits / 12 mois)',
    lblTier: 'Palier de Crédits de Gros',
    tierOptStarter: 'Starter (4,95 $ / crédit)',
    tierOptBiz: 'Business (5,78 $ / crédit)',
    tierOptPro: 'Professionnel (4,33 $ / crédit)',
    tierOptEnt: 'Entreprise (3,99 $ / crédit)',
    resRevenue: 'Chiffre d\'Affaires Estimé',
    resCost: 'Coût des Crédits de Gros',
    resProfit: 'Bénéfice Net Estimé',
    resMargin: 'Marge Nette',
    calcFootnote: 'Basé sur les tarifs de gros. Vous fixez librement vos prix de vente au détail et devises.',
    faqBadge: 'QUESTIONS & RÉPONSES',
    faqTitle: 'Foire Aux Questions',
    faqSub: 'Tout ce que vous devez savoir sur notre programme revendeur IPTV.',
    q1: 'Qu\'est-ce qu\'un Panel Revendeur IPTV ?',
    a1: 'Un panel revendeur IPTV est un tableau de bord web qui vous permet de gérer les abonnements de vos clients. Vous achetez des crédits en gros à tarif réduit, et vous les utilisez pour créer, activer et gérer des comptes à vos propres prix de vente.',
    q2: 'Mes crédits ont-ils une date d\'expiration ?',
    a2: 'Non. Les crédits achetés via notre programme n\'expirent jamais. Ils restent disponibles dans votre solde jusqu\'à ce que vous activiez une ligne client.',
    q3: 'Puis-je générer des tests gratuits pour mes prospects ?',
    a3: 'Oui ! Tous les comptes revendeurs ont accès à la génération de lignes de test gratuites de 24 heures directement depuis le panel, sans aucune déduction de crédit.',
    q4: 'En combien de temps mon panel est-il opérationnel ?',
    a4: 'Après confirmation de votre pack sur WhatsApp, vos identifiants de panel et vos crédits rechargés sont émis sous 10 à 15 minutes.',
    ctaTitle: 'Prêt à Lancer Votre Business IPTV ?',
    ctaDesc: 'Contactez notre équipe sur WhatsApp dès aujourd\'hui pour obtenir votre panel marque blanche et activer vos premières lignes.',
    ctaBtnWa: 'Discuter sur WhatsApp',
    ctaBtnPackages: 'Voir les Packs ↑'
  },

  de: {
    title: 'IPTV Reseller Panel — Starten Sie Ihr IPTV-Business | IPTV Smarters Pro',
    desc: 'Werden Sie IPTV-Reseller mit Smarters Pro. Credits ohne Ablauf, White-Label-Xtream-Panel, 60–70% Nettomarge. Starter-Pakete ab 99 $. Kostenlose 24h-Testlinie inklusive.',
    badge: 'JETZT VERFÜGBAR • STARTEN SIE IHR IPTV-BUSINESS',
    h1: 'IPTV Reseller Panel — <span class="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Starten Sie Ihr IPTV-Business</span>',
    heroP: 'Bauen Sie Ihre eigene IPTV-Marke auf, unterstützt durch die Smarters-Infrastruktur. Kaufen Sie Großhandels-Credits, erstellen Sie Tests und Abonnements auf Ihrem eigenen Panel und behalten Sie 60–70% Reingewinn.',
    chips: {
      noBuffer: 'Kein Puffern',
      noExpire: 'Credits Laufen Nie Ab',
      uptime: '99,99% Garantierte Uptime',
      support: '24/7 WhatsApp-Support'
    },
    btnPackages: 'Credit-Pakete Ansehen ↓',
    btnTrial: 'Kostenlose 24h-Testlinie Anfordern',
    trustText: 'Sofortige Aktivierung • Panel-Einrichtung in 15 Min • 99,9% Streaming-Uptime',
    benefitsBadge: 'RESELLER-VORTEILE',
    benefitsTitle: 'Warum Unser Reseller-Programm Wählen?',
    benefitsSub: 'Alles, was Sie brauchen, um vom ersten Tag an einen profitablen Streaming-Dienst zu betreiben.',
    card1Title: 'Kein Puffern',
    card1Desc: 'Dedizierte 20 Gbps-Server mit Lastverteilung und 99,9% Verfügbarkeitsgarantie. Ihre Kunden genießen ruckelfreien Live-Sport und Filme in 4K.',
    card2Title: 'Credits Laufen Nie Ab',
    card2Desc: 'Ihre gekauften Credits bleiben für immer auf Ihrem Konto, bis Sie sie einem aktiven Benutzerkonto zuweisen. Kein Risiko, kein Verlust.',
    card3Title: 'White-Label-Panel',
    card3Desc: 'Vollständiges Xtream Codes-kompatibles Web-Management-Panel. Erstellen, verlängern, pausieren und verwalten Sie Kundenkonten unter Ihrer eigenen Marke.',
    card4Title: '24/7 Prioritäts-Support',
    card4Desc: 'Direkte WhatsApp-Ingenieurlinie für Massenaktivierungen, Bouquet-Verwaltung, Fehlerbehebung und sofortiges Aufladen.',
    processBadge: 'ABLAUF',
    processTitle: 'So Funktioniert das Credit-System',
    processSub: '3 einfache Schritte zum Starten und Verwalten Ihrer Kunden.',
    step1Title: 'Credit-Paket Wählen',
    step1Desc: '1 Credit = 1 Monat Abonnement für einen Kunden. 12 Credits = 1 Jahr. Credits verfallen nie.',
    step2Title: 'Sofortige Panel-Einrichtung',
    step2Desc: 'Schreiben Sie uns auf WhatsApp. Erhalten Sie Ihre Panel-Zugangsdaten und Ihr Credit-Guthaben innerhalb von 15 Minuten.',
    step3Title: 'Verkaufen & Gewinn Behalten',
    step3Desc: 'Erstellen Sie kostenlose 24h-Tests, verkaufen Sie zu Ihren eigenen Preisen und behalten Sie 60–70% Marge bei jeder Verlängerung.',
    pricingBadge: 'GROSSHANDELSPREISE',
    pricingTitle: 'IPTV Reseller Credit-Pakete',
    pricingSub: '1 CREDIT = 1 MONAT SERVICE • CREDITS VERFALLEN NIE • 24/7 RESELLER-SUPPORT',
    tier1: {
      badge: 'Starter-Paket',
      credits: '20 Credits',
      sub: 'Ideal zum Testen der Nachfrage & Einrichtung Ihres Panels',
      price: '99 $',
      rate: '4,95 $ / Credit',
      f1: '20 Kunden-Monate Service',
      f2: 'Sofortige Aktivierung des Reseller-Panels',
      f3: 'Unbegrenzte kostenlose 24h-Tests',
      f4: 'Credits laufen nie ab',
      btn: 'Über WhatsApp Bestellen'
    },
    tier2: {
      badge: 'Am Beliebtesten',
      credits: '50 Credits',
      sub: 'Beste Balance aus Marge & Kapitaleinsatz',
      price: '289 $',
      rate: '5,78 $ / Credit-Äquivalent',
      f1: '50 Kunden-Monate Service',
      f2: 'White-Label-Panel mit Sub-Reseller-Erstellung',
      f3: 'Unbegrenzte 24h & 48h Tests',
      f4: '100+ EPG-Kanäle & automatischer m3u-Generator',
      btn: 'Über WhatsApp Bestellen'
    },
    tier3: {
      badge: 'Hohes Volumen',
      credits: '150 Credits',
      sub: 'Für aktive Verkäufer mit mehr als 50 Abonnenten',
      price: '649 $',
      rate: '4,33 $ / Credit',
      f1: '150 Kunden-Monate Service',
      f2: 'Prioritäts-Stream-Routing',
      f3: 'Dedizierter WhatsApp-Account-Manager',
      f4: 'Credits laufen nie ab',
      btn: 'Über WhatsApp Bestellen'
    },
    tier4: {
      badge: 'Bester Wert',
      credits: '300 Credits',
      sub: 'Maximale Marge für professionelle IPTV-Anbieter',
      price: '1.199 $',
      rate: '3,99 $ / Credit • Bester Großhandelspreis',
      f1: '300 Kunden-Monate Service',
      f2: 'Volle Sub-Reseller-Master-Rechte',
      f3: 'Eigenes DNS & vollständiges White-Labeling',
      f4: 'Lebenslanger kostenloser technischer Support',
      btn: 'Über WhatsApp Bestellen'
    },
    calcBadge: 'INTERAKTIVER RECHNER',
    calcTitle: 'IPTV Reseller Gewinn-Rechner',
    calcSub: 'Simulieren Sie Ihre monatlichen und jährlichen Einnahmen basierend auf Kundenzahl und Verkaufspreis.',
    lblClients: 'Aktive Kunden',
    lblPrice: 'Verkaufspreis pro Monat ($)',
    lblDuration: 'Abrechnungsdauer',
    durMonthly: 'Monatlich (1 Credit / Monat)',
    durQuarterly: 'Vierteljährlich (3 Credits / 3 Monate)',
    durAnnual: 'Jährlich (12 Credits / 12 Monate)',
    lblTier: 'Großhandels-Stufe',
    tierOptStarter: 'Starter (4,95 $ / Credit)',
    tierOptBiz: 'Business (5,78 $ / Credit)',
    tierOptPro: 'Professional (4,33 $ / Credit)',
    tierOptEnt: 'Enterprise (3,99 $ / Credit)',
    resRevenue: 'Geschätzter Umsatz',
    resCost: 'Großhandelskosten',
    resProfit: 'Geschätzter Reingewinn',
    resMargin: 'Nettomarge',
    calcFootnote: 'Basierend auf Großhandelspreisen. Ihre Endkundenpreise und Währungen bestimmen Sie selbst.',
    faqBadge: 'FRAGEN & ANTWORTEN',
    faqTitle: 'Häufig Gestellte Fragen',
    faqSub: 'Alles, was Sie über unser IPTV-Reseller-Programm wissen müssen.',
    q1: 'Was ist ein IPTV Reseller Panel?',
    a1: 'Ein IPTV-Reseller-Panel ist ein webbasiertes Dashboard, mit dem Sie Abonnements für Ihre eigenen Kunden verwalten. Sie kaufen Credits im Großhandel zu vergünstigten Preisen und nutzen diese zum Erstellen, Aktivieren und Verwalten von Konten zu Ihren eigenen Verkaufspreisen.',
    q2: 'Laufen meine Credits ab?',
    a2: 'Nein. Credits aus unserem Reseller-Programm laufen niemals ab. Sie verbleiben auf Ihrem Guthaben, bis Sie eine Kundenlinie aktivieren.',
    q3: 'Kann ich kostenlose Testlinien für Interessenten erstellen?',
    a3: 'Ja! Alle Reseller-Konten können kostenlose 24-Stunden-Testlinien direkt aus dem Panel generieren – ohne Abzug von Credits.',
    q4: 'Wie schnell bin ich startklar?',
    a4: 'Nach der Auswahl Ihres Credit-Pakets auf WhatsApp erhalten Sie Ihre Panel-Zugangsdaten und aufgeladenen Credits innerhalb von 10 bis 15 Minuten.',
    ctaTitle: 'Bereit, Ihr IPTV-Business zu Starten?',
    ctaDesc: 'Kontaktieren Sie unser Team noch heute auf WhatsApp, um Ihr White-Label-Panel einzurichten und Ihre ersten Kunden zu aktivieren.',
    ctaBtnWa: 'Auf WhatsApp Schreiben',
    ctaBtnPackages: 'Pakete Ansehen ↑'
  },

  es: {
    title: 'Panel Reseller IPTV — Inicia tu Negocio IPTV | IPTV Smarters Pro',
    desc: 'Conviértete en revendedor IPTV con Smarters Pro. Créditos sin vencimiento, panel marca blanca Xtream, margen neto 60–70%. Packs desde $99. Prueba 24h gratis incluida.',
    badge: 'DISPONIBLE AHORA • INICIA TU NEGOCIO IPTV',
    h1: 'Panel Reseller IPTV — <span class="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Inicia tu Negocio IPTV</span>',
    heroP: 'Lanza tu propia marca IPTV impulsada por la infraestructura de Smarters. Compra créditos al por mayor, crea pruebas y suscripciones en tu panel personalizado y conserva el 60–70% de beneficio neto.',
    chips: {
      noBuffer: 'Cero Cortes',
      noExpire: 'Créditos Sin Caducidad',
      uptime: '99,99% Disponibilidad Garantizada',
      support: 'Soporte WhatsApp 24/7'
    },
    btnPackages: 'Ver Paquetes de Créditos ↓',
    btnTrial: 'Obtener Línea de Prueba 24h Gratis',
    trustText: 'Activación instantánea • Configuración asistida en 15 min • 99,9% uptime streaming',
    benefitsBadge: 'BENEFICIOS RESELLER',
    benefitsTitle: '¿Por Qué Elegir Nuestro Programa Reseller?',
    benefitsSub: 'Todo lo que necesitas para lanzar y hacer crecer un servicio de streaming rentable desde el primer día.',
    card1Title: 'Cero Cortes',
    card1Desc: 'Servidores dedicados de 20 Gbps balanceados con garantía de 99,9% de actividad. Tus clientes disfrutan de deportes en vivo y películas en 4K sin congelamientos.',
    card2Title: 'Créditos Sin Caducidad',
    card2Desc: 'Tus créditos comprados permanecen en tu cuenta para siempre hasta que los asignes a suscripciones de clientes activas. Cero riesgo, cero capital perdido.',
    card3Title: 'Panel Marca Blanca',
    card3Desc: 'Panel de administración web totalmente compatible con Xtream Codes. Crea, extiende, pausa y edita cuentas de clientes bajo tu propia identidad de marca.',
    card4Title: 'Soporte Prioritario 24/7',
    card4Desc: 'Línea directa de WhatsApp con nuestros ingenieros para asistirte con activaciones masivas, listas de canales, solución de dudas y recargas inmediatas.',
    processBadge: 'PROCESO',
    processTitle: 'Cómo Funciona el Sistema de Créditos',
    processSub: '3 simples pasos para iniciar y administrar a tus clientes.',
    step1Title: 'Elige tu Paquete de Créditos',
    step1Desc: '1 crédito = 1 mes de suscripción para un cliente. 12 créditos = 1 año. Los créditos nunca caducan.',
    step2Title: 'Configuración Inmediata del Panel',
    step2Desc: 'Escríbenos por WhatsApp. Recibe tus credenciales de acceso al panel y tus créditos cargados en menos de 15 minutos.',
    step3Title: 'Vende y Conserva tus Ganancias',
    step3Desc: 'Genera pruebas gratis de 24h, vende suscripciones a tus propios precios y quédate con un 60–70% de margen en cada renovación.',
    pricingBadge: 'PRECIOS MAYORISTAS',
    pricingTitle: 'Paquetes de Créditos Reseller IPTV',
    pricingSub: '1 CRÉDITO = 1 MES DE SERVICIO • CRÉDITOS SIN VENCIMIENTO • SOPORTE 24/7',
    tier1: {
      badge: 'Pack Inicial',
      credits: '20 Créditos',
      sub: 'Ideal para probar la demanda y configurar tu panel',
      price: '$99',
      rate: '$4.95 / crédito',
      f1: '20 meses-cliente de servicio',
      f2: 'Activación inmediata del panel reseller',
      f3: 'Pruebas gratuitas de 24h ilimitadas',
      f4: 'Los créditos nunca caducan',
      btn: 'Ordenar por WhatsApp'
    },
    tier2: {
      badge: 'Más Popular',
      credits: '50 Créditos',
      sub: 'Mejor equilibrio entre margen e inversión',
      price: '$289',
      rate: '$5.78 / crédito equivalente',
      f1: '50 meses-cliente de servicio',
      f2: 'Panel marca blanca con creación de sub-revendedores',
      f3: 'Pruebas ilimitadas de 24h y 48h',
      f4: '100+ canales con EPG y generador m3u auto',
      btn: 'Ordenar por WhatsApp'
    },
    tier3: {
      badge: 'Alto Volumen',
      credits: '150 Créditos',
      sub: 'Para vendedores activos que superan 50 clientes',
      price: '$649',
      rate: '$4.33 / crédito',
      f1: '150 meses-cliente de servicio',
      f2: 'Enrutamiento de transmisión prioritario',
      f3: 'Gerente de cuenta dedicado en WhatsApp',
      f4: 'Los créditos nunca caducan',
      btn: 'Ordenar por WhatsApp'
    },
    tier4: {
      badge: 'Mejor Valor',
      credits: '300 Créditos',
      sub: 'Máximo margen mayorista para revendedores avanzados',
      price: '$1,199',
      rate: '$3.99 / crédito • Mejor tarifa mayorista',
      f1: '300 meses-cliente de servicio',
      f2: 'Permisos maestros para crear sub-revendedores',
      f3: 'DNS propio y marca blanca total',
      f4: 'Soporte técnico prioritario de por vida',
      btn: 'Ordenar por WhatsApp'
    },
    calcBadge: 'ESTIMADOR INTERACTIVO',
    calcTitle: 'Calculadora de Ganancias Reseller IPTV',
    calcSub: 'Simula tus ingresos mensuales y anuales en función del número de clientes y tus precios de venta.',
    lblClients: 'Clientes Activos',
    lblPrice: 'Precio de Venta Mensual ($)',
    lblDuration: 'Duración de Facturación',
    durMonthly: 'Mensual (1 crédito / mes)',
    durQuarterly: 'Trimestral (3 créditos / 3 meses)',
    durAnnual: 'Anual (12 créditos / 12 meses)',
    lblTier: 'Nivel de Crédito Mayorista',
    tierOptStarter: 'Starter ($4.95 / crédito)',
    tierOptBiz: 'Business ($5.78 / crédito)',
    tierOptPro: 'Professional ($4.33 / crédito)',
    tierOptEnt: 'Enterprise ($3.99 / crédito)',
    resRevenue: 'Ingresos Estimados',
    resCost: 'Costo Mayorista',
    resProfit: 'Ganancia Neta Estimada',
    resMargin: 'Margen Neto',
    calcFootnote: 'Basado en tarifas mayoristas. Los precios al por menor y las monedas son establecidos por ti.',
    faqBadge: 'PREGUNTAS FRECUENTES',
    faqTitle: 'Preguntas Frecuentes',
    faqSub: 'Todo lo que necesitas saber sobre nuestro programa reseller IPTV.',
    q1: '¿Qué es un Panel Reseller IPTV?',
    a1: 'Un panel reseller IPTV es un panel web que te permite administrar suscripciones para tus propios clientes. Compras créditos al por mayor a tarifas reducidas y los usas para crear, activar y gestionar cuentas con tus propios precios de venta.',
    q2: '¿Mis créditos tienen fecha de vencimiento?',
    a2: 'No. Los créditos comprados mediante nuestro programa nunca caducan. Permanecen en tu saldo hasta que actives una línea de usuario final.',
    q3: '¿Puedo generar líneas de prueba gratuitas para prospectos?',
    a3: '¡Sí! Todas las cuentas reseller pueden generar líneas de prueba gratuitas de 24 horas directamente desde el panel sin deducción de créditos.',
    q4: '¿Qué tan rápido puedo comenzar?',
    a4: 'Tras elegir tu paquete de créditos en WhatsApp, tus credenciales de acceso al panel y tus créditos cargados se envían en 10 a 15 minutos.',
    ctaTitle: '¿Listo para Iniciar tu Negocio IPTV?',
    ctaDesc: 'Contacta a nuestro equipo en WhatsApp hoy para configurar tu panel marca blanca y activar tus primeros clientes.',
    ctaBtnWa: 'Enviar Mensaje por WhatsApp',
    ctaBtnPackages: 'Ver Paquetes ↑'
  },

  ar: {
    dir: 'rtl',
    title: 'لوحة موزع IPTV — ابدأ مشروع IPTV المربح | IPTV Smarters Pro',
    desc: 'كن موزع IPTV مع Smarters Pro. نقاط بدون تاريخ انتهاء، لوحة تحكم بعلامتك التجارية، أرباح صافية 60-70%. باقات تبدأ من 99 دولار مع تجربة مجانية 24 ساعة.',
    badge: 'متاح الآن • ابدأ مشروع IPTV الخاص بك',
    h1: 'لوحة موزع IPTV — <span class="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">ابدأ مشروع IPTV المربح</span>',
    heroP: 'أطلق علامتك التجارية الخاصة في بث IPTV المدعومة ببنية Smarters التحتية. اشترِ النقاط بأسعار الجملة، وأنشئ اشتراكات وتجارب لعملائك من لوحتك الخاصة، واحتفظ بنسبة 60-70% كربح صافٍ.',
    chips: {
      noBuffer: 'بدون تقطيع',
      noExpire: 'النقاط لا تنتهي صلاحيتها',
      uptime: 'ضمان تشغيل 99.99%',
      support: 'دعم واتساب 24/7'
    },
    btnPackages: 'عرض باقات النقاط ↓',
    btnTrial: 'طلب تجربة مجانية 24 ساعة',
    trustText: 'تفعيل فوري • إعداد اللوحة خلال 15 دقيقة • استقرار بث 99.9%',
    benefitsBadge: 'مزايا الموزع',
    benefitsTitle: 'لماذا تختار برنامج الموزعين لدينا؟',
    benefitsSub: 'كل ما تحتاجه لإطلاق وتوسيع خدمة بث مربحة من اليوم الأول.',
    card1Title: 'بدون تقطيع',
    card1Desc: 'خوادم مخصصة بسرعة 20 جيجابت مع توزيع الحمل وضمان تشغيل 99.9%. يستمتع عملاؤك بالبث المباشر للمباريات والأفلام بجودة 4K دون أدنى تجميد.',
    card2Title: 'النقاط لا تنتهي أبداً',
    card2Desc: 'النقاط المشتراة تظل في حسابك مدى الحياة حتى تقوم بتعيينها لاشتراك عميل نشط. صفر مخاطرة وبدون أي خسارة في رأس المال.',
    card3Title: 'لوحة بعلامتك التجارية',
    card3Desc: 'لوحة تحكم ويب متكاملة متوافقة تماماً مع Xtream Codes. أنشئ وعدل ومدد وأوقف حسابات العملاء بهويتك واسم علامتك التجارية.',
    card4Title: 'دعم فني ذو أولوية 24/7',
    card4Desc: 'خط واتساب مباشر مع مهندسينا لمساعدتك في التفعيلات الجماعية، ترتيب باقات القنوات، استكشاف الأخطاء وشحن الرصيد الفوري.',
    processBadge: 'آلية العمل',
    processTitle: 'كيف يعمل نظام نقاط IPTV',
    processSub: '3 خطوات سهلة للبدء وإدارة عملائك.',
    step1Title: 'اختر باقة النقاط',
    step1Desc: 'نقطة واحدة = اشتراك شهر واحد لعميل واحد. 12 نقطة = سنة كاملة. النقاط لا تنتهي صلاحيتها أبداً.',
    step2Title: 'تجهيز فوري للوحة التحكم',
    step2Desc: 'تواصل معنا عبر واتساب. استلم بيانات تسجيل الدخول إلى لوحتك ورصيد نقاطك المشحون خلال 15 دقيقة.',
    step3Title: 'بِع واحتفظ بأرباحك',
    step3Desc: 'أنشئ تجارب مجانية 24 ساعة، بِع الاشتراكات بأسعارك الخاصة واحتفظ بهامش ربح 60-70% عند كل تجديد.',
    pricingBadge: 'أسعار الجملة',
    pricingTitle: 'باقات نقاط موزع IPTV',
    pricingSub: 'نقطة واحدة = خدمة شهر واحد • النقاط لا تنتهي أبداً • دعم مستمر 24/7',
    tier1: {
      badge: 'باقة البداية',
      credits: '20 نقطة',
      sub: 'مثالية لاختبار السوق وإعداد لوحة التحكم',
      price: '99 دولار',
      rate: '4.95 دولار / نقطة',
      f1: '20 شهر خدمة للعملاء',
      f2: 'تفعيل فوري للوحة الموزع',
      f3: 'تجارب مجانية 24 ساعة غير محدودة',
      f4: 'النقاط صالحة مدى الحياة',
      btn: 'طلب عبر واتساب'
    },
    tier2: {
      badge: 'الأكثر طلباً',
      credits: '50 نقطة',
      sub: 'أفضل توازن بين هامش الربح ورأس المال المستثمر',
      price: '289 دولار',
      rate: '5.78 دولار / ما يعادل النقطة',
      f1: '50 شهر خدمة للعملاء',
      f2: 'لوحة بعلامتك التجارية مع إمكانية إنشاء موزعين فرعيين',
      f3: 'تجارب 24 و 48 ساعة غير محدودة',
      f4: 'أكثر من 100 قناة مع دليل EPG ومولد m3u تلقائي',
      btn: 'طلب عبر واتساب'
    },
    tier3: {
      badge: 'حجم مبيعات كبير',
      credits: '150 نقطة',
      sub: 'للموزعين النشطين الذين يتجاوزون 50 مشتركاً',
      price: '649 دولار',
      rate: '4.33 دولار / نقطة',
      f1: '150 شهر خدمة للعملاء',
      f2: 'توجيه بث ذو أولوية فائقة',
      f3: 'مدير حساب مخصص عبر واتساب',
      f4: 'النقاط صالحة مدى الحياة',
      btn: 'طلب عبر واتساب'
    },
    tier4: {
      badge: 'أعلى قيمة وربح',
      credits: '300 نقطة',
      sub: 'أعلى هامش جملة للمحترفين وكبار موزعي IPTV',
      price: '1,199 دولار',
      rate: '3.99 دولار / نقطة • أفضل سعر جملة',
      f1: '300 شهر خدمة للعملاء',
      f2: 'صلاحيات رئيسية لإدارة شبكة موزعين فرعيين',
      f3: 'DNS مخصص وعلامة تجارية مستقلة تماماً',
      f4: 'دعم فني هندسي مجاني مدى الحياة',
      btn: 'طلب عبر واتساب'
    },
    calcBadge: 'حاسبة تفاعلية',
    calcTitle: 'حاسبة أرباح موزع IPTV',
    calcSub: 'احسب دخلك الشهري والسنوي المتوقع بناءً على عدد عملائك وسعر البيع الذي تحدده.',
    lblClients: 'العملاء النشطون',
    lblPrice: 'سعر البيع الشهري للعميل ($)',
    lblDuration: 'مدة الاشتراك',
    durMonthly: 'شهري (نقطة واحدة / شهر)',
    durQuarterly: 'ربع سنوي (3 نقاط / 3 أشهر)',
    durAnnual: 'سنوي (12 نقطة / 12 شهراً)',
    lblTier: 'فئة نقاط الجملة',
    tierOptStarter: 'البداية (4.95 $ / نقطة)',
    tierOptBiz: 'الأعمال (5.78 $ / نقطة)',
    tierOptPro: 'المحترف (4.33 $ / نقطة)',
    tierOptEnt: 'المؤسسات (3.99 $ / نقطة)',
    resRevenue: 'الإيرادات المتوقعة',
    resCost: 'تكلفة نقاط الجملة',
    resProfit: 'صافي الربح المتوقع',
    resMargin: 'نسبة هامش الربح',
    calcFootnote: 'الحسابات مبنية على أسعار الجملة. أنت من يحدد أسعار البيع للجمهور والعملات بحرية تامة.',
    faqBadge: 'الأسئلة الشائعة',
    faqTitle: 'الأسئلة الأكثر تكراراً',
    faqSub: 'كل ما تحتاج لمعرفته حول برنامج موزعي IPTV لدينا.',
    q1: 'ما هي لوحة موزع IPTV؟',
    a1: 'لوحة موزع IPTV هي لوحة تحكم على الويب تتيح لك إدارة وتفعيل اشتراكات عملائك. تقوم بشراء النقاط بالجملة بأسعار منخفضة، وتستخدمها لإنشاء وإدارة حسابات لعملائك بالأسعار التي تحددها بنفسك.',
    q2: 'هل تنتهي صلاحية النقاط إذا لم أستخدمها؟',
    a2: 'لا. النقاط التي تشتريها عبر برنامجنا لا تنتهي أبداً، وتبقى في رصيدك حتى تقوم بتفعيل اشتراك فعلي لأحد عملائك.',
    q3: 'هل يمكنني إنشاء تجارب مجانية للعملاء المهتمين؟',
    a3: 'نعم! تتيح لك جميع حسابات الموزعين إنشاء أسطر تجريبية مجانية لمدة 24 ساعة مباشرة من اللوحة دون خصم أي نقاط من رصيدك.',
    q4: 'كم من الوقت يستغرق إعداد وتفعيل لوحتي؟',
    a4: 'بمجرد اختيار باقة النقاط وإتمام الطلب عبر واتساب، يتم تزويدك ببيانات الدخول للوحة ورصيدك المشحون خلال 10 إلى 15 دقيقة فقط.',
    ctaTitle: 'هل أنت مستعد لبدء مشروع IPTV الخاص بك؟',
    ctaDesc: 'تواصل مع فريقنا عبر واتساب اليوم للحصول على لوحة التحكم بعلامتك التجارية وتفعيل أول خطوط عملائك.',
    ctaBtnWa: 'مراسلتنا عبر واتساب',
    ctaBtnPackages: 'عرض الباقات ↑'
  },

  it: {
    title: 'Pannello Rivenditore IPTV — Avvia il Tuo Business IPTV | IPTV Smarters Pro',
    desc: 'Diventa rivenditore IPTV con Smarters Pro. Crediti senza scadenza, pannello white-label Xtream, margine netto 60–70%. Pacchetti da $99. Prova gratuita 24h inclusa.',
    badge: 'DISPONIBILE ORA • AVVIA IL TUO BUSINESS IPTV',
    h1: 'Pannello Rivenditore IPTV — <span class="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Avvia il Tuo Business IPTV</span>',
    heroP: 'Lancia il tuo marchio IPTV basato sull\'infrastruttura Smarters. Acquista crediti all\'ingrosso, crea test e abbonamenti sul tuo pannello personalizzato e trattieni il 60–70% di profitto netto.',
    chips: {
      noBuffer: 'Zero Blocchi',
      noExpire: 'Crediti Senza Scadenza',
      uptime: '99,99% Uptime Garantito',
      support: 'Supporto WhatsApp 24/7'
    },
    btnPackages: 'Vedi Pacchetti Crediti ↓',
    btnTrial: 'Richiedi Prova Gratuita 24h',
    trustText: 'Attivazione immediata • Configurazione pannello in 15 min • 99,9% uptime streaming',
    benefitsBadge: 'VANTAGGI RIVENDITORE',
    benefitsTitle: 'Perché Scegliere il Nostro Programma Rivenditori?',
    benefitsSub: 'Tutto ciò di cui hai bisogno per avviare e scalare un servizio di streaming redditizio dal primo giorno.',
    card1Title: 'Zero Blocchi',
    card1Desc: 'Server dedicati a 20 Gbps con bilanciamento del carico e garanzia di uptime al 99,9%. I tuoi clienti godono di eventi sportivi e film in 4K senza interruzioni.',
    card2Title: 'Crediti Senza Scadenza',
    card2Desc: 'I crediti acquistati rimangono nel tuo conto per sempre finché non li assegni ad abbonamenti attivi. Zero rischi, zero capitale sprecato.',
    card3Title: 'Pannello White-Label',
    card3Desc: 'Pannello web completo compatibile con Xtream Codes. Crea, estendi, sospendi e modifica gli account dei clienti con il tuo marchio.',
    card4Title: 'Supporto Prioritario 24/7',
    card4Desc: 'Linea WhatsApp diretta con i nostri tecnici per attivazioni massive, bouquet canali, assistenza rapida e ricariche immediate.',
    processBadge: 'COME FUNZIONA',
    processTitle: 'Come Funziona il Sistema a Crediti',
    processSub: '3 semplici passaggi per iniziare e gestire i tuoi clienti.',
    step1Title: 'Scegli il Pacchetto Crediti',
    step1Desc: '1 credito = 1 mese di abbonamento per un cliente. 12 crediti = 1 anno. I crediti non scadono mai.',
    step2Title: 'Attivazione Immediata del Pannello',
    step2Desc: 'Scrivici su WhatsApp. Ricevi le credenziali di accesso al tuo pannello e il credito caricato entro 15 minuti.',
    step3Title: 'Vendi e Incassa i Tuoi Guadagni',
    step3Desc: 'Genera test gratuiti di 24 ore, vendi ai tuoi prezzi al dettaglio e trattieni il 60–70% di margine su ogni rinnovo.',
    pricingBadge: 'PREZZI ALL\'INGROSSO',
    pricingTitle: 'Pacchetti Crediti Rivenditore IPTV',
    pricingSub: '1 CREDITO = 1 MESE DI SERVIZIO • CREDITI SENZA SCADENZA • ASSISTENZA 24/7',
    tier1: {
      badge: 'Starter Pack',
      credits: '20 Crediti',
      sub: 'Ideale per testare la richiesta e configurare il pannello',
      price: '$99',
      rate: '$4.95 / credito',
      f1: '20 mesi-cliente di servizio',
      f2: 'Attivazione immediata del pannello reseller',
      f3: 'Test gratuiti 24h illimitati',
      f4: 'Crediti senza scadenza',
      btn: 'Ordina su WhatsApp'
    },
    tier2: {
      badge: 'Più Popolare',
      credits: '50 Crediti',
      sub: 'Miglior equilibrio tra margine e capitale investito',
      price: '$289',
      rate: '$5.78 / credito equivalente',
      f1: '50 mesi-cliente di servizio',
      f2: 'Pannello white-label con creazione sub-reseller',
      f3: 'Test illimitati 24h & 48h',
      f4: '100+ canali con EPG e generatore m3u auto',
      btn: 'Ordina su WhatsApp'
    },
    tier3: {
      badge: 'Alto Volume',
      credits: '150 Crediti',
      sub: 'Per venditori attivi con oltre 50 abbonati',
      price: '$649',
      rate: '$4.33 / credito',
      f1: '150 mesi-cliente di servizio',
      f2: 'Routing stream ad alta priorità',
      f3: 'Account manager dedicato su WhatsApp',
      f4: 'Crediti senza scadenza',
      btn: 'Ordina su WhatsApp'
    },
    tier4: {
      badge: 'Miglior Valore',
      credits: '300 Crediti',
      sub: 'Massimo margine all\'ingrosso per professionisti IPTV',
      price: '$1,199',
      rate: '$3.99 / credito • Miglior tariffa all\'ingrosso',
      f1: '300 mesi-cliente di servizio',
      f2: 'Permessi master per gestire sub-reseller',
      f3: 'DNS personalizzato e white-labeling completo',
      f4: 'Supporto tecnico prioritario a vita',
      btn: 'Ordina su WhatsApp'
    },
    calcBadge: 'SIMULATORE INTERATTIVO',
    calcTitle: 'Calcolatore Guadagni Rivenditore IPTV',
    calcSub: 'Simula i tuoi ricavi mensili e annuali in base al numero di clienti e ai tuoi prezzi di vendita.',
    lblClients: 'Clienti Attivi',
    lblPrice: 'Prezzo al Dettaglio Mensile ($)',
    lblDuration: 'Durata Fatturazione',
    durMonthly: 'Mensile (1 credito / mese)',
    durQuarterly: 'Trimestrale (3 crediti / 3 mesi)',
    durAnnual: 'Annuale (12 crediti / 12 mesi)',
    lblTier: 'Livello Crediti all\'Ingrosso',
    tierOptStarter: 'Starter ($4.95 / credito)',
    tierOptBiz: 'Business ($5.78 / credito)',
    tierOptPro: 'Professional ($4.33 / credito)',
    tierOptEnt: 'Enterprise ($3.99 / credito)',
    resRevenue: 'Fatturato Stimato',
    resCost: 'Costo all\'Ingrosso',
    resProfit: 'Profitto Netto Stimato',
    resMargin: 'Margine Netto',
    calcFootnote: 'Basato su tariffe all\'ingrosso. Prezzi al dettaglio e valute sono decisi interamente da te.',
    faqBadge: 'DOMANDE E RISPOSTE',
    faqTitle: 'Domande Frequenti',
    faqSub: 'Tutto quello che devi sapere sul nostro programma rivenditori IPTV.',
    q1: 'Cos\'è un Pannello Rivenditore IPTV?',
    a1: 'Un pannello rivenditore IPTV è una dashboard web che ti consente di gestire gli abbonamenti dei tuoi clienti. Acquisti crediti all\'ingrosso a prezzo scontato e li usi per creare, attivare e gestire account ai tuoi prezzi di vendita.',
    q2: 'I miei crediti scadono?',
    a2: 'No. I crediti acquistati tramite il nostro programma non scadono mai. Rimangono nel tuo saldo finché non attivi una linea cliente.',
    q3: 'Posso generare linee di prova gratuite per nuovi clienti?',
    a3: 'Sì! Tutti i conti rivenditore hanno accesso alla creazione di test gratuiti di 24 ore direttamente dal pannello, con zero consumo di crediti.',
    q4: 'In quanto tempo posso essere operativo?',
    a4: 'Dopo aver scelto il tuo pacchetto crediti su WhatsApp, le credenziali del pannello e i crediti caricati ti vengono inviati entro 10-15 minuti.',
    ctaTitle: 'Pronto ad Avviare il Tuo Business IPTV?',
    ctaDesc: 'Contatta il nostro team su WhatsApp oggi per configurare il tuo pannello white-label e attivare i tuoi primi clienti.',
    ctaBtnWa: 'Scrivici su WhatsApp',
    ctaBtnPackages: 'Vedi Pacchetti ↑'
  },

  nl: {
    title: 'IPTV Reseller Panel — Start Uw IPTV Business | IPTV Smarters Pro',
    desc: 'Word IPTV reseller met Smarters Pro. Tegoeden zonder verloopdatum, white-label Xtream panel, 60–70% nettowinst. Starter packs vanaf $99. Gratis 24u testlijn inbegrepen.',
    badge: 'NU BESCHIKBAAR • START UW IPTV BUSINESS',
    h1: 'IPTV Reseller Panel — <span class="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Start Uw IPTV Business</span>',
    heroP: 'Lanceer uw eigen IPTV-merk aangedreven door Smarters-infrastructuur. Koop groothandelscredits, maak testlijnen en abonnementen aan op uw eigen panel en behoud 60–70% nettowinst.',
    chips: {
      noBuffer: 'Zonder Buffering',
      noExpire: 'Credits Verloopt Nooit',
      uptime: '99,99% Gegarandeerde Uptime',
      support: '24/7 WhatsApp Support'
    },
    btnPackages: 'Bekijk Credit Pakketten ↓',
    btnTrial: 'Gratis 24u Testlijn Aanvragen',
    trustText: 'Directe activatie • Panel setup binnen 15 min • 99,9% streaming uptime',
    benefitsBadge: 'RESELLER VOORDELEN',
    benefitsTitle: 'Waarom Kiezen Voor Ons Reseller Programma?',
    benefitsSub: 'Alles wat u nodig heeft om vanaf dag één een winstgevende streamingdienst te runnen.',
    card1Title: 'Zonder Buffering',
    card1Desc: 'Dedicated 20 Gbps load-balanced servers met 99,9% uptime-garantie. Uw klanten genieten storingsvrij van live sport en films in 4K.',
    card2Title: 'Credits Verloopt Nooit',
    card2Desc: 'Uw gekochte credits blijven voor altijd op uw account totdat u ze toewijst aan actieve klantabonnementen. Geen risico, geen verloren kapitaal.',
    card3Title: 'White-Label Panel',
    card3Desc: 'Volledig Xtream Codes-compatibel web management panel. Maak, verleng, pauzeer en beheer klantaccounts onder uw eigen merkidentiteit.',
    card4Title: '24/7 Prioritaire Support',
    card4Desc: 'Directe WhatsApp-lijn met onze technici voor bulkactivaties, zenderpakketten, troubleshooting en snelle opwaarderingen.',
    processBadge: 'WERKWIJZE',
    processTitle: 'Hoe het Credit Systeem Werkt',
    processSub: '3 eenvoudige stappen om te starten en uw klanten te beheren.',
    step1Title: 'Kies Uw Credit Pakket',
    step1Desc: '1 credit = 1 maand abonnement voor een klant. 12 credits = 1 jaar. Credits verlopen nooit.',
    step2Title: 'Directe Panel Setup',
    step2Desc: 'Stuur ons een bericht via WhatsApp. Ontvang uw panel-inloggegevens en credit-saldo binnen 15 minuten.',
    step3Title: 'Verkoop & Behoud Uw Winst',
    step3Desc: 'Genereer gratis 24u proeflijnen, verkoop abonnementen tegen uw eigen prijzen en behoud 60–70% marge bij elke verlenging.',
    pricingBadge: 'GROOTHANDELSPRIJZEN',
    pricingTitle: 'IPTV Reseller Credit Pakketten',
    pricingSub: '1 CREDIT = 1 MAAND SERVICE • CREDITS VERLOPEN NOOIT • 24/7 ONDERSTEUNING',
    tier1: {
      badge: 'Starter Pack',
      credits: '20 Credits',
      sub: 'Ideaal om de markt te testen en uw panel in te richten',
      price: '$99',
      rate: '$4.95 / credit',
      f1: '20 klant-maanden service',
      f2: 'Directe activatie van reseller panel',
      f3: 'Onbeperkte gratis 24u testlijnen',
      f4: 'Credits verlopen nooit',
      btn: 'Bestel via WhatsApp'
    },
    tier2: {
      badge: 'Meest Populair',
      credits: '50 Credits',
      sub: 'Beste balans tussen marge en investering',
      price: '$289',
      rate: '$5.78 / credit equivalent',
      f1: '50 klant-maanden service',
      f2: 'White-label panel met sub-reseller beheer',
      f3: 'Onbeperkte 24u & 48u testlijnen',
      f4: '100+ EPG-kanalen & automatische m3u generator',
      btn: 'Bestel via WhatsApp'
    },
    tier3: {
      badge: 'Hoog Volume',
      credits: '150 Credits',
      sub: 'Voor actieve verkopers met meer dan 50 abonnees',
      price: '$649',
      rate: '$4.33 / credit',
      f1: '150 klant-maanden service',
      f2: 'Prioritaire stream routing',
      f3: 'Persoonlijke WhatsApp accountmanager',
      f4: 'Credits verlopen nooit',
      btn: 'Bestel via WhatsApp'
    },
    tier4: {
      badge: 'Beste Waarde',
      credits: '300 Credits',
      sub: 'Maximale marge voor serieuze IPTV-ondernemers',
      price: '$1,199',
      rate: '$3.99 / credit • Beste groothandelstarief',
      f1: '300 klant-maanden service',
      f2: 'Master-rechten voor sub-resellers',
      f3: 'Eigen DNS & volledige white-label branding',
      f4: 'Levenslange prioritaire technische support',
      btn: 'Bestel via WhatsApp'
    },
    calcBadge: 'INTERACTIEVE CALCULATOR',
    calcTitle: 'IPTV Reseller Winstcalculator',
    calcSub: 'Simuleer uw maandelijkse en jaarlijkse inkomsten op basis van aantal klanten en verkoopprijzen.',
    lblClients: 'Actieve Klanten',
    lblPrice: 'Verkoopprijs per Maand ($)',
    lblDuration: 'Facturatieduur',
    durMonthly: 'Maandelijks (1 credit / maand)',
    durQuarterly: 'Per Kwartaal (3 credits / 3 maanden)',
    durAnnual: 'Jaarlijks (12 credits / 12 maanden)',
    lblTier: 'Groothandelsniveau',
    tierOptStarter: 'Starter ($4.95 / credit)',
    tierOptBiz: 'Business ($5.78 / credit)',
    tierOptPro: 'Professioneel ($4.33 / credit)',
    tierOptEnt: 'Grootzakelijk / Enterprise ($3.99 / credit)',
    resRevenue: 'Geschatte Omzet',
    resCost: 'Groothandelskosten',
    resProfit: 'Geschatte Nettowinst',
    resMargin: 'Nettomarge',
    calcFootnote: 'Gebaseerd op groothandelstarieven. Verkoopprijzen en valuta bepaalt u volledig zelf.',
    faqBadge: 'VRAGEN & ANTWOORDEN',
    faqTitle: 'Veelgestelde Vragen',
    faqSub: 'Alles wat u moet weten over ons IPTV reseller programma.',
    q1: 'Wat is een IPTV Reseller Panel?',
    a1: 'Een IPTV reseller panel is een online dashboard waarmee u abonnementen voor uw eigen klanten beheert. U koopt credits in bulk tegen groothandelsprijzen en activeert accounts tegen uw eigen consumentenprijzen.',
    q2: 'Verlopen mijn credits?',
    a2: 'Nee. Credits gekocht via ons programma verlopen nooit. Ze blijven in uw saldo staan totdat u een klantlijn activeert.',
    q3: 'Kan ik gratis testlijnen aanmaken voor potentiële klanten?',
    a3: 'Ja! Alle reseller accounts kunnen rechtstreeks vanuit het panel gratis 24-uurs testlijnen aanmaken, zonder dat er credits worden afgeschreven.',
    q4: 'Hoe snel ben ik operationeel?',
    a4: 'Na het kiezen van uw credit pack via WhatsApp ontvangt u uw inloggegevens en opgeladen credits binnen 10 tot 15 minuten.',
    ctaTitle: 'Klaar om Uw IPTV Business te Starten?',
    ctaDesc: 'Neem vandaag nog contact op met ons team via WhatsApp om uw white-label panel in te richten en uw eerste klanten te activeren.',
    ctaBtnWa: 'Bericht via WhatsApp',
    ctaBtnPackages: 'Bekijk Pakketten ↑'
  },

  pt: {
    title: 'Painel Revendedor IPTV — Comece Seu Negócio IPTV | IPTV Smarters Pro',
    desc: 'Torne-se revendedor IPTV com Smarters Pro. Créditos sem validade, painel white-label Xtream, margem líquida de 60–70%. Pacotes a partir de $99 com teste grátis 24h.',
    badge: 'DISPONÍVEL AGORA • COMECE SEU NEGÓCIO IPTV',
    h1: 'Painel Revendedor IPTV — <span class="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Comece Seu Negócio IPTV</span>',
    heroP: 'Lance sua própria marca IPTV com a infraestrutura Smarters. Compre créditos no atacado, crie testes e assinaturas em seu painel personalizado e garanta 60–70% de lucro líquido.',
    chips: {
      noBuffer: 'Sem Travamentos',
      noExpire: 'Créditos Sem Validade',
      uptime: '99,99% Uptime Garantido',
      support: 'Suporte WhatsApp 24/7'
    },
    btnPackages: 'Ver Pacotes de Créditos ↓',
    btnTrial: 'Pedir Teste Grátis de 24h',
    trustText: 'Ativação imediata • Configuração do painel em 15 min • 99,9% uptime streaming',
    benefitsBadge: 'VANTAGENS REVENDEDOR',
    benefitsTitle: 'Por Que Escolher Nosso Programa de Revenda?',
    benefitsSub: 'Tudo o que você precisa para criar e expandir um serviço de streaming lucrativo desde o primeiro dia.',
    card1Title: 'Sem Travamentos',
    card1Desc: 'Servidores dedicados de 20 Gbps balanceados com garantia de 99,9% de disponibilidade. Seus clientes assistem a desportos ao vivo e filmes em 4K sem congelamentos.',
    card2Title: 'Créditos Sem Validade',
    card2Desc: 'Os créditos adquiridos permanecem na sua conta para sempre até que os associe a assinaturas ativas. Risco zero, capital protegido.',
    card3Title: 'Painel White-Label',
    card3Desc: 'Painel web completo compatível com Xtream Codes. Crie, estenda, pause e edite contas de clientes com a sua própria marca.',
    card4Title: 'Suporte Prioritário 24/7',
    card4Desc: 'Linha direta no WhatsApp com engenheiros para suporte em ativações em lote, gestão de canais, dúvidas técnicas e recargas imediatas.',
    processBadge: 'COMO FUNCIONA',
    processTitle: 'Como Funciona o Sistema de Créditos',
    processSub: '3 passos simples para começar e gerir os seus clientes.',
    step1Title: 'Escolha o Seu Pacote de Créditos',
    step1Desc: '1 crédito = 1 mês de assinatura para um cliente. 12 créditos = 1 ano. Os créditos nunca expiram.',
    step2Title: 'Configuração Imediata do Painel',
    step2Desc: 'Fale connosco pelo WhatsApp. Receba os seus acessos ao painel e o saldo de créditos carregado em menos de 15 minutos.',
    step3Title: 'Venda e Fique com os Lucros',
    step3Desc: 'Gere testes gratuitos de 24h, venda aos seus próprios preços e retenha 60–70% de margem em cada renovação.',
    pricingBadge: 'PREÇOS DE ATACADO',
    pricingTitle: 'Pacotes de Créditos Revendedor IPTV',
    pricingSub: '1 CRÉDITO = 1 MÊS DE SERVIÇO • CRÉDITOS SEM VALIDADE • SUPORTE 24/7',
    tier1: {
      badge: 'Pack Inicial',
      credits: '20 Créditos',
      sub: 'Ideal para testar a procura e configurar o painel',
      price: '$99',
      rate: '$4.95 / crédito',
      f1: '20 meses-cliente de serviço',
      f2: 'Ativação imediata do painel revendedor',
      f3: 'Testes grátis de 24h ilimitados',
      f4: 'Créditos vitalícios sem validade',
      btn: 'Comprar pelo WhatsApp'
    },
    tier2: {
      badge: 'Mais Popular',
      credits: '50 Créditos',
      sub: 'Melhor equilíbrio entre margem e investimento inicial',
      price: '$289',
      rate: '$5.78 / crédito equivalente',
      f1: '50 meses-cliente de serviço',
      f2: 'Painel white-label com criação de sub-revendedores',
      f3: 'Testes ilimitados de 24h e 48h',
      f4: '100+ canais com EPG e gerador m3u automático',
      btn: 'Comprar pelo WhatsApp'
    },
    tier3: {
      badge: 'Alto Volume',
      credits: '150 Créditos',
      sub: 'Para revendedores ativos com mais de 50 assinantes',
      price: '$649',
      rate: '$4.33 / crédito',
      f1: '150 meses-cliente de serviço',
      f2: 'Roteamento de streaming prioritário',
      f3: 'Gestor de conta dedicado no WhatsApp',
      f4: 'Créditos vitalícios sem validade',
      btn: 'Comprar pelo WhatsApp'
    },
    tier4: {
      badge: 'Melhor Valor',
      credits: '300 Créditos',
      sub: 'Margem máxima para revendedores profissionais de IPTV',
      price: '$1,199',
      rate: '$3.99 / crédito • Melhor tarifa de atacado',
      f1: '300 meses-cliente de serviço',
      f2: 'Acesso master para gestão de sub-revendedores',
      f3: 'DNS próprio e personalização white-label total',
      f4: 'Suporte técnico prioritário vitalício',
      btn: 'Comprar pelo WhatsApp'
    },
    calcBadge: 'SIMULADOR INTERATIVO',
    calcTitle: 'Calculadora de Lucros Revendedor IPTV',
    calcSub: 'Simule os seus rendimentos mensais e anuais com base no número de clientes e no seu preço de venda.',
    lblClients: 'Clientes Ativos',
    lblPrice: 'Preço de Venda Mensal ($)',
    lblDuration: 'Duração da Cobrança',
    durMonthly: 'Mensal (1 crédito / mês)',
    durQuarterly: 'Trimestral (3 créditos / 3 meses)',
    durAnnual: 'Anual (12 créditos / 12 meses)',
    lblTier: 'Nível de Crédito de Atacado',
    tierOptStarter: 'Starter ($4.95 / crédito)',
    tierOptBiz: 'Business ($5.78 / crédito)',
    tierOptPro: 'Professional ($4.33 / crédito)',
    tierOptEnt: 'Enterprise ($3.99 / crédito)',
    resRevenue: 'Faturação Estimada',
    resCost: 'Custo de Atacado',
    resProfit: 'Lucro Líquido Estimado',
    resMargin: 'Margem Líquida',
    calcFootnote: 'Baseado em valores de atacado. O preço final e a moeda de venda são definidos exclusivamente por si.',
    faqBadge: 'PERGUNTAS FREQUENTES',
    faqTitle: 'Perguntas Frequentes',
    faqSub: 'Tudo o que precisa de saber sobre o nosso programa de revenda IPTV.',
    q1: 'O que é um Painel de Revendedor IPTV?',
    a1: 'Um painel de revendedor IPTV é um painel online que lhe permite gerir assinaturas para os seus clientes. Compra créditos no atacado a preços reduzidos e utiliza-os para criar, ativar e gerir contas aos preços que definir.',
    q2: 'Os meus créditos têm data de validade?',
    a2: 'Não. Os créditos adquiridos através do nosso programa nunca expiram. Permanecem no seu saldo até que ative uma linha de cliente.',
    q3: 'Posso gerar testes gratuitos para potenciais clientes?',
    a3: 'Sim! Todas as contas de revendedor podem gerar testes de 24 horas diretamente no painel, sem qualquer débito de créditos.',
    q4: 'Em quanto tempo fico com o painel pronto?',
    a4: 'Após escolher o seu pacote no WhatsApp, as suas credenciais de acesso e os créditos carregados são entregues em 10 a 15 minutos.',
    ctaTitle: 'Pronto para Começar o Seu Negócio IPTV?',
    ctaDesc: 'Fale com a nossa equipa no WhatsApp hoje mesmo para configurar o seu painel e ativar os seus primeiros clientes.',
    ctaBtnWa: 'Falar pelo WhatsApp',
    ctaBtnPackages: 'Ver Pacotes ↑'
  },

  'pt-br': {
    title: 'Painel Revenda IPTV — Comece Seu Negócio IPTV | IPTV Smarters Pro',
    desc: 'Torne-se revendedor IPTV com Smarters Pro. Créditos sem validade, painel white-label Xtream, margem líquida de 60–70%. Pacotes a partir de $99 com teste grátis 24h.',
    badge: 'DISPONÍVEL AGORA • COMECE SEU NEGÓCIO IPTV',
    h1: 'Painel Revenda IPTV — <span class="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Comece Seu Negócio IPTV</span>',
    heroP: 'Monte sua própria operação de IPTV com a infraestrutura Smarters. Compre créditos no atacado, crie testes e assinaturas no seu painel exclusivo e lucre de 60 a 70% limpo.',
    chips: {
      noBuffer: 'Zero Travamento',
      noExpire: 'Créditos Sem Validade',
      uptime: '99,99% Uptime Garantido',
      support: 'Suporte WhatsApp 24/7'
    },
    btnPackages: 'Ver Pacotes de Créditos ↓',
    btnTrial: 'Pedir Teste Grátis de 24h',
    trustText: 'Ativação imediata • Painel liberado em 15 min • 99,9% uptime streaming',
    benefitsBadge: 'VANTAGENS REVENDA',
    benefitsTitle: 'Por Que Escolher Nosso Painel de Revenda?',
    benefitsSub: 'Tudo o que você precisa para faturar alto com streaming desde o primeiro dia.',
    card1Title: 'Zero Travamento',
    card1Desc: 'Servidores dedicados de 20 Gbps balanceados com 99,9% de disponibilidade garantida. Seus clientes assistem futebol ao vivo e filmes em 4K liso.',
    card2Title: 'Créditos Não Expiram',
    card2Desc: 'Os créditos que você compra ficam na sua conta para sempre até que você ative um cliente. Risco zero e capital protegido.',
    card3Title: 'Painel White-Label',
    card3Desc: 'Painel web completo compatível com Xtream Codes. Crie, renove, pause e gerencie clientes com o nome da sua própria marca.',
    card4Title: 'Suporte VIP 24/7',
    card4Desc: 'Canal direto de WhatsApp com nossos engenheiros para ativações em massa, organização de canais e recargas instantâneas.',
    processBadge: 'PASSO A PASSO',
    processTitle: 'Como Funciona o Sistema de Créditos',
    processSub: '3 passos simples para começar a faturar com seus clientes.',
    step1Title: 'Escolha seu Pacote de Créditos',
    step1Desc: '1 crédito = 1 mês de assinatura de um cliente. 12 créditos = 1 ano. Seus créditos nunca vencem.',
    step2Title: 'Liberação Imediata do Painel',
    step2Desc: 'Chame nossa equipe no WhatsApp. Receba o acesso ao seu painel e seus créditos carregados em até 15 minutos.',
    step3Title: 'Venda e Fique com o Lucro',
    step3Desc: 'Crie testes grátis de 24 horas, cobre o valor que quiser e lucre de 60% a 70% em cada mensalidade renovada.',
    pricingBadge: 'PREÇOS DE ATACADO',
    pricingTitle: 'Pacotes de Créditos Revenda IPTV',
    pricingSub: '1 CRÉDITO = 1 MÊS DE ACESSO • CRÉDITOS SEM VENCIMENTO • SUPORTE 24/7',
    tier1: {
      badge: 'Pacote Inicial',
      credits: '20 Créditos',
      sub: 'Ideal para validar seus clientes e testar o painel',
      price: '$99',
      rate: '$4.95 / crédito',
      f1: '20 meses-cliente de serviço',
      f2: 'Ativação imediata do painel revendedor',
      f3: 'Testes grátis de 24h ilimitados',
      f4: 'Créditos nunca expiram',
      btn: 'Comprar pelo WhatsApp'
    },
    tier2: {
      badge: 'Mais Vendido',
      credits: '50 Créditos',
      sub: 'Melhor custo-benefício entre investimento e lucro',
      price: '$289',
      rate: '$5.78 / crédito equivalente',
      f1: '50 meses-cliente de serviço',
      f2: 'Painel white-label com criação de sub-revenda',
      f3: 'Testes ilimitados de 24h e 48h',
      f4: 'Mais de 100 canais com EPG e gerador m3u auto',
      btn: 'Comprar pelo WhatsApp'
    },
    tier3: {
      badge: 'Alto Volume',
      credits: '150 Créditos',
      sub: 'Para quem já tem base ativa e quer escalar forte',
      price: '$649',
      rate: '$4.33 / crédito',
      f1: '150 meses-cliente de serviço',
      f2: 'Roteamento de streaming prioritário',
      f3: 'Gerente de contas exclusivo no WhatsApp',
      f4: 'Créditos nunca expiram',
      btn: 'Comprar pelo WhatsApp'
    },
    tier4: {
      badge: 'Melhor Preço',
      credits: '300 Créditos',
      sub: 'Maior margem de lucro para grandes revendedores',
      price: '$1,199',
      rate: '$3.99 / crédito • Menor preço por crédito',
      f1: '300 meses-cliente de serviço',
      f2: 'Acesso master para criar rede de sub-revendedores',
      f3: 'DNS próprio e painel 100% personalizado',
      f4: 'Suporte técnico prioritário vitalício',
      btn: 'Comprar pelo WhatsApp'
    },
    calcBadge: 'SIMULADOR DE LUCRO',
    calcTitle: 'Calculadora de Lucro da Revenda IPTV',
    calcSub: 'Calcule seu faturamento mensal e anual de acordo com o número de clientes e seu preço de mensalidade.',
    lblClients: 'Clientes Ativos',
    lblPrice: 'Preço da Mensalidade ($)',
    lblDuration: 'Período de Cobrança',
    durMonthly: 'Mensal (1 crédito / mês)',
    durQuarterly: 'Trimestral (3 créditos / 3 meses)',
    durAnnual: 'Anual (12 créditos / 12 meses)',
    lblTier: 'Pacote de Créditos Atacado',
    tierOptStarter: 'Starter ($4.95 / crédito)',
    tierOptBiz: 'Business ($5.78 / crédito)',
    tierOptPro: 'Professional ($4.33 / crédito)',
    tierOptEnt: 'Enterprise ($3.99 / crédito)',
    resRevenue: 'Faturamento Estimado',
    resCost: 'Custo dos Créditos',
    resProfit: 'Lucro Líquido Estimado',
    resMargin: 'Margem Líquida',
    calcFootnote: 'Valores baseados no custo de atacado. Você define livremente seus preços de venda e formas de pagamento.',
    faqBadge: 'DÚVIDAS FREQUENTES',
    faqTitle: 'Perguntas Frequentes',
    faqSub: 'Tudo o que você precisa saber sobre o nosso sistema de revenda IPTV.',
    q1: 'O que é um Painel de Revenda IPTV?',
    a1: 'O painel de revenda IPTV é um sistema web onde você cria e administra os acessos dos seus clientes. Você compra créditos no atacado com desconto e revende no varejo pelo preço que quiser, ficando com todo o lucro.',
    q2: 'Meus créditos vencem se eu não usar?',
    a2: 'Não. Os créditos comprados conosco nunca expiram. Eles ficam guardados no seu saldo até você ativar a conta de um cliente.',
    q3: 'Posso gerar testes grátis para os clientes experimentarem?',
    a3: 'Sim! Você pode gerar testes gratuitos de 24 horas direto no painel para quantos clientes quiser, sem gastar nenhum crédito.',
    q4: 'Em quanto tempo meu painel fica pronto?',
    a4: 'Assim que você escolher seu pacote no WhatsApp e confirmar o pedido, seu acesso e seus créditos são liberados entre 10 e 15 minutos.',
    ctaTitle: 'Pronto para Começar a Lucrar com IPTV?',
    ctaDesc: 'Fale com a gente no WhatsApp agora mesmo, receba seu painel personalizado e comece a ativar seus primeiros clientes.',
    ctaBtnWa: 'Chamar no WhatsApp',
    ctaBtnPackages: 'Ver Pacotes ↑'
  },

  pl: {
    title: 'Panel Reseller IPTV — Rozpocznij Swój Biznes IPTV | IPTV Smarters Pro',
    desc: 'Zostań resellerem IPTV z Smarters Pro. Kredyty bez daty ważności, panel white-label Xtream, marża netto 60–70%. Pakiety od 99$. Darmowy test 24h w zestawie.',
    badge: 'DOSTĘPNE TERAZ • ROZPOCZNIJ SWÓJ BIZNES IPTV',
    h1: 'Panel Reseller IPTV — <span class="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Rozpocznij Swój Biznes IPTV</span>',
    heroP: 'Stwórz własną markę IPTV napędzaną infrastrukturą Smarters. Kupuj kredyty hurtowo, twórz testy i subskrypcje we własnym panelu i zatrzymuj 60–70% czystego zysku.',
    chips: {
      noBuffer: 'Zero Buforowania',
      noExpire: 'Kredyty Nigdy Nie Wygasają',
      uptime: '99,99% Gwarantowany Uptime',
      support: 'Wsparcie WhatsApp 24/7'
    },
    btnPackages: 'Zobacz Pakiety Kredytów ↓',
    btnTrial: 'Odbierz Darmowy Test 24h',
    trustText: 'Natychmiastowa aktywacja • Konfiguracja panelu w 15 min • 99,9% uptime streamingu',
    benefitsBadge: 'KORZYŚCI DLA RESELLERA',
    benefitsTitle: 'Dlaczego Warto Wybrać Nasz Program Resellerski?',
    benefitsSub: 'Wszystko, czego potrzebujesz, aby od pierwszego dnia prowadzić dochodowy biznes streamingowy.',
    card1Title: 'Zero Buforowania',
    card1Desc: 'Dedykowane serwery 20 Gbps z równoważeniem obciążenia i gwarancją 99,9% uptime. Twoi klienci oglądają sport na żywo i filmy w 4K bez zacięć.',
    card2Title: 'Kredyty Nigdy Nie Wygasają',
    card2Desc: 'Kupione kredyty pozostają na Twoim koncie na zawsze, dopóki nie przypiszesz ich do aktywnej subskrypcji klienta. Zero ryzyka.',
    card3Title: 'Panel White-Label',
    card3Desc: 'W pełni kompatybilny panel zarządzania web Xtream Codes. Twórz, przedłużaj, wstrzymuj i edytuj konta klientów pod własną marką.',
    card4Title: 'Wsparcie Priorytetowe 24/7',
    card4Desc: 'Bezpośrednia linia WhatsApp z naszymi inżynierami w celu pomocy przy masowych aktywacjach, pakietach kanałów i natychmiastowych doładowaniach.',
    processBadge: 'JAK TO DZIAŁA',
    processTitle: 'Jak Działa System Kredytów IPTV',
    processSub: '3 proste kroki, aby wystartować i zarządzać swoimi klientami.',
    step1Title: 'Wybierz Pakiet Kredytów',
    step1Desc: '1 kredyt = 1 miesiąc subskrypcji dla klienta. 12 kredytów = 1 rok. Kredyty nigdy nie wygasają.',
    step2Title: 'Błyskawiczna Konfiguracja Panelu',
    step2Desc: 'Napisz do nas na WhatsApp. Otrzymaj dane logowania do panelu i doładowane saldo kredytów w ciągu 15 minut.',
    step3Title: 'Sprzedawaj i Zatrzymuj Zyski',
    step3Desc: 'Generuj darmowe testy 24h, sprzedawaj subskrypcje we własnych cenach i zatrzymuj 60–70% marży przy każdym odnowieniu.',
    pricingBadge: 'CENY HURTOWE',
    pricingTitle: 'Pakiety Kredytów Reseller IPTV',
    pricingSub: '1 KREDYT = 1 MIESIĄC USŁUGI • KREDYTY BEZ TERMINU WAŻNOŚCI • WSPARCIE 24/7',
    tier1: {
      badge: 'Pakiet Startowy',
      credits: '20 Kredytów',
      sub: 'Idealny do przetestowania popytu i konfiguracji panelu',
      price: '$99',
      rate: '$4.95 / kredyt',
      f1: '20 miesięcy-klienta usługi',
      f2: 'Natychmiastowa aktywacja panelu resellera',
      f3: 'Nielimitowane darmowe testy 24h',
      f4: 'Kredyty ważne bezterminowo',
      btn: 'Zamów przez WhatsApp'
    },
    tier2: {
      badge: 'Najpopularniejszy',
      credits: '50 Kredytów',
      sub: 'Najlepszy bilans marży i zainwestowanego kapitału',
      price: '$289',
      rate: '$5.78 / równowartość kredytu',
      f1: '50 miesięcy-klienta usługi',
      f2: 'Panel white-label z tworzeniem sub-resellerów',
      f3: 'Nielimitowane testy 24h i 48h',
      f4: '100+ kanałów z EPG i automatyczny generator m3u',
      btn: 'Zamów przez WhatsApp'
    },
    tier3: {
      badge: 'Duży Wolumen',
      credits: '150 Kredytów',
      sub: 'Dla aktywnych sprzedawców mających ponad 50 klientów',
      price: '$649',
      rate: '$4.33 / kredyt',
      f1: '150 miesięcy-klienta usługi',
      f2: 'Priorytetowy routing strumieni',
      f3: 'Dedykowany opiekun konta na WhatsApp',
      f4: 'Kredyty ważne bezterminowo',
      btn: 'Zamów przez WhatsApp'
    },
    tier4: {
      badge: 'Najlepsza Wartość',
      credits: '300 Kredytów',
      sub: 'Maksymalna marża hurtowa dla profesjonalnych resellerów',
      price: '$1,199',
      rate: '$3.99 / kredyt • Najniższa cena hurtowa',
      f1: '300 miesięcy-klienta usługi',
      f2: 'Uprawnienia master do zarządzania sub-resellerami',
      f3: 'Własny DNS i pełny branding white-label',
      f4: 'Dożywotnie priorytetowe wsparcie techniczne',
      btn: 'Zamów przez WhatsApp'
    },
    calcBadge: 'KALKULATOR ZYSKU',
    calcTitle: 'Kalkulator Zysków Resellera IPTV',
    calcSub: 'Symuluj swoje miesięczne i roczne przychody w oparciu o liczbę klientów i ceny sprzedaży.',
    lblClients: 'Aktywni Klienci',
    lblPrice: 'Miesięczna Cena Sprzedaży ($)',
    lblDuration: 'Okres Rozliczeniowy',
    durMonthly: 'Miesięczny (1 kredyt / miesiąc)',
    durQuarterly: 'Kwartalny (3 kredyty / 3 miesiące)',
    durAnnual: 'Roczny (12 kredytów / 12 miesięcy)',
    lblTier: 'Poziom Kredytów Hurtowych',
    tierOptStarter: 'Starter ($4.95 / kredyt)',
    tierOptBiz: 'Business ($5.78 / kredyt)',
    tierOptPro: 'Professional ($4.33 / kredyt)',
    tierOptEnt: 'Enterprise ($3.99 / kredyt)',
    resRevenue: 'Szacowany Przychód',
    resCost: 'Koszt Hurtowy',
    resProfit: 'Szacowany Zysk Netto',
    resMargin: 'Marża Netto',
    calcFootnote: 'Obliczenia na podstawie stawek hurtowych. Ceny detaliczne i waluty ustalasz całkowicie sam.',
    faqBadge: 'PYTANIA I ODPOWIEDZI',
    faqTitle: 'Często Zadawane Pytania',
    faqSub: 'Wszystko, co musisz wiedzieć o naszym programie reseller IPTV.',
    q1: 'Czym jest panel resellera IPTV?',
    a1: 'Panel resellera IPTV to internetowy pulpit nawigacyjny umożliwiający zarządzanie subskrypcjami Twoich własnych klientów. Kupujesz kredyty hurtowo w niższej cenie i używasz ich do tworzenia, aktywowania i zarządzania kontami we własnych cenach detalicznych.',
    q2: 'Czy moje kredyty mają datę ważności?',
    a2: 'Nie. Kredyty zakupione w naszym programie nigdy nie wygasają. Pozostają na Twoim koncie, dopóki nie aktywujesz linii dla klienta.',
    q3: 'Czy mogę generować darmowe testy dla potencjalnych klientów?',
    a3: 'Tak! Wszystkie konta resellerów mogą generować bezpłatne 24-godzinne linie testowe bezpośrednio z panelu bez potrącania kredytów.',
    q4: 'Jak szybko mogę rozpocząć?',
    a4: 'Po wybraniu pakietu kredytów na WhatsApp dane dostępowe do panelu i doładowane kredyty otrzymasz w ciągu 10 do 15 minut.',
    ctaTitle: 'Gotowy, Aby Rozpocząć Biznes IPTV?',
    ctaDesc: 'Skontaktuj się z naszym zespołem na WhatsApp już dziś, aby skonfigurować panel i aktywować pierwszych klientów.',
    ctaBtnWa: 'Napisz na WhatsApp',
    ctaBtnPackages: 'Zobacz Pakiety ↑'
  },

  ko: {
    title: 'IPTV 리셀러 패널 — 나만의 IPTV 비즈니스 시작 | IPTV Smarters Pro',
    desc: 'Smarters Pro와 함께 IPTV 리셀러 사업을 시작하세요. 무기한 크레딧, 화이트 라벨 Xtream 패널, 60~70% 순수익 마진. $99부터 시작하는 패키지 및 24시간 무료 테스트 포함.',
    badge: '지금 시작하세요 • IPTV 비즈니스 런칭',
    h1: 'IPTV 리셀러 패널 — <span class="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">나만의 IPTV 비즈니스 시작</span>',
    heroP: 'Smarters 인프라를 기반으로 나만의 IPTV 브랜드를 구축하세요. 도매 크레딧을 구매하고, 브랜드 패널에서 무료 테스트 및 정기 구독을 생성하여 60~70%의 순이익을 확보하세요.',
    chips: {
      noBuffer: '버퍼링 제로',
      noExpire: '무기한 크레딧',
      uptime: '99.99% 가동 시간 보장',
      support: '24/7 WhatsApp 고객지원'
    },
    btnPackages: '크레딧 패키지 확인 ↓',
    btnTrial: '24시간 무료 체험 라인 신청',
    trustText: '즉시 활성화 • 15분 이내 패널 세팅 • 99.9% 스트리밍 가동률',
    benefitsBadge: '리셀러 혜택',
    benefitsTitle: '왜 우리의 리셀러 프로그램을 선택해야 할까요?',
    benefitsSub: '첫날부터 수익성 높은 스트리밍 서비스를 시작하고 확장하는 데 필요한 모든 것을 제공합니다.',
    card1Title: '버퍼링 제로',
    card1Desc: '부하 분산 20 Gbps 전용 서버와 99.9% 가동률 보장. 고객은 끊김 없는 4K 스포츠 생중계와 최신 영화를 즐길 수 있습니다.',
    card2Title: '크레딧 유효기간 없음',
    card2Desc: '구매한 크레딧은 실제 고객 계정을 활성화하기 전까지 계정에 영구 보존됩니다. 자본 손실이나 위험이 전혀 없습니다.',
    card3Title: '화이트 라벨 관리 패널',
    card3Desc: '완벽한 Xtream Codes 호환 웹 관리 패널. 나만의 브랜드 이름으로 고객 계정을 생성, 연장, 일시정지 및 관리할 수 있습니다.',
    card4Title: '24/7 우선 기술 지원',
    card4Desc: '대량 활성화, 채널 부케 관리, 문제 해결 및 빠른 크레딧 충전을 지원하는 전담 WhatsApp 엔지니어 라인을 제공합니다.',
    processBadge: '진행 절차',
    processTitle: '크레딧 시스템 작동 방식',
    processSub: '고객 관리와 사업 시작을 위한 3단계 초간단 프로세스.',
    step1Title: '크레딧 팩 선택',
    step1Desc: '1 크레딧 = 고객 1명의 1개월 구독. 12 크레딧 = 1년 구독. 크레딧은 영구적으로 유효합니다.',
    step2Title: '즉각적인 패널 세팅',
    step2Desc: 'WhatsApp으로 메시지를 보내주시면 15분 이내에 관리 패널 로그인 정보와 충전된 크레딧을 전달해 드립니다.',
    step3Title: '판매 및 수익 창출',
    step3Desc: '24시간 무료 테스트 라인을 생성하고, 직접 정한 소매가로 판매하여 매 갱신 시 60~70%의 높은 마진을 남기세요.',
    pricingBadge: '도매 가격 정책',
    pricingTitle: 'IPTV 리셀러 크레딧 패키지',
    pricingSub: '1 크레딧 = 1개월 서비스 • 무기한 크레딧 • 24/7 연중무휴 지원',
    tier1: {
      badge: '스타터 팩',
      credits: '20 크레딧',
      sub: '수요 테스트 및 관리 패널 세팅에 최적',
      price: '$99',
      rate: '크레딧당 $4.95',
      f1: '20개월 고객 서비스 제공',
      f2: '리셀러 관리 패널 즉시 활성화',
      f3: '무제한 24시간 무료 체험 생성',
      f4: '크레딧 무기한 유효',
      btn: 'WhatsApp으로 주문하기'
    },
    tier2: {
      badge: '가장 인기 있는 팩',
      credits: '50 크레딧',
      sub: '마진율과 초기 투자금의 가장 이상적인 균형',
      price: '$289',
      rate: '크레딧당 $5.78 상당',
      f1: '50개월 고객 서비스 제공',
      f2: '하위 리셀러 생성이 가능한 화이트 라벨 패널',
      f3: '무제한 24시간 & 48시간 테스트 라인',
      f4: '100개 이상 EPG 채널 및 자동 m3u 생성기',
      btn: 'WhatsApp으로 주문하기'
    },
    tier3: {
      badge: '대량 판매자 팩',
      credits: '150 크레딧',
      sub: '50명 이상의 구독자를 보유한 활성 판매자 추천',
      price: '$649',
      rate: '크레딧당 $4.33',
      f1: '150개월 고객 서비스 제공',
      f2: '우선순위 스트림 라우팅',
      f3: '전담 WhatsApp 계정 매니저 배정',
      f4: '크레딧 무기한 유효',
      btn: 'WhatsApp으로 주문하기'
    },
    tier4: {
      badge: '최고 가치 팩',
      credits: '300 크레딧',
      sub: '전문 IPTV 리셀러를 위한 최대 도매 마진 보장',
      price: '$1,199',
      rate: '크레딧당 $3.99 • 최저 도매가',
      f1: '300개월 고객 서비스 제공',
      f2: '하위 리셀러 마스터 관리 권한',
      f3: '자체 DNS 및 완벽한 화이트 라벨링',
      f4: '평생 무료 기술 지원 제공',
      btn: 'WhatsApp으로 주문하기'
    },
    calcBadge: '인터랙티브 수익 계산기',
    calcTitle: 'IPTV 리셀러 수익 계산기',
    calcSub: '고객 수와 소매 판매 가격을 기준으로 월간 및 연간 순이익을 시뮬레이션해 보세요.',
    lblClients: '활성 고객 수',
    lblPrice: '월 소매 판매가 ($)',
    lblDuration: '구독 기간',
    durMonthly: '1개월 단위 (월 1 크레딧)',
    durQuarterly: '3개월 단위 (3개월 3 크레딧)',
    durAnnual: '1년 단위 (12개월 12 크레딧)',
    lblTier: '도매 크레딧 등급',
    tierOptStarter: '스타터 (크레딧당 $4.95)',
    tierOptBiz: '비즈니스 (크레딧당 $5.78)',
    tierOptPro: '프로페셔널 (크레딧당 $4.33)',
    tierOptEnt: '엔터프라이즈 (크레딧당 $3.99)',
    resRevenue: '예상 총 매출',
    resCost: '도매 원가',
    resProfit: '예상 순이익',
    resMargin: '순이익 마진율',
    calcFootnote: '도매가 기준 시뮬레이션입니다. 최종 판매 가격과 통화는 전적으로 판매자가 자유롭게 결정합니다.',
    faqBadge: '자주 묻는 질문',
    faqTitle: '자주 묻는 질문 (FAQ)',
    faqSub: 'IPTV 리셀러 프로그램에 대해 알아야 할 모든 정보입니다.',
    q1: 'IPTV 리셀러 패널이란 무엇인가요?',
    a1: 'IPTV 리셀러 패널은 내 고객의 구독을 관리할 수 있는 웹 기반 대시보드입니다. 도매가로 할인된 크레딧을 대량 구매한 후, 직접 책정한 소매 가격으로 고객 계정을 생성, 활성화 및 관리할 수 있습니다.',
    q2: '구매한 크레딧에 유효기간이 있나요?',
    a2: '아닙니다. 저희 리셀러 프로그램을 통해 구매한 크레딧은 절대 만료되지 않습니다. 실제 고객 계정을 활성화하기 전까지 계정 잔액에 그대로 유지됩니다.',
    q3: '예비 고객을 위한 무료 테스트 라인을 발급할 수 있나요?',
    a3: '네, 가능합니다! 모든 리셀러 계정은 크레딧 차감 없이 패널에서 24시간 무료 테스트 라인을 무제한 발급할 수 있습니다.',
    q4: '패널 설정 및 시작까지 얼마나 걸리나요?',
    a4: 'WhatsApp으로 크레딧 팩을 선택하고 주문을 확인해 주시면, 10~15분 이내에 관리 패널 로그인 계정과 충전된 크레딧을 발급해 드립니다.',
    ctaTitle: 'IPTV 사업을 시작할 준비가 되셨나요?',
    ctaDesc: '지금 바로 WhatsApp으로 문의해 주시면 화이트 라벨 패널을 설정하고 첫 고객을 유치할 수 있도록 도와드립니다.',
    ctaBtnWa: 'WhatsApp으로 문의하기',
    ctaBtnPackages: '패키지 확인하기 ↑'
  }
};

// Generator function
function buildLocalizedResellerHtml(langCode) {
  const t = translations[langCode];
  if (!t) throw new Error(`Missing translation for ${langCode}`);

  const isRtl = t.dir === 'rtl';
  const prefix = `/${langCode}`;
  const canonicalUrl = `https://thesmartersiptv.com/${langCode}/reseller/`;

  const headerHtml = generateUniversalHeader('/reseller/', langCode);
  const footerHtml = generateUniversalFooter(langCode);

  return `<!DOCTYPE html>
<html lang="${langCode}" dir="${isRtl ? 'rtl' : 'ltr'}" class="dark scroll-smooth">
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XFWZSDKJ29"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XFWZSDKJ29');
    </script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/svg+xml" href="/assets/images/brand/favicon.svg">
    <link rel="apple-touch-icon" href="/assets/images/brand/logo.png">
    <title>${t.title}</title>
    <meta name="title" content="${t.title}">
    <meta name="description" content="${t.desc}">
    <link rel="canonical" href="${canonicalUrl}">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="googlebot" content="index, follow">

    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:title" content="${t.title}">
    <meta property="og:description" content="${t.desc}">
    <meta property="og:image" content="https://thesmartersiptv.com/og-image.jpg">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="${canonicalUrl}">
    <meta property="twitter:title" content="${t.title}">
    <meta property="twitter:description" content="${t.desc}">
    <meta property="twitter:image" content="https://thesmartersiptv.com/og-image.jpg">

    <!-- Stylesheets -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link rel="preload" as="style" href="/assets/css/inter.css">
    <link rel="stylesheet" href="/assets/css/inter.css" media="all" onload="this.media='all';this.onload=null">
    <noscript><link rel="stylesheet" href="/assets/css/inter.css"></noscript>
    <link rel="stylesheet" href="/assets/css/main.css">
    <link rel="stylesheet" href="/assets/css/runtime.css">
    <link rel="stylesheet" href="/assets/css/theme.css?v=20261031-footer-v2">
    <link rel="stylesheet" href="/assets/css/heroui.css?v=20261031-footer-v2">

    <style>
      .reseller-hero-glow {
        background: radial-gradient(circle at 50% 0%, rgba(123, 63, 228, 0.22) 0%, transparent 65%);
      }
      .calc-input {
        background: rgba(18, 18, 24, 0.8);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        color: #fff;
        padding: 12px 16px;
        font-size: 0.95rem;
        width: 100%;
        transition: all 0.2s ease;
      }
      .calc-input:focus {
        outline: none;
        border-color: #a855f7;
        box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.2);
      }
    </style>
    <script id="ais-lang-toggle-init">window.__toggleLangMenu=function(e){var d=(e&&e.target&&e.target.closest&&e.target.closest("details.lang-switch"))||document.querySelector("details.lang-switch");if(d){if(e&&e.target&&(e.target.tagName==="SUMMARY"||e.target.closest("summary")))return;d.open=!d.open;}};</script>
</head>
<body class="bg-black text-white selection:bg-cyan-500/30 selection:text-white"${isRtl ? ' dir="rtl"' : ''}>
  <div class="grain-overlay"></div>
  <div class="min-h-screen flex flex-col font-sans antialiased bg-black text-white transition-colors">
  
  ${headerHtml}

  <main class="flex-1">

    <!-- 1. Hero Section -->
    <section class="relative pt-12 pb-20 overflow-hidden reseller-hero-glow border-b border-zinc-900/60">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-6 shadow-sm">
          <span class="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
          ${t.badge}
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
          ${t.h1}
        </h1>
        <p class="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
          ${t.heroP}
        </p>

        <!-- Feature Chips -->
        <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 text-xs font-semibold text-zinc-300">
          <span class="px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800">${t.chips.noBuffer}</span>
          <span class="px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800">${t.chips.noExpire}</span>
          <span class="px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800">${t.chips.uptime}</span>
          <span class="px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800">${t.chips.support}</span>
        </div>

        <!-- Hero CTAs -->
        <div class="flex flex-wrap items-center justify-center gap-4">
          <a href="#pricing-tiers" class="btn-buy-now px-8 py-3.5 rounded-full font-bold text-sm text-white inline-flex items-center gap-2 transition-all shadow-lg shadow-purple-600/30 hover:scale-105">
            <span>${t.btnPackages}</span>
          </a>
          <a href="https://wa.me/18042804332?text=Hello%2C%20I%20want%20a%20free%2024h%20reseller%20trial%20line" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-green px-8 py-3.5 rounded-full font-bold text-sm text-white inline-flex items-center gap-2.5 transition-all shadow-lg" style="background-color:#25D366!important;color:#ffffff!important;box-shadow:0 8px 24px rgba(37,211,102,0.45)!important;">
            <img src="/assets/images/whatsapp.png" width="22" height="22" alt="WhatsApp" style="width:22px;height:22px;flex-shrink:0;">
            <span>${t.btnTrial}</span>
          </a>
        </div>
        <p class="text-xs text-zinc-400 mt-4">${t.trustText}</p>
      </div>
    </section>

    <!-- 2. Benefits Grid -->
    <section class="py-20 border-b border-zinc-900/60 bg-zinc-950/40">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-xs font-bold text-purple-400 uppercase tracking-widest">${t.benefitsBadge}</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4 tracking-tight">${t.benefitsTitle}</h2>
          <p class="text-zinc-400 text-sm sm:text-base leading-relaxed">${t.benefitsSub}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-purple-500/40 transition-all hover:translate-y-[-2px]">
            <div class="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h3 class="text-base font-bold text-white mb-2">${t.card1Title}</h3>
            <p class="text-xs text-zinc-400 leading-relaxed">${t.card1Desc}</p>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-purple-500/40 transition-all hover:translate-y-[-2px]">
            <div class="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3 class="text-base font-bold text-white mb-2">${t.card2Title}</h3>
            <p class="text-xs text-zinc-400 leading-relaxed">${t.card2Desc}</p>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-purple-500/40 transition-all hover:translate-y-[-2px]">
            <div class="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            </div>
            <h3 class="text-base font-bold text-white mb-2">${t.card3Title}</h3>
            <p class="text-xs text-zinc-400 leading-relaxed">${t.card3Desc}</p>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-purple-500/40 transition-all hover:translate-y-[-2px]">
            <div class="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
            </div>
            <h3 class="text-base font-bold text-white mb-2">${t.card4Title}</h3>
            <p class="text-xs text-zinc-400 leading-relaxed">${t.card4Desc}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Credit System Process -->
    <section class="py-20 border-b border-zinc-900/60">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-xs font-bold text-purple-400 uppercase tracking-widest">${t.processBadge}</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4 tracking-tight">${t.processTitle}</h2>
          <p class="text-zinc-400 text-sm sm:text-base">${t.processSub}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/60 relative">
            <span class="w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 font-bold text-sm flex items-center justify-center mb-4 border border-purple-500/30">1</span>
            <h3 class="text-base font-bold text-white mb-2">${t.step1Title}</h3>
            <p class="text-xs text-zinc-400 leading-relaxed">${t.step1Desc}</p>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/60 relative">
            <span class="w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 font-bold text-sm flex items-center justify-center mb-4 border border-purple-500/30">2</span>
            <h3 class="text-base font-bold text-white mb-2">${t.step2Title}</h3>
            <p class="text-xs text-zinc-400 leading-relaxed">${t.step2Desc}</p>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/60 relative">
            <span class="w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 font-bold text-sm flex items-center justify-center mb-4 border border-purple-500/30">3</span>
            <h3 class="text-base font-bold text-white mb-2">${t.step3Title}</h3>
            <p class="text-xs text-zinc-400 leading-relaxed">${t.step3Desc}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Pricing Tiers Section -->
    <section id="pricing-tiers" class="py-24 border-b border-zinc-900/60 bg-zinc-950/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-xs font-bold text-purple-400 uppercase tracking-widest">${t.pricingBadge}</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4 tracking-tight">${t.pricingTitle}</h2>
          <p class="text-xs text-zinc-400 tracking-wider font-semibold">${t.pricingSub}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Tier 1: Starter -->
          <div class="p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-all">
            <div>
              <span class="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-zinc-800 text-zinc-300 mb-4">${t.tier1.badge}</span>
              <h3 class="text-xl font-extrabold text-white mb-1">${t.tier1.credits}</h3>
              <p class="text-xs text-zinc-400 mb-6 leading-relaxed">${t.tier1.sub}</p>
              <div class="mb-6">
                <span class="text-3xl font-extrabold text-white">${t.tier1.price}</span>
                <span class="text-xs text-zinc-400 block mt-1">${t.tier1.rate}</span>
              </div>
              <ul class="space-y-3 text-xs text-zinc-300 mb-8 border-t border-zinc-800 pt-6">
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span>${t.tier1.f1}</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span>${t.tier1.f2}</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span>${t.tier1.f3}</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span>${t.tier1.f4}</span>
                </li>
              </ul>
            </div>
            <a href="https://wa.me/18042804332?text=Hello%2C%20I%20want%20to%20buy%20the%20Starter%20Reseller%20Pack%20(20%20credits%20%2499)" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-green mt-8 w-full py-3.5 rounded-full font-bold text-sm text-white text-center transition-all flex items-center justify-center gap-2.5" style="background-color:#25D366!important;color:#ffffff!important;box-shadow:0 6px 20px rgba(37,211,102,0.4)!important;">
              <img src="/assets/images/whatsapp.png" width="22" height="22" alt="WhatsApp" style="width:22px;height:22px;flex-shrink:0;">
              <span>${t.tier1.btn}</span>
            </a>
          </div>

          <!-- Tier 2: Business (Featured) -->
          <div class="p-6 rounded-3xl bg-zinc-900/60 border-2 border-purple-500/80 flex flex-col justify-between relative shadow-xl shadow-purple-500/10">
            <div class="absolute -top-3.5 ${isRtl ? 'right-6' : 'left-6'}">
              <span class="px-3.5 py-1 rounded-full text-[11px] font-bold bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md">${t.tier2.badge}</span>
            </div>
            <div>
              <div class="mt-2">
                <h3 class="text-xl font-extrabold text-white mb-1">${t.tier2.credits}</h3>
                <p class="text-xs text-zinc-400 mb-6 leading-relaxed">${t.tier2.sub}</p>
              </div>
              <div class="mb-6">
                <span class="text-3xl font-extrabold text-white">${t.tier2.price}</span>
                <span class="text-xs text-purple-300 block mt-1">${t.tier2.rate}</span>
              </div>
              <ul class="space-y-3 text-xs text-zinc-300 mb-8 border-t border-zinc-800 pt-6">
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span>${t.tier2.f1}</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span>${t.tier2.f2}</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span>${t.tier2.f3}</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span>${t.tier2.f4}</span>
                </li>
              </ul>
            </div>
            <a href="https://wa.me/18042804332?text=Hello%2C%20I%20want%20to%20buy%20the%20Business%20Reseller%20Pack%20(50%20credits%20%24289)" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-green mt-8 w-full py-3.5 rounded-full font-bold text-sm text-white text-center transition-all flex items-center justify-center gap-2.5" style="background-color:#25D366!important;color:#ffffff!important;box-shadow:0 6px 20px rgba(37,211,102,0.4)!important;">
              <img src="/assets/images/whatsapp.png" width="22" height="22" alt="WhatsApp" style="width:22px;height:22px;flex-shrink:0;">
              <span>${t.tier2.btn}</span>
            </a>
          </div>

          <!-- Tier 3: Professional -->
          <div class="p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-all">
            <div>
              <span class="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-zinc-800 text-zinc-300 mb-4">${t.tier3.badge}</span>
              <h3 class="text-xl font-extrabold text-white mb-1">${t.tier3.credits}</h3>
              <p class="text-xs text-zinc-400 mb-6 leading-relaxed">${t.tier3.sub}</p>
              <div class="mb-6">
                <span class="text-3xl font-extrabold text-white">${t.tier3.price}</span>
                <span class="text-xs text-zinc-400 block mt-1">${t.tier3.rate}</span>
              </div>
              <ul class="space-y-3 text-xs text-zinc-300 mb-8 border-t border-zinc-800 pt-6">
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span>${t.tier3.f1}</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span>${t.tier3.f2}</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span>${t.tier3.f3}</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span>${t.tier3.f4}</span>
                </li>
              </ul>
            </div>
            <a href="https://wa.me/18042804332?text=Hello%2C%20I%20want%20to%20buy%20the%20Professional%20Reseller%20Pack%20(150%20credits%20%24649)" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-green mt-8 w-full py-3.5 rounded-full font-bold text-sm text-white text-center transition-all flex items-center justify-center gap-2.5" style="background-color:#25D366!important;color:#ffffff!important;box-shadow:0 6px 20px rgba(37,211,102,0.4)!important;">
              <img src="/assets/images/whatsapp.png" width="22" height="22" alt="WhatsApp" style="width:22px;height:22px;flex-shrink:0;">
              <span>${t.tier3.btn}</span>
            </a>
          </div>

          <!-- Tier 4: Enterprise -->
          <div class="p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-all">
            <div>
              <span class="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-zinc-800 text-zinc-300 mb-4">${t.tier4.badge}</span>
              <h3 class="text-xl font-extrabold text-white mb-1">${t.tier4.credits}</h3>
              <p class="text-xs text-zinc-400 mb-6 leading-relaxed">${t.tier4.sub}</p>
              <div class="mb-6">
                <span class="text-3xl font-extrabold text-white">${t.tier4.price}</span>
                <span class="text-xs text-zinc-400 block mt-1">${t.tier4.rate}</span>
              </div>
              <ul class="space-y-3 text-xs text-zinc-300 mb-8 border-t border-zinc-800 pt-6">
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span>${t.tier4.f1}</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span>${t.tier4.f2}</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span>${t.tier4.f3}</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span>${t.tier4.f4}</span>
                </li>
              </ul>
            </div>
            <a href="https://wa.me/18042804332?text=Hello%2C%20I%20want%20to%20buy%20the%20Enterprise%20Reseller%20Pack%20(300%20credits%20%241199)" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-green mt-8 w-full py-3.5 rounded-full font-bold text-sm text-white text-center transition-all flex items-center justify-center gap-2.5" style="background-color:#25D366!important;color:#ffffff!important;box-shadow:0 6px 20px rgba(37,211,102,0.4)!important;">
              <img src="/assets/images/whatsapp.png" width="22" height="22" alt="WhatsApp" style="width:22px;height:22px;flex-shrink:0;">
              <span>${t.tier4.btn}</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Interactive Profit Calculator -->
    <section class="py-20 border-b border-zinc-900/60">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="p-8 sm:p-12 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 shadow-2xl">
          <div class="text-center max-w-xl mx-auto mb-10">
            <span class="text-xs font-bold text-purple-400 uppercase tracking-widest">${t.calcBadge}</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-3">${t.calcTitle}</h2>
            <p class="text-xs sm:text-sm text-zinc-400">${t.calcSub}</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <label for="calc-clients" class="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">${t.lblClients}</label>
              <input type="number" id="calc-clients" value="50" min="1" max="10000" class="calc-input">
            </div>
            <div>
              <label for="calc-price" class="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">${t.lblPrice}</label>
              <input type="number" id="calc-price" value="15" min="1" max="100" class="calc-input">
            </div>
            <div>
              <label for="calc-duration" class="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">${t.lblDuration}</label>
              <select id="calc-duration" class="calc-input">
                <option value="1" selected>${t.durMonthly}</option>
                <option value="3">${t.durQuarterly}</option>
                <option value="12">${t.durAnnual}</option>
              </select>
            </div>
            <div>
              <label for="calc-tier" class="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">${t.lblTier}</label>
              <select id="calc-tier" class="calc-input">
                <option value="4.95">${t.tierOptStarter}</option>
                <option value="5.78" selected>${t.tierOptBiz}</option>
                <option value="4.33">${t.tierOptPro}</option>
                <option value="3.99">${t.tierOptEnt}</option>
              </select>
            </div>
          </div>

          <!-- Calculator Results -->
          <div class="p-6 rounded-2xl bg-black/60 border border-zinc-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <span class="text-[11px] text-zinc-400 uppercase tracking-wider block mb-1">${t.resRevenue}</span>
              <span id="res-revenue" class="text-xl sm:text-2xl font-black text-white">$750</span>
            </div>
            <div>
              <span class="text-[11px] text-zinc-400 uppercase tracking-wider block mb-1">${t.resCost}</span>
              <span id="res-cost" class="text-xl sm:text-2xl font-black text-zinc-300">$289</span>
            </div>
            <div>
              <span class="text-[11px] text-zinc-400 uppercase tracking-wider block mb-1">${t.resProfit}</span>
              <span id="res-profit" class="text-xl sm:text-2xl font-black text-emerald-400">$461</span>
            </div>
            <div>
              <span class="text-[11px] text-zinc-400 uppercase tracking-wider block mb-1">${t.resMargin}</span>
              <span id="res-margin" class="text-xl sm:text-2xl font-black text-purple-400">61.5%</span>
            </div>
          </div>
          <p class="text-[11px] text-zinc-400 text-center mt-4">${t.calcFootnote}</p>
        </div>
      </div>
    </section>

    <!-- 6. FAQs Section -->
    <section class="py-20 border-b border-zinc-900/60">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-xl mx-auto mb-12">
          <span class="text-xs font-bold text-purple-400 uppercase tracking-widest">${t.faqBadge}</span>
          <h2 class="text-3xl font-extrabold text-white mt-1 mb-3">${t.faqTitle}</h2>
          <p class="text-xs sm:text-sm text-zinc-400">${t.faqSub}</p>
        </div>

        <div class="space-y-4">
          <details class="group p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 transition-colors">
            <summary class="font-bold text-sm sm:text-base text-white cursor-pointer list-none flex items-center justify-between">
              <span>${t.q1}</span>
              <span class="transition group-open:rotate-180 text-zinc-400 text-xs">▼</span>
            </summary>
            <p class="text-xs sm:text-sm text-zinc-400 mt-4 leading-relaxed">${t.a1}</p>
          </details>

          <details class="group p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 transition-colors">
            <summary class="font-bold text-sm sm:text-base text-white cursor-pointer list-none flex items-center justify-between">
              <span>${t.q2}</span>
              <span class="transition group-open:rotate-180 text-zinc-400 text-xs">▼</span>
            </summary>
            <p class="text-xs sm:text-sm text-zinc-400 mt-4 leading-relaxed">${t.a2}</p>
          </details>

          <details class="group p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 transition-colors">
            <summary class="font-bold text-sm sm:text-base text-white cursor-pointer list-none flex items-center justify-between">
              <span>${t.q3}</span>
              <span class="transition group-open:rotate-180 text-zinc-400 text-xs">▼</span>
            </summary>
            <p class="text-xs sm:text-sm text-zinc-400 mt-4 leading-relaxed">${t.a3}</p>
          </details>

          <details class="group p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 transition-colors">
            <summary class="font-bold text-sm sm:text-base text-white cursor-pointer list-none flex items-center justify-between">
              <span>${t.q4}</span>
              <span class="transition group-open:rotate-180 text-zinc-400 text-xs">▼</span>
            </summary>
            <p class="text-xs sm:text-sm text-zinc-400 mt-4 leading-relaxed">${t.a4}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- 7. Bottom Conversion Banner -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800 shadow-2xl relative overflow-hidden">
          <h2 class="text-2xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">${t.ctaTitle}</h2>
          <p class="text-zinc-400 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            ${t.ctaDesc}
          </p>
          <div class="flex flex-wrap items-center justify-center gap-4">
            <a href="https://wa.me/18042804332?text=Hello%2C%20I%20am%20ready%20to%20start%20my%20reseller%20business" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-green px-8 py-3.5 rounded-full font-bold text-sm text-white inline-flex items-center gap-2.5 transition-all shadow-lg" style="background-color:#25D366!important;color:#ffffff!important;box-shadow:0 8px 24px rgba(37,211,102,0.45)!important;">
              <img src="/assets/images/whatsapp.png" width="22" height="22" alt="WhatsApp" style="width:22px;height:22px;flex-shrink:0;">
              <span>${t.ctaBtnWa}</span>
            </a>
            <a href="#pricing-tiers" class="px-8 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white inline-flex items-center gap-2 transition-all shadow-lg shadow-purple-600/25">
              <span>${t.ctaBtnPackages}</span>
            </a>
          </div>
        </div>
      </div>
    </section>

  </main>

  ${footerHtml}

  </div>

  <!-- Calculator Script -->
  <script>
    (function() {
      function calcUpdate() {
        var clients = parseInt(document.getElementById('calc-clients').value) || 0;
        var price = parseFloat(document.getElementById('calc-price').value) || 0;
        var costPerCr = parseFloat(document.getElementById('calc-tier').value) || 5.78;
        var months = parseInt(document.getElementById('calc-duration').value) || 1;

        var totalRevenue = clients * price * months;
        var totalCost = clients * costPerCr * months;
        var profit = totalRevenue - totalCost;
        var margin = totalRevenue > 0 ? ((profit / totalRevenue) * 100).toFixed(1) : '0.0';

        var fmt = function(n) { return '$' + Math.round(n).toLocaleString('en-US'); };

        document.getElementById('res-revenue').textContent = fmt(totalRevenue);
        document.getElementById('res-cost').textContent = fmt(totalCost);
        document.getElementById('res-profit').textContent = fmt(profit);
        document.getElementById('res-margin').textContent = margin + '%';
      }

      ['calc-clients', 'calc-price', 'calc-tier', 'calc-duration'].forEach(function(id) {
        var el = document.getElementById(id);
        if (el) {
          el.addEventListener('input', calcUpdate);
          el.addEventListener('change', calcUpdate);
        }
      });
      calcUpdate();
    })();
  </script>
  <script src="/assets/js/site-interactions.js?v=20261030-nav2" defer></script>
  <script src="/assets/js/support-chat.js" defer></script>
</body>
</html>`;
}

// Generate for all languages
const targetLangs = Object.keys(translations);
let generatedCount = 0;

targetLangs.forEach(lang => {
  const dir = path.join(__dirname, '..', 'Iptv The smarters Pro', lang, 'reseller');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const html = buildLocalizedResellerHtml(lang);
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  console.log(`✓ Generated fully translated reseller page for: ${lang}`);
  generatedCount++;
});

console.log(`\nSuccessfully generated ${generatedCount} localized reseller pages!`);
