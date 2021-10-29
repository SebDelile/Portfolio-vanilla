import { socialMediaData } from "../data/socialMediaData.js";

const langs = ['fr','en'];

export const Header = () => {
  const header = document.querySelector('.header');
  const name = document.createElement('p');
  name.textContent = 'Sébastien Delile';
  name.classList.add('header__name');
  const job = document.createElement('p');
  job.textContent = '− développeur react.js';
  job.classList.add('header__job');
  const socialIconList = document.createElement('div');
  socialIconList.classList.add('header__social-media__list');
  socialMediaData.forEach(media => {
    const link = document.createElement('a');
    link.classList.add('header__social-media__link');
    link.href = media.url;
    link.ariaLabel = media.infobulle;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    const icon = document.createElement('img');
    icon.classList.add('header__social-media__icon');
    icon.src = media.icon;
    icon.alt = media.name + ' icon';
    link.appendChild(icon);
    socialIconList.appendChild(link);
  });
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
  header.appendChild(socialIconList);
  header.appendChild(langSelection);
}