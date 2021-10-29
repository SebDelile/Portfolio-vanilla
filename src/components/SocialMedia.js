import { socialMediaData } from "../data/socialMediaData.js";

export const SocialMedia = () => {
  const socialMedia = document.createElement('div');
  socialMedia.classList.add('social-media');
  socialMediaData.forEach(media => {
    const link = document.createElement('a');
    link.classList.add('social-media__link');
    link.href = media.url;
    link.ariaLabel = media.infobulle;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    const icon = document.createElement('img');
    icon.classList.add('social-media__icon');
    icon.src = media.icon;
    icon.alt = media.name + ' icon';
    link.appendChild(icon);
    socialMedia.appendChild(link);
  });
  return socialMedia;
}