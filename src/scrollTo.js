export default function scrollTo(target) {
  const el = document.getElementById(target.dataset.category);
  if (null === el) return;
  el.scrollIntoView();
}
