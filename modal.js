/* ============================================================
   MAIN MODAL — OPEN / CLOSE
   ============================================================ */
const modal = document.getElementById('modal');
const startBtn = document.getElementById('startBtn');
const closeBtn = document.getElementById('modalClose');
const backdrop = document.getElementById('modalBackdrop');

function openModal() {
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  const xpFill = document.querySelector('.profile__xp-fill');
  if (xpFill) xpFill.classList.add('animate');
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

startBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

/* ============================================================
   SETTINGS MODAL — OPEN / CLOSE
   ============================================================ */
const settingsModal = document.getElementById('settingsModal');
const settingsBtn = document.getElementById('settingsBtn');
const settingsCloseBtn = document.getElementById('settingsModalClose');
const settingsBackdrop = document.getElementById('settingsModalBackdrop');

function openSettingsModal() {
  settingsModal.classList.add('is-open');
  settingsModal.setAttribute('aria-hidden', 'false');
  // Sync active language option
  document.querySelectorAll('.lang-option').forEach((btn) => {
    btn.classList.toggle('lang-option--active', btn.dataset.lang === getCurrentLang());
  });
}

function closeSettingsModal() {
  settingsModal.classList.remove('is-open');
  settingsModal.setAttribute('aria-hidden', 'true');
}

settingsBtn.addEventListener('click', openSettingsModal);
settingsCloseBtn.addEventListener('click', closeSettingsModal);
settingsBackdrop.addEventListener('click', closeSettingsModal);

/* ============================================================
   KEYBOARD CLOSE
   ============================================================ */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (modal.classList.contains('is-open')) closeModal();
    if (settingsModal.classList.contains('is-open')) closeSettingsModal();
  }
});

/* ============================================================
   TAB NAVIGATION
   ============================================================ */
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    tabBtns.forEach((b) => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    tabPanels.forEach((p) => p.classList.remove('active'));

    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    document.getElementById('tab-' + target).classList.add('active');
  });
});

/* ============================================================
   LANGUAGE OPTIONS (Settings modal)
   ============================================================ */
document.querySelectorAll('.lang-option').forEach((btn) => {
  btn.addEventListener('click', () => {
    setLang(btn.dataset.lang);
  });
});

/* ============================================================
   QUEST LOG — PROJECT LIST
   ============================================================ */
const questList = document.getElementById('questList');
const questDetail = document.getElementById('questDetail');
let _selectedProjectId = null;

function renderQuestList() {
  const projects = getProjects();
  questList.innerHTML = '';

  projects.forEach((project) => {
    const li = document.createElement('li');
    li.className = 'quest-list__item';
    li.dataset.id = project.id;
    li.innerHTML = `
      <span class="quest-list__title">${project.title}</span>
      <span class="quest-list__date">${project.date}</span>
    `;
    li.addEventListener('click', () => selectProject(project.id));
    questList.appendChild(li);
  });

  // Re-select the previously selected project (or first)
  const idToSelect = _selectedProjectId || projects[0].id;
  selectProject(idToSelect);
}

function selectProject(id) {
  const projects = getProjects();
  const project = projects.find((p) => p.id === id);
  if (!project) return;

  _selectedProjectId = id;

  document.querySelectorAll('.quest-list__item').forEach((item) => {
    item.classList.toggle('active', item.dataset.id === id);
  });

  const stackRows = Object.entries(project.stack)
    .map(
      ([key, val]) => `
      <div class="stack-group">
        <span class="stack-group__key">${key}</span>
        <span class="stack-group__value">${val}</span>
      </div>
    `,
    )
    .join('');

  questDetail.innerHTML = `
    <h3 class="quest-detail__title">${project.title}</h3>
    <div class="quest-detail__meta">
      <span class="quest-detail__date">${project.date}</span>
      <a class="quest-detail__link"
         href="https://${project.link}"
         target="_blank"
         rel="noopener">${project.link} →</a>
    </div>
    <div class="quest-detail__hr"></div>
    <p class="quest-detail__desc">${project.description}</p>
    <p class="quest-detail__stack-label">Tech Stack</p>
    ${stackRows}
  `;
}

// Initial render
renderQuestList();

// Re-render when language changes
document.addEventListener('langchange', renderQuestList);
