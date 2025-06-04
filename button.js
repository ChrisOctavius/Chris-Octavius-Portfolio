
//clicked link
    const press = document.querySelector(".about-butt-1");
    const clicked_link = document.getElementById("hire-me-btn");

    press.addEventListener("click", () => {
      clicked_link.click();
    });

    const press_button = document.querySelector(".about-butt-2");
    const go_to = document.querySelector(".mygithublink");

    press_button.addEventListener("click", () => {
      go_to.click();
    });


    const touched = document.querySelector(".message-link");
    const visit = document.querySelector(".github-link");

    const touched_button = document.querySelector(".butt-1");
    const touched_button_2 =document.querySelector(".butt-2");

    touched_button.addEventListener("click", () => {
        touched.click();
    });

    touched_button_2.addEventListener("click", () => {
        visit.click();
    });

    const portfolio_touched = document.querySelector(".view-code-1");
    const ngo_touched = document.querySelector(".view-code-2");
    const movie_touched = document.querySelector(".view-code-3");

    const portfolio_in = document.querySelector(".portfolio-own");
    const ngo_in = document.querySelector(".ngo-own");
    const movie_in = document.querySelector(".movie-own");

    portfolio_touched.addEventListener("click", () => {
      portfolio_in.click();
    });

    ngo_touched.addEventListener("click", () => {
      ngo_in.click();
    });

    movie_touched.addEventListener("click", () => {
      movie_in.click();
    });