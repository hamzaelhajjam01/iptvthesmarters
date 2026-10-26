(()=>{
const P='#e10600',PHONE='18042804332';
const prices={
  1:{'1 Month':'14.95','3 Months':'29.95','6 Months':'44.95','12 Months':'59.95','1 Year':'59.95','24 Months':'99.95','2 Years':'99.95'},
  2:{'1 Month':'19.95','3 Months':'39.95','6 Months':'69.95','12 Months':'119.95','1 Year':'119.95','24 Months':'199.95','2 Years':'199.95'},
  3:{'1 Month':'24.95','3 Months':'49.95','6 Months':'89.95','12 Months':'149.95','1 Year':'149.95','24 Months':'299.95','2 Years':'299.95'}
};
const css=document.createElement('style');css.textContent=`
#om{position:fixed;inset:0;z-index:11500;display:grid;place-items:center;padding:18px;background:#05070bcc;backdrop-filter:blur(6px)}#om[hidden]{display:none}#om-card{width:min(630px,100%);max-height:calc(100vh - 30px);overflow:auto;border-radius:18px;background:#fff;color:#222;box-shadow:0 28px 100px #000b;font:16px/1.4 Arial,sans-serif}#om-card *{box-sizing:border-box}.om-body{padding:30px}.om-head{display:flex;justify-content:space-between;align-items:center}.om-head h2{margin:0;font-size:30px}.om-x{width:44px;height:44px;border:0;border-radius:50%;background:#f1f1f1;color:#666;display:grid;place-items:center;cursor:pointer}.om-x svg,.om-field svg{width:23px;height:23px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.om-progress{display:flex;align-items:center;justify-content:center;gap:9px;margin:20px 0}.om-progress i{width:10px;height:10px;border-radius:50%;background:${P}}.om-progress span{width:28px;height:1px;background:#ddd}.om-progress i:nth-of-type(2){background:#ddd}.om-progress small{color:#858585}.om-summary{display:grid;grid-template-columns:1fr 1fr 1fr;margin-bottom:20px;padding:21px 12px;border-radius:12px;background:linear-gradient(120deg,#202428,#2d3135);color:#fff;text-align:center}.om-summary div{padding:0 8px;border-right:1px solid #ffffff28}.om-summary div:last-child{border:0}.om-summary strong{display:block;font-size:21px}.om-summary small{color:#c4c4c4}.om-summary .om-total{color:#ff7197}.om-field{position:relative;margin-top:17px}.om-field svg{position:absolute;left:17px;top:50%;transform:translateY(-50%);color:#8f9295}.om-field input{width:100%;height:57px;padding:0 17px 0 53px;border:1px solid #dedfe2;border-radius:9px;background:#fff;color:#222;font:16px Arial,sans-serif;outline:none}.om-field input:focus{border-color:${P};box-shadow:0 0 0 3px #e1060015}.om-error{min-height:19px;margin:4px 3px;color:#c92323;font-size:13px}.om-types{display:grid;grid-template-columns:1fr 1fr;gap:13px;margin:2px 0 17px}.om-type{height:57px;border:2px solid #e0e1e3;border-radius:11px;background:#fff;color:#666;font-size:16px;cursor:pointer}.om-type.active{border-color:${P};background:#fff1f0;color:${P};font-weight:700}.om-help{margin:5px 2px;color:#888;font-size:13px}.om-note{margin:12px 2px 20px;padding:12px 14px;border-radius:9px;background:#fff1f0;color:#555;font-size:14px}.om-go{width:100%;height:55px;border:0;border-radius:999px;background:${P};color:#fff;font-size:16px;font-weight:800;cursor:pointer}.om-go:disabled{opacity:.6;cursor:not-allowed}.om-secure{margin:10px 0 0;text-align:center;color:#888;font-size:12px}
@media(max-width:600px){#om{padding:9px}#om-card{border-radius:15px}.om-body{padding:20px 16px}.om-head h2{font-size:25px}.om-summary{padding:16px 5px}.om-summary strong{font-size:17px}.om-summary small{font-size:11px}.om-types{gap:8px}.om-field input,.om-type{height:54px}}
`;document.head.append(css);
const I={x:'<svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>',mail:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',device:'<svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M9 17h6"/></svg>'};
document.addEventListener('DOMContentLoaded',()=>{
 const om=document.createElement('div');om.id='om';om.hidden=true;om.innerHTML=`<section id="om-card" role="dialog" aria-modal="true" aria-labelledby="om-title"><div class="om-body"><div class="om-head"><h2 id="om-title">Complete Your Order</h2><button class="ome om-x" type="button" aria-label="Close order form">${I.x}</button></div><div class="om-progress"><i></i><span></span><i></i><small>Step 1 of 2</small></div><div class="om-summary"><div><strong class="om-duration">1 Month</strong><small>Duration</small></div><div><strong class="om-devices">1 Device</strong><small>Devices</small></div><div><strong class="om-total">$14.95</strong><small>Total Price</small></div></div><form novalidate><div class="om-field">${I.mail}<input class="om-email" type="email" autocomplete="email" placeholder="Email Address (e.g., yourname@gmail.com)*" aria-label="Customer email address" required></div><div class="om-error om-email-error"></div><div class="om-types" role="radiogroup" aria-label="Subscription type"><button class="om-type active" type="button" role="radio" aria-checked="true" data-type="Standard">Standard</button><button class="om-type" type="button" role="radio" aria-checked="false" data-type="MAG Box">MAG Box</button></div><div class="om-mag" hidden><div class="om-field">${I.device}<input class="om-mac" type="text" placeholder="MAC Address (e.g., 00:1A:79:XX:XX:XX)*" aria-label="Order MAC address"></div><div class="om-help">Find your MAC address: Settings → System Settings → Device Info</div><div class="om-error om-mac-error"></div></div><div class="om-note">Your subscription login details will be sent directly to this email address once payment is confirmed.</div><button class="om-go" type="submit">CONTINUE TO WHATSAPP ›</button><p class="om-secure">WhatsApp opens with your selected plan and email ready to send.</p></form></div></section>`;document.body.append(om);
 const form=om.querySelector('form'),email=om.querySelector('.om-email'),mac=om.querySelector('.om-mac'),mag=om.querySelector('.om-mag'),go=om.querySelector('.om-go');let order={duration:'1 Month',devices:1,total:'14.95'},type='Standard',selectedDevices=1;
 const txt=e=>(e?.innerText||'').replace(/\s+/g,' ').trim();

 const detect=button=>{
   let node=button,card=null;
   for(let n=0;n<9&&node;n++,node=node.parentElement){
     if(node.classList&&(node.classList.contains('plan-card')||node.classList.contains('kw-plan')||node.classList.contains('diamond-panel'))){card=node;break}
   }
   const s=card?txt(card):txt(button.parentElement);
   const href=button.getAttribute('href')||'';
   const raw=(href.match(/\/(1|3|6|12|24)m\//)||href.match(/Plan%3A%20(\d+)%20Month/i)||[])[1];
   let duration=button.dataset.duration||({'1':'1 Month','3':'3 Months','6':'6 Months','12':'12 Months','24':'24 Months'}[raw]);
   if(!duration){
     if(/24\s*Months?|2\s*Years?/i.test(s))duration='24 Months';
     else if(/12\s*Months?|1\s*Year/i.test(s))duration='12 Months';
     else if(/6\s*Months?/i.test(s))duration='6 Months';
     else if(/3\s*Months?/i.test(s))duration='3 Months';
     else duration='1 Month';
   }

   const activeTab=document.querySelector('.device-tab.is-active, [data-devices][aria-selected="true"], [data-devices][aria-pressed="true"]');
   const tabDevices=activeTab?Number(activeTab.dataset.devices||(activeTab.textContent.match(/([1-3])/)||[])[1]):null;
   const devices=tabDevices||Number(button.dataset.devices||window.__selectedDevices||sessionStorage.getItem('iptvDevices')||selectedDevices||1);

   let total='';
   if(card){
     const priceEl=card.querySelector('.plan-price-amount, .diamond-price, strong');
     if(priceEl){
       const m=priceEl.textContent.match(/\$\s*(\d+(?:\.\d{2})?)/);
       if(m)total=m[1];
     }
   }
   if(!total){
     const devPrices=prices[devices]||prices[1];
     total=devPrices[duration]||devPrices['1 Month']||'14.95';
   }
   return{duration,devices,total};
 };

 const emailOK=()=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()),macOK=()=>/^([0-9A-F]{2}:){5}[0-9A-F]{2}$/i.test(mac.value.trim());
 const validate=()=>{const e=emailOK(),m=type!=='MAG Box'||macOK();om.querySelector('.om-email-error').textContent=email.value&&!e?'Enter a valid email address (e.g., yourname@gmail.com).':'';om.querySelector('.om-mac-error').textContent=type==='MAG Box'&&mac.value&&!m?'Use the format 00:1A:79:XX:XX:XX.':'';return e&&m};
 const open=button=>{order=detect(button);type='Standard';form.reset();mag.hidden=true;om.querySelectorAll('.om-type').forEach((b,i)=>{b.classList.toggle('active',i===0);b.setAttribute('aria-checked',String(i===0))});om.querySelector('.om-duration').textContent=order.duration;om.querySelector('.om-devices').textContent=`${order.devices} Device${order.devices===1?'':'s'}`;om.querySelector('.om-total').textContent=`$${order.total}`;om.hidden=false;document.body.dataset.omOverflow=document.body.style.overflow;document.body.style.overflow='hidden';setTimeout(()=>email.focus(),60)};
 const close=()=>{om.hidden=true;document.body.style.overflow=document.body.dataset.omOverflow||''};om.querySelector('.ome').onclick=close;om.onclick=e=>{if(e.target===om)close()};addEventListener('keydown',e=>{if(e.key==='Escape'&&!om.hidden)close()});
 om.querySelectorAll('.om-type').forEach(b=>b.onclick=()=>{type=b.dataset.type;om.querySelectorAll('.om-type').forEach(x=>{const on=x===b;x.classList.toggle('active',on);x.setAttribute('aria-checked',String(on))});mag.hidden=type!=='MAG Box';validate();(type==='MAG Box'?mac:email).focus()});email.oninput=validate;mac.oninput=()=>{mac.value=mac.value.toUpperCase().replace(/[^0-9A-F:]/g,'').slice(0,17);validate()};

 form.onsubmit=e=>{
   e.preventDefault();
   if(!validate()){(emailOK()?mac:email).focus();return}
   const customerEmail=email.value.trim();
   const lines=[
     'Hello IPTV Smarters Pro Support,',
     '',
     'I would like to order the following subscription plan:',
     `• Plan: ${order.duration}`,
     `• Devices: ${order.devices} Device${order.devices===1?'':'s'}`,
     `• Total Price: $${order.total}`,
     `• Subscription Type: ${type}`,
     `• Customer Email: ${customerEmail}`
   ];
   if(type==='MAG Box'){
     lines.push(`• MAG MAC Address: ${mac.value.trim()}`);
   }
   lines.push(
     '',
     'Please send me the payment link so I can complete the payment.',
     `After payment is confirmed, please send my login details to: ${customerEmail}`,
     '',
     'Thank you!'
   );
   go.disabled=true;
   go.textContent='OPENING WHATSAPP...';
   location.href=`https://wa.me/${PHONE}?text=${encodeURIComponent(lines.join('\n'))}`;
 };

 document.addEventListener('pointerdown',e=>{const b=e.target.closest('button');if(!b)return;const isDevice=b.classList.contains('device-tab')||b.closest('.device-toggle')||b.hasAttribute('data-devices');if(isDevice){const dev=Number(b.dataset.devices||(txt(b).match(/([1-3])/)||[])[1]||1);selectedDevices=dev;window.__selectedDevices=dev;try{sessionStorage.setItem('iptvDevices',String(dev))}catch(err){}}},true);
 document.addEventListener('click',e=>{const b=e.target.closest('button,a');if(!b)return;const isDevice=b.classList.contains('device-tab')||b.closest('.device-toggle')||b.hasAttribute('data-devices');if(isDevice){const dev=Number(b.dataset.devices||(txt(b).match(/([1-3])/)||[])[1]||1);selectedDevices=dev;window.__selectedDevices=dev;try{sessionStorage.setItem('iptvDevices',String(dev))}catch(err){}if(typeof window.__updatePricing==='function')window.__updatePricing(dev);return}const label=txt(b);if(/START STREAMING|GET BEST VALUE|Buy Now|Continue to WhatsApp|Order via WhatsApp|Order on WhatsApp/i.test(label)){e.preventDefault();e.stopImmediatePropagation();open(b)}},true);
});
})();
