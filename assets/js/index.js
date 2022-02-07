document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#navbar-toggler').addEventListener('click', () => {
        const navBar = document.querySelector('#navbarNavAltMarkup');
        !navBar.classList.contains('show')
            ? navBar.classList.add('show')
            : navBar.classList.remove('show')
    })
})