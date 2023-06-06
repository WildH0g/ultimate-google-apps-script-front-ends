import copyToClipboard from './copyToClipboard';
import scrollTo from './scrollTo';
import Navigo from 'navigo';

const root = ['localhost', '127.0.0.1'].includes(window.location.hostname)
  ? '/'
  : '/userCodeAppPanel';
const router = new Navigo(root);

router.on({
  '/': () => {
    router.resolve('/emojis');
  },
  '/:page': (match) => {
    const { page } = match.data;
    scrollTo(page);
  },
});

export default function clickHandler(e) {
  const { target } = e;
  const classList = [...target.classList];
  const clickRouter = {
    emoji: copyToClipboard,
  };
  if (classList.includes('emoji')) return clickRouter.emoji.call(this, target);
}
