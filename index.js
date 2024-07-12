// use addEvevntListener
document.querySelector(".toggle-mode").addEventListener("click", function(){
    var buttonText = document.querySelector(".toggle-mode").innerHTML;

    if (buttonText === "Dark mode") {
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        // change buttonText to Light mode
        document.querySelector(".toggle-mode").innerHTML = "Light mode";
    } else if (buttonText === "Light mode") {
        document.querySelector("html").setAttribute("data-bs-theme", "light");
         // change buttonText to Dark mode
         document.querySelector(".toggle-mode").innerHTML = "Dark mode";

    }

});