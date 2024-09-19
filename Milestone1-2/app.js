var toggle_button1 = document.getElementById("toggle-button");
var skill_section2 = document.getElementById("skill");
toggle_button1.addEventListener("click", function () {
    if (skill_section2.style.display === "none") {
        skill_section2.style.display = "flex";
    }
    else {
        skill_section2.style.display = "none";
    }
});
