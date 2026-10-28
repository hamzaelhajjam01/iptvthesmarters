import fs from 'node:fs';

const enGuides = JSON.parse(fs.readFileSync('scripts/guides-metadata-en.json', 'utf8'));

// High quality localized translations dictionary for all 35 guides across 10 languages
const GUIDES_I18N = {
  'install-iptv-smarters-pro-on-firestick': {
    fr: { title: "Comment Installer IPTV Smarters Pro sur Firestick (Guide 2026)", desc: "Guide étape par étape pour installer et activer IPTV Smarters Pro sur Fire TV Stick avec Downloader et codes Xtream." },
    de: { title: "IPTV Smarters Pro auf Fire TV Stick installieren (2026 Anleitung)", desc: "Schritt-für-Schritt-Anleitung zur Installation von IPTV Smarters Pro auf Amazon Firestick mit Downloader." },
    es: { title: "Cómo Instalar IPTV Smarters Pro en Firestick (Guía 2026)", desc: "Tutorial paso a paso para descargar e instalar IPTV Smarters Pro en Fire TV Stick usando la app Downloader." },
    ar: { title: "طريقة تحميل وتثبيت IPTV Smarters Pro على Firestick (دليل 2026)", desc: "شرح تفصيلي بالخطوات لتثبيت وتشغيل تطبيق IPTV Smarters Pro على أجهزة أمازون فاير ستيك." },
    it: { title: "Come Installare IPTV Smarters Pro su Firestick (Guida 2026)", desc: "Guida passo-passo per scaricare e configurare IPTV Smarters Pro su Amazon Fire TV Stick con Downloader." },
    nl: { title: "IPTV Smarters Pro Installeren op Firestick (Handleiding 2026)", desc: "Stap-voor-stap uitleg om IPTV Smarters Pro te downloaden en installeren op Amazon Fire TV Stick." },
    pt: { title: "Como Instalar IPTV Smarters Pro na Firestick (Guia 2026)", desc: "Passo a passo completo para instalar e configurar o IPTV Smarters Pro na Amazon Fire TV Stick." },
    'pt-br': { title: "Como Instalar IPTV Smarters Pro no Fire Stick (Guia 2026)", desc: "Tutorial completo para baixar e instalar IPTV Smarters Pro no Amazon Fire TV Stick com Downloader." },
    pl: { title: "Jak Zainstalować IPTV Smarters Pro na Firestick (Poradnik 2026)", desc: "Instrukcja krok po kroku jak pobrać i zainstalować aplikację IPTV Smarters Pro na Amazon Fire TV Stick." },
    ko: { title: "파이어스틱(Firestick)에 IPTV Smarters Pro 설치하는 방법 (2026 가이드)", desc: "다운로더(Downloader) 앱을 사용하여 아마존 파이어 TV 스틱에 IPTV Smarters Pro를 설치하고 설정하는 완벽한 가이드." }
  },
  'how-to-set-up-xtream-codes-iptv-smarters-pro': {
    fr: { title: "Comment Configurer les Codes Xtream sur IPTV Smarters Pro", desc: "Le moyen le plus rapide de se connecter. Suivez notre tutoriel étape par étape pour entrer vos identifiants Xtream Codes API." },
    de: { title: "Xtream Codes in IPTV Smarters Pro einrichten (Anleitung)", desc: "Der schnellste Weg zum Login. Anleitung zur fehlerfreien Eingabe Ihrer Xtream Codes API-Zugangsdaten." },
    es: { title: "Cómo Configurar Xtream Codes en IPTV Smarters Pro", desc: "La forma más rápida de iniciar sesión. Tutorial paso a paso para ingresar tus credenciales Xtream Codes API." },
    ar: { title: "طريقة إدخال وتفعيل أكواد Xtream على IPTV Smarters Pro", desc: "أسرع وأسهل طريقة لتسجيل الدخول وإدخال بيانات سيرفر Xtream Codes API بدون أخطاء." },
    it: { title: "Come Configurare Xtream Codes su IPTV Smarters Pro", desc: "Il modo più veloce per accedere. Guida passo-passo per inserire le credenziali API Xtream Codes." },
    nl: { title: "Xtream Codes Instellen in IPTV Smarters Pro", desc: "De snelste manier om in te loggen. Volg onze handleiding om Xtream Codes API-gegevens correct in te voeren." },
    pt: { title: "Como Configurar Xtream Codes no IPTV Smarters Pro", desc: "O método mais rápido para aceder. Siga o nosso tutorial para inserir as credenciais Xtream Codes API." },
    'pt-br': { title: "Como Configurar Xtream Codes no IPTV Smarters Pro", desc: "O jeito mais rápido de conectar. Veja o passo a passo para inserir seus dados da API Xtream Codes." },
    pl: { title: "Jak Skonfigurować Xtream Codes w IPTV Smarters Pro", desc: "Najszybszy sposób logowania. Instrukcja wprowadzania danych Xtream Codes API bez błędów." },
    ko: { title: "IPTV Smarters Pro에서 Xtream Codes 설정하는 방법", desc: "가장 빠르고 안정적인 로그인 방법. Xtream Codes API 접속 정보를 정확하게 입력하는 튜토리얼." }
  },
  'iptv-smarters-pro-failed-to-authorize-fix': {
    fr: { title: "IPTV Smarters Pro « Échec d'autorisation » — Comment Corriger l'Erreur", desc: "Comprenez pourquoi votre connexion serveur est rejetée et comment corriger les erreurs de syntaxe, de FAI ou de compte." },
    de: { title: "IPTV Smarters Pro Fehler «Failed to Authorize» beheben", desc: "Erfahren Sie, warum die Serververbindung abgelehnt wurde und wie Sie URL-Fehler oder ISP-Sperren sofort lösen." },
    es: { title: "IPTV Smarters Pro «Failed to Authorize» — Cómo Solucionar el Error", desc: "Descubre por qué tu servidor rechaza la conexión y cómo solucionar errores de URL, bloqueo de operador o cuentas." },
    ar: { title: "حل مشكلة فشل التوثيق Failed to Authorize في تطبيق IPTV Smarters Pro", desc: "تعرف على أسباب رفض اتصال السيرفر وكيفية إصلاح أخطاء الرابط وحجب مزودي الإنترنت فوراً." },
    it: { title: "IPTV Smarters Pro «Failed to Authorize» — Come Risolvere", desc: "Scopri perché la connessione è stata rifiutata e come risolvere problemi di URL, blocchi ISP o credenziali errate." },
    nl: { title: "IPTV Smarters Pro «Failed to Authorize» Oplossen", desc: "Begrijp waarom de serververbinding wordt geweigerd en los URL-fouten of providerblokkades direct op." },
    pt: { title: "IPTV Smarters Pro «Failed to Authorize» — Como Corrigir", desc: "Entenda por que a ligação foi recusada e saiba como corrigir barras extras, bloqueios de ISP ou contas suspensas." },
    'pt-br': { title: "IPTV Smarters Pro «Failed to Authorize» — Como Resolver", desc: "Entenda por que o servidor rejeitou a conexão e como corrigir erros de URL, bloqueios de operadora ou login." },
    pl: { title: "IPTV Smarters Pro Błąd «Failed to Authorize» — Jak Naprawić", desc: "Dowiedz się dlaczego serwer odrzuca połączenie i jak natychmiast naprawić błędy formatowania adresu URL." },
    ko: { title: "IPTV Smarters Pro «인증 실패(Failed to Authorize)» 해결 방법", desc: "서버 연결이 거부되는 원인을 파악하고 URL 형식 오류, 인터넷 통신사 차단 등을 즉시 해결하는 가이드." }
  },
  'iptv-smarters-pro-on-samsung-lg-smart-tvs': {
    fr: { title: "Comment Installer IPTV Smarters Pro sur Smart TV Samsung & LG", desc: "Guide officiel pour installer l'application Smarters sur Samsung Tizen OS et LG webOS sans boîtier externe." },
    de: { title: "IPTV Smarters Pro auf Samsung & LG Smart TV installieren", desc: "Vollständige Anleitung zur Installation von IPTV Smarters auf Samsung (Tizen) und LG (webOS) Fernsehern." },
    es: { title: "Cómo Instalar IPTV Smarters Pro en Smart TV Samsung y LG", desc: "Guía oficial para instalar la aplicación en televisores Samsung Tizen OS y LG webOS directamente." },
    ar: { title: "طريقة تثبيت وتشغيل IPTV Smarters Pro على شاشات سامسونج وLG الذكية", desc: "دليل شامل لتنزيل التطبيق على أنظمة Tizen وwebOS للشاشات الذكية بدون أجهزة إضافية." },
    it: { title: "Come Installare IPTV Smarters Pro su Smart TV Samsung e LG", desc: "Guida per installare l'applicazione direttamente su TV Samsung (Tizen) e LG (webOS)." },
    nl: { title: "IPTV Smarters Pro Installeren op Samsung & LG Smart TV", desc: "Officiële handleiding voor installatie op Samsung Tizen en LG webOS smart-tv's." },
    pt: { title: "Como Instalar IPTV Smarters Pro em Smart TV Samsung e LG", desc: "Guia para instalar a aplicação diretamente em televisores Samsung Tizen e LG webOS." },
    'pt-br': { title: "Como Instalar IPTV Smarters Pro na Smart TV Samsung e LG", desc: "Tutorial completo para instalar o aplicativo no sistema Tizen da Samsung e webOS da LG." },
    pl: { title: "Jak Zainstalować IPTV Smarters Pro na Smart TV Samsung i LG", desc: "Oficjalny poradnik instalacji aplikacji na telewizorach Samsung (Tizen) oraz LG (webOS)." },
    ko: { title: "삼성 및 LG 스마트 TV에 IPTV Smarters Pro 설치하는 방법", desc: "외부 셋톱박스 없이 삼성 타이젠(Tizen) 및 LG webOS 스마트 TV에 직접 설치하고 시청하는 방법." }
  },
  'iptv-smarters-pro-keeps-buffering-fixes': {
    fr: { title: "IPTV Smarters Pro qui Coupe et Bloque : 7 Solutions Efficaces", desc: "Résolvez définitivement les problèmes de coupures et de mise en mémoire tampon sur IPTV Smarters Pro." },
    de: { title: "IPTV Smarters Pro ruckelt und buffert: 7 wirksame Lösungen", desc: "Schluss mit ständigen Unterbrechungen. 7 bewährte Methoden gegen Ruckeln und Zwischenspeichern." },
    es: { title: "IPTV Smarters Pro se Traba o Congela: 7 Soluciones Rápidas", desc: "Elimina los cortes y problemas de buffering en IPTV Smarters Pro con estas 7 soluciones comprobadas." },
    ar: { title: "حل مشكلة التقطيع والتهنيج في تطبيق IPTV Smarters Pro (7 حلول مجربة)", desc: "تخلص نهائياً من مشاكل توقف البث والتقطيع المتكرر في قنوات IPTV بخطوات سهلة وفعالة." },
    it: { title: "IPTV Smarters Pro si Blocca o Buffera: 7 Soluzioni Efficaci", desc: "Risolvi definitivamente i problemi di buffering e blocchi durante lo streaming con IPTV Smarters Pro." },
    nl: { title: "IPTV Smarters Pro Haspelt of Buffert: 7 Werkende Oplossingen", desc: "Stop haperingen en bufferproblemen op IPTV Smarters Pro met deze 7 beproefde methoden." },
    pt: { title: "IPTV Smarters Pro a Travar ou Parar: 7 Soluções Que Funcionam", desc: "Elimine o buffering e paragens constantes no IPTV Smarters Pro com estas dicas práticas." },
    'pt-br': { title: "IPTV Smarters Pro Travando ou Congelando: 7 Dicas que Resolvem", desc: "Acabe com travamentos e lentidão no IPTV Smarters Pro com configurações simples e rápidas." },
    pl: { title: "IPTV Smarters Pro Zacina się i Buforuje: 7 Skutecznych Rozwiązań", desc: "Rozwiąż problemy z buforowaniem i zacinaniem w aplikacji IPTV Smarters Pro raz na zawsze." },
    ko: { title: "IPTV Smarters Pro 버퍼링 및 끊김 현상 해결 방법 (7가지 팁)", desc: "스트리밍 중 잦은 멈춤과 버퍼링을 없애고 쾌적한 4K 재생 환경을 만드는 핵심 해결법." }
  },
  'how-to-activate-iptv-smarters-pro': {
    fr: { title: "Comment Activer IPTV Smarters Pro (Guide Étape par Étape)", desc: "Tutoriel complet pour télécharger, installer et activer les fonctionnalités d'IPTV Smarters Pro." },
    de: { title: "IPTV Smarters Pro aktivieren (Schritt-für-Schritt-Anleitung)", desc: "Komplette Anleitung zum Herunterladen, Einrichten und Aktivieren von IPTV Smarters Pro." },
    es: { title: "Cómo Activar IPTV Smarters Pro (Paso a Paso)", desc: "Guía completa para descargar, instalar y activar todas las funciones de IPTV Smarters Pro." },
    ar: { title: "طريقة تفعيل وتشغيل IPTV Smarters Pro خطوة بخطوة", desc: "شرح شامل لكيفية تنزيل وتثبيت وتفعيل كامل مميزات وسيرفرات IPTV Smarters Pro." },
    it: { title: "Come Attivare IPTV Smarters Pro (Guida Passo-Passo)", desc: "Guida completa per scaricare, installare e attivare IPTV Smarters Pro su qualsiasi dispositivo." },
    nl: { title: "IPTV Smarters Pro Activeren (Stap voor Stap)", desc: "Volledige handleiding voor het downloaden, installeren en activeren van IPTV Smarters Pro." },
    pt: { title: "Como Ativar o IPTV Smarters Pro (Passo a Passo)", desc: "Tutorial completo para descarregar, instalar e ativar todas as funções do IPTV Smarters Pro." },
    'pt-br': { title: "Como Ativar o IPTV Smarters Pro (Passo a Passo)", desc: "Guia passo a passo para baixar, instalar e ativar o IPTV Smarters Pro em qualquer aparelho." },
    pl: { title: "Jak Aktywować IPTV Smarters Pro (Instrukcja Krok po Kroku)", desc: "Kompletny poradnik pobierania, instalacji i aktywacji aplikacji IPTV Smarters Pro." },
    ko: { title: "IPTV Smarters Pro 다운로드 및 활성화 방법 (단계별 안내)", desc: "지원 기기별 다운로드부터 프리미엄 기능 활성화까지 모든 과정을 설명하는 가이드." }
  },
  'how-to-add-m3u-playlist-iptv-smarters-pro': {
    fr: { title: "Comment Ajouter une Playlist M3U sur IPTV Smarters Pro", desc: "Apprenez à charger facilement une liste M3U ou un fichier URL dans IPTV Smarters Pro." },
    de: { title: "M3U-Wiedergabeliste in IPTV Smarters Pro hinzufügen", desc: "So importieren Sie M3U-Links und Wiedergabelisten ohne Speicherprobleme in Smarters Pro." },
    es: { title: "Cómo Agregar una Lista M3U en IPTV Smarters Pro", desc: "Aprende a importar listas de reproducción M3U o enlaces URL en IPTV Smarters Pro." },
    ar: { title: "طريقة إضافة وتشغيل قائمة قنوات M3U في IPTV Smarters Pro", desc: "تعلم كيفية إضافة رابط M3U أو ملف التشغيل وتجاوز مشاكل بطء التحميل بسهولة." },
    it: { title: "Come Aggiungere una Playlist M3U su IPTV Smarters Pro", desc: "Scopri come importare URL M3U o file di playlist all'interno di IPTV Smarters Pro." },
    nl: { title: "Een M3U-Afspeellijst Toevoegen aan IPTV Smarters Pro", desc: "Leer hoe u M3U-links en bestanden importeert in IPTV Smarters Pro zonder vertraging." },
    pt: { title: "Como Adicionar uma Lista M3U no IPTV Smarters Pro", desc: "Saiba como importar listas M3U ou ficheiros URL para o leitor IPTV Smarters Pro." },
    'pt-br': { title: "Como Adicionar Lista M3U no IPTV Smarters Pro", desc: "Aprenda a carregar listas M3U ou links URL no IPTV Smarters Pro sem travamentos." },
    pl: { title: "Jak Dodać Listę M3U do IPTV Smarters Pro", desc: "Dowiedz się jak zaimportować linki M3U i zarządzać listami odtwarzania w aplikacji." },
    ko: { title: "IPTV Smarters Pro에 M3U 플레이리스트 추가하는 방법", desc: "대용량 M3U 링크 및 파일을 스마트폰과 TV 앱에 손쉽게 추가하고 로딩하는 방법." }
  },
  'is-iptv-smarters-pro-free': {
    fr: { title: "L'application IPTV Smarters Pro est-elle Gratuite ? (Application vs Abonnement)", desc: "Comprenez la différence entre le lecteur IPTV Smarters Pro gratuit et l'abonnement payant nécessaire pour les flux." },
    de: { title: "Ist IPTV Smarters Pro kostenlos? (App-Kosten vs. Abonnement)", desc: "Der Unterschied zwischen dem kostenlosen Player und dem kostenpflichtigen IPTV-Abonnement verständlich erklärt." },
    es: { title: "¿Es Gratis IPTV Smarters Pro? (Costo de la App vs Suscripción)", desc: "Conoce la diferencia entre el reproductor gratuito IPTV Smarters Pro y el abono necesario para los canales." },
    ar: { title: "هل تطبيق IPTV Smarters Pro مجاني؟ (الفرق بين التطبيق واشتراك القنوات)", desc: "توضيح الفرق بين مشغل IPTV Smarters المجاني واشتراك القنوات المدفوع للحصول على البث." },
    it: { title: "IPTV Smarters Pro è Gratuito? (App vs Abbonamento)", desc: "Comprendi la differenza tra l'app lettore gratuita e l'abbonamento necessario per vedere i canali." },
    nl: { title: "Is IPTV Smarters Pro Gratis? (App Kosten vs Abonnement)", desc: "Begrijp het verschil tussen de gratis app en het betaalde abonnement dat vereist is voor live tv." },
    pt: { title: "O IPTV Smarters Pro é Grátis? (Aplicação vs Subscrição)", desc: "Entenda a distinção entre a aplicação gratuita e a subscrição de canais necessária para streaming." },
    'pt-br': { title: "O IPTV Smarters Pro é Grátis? (Aplicativo vs Assinatura)", desc: "Saiba a diferença entre o app gratuito de reprodução e a assinatura necessária para liberar canais." },
    pl: { title: "Czy IPTV Smarters Pro jest Darmowe? (Aplikacja a Subskrypcja)", desc: "Poznaj różnicę między darmowym odtwarzaczem a płatną subskrypcją wymaganą do oglądania kanałów." },
    ko: { title: "IPTV Smarters Pro는 무료인가요? (앱 비용 vs 유료 구독 차이점)", desc: "무료로 제공되는 미디어 플레이어 앱과 실시간 채널 시청을 위해 필요한 유료 구독의 차이점 정리." }
  },
  'best-iptv-subscriptions-for-smarters-pro': {
    fr: { title: "Meilleurs Abonnements Compatibles avec IPTV Smarters Pro (Test 2026)", desc: "Quels critères rechercher pour choisir le meilleur fournisseur IPTV 4K sans coupure avec support EPG et Replay." },
    de: { title: "Die besten IPTV Abonnements für IPTV Smarters Pro (2026)", desc: "Worauf Sie bei der Auswahl eines Anbieters achten sollten: 4K, Anti-Freeze und zuverlässiger EPG." },
    es: { title: "Mejores Suscripciones Compatibles con IPTV Smarters Pro", desc: "Qué características buscar al comprar un servicio de IPTV: estabilidad 4K, EPG y soporte 24/7." },
    ar: { title: "أفضل سيرفرات واشتراكات متوافقة مع تطبيق IPTV Smarters Pro (2026)", desc: "ما هي المعايير الأساسية لاختيار أفضل اشتراك IPTV يدعم البث بدقة 4K وثبات عالي بدون تقطيع." },
    it: { title: "Migliori Abbonamenti IPTV Compatibili con Smarters Pro", desc: "Cosa cercare in un provider IPTV: server stabili in 4K, tecnologia anti-blocco e guida EPG." },
    nl: { title: "De Beste IPTV Abonnementen voor IPTV Smarters Pro (2026)", desc: "Waar u op moet letten bij het kiezen van een provider: 4K beeldkwaliteit, EPG en stabiliteit." },
    pt: { title: "Melhores Subscrições IPTV para IPTV Smarters Pro (2026)", desc: "Descubra como escolher um fornecedor de confiança com canais 4K estáveis e suporte 24/7." },
    'pt-br': { title: "Melhores Assinaturas IPTV para IPTV Smarters Pro (2026)", desc: "Como escolher o melhor servidor IPTV com qualidade 4K, anti-travamento e suporte completo." },
    pl: { title: "Najlepsze Subskrypcje IPTV dla IPTV Smarters Pro (2026)", desc: "Czym kierować się przy wyborze dostawcy: stabilność 4K, brak buforowania i wsparcie EPG." },
    ko: { title: "IPTV Smarters Pro에 가장 적합한 4K IPTV 구독 추천 (2026)", desc: "고화질 4K 스트리밍, EPG 지원, 버퍼링 없는 고성능 서버를 갖춘 최적의 IPTV 구독 선택 가이드." }
  }
};

