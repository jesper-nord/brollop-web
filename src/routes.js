import { Home, RichTextContent, Toastmasters } from './content';

export const routes = {
  home: {
    title: 'Hem',
    content: Home
  },
  information: {
    title: 'Information',
    content: RichTextContent,
    contentId: 'ckc7ylsmg0iir01545re6b3n4'
  },
  toastmasters: {
    title: 'Toastmasters',
    content: Toastmasters,
    contentId: 'ckcgg3gio0d4n0153embbxkp7'
  },
  pictures: {
    title: 'Bilder',
    content: RichTextContent,
    contentId: 'ckcggto6w043w014871is41p0'
  },
  accomondation: {
    title: 'Boende & Hitta hit',
    content: RichTextContent,
    contentId: 'ckc7ywymo0ikz0154g1xb362c'
  },
  rsvp: {
    title: 'O.S.A.',
    content: RichTextContent,
    contentId: 'ckcgfuo5s03to0148x2rbfhd7'
  }
};
