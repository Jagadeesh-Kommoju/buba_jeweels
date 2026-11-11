/**
 * BuBa Fashions - Core Client-Side Engine
 * Editorial Boutique UX, Filter Engine, WhatsApp Link Generator,
 * Bridal Rental Estimator, Saree Matchmaker, and FAQ Accordions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  let currentCategory = 'all';
  let searchQuery = '';
  let selectedRentalProduct = BUBA_DATA.products[0];

  // DOM Elements
  const productsGrid = document.getElementById('products-grid');
  const searchInput = document.getElementById('search-input');
  const filterTabsContainer = document.getElementById('filter-tabs');
  const resultsCount = document.getElementById('results-count');
  
  // Modals
  const rentalModal = document.getElementById('rental-modal');
  const quickViewModal = document.getElementById('quick-view-modal');
  const matchmakerModal = document.getElementById('matchmaker-modal');
  const storeVisitModal = document.getElementById('store-visit-modal');
  const videoModal = document.getElementById('video-modal');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const toastNotification = document.getElementById('toast-notification');

  // Format Currency (INR)
  const formatINR = (amount) => {
    if (!amount && amount !== 0) return '';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Toast System
  const showToast = (message, title = 'BuBa Fashions') => {
    if (!toastNotification) return;
    const toastTitle = document.getElementById('toast-title');
    const toastMsg = document.getElementById('toast-message');
    if (toastTitle) toastTitle.textContent = title;
    if (toastMsg) toastMsg.textContent = message;

    toastNotification.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
    toastNotification.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toastNotification.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
      toastNotification.classList.remove('translate-y-0', 'opacity-100');
    }, 3500);
  };

  // Security: Strict HTML Entity Escaper for Zero-XSS Guarantee
  const escapeHTML = (str) => {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  };

  // Safe WhatsApp URL opener
  const openWhatsApp = (messageText) => {
    const encoded = encodeURIComponent(messageText);
    const url = `https://wa.me/${BUBA_DATA.store.whatsappClean}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    showToast('Opening WhatsApp with your request details...', 'Boutique Consultation');
  };

  // Render Single Product Card (Editorial & Clean)
  const renderProductCard = (product) => {
    const isRental = product.category === 'bridal-rental' || product.rentalPrice3Days;
    const isRentalOnly = product.category === 'bridal-rental';

    const safeTitle = escapeHTML(product.title);
    const safeSku = escapeHTML(product.sku);
    const safeBadge = escapeHTML(product.badge);
    const safeShortDesc = escapeHTML(product.shortDesc);
    const safeFabric = escapeHTML(product.fabricPairing);
    const safeCategory = escapeHTML(product.category);

    return `
      <div class="product-card-editorial group flex flex-col justify-between editorial-reveal" data-category="${safeCategory}" data-sku="${safeSku}">
        
        <!-- Image Container -->
        <div class="card-img-wrap aspect-square relative">
          <img 
            src="${product.image}" 
            alt="${safeTitle}" 
            loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80'"
            class="w-full h-full object-cover"
          />

          <!-- SKU Tag Top Left -->
          <div class="absolute top-3 left-3 bg-[#072014]/90 text-[#F3E7C4] text-[11px] font-mono px-2.5 py-1 rounded-[3px] border border-[#C5A059]/40 tracking-wider">
            ${safeSku}
          </div>

          <!-- Category Badge Top Right -->
          <div class="absolute top-3 right-3">
            <span class="badge-curated ${isRentalOnly ? 'badge-curated-gold' : 'badge-curated-emerald'}">
              ${safeBadge}
            </span>
          </div>

          <!-- Quick View & Video Trigger on Hover -->
          <div class="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 opacity-95 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
            <button 
              onclick="window.openQuickView('${product.id}')"
              class="flex-1 py-2 px-2.5 bg-white/95 text-gray-900 rounded-[3px] text-xs font-semibold shadow-sm hover:bg-[#FAF8F3] flex items-center justify-center gap-1.5 border border-gray-200"
            >
              <svg class="w-3.5 h-3.5 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              <span>View Details</span>
            </button>
            ${product.youtubeShortId ? `
              <button 
                onclick="window.playReel('${product.youtubeShortId}', '${safeSku}')"
                class="py-2 px-3 bg-[#072014]/90 text-white rounded-[3px] text-xs font-semibold shadow-sm hover:bg-black flex items-center gap-1 border border-[#C5A059]/40"
                title="Watch Video"
              >
                <svg class="w-3.5 h-3.5 text-[#C5A059]" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                <span>Reel</span>
              </button>
            ` : ''}
          </div>
        </div>

        <!-- Product Information -->
        <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="text-[10px] font-bold text-[#8C6D2D] uppercase tracking-wider mb-1">
              ${safeCategory.replace('-', ' ')}
            </div>

            <h3 class="font-editorial text-base sm:text-lg font-bold text-gray-900 leading-snug line-clamp-2 mb-2">
              ${safeTitle}
            </h3>

            <p class="text-xs text-gray-600 line-clamp-2 mb-2 leading-relaxed">
              ${safeShortDesc}
            </p>

            ${product.fabricPairing ? `
              <div class="text-[11px] text-[#0B2B1B] bg-[#FAF8F3] px-2.5 py-1 rounded-[3px] border border-[#C5A059]/20 mb-3 line-clamp-1 italic">
                👗 ${safeFabric}
              </div>
            ` : ''}
          </div>

          <!-- Pricing Block -->
          <div class="pt-3 border-t border-gray-100 mb-4">
            ${isRentalOnly ? `
              <div class="flex items-baseline justify-between">
                <div>
                  <span class="text-[10px] text-gray-500 uppercase tracking-wider block font-semibold">3-Day Rental</span>
                  <div class="flex items-baseline gap-2">
                    <span class="text-xl sm:text-2xl font-bold text-[#072014] font-display">
                      ${formatINR(product.rentalPrice3Days)}
                    </span>
                    <span class="text-xs text-gray-400 line-through">
                      Buy: ${formatINR(product.retailPrice)}
                    </span>
                  </div>
                </div>
                <div class="text-right">
                  <span class="text-[10px] text-gray-500 block">Caution Deposit</span>
                  <span class="text-xs font-semibold text-gray-700">
                    ${formatINR(product.rentalDeposit)}
                  </span>
                </div>
              </div>
            ` : `
              <div class="flex items-baseline justify-between">
                <div>
                  <span class="text-[10px] text-gray-500 uppercase tracking-wider block font-semibold">Festive Price</span>
                  <div class="flex items-baseline gap-2">
                    <span class="text-xl sm:text-2xl font-bold text-[#0B2B1B] font-display">
                      ${formatINR(product.salePrice)}
                    </span>
                    <span class="text-xs text-gray-400 line-through">
                      ${formatINR(product.retailPrice)}
                    </span>
                  </div>
                </div>
                ${product.rentalPrice3Days ? `
                  <div class="text-right">
                    <span class="text-[10px] text-[#0B2B1B] block font-medium">Rental Available</span>
                    <span class="text-xs font-bold text-[#8C6D2D]">
                      ${formatINR(product.rentalPrice3Days)} / 3-Days
                    </span>
                  </div>
                ` : `
                  <div class="text-right">
                    <span class="text-[10px] text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded-[3px]">
                      In Stock
                    </span>
                  </div>
                `}
              </div>
            `}
          </div>

          <!-- Action Buttons (Atelier Architectural Architecture) -->
          <div class="space-y-2">
            ${isRental ? `
              <button 
                onclick="window.openRentalModal('${product.id}')"
                class="w-full btn-atelier-primary py-2.5 px-3 text-xs flex items-center justify-center gap-1.5"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                <span>Check Wedding Date & Reserve</span>
              </button>
            ` : ''}

            <button 
              onclick="window.orderOnWhatsApp('${product.id}')"
              class="w-full btn-atelier-whatsapp py-2.5 px-3 text-xs flex items-center justify-center gap-1.5"
            >
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-1.92-.455-1.572-.662-2.576-2.277-2.654-2.381-.078-.104-.637-.849-.637-1.621 0-.772.404-1.15.547-1.307.143-.157.312-.196.417-.196.104 0 .208.001.299.006.096.005.225-.036.351.268.13.313.444 1.085.483 1.163.039.078.065.17.013.274-.052.104-.078.17-.156.261-.078.091-.164.204-.235.274-.078.078-.16.162-.069.318.091.156.404.667.868 1.08 1.026.914 1.258 1.037 1.439 1.129.182.091.286.078.391-.039.104-.117.443-.518.56-.697.117-.182.234-.143.391-.091.156.052.989.467 1.159.551.17.085.286.13.328.201.042.072.042.417-.102.822z"/></svg>
              <span>Order via WhatsApp</span>
            </button>
          </div>

        </div>
      </div>
    `;
  };

  // Filter & Render
  const filterAndRenderProducts = () => {
    if (!productsGrid) return;

    const filtered = BUBA_DATA.products.filter(p => {
      const matchesCategory = currentCategory === 'all' 
        ? true 
        : p.category === currentCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = query === '' 
        ? true 
        : (
          p.title.toLowerCase().includes(query) ||
          p.sku.toLowerCase().includes(query) ||
          (p.shortDesc && p.shortDesc.toLowerCase().includes(query)) ||
          p.category.toLowerCase().includes(query)
        );

      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      const safeQuery = escapeHTML(searchQuery);
      productsGrid.innerHTML = `
        <div class="col-span-full py-16 text-center bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
          <div class="w-14 h-14 mx-auto mb-3 rounded-full bg-[#FAF8F3] flex items-center justify-center text-[#C5A059] border border-[#C5A059]/30">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </div>
          <h4 class="font-editorial text-lg font-bold text-gray-900 mb-1">No Pieces Matching "${safeQuery}"</h4>
          <p class="text-xs text-gray-500 max-w-md mx-auto mb-5 leading-relaxed">
            We carry over 300+ authentic bridal and 1-gram gold designs in our PM Palem showroom. Send us your reference photo on WhatsApp and we will check live stock!
          </p>
          <button id="btn-custom-inquiry-trigger" class="btn-atelier-primary py-2.5 px-6 text-xs">
            <span>Inquire on WhatsApp (+91 90002 39237)</span>
          </button>
        </div>
      `;

      const btnInquiry = document.getElementById('btn-custom-inquiry-trigger');
      if (btnInquiry) {
        btnInquiry.addEventListener('click', () => {
          window.customWhatsAppInquiry(searchQuery);
        });
      }
    } else {
      productsGrid.innerHTML = filtered.map(renderProductCard).join('');
      initScrollReveals();
    }

    if (resultsCount) {
      resultsCount.textContent = `Displaying ${filtered.length} of ${BUBA_DATA.products.length} curated pieces`;
    }
  };

  // Search Input Listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      filterAndRenderProducts();
    });
  }

  // Filter Tabs Event Delegation
  if (filterTabsContainer) {
    filterTabsContainer.addEventListener('click', (e) => {
      const button = e.target.closest('button[data-filter]');
      if (!button) return;

      currentCategory = button.getAttribute('data-filter');

      filterTabsContainer.querySelectorAll('button[data-filter]').forEach(btn => {
        btn.classList.remove('bg-[#072014]', 'text-[#F3E7C4]', 'border-[#C5A059]');
        btn.classList.add('bg-white', 'text-gray-700', 'border-gray-200');
      });

      button.classList.remove('bg-white', 'text-gray-700', 'border-gray-200');
      button.classList.add('bg-[#072014]', 'text-[#F3E7C4]', 'border-[#C5A059]');

      filterAndRenderProducts();
    });
  }

  // Quick View Modal
  window.openQuickView = (productId) => {
    const product = BUBA_DATA.products.find(p => p.id === productId);
    if (!product || !quickViewModal) return;

    document.getElementById('qv-title').textContent = product.title;
    document.getElementById('qv-sku').textContent = product.sku;
    document.getElementById('qv-badge').textContent = product.badge;
    document.getElementById('qv-desc').textContent = product.shortDesc;
    document.getElementById('qv-img').src = product.image;
    document.getElementById('qv-inclusions').textContent = product.inclusions || 'Standard packaging';

    const priceEl = document.getElementById('qv-price-block');
    if (product.category === 'bridal-rental' || product.rentalPrice3Days) {
      priceEl.innerHTML = `
        <div class="flex items-baseline gap-3">
          <span class="text-2xl font-bold text-[#0B2B1B] font-display">${formatINR(product.rentalPrice3Days)}</span>
          <span class="text-xs text-gray-500 font-medium">/ 3-Day Wedding Rental</span>
        </div>
        <div class="text-xs text-gray-500 mt-0.5">Refundable Caution Deposit: ${formatINR(product.rentalDeposit || 1500)}</div>
      `;
    } else {
      priceEl.innerHTML = `
        <div class="flex items-baseline gap-3">
          <span class="text-2xl font-bold text-[#0B2B1B] font-display">${formatINR(product.salePrice)}</span>
          <span class="text-xs text-gray-400 line-through">MRP: ${formatINR(product.retailPrice)}</span>
        </div>
      `;
    }

    const specsList = document.getElementById('qv-specs');
    if (specsList && product.craftsmanship) {
      specsList.innerHTML = product.craftsmanship.map(item => `
        <li class="flex items-start gap-2 text-xs text-gray-600">
          <span class="text-[#C5A059] font-bold">✓</span>
          <span>${item}</span>
        </li>
      `).join('');
    }

    const actionContainer = document.getElementById('qv-actions');
    actionContainer.innerHTML = `
      <button onclick="window.orderOnWhatsApp('${product.id}')" class="flex-1 btn-atelier-whatsapp py-3 text-xs sm:text-sm font-semibold">
        <span>Order / Inquire on WhatsApp</span>
      </button>
      ${product.rentalPrice3Days ? `
        <button onclick="window.closeQuickView(); window.openRentalModal('${product.id}')" class="flex-1 btn-atelier-primary py-3 text-xs sm:text-sm font-semibold">
          <span>Check Wedding Date</span>
        </button>
      ` : ''}
    `;

    quickViewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeQuickView = () => {
    if (quickViewModal) {
      quickViewModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  };

  // Order on WhatsApp Trigger
  window.orderOnWhatsApp = (productId) => {
    const product = BUBA_DATA.products.find(p => p.id === productId);
    if (!product) return;

    const message = `Namaste BuBa Fashions! 🙏\n\nI am interested in this jewellery piece:\n\n✨ Title: ${product.title}\n🔖 SKU Code: ${product.sku}\n💰 Price: ₹${product.salePrice}\n\nCould you please share availability and delivery/store pickup details? Thank you!`;

    openWhatsApp(message);
  };

  // Rental Booking Modal
  window.openRentalModal = (productId) => {
    const product = BUBA_DATA.products.find(p => p.id === productId) || BUBA_DATA.products[0];
    selectedRentalProduct = product;

    const titleEl = document.getElementById('rental-modal-title');
    const skuEl = document.getElementById('rental-modal-sku');
    const priceEl = document.getElementById('rental-modal-price');
    const depositEl = document.getElementById('rental-modal-deposit');
    const imgEl = document.getElementById('rental-modal-img');

    if (titleEl) titleEl.textContent = product.title;
    if (skuEl) skuEl.textContent = product.sku;
    if (priceEl) priceEl.textContent = formatINR(product.rentalPrice3Days || 4999);
    if (depositEl) depositEl.textContent = formatINR(product.rentalDeposit || 2500);
    if (imgEl) imgEl.src = product.image;

    // Default dates (14 days ahead for wedding, 1 day prior for pickup)
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 14);
    const dateStr = futureDate.toISOString().split('T')[0];
    
    const eventInput = document.getElementById('rental-event-date');
    const pickupInput = document.getElementById('rental-pickup-date');

    if (eventInput) eventInput.value = dateStr;
    const pickupDate = new Date(futureDate);
    pickupDate.setDate(pickupDate.getDate() - 1);
    if (pickupInput) pickupInput.value = pickupDate.toISOString().split('T')[0];

    if (rentalModal) {
      rentalModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeRentalModal = () => {
    if (rentalModal) {
      rentalModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  };

  // Rental Form Submit
  const rentalForm = document.getElementById('rental-booking-form');
  if (rentalForm) {
    rentalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('rental-cust-name')?.value || 'Guest Bride';
      const phone = document.getElementById('rental-cust-phone')?.value || '';
      const eventDate = document.getElementById('rental-event-date')?.value || 'Upcoming';
      const pickupDate = document.getElementById('rental-pickup-date')?.value || '1 Day Before';
      const city = document.getElementById('rental-city')?.value || 'Visakhapatnam';
      const notes = document.getElementById('rental-notes')?.value || 'Need trial at PM Palem boutique';

      const product = selectedRentalProduct || BUBA_DATA.products[0];

      const message = `Namaste BuBa Fashions! 👑\n\nI would like to check availability and book a BRIDAL RENTAL:\n\n✨ Bridal Set: ${product.title}\n🔖 SKU Code: ${product.sku}\n📅 Wedding / Event Date: ${eventDate}\n📦 Preferred Pickup Date: ${pickupDate}\n🏙️ City / Area: ${city}\n💰 3-Day Rental Estimate: ₹${product.rentalPrice3Days || 4999} (Caution Deposit: ₹${product.rentalDeposit || 2500})\n\n👰 Bride Name: ${name}\n📞 Contact: ${phone}\n📝 Notes: ${notes}\n\nPlease confirm availability for my date and schedule an in-store trial in PM Palem!`;

      closeRentalModal();
      openWhatsApp(message);
    });
  }

  // Interactive Rental Estimator Calculator
  window.updateRentalEstimate = () => {
    const setSelect = document.getElementById('est-set-type');
    const durationSelect = document.getElementById('est-duration');
    const addBangles = document.getElementById('est-addon-bangles')?.checked;
    const addTassels = document.getElementById('est-addon-tassels')?.checked;

    if (!setSelect || !durationSelect) return;

    let baseRental = parseInt(setSelect.value, 10) || 4999;
    let baseDeposit = parseInt(setSelect.options[setSelect.selectedIndex].getAttribute('data-deposit'), 10) || 2500;
    
    // Duration additions
    const days = parseInt(durationSelect.value, 10) || 3;
    let extraDurationFee = 0;
    if (days === 5) extraDurationFee = 1200;
    if (days === 7) extraDurationFee = 2000;

    // Addons
    let addonTotal = 0;
    if (addBangles) addonTotal += 499;
    if (addTassels) addonTotal += 199;

    const totalRental = baseRental + extraDurationFee + addonTotal;

    const rentalDisplay = document.getElementById('est-total-rental');
    const depositDisplay = document.getElementById('est-total-deposit');
    const pickupTotalDisplay = document.getElementById('est-total-due');

    if (rentalDisplay) rentalDisplay.textContent = formatINR(totalRental);
    if (depositDisplay) depositDisplay.textContent = formatINR(baseDeposit);
    if (pickupTotalDisplay) pickupTotalDisplay.textContent = formatINR(totalRental + baseDeposit);
  };

  window.sendCustomRentalEstimateToWhatsApp = () => {
    const setSelect = document.getElementById('est-set-type');
    const durationSelect = document.getElementById('est-duration');
    const addBangles = document.getElementById('est-addon-bangles')?.checked ? 'Yes (+₹499)' : 'No';
    const addTassels = document.getElementById('est-addon-tassels')?.checked ? 'Yes (+₹199)' : 'No';
    
    const setName = setSelect.options[setSelect.selectedIndex].text;
    const durationText = durationSelect.options[durationSelect.selectedIndex].text;
    const totalRental = document.getElementById('est-total-rental')?.textContent || '₹4,999';
    const deposit = document.getElementById('est-total-deposit')?.textContent || '₹2,500';

    const message = `Namaste BuBa Fashions! 🙏\n\nI used the Bridal Rental Estimator on your website and would like to reserve:\n\n✨ Selected Set: ${setName}\n⏳ Rental Duration: ${durationText}\n💎 Matching Bangles: ${addBangles}\n🌸 Blouse Tassels: ${addTassels}\n💰 Total Rental Fee: ${totalRental}\n🔒 Caution Deposit: ${deposit}\n\nPlease check slot availability for my wedding dates!`;

    openWhatsApp(message);
  };

  // Saree Matchmaker Form
  const matchmakerForm = document.getElementById('matchmaker-form');
  if (matchmakerForm) {
    matchmakerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('mm-name')?.value || 'Client';
      const occasion = document.getElementById('mm-occasion')?.value || 'Wedding';
      const color = document.getElementById('mm-outfit-color')?.value || 'Red / Maroon Silk';
      const style = document.getElementById('mm-style-pref')?.value || 'Antique 1-Gram Temple Gold';
      const date = document.getElementById('mm-date')?.value || 'Soon';

      const message = `Namaste BuBa Fashions Stylist! 👗✨\n\nI would love your recommendation for jewellery to match my saree:\n\n👤 Name: ${name}\n🎉 Occasion: ${occasion} (Approx Date: ${date})\n🎨 Saree / Outfit Color: ${color}\n💎 Preferred Style: ${style}\n\nI am attaching the photo of my saree/lehenga to this chat now. Please recommend matching harams, chandraharams, and bangles!`;

      openWhatsApp(message);
    });
  }

  // VIP Store Visit Form
  const storeVisitForm = document.getElementById('store-visit-form');
  if (storeVisitForm) {
    storeVisitForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('visit-name')?.value || 'Client';
      const phone = document.getElementById('visit-phone')?.value || '';
      const date = document.getElementById('visit-date')?.value || 'Upcoming';
      const timeSlot = document.getElementById('visit-time')?.value || '5:00 PM';
      const interest = document.getElementById('visit-interest')?.value || 'Bridal Rentals';

      const message = `Namaste BuBa Fashions! 📍\n\nI want to schedule a VIP In-Store Trial at your Walkers Park Road, PM Palem boutique:\n\n👤 Name: ${name}\n📞 Mobile: ${phone}\n🗓️ Preferred Date: ${date}\n⏰ Time Slot: ${timeSlot}\n💎 Interested In: ${interest}\n🎟️ Claiming Boutique Voucher: BUBAFEST10\n\nPlease reserve my consultation slot!`;

      navigator.clipboard?.writeText('BUBAFEST10');
      showToast('Appointment voucher BUBAFEST10 copied to clipboard!', 'VIP Store Trial');

      if (storeVisitModal) storeVisitModal.classList.remove('active');
      document.body.style.overflow = 'auto';
      openWhatsApp(message);
    });
  }

  // FAQ Accordion Toggle
  window.toggleFAQ = (buttonEl) => {
    const faqItem = buttonEl.closest('.faq-item');
    if (!faqItem) return;

    const isActive = faqItem.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));

    if (!isActive) {
      faqItem.classList.add('active');
    }
  };

  // Video Reel Player
  window.playReel = (videoId, sku) => {
    if (!videoModal) return;
    const iframe = document.getElementById('video-modal-iframe');
    const skuBadge = document.getElementById('video-modal-sku');
    const orderBtn = document.getElementById('video-modal-order-btn');

    if (iframe) {
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    }
    if (skuBadge) skuBadge.textContent = sku;
    if (orderBtn) {
      orderBtn.onclick = () => {
        closeVideoModal();
        const product = BUBA_DATA.products.find(p => p.sku === sku);
        if (product) {
          window.orderOnWhatsApp(product.id);
        } else {
          openWhatsApp(`Namaste BuBa Fashions! I watched your video reel for item ${sku} and would like to order or rent it.`);
        }
      };
    }

    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeVideoModal = () => {
    if (videoModal) {
      const iframe = document.getElementById('video-modal-iframe');
      if (iframe) iframe.src = '';
      videoModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  };

  // Modals helper
  window.openStoreVisitModal = () => {
    if (storeVisitModal) {
      storeVisitModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeStoreVisitModal = () => {
    if (storeVisitModal) {
      storeVisitModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  };

  // Send Store Route
  window.sendRouteToWhatsApp = () => {
    const message = `Namaste BuBa Fashions! 📍\n\nPlease share your exact Google Maps location pin and driving directions to your PM Palem boutique (Walkers Park Road, behind Vijetha Supermarket lane). I am planning to visit today!`;
    openWhatsApp(message);
  };

  // Custom Search Query WhatsApp Fallback
  window.customWhatsAppInquiry = (query) => {
    const message = `Namaste BuBa Fashions Vizag! 🙏\n\nI searched your website for "${query}". Could you share live photos of available designs in this category on WhatsApp?`;
    openWhatsApp(message);
  };

  // Category Selector Link Helper
  window.setCategory = (categoryName) => {
    currentCategory = categoryName;

    const catalogSection = document.getElementById('featured-catalog');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    }

    if (filterTabsContainer) {
      filterTabsContainer.querySelectorAll('button[data-filter]').forEach(btn => {
        if (btn.getAttribute('data-filter') === categoryName) {
          btn.classList.remove('bg-white', 'text-gray-700', 'border-gray-200');
          btn.classList.add('bg-[#072014]', 'text-[#F3E7C4]', 'border-[#C5A059]');
        } else {
          btn.classList.remove('bg-[#072014]', 'text-[#F3E7C4]', 'border-[#C5A059]');
          btn.classList.add('bg-white', 'text-gray-700', 'border-gray-200');
        }
      });
    }

    filterAndRenderProducts();
  };

  // Mobile Drawer Menu
  window.toggleMobileMenu = () => {
    if (!mobileMenuDrawer) return;
    mobileMenuDrawer.classList.toggle('hidden');
  };

  // =========================================================================
  // Bilingual Language Engine (English & Telugu)
  // =========================================================================
  const I18N_DICT = {
    en: {
      announcement: "PM Palem Boutique: Private Saree-Matching Trials by Appointment | Express Pan-India Delivery",
      reserveTrial: "Reserve Trial Slot",
      directWhatsApp: "Direct WhatsApp: +91 90002 39237",
      navHome: "Home",
      navRentals: "Bridal Rentals",
      navGold: "1-Gram Gold",
      navPearls: "Pearls",
      navBangles: "Bangles",
      navAntiTarnish: "Anti-Tarnish",
      navMatch: "Saree Match",
      navRoute: "Boutique Route",
      scheduleTrial: "Book Trial",
      heroBadge: "Walkers Park Road, PM Palem • Visakhapatnam",
      heroTitle: "Royal Bridal Elegance <br class='hidden sm:inline' /><span class='italic font-normal text-[#F3E7C4]'>Without Locking Your Capital</span> in Gold.",
      heroSub: "For weddings, receptions, and half-saree ceremonies across Visakhapatnam, BuBa Fashions crafts high-grade 1-gram gold temple harams and rents grand bridal trousseaus—sanitized, fitted in our private PM Palem trial room, and ready for your celebrations.",
      heroExploreRentals: "Explore Bridal Rental Sets",
      heroBrowseGold: "Browse 1-Gram Gold Catalog",
      craftTraditions: "Craft Traditions",
      curatedCelebrations: "Curated for Your Celebrations",
      bridalRentalSuite: "Grand Bridal Rental Trousseau",
      exploreBridalSets: "Explore Bridal Sets →",
      viewGold: "View 1-Gram Gold →",
      browsePearls: "Browse Pearls →",
      exploreBangles: "Explore Bangles →",
      shopDaily: "Shop Daily Wear →",
      howRentalsWork: "How Bridal Rentals Work at BuBa",
      hassleFree: "Hassle-Free Experience",
      step1Title: "Select Your Set & Lock Date",
      step1Desc: "Browse our catalog or visit our PM Palem showroom. Pick your favorite bridal combo and pay a nominal date-reservation token so the set is reserved exclusively for your wedding.",
      step2Title: "In-Store Saree Trial & Fitting",
      step2Desc: "Bring your wedding saree or blouse to our Walkers Park Road store. Try the choker neck fit, adjust the haram length with your pallu, and verify stone luster in person.",
      step3Title: "Pickup, Shine & Easy Return",
      step3Desc: "Collect your sanitized set in a velvet trunk 1 day before the ceremony. Return on Day 3 and your caution deposit is refunded instantly via UPI or cash right at our desk.",
      estimatorTitle: "Calculate Your Wedding Rental Package",
      catalogTitle: "Explore Our Ornaments",
      sareeMatchTitle: "Have a Bridal Saree or Lehenga?",
      sareeMatchSub: "Telugu bridal sarees have unique zari weaves, borders, and necklines. Tell us your outfit color, occasion, and preferred style. When you submit, WhatsApp opens automatically so you can attach a photo of your saree and our boutique stylist can curate the exact matching harams and bangles.",
      faqTitle: "Frequently Asked Questions",
      locationTitle: "Boutique Location in PM Palem"
    },
    te: {
      announcement: "పీఎం పాలెం షోరూమ్: పెళ్లి చీరలకు మ్యాచింగ్ జ్యువెలరీ ట్రయల్స్ | ఆల్ ఇండియా డెలివరీ",
      reserveTrial: "ట్రయల్ స్లాట్ బుక్ చేయండి",
      directWhatsApp: "డైరెక్ట్ వాట్సాప్: +91 90002 39237",
      navHome: "హోమ్",
      navRentals: "బ్రైడల్ రెంటల్స్",
      navGold: "1-గ్రామ్ గోల్డ్",
      navPearls: "ముత్యాల హారాలు",
      navBangles: "గాజులు & క్లచ్స్",
      navAntiTarnish: "యాంటీ-టార్నిష్",
      navMatch: "చీర మ్యాచింగ్",
      navRoute: "షోరూమ్ రూట్",
      scheduleTrial: "స్టోర్ ట్రయల్ బుక్ చేయండి",
      heroBadge: "వాకర్స్ పార్క్ రోడ్, పీఎం పాలెం • విశాఖపట్నం",
      heroTitle: "బంగారంలో లక్షల రూపాయలు లాక్ చేయకుండా... <br class='hidden sm:inline' /><span class='italic font-normal text-[#F3E7C4]'>రాజసం ఉట్టిపడే పెళ్లి ఆభరణాలు.</span>",
      heroSub: "విశాఖపట్నం పెళ్లిళ్లు, రిసెప్షన్లు మరియు లంగాఓణీ ఫంక్షన్ల కోసం 1-గ్రామ్ గోల్డ్ కాసు హారాలు మరియు గ్రాండ్ బ్రైడల్ రెంటల్ సెట్లు. పీఎం పాలెం షోరూమ్‌లో ప్రైవేట్ ట్రయల్ రూమ్ సౌకర్యంతో సిద్ధం.",
      heroExploreRentals: "బ్రైడల్ రెంటల్ సెట్లు చూడండి",
      heroBrowseGold: "1-గ్రామ్ గోల్డ్ కాటలాగ్",
      craftTraditions: "సాంప్రదాయ కళానైపుణ్యం",
      curatedCelebrations: "మీ శుభకార్యాల కోసం ప్రత్యేక ఆభరణాలు",
      bridalRentalSuite: "సంపూర్ణ బ్రైడల్ రెంటల్ సెట్లు",
      exploreBridalSets: "బ్రైడల్ సెట్లు చూడండి →",
      viewGold: "1-గ్రామ్ గోల్డ్ చూడండి →",
      browsePearls: "ముత్యాల కలెక్షన్ →",
      exploreBangles: "గాజులు చూడండి →",
      shopDaily: "డైలీ వేర్ కలెక్షన్ →",
      howRentalsWork: "BuBa వద్ద బ్రైడల్ రెంటల్ ఎలా పనిచేస్తుంది?",
      hassleFree: "సులువైన 3-దశల విధానం",
      step1Title: "సెట్ ఎంచుకుని డేట్ లాక్ చేయండి",
      step1Desc: "మా కాటలాగ్ చూసి మీకు నచ్చిన బ్రైడల్ సెట్ ఎంచుకుని చిన్న టోకెన్ అమౌంట్‌తో మీ పెళ్లి లేదా రిసెప్షన్ తేదీని రిజర్వ్ చేసుకోండి.",
      step2Title: "పీఎం పాలెం స్టోర్‌లో చీరతో ట్రయల్",
      step2Desc: "మీ పెళ్లి చీర లేదా బ్లౌజ్ తీసుకుని మా వాకర్స్ పార్క్ రోడ్ షోరూమ్‌కు రండి. నెక్ ఫిట్టింగ్, హారం పొడవు, రాళ్ల మెరుపును స్వయంగా సరిచూసుకోండి.",
      step3Title: "కలెక్ట్ చేసుకుని, మెరిసిపోయి, సులభంగా రిటర్న్ చేయండి",
      step3Desc: "పెళ్లికి 1 రోజు ముందు శుభ్రపరచిన సెట్‌ను వెల్వెట్ బాక్స్‌లో తీసుకోండి. 3వ రోజు రిటర్న్ చేయగానే మీ కాషన్ డిపాజిట్ తక్షణమే UPI ద్వారా రీఫండ్ చేయబడుతుంది.",
      estimatorTitle: "మీ పెళ్లి రెంటల్ ప్యాకేజ్ ఎస్టిమేట్ చేయండి",
      catalogTitle: "మా ఆభరణాల కాటలాగ్",
      sareeMatchTitle: "మీ పెళ్లి చీర లేదా లెహంగాకు మ్యాచింగ్ కావలెనా?",
      sareeMatchSub: "తెలుగు పెళ్లి చీరల జరీ మరియు బోర్డర్లకు సరిపడే ఆభరణాలను ఎంచుకోవడం ఒక కళ. మీ చీర రంగు, ఫంక్షన్ వివరాలు తెలియజేయండి. వాట్సాప్ ద్వారా మీ చీర ఫోటోను పంపి మా ఎక్స్‌పర్ట్ స్టైలిస్ట్ సలహాలు పొందండి.",
      faqTitle: "తరచూ అడిగే ప్రశ్నలు (FAQ)",
      locationTitle: "పీఎం పాలెం షోరూమ్ లొకేషన్ & రూట్"
    }
  };

  let currentLang = localStorage.getItem('buba_lang') || 'en';

  window.toggleLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('buba_lang', lang);

    const dict = I18N_DICT[lang] || I18N_DICT.en;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update Toggle Button Visuals
    const btnEn = document.getElementById('lang-btn-en');
    const btnTe = document.getElementById('lang-btn-te');
    if (btnEn && btnTe) {
      if (lang === 'te') {
        btnTe.classList.add('bg-[#C5A059]', 'text-black', 'font-bold');
        btnTe.classList.remove('text-gray-300');
        btnEn.classList.remove('bg-[#C5A059]', 'text-black', 'font-bold');
        btnEn.classList.add('text-gray-300');
      } else {
        btnEn.classList.add('bg-[#C5A059]', 'text-black', 'font-bold');
        btnEn.classList.remove('text-gray-300');
        btnTe.classList.remove('bg-[#C5A059]', 'text-black', 'font-bold');
        btnTe.classList.add('text-gray-300');
      }
    }

    showToast(lang === 'te' ? 'భాష తెలుగులోకి మార్చబడింది' : 'Language set to English', 'Language / భాష');
  };

  // Quiet Luxury Editorial Scroll Reveal Orchestration
  function initScrollReveals() {
    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.02,
        rootMargin: '0px 0px 100px 0px'
      });

      document.querySelectorAll('.editorial-reveal').forEach(el => {
        revealObserver.observe(el);
      });
    } else {
      document.querySelectorAll('.editorial-reveal').forEach(el => {
        el.classList.add('is-revealed');
      });
    }
  }

  // Initial Execution
  filterAndRenderProducts();
  initScrollReveals();
  if (window.updateRentalEstimate) {
    window.updateRentalEstimate();
  }
  if (currentLang === 'te') {
    window.toggleLanguage('te');
  }
});
