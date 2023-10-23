const showDescriptionButtons = document.querySelectorAll(".show-description-btn");

showDescriptionButtons.forEach(button => {
    button.addEventListener("click", function () {
        const movieId = this.getAttribute("data-target");
        const description = document.querySelector(' #movie-list #movie-${$movieId} .moviedescription');
        
        if (description.classList.contains("hidden")) {
            description.classList.remove("hidden");
            this.textContent = "Скрыть";
        } 
        else {
            description.classList.add("hidden");
            this.textContent = "Показать полностью";
        }
    });
});

function getgenre(genreId){
    var movies = document.querySelectorAll(".movie");

    movies.forEach(item=>{
        if(item.getAttribute('data-id').split(',').includes(genreId)){
            item.style.display = 'block';    
        }
        else{
            item.style.display = 'none';
        }
        
    })

}
