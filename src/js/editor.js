const radiusInput = document.getElementById('radius');
const paddingInput = document.getElementById('padding');
const preview = document.getElementById('preview');

function update() {
    document.documentElement.style.setProperty('--radius', radiusInput.value + 'px');
    document.documentElement.style.setProperty('--padding', paddingInput.value + 'px');
    document.getElementById('r-val').textContent = radiusInput.value;
    document.getElementById('p-val').textContent = paddingInput.value;
}

radiusInput.addEventListener('input', update);
paddingInput.addEventListener('input', update);