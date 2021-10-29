import { SocialMedia } from './socialMedia.js';

export const Footer = () => {
  const footer = document.querySelector('.footer');
  const recipe = document.createElement('p');
  recipe.classList.add('footer__recipe');
  recipe.textContent = 'Page faite par mes soins en vanilla HTML/CSS/JS.';
  const disclaimer = document.createElement('p');
  disclaimer.classList.add('footer__disclaimer');
  disclaimer.textContent = '2021 - Tous droits réservés.';
  const socialMedia = SocialMedia();
  socialMedia.classList.add('footer__social-media');
  footer.appendChild(recipe);
  footer.appendChild(disclaimer);
  footer.appendChild(socialMedia);
}