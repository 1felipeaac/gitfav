const searchButton = document.querySelector("#search-button")
const favIconButton = document.querySelector("#search-button svg path")
const spanButton = document.querySelector("#search-button span")

export function eventsHover(){
    searchButton.addEventListener("mouseenter", function(){
        favIconButton.setAttribute("fill", "#065E7C")
        spanButton.style.color = "#065E7C"
        searchButton.style.background = "white"
    })
    searchButton.addEventListener("mouseleave", function(){
        favIconButton.setAttribute("fill", "white")
        spanButton.style.color = "white"
        searchButton.style.background = "#065E7C"
    })
}

