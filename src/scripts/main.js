'use strict';

import '../styles/main.scss';

const hamburger = document.getElementById('hamburger');
const menuPanel = document.getElementById('menuPanel');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose = document.getElementById('menuClose');

function openMenu() {
  hamburger.classList.add('open');
  menuPanel.classList.add('open');
  menuOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  hamburger.classList.remove('open');
  menuPanel.classList.remove('open');
  menuOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  if (menuPanel.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

menuClose.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);

document.querySelectorAll('.menu-link').forEach((link) => {
  link.addEventListener('click', closeMenu);
});
