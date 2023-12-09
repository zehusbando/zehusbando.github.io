window.addEventListener("load", () => {
    const loader = document.querySelector(".loader")
    loader.classList.add("loader--hidden")

    loader.classList.add(".loader").addEventListener("transitionend", () => {

        document.body.removeChild(loader)
        
    });

});
