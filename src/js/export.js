document.getElementById('export').addEventListener('click', () => {
    const css = `.preview-box { border-radius: ${document.documentElement.style.getPropertyValue('--radius')}; padding: ${document.documentElement.style.getPropertyValue('--padding')}; }`;
    const blob = new Blob([css], { type: 'text/css' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'theme.css';
    a.click();
});