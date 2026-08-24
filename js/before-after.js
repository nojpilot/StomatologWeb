/**
 * Dr. Sabina Azimova — Atelier Before / After Slider
 * Supports dynamic language switching
 */

import { siteContent } from './data.js';

export class AtelierGallery {
  constructor(mountElement, lang = 'ru') {
    this.mount = mountElement;
    this.lang = lang;
    this.currentCaseIndex = 0;
    this.splitPercent = 50;
    this.isDragging = false;

    this.init();
  }

  setLang(lang) {
    this.lang = lang;
    this.render();
  }

  getCases() {
    return siteContent[this.lang].gallery.cases;
  }

  getGalleryContent() {
    return siteContent[this.lang].gallery;
  }

  init() {
    this.render();
  }

  render() {
    const cases = this.getCases();
    const g = this.getGalleryContent();
    const currentCase = cases[this.currentCaseIndex] || cases[0];

    this.mount.innerHTML = `
      <div class="gallery-tabs">
        ${cases.map((c, idx) => `
          <button class="gallery-tab-btn ${this.currentCaseIndex === idx ? 'active' : ''}" data-case-index="${idx}">
            ${c.tabLabel}
          </button>
        `).join('')}
      </div>

      <div class="atelier-slider-card">
        <!-- Split Viewport -->
        <div class="atelier-split-viewport" id="splitViewport" role="region" aria-label="Сравнение">
          <!-- Before Layer -->
          <div class="atelier-layer">
            <img src="${currentCase.beforeImage}" alt="Before">
            <span class="atelier-tag tag-before">${g.tagBefore}</span>
          </div>

          <!-- After Layer -->
          <div class="atelier-after-layer" id="afterLayer" style="width: ${this.splitPercent}%;">
            <img src="${currentCase.afterImage}" alt="After">
            <span class="atelier-tag tag-after">${g.tagAfter}</span>
          </div>

          <!-- Hairline Divider -->
          <div class="atelier-divider-line" id="dividerLine" style="left: ${this.splitPercent}%;">
            <div class="atelier-divider-handle">✦</div>
          </div>
        </div>

        <!-- Case Information Pane -->
        <div class="atelier-details">
          <div>
            <span class="section-tag" style="margin-bottom: 0.75rem;">${g.badge}</span>
            <h3>${currentCase.title}</h3>
            <p>${currentCase.description}</p>
            
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

          <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
            <a href="#concierge" class="btn btn-solid btn-sm" onclick="window.app.setConciergeService('${currentCase.category}')">
              ${g.btnBook}
            </a>
            <a href="https://t.me/sabina_dental_spb" target="_blank" rel="noopener noreferrer" class="btn-link">
              ${g.btnTg}
            </a>
          </div>
        </div>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    // Tabs
    const tabs = this.mount.querySelectorAll('.gallery-tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const idx = parseInt(tab.dataset.caseIndex, 10);
        this.currentCaseIndex = idx;
        this.splitPercent = 50;
        this.render();
      });
    });

    // Slider Dragging
    const viewport = this.mount.querySelector('#splitViewport');
    const afterLayer = this.mount.querySelector('#afterLayer');
    const dividerLine = this.mount.querySelector('#dividerLine');

    if (!viewport) return;

    const moveSplit = (e) => {
      if (!this.isDragging) return;
      const rect = viewport.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      let percent = ((clientX - rect.left) / rect.width) * 100;
      percent = Math.max(0, Math.min(100, percent));
      
      this.splitPercent = percent;
      afterLayer.style.width = `${percent}%`;
      dividerLine.style.left = `${percent}%`;
    };

    const stopDrag = () => {
      this.isDragging = false;
      window.removeEventListener('mousemove', moveSplit);
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('touchmove', moveSplit);
      window.removeEventListener('touchend', stopDrag);
    };

    const startDrag = (e) => {
      this.isDragging = true;
      moveSplit(e);
      window.addEventListener('mousemove', moveSplit);
      window.addEventListener('mouseup', stopDrag);
      window.addEventListener('touchmove', moveSplit, { passive: true });
      window.addEventListener('touchend', stopDrag);
    };

    viewport.addEventListener('mousedown', startDrag);
    viewport.addEventListener('touchstart', startDrag, { passive: true });
  }
}
