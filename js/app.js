/**
 * Dr. Sabina Azimova — Interactive Atelier Engine
 * High-performance, accessible, mobile-optimized UI controller.
 */

class AtelierApp {
  constructor() {
    this.lang = localStorage.getItem('sabina_lang') || 'ru';
    this.galleryCaseIndex = 0;
    this.gallerySplit = 50;
    this.galleryActiveFilter = 'all';
    this.selectedServiceIndex = 0;
    this.isDragging = false;
    this.rafPending = false;
    
    // Quiz State
    this.quizStep = 1;
    this.quizPatientType = null;
    this.quizSelectedService = null;

    // Kids Brushing Timer State (120s / 4 zones of 30s)
    this.timerSeconds = 120;
    this.timerInterval = null;
    this.isTimerRunning = false;

    // Clinic Switcher State
    this.activeClinicIndex = 0;

    this.init();
  }

  init() {
    this.bindHeaderScroll();
    this.renderAll();
    this.initSmoothScroll();
    this.bindLightboxEvents();
  }

  setLanguage(lang) {
    if (this.lang === lang) return;
    this.lang = lang;
    localStorage.setItem('sabina_lang', lang);
    this.renderAll();
  }

  // --------------------------------------------------------------------------
  // Mobile Navigation Drawer
  // --------------------------------------------------------------------------
  toggleMobileMenu() {
    const menu = document.getElementById('navMenu');
    const backdrop = document.getElementById('navBackdrop');
    const burger = document.getElementById('navBurger');
    if (!menu) return;

    const isOpen = menu.classList.contains('active');
    if (isOpen) {
      this.closeMobileMenu();
    } else {
      menu.classList.add('active');
      if (backdrop) backdrop.classList.add('active');
      if (burger) {
        burger.setAttribute('aria-expanded', 'true');
        burger.innerHTML = '✕';
      }
      document.body.style.overflow = 'hidden';
    }
  }

  closeMobileMenu() {
    const menu = document.getElementById('navMenu');
    const backdrop = document.getElementById('navBackdrop');
    const burger = document.getElementById('navBurger');
    if (menu) menu.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    if (burger) {
      burger.setAttribute('aria-expanded', 'false');
      burger.innerHTML = '☰';
    }
    document.body.style.overflow = '';
  }

  // --------------------------------------------------------------------------
  // Performance-Throttled Header Scroll Handler (rAF)
  // --------------------------------------------------------------------------
  bindHeaderScroll() {
    const header = document.querySelector('.site-header');
    const floatingPill = document.querySelector('.floating-atelier-pill');

    let ticking = false;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (header) {
        if (scrollY > 30) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
      if (floatingPill) {
        if (scrollY > 280) {
          floatingPill.classList.add('visible');
        } else {
          floatingPill.classList.remove('visible');
        }
      }
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    }, { passive: true });

