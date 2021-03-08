let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
const point = 18;
const svg = document.getElementById('svg');
svg.appendChild(path);
path.setAttribute('d', `m 1 1 ${point} 0 -8 18 z`);
path.setAttribute('fill', 'none');
path.setAttribute('stroke', 'black');