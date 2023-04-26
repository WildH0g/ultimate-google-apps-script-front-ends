import copyToClipboard from './copyToClipboard';
import scrollTo from './scrollTo';
export default function clickHandler(e) {
  const { target } = e;
  const classList = [...target.classList];
  const clickRouter = {
    emoji: copyToClipboard,
    category: scrollTo,
  };
  if (classList.includes('emoji')) return clickRouter.emoji.call(this, target);
  if (classList.includes('category'))
    return clickRouter.category.call(this, target);
}
