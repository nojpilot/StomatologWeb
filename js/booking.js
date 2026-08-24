/**
 * Dr. Sabina Azimova — Atelier Concierge Reservation & Telegram Bridge
 * Supports dynamic language switching
 */

import { siteContent, siteConfig } from './data.js';

export class AtelierConcierge {
  constructor(mountElement, lang = 'ru') {
    this.mount = mountElement;
    this.lang = lang;
    this.selectedServiceIndex = 0;
    this.init();
  }

  setLang(lang) {
    this.lang = lang;
    this.render();
  }

  getConciergeContent() {
    return siteContent[this.lang].concierge;
  }

  getMenuItems() {
    return siteContent[this.lang].menu.items;
  }

  init() {
    this.render();
  }

  render() {
    const c = this.getConciergeContent();
    const items = this.getMenuItems();
    const selectedService = items[this.selectedServiceIndex] || items[0];

    this.mount.innerHTML = `
      <div class="concierge-card">
        <div class="concierge-title">
          <span class="section-tag">${c.tag}</span>
          <h2>${c.title}</h2>
          <p>${c.subtitle}</p>
        </div>

        <form id="conciergeForm" onsubmit="return false;">
          <div class="concierge-grid">
            <div>
              <label style="display: block; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-light); margin-bottom: 0.5rem;">${c.lblProcedure}</label>
              <select id="conciergeServiceSelect" class="input-field">
                ${items.map((t, idx) => `
                  <option value="${idx}" ${this.selectedServiceIndex === idx ? 'selected' : ''}>
                    ${t.title} (${t.price})
                  </option>
                `).join('')}
              </select>
            </div>

            <div>
              <label style="display: block; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-light); margin-bottom: 0.5rem;">${c.lblTime}</label>
              <select id="conciergeTimeWindow" class="input-field">
                ${c.timeOptions.map((opt, i) => `
                  <option value="${opt}" ${i === 2 ? 'selected' : ''}>${opt}</option>
                `).join('')}
              </select>
            </div>

            <div>
              <label style="display: block; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-light); margin-bottom: 0.5rem;">${c.lblName}</label>
              <input type="text" id="conciergeName" class="input-field" placeholder="${c.phName}" required>
            </div>

            <div>
              <label style="display: block; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-light); margin-bottom: 0.5rem;">${c.lblContact}</label>
              <input type="text" id="conciergeContact" class="input-field" placeholder="${c.phContact}" required>
            </div>
          </div>

          <div style="display: flex; gap: 1.25rem; justify-content: center; flex-wrap: wrap; margin-top: 2.5rem;">
            <button type="button" class="btn btn-solid" id="btnAtelierTelegram">
              ${c.btnTelegram}
            </button>
            <button type="button" class="btn btn-wire" id="btnAtelierDirect">
              ${c.btnDirect}
            </button>
          </div>
        </form>

        <div id="conciergeConfirmation" style="display: none; text-align: center; padding-top: 2rem;">
          <h3 style="margin-bottom: 0.5rem;">${c.confirmTitle}</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem;">
            ${c.confirmDesc}
          </p>
        </div>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    const serviceSelect = this.mount.querySelector('#conciergeServiceSelect');
    if (serviceSelect) {
      serviceSelect.addEventListener('change', (e) => {
        this.selectedServiceIndex = parseInt(e.target.value, 10);
      });
    }

    const btnTelegram = this.mount.querySelector('#btnAtelierTelegram');
    if (btnTelegram) {
      btnTelegram.addEventListener('click', () => {
        const items = this.getMenuItems();
        const curService = items[this.selectedServiceIndex] || items[0];
        const name = this.mount.querySelector('#conciergeName').value.trim() || (this.lang === 'ru' ? 'Пациент' : 'Patient');
        const contact = this.mount.querySelector('#conciergeContact').value.trim() || '';
        const timeWindow = this.mount.querySelector('#conciergeTimeWindow').value;
        
        const isRu = this.lang === 'ru';
        const text = encodeURIComponent(
          isRu 
            ? `Здравствуйте, доктор Сабина! Хочу записаться на прием:\n\n🦷 Процедура: ${curService.title} (${curService.price})\n⏰ Удобное время: ${timeWindow}\n👤 Имя: ${name}\n` + (contact ? `📱 Контакт: ${contact}\n` : '')
            : `Hello, Dr. Sabina! I would like to book an appointment:\n\n🦷 Treatment: ${curService.title} (${curService.price})\n⏰ Preferred Time: ${timeWindow}\n👤 Name: ${name}\n` + (contact ? `📱 Contact: ${contact}\n` : '')
        );

        window.open(`https://t.me/${siteConfig.telegramUsername}?text=${text}`, '_blank', 'noopener,noreferrer');
      });
    }

    const btnDirect = this.mount.querySelector('#btnAtelierDirect');
    if (btnDirect) {
      btnDirect.addEventListener('click', () => {
        const name = this.mount.querySelector('#conciergeName').value.trim();
        const contact = this.mount.querySelector('#conciergeContact').value.trim();
        if (!name || !contact) {
          alert(this.lang === 'ru' ? 'Пожалуйста, укажите ваше имя и контактные данные.' : 'Please enter your name and contact details.');
          return;
        }
        this.mount.querySelector('#conciergeForm').style.display = 'none';
        this.mount.querySelector('#conciergeConfirmation').style.display = 'block';
      });
    }
  }

  setService(serviceIdOrCategory) {
    const items = this.getMenuItems();
    const idx = items.findIndex(t => t.id.includes(serviceIdOrCategory) || t.title.toLowerCase().includes(serviceIdOrCategory.toLowerCase()));
    if (idx !== -1) {
      this.selectedServiceIndex = idx;
      const select = this.mount.querySelector('#conciergeServiceSelect');
      if (select) select.value = idx;
    }
  }
}
