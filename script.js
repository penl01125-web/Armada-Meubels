const PRODUCTS = [{"id":1,"name":"Bureau 120x80 cm, wit blad, zwart metalen frame","category":"Bureaus","priceIncl":229.9,"priceEx":190.0,"image":"images/products-clean/product-01.jpg","description":"Een praktische basis voor een nette en goed ingerichte werkplek."},{"id":2,"name":"Bureau 160x80 cm, eiken blad, zwart metalen frame","category":"Bureaus","priceIncl":302.5,"priceEx":250.0,"image":"images/products-clean/product-02.jpg","description":"Een praktische basis voor een nette en goed ingerichte werkplek."},{"id":3,"name":"Hoekbureau 180x120 cm, licht eiken, links/rechts draaibaar","category":"Bureaus","priceIncl":387.2,"priceEx":320.0,"image":"images/products-clean/product-03.jpg","description":"Een praktische basis voor een nette en goed ingerichte werkplek."},{"id":4,"name":"Elektrisch zit-sta bureau 160x80 cm, 2-motorig, geheugenfunctie","category":"Bureaus","priceIncl":605.0,"priceEx":500.0,"image":"images/products-clean/product-04.jpg","description":"Een praktische basis voor een nette en goed ingerichte werkplek."},{"id":5,"name":"Kantoorkast 80x40x120 cm, 2 draaideuren, afsluitbaar","category":"Kasten & opbergen","priceIncl":266.2,"priceEx":220.0,"image":"images/products-clean/product-05.jpg","description":"Handige opbergruimte voor documenten, materialen en kantoorbenodigdheden."},{"id":6,"name":"Dossierkast 46x62x102 cm, 3 laden voor A4-hangmappen","category":"Kasten & opbergen","priceIncl":338.8,"priceEx":280.0,"image":"images/products-clean/product-06.jpg","description":"Handige opbergruimte voor documenten, materialen en kantoorbenodigdheden."},{"id":7,"name":"Archiefkast 195x92x42 cm, 4 legplanken, afsluitbaar","category":"Kasten & opbergen","priceIncl":423.5,"priceEx":350.0,"image":"images/products-clean/product-07.jpg","description":"Handige opbergruimte voor documenten, materialen en kantoorbenodigdheden."},{"id":8,"name":"Vergadertafel 180x90 cm, 8-persoons, kabeldoorvoer","category":"Tafels","priceIncl":532.4,"priceEx":440.0,"image":"images/products-clean/product-08.jpg","description":"Een plek om samen te werken, te vergaderen of spullen neer te zetten."},{"id":9,"name":"Vergadertafel 240x120 cm, ovaal blad, 8-10 personen","category":"Tafels","priceIncl":726.0,"priceEx":600.0,"image":"images/products-clean/product-09.jpg","description":"Een plek om samen te werken, te vergaderen of spullen neer te zetten."},{"id":10,"name":"Conferentietafel 300x120 cm, modulair, 10-12 personen","category":"Tafels","priceIncl":1089.0,"priceEx":900.0,"image":"images/products-clean/product-10.jpg","description":"Een plek om samen te werken, te vergaderen of spullen neer te zetten."},{"id":11,"name":"Bureaustoel NPR ergonomisch, mesh rug, verstelbare armleuningen","category":"Stoelen","priceIncl":205.7,"priceEx":170.0,"image":"images/products-clean/product-11.jpg","description":"Zakelijke zitoplossingen voor werkplekken, vergaderruimtes en kantines."},{"id":12,"name":"Ergonomische bureaustoel met hoofdsteun, lendensteun en 3D-armleuningen","category":"Stoelen","priceIncl":363.0,"priceEx":300.0,"image":"images/products-clean/product-12.jpg","description":"Zakelijke zitoplossingen voor werkplekken, vergaderruimtes en kantines."},{"id":13,"name":"Directiestoel zwart kunstleer, hoge rug, kantelmechanisme","category":"Stoelen","priceIncl":484.0,"priceEx":400.0,"image":"images/products-clean/product-13.jpg","description":"Zakelijke zitoplossingen voor werkplekken, vergaderruimtes en kantines."},{"id":14,"name":"Vergaderstoel gestoffeerd, zwart frame, stapelbaar","category":"Stoelen","priceIncl":108.9,"priceEx":90.0,"image":"images/products-clean/product-14.jpg","description":"Zakelijke zitoplossingen voor werkplekken, vergaderruimtes en kantines."},{"id":15,"name":"Kantinestoel kunststof kuip, 4 metalen poten, stapelbaar","category":"Stoelen","priceIncl":84.7,"priceEx":70.0,"image":"images/products-clean/product-15.jpg","description":"Zakelijke zitoplossingen voor werkplekken, vergaderruimtes en kantines."},{"id":16,"name":"Barkruk 75 cm zithoogte, kunstleer, metalen onderstel","category":"Stoelen","priceIncl":121.0,"priceEx":100.0,"image":"images/products-clean/product-16.jpg","description":"Zakelijke zitoplossingen voor werkplekken, vergaderruimtes en kantines."},{"id":17,"name":"Kantinetafel 120x80 cm, HPL blad, afgeronde hoeken","category":"Tafels","priceIncl":242.0,"priceEx":200.0,"image":"images/products-clean/product-17.jpg","description":"Een plek om samen te werken, te vergaderen of spullen neer te zetten."},{"id":18,"name":"Receptiebalie 180x80x110 cm, wit met houtaccent","category":"Ontvangst","priceIncl":847.0,"priceEx":700.0,"image":"images/products-clean/product-18.jpg","description":"Voor een verzorgde ontvangst van klanten, bezoekers en gasten."},{"id":19,"name":"Baliehoek 90 graden, wit, passend bij receptiebalie","category":"Ontvangst","priceIncl":605.0,"priceEx":500.0,"image":"images/products-clean/product-19.jpg","description":"Voor een verzorgde ontvangst van klanten, bezoekers en gasten."},{"id":20,"name":"Lounge bank 2-zits, grijze stof, zakelijke wachtruimte","category":"Lounge","priceIncl":605.0,"priceEx":500.0,"image":"images/products-clean/product-20.jpg","description":"Voor een prettige wachtruimte of informele ontvangstruimte."},{"id":21,"name":"Lounge bank 3-zits, donkergrijze stof, zakelijke wachtruimte","category":"Lounge","priceIncl":847.0,"priceEx":700.0,"image":"images/products-clean/product-21.jpg","description":"Voor een prettige wachtruimte of informele ontvangstruimte."},{"id":22,"name":"Fauteuil met hoge rug, grijze stof, houten poten","category":"Lounge","priceIncl":363.0,"priceEx":300.0,"image":"images/products-clean/product-22.jpg","description":"Voor een prettige wachtruimte of informele ontvangstruimte."},{"id":23,"name":"Salontafel 120x60 cm, eiken blad, zwart metalen frame","category":"Tafels","priceIncl":217.8,"priceEx":180.0,"image":"images/products-clean/product-23.jpg","description":"Een plek om samen te werken, te vergaderen of spullen neer te zetten."},{"id":24,"name":"Bijzettafel Ø50 cm, eiken blad, zwart metalen frame","category":"Tafels","priceIncl":108.9,"priceEx":90.0,"image":"images/products-clean/product-24.jpg","description":"Een plek om samen te werken, te vergaderen of spullen neer te zetten."},{"id":25,"name":"Boekenkast 80x35x190 cm, 5 legplanken, eiken decor","category":"Kasten & opbergen","priceIncl":290.4,"priceEx":240.0,"image":"images/products-clean/product-25.jpg","description":"Handige opbergruimte voor documenten, materialen en kantoorbenodigdheden."},{"id":26,"name":"Kledingkast personeel 180x80x50 cm, 2 deuren, kledingroede","category":"Kasten & opbergen","priceIncl":435.6,"priceEx":360.0,"image":"images/products-clean/product-26.jpg","description":"Handige opbergruimte voor documenten, materialen en kantoorbenodigdheden."},{"id":27,"name":"Lockerkast 6 vakken, staal, cilindersloten, antraciet","category":"Kasten & opbergen","priceIncl":363.0,"priceEx":300.0,"image":"images/products-clean/product-27.jpg","description":"Handige opbergruimte voor documenten, materialen en kantoorbenodigdheden."},{"id":28,"name":"Akoestisch bureauscherm 160x40 cm, PET-vilt, geluidsdempend","category":"Overig","priceIncl":181.5,"priceEx":150.0,"image":"images/products-clean/product-28.jpg","description":"Een praktische aanvulling op de inrichting van een zakelijke ruimte."},{"id":29,"name":"Printerkast 80x50x75 cm, 2 deuren, kabeldoorvoer","category":"Kasten & opbergen","priceIncl":193.6,"priceEx":160.0,"image":"images/products-clean/product-29.jpg","description":"Handige opbergruimte voor documenten, materialen en kantoorbenodigdheden."},{"id":30,"name":"TV-meubel kantoor 160x45x55 cm, kabelmanagement, eiken decor","category":"Kasten & opbergen","priceIncl":302.5,"priceEx":250.0,"image":"images/products-clean/product-30.jpg","description":"Handige opbergruimte voor documenten, materialen en kantoorbenodigdheden."}];
const CART_KEY = 'armada_cart_v1';
const euro = amount => new Intl.NumberFormat('nl-NL',{style:'currency',currency:'EUR'}).format(amount);
const byId = id => document.getElementById(id);
let cart = readCart();
let activeCategory = 'Alles';
let toastTimer;

