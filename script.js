console.log("Its Working");

let themeDots = document.getElementsByClassName('theme-dot')

let theme = localStorage.getItem('theme')

if(themeDots== null){
    setThemes('light')
}

else{
    setThemes(theme)
}

for (var i=0 ; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('Option Clicked', mode)
        setThemes(mode)
    })
}

function setThemes(mode){
    if(mode== 'light'){
        document.getElementById('theme-style').href = 'default.css'
    }

    if(mode== 'blue'){
        document.getElementById('theme-style').href = 'blue.css'
    }
    if(mode== 'green'){
        document.getElementById('theme-style').href = 'green.css'
    }
    if(mode== 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
    }
    localStorage.setItem('theme',mode)

}