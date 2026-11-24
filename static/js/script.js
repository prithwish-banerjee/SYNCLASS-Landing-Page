document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabs button');
    const walks = document.querySelectorAll('.walk');

    tabs.forEach(tab => tab.addEventListener('click', () => {
        tabs.forEach(t => t.setAttribute('aria-selected', t === tab));
        walks.forEach(w => { w.hidden = w.dataset.group !== tab.dataset.group; });
    }));

    walks.forEach(walk => {
        const shot = walk.querySelector('.shot img');
        const steps = walk.querySelectorAll('.steps button');
        steps.forEach(step => step.addEventListener('click', () => {
            steps.forEach(s => s.classList.toggle('on', s === step));
            shot.src = window.DEMO_BASE + step.dataset.img + '.webp';
            shot.alt = step.dataset.alt;
        }));
    });

    const yr = document.getElementById('yr');
    if (yr) yr.textContent = new Date().getFullYear();
});