    // Initial evaluation
    handleScroll();
  }

  // --------------------------------------------------------------------------
  // Master Render Loop
  // --------------------------------------------------------------------------
  renderAll() {
    if (typeof siteData === 'undefined' || !siteData[this.lang]) return;
    const t = siteData[this.lang];

    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.lang);
    });

    // Logo & Header
    const brandTitle = document.getElementById('brandTitle');
    if (brandTitle) brandTitle.textContent = t.brandTitle;
    const brandSub = document.getElementById('brandSub');
    if (brandSub) brandSub.textContent = t.brandSub;
    const headerCta = document.getElementById('headerCta');
    if (headerCta) headerCta.textContent = t.nav.cta;

    // Navigation Links
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
      navMenu.innerHTML = `
        <a href="#about" class="nav-item" onclick="window.app.closeMobileMenu()">${t.nav.about}</a>
        <a href="#quiz" class="nav-item" onclick="window.app.closeMobileMenu()">${t.nav.quiz}</a>
        <a href="#gallery" class="nav-item" onclick="window.app.closeMobileMenu()">${t.nav.works}</a>
        <a href="#kids" class="nav-item" onclick="window.app.closeMobileMenu()">${t.nav.kids}</a>
        <a href="#menu" class="nav-item" onclick="window.app.closeMobileMenu()">${t.nav.menu}</a>
        <a href="#reviews" class="nav-item" onclick="window.app.closeMobileMenu()">${t.nav.reviews}</a>
        <a href="#faq" class="nav-item" onclick="window.app.closeMobileMenu()">${t.nav.faq}</a>
        <a href="#locations" class="nav-item" onclick="window.app.closeMobileMenu()">${t.locations.tag}</a>
        <a href="#journal" class="nav-item" onclick="window.app.closeMobileMenu()">${t.nav.journal}</a>
        <a href="#concierge" class="nav-item" onclick="window.app.closeMobileMenu()">${t.nav.booking}</a>
      `;
    }

    // Hero
    const heroTag = document.getElementById('heroTag');
    if (heroTag) heroTag.textContent = t.hero.tag;
    const heroKidBadge = document.getElementById('heroKidBadge');
    if (heroKidBadge) heroKidBadge.textContent = t.hero.kidBadge;

    const heroTitle = document.getElementById('heroTitle');
    if (heroTitle) {
      heroTitle.innerHTML = `${t.hero.titleLine1} <br><span class="italic-serif">${t.hero.titleLine2}</span>`;
    }
    const heroStatement = document.getElementById('heroStatement');
    if (heroStatement) heroStatement.textContent = t.hero.statement;
    const heroBtnBook = document.getElementById('heroBtnBook');
    if (heroBtnBook) heroBtnBook.textContent = t.hero.btnBook;
    const heroBtnTg = document.getElementById('heroBtnTg');
    if (heroBtnTg) heroBtnTg.textContent = t.hero.btnTelegram;
    const heroCaptionDoctor = document.getElementById('heroCaptionDoctor');
    if (heroCaptionDoctor) heroCaptionDoctor.textContent = t.hero.captionDoctor;
    const heroCaptionCity = document.getElementById('heroCaptionCity');
    if (heroCaptionCity) heroCaptionCity.textContent = t.hero.captionCity;
    const heroDoodleArrow = document.getElementById('heroDoodleArrow');
    if (heroDoodleArrow) heroDoodleArrow.textContent = t.hero.doodleArrow;

    // Trust Bar
    this.renderTrustBar();

    // Smart Procedure Quiz
    this.renderQuiz();

    // Before/After Gallery
    const galleryTag = document.getElementById('galleryTag');
    if (galleryTag) galleryTag.textContent = t.gallery.tag;
    const galleryTitle = document.getElementById('galleryTitle');
    if (galleryTitle) galleryTitle.textContent = t.gallery.title;
    const gallerySub = document.getElementById('gallerySub');
    if (gallerySub) gallerySub.textContent = t.gallery.subtitle;
    this.renderGallery();

    // Works Grid & Filter
    this.renderWorksGrid();

    // Kids Section
    const kidsTag = document.getElementById('kidsTag');
    if (kidsTag) kidsTag.textContent = t.kids.tag;
    const kidsBadge = document.getElementById('kidsBadge');
    if (kidsBadge) kidsBadge.textContent = t.kids.badge;
    const kidsTitle = document.getElementById('kidsTitle');
    if (kidsTitle) kidsTitle.textContent = t.kids.title;
    const kidsDesc = document.getElementById('kidsDesc');
    if (kidsDesc) kidsDesc.textContent = t.kids.desc;
    const kidsBtn = document.getElementById('kidsBtn');
    if (kidsBtn) kidsBtn.textContent = t.kids.btnAction;

    const kidsStepsMount = document.getElementById('kidsStepsMount');
    if (kidsStepsMount) {
      kidsStepsMount.innerHTML = t.kids.steps.map(step => `
        <div class="kids-step-card">
          <div class="kids-step-number">${step.num}</div>
          <h4>${step.title}</h4>
          <p>${step.desc}</p>
        </div>
      `).join('');
    }

    this.renderKidsTimer();

    // Treatment Menu
    const menuTag = document.getElementById('menuTag');
    if (menuTag) menuTag.textContent = t.menu.tag;
    const menuTitle = document.getElementById('menuTitle');
    if (menuTitle) menuTitle.textContent = t.menu.title;
    const menuSub = document.getElementById('menuSub');
    if (menuSub) menuSub.textContent = t.menu.subtitle;
    this.renderMenu();

    // Patient Reviews
    this.renderReviews();

    // FAQ Accordion
    this.renderFaq();

    // Clinic Locations
    this.renderLocations();

    // Journal
    const journalTag = document.getElementById('journalTag');
    if (journalTag) journalTag.textContent = t.journal.tag;
    const journalTitle = document.getElementById('journalTitle');
    if (journalTitle) journalTitle.textContent = t.journal.title;
    const journalSub = document.getElementById('journalSub');
    if (journalSub) journalSub.textContent = t.journal.subtitle;
    const journalBannerTitle = document.getElementById('journalBannerTitle');
    if (journalBannerTitle) journalBannerTitle.textContent = t.journal.bannerTitle;
    const journalBannerDesc = document.getElementById('journalBannerDesc');
    if (journalBannerDesc) journalBannerDesc.textContent = t.journal.bannerDesc;
    const journalBannerBtn = document.getElementById('journalBannerBtn');
    if (journalBannerBtn) journalBannerBtn.textContent = t.journal.bannerBtn;
    this.renderJournal();

    // Concierge
    this.renderConcierge();

    // Footer
    const footerDesc = document.getElementById('footerDesc');
    if (footerDesc) footerDesc.textContent = t.footer.desc;
    const footerDoctorQuote = document.getElementById('footerDoctorQuote');
    if (footerDoctorQuote) footerDoctorQuote.textContent = t.footer.doctorQuote;
    const footerClinicsTitle = document.getElementById('footerClinicsTitle');
    if (footerClinicsTitle) footerClinicsTitle.textContent = t.footer.clinicsTitle;
    const footerContactTitle = document.getElementById('footerContactTitle');
    if (footerContactTitle) footerContactTitle.textContent = t.footer.contactTitle;
    const footerCopyright = document.getElementById('footerCopyright');
    if (footerCopyright) footerCopyright.textContent = t.footer.copyright;
    const footerSubnote = document.getElementById('footerSubnote');
    if (footerSubnote) footerSubnote.textContent = t.footer.subnote;
    const floatingTgText = document.getElementById('floatingTgText');
    if (floatingTgText) floatingTgText.textContent = t.floatingTg;

    this.renderClinicsFooter();
  }

  renderTrustBar() {
    const mount = document.getElementById('trustMount');
    if (!mount) return;

    const items = siteData[this.lang].trust;
    mount.innerHTML = items.map(item => `
      <div class="trust-card">
        <div class="trust-icon-header">
          <span class="trust-emoji">${item.emoji}</span>
          <span class="trust-stamp">${item.stamp}</span>
        </div>
        <span class="trust-title">${item.title}</span>
        <span class="trust-desc">${item.desc}</span>
      </div>
    `).join('');
  }

  // --------------------------------------------------------------------------
  // Smart Procedure Quiz
  // --------------------------------------------------------------------------
  renderQuiz() {
    const mount = document.getElementById('quizMount');
    if (!mount) return;

    const q = siteData[this.lang].quiz;
    const tag = document.getElementById('quizTag');
    if (tag) tag.textContent = q.tag;
    const title = document.getElementById('quizTitle');
    if (title) title.textContent = q.title;
    const sub = document.getElementById('quizSub');
    if (sub) sub.textContent = q.subtitle;

    let contentHtml = '';

    if (this.quizStep === 1) {
      contentHtml = `
        <div class="procedure-quiz-card">
          <div class="washi-tape washi-tape-yellow"></div>
          <div class="quiz-progress-bar-wrap">
            <span class="quiz-step-indicator">${this.lang === 'ru' ? 'Шаг 1 из 2' : 'Step 1 of 2'}</span>
            <span class="kid-note">✨ ${this.lang === 'ru' ? '30 секунд' : '30 seconds'}</span>
          </div>
          <h3 class="quiz-question-title">${q.step1Title}</h3>
          <div class="quiz-options-grid">
            ${q.step1Options.map(opt => `
              <button type="button" class="quiz-option-btn ${this.quizPatientType === opt.id ? 'selected' : ''}" onclick="window.app.handleQuizStep1('${opt.id}')">
                <span class="quiz-option-icon">${opt.icon}</span>
                <span class="quiz-option-text">${opt.text}</span>
                <span class="quiz-option-sub">${opt.sub}</span>
              </button>
            `).join('')}
          </div>
        </div>
      `;
    } else if (this.quizStep === 2) {
      const step2Opts = q.step2Options[this.quizPatientType] || q.step2Options.adult;
      contentHtml = `
        <div class="procedure-quiz-card">
          <div class="washi-tape washi-tape-mint"></div>
          <div class="quiz-progress-bar-wrap">
            <span class="quiz-step-indicator">${this.lang === 'ru' ? 'Шаг 2 из 2' : 'Step 2 of 2'}</span>
            <button type="button" class="btn-link" style="min-height: auto;" onclick="window.app.resetQuiz()">${q.btnRestart}</button>
          </div>
          <h3 class="quiz-question-title">${q.step2Title}</h3>
          <div class="quiz-options-grid">
            ${step2Opts.map(opt => `
              <button type="button" class="quiz-option-btn ${this.quizSelectedService === opt.serviceId ? 'selected' : ''}" onclick="window.app.handleQuizStep2('${opt.serviceId}')">
                <span class="quiz-option-icon">${opt.icon}</span>
                <span class="quiz-option-text">${opt.text}</span>
                <span class="quiz-option-sub">${opt.sub}</span>
              </button>
            `).join('')}
          </div>
        </div>
      `;
    } else if (this.quizStep === 3) {
      const res = q.results[this.quizSelectedService] || q.results["gbt-hygiene"];
      contentHtml = `
        <div class="procedure-quiz-card">
          <div class="washi-tape washi-tape-pink"></div>
          <div class="quiz-progress-bar-wrap">
            <span class="quiz-step-indicator">🎯 ${this.lang === 'ru' ? 'Ваша идеальная процедура:' : 'Your ideal treatment:'}</span>
            <button type="button" class="btn-link" style="min-height: auto;" onclick="window.app.resetQuiz()">${q.btnRestart}</button>
          </div>
          <div class="quiz-result-box">
            <span class="section-tag" style="margin-bottom: 0.5rem;">${this.lang === 'ru' ? 'Рекомендация доктора Сабины' : "Dr. Sabina's Recommendation"}</span>
            <h3 style="font-size: 1.45rem; margin: 0.5rem 0;">${res.title}</h3>
            <div class="quiz-result-price">${res.price} <span style="font-size: var(--text-sm); font-weight: 500; color: var(--text-light);">• ${res.duration}</span></div>
            <p style="font-size: var(--text-base); color: var(--text-muted); max-width: 580px; margin: 0 auto 1.5rem auto;">${res.desc}</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
              <a href="#concierge" class="btn btn-amber" onclick="window.app.setConciergeService('${this.quizSelectedService}')">
                ${q.btnBookResult} →
              </a>
              <a href="https://t.me/${siteConfig.telegramUsername}" target="_blank" rel="noopener noreferrer" class="btn btn-wire">
                ${this.lang === 'ru' ? 'Спросить в Telegram' : 'Ask on Telegram'}
              </a>
            </div>
          </div>
        </div>
      `;
    }

    mount.innerHTML = contentHtml;
  }

  handleQuizStep1(patientType) {
    this.quizPatientType = patientType;
    this.quizStep = 2;
    this.renderQuiz();
  }

  handleQuizStep2(serviceId) {
    this.quizSelectedService = serviceId;
    this.quizStep = 3;
    this.renderQuiz();
  }

  resetQuiz() {
    this.quizStep = 1;
    this.quizPatientType = null;
    this.quizSelectedService = null;
    this.renderQuiz();
  }

  // --------------------------------------------------------------------------
  // Kids 2-Minute Tooth Brushing Game / Timer
  // --------------------------------------------------------------------------
  renderKidsTimer() {
    const mount = document.getElementById('kidsRoutineMount');
    if (!mount) return;

    const k = siteData[this.lang].kids;
    const minutes = Math.floor(this.timerSeconds / 60);
    const seconds = this.timerSeconds % 60;
    const timeStr = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    const totalDuration = 120;
    const elapsed = totalDuration - this.timerSeconds;
    const progressPercent = (elapsed / totalDuration) * 100;
    
    const stageIndex = Math.min(3, Math.floor(elapsed / 30));
    const currentZone = k.timerZones[stageIndex] || k.timerZones[0];

    const isNotStarted = !this.isTimerRunning && this.timerSeconds === 120;
    const isFinished = this.timerSeconds === 0;

    let badgeText = k.timerBadgeReady;
    let instructionText = k.timerInitialTip;

    if (isFinished) {
      badgeText = this.lang === 'ru' ? '🏆 Все 4 зоны сияют!' : '🏆 All 4 zones clean!';
      instructionText = k.timerFinished;
    } else if (!isNotStarted) {
      badgeText = this.lang === 'ru' ? `Зона ${stageIndex + 1} из 4 • ${currentZone.label}` : `Zone ${stageIndex + 1} of 4 • ${currentZone.label}`;
      instructionText = currentZone.tip;
    }

    mount.innerHTML = `
      <div class="kids-brushing-timer">
        <div class="washi-tape washi-tape-yellow"></div>
        <div class="timer-header">
          <span class="timer-title">${k.timerTitle}</span>
          <span class="timer-stage-badge">${badgeText}</span>
        </div>

        <div class="timer-zones-grid">
          ${k.timerZones.map((z, idx) => {
            let statusClass = '';
            if (isFinished || (!isNotStarted && elapsed >= (idx + 1) * 30)) {
              statusClass = 'completed';
            } else if (!isNotStarted && stageIndex === idx) {
              statusClass = 'active';
            }
            return `
              <div class="timer-zone-pill ${statusClass}">
                <span>${z.icon}</span>
                <span>${z.label}</span>
                <span style="font-size: 0.68rem; font-weight: 500; opacity: 0.8;">(30с)</span>
              </div>
            `;
          }).join('')}
        </div>

        <div class="timer-display-wrap">
          <div class="timer-time">${timeStr}</div>
          <div class="timer-instruction">
            ${instructionText}
          </div>
          <div class="timer-bar-track">
            <div class="timer-bar-fill" style="width: ${progressPercent}%;"></div>
          </div>
        </div>

        <div class="timer-controls">
          ${!this.isTimerRunning && !isFinished ? `
            <button type="button" class="btn btn-amber btn-sm" onclick="window.app.startBrushingTimer()">
              ${k.timerStart}
            </button>
          ` : ''}
          ${this.isTimerRunning ? `
            <button type="button" class="btn btn-wire btn-sm" onclick="window.app.pauseBrushingTimer()">
              ${k.timerPause}
            </button>
          ` : ''}
          <button type="button" class="btn btn-wire btn-sm" onclick="window.app.resetBrushingTimer()">
            ${k.timerReset}
          </button>
        </div>
      </div>
    `;
  }

  startBrushingTimer() {
    if (this.isTimerRunning) return;
    this.isTimerRunning = true;
    this.timerInterval = setInterval(() => {
      if (this.timerSeconds > 0) {
        this.timerSeconds -= 1;
        this.renderKidsTimer();
      } else {
        clearInterval(this.timerInterval);
        this.isTimerRunning = false;
        this.renderKidsTimer();
      }
    }, 1000);
    this.renderKidsTimer();
  }

  pauseBrushingTimer() {
    if (!this.isTimerRunning) return;
    clearInterval(this.timerInterval);
    this.isTimerRunning = false;
    this.renderKidsTimer();
  }

  resetBrushingTimer() {
    clearInterval(this.timerInterval);
    this.isTimerRunning = false;
    this.timerSeconds = 120;
    this.renderKidsTimer();
  }

  // --------------------------------------------------------------------------
  // Before / After Comparison Slider (Hardware-Accelerated clip-path & rAF)
  // --------------------------------------------------------------------------
  renderGallery() {
    const mount = document.getElementById('galleryMount');
    if (!mount) return;

    const g = siteData[this.lang].gallery;
    const currentCase = g.cases[this.galleryCaseIndex] || g.cases[0];

    mount.innerHTML = `
      <div class="gallery-tabs">
        ${g.cases.map((c, idx) => `
          <button type="button" class="gallery-tab-btn ${this.galleryCaseIndex === idx ? 'active' : ''}" onclick="window.app.switchGalleryCase(${idx})">
            ${c.tabLabel}
          </button>
        `).join('')}
      </div>

      <div class="atelier-slider-card">
        <div 
          class="atelier-split-viewport" 
          id="splitViewport" 
          role="slider"
          tabindex="0"
          aria-label="${g.title}"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow="${Math.round(this.gallerySplit)}"
          style="--split: ${this.gallerySplit}%;"
        >
          <!-- Base Layer (AFTER image) -->
          <div class="atelier-layer-after">
            <img src="${currentCase.afterImage}" alt="${currentCase.title} - ${g.tagAfter}" draggable="false" width="600" height="480">
            <span class="atelier-tag tag-after">${g.tagAfter}</span>
          </div>

          <!-- Overlay Layer (BEFORE image) -->
          <div class="atelier-layer-before" id="beforeLayer" style="clip-path: inset(0 ${100 - this.gallerySplit}% 0 0); -webkit-clip-path: inset(0 ${100 - this.gallerySplit}% 0 0);">
            <img src="${currentCase.beforeImage}" alt="${currentCase.title} - ${g.tagBefore}" draggable="false" width="600" height="480">
            <span class="atelier-tag tag-before">${g.tagBefore}</span>
          </div>

          <!-- Divider handle -->
          <div class="atelier-divider-line" id="dividerLine" style="left: ${this.gallerySplit}%;">
            <div class="atelier-divider-handle" aria-hidden="true">⇄</div>
          </div>
        </div>

        <div class="atelier-details">
          <div>
            <div class="atelier-slider-hint">
              <span>✦</span> ${g.sliderHint}
            </div>
            <span class="section-tag">${g.badge}</span>
            <h3 style="margin-top: var(--space-2); margin-bottom: var(--space-2);">${currentCase.title}</h3>
            <p style="font-size: var(--text-sm);">${currentCase.description}</p>
            
            <div class="atelier-spec-list">
              <div class="atelier-spec-row">
                <span class="lbl">${g.lblDuration}</span>
                <span class="val">${currentCase.duration}</span>
              </div>
              <div class="atelier-spec-row">
                <span class="lbl">${g.lblResult}</span>
                <span class="val">${currentCase.result}</span>
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap; margin-top: var(--space-4);">
            <a href="#concierge" class="btn btn-solid btn-sm" onclick="window.app.setConciergeService('${currentCase.category}')">
              ${g.btnBook}
            </a>
            <a href="https://t.me/${siteConfig.telegramUsername}" target="_blank" rel="noopener noreferrer" class="btn-link">
              ${g.btnTg}
            </a>
          </div>
        </div>
      </div>
    `;

    this.bindGallerySlider();
  }

  switchGalleryCase(idx) {
    this.galleryCaseIndex = idx;
    this.gallerySplit = 50;
    this.renderGallery();
  }

  bindGallerySlider() {
    const viewport = document.getElementById('splitViewport');
    const beforeLayer = document.getElementById('beforeLayer');
    const dividerLine = document.getElementById('dividerLine');
    if (!viewport || !beforeLayer || !dividerLine) return;

    const setPosition = (percent) => {
      percent = Math.max(0, Math.min(100, percent));
      this.gallerySplit = percent;
      
      if (!this.rafPending) {
        this.rafPending = true;
        window.requestAnimationFrame(() => {
          viewport.style.setProperty('--split', `${percent}%`);
          viewport.setAttribute('aria-valuenow', Math.round(percent));
          beforeLayer.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
          beforeLayer.style.webkitClipPath = `inset(0 ${100 - percent}% 0 0)`;
          dividerLine.style.left = `${percent}%`;
          this.rafPending = false;
        });
      }
    };

    const handlePointer = (clientX) => {
      const rect = viewport.getBoundingClientRect();
      const percent = ((clientX - rect.left) / rect.width) * 100;
      setPosition(percent);
    };

    const onPointerMove = (e) => {
      if (!this.isDragging) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      handlePointer(clientX);
    };

    const stopDrag = () => {
      if (!this.isDragging) return;
      this.isDragging = false;
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', stopDrag);
    };

    const startDrag = (e) => {
      this.isDragging = true;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      handlePointer(clientX);
      window.addEventListener('mousemove', onPointerMove, { passive: true });
      window.addEventListener('mouseup', stopDrag);
      window.addEventListener('touchmove', onPointerMove, { passive: true });
      window.addEventListener('touchend', stopDrag);
    };

    viewport.addEventListener('mousedown', startDrag);
    viewport.addEventListener('touchstart', startDrag, { passive: true });

    viewport.addEventListener('keydown', (e) => {
      let handled = false;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        setPosition(this.gallerySplit - 4);
        handled = true;
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        setPosition(this.gallerySplit + 4);
        handled = true;
      } else if (e.key === 'Home') {
        setPosition(0);
        handled = true;
      } else if (e.key === 'End') {
        setPosition(100);
        handled = true;
      } else if (e.key === 'PageDown') {
        setPosition(this.gallerySplit - 15);
        handled = true;
      } else if (e.key === 'PageUp') {
        setPosition(this.gallerySplit + 15);
        handled = true;
      }

      if (handled) {
        e.preventDefault();
      }
    });
  }

  // --------------------------------------------------------------------------
  // Filterable Macro Gallery Grid & Lightbox
  // --------------------------------------------------------------------------
  renderWorksGrid() {
    const mount = document.getElementById('worksGridMount');
    if (!mount) return;

    const w = siteData[this.lang].worksGrid;
    const tag = document.getElementById('worksTag');
    if (tag) tag.textContent = w.tag;
    const title = document.getElementById('worksTitle');
    if (title) title.textContent = w.title;
    const sub = document.getElementById('worksSub');
    if (sub) sub.textContent = w.subtitle;

    const filters = Object.keys(w.filterLabels).map(key => ({
      key,
      label: w.filterLabels[key]
    }));

    const filteredItems = this.galleryActiveFilter === 'all'
      ? w.items
      : w.items.filter(item => item.category === this.galleryActiveFilter);

    const zoomText = this.lang === 'ru' ? '🔍 Увеличить' : '🔍 Enlarge';

    mount.innerHTML = `
      <div class="gallery-filter-bar">
        ${filters.map(f => `
          <button type="button" class="filter-pill ${this.galleryActiveFilter === f.key ? 'active' : ''}" onclick="window.app.setGalleryFilter('${f.key}')">
            ${f.label}
          </button>
        `).join('')}
      </div>

      <div class="works-grid">
        ${filteredItems.map((item, i) => `
          <div class="work-polaroid" onclick="window.app.openLightboxByIndex(${i})" role="button" tabindex="0" aria-label="${item.title}">
            <div class="washi-tape ${i % 3 === 0 ? 'washi-tape-yellow' : (i % 3 === 1 ? 'washi-tape-mint' : 'washi-tape-pink')}"></div>
            <div class="work-thumb">
              <img src="${item.img}" alt="${item.title}" loading="lazy" decoding="async" width="380" height="240">
              <span class="work-stamp">${item.badge}</span>
              <span class="work-zoom-hint">${zoomText}</span>
            </div>
            <div class="work-body">
              <div>
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
              </div>
              <div class="work-doctor-note">${item.doctorNote}</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  setGalleryFilter(filterKey) {
    this.galleryActiveFilter = filterKey;
    this.renderWorksGrid();
  }

  openLightboxByIndex(index) {
    const w = siteData[this.lang].worksGrid;
    const filteredItems = this.galleryActiveFilter === 'all'
      ? w.items
      : w.items.filter(item => item.category === this.galleryActiveFilter);
    const item = filteredItems[index];
    if (!item) return;
    this.openLightbox(item.img, item.title, item.desc, item.doctorNote);
  }

  openLightbox(imgUrl, title, desc, note) {
    const modal = document.getElementById('lightboxModal');
    if (!modal) return;

    const imgEl = document.getElementById('lightboxImg');
    const titleEl = document.getElementById('lightboxTitle');
    const descEl = document.getElementById('lightboxDesc');
    const noteEl = document.getElementById('lightboxNote');

    if (imgEl) imgEl.src = imgUrl;
    if (titleEl) titleEl.textContent = title;
    if (descEl) descEl.textContent = desc;
    if (noteEl) noteEl.textContent = note;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  bindLightboxEvents() {
    const modal = document.getElementById('lightboxModal');
    if (!modal) return;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.closeLightbox();
      }
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeLightbox();
      }
    });
  }

  // --------------------------------------------------------------------------
  // Treatment Menu
  // --------------------------------------------------------------------------
  renderMenu() {
    const mount = document.getElementById('menuMount');
    if (!mount) return;

    const items = siteData[this.lang].menu.items;
    const btnLabel = siteData[this.lang].menu.btnSelect;

    mount.innerHTML = `
      <div class="menu-ledger-card">
        <div class="washi-tape washi-tape-blue"></div>
        <div class="menu-list">
          ${items.map(item => `
            <div class="menu-item">
              <span class="menu-index">${item.index}</span>
              <div class="menu-title-wrap">
                <h3>${item.title}</h3>
                <span class="duration">⏱️ ${item.duration}</span>
              </div>
              <p class="menu-desc">${item.description}</p>
              <div class="menu-price-action">
                <span class="menu-price">${item.price}</span>
                <a href="#concierge" class="btn btn-wire btn-sm" onclick="window.app.setConciergeService('${item.id}')">
                  ${btnLabel}
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // Scrapbook Patient Reviews
  // --------------------------------------------------------------------------
  renderReviews() {
    const mount = document.getElementById('reviewsMount');
    if (!mount) return;

    const r = siteData[this.lang].reviews;
    const tag = document.getElementById('reviewsTag');
    if (tag) tag.textContent = r.tag;
    const title = document.getElementById('reviewsTitle');
    if (title) title.textContent = r.title;
    const sub = document.getElementById('reviewsSub');
    if (sub) sub.textContent = r.subtitle;

    mount.innerHTML = `
      <div class="reviews-grid">
        ${r.items.map((rev, i) => `
          <div class="review-sticky-note">
            <div class="washi-tape ${i % 2 === 0 ? 'washi-tape-pink' : 'washi-tape-yellow'}"></div>
            <div>
              <div class="review-stars">${rev.stars}</div>
              <p class="review-text">«${rev.text}»</p>
            </div>
            <div class="review-author-wrap">
              <span class="review-author-name">${rev.name}</span>
              <span class="review-badge">${rev.badge}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // Doctor's Handwritten FAQ Accordion
  // --------------------------------------------------------------------------
  renderFaq() {
    const mount = document.getElementById('faqMount');
    if (!mount) return;

    const f = siteData[this.lang].faq;
    const tag = document.getElementById('faqTag');
    if (tag) tag.textContent = f.tag;
    const title = document.getElementById('faqTitle');
    if (title) title.textContent = f.title;
    const sub = document.getElementById('faqSub');
    if (sub) sub.textContent = f.subtitle;

    mount.innerHTML = `
      <div class="faq-accordion-wrap">
        ${f.items.map((item, idx) => `
          <div class="faq-item ${idx === 0 ? 'active' : ''}" id="faqItem-${idx}">
            <button type="button" class="faq-trigger" onclick="window.app.toggleFaq(${idx})">
              <span>${item.q}</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
              <p>${item.a}</p>
              <div class="faq-doctor-note">${item.doctorNote}</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  toggleFaq(idx) {
    const item = document.getElementById(`faqItem-${idx}`);
    if (!item) return;
    item.classList.toggle('active');
  }

  // --------------------------------------------------------------------------
  // Interactive Clinic Locations & Route Cards
  // --------------------------------------------------------------------------
  renderLocations() {
    const mount = document.getElementById('locationsMount');
    if (!mount) return;

    const l = siteData[this.lang].locations;
    const tag = document.getElementById('locationsTag');
    if (tag) tag.textContent = l.tag;
    const title = document.getElementById('locationsTitle');
    if (title) title.textContent = l.title;
    const sub = document.getElementById('locationsSub');
    if (sub) sub.textContent = l.subtitle;

    const currentClinic = l.clinics[this.activeClinicIndex] || l.clinics[0];

    mount.innerHTML = `
      <div class="clinic-switcher-wrap">
        <div class="clinic-tab-btns">
          <button type="button" class="clinic-tab-btn ${this.activeClinicIndex === 0 ? 'active' : ''}" onclick="window.app.switchClinic(0)">
            ${l.tabPetrograd}
          </button>
          <button type="button" class="clinic-tab-btn ${this.activeClinicIndex === 1 ? 'active' : ''}" onclick="window.app.switchClinic(1)">
            ${l.tabNevsky}
          </button>
        </div>

        <div class="clinic-info-card">
          <div class="clinic-info-details">
            <span class="section-tag" style="margin-bottom: 0.5rem;">${currentClinic.metro}</span>
            <h3>${currentClinic.name}</h3>
            <p class="clinic-address-line">📍 ${currentClinic.address}</p>

            <div class="clinic-features-list">
              ${currentClinic.features.map(f => `
                <div class="clinic-feature-item">${f}</div>
              `).join('')}
            </div>

            <div class="clinic-map-actions">
              <a href="${currentClinic.yandexUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-solid btn-sm">
                Яндекс Карты →
              </a>
              <a href="${currentClinic.twoGisUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-wire btn-sm">
                2ГИС Маршрут
              </a>
            </div>
          </div>

          <div class="clinic-photo-frame">
            <img src="${currentClinic.image}" alt="${currentClinic.name}" loading="lazy" decoding="async" width="400" height="280">
          </div>
        </div>
      </div>
    `;
  }

  switchClinic(idx) {
    this.activeClinicIndex = idx;
    this.renderLocations();
  }

  // --------------------------------------------------------------------------
  // Educational Blog
  // --------------------------------------------------------------------------
  renderJournal() {
    const mount = document.getElementById('journalMount');
    if (!mount) return;

    const entries = siteData[this.lang].journal.entries;
    const btnWatch = siteData[this.lang].journal.btnWatch;

    mount.innerHTML = entries.map(entry => `
      <a href="${entry.url}" target="_blank" rel="noopener noreferrer" class="journal-card">
        <div class="journal-cover">
          <img src="${entry.image}" alt="${entry.title}" loading="lazy" decoding="async" width="380" height="200">
          <div class="journal-play-indicator">▶</div>
        </div>
        <div class="journal-body">
          <div>
            <span class="journal-category">${entry.category}</span>
            <h4>${entry.title}</h4>
            <p>${entry.description}</p>
          </div>
          <div style="margin-top: 1rem; font-size: var(--text-xs); font-weight: 700; color: var(--gold-main);">
            ${btnWatch}
          </div>
        </div>
      </a>
    `).join('');
  }

  // --------------------------------------------------------------------------
  // Concierge Reservation Form
  // --------------------------------------------------------------------------
  renderConcierge() {
    const mount = document.getElementById('conciergeMount');
    if (!mount) return;

    const c = siteData[this.lang].concierge;
    const items = siteData[this.lang].menu.items;

    mount.innerHTML = `
      <div class="concierge-card">
        <div class="washi-tape washi-tape-pink"></div>
        <div class="concierge-title">
          <span class="section-tag">${c.tag}</span>
          <h2>${c.title}</h2>
          <p>${c.subtitle}</p>
        </div>

        <form id="conciergeForm" onsubmit="return false;">
          <div class="concierge-grid">
            <div class="input-group">
              <label class="input-label" for="conciergeServiceSelect">${c.lblProcedure}</label>
              <select id="conciergeServiceSelect" class="input-field">
                ${items.map((t, idx) => `
                  <option value="${idx}" ${this.selectedServiceIndex === idx ? 'selected' : ''}>
                    ${t.title} (${t.price})
                  </option>
                `).join('')}
              </select>
            </div>

            <div class="input-group">
              <label class="input-label" for="conciergeTimeWindow">${c.lblTime}</label>
              <select id="conciergeTimeWindow" class="input-field">
                ${c.timeOptions.map((opt, i) => `
                  <option value="${opt}" ${i === 2 ? 'selected' : ''}>${opt}</option>
                `).join('')}
              </select>
            </div>

            <div class="input-group">
              <label class="input-label" for="conciergeName">${c.lblName}</label>
              <input type="text" id="conciergeName" class="input-field" placeholder="${c.phName}" required>
            </div>

            <div class="input-group">
              <label class="input-label" for="conciergeContact">${c.lblContact}</label>
              <input type="text" id="conciergeContact" class="input-field" placeholder="${c.phContact}" required>
            </div>
          </div>

          <div id="formToast" class="form-feedback-toast" role="alert"></div>

          <div style="display: flex; gap: var(--space-4); justify-content: center; flex-wrap: wrap; margin-top: var(--space-8);">
            <button type="button" class="btn btn-amber" id="btnAtelierTelegram" onclick="window.app.submitTelegramBooking()">
              ${c.btnTelegram}
            </button>
            <button type="button" class="btn btn-wire" id="btnAtelierDirect" onclick="window.app.submitDirectBooking()">
              ${c.btnDirect}
            </button>
          </div>
        </form>

        <div id="conciergeConfirmation" style="display: none; text-align: center; padding: 2rem 1rem;">
          <div class="kid-note" style="margin-bottom: 1rem;">🎉 ${c.confirmTitle}</div>
          <h3 style="margin-bottom: 0.5rem;">${c.confirmTitle}</h3>
          <p style="color: var(--text-muted); font-size: var(--text-base); max-width: 500px; margin: 0 auto;">
            ${c.confirmDesc}
          </p>
        </div>
      </div>
    `;

    const selectEl = document.getElementById('conciergeServiceSelect');
    if (selectEl) {
      selectEl.addEventListener('change', (e) => {
        this.selectedServiceIndex = parseInt(e.target.value, 10);
      });
    }
  }

  submitTelegramBooking() {
    const items = siteData[this.lang].menu.items;
    const curService = items[this.selectedServiceIndex] || items[0];
    const name = (document.getElementById('conciergeName')?.value || '').trim() || (this.lang === 'ru' ? 'Пациент' : 'Patient');
    const contact = (document.getElementById('conciergeContact')?.value || '').trim();
    const timeWindow = document.getElementById('conciergeTimeWindow')?.value || '';
    
    const isRu = this.lang === 'ru';
    const text = encodeURIComponent(
      isRu 
        ? `Здравствуйте, доктор Сабина! Хочу записаться на прием:\n\n🦷 Процедура: ${curService.title} (${curService.price})\n⏰ Удобное время: ${timeWindow}\n👤 Имя: ${name}\n` + (contact ? `📱 Контакт: ${contact}\n` : '')
        : `Hello, Dr. Sabina! I would like to book an appointment:\n\n🦷 Treatment: ${curService.title} (${curService.price})\n⏰ Preferred Time: ${timeWindow}\n👤 Name: ${name}\n` + (contact ? `📱 Contact: ${contact}\n` : '')
    );

    window.open(`https://t.me/${siteConfig.telegramUsername}?text=${text}`, '_blank', 'noopener,noreferrer');
  }

  submitDirectBooking() {
    const c = siteData[this.lang].concierge;
    const name = (document.getElementById('conciergeName')?.value || '').trim();
    const contact = (document.getElementById('conciergeContact')?.value || '').trim();
    const toast = document.getElementById('formToast');

    if (!name || !contact) {
      if (toast) {
        toast.className = 'form-feedback-toast error';
        toast.textContent = c.errEmpty;
      }
      return;
    }

    const form = document.getElementById('conciergeForm');
    const confirm = document.getElementById('conciergeConfirmation');
    if (form) form.style.display = 'none';
    if (confirm) confirm.style.display = 'block';
  }

  setConciergeService(serviceIdOrCategory) {
    const items = siteData[this.lang].menu.items;
    const idx = items.findIndex(t => t.id.includes(serviceIdOrCategory) || t.title.toLowerCase().includes(serviceIdOrCategory.toLowerCase()));
    if (idx !== -1) {
      this.selectedServiceIndex = idx;
      const select = document.getElementById('conciergeServiceSelect');
      if (select) select.value = idx;
    }
  }

  renderClinicsFooter() {
    const mount = document.getElementById('clinicsMount');
    if (!mount) return;

    mount.innerHTML = siteData[this.lang].locations.clinics.map(c => `
      <div style="padding-bottom: 1rem; border-bottom: 1px solid rgba(255, 255, 255, 0.1); margin-bottom: 1rem;">
        <h4 style="color: #FFFFFF; font-size: var(--text-base); margin-bottom: 0.25rem;">${c.metro}</h4>
        <p style="color: rgba(255, 255, 255, 0.75); font-size: var(--text-sm); margin-bottom: 0.2rem;">📍 ${c.address}</p>
      </div>
    `).join('');
  }

  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const id = anchor.getAttribute('href');
        if (id === '#') return;
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          this.closeMobileMenu();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
}

// Global Instant Instance
document.addEventListener('DOMContentLoaded', () => {
  window.app = new AtelierApp();
});
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  if (!window.app) window.app = new AtelierApp();
}
