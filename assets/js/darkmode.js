let darkMode = document.querySelector('#darkmode-toggle');


window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    darkMode.checked = false;
    console.log(darkMode.checked);
});


darkMode.addEventListener('click', () => {
    
    console.log(darkMode.checked);

    const body = document.body;
    
    if(!darkMode.checked){

        body.classList.add('light')
        body.classList.remove('dark')
        // darkMode.textContent = "🌞"
        
    } else if(darkMode.checked){

        body.classList.add('dark')
        body.classList.remove('light')
        // darkMode.textContent = "🌙"

    }
})