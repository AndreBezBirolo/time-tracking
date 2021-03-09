document.addEventListener("DOMContentLoaded", function(event) {
    function toggleMenu() {
        let button = document.querySelector(".burger-menu"),
            overlay = document.querySelector(".overlay-menu"),
            menu = document.querySelector(".container-menu");

        button.addEventListener("click", function(){
            overlay.classList.add("active");
            menu.classList.add("active");
        });

        function hideMenu() {
            overlay.classList.remove("active");
            menu.classList.remove("active");
        }

        overlay.addEventListener("click", function(){
            hideMenu();
        });

        document.onkeydown = function(evt) {
            evt = evt || window.event;
            if (evt.keyCode === 27) {
                hideMenu();
            }
        };

    }
    toggleMenu();
});