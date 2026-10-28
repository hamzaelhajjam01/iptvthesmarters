(()=>{
const P='#e10600', PHONE='18042804332';
const icons={
  chat:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
  close:'<svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  up:'<svg viewBox="0 0 24 24"><path d="m18 15-6-6-6 6"/></svg>',
  reset:'<svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>',
  plus:'<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
  send:'<svg viewBox="0 0 24 24"><path d="M12 19V5M6 11l6-6 6 6"/></svg>',
  bot:'<svg viewBox="0 0 24 24"><rect x="5" y="8" width="14" height="10" rx="2"/><path d="M9 8V5h6v3M9 13h.01M15 13h.01M9 18v2M15 18v2M3 12h2M19 12h2"/></svg>',
  wa:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.53c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.71 4.3 3.8 2.53 1.09 2.53.73 2.98.69.46-.04 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.11-.23-.17-.48-.3"/></svg>'
};
const css=document.createElement('style');css.textContent=`
.sf3-icon svg{width:25px;height:25px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.sf3-float{position:fixed;right:24px;z-index:10000;border:0;background:${P};color:#fff;border-radius:50%!important;aspect-ratio:1/1;display:grid;place-items:center;box-shadow:0 10px 30px #0005;cursor:pointer;transition:transform .18s,filter .18s,opacity .18s}
.sf3-float:hover{filter:brightness(.94);transform:scale(1.05)}
.sf3-float:focus-visible,#sf3 button:focus-visible,#sf3 input:focus-visible{outline:3px solid #ffb3c5;outline-offset:2px}
#sf3-top{bottom:96px;width:48px;height:48px;border-radius:50%!important}
#sf3-open{bottom:24px;width:60px;height:60px;border-radius:50%!important}
#sf3-open svg{width:30px;height:30px;stroke-width:2.2}
#sf3{position:fixed;right:24px;bottom:101px;z-index:10001;width:430px;height:min(680px,calc(100vh - 125px));display:flex;flex-direction:column;overflow:hidden;background:#fff;color:#111;border:1px solid #d9d9df;border-radius:25px;box-shadow:0 24px 85px #0008;font:16px/1.4 Arial,sans-serif}
#sf3[hidden]{display:none}
#sf3 *{box-sizing:border-box}
.sf3-head{height:92px;flex:none;padding:16px 19px;display:flex;align-items:center;gap:13px;background:${P};color:#fff}
.sf3-logo,.sf3-avatar{display:grid;place-items:center;flex:none;border-radius:50%}
.sf3-logo{width:55px;height:55px;background:#ffffff25}
.sf3-logo svg{width:27px;height:27px}
.sf3-identity{flex:1;min-width:0}
.sf3-identity strong{display:block;font-size:20px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sf3-status{font-size:14px;font-weight:700}
.sf3-dot{display:inline-block;width:10px;height:10px;border-radius:50%;background:#50cf75;box-shadow:0 0 0 3px #ffffff20;margin-right:7px}
.sf3-head button{width:36px;height:36px;padding:0;display:grid;place-items:center;border:0;background:transparent;color:#fff;cursor:pointer;border-radius:50%}
.sf3-head button:hover{background:#ffffff1f}
.sf3-head button svg{width:25px;height:25px}
.sf3-log{flex:1;min-height:0;overflow-y:auto;overscroll-behavior:contain;padding:24px 20px;background:#fff;scrollbar-width:thin;scrollbar-color:#c7c7cc transparent}
.sf3-intro-icon{width:70px;height:70px;margin:0 auto 10px;display:grid;place-items:center;border-radius:22px;background:#ffe4e1;color:${P};font-size:35px}
.sf3-intro-title{text-align:center;font-size:23px;font-weight:800;margin-bottom:24px}
.sf3-row{display:flex;align-items:flex-end;gap:10px;margin:13px 0}
.sf3-row.user{justify-content:flex-end}
.sf3-avatar{width:39px;height:39px;background:${P};color:#fff}
.sf3-avatar svg{width:22px;height:22px}
.sf3-bubble{max-width:84%;padding:15px 17px;border-radius:19px;font-size:16px;line-height:1.48;overflow-wrap:anywhere}
.sf3-bubble.bot{background:#f1f1f3;border-bottom-left-radius:6px}
.sf3-bubble.user{background:${P};color:#fff;border-bottom-right-radius:6px}
.sf3-bubble ul{margin:9px 0 0;padding-left:25px}
.sf3-bubble a{display:inline-block;margin-top:11px;padding:9px 14px;border-radius:999px;background:${P};color:#fff;text-decoration:none;font-weight:700}
.sf3-bubble a.sf3-wa-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;margin-top:12px;padding:11px 18px;border-radius:999px;background:#25D366!important;color:#fff!important;text-decoration:none;font-weight:700;font-size:15px;box-shadow:0 4px 14px rgba(37,211,102,0.35);transition:transform .15s,filter .15s}
.sf3-bubble a.sf3-wa-btn:hover{transform:scale(1.02);filter:brightness(1.05)}
.sf3-bubble a.sf3-wa-btn svg{width:18px;height:18px;fill:currentColor}
.sf3-quick{display:flex;flex-wrap:wrap;gap:8px;margin:18px 0 5px 49px}
.sf3-quick button{border:1px solid #dcdde2;border-radius:999px;background:#fff;color:${P};padding:9px 14px;font-size:15px;cursor:pointer}
.sf3-quick button:hover{background:#fff1f0}
.sf3-typing{display:flex;gap:5px;padding:5px 2px}
.sf3-typing i{width:7px;height:7px;border-radius:50%;background:#888;animation:sf3dot 1s infinite}
.sf3-typing i:nth-child(2){animation-delay:.15s}
.sf3-typing i:nth-child(3){animation-delay:.3s}
@keyframes sf3dot{50%{transform:translateY(-4px);opacity:.45}}
.sf3-filebar{display:none;flex:none;padding:7px 15px;background:#fff1f0;border-top:1px solid #eee;color:#555;font-size:13px}
.sf3-filebar.show{display:flex;align-items:center;justify-content:space-between}
.sf3-filebar button{border:0;background:transparent;color:${P};cursor:pointer}
.sf3-compose{flex:none;display:flex;align-items:center;gap:10px;padding:14px 16px;border-top:1px solid #e2e2e7;background:#fff}
.sf3-add,.sf3-send{width:49px;height:49px;flex:none;border-radius:50%;display:grid;place-items:center;cursor:pointer}
.sf3-add{border:1px solid #dfe0e5;background:#fff;color:#727782}
.sf3-send{border:0;background:#ff9b97;color:#fff}
.sf3-send:not(:disabled){background:${P}}
.sf3-send:disabled{cursor:not-allowed;opacity:.75}
.sf3-compose input[type=text]{height:50px;min-width:0;flex:1;padding:0 17px;border:1px solid #dfe0e5;border-radius:22px;background:#fff;color:#111;font:16px Arial,sans-serif;outline:none}
.sf3-compose input[type=text]:focus{border-color:${P};box-shadow:0 0 0 3px #e1060018}
@media(max-width:600px){
  #sf3{inset:10px 8px 92px;width:auto;height:auto;border-radius:23px}
  .sf3-head{height:82px;padding:12px 14px;gap:10px}
  .sf3-logo{width:48px;height:48px}
  .sf3-identity strong{font-size:17px}
  .sf3-status{font-size:12px}
  .sf3-log{padding:20px 14px}
  .sf3-bubble{font-size:16px;max-width:86%}
  .sf3-quick{margin-left:0}
  .sf3-compose{padding:11px 10px;gap:8px}
  .sf3-add,.sf3-send{width:45px;height:45px}
  .sf3-compose input[type=text]{height:47px;padding:0 13px}
  #sf3-open{right:18px}
}
`;document.head.appendChild(css);

document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('#sf3,#sf3-open,#sf3-top,#sf-panel,#sf-chat,#sf-top,button[aria-label="Scroll to top"]').forEach(e=>e.remove());
 const top=document.createElement('button');top.id='sf3-top';top.className='sf3-float sf3-icon';top.setAttribute('aria-label','Scroll to top');top.innerHTML=icons.up;document.body.append(top);top.onclick=()=>scrollTo({top:0,behavior:'smooth'});const topState=()=>{const on=scrollY>500;top.style.opacity=on?'1':'0';top.style.pointerEvents=on?'auto':'none'};addEventListener('scroll',topState,{passive:true});topState();
 const panel=document.createElement('section');panel.id='sf3';panel.hidden=true;panel.setAttribute('aria-label','Lucy support chat');panel.innerHTML=`<header class="sf3-head"><span class="sf3-logo sf3-icon">${icons.bot}</span><span class="sf3-identity"><strong>Lucy - IPTV Smarters Pro Support</strong><span class="sf3-status"><i class="sf3-dot"></i>We typically reply right away</span></span><button class="sf3-reset sf3-icon" type="button" aria-label="Restart conversation">${icons.reset}</button><button class="sf3-close sf3-icon" type="button" aria-label="Close support chat">${icons.close}</button></header><main class="sf3-log" aria-live="polite"></main><div class="sf3-filebar"><span></span><button type="button" aria-label="Remove attachment">Remove</button></div><form class="sf3-compose"><button class="sf3-add sf3-icon" type="button" aria-label="Attach a file">${icons.plus}</button><input class="sf3-file" type="file" accept="image/*,.pdf,.txt" hidden><input class="sf3-input" type="text" maxlength="1000" autocomplete="off" aria-label="Type your message" placeholder="Type your message..."><button class="sf3-send sf3-icon" type="submit" aria-label="Send message" disabled>${icons.send}</button></form>`;document.body.append(panel);
 const open=document.createElement('button');open.id='sf3-open';open.className='sf3-float sf3-icon';open.setAttribute('aria-label','Open support chat');open.innerHTML=icons.chat;document.body.append(open);
 const log=panel.querySelector('.sf3-log'),input=panel.querySelector('.sf3-input'),sendBtn=panel.querySelector('.sf3-send'),file=panel.querySelector('.sf3-file'),filebar=panel.querySelector('.sf3-filebar');let responding=false,attachment=null;
 const avatar=()=>`<span class="sf3-avatar sf3-icon">${icons.bot}</span>`;const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const add=(who,html)=>{log.insertAdjacentHTML('beforeend',`<div class="sf3-row ${who}">${who==='bot'?avatar():''}<div class="sf3-bubble ${who}">${html}</div></div>`);log.scrollTop=log.scrollHeight};

 const makeWaUrl=(msg)=>`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

 const topics={
   trial:{
     title:'Free trial',
     msg:'Hello IPTV Smarters Pro Support,\n\nI would like to request a 36-hour Free Trial to test the service.\nPlease send me the trial details.\n\nThank you!',
     answer:'Connecting you to our WhatsApp support team for your <b>36-hour Free Trial</b>...<br><br>One of our support agents will answer and assist you right away.<br><br>If WhatsApp did not open automatically, please tap below:',
     btnLabel:'Continue on WhatsApp'
   },
   setup:{
     title:'Setup help',
     msg:'Hello IPTV Smarters Pro Support,\n\nI need help setting up IPTV Smarters Pro on my device.\nCould you please assist me with the setup instructions?\n\nThank you!',
     answer:'Connecting you to our WhatsApp support team for <b>Setup Help</b>...<br><br>One of our technical support agents will guide you step-by-step.<br><br>If WhatsApp did not open automatically, please tap below:',
     btnLabel:'Continue on WhatsApp'
   },
   account:{
     title:'My account',
     msg:'Hello IPTV Smarters Pro Support,\n\nI have an inquiry regarding my IPTV Smarters Pro account and subscription.\nCould you please assist me?\n\nThank you!',
     answer:'Connecting you to our WhatsApp support team for <b>My Account & Subscription</b>...<br><br>One of our support agents will verify your account status and assist you.<br><br>If WhatsApp did not open automatically, please tap below:',
     btnLabel:'Continue on WhatsApp'
   },
   pricing:{
     title:'Pricing & plans',
     msg:'Hello IPTV Smarters Pro Support,\n\nI have a question about your subscription plans and pricing options.\nCould you please provide more information?\n\nThank you!',
     answer:'Connecting you to our WhatsApp support team for <b>Pricing & Plans</b>...<br><br>You can also check our <a href="/pricing/" style="text-decoration:underline;">Pricing page</a>. To speak directly with our team, tap below:',
     btnLabel:'Continue on WhatsApp'
   }
 };

 const openWhatsApp=(url)=>{
   try{
     const w=window.open(url,'_blank');
     if(!w||w.closed||typeof w.closed==='undefined'){
       location.href=url;
     }
   }catch(err){
     location.href=url;
   }
 };

 const typing=()=>{log.insertAdjacentHTML('beforeend',`<div class="sf3-row sf3-wait">${avatar()}<div class="sf3-bubble bot"><span class="sf3-typing"><i></i><i></i><i></i></span></div></div>`);log.scrollTop=log.scrollHeight};

 const respond=(answer,url,btnLabel)=>{
   responding=true;
   sendBtn.disabled=true;
   typing();
   setTimeout(()=>{
     log.querySelector('.sf3-wait')?.remove();
     const waBtn=url?`<br><a href="${url}" target="_blank" rel="noopener noreferrer" class="sf3-wa-btn">${icons.wa} ${btnLabel||'Continue on WhatsApp'}</a>`:'';
     add('bot',answer+waBtn);
     responding=false;
     syncSend();
   },450);
 };

 const executeSubject=(topicKey,userText)=>{
   if(responding)return;
   const t=topics[topicKey];
   if(!t)return;
   const url=makeWaUrl(t.msg);
   openWhatsApp(url);
   add('user',esc(userText||t.title));
   attachment=null;
   syncFile();
   input.value='';
   syncSend();
   respond(t.answer,url,t.btnLabel);
 };

 const resolveTopic=(text)=>{
   const lower=text.toLowerCase();
   if(/trial|free trial|test|36\s*hour/i.test(lower))return'trial';
   if(/setup|install|device|how to|configure/i.test(lower))return'setup';
   if(/account|subscription|status|login|renew|order/i.test(lower))return'account';
   if(/price|plan|cost/i.test(lower))return'pricing';
   return null;
 };

 const quick=()=>{
   log.querySelectorAll('[data-topic]').forEach(b=>{
     b.onclick=(e)=>{
       e.preventDefault();
       e.stopPropagation();
       const key=b.dataset.topic;
       executeSubject(key,b.textContent.trim());
     };
   });
 };

 const reset=()=>{
   responding=false;
   attachment=null;
   input.value='';
   syncFile();
   log.innerHTML=`<div class="sf3-intro-icon">✣</div><div class="sf3-intro-title">Chat with Lucy</div>`;
   add('bot',`Hi, I'm <b>Lucy</b> from IPTV Smarters Pro 👋<br><br>I can help you with:<ul><li>📺 <b>Subscriptions</b> &amp; your 36-hour free trial</li><li>📺 <b>Setup</b> on any device</li><li>💳 <b>Payments</b> &amp; billing</li><li>🛠️ <b>Troubleshooting</b></li></ul>What can I help you with today?`);
   log.insertAdjacentHTML('beforeend','<div class="sf3-quick"><button data-topic="trial" type="button">Free trial</button><button data-topic="pricing" type="button">Pricing &amp; plans</button><button data-topic="setup" type="button">Setup help</button><button data-topic="account" type="button">My account</button></div>');
   quick();
   syncSend();
 };

 const syncSend=()=>sendBtn.disabled=responding||(!input.value.trim()&&!attachment);
 const syncFile=()=>{filebar.classList.toggle('show',!!attachment);filebar.querySelector('span').textContent=attachment?`Attached: ${attachment.name}`:''};
 const setOpen=value=>{panel.hidden=!value;open.setAttribute('aria-expanded',String(value));open.setAttribute('aria-label',value?'Close support chat':'Open support chat');open.innerHTML=value?icons.close:icons.chat;if(value)setTimeout(()=>input.focus(),80)};
 open.onclick=()=>setOpen(panel.hidden);
 panel.querySelector('.sf3-close').onclick=()=>setOpen(false);
 panel.querySelector('.sf3-reset').onclick=reset;
 input.oninput=syncSend;
 panel.querySelector('.sf3-add').onclick=()=>file.click();
 file.onchange=()=>{
   const f=file.files[0];
   if(!f)return;
   if(f.size>5*1024*1024){
     add('bot','That file is larger than 5 MB. Please choose a smaller image, PDF, or text file.');
     file.value='';
     return;
   }
   attachment=f;
   syncFile();
   syncSend();
 };
 filebar.querySelector('button').onclick=()=>{attachment=null;file.value='';syncFile();syncSend()};
 panel.querySelector('form').onsubmit=e=>{
   e.preventDefault();
   const text=input.value.trim()||(attachment?'Please review this attachment.':'');
   if(!text||responding)return;
   const topicKey=resolveTopic(text);
   if(topicKey){
     executeSubject(topicKey,text);
   }else{
     const customMsg=`Hello IPTV Smarters Pro Support,\n\nI need assistance with:\n"${text}"\n\nCould you please assist me?\nThank you!`;
     const url=makeWaUrl(customMsg);
     openWhatsApp(url);
     add('user',esc(text)+(attachment?`<br><small>📎 ${esc(attachment.name)}</small>`:''));
     attachment=null;
     syncFile();
     input.value='';
     syncSend();
     respond('Connecting you to our WhatsApp support team...<br><br>One of our agents will answer and assist you directly. If WhatsApp did not open automatically, please tap below:',url,'Continue on WhatsApp');
   }
 };
 reset();
});
})();
