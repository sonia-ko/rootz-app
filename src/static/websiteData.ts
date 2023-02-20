export const websiteNavigation = [
  { title: 'Home', path: '/' },
  { title: 'Our mission', path: '/our-mission' },
  { title: 'Places', path: '/places' },
  { title: 'Team', path: '/team' },
];

export const sideNavigation = [{ title: 'Apply', path: '/apply' }];

export const numberOfMembers = '29 128';

export const accordionQuestions = [
  {
    question: 'What can I do to protect our planet?',
    answer:
      'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
  },
  {
    question: 'How to save nature ecology?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi facere sequiofficiis laborum magnam enim, quae consequuntur reprehenderit quasi ut earum deleniti vel.',
  },
  {
    question: 'What is nature conservation?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi facere sequiofficiis laborum magnam enim, quae consequuntur reprehenderit quasi ut earum deleniti vel.',
  },
];

interface SpcialDataProps {
  service: 'twitter' | 'facebook' | 'linkedin';
  link: string;
}
export const socialData: SpcialDataProps[] = [
  { service: 'twitter', link: 'https://twitter.com' },
  { service: 'facebook', link: 'https://facebook.com' },
  { service: 'linkedin', link: 'https://linkedin.com' },
];
