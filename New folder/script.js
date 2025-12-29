const smileSvg = document.getElementById('amazon-smile');
const paths = smileSvg.querySelectorAll('path');

smileSvg.addEventListener('click', () => {
  // Generate a random bright color
  const randomColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
  
  paths.forEach(path => {
    path.style.fill = randomColor;
  });

  // Reset to original blue after 1.5 seconds
  setTimeout(() => {
    paths.forEach(path => {
      path.style.fill = "#33a1de";
    });
  }, 1500);
});