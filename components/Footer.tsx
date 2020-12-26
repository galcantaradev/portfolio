import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faStackOverflow,
  faTwitter
} from '../icons/Icons';

interface FooterItem {
  label: string;
  link: string;
  icon: IconProp;
}

const items: FooterItem[] = [
  {
    icon: faEnvelope,
    link: 'galcantaradev@gmail.com',
    label: 'Email'
  },
  {
    icon: faGithub,
    link: 'https://github.com/galcantaradev',
    label: 'GitHub'
  },
  {
    icon: faInstagram,
    link: 'https://www.instagram.com/galcantaradev/',
    label: 'Instagram'
  },
  {
    icon: faLinkedinIn,
    link: 'https://www.linkedin.com/in/gabriel-alc%C3%A2ntara-4b7890120/',
    label: 'LinkedIn'
  },
  {
    icon: faStackOverflow,
    link: 'https://stackoverflow.com/users/14178125/gabriel-alc%c3%a2ntara',
    label: 'Stack Overflow'
  },
  {
    icon: faTwitter,
    link: 'https://twitter.com/galcantaradev',
    label: 'Twitter'
  }
];

const Footer = () => {
  return (
    <footer className="flex text-center justify-evenly py-5 min-w-screen">
      {items.map((item: FooterItem) => {
        const link = item.label === 'Email' ? `mailto:${item.link}` : item.link;

        return (
          <a
            href={link}
            target="_blank"
            key={item.label}
            title={item.label}
            className="cursor-pointer"
          >
            <FontAwesomeIcon
              icon={item.icon}
              size="lg"
              className="hover:text-gray-300 transition-all"
            />
          </a>
        );
      })}
    </footer>
  );
};

export default Footer;
