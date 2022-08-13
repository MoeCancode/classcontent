export const headerClick = () => {
  const header = document.getElementById('header');
  if (header.style.color === 'blue') {
    header.style.color = 'green';
  } else {
    header.style.color = 'blue';
  }
};
