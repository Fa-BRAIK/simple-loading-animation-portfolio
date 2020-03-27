const removeLoadingAnimation = function() {
    // I've called this function to pretend that 
    // we are loading from the server 
    window.setTimeout(function() {
        let targetedDiv = document.querySelector('#loader--bg')
        let fadeIn = setInterval(function() {
            // check if the opacity style is set 
            // for the element first
            if (!targetedDiv.style.opacity)
                targetedDiv.style.opacity = 1
            
            if (targetedDiv.style.opacity > 0) 
                targetedDiv.style.opacity -= 0.1
            else 
                clearInterval(fadeIn)
        }, 10)
    }, 2000) 
}