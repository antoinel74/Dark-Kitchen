const darkMode = document.querySelector('.darkmode');


darkMode.addEventListener('click', () => {

    const body = document.body;
    
    if(body.classList.contains('dark')){

        body.classList.add('light')
        body.classList.remove('dark')
        darkMode.textContent = "🌞"
        
    } else if(body.classList.contains('light')){

        body.classList.add('dark')
        body.classList.remove('light')
        darkMode.textContent = "🌙"

    }
})