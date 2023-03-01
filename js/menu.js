
export default function toggleMenu(){
     const btnMobile = document.getElementById('btn-mobile');
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')

    btnMobile.addEventListener('click', toggleMenu );
}

