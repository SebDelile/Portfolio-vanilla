import { SocialMedia } from './socialMedia.js';

const langs = ['fr','en'];

export const Header = () => {
  const header = document.querySelector('.header');
  const name = document.createElement('p');
  name.textContent = 'Sébastien Delile';
  name.classList.add('header__name');
  const job = document.createElement('p');
  job.textContent = '− développeur react.js';
  job.classList.add('header__job');
  const socialMedia = SocialMedia();
  socialMedia.classList.add('header__social-media');
  const langSelection = document.createElement('select');
  langSelection.classList.add('header__lang-selection')
  langSelection.ariaLabel = 'Sélection de la langue';
  langs.forEach(lang => {
    const option = document.createElement('option');
    option.value = lang;
    option.textContent = lang;
    langSelection.appendChild(option);
  })
  header.appendChild(name);
  header.appendChild(job);
  header.appendChild(socialMedia);
  header.appendChild(langSelection);
}