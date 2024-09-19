const toggle_button1 = document.getElementById("toggle-button") as HTMLButtonElement;
const skill_section2 = document.getElementById("skill") as HTMLElement;

toggle_button1.addEventListener("click", ()=>{
    if (skill_section2.style.display === "none") {
        skill_section2.style.display = "flex"
    }
    else{
        skill_section2.style.display = "none"
    }
})