function readCart(){
  try {
    const saved=JSON.parse(localStorage.getItem(CART_KEY) || '{}');
    if(!saved || typeof saved!=='object') return {};
    const safe={};
    for(const [id,qty] of Object.entries(saved)){
      if(PRODUCTS.some(p=>String(p.id)===String(id)) && Number.isInteger(qty) && qty>0 && qty<1000) safe[id]=qty;
    }
    return safe;
  } catch { return {}; }
}
function saveCart(){ try{localStorage.setItem(CART_KEY,JSON.stringify(cart));}catch{} }
function cartUnits(){ return Object.values(cart).reduce((sum,qty)=>sum+qty,0); }
function subtotal(){ return PRODUCTS.reduce((sum,p)=>sum+(cart[p.id]||0)*p.priceIncl,0); }
function productById(id){return PRODUCTS.find(p=>String(p.id)===String(id));}
function showToast(message){
  const el=byId('toast'); if(!el)return;
  el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2600);
}
function renderProducts(){
  const query=(byId('productSearch')?.value||'').trim().toLocaleLowerCase('nl-NL');
  const shown=PRODUCTS.filter(p=>(activeCategory==='Alles'||p.category===activeCategory) && `${p.name} ${p.category} ${p.description}`.toLocaleLowerCase('nl-NL').includes(query));
  byId('resultsCount').textContent=`${shown.length} ${shown.length===1?'artikel':'artikelen'}`;
  byId('noResults').hidden=shown.length!==0;
  byId('productGrid').innerHTML=shown.map(p=>`<article class="product-card">
    <div class="product-image-wrap"><img src="${p.image}" alt="Afbeelding van ${escapeHtml(p.name)}" loading="lazy"><span class="product-number">ARM-${String(p.id).padStart(2,'0')}</span></div>
    <div class="product-card-body"><span class="product-category">${escapeHtml(p.category)}</span><h3>${escapeHtml(p.name)}</h3><p class="product-description">${escapeHtml(p.description)}</p>
    <div class="product-prices"><strong>${euro(p.priceIncl)}</strong><span>${euro(p.priceEx)} excl. btw</span></div>
    <button class="add-to-cart" type="button" data-add="${p.id}"><span>In winkelwagen</span><b aria-hidden="true">+</b></button></div>
    </article>`).join('');
}
function escapeHtml(value){return String(value).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
function updateCart(){
  const units=cartUnits();
  byId('cartCount').textContent=units;
  byId('drawerCount').textContent=`(${units})`;
  byId('cartSubtotal').textContent=euro(subtotal());
  byId('checkoutSubtotal').textContent=euro(subtotal());
  byId('cartEmpty').hidden=units>0;
  byId('cartFooter').hidden=units===0;
  const items=PRODUCTS.filter(p=>cart[p.id]);
  byId('cartItems').innerHTML=items.map(p=>`<article class="cart-item">
    <img src="${p.image}" alt="" loading="lazy"><div class="cart-item-info"><h3>${escapeHtml(p.name)}</h3><span class="cart-item-price">${euro(p.priceIncl)} per stuk</span><div class="qty-controls"><button type="button" data-qty="${p.id}" data-delta="-1" aria-label="Een minder">−</button><span>${cart[p.id]}</span><button type="button" data-qty="${p.id}" data-delta="1" aria-label="Een meer">+</button></div></div>
    <div class="cart-item-right"><strong>${euro(p.priceIncl*cart[p.id])}</strong><button type="button" class="remove-item" data-remove="${p.id}">Verwijderen</button></div></article>`).join('');
  saveCart();
}
function addToCart(id){
  cart[id]=(cart[id]||0)+1;updateCart();
  const p=productById(id);showToast(`${p.name} toegevoegd aan de winkelwagen.`);
}
function openCart(){byId('cartOverlay').hidden=false;byId('cartDrawer').classList.add('is-open');byId('cartDrawer').setAttribute('aria-hidden','false');document.body.classList.add('drawer-open');byId('closeCart').focus();}
function closeCart(){byId('cartOverlay').hidden=true;byId('cartDrawer').classList.remove('is-open');byId('cartDrawer').setAttribute('aria-hidden','true');document.body.classList.remove('drawer-open');}
function openCheckout(){closeCart();byId('checkoutBackdrop').hidden=false;byId('checkoutModal').classList.add('is-open');byId('checkoutModal').setAttribute('aria-hidden','false');byId('checkoutSubtotal').textContent=euro(subtotal());byId('checkoutForm').querySelector('[name="naam"]').focus();}
function closeCheckout(){byId('checkoutBackdrop').hidden=true;byId('checkoutModal').classList.remove('is-open');byId('checkoutModal').setAttribute('aria-hidden','true');}
function makeMailto(to,subject,body){return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;}

byId('productGrid').addEventListener('click',event=>{const button=event.target.closest('[data-add]');if(button)addToCart(Number(button.dataset.add));});
byId('categoryFilters').addEventListener('click',event=>{
  const button=event.target.closest('[data-category]');if(!button)return;
  activeCategory=button.dataset.category;
  byId('categoryFilters').querySelectorAll('.filter-chip').forEach(chip=>chip.classList.toggle('active',chip===button));renderProducts();
});
byId('productSearch').addEventListener('input',renderProducts);
byId('resetFilters').addEventListener('click',()=>{activeCategory='Alles';byId('productSearch').value='';byId('categoryFilters').querySelectorAll('.filter-chip').forEach(c=>c.classList.toggle('active',c.dataset.category==='Alles'));renderProducts();});
document.querySelectorAll('[data-open-cart]').forEach(button=>button.addEventListener('click',openCart));
byId('closeCart').addEventListener('click',closeCart);byId('cartOverlay').addEventListener('click',closeCart);
byId('continueShopping').addEventListener('click',()=>{closeCart();byId('assortiment').scrollIntoView({behavior:'smooth'});});
byId('cartItems').addEventListener('click',event=>{
  const qty=event.target.closest('[data-qty]');const remove=event.target.closest('[data-remove]');
  if(qty){const id=qty.dataset.qty;cart[id]=(cart[id]||0)+Number(qty.dataset.delta);if(cart[id]<=0)delete cart[id];updateCart();}
  if(remove){delete cart[remove.dataset.remove];updateCart();showToast('Artikel verwijderd.');}
});
byId('clearCart').addEventListener('click',()=>{cart={};updateCart();showToast('Winkelwagen leeggemaakt.');});
byId('openCheckout').addEventListener('click',openCheckout);byId('closeCheckout').addEventListener('click',closeCheckout);byId('checkoutBackdrop').addEventListener('click',closeCheckout);
byId('checkoutForm').addEventListener('submit',event=>{
  event.preventDefault();if(!cartUnits()){closeCheckout();showToast('Uw winkelwagen is leeg.');return;}
  const fd=new FormData(event.currentTarget);const lines=PRODUCTS.filter(p=>cart[p.id]).map(p=>`- ${p.name} | aantal: ${cart[p.id]} | ${euro(p.priceIncl)} per stuk | subtotaal: ${euro(p.priceIncl*cart[p.id])}`);
  const body=[`Naam: ${fd.get('naam')}`,`Bedrijf: ${fd.get('bedrijf')||'(niet ingevuld)'}`,`E-mail: ${fd.get('email')}`,`Telefoon: ${fd.get('telefoon')||'(niet ingevuld)'}`,`Leveradres/opmerkingen: ${fd.get('opmerkingen')||'(niet ingevuld)'}`,'','Geselecteerde artikelen:',...lines,'',`Subtotaal incl. btw: ${euro(subtotal())}`,'Levering en montage zijn niet inbegrepen. Graag bevestigen wat de definitieve voorwaarden zijn.'].join('\n');
  window.location.href=makeMailto('info@armada-meubels.nl','Bestelaanvraag ARMADA',body);
  showToast('Uw e-mailprogramma wordt geopend. Controleer en verstuur de aanvraag daar.');
});
byId('complaintForm').addEventListener('submit',event=>{
  event.preventDefault();const fd=new FormData(event.currentTarget);
  const body=[`Naam: ${fd.get('naam')}`,`E-mail: ${fd.get('email')}`,`Ordernummer: ${fd.get('ordernummer')||'(niet ingevuld)'}`,`Aankoop-/leverdatum: ${fd.get('datum')||'(niet ingevuld)'}`,'','Omschrijving:',fd.get('omschrijving'),'',"Voeg waar nodig foto's of documenten als bijlage toe."].join('\n');
  window.location.href=makeMailto('info@armada-meubels.nl',`Klacht ARMADA ${fd.get('ordernummer')||''}`.trim(),body);
  showToast('Uw e-mailprogramma wordt geopend. Verstuur de klacht daar.');
});
byId('contactForm').addEventListener('submit',event=>{
  event.preventDefault();const fd=new FormData(event.currentTarget);
  const body=[`Naam: ${fd.get('naam')}`,`E-mail: ${fd.get('email')}`,'','Bericht:',fd.get('bericht')].join('\n');
  window.location.href=makeMailto('info@armada-meubels.nl','Bericht via de ARMADA-website',body);
  showToast('Uw e-mailprogramma wordt geopend. Verstuur het bericht daar.');
});
const menuButton=byId('mobileMenuButton');
menuButton.addEventListener('click',()=>{const expanded=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!expanded));menuButton.textContent=expanded?'☰':'×';byId('mainNav').classList.toggle('open',!expanded);});
byId('mainNav').querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰';byId('mainNav').classList.remove('open');}));
document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeCart();closeCheckout();}});
byId('currentYear').textContent=new Date().getFullYear();
renderProducts();updateCart();
