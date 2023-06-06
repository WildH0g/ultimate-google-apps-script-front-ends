export default function scrollTo(target) {
  const container = document.getElementById('emojis');
  const el = document.getElementById(target);
  if (null === el) return;
  container.scrollTo({
    top: el.offsetTop - 240,
    behavior: 'smooth',
  });
}