// Generate default translation patterns for the remaining guides
const GENERIC_TRANSLATION_TEMPLATES = {
  fr: {
    'how-many-devices-can-i-use-iptv-smarters-pro-on': { title: "Combien d'Appareils Peut-on Utiliser sur IPTV Smarters Pro ?", desc: "Comprenez les limites de connexions simultanées et les règles multi-écrans avant de commander." },
    'how-to-choose-an-iptv-service': { title: "Comment Choisir son Fournisseur IPTV : 7 Critères Clés", desc: "Les 7 facteurs essentiels pour sélectionner un service IPTV fiable et stable en 4K." },
    'how-to-clear-cache-iptv-smarters-pro': { title: "Comment Vider le Cache sur IPTV Smarters Pro", desc: "Libérez de l'espace et accélérez votre lecteur sans perdre vos identifiants de connexion." },
    'how-to-spot-fake-iptv-smarters-pro-apps': { title: "Comment Repérer les Fausses Applications IPTV Smarters Pro", desc: "Protégez vos données et évitez les applications clones malveillantes sur Android et Firestick." },
    'how-to-tell-if-iptv-provider-is-legitimate': { title: "Comment Savoir si un Fournisseur IPTV est Fiable", desc: "La liste de vérification pour reconnaître un service IPTV sérieux et de qualité." },
    'how-to-use-multiple-playlists-iptv-smarters-pro': { title: "Comment Utiliser Plusieurs Playlists sur IPTV Smarters Pro", desc: "Passez facilement d'un abonnement à un autre au sein d'une seule et même application." },
    'iptv-glossary-m3u-epg-vod-xtream-codes': { title: "Glossaire IPTV : M3U, EPG, VOD et Xtream Codes Expliqués", desc: "Tous les termes techniques de l'IPTV expliqués simplement pour les débutants." },
    'iptv-pricing-monthly-annual-lifetime-plans': { title: "Prix Abonnement IPTV : Formules Mensuelles vs Annuelles", desc: "Comparez les tarifs et découvrez quelle formule offre le meilleur rapport qualité/prix." },
    'iptv-smarters-pro-apk-safe-to-download': { title: "L'APK IPTV Smarters Pro est-il Sûr à Télécharger ?", desc: "Vérifiez la sécurité des fichiers APK et téléchargez l'application officielle sans risque." },
    'iptv-smarters-pro-black-screen-fix': { title: "Écran Noir sur IPTV Smarters Pro : Comment Régler le Problème", desc: "Solutions rapides pour résoudre l'écran noir et le son sans image sur votre téléviseur." },
    'iptv-smarters-pro-complete-guide': { title: "Guide Complet IPTV Smarters Pro : Prise en Main de A à Z", desc: "Le tutoriel exhaustif pour maîtriser tous les réglages et fonctionnalités du lecteur." },
    'iptv-smarters-pro-download-official-sources': { title: "Télécharger IPTV Smarters Pro : Liens et Sources Officielles", desc: "Téléchargez l'application légitime sur Firestick, Android, iOS, Windows et Smart TV." },
    'iptv-smarters-pro-epg-not-loading-fix': { title: "Guide TV (EPG) qui ne Charge pas sur Smarters Pro : Solutions", desc: "Comment forcer l'actualisation du guide des programmes et corriger le décalage horaire." },
    'iptv-smarters-pro-for-pc-mac-setup': { title: "Comment Installer IPTV Smarters Pro sur PC Windows et Mac", desc: "Regardez vos chaînes favorites sur grand écran d'ordinateur en quelques clics." },
    'iptv-smarters-pro-login-not-working': { title: "Connexion Impossible sur IPTV Smarters Pro : Que Faire ?", desc: "Diagnostic des erreurs d'identifiant et solutions pour rétablir votre flux rapidement." },
    'iptv-smarters-pro-no-sound-fix': { title: "Pas de Son sur IPTV Smarters Pro : Comment Régler l'Audio", desc: "Changez de décodeur audio (HW/SW) pour retrouver le son sur toutes vos chaînes et films." },
    'iptv-smarters-pro-on-android-box-nvidia-shield': { title: "IPTV Smarters Pro sur Android TV Box et Nvidia Shield", desc: "Optimisez les performances de streaming 4K sur vos boîtiers Android haut de gamme." },
    'iptv-smarters-pro-on-iphone-ios': { title: "Comment Installer IPTV Smarters Pro sur iPhone, iPad et Apple TV", desc: "Guide officiel pour configurer l'application iOS sur les appareils Apple." },
    'iptv-smarters-pro-update-latest-version': { title: "Comment Mettre à Jour IPTV Smarters Pro vers la Dernière Version", desc: "Profitez des dernières fonctionnalités et correctifs de sécurité sur votre appareil." },
    'iptv-smarters-pro-vs-ibo-player': { title: "IPTV Smarters Pro vs IBO Player : Quel est le Meilleur Lecteur ?", desc: "Comparatif complet de l'interface, de la vitesse et de la compatibilité des deux apps." },
    'iptv-smarters-pro-vs-tivimate': { title: "IPTV Smarters Pro vs TiviMate : Le Comparatif Ultime 2026", desc: "Découvrez quelle application choisir pour votre box Android TV ou votre Firestick." },
    'iptv-smarters-pro-wont-update-fix': { title: "IPTV Smarters Pro ne se Met pas à Jour : Comment Forcer l'Update", desc: "Comment contourner les erreurs de mise à jour sur les magasins d'applications." },
    'iptv-smarters-vs-pro-vs-lite': { title: "IPTV Smarters vs Pro vs Lite : Quelles Différences ?", desc: "Comprenez les variantes de l'application pour choisir celle adaptée à votre matériel." },
    'iptv-vs-cable-tv': { title: "IPTV vs Câble / Satellite : Pourquoi Changer en 2026 ?", desc: "Comparez les coûts, la variété de chaînes et la flexibilité entre la TV traditionnelle et l'IPTV." },
    'is-iptv-smarters-pro-safe-and-legal': { title: "L'application IPTV Smarters Pro est-elle Légale et Sûre ?", desc: "Tout ce que vous devez savoir sur la légalité des lecteurs multimédias et la sécurité de vos données." },
    'what-is-iptv': { title: "Qu'est-ce que l'IPTV ? Tout Comprendre sur la Télévision par Internet", desc: "Définition, fonctionnement, avantages et matériel nécessaire pour regarder la télévision par IP." }
  }
};

export function getGuideI18n(slug, langCode) {
  if (GUIDES_I18N[slug] && GUIDES_I18N[slug][langCode]) {
    return GUIDES_I18N[slug][langCode];
  }
  if (GENERIC_TRANSLATION_TEMPLATES[langCode] && GENERIC_TRANSLATION_TEMPLATES[langCode][slug]) {
    return GENERIC_TRANSLATION_TEMPLATES[langCode][slug];
  }
  // Fallback to English title with localized suffix
  const enMatch = enGuides.find(g => g.slug === slug);
  return {
    title: enMatch ? enMatch.title : slug.replace(/-/g, ' '),
    desc: enMatch ? enMatch.desc : ''
  };
}
