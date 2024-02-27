const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#34495e', '#1abc9c', '#e67e22', '#7f8c8d', '#c0392b'];

const shapes = ['triangle', 'square', 'circle', 'rectangle', 'diamond'];

function changeColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById('shape').style.backgroundColor = randomColor;
}

function changeShape() {
  const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
  document.getElementById('shape').style.borderRadius = getBorderRadius(randomShape);
  document.getElementById('shape').style.clipPath = getClipPath(randomShape);
  document.getElementById('shape').style.transform = 'rotate(' + Math.floor(Math.random() * 360) + 'deg)';
}

function getBorderRadius(shape) {
  switch (shape) {
    case 'circle':
      return '50%';
    default:
      return '0';
  }
}

function getClipPath(shape) {
  switch (shape) {
    case 'triangle':
      return 'polygon(50% 0%, 0% 100%, 100% 100%)';
    case 'square':
      return 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
    case 'rectangle':
      return 'polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)';
    case 'diamond':
      return 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)';
    default:
      return '';
  }
}
