// Background Service Worker / Script for Smarters IPTV Web Player (Manifest V3)
// Dynamically scopes declarativeNetRequest rules so only requests initiated
// by this extension (or thesmartersiptv.com) receive CORS headers & IPTV User-Agent.
// Normal browsing (YouTube, Google, Netflix, etc.) is NEVER intercepted.

async function registerScopedRules() {
  const api = typeof chrome !== 'undefined' && chrome.declarativeNetRequest
    ? chrome
    : (typeof browser !== 'undefined' && browser.declarativeNetRequest ? browser : null);

  if (!api || !api.declarativeNetRequest || !api.declarativeNetRequest.updateDynamicRules) {
    return;
  }

  try {
    const runtimeUrl = (api.runtime && api.runtime.getURL) ? api.runtime.getURL('') : '';
    let extensionHost = '';
    try {
      if (runtimeUrl) {
        extensionHost = new URL(runtimeUrl).hostname;
      }
    } catch {
      extensionHost = '';
    }

    const initiatorDomains = ['thesmartersiptv.com', 'localhost'];
    if (extensionHost && !initiatorDomains.includes(extensionHost)) {
      initiatorDomains.unshift(extensionHost);
    }

    const excludedDomains = [
      'youtube.com',
      'googlevideo.com',
      'ytimg.com',
      'youtu.be',
      'google.com',
      'googleapis.com',
      'gstatic.com',
      'googleusercontent.com',
      'netflix.com',
      'nflxvideo.net',
      'nflxext.com',
      'spotify.com',
      'scdn.co',
      'twitch.tv',
      'ttvnw.net',
      'vimeo.com',
      'vimeocdn.com',
      'dailymotion.com',
      'disneyplus.com',
      'hulu.com',
      'amazon.com',
      'primevideo.com',
      'apple.com',
      'facebook.com',
      'fbcdn.net',
      'instagram.com',
      'twitter.com',
      'x.com',
      'tiktok.com'
    ];

    const dynamicRules = [
      {
        id: 1001,
        priority: 2,
        action: {
          type: 'modifyHeaders',
          responseHeaders: [
            { header: 'Access-Control-Allow-Origin', operation: 'set', value: '*' },
            { header: 'Access-Control-Allow-Methods', operation: 'set', value: 'GET, HEAD, OPTIONS' },
            { header: 'Access-Control-Allow-Headers', operation: 'set', value: '*' }
          ]
        },
        condition: {
          urlFilter: '*',
          initiatorDomains: initiatorDomains,
          excludedInitiatorDomains: excludedDomains,
          excludedRequestDomains: excludedDomains,
          resourceTypes: ['xmlhttprequest', 'media', 'other']
        }
      },
      {
        id: 1002,
        priority: 2,
        action: {
          type: 'modifyHeaders',
          requestHeaders: [
            { header: 'User-Agent', operation: 'set', value: 'IPTVSmartersPro' },
            { header: 'sec-ch-ua', operation: 'remove' },
            { header: 'sec-ch-ua-mobile', operation: 'remove' },
            { header: 'sec-ch-ua-platform', operation: 'remove' }
          ]
        },
        condition: {
          urlFilter: '*',
          initiatorDomains: initiatorDomains,
          excludedInitiatorDomains: excludedDomains,
          excludedRequestDomains: excludedDomains,
          resourceTypes: ['xmlhttprequest', 'media', 'other']
        }
      }
    ];

    await api.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [1001, 1002],
      addRules: dynamicRules
    });
    console.log('[Smarters IPTV] Dynamic DNR rules registered for host:', extensionHost);
  } catch (err) {
    console.warn('[Smarters IPTV] Failed to register dynamic DNR rules:', err);
  }
}

// Lifecycle listeners
const extApi = typeof chrome !== 'undefined' ? chrome : (typeof browser !== 'undefined' ? browser : null);
if (extApi && extApi.runtime) {
  if (extApi.runtime.onInstalled) {
    extApi.runtime.onInstalled.addListener(() => {
      registerScopedRules();
    });
  }
  if (extApi.runtime.onStartup) {
    extApi.runtime.onStartup.addListener(() => {
      registerScopedRules();
    });
  }
}

// Ensure execution on worker spawn
registerScopedRules();
