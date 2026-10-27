import fs from 'node:fs';

export function translateKoreanLandingPage(filePath) {
  if (!fs.existsSync(filePath)) return;
  let html = fs.readFileSync(filePath, 'utf8');

  // 1. Section 3: Why Choose Section
  html = html.replace('Premium IPTV Subscription', '프리미엄 IPTV 구독');
  html = html.replace(
    'Why use our service with the <br class="hidden md:block"><span class="text-gradient">Smarters Pro Player?</span>',
    'Smarters Pro 플레이어와 함께 <br class="hidden md:block"><span class="text-gradient">저희 서비스를 선택해야 하는 이유</span>'
  );
  html = html.replace(
    'Connecting a high-quality API login to your player app makes the difference between endless freezing and a\n              flawless 4K experience.',
    '고품질 API 접속 기술로 잦은 버퍼링 없이 차원이 다른 리얼 4K UHD 스트리밍을 경험하세요.'
  );
  html = html.replace(
    'Connecting a high-quality API login to your player app makes the difference between endless freezing and a flawless 4K experience.',
    '고품질 API 접속 기술로 잦은 버퍼링 없이 차원이 다른 리얼 4K UHD 스트리밍을 경험하세요.'
  );

  // Card 1: Anti-buffering
  html = html.replace(
    '<h3 class="text-3xl font-bold text-white mb-4">Anti-Buffer Technology</h3>',
    '<h3 class="text-3xl font-bold text-white mb-4">버퍼링 방지 기술 (Anti-Freeze)</h3>'
  );
  html = html.replace(
    /One common issue with the Smarters Pro APK is buffering on overloaded servers[\s\S]*?during peak hours\./,
    '대용량 로드밸런싱 서버 인프라를 통해 주말 빅매치나 피크 시간대에도 버퍼링과 끊김 현상을 완벽하게 차단합니다.'
  );

  // Card 2: True 4K & FHD
  html = html.replace(
    '<h3 class="text-2xl font-bold text-white mb-4">True 4K &amp; FHD</h3>',
    '<h3 class="text-2xl font-bold text-white mb-4">리얼 4K UHD &amp; 60FPS</h3>'
  );
  html = html.replace(
    /Watch live sports and on-demand movies in crystal clear 4K UHD[\s\S]*?remains sharp on large screens\./,
    '과도한 압축 없는 원본 4K UHD 화질로 전송되어 대형 스마트 TV 화면에서도 손흥민 경기와 영화를 선명하게 감상할 수 있습니다.'
  );

  // Card 3: Custom Playlists
  html = html.replace(
    '<h3 class="text-2xl font-bold text-white mb-4">Custom Playlists</h3>',
    '<h3 class="text-2xl font-bold text-white mb-4">맞춤형 플레이리스트 &amp; 빠른 로딩</h3>'
  );
  html = html.replace(
    /Organize and access your favorite content instantly[\s\S]*?without delays\./,
    '선호하는 채널과 VOD를 간편하게 정리하고 초고속 채널 전환(Zapping)으로 기다림 없이 즉시 시청할 수 있습니다.'
  );

  // Card 4: VPN Friendly
  html = html.replace(
    '<h3 class="text-3xl font-bold text-white mb-4">100% VPN Friendly</h3>',
    '<h3 class="text-3xl font-bold text-white mb-4">100% VPN 완벽 호환</h3>'
  );
  html = html.replace(
    /We don't block or restrict VPN usage[\s\S]*?smooth connection\./,
    'NordVPN, ExpressVPN 등 주요 VPN 서비스와 충돌 없이 완벽 호환되어 통신사 속도 제한을 우회하고 프라이버시를 안전하게 보호합니다.'
  );

  // 2. Section 4: Setup Guide
  html = html.replace('Xtream Codes Login', '간편한 3단계 설정');
  html = html.replace(
    'How to configure your <span class="text-gradient-blue-cyan">Smarters Pro setup.</span>',
    'Smarters Pro <span class="text-gradient-blue-cyan">간편 설정 가이드.</span>'
  );
  html = html.replace(
    'Forget typing long, complicated playlist URLs. Our setup process uses the much faster API login method.',
    '길고 복잡한 M3U URL을 직접 입력할 필요 없이, 가장 빠르고 안전한 Xtream Codes API 로그인 방식으로 즉시 연결하세요.'
  );
  html = html.replace(
    '<h3 class="text-2xl font-bold text-white mb-4">Choose a Plan</h3>',
    '<h3 class="text-2xl font-bold text-white mb-4">1. 요금제 선택</h3>'
  );
  html = html.replace(
    /Select a premium subscription plan that fits your viewing needs[\s\S]*?no long-term contracts\./,
    '시청 환경과 원하는 기간에 맞는 최적의 플랜을 선택하고 안전하게 결제합니다.'
  );
  html = html.replace(
    '<h3 class="text-2xl font-bold text-white mb-4">Get Credentials</h3>',
    '<h3 class="text-2xl font-bold text-white mb-4">2. 접속 정보 수령</h3>'
  );
  html = html.replace(
    /Instantly receive an email containing your unique Xtream Codes API login details[\s\S]*?secure portal URL\)\./,
    '결제 완료 후 수 분 내로 사용자 이름, 비밀번호, 서버 URL이 이메일로 안전하게 발송됩니다.'
  );
  html = html.replace(
    '<h3 class="text-2xl font-bold text-white mb-4">Start Streaming</h3>',
    '<h3 class="text-2xl font-bold text-white mb-4">3. 스트리밍 시작</h3>'
  );
  html = html.replace(
    /Open the IPTV Smarters Pro app on your preferred device[\s\S]*?exploring the channel list\./,
    'Smarters Pro 앱을 실행하고 로그인 정보를 입력하면 20,000개 이상의 채널과 영화를 즉시 감상하실 수 있습니다.'
  );

  // 3. Section 5: Devices
  html = html.replace('Multi-Screen Streaming', '멀티 디바이스 스트리밍');
  html = html.replace(
    'Stream flawlessly on <br class="hidden md:block"><span class="text-gradient">every device you own.</span>',
    '보유하신 모든 기기에서 <br class="hidden md:block"><span class="text-gradient">완벽한 스트리밍.</span>'
  );
  html = html.replace(
    'Whether you are using a Firestick IPTV app, an Android box, or a Samsung Smart TV, our service connects\n              instantly.',
    '스마트 TV, 파이어스틱, 안드로이드 TV 박스, 스마트폰까지 어떤 기기에서든 즉각 연결됩니다.'
  );
  html = html.replace(
    'Whether you are using a Firestick IPTV app, an Android box, or a Samsung Smart TV, our service connects instantly.',
    '스마트 TV, 파이어스틱, 안드로이드 TV 박스, 스마트폰까지 어떤 기기에서든 즉각 연결됩니다.'
  );
  html = html.replace('Smart TVs\n                </h3>', '스마트 TV\n                </h3>');
  html = html.replace('Streaming Boxes\n                </h3>', '스트리밍 기기\n                </h3>');
  html = html.replace('Mobile &amp; Tablet\n                </h3>', '모바일 &amp; 태블릿\n                </h3>');
  html = html.replace('Computers\n                </h3>', 'PC &amp; 노트북\n                </h3>');

  html = html.replace('<p class="text-zinc-400 text-sm leading-relaxed flex-grow">Samsung, LG, Sony, Android TV</p>', '<p class="text-zinc-400 text-sm leading-relaxed flex-grow">삼성 Tizen, LG webOS, 소니 및 안드로이드 TV</p>');
  html = html.replace('<p class="text-zinc-400 text-sm leading-relaxed flex-grow">Firestick, Apple TV, MAG</p>', '<p class="text-zinc-400 text-sm leading-relaxed flex-grow">Amazon Firestick, Apple TV, 크롬캐스트</p>');
  html = html.replace('<p class="text-zinc-400 text-sm leading-relaxed flex-grow">iOS, iPadOS, Android</p>', '<p class="text-zinc-400 text-sm leading-relaxed flex-grow">iOS 아이폰/아이패드 및 안드로이드 기기</p>');
  html = html.replace('<p class="text-zinc-400 text-sm leading-relaxed flex-grow">Windows, macOS, Web Browser</p>', '<p class="text-zinc-400 text-sm leading-relaxed flex-grow">Windows, macOS 및 웹 플레이어</p>');

  // 4. Section 6: Pricing
  html = html.replace('Pricing Plans', '구독 요금제');
  html = html.replace(
    'Simple, transparent <span class="text-gradient">pricing.</span>',
    '간편하고 투명한 <span class="text-gradient">요금제.</span>'
  );
  html = html.replace(
    'Get unlimited access to all channels, movies, and VODs. Secure payments.',
    '모든 실시간 4K 채널과 영화, VOD를 무제한으로 시청하세요. 안전한 결제와 즉시 발급.'
  );
  html = html.replace('aria-label="Select number of devices"', 'aria-label="시청 기기 수 선택"');
  html = html.replace('1 Device</button>', '기기 1대</button>');
  html = html.replace('2 Devices</button>', '기기 2대</button>');
  html = html.replace('3 Devices</button>', '기기 3대</button>');

  html = html.replace(/<span class="plan-kicker">Subscription<\/span>/g, '<span class="plan-kicker">구독 플랜</span>');
  html = html.replace(/<span class="plan-kicker">Suscripción<\/span>/g, '<span class="plan-kicker">구독 플랜</span>');

  html = html.replace('<h3 class="plan-name">1 Month</h3>', '<h3 class="plan-name">1개월</h3>');
  html = html.replace('<h3 class="plan-name">3 Months</h3>', '<h3 class="plan-name">3개월</h3>');
  html = html.replace('<h3 class="plan-name">6 Months</h3>', '<h3 class="plan-name">6개월</h3>');
  html = html.replace('<h3 class="plan-name">12 Months</h3>', '<h3 class="plan-name">12개월</h3>');
  html = html.replace('<h3 class="plan-name">24 Months</h3>', '<h3 class="plan-name">24개월</h3>');

  html = html.replace(/<span class="plan-discount-chip">Save 14%<\/span>/g, '<span class="plan-discount-chip">14% 할인</span>');
  html = html.replace(/<span class="plan-discount-chip">Save 33%<\/span>/g, '<span class="plan-discount-chip">33% 할인</span>');
  html = html.replace(/<span class="plan-discount-chip">Save 50%<\/span>/g, '<span class="plan-discount-chip">50% 할인</span>');
  html = html.replace(/<span class="plan-discount-chip">Save 67%<\/span>/g, '<span class="plan-discount-chip">67% 할인</span>');

  html = html.replace('Most Popular', '가장 인기 있는 플랜');
  html = html.replace('Diamond Plan · Best Value', '다이아몬드 플랜 · 최고의 가치');
  html = html.replace('per month', '월 환산 금액');

  html = html.replace(/20,000\+ Live Channels &amp; Sports|20,000\+ Live Channels & Sports/g, '20,000개 이상의 실시간 4K 채널 & 스포츠');
  html = html.replace(/60,000\+ Movies &amp; Series in 4K|60,000\+ Movies & Series in 4K/g, '60,000편 이상의 초고화질 4K/FHD 영화 및 시리즈');
  html = html.replace(/Anti-Freeze &amp; 60FPS Streaming|Anti-Freeze & 60FPS Streaming/g, '버퍼링 방지(Anti-Freeze) 기술 및 60FPS 고화질');
  html = html.replace(/24\/7 Expert Technical Support/g, '연중무휴 24시간 실시간 전문 기술 지원');
  html = html.replace(/Multi-Screen &amp; EPG Guide Support|Multi-Screen & EPG Guide Support/g, '멀티스크린 4분할 화면 및 실시간 편성표(EPG)');
  html = html.replace(/Compatible with All Devices &amp; VPN|Compatible with All Devices & VPN/g, '스마트 TV, 파이어스틱, 모바일 및 모든 VPN 호환');

  html = html.replace(/>Order on WhatsApp</g, '>WhatsApp으로 주문하기<');
  html = html.replace(/>Get Started</g, '>지금 시작하기<');

  // 5. Section 7: Guarantees
  html = html.replace('<h3 class="text-xl font-bold text-white mb-3">Secure Payments</h3>', '<h3 class="text-xl font-bold text-white mb-3">안전한 결제 시스템</h3>');
  html = html.replace(
    /Your payments are processed securely with enterprise-grade encryption[\s\S]*?and Crypto\./,
    '금융권 수준의 256비트 SSL 암호화 결제를 지원합니다. 신용카드 및 주요 암호화폐 결제가 가능합니다.'
  );
  html = html.replace('<h3 class="text-xl font-bold text-white mb-3">Expert Customer Support</h3>', '<h3 class="text-xl font-bold text-white mb-3">24/7 전문 기술 지원</h3>');
  html = html.replace(
    /Our technical support team is available around the clock via live chat and email[\s\S]*?with setup or[\s\S]*?issues\./,
    '기기 설정이나 서비스 이용 중 궁금한 사항은 WhatsApp과 Telegram을 통해 연중무휴 실시간으로 안내해 드립니다.'
  );
  html = html.replace('<h3 class="text-xl font-bold text-white mb-3">즉각 활성화</h3>', '<h3 class="text-xl font-bold text-white mb-3">즉각적인 계정 발급</h3>');
  html = html.replace(
    /Your Xtream Codes login details are emailed within minutes of checkout[\s\S]*?streaming right away\./,
    '결제 완료 후 수 분 이내에 Xtream Codes 접속 정보가 이메일로 안전하게 자동 전송됩니다.'
  );

  // 6. Section 8: FAQ
  html = html.replace('Got Questions?', '자주 묻는 질문');
  html = html.replace(
    'Frequently Asked <span class="text-gradient-blue-cyan">Questions.</span>',
    '자주 묻는 <span class="text-gradient-blue-cyan">질문 (FAQ).</span>'
  );
  html = html.replace(
    'Everything you need to know about the product and billing.',
    'IPTV 서비스 이용 및 결제에 관해 자주 문의하시는 내용입니다.'
  );

  const koreanFaqs = [
    {
      enQ: /Is the IPTV Smarters Pro app free\?/i,
      koQ: 'IPTV Smarters Pro 앱은 무료인가요?',
      enA: /The app itself is completely free to download[\s\S]*?an empty video player\./i,
      koA: '네, 애플리케이션 자체는 대부분의 플랫폼에서 무료로 다운로드하여 설치할 수 있습니다. 다만 앱 자체에는 영상 콘텐츠가 포함되어 있지 않습니다. 실시간 방송과 영화를 시청하시려면 저희와 같은 안정적인 IPTV 서비스 구독이 필요합니다.'
    },
    {
      enQ: /How do I log in using Xtream Codes\?/i,
      koQ: 'Xtream Codes로 어떻게 로그인하나요?',
      enA: /When you launch Smarters Pro, select the "Login with Xtream Codes API"[\s\S]*?fastest and most reliable method\./i,
      koA: 'Smarters Pro 앱 실행 후 \'Login with Xtream Codes API\'를 선택하세요. 프로필 이름(예: \'내 스마트TV\'), 주문 후 받으신 사용자 이름, 비밀번호, 서버 URL을 입력하시면 몇 초 만에 모든 채널과 VOD 목록이 로드됩니다.'
    },
    {
      enQ: /Can I install this on an Amazon Firestick\?/i,
      koQ: '아마존 파이어스틱(Firestick)에 설치할 수 있나요?',
      enA: /Yes, although it may not be in the official Amazon App Store[\s\S]*?best IPTV apps for Firestick\./i,
      koA: '네, 가능합니다. Downloader 앱을 통해 Smarters Pro APK를 간편하게 설치하실 수 있습니다. 설치 과정은 2~3분 정도 소요되며, 파이어스틱에서 가장 뛰어난 성능을 발휘합니다.'
    },
    {
      enQ: /Why isn't my EPG \(TV Guide\) loading\?/i,
      koQ: 'EPG 편성표가 로드되지 않을 때는 어떻게 하나요?',
      enA: /EPG issues usually happen when a provider's server is overloaded[\s\S]*?automatically populates and stays in sync\./i,
      koA: '긴 M3U URL을 수동 입력하거나 서버 부하가 원인일 수 있습니다. 저희가 제공하는 Xtream Codes API 방식을 사용하시면 전자 프로그램 편성표(EPG)가 자동으로 동기화되어 실시간 방송 일정을 편리하게 확인하실 수 있습니다.'
    },
    {
      enQ: /Does the app support multi-screen streaming\?/i,
      koQ: '멀티스크린(다분할 화면) 시청을 지원하나요?',
      enA: /Yes, Smarters Pro includes a built-in Multi-Screen feature[\s\S]*?devices plan\) to stream without interruptions\./i,
      koA: '네, 앱 내 멀티스크린 기능을 통해 최대 4개의 실시간 스포츠나 방송 채널을 한 화면에서 동시에 시청할 수 있습니다. 원활한 동시 재생을 위해 2대 또는 3대 기기 플랜을 선택하시는 것을 권장합니다.'
    },
    {
      enQ: /Do I need a VPN to use this service\?/i,
      koQ: '시청할 때 VPN이 필요한가요?',
      enA: /A VPN is not required to use our service[\s\S]*?connecting a VPN quickly resolves it\./i,
      koA: '저희 서비스는 자체 암호화 및 최적화된 글로벌 CDN 서버를 통해 전송되므로 VPN 없이도 완벽하게 작동합니다. 만약 인터넷 서비스 제공업체(ISP)의 속도 제한이 있을 경우 NordVPN, ExpressVPN 등 주요 VPN과 100% 호환되어 쾌적하게 이용하실 수 있습니다.'
    }
  ];

  koreanFaqs.forEach(faq => {
    html = html.replace(faq.enQ, faq.koQ);
    html = html.replace(faq.enA, faq.koA);
  });

  // 7. Footer
  html = html.replace(
    /<h2 class="font-bold text-white uppercase tracking-wider text-\[11px\] mb-4">Product<\/h2>/,
    '<h2 class="font-bold text-white uppercase tracking-wider text-[11px] mb-4">제품</h2>'
  );
  html = html.replace(
    /<h2 class="font-bold text-white uppercase tracking-wider text-\[11px\] mb-4">Company<\/h2>/,
    '<h2 class="font-bold text-white uppercase tracking-wider text-[11px] mb-4">회사</h2>'
  );
  html = html.replace(
    /<h2 class="font-bold text-white uppercase tracking-wider text-\[11px\] mb-4">Contact<\/h2>/,
    '<h2 class="font-bold text-white uppercase tracking-wider text-[11px] mb-4">고객지원</h2>'
  );

  html = html.replace(
    /<p class="text-zinc-400 leading-relaxed text-xs">[\s\S]*?<\/p>/,
    '<p class="text-zinc-400 leading-relaxed text-xs"><strong class="text-white">IPTV Smarters Pro 4K</strong> — 60,000편 이상의 최신 영화와 VOD 시리즈를 초고화질 4K UHD로 끊김 없이 즉시 감상하세요.</p>'
  );

  html = html.replace('© <!-- -->2026<!-- --> IPTV Smarters Pro. All rights reserved.', '© 2026 IPTV Smarters Pro. 모든 권리 보유.');
  html = html.replace('aria-label="Back to top"', 'aria-label="맨 위로 이동"');
  html = html.replace('Back to top', '맨 위로');
  html = html.replace('Secure Payment', '안전한 결제');
  html = html.replace('Pago seguro', '안전한 결제');

  fs.writeFileSync(filePath, html, 'utf8');
}
