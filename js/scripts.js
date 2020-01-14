$(document).ready(function(){

    function themeStorageHandler(){
        // pridobimo temo iz lokalnega pomnilnika, če je nastavljena. Služi nam, da ob reload-u ostane ista thema.
        let storageTheme = localStorage.getItem('theme');

        if (storageTheme != null){
            document.body.setAttribute('data-theme', storageTheme);
        }
    }

    function themeSwitcher(){
        var themeDefault = document.querySelector('#default');
        var themeBlue = document.querySelector('#blue');
        var themeGreen = document.querySelector('#green');

        //var root = document.querySelector(':root');

        themeDefault.addEventListener('click', (e)=>{
            document.body.setAttribute('data-theme', 'default');
            localStorage.setItem('theme', 'default');
            //root.style.setProperty('--default-theme', 'rrr');
        });

        themeBlue.addEventListener('click', (e)=>{
            document.body.setAttribute('data-theme', 'blue');
            localStorage.setItem('theme', 'blue');
        });
    
        themeGreen.addEventListener('click', (e)=>{
            document.body.setAttribute('data-theme', 'green');
            localStorage.setItem('theme', 'green');
        });
    }

    themeStorageHandler();
    themeSwitcher();

});