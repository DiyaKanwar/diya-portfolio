/* ── CURSOR ── */
const dot  = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');

document.addEventListener('mousemove', e => {
  dot.style.left  = e.clientX + 'px';
  dot.style.top   = e.clientY + 'px';
  ring.style.left = e.clientX + 'px';
  ring.style.top  = e.clientY + 'px';
});

document.querySelectorAll('a, button, label').forEach(el => {
  el.addEventListener('mouseenter', () => {
    ring.style.width  = '52px';
    ring.style.height = '52px';
    ring.style.borderColor = 'rgba(200,164,142,.7)';
  });
  el.addEventListener('mouseleave', () => {
    ring.style.width  = '32px';
    ring.style.height = '32px';
    ring.style.borderColor = 'rgba(200,164,142,.45)';
  });
});

/* ── NAV SCROLL ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ── LIGHTBOX ── */
const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lbImg');
const lbCaption = document.getElementById('lbCaption');

let allCards   = [];
let currentIdx = 0;

function buildCardList() {
  allCards = Array.from(document.querySelectorAll('.gallery-card'));
}

function openLightbox(btn) {
  buildCardList();
  const card = btn.closest('.gallery-card');
  const img  = card.querySelector('.card-img');
  const name = card.querySelector('.card-name')?.textContent || '';
  const desc = card.dataset.desc || '';
  currentIdx = allCards.indexOf(card);

  lbImg.src            = img.src;
  lbCaption.textContent = name + (desc ? ' — ' + desc : '');
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  if (e && e.target !== lightbox && !e.target.classList.contains('lb-close')) return;
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function shiftLightbox(dir) {
  buildCardList();
  currentIdx = (currentIdx + dir + allCards.length) % allCards.length;
  const card = allCards[currentIdx];
  const img  = card.querySelector('.card-img');
  const name = card.querySelector('.card-name')?.textContent || '';
  const desc = card.dataset.desc || '';
  lbImg.src             = img.src;
  lbCaption.textContent = name + (desc ? ' — ' + desc : '');
}

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') { lightbox.classList.remove('open'); document.body.style.overflow = ''; }
  if (e.key === 'ArrowRight') shiftLightbox(1);
  if (e.key === 'ArrowLeft')  shiftLightbox(-1);
});

/* ── IMAGE UPLOAD ── */
document.getElementById('imageUpload').addEventListener('change', function () {
  const grid = document.getElementById('dynamicGrid');
  Array.from(this.files).forEach((file, i) => {
    const url  = URL.createObjectURL(file);
    const name = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');

    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.dataset.desc = 'Uploaded design — ' + name;
    card.style.animationDelay = (i * 0.06) + 's';

    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${url}" alt="${name}" class="card-img"/>
        <div class="card-overlay">
          <div class="card-info">
            <div class="card-tag">Design</div>
            <div class="card-name">${name}</div>
          </div>
          <button class="card-expand" onclick="openLightbox(this)">↗</button>
        </div>
      </div>`;

    grid.appendChild(card);
  });
});

/* ── INTERSECTION OBSERVER — staggered fade-in ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = (i * 0.05) + 's';
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.gallery-card').forEach(c => observer.observe(c));
