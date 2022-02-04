import { BsPeopleFill } from 'react-icons/bs';
import { MdVideocam } from 'react-icons/md';
import { BiPlanet } from 'react-icons/bi';

export const SIDE_BAR_LINKS = [
  {
    id: 'people',
    name: 'people',
    link: 'people',
    icon: <BsPeopleFill color='red' size='2em' style={{marginRight: ".7rem"}} />,
    text: 'Socialize and meet new people , make lots of friends , make lots memories',
  },
  {
    id: 'movies',
    name: 'movies',
    link: 'films',
    icon: <MdVideocam color='red' size='2em' style={{marginRight: ".7rem"}} />,
    text: 'Why take a picture when you can take pictures and can have a movie!',
  },
  {
    id: 'planets',
    name: 'planets',
    link: 'planets',
    icon: <BiPlanet color='red' size='2em' style={{marginRight: ".7rem"}} />,
    text: 'The world is big, start exploring today, visit new places, see new things !',
  },
];
