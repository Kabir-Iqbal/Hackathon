var form = document.getElementById("resumeform");
var resumeDisplay = document.getElementById("resume_display");
// handle to submit
form.addEventListener("submit", function (event) {
    event.preventDefault(); //preven page reloded
    //collect input values 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var schoolname = document.getElementById("schoolname").value;
    var schoolcompletion = document.getElementById("schoolcompletion").value;
    var collagename = document.getElementById("collagename").value;
    var collagecompletion = document.getElementById("collagecompletion").value;
    var uniname = document.getElementById("uniname").value;
    var unicompletion = document.getElementById("unicompletion").value;
    var jobtitle = document.getElementById("jobtitle").value;
    var company = document.getElementById("company").value;
    var yearsworked = document.getElementById("yearsworked").value;
    var skills = document.getElementById("skills").value;
    //generate rezume dynamicaly
    var resume = "\n       <h2><b>Editable-Resume </b></h2>\n\n       <h3>Personal Information:</h3>\n       <p>Name :       <span contanteditable=\"true\"> ".concat(name, "</span> </p> \n       <p>Email :      <span contanteditable=\"true\"> ").concat(email, "</span></p> \n       <p>Phone :      <span contanteditable=\"true\"> ").concat(phone, "</span></p>\n       <p>Address :    <span contanteditable=\"true\"> ").concat(address, "</span></p>\n\n       <h2>Education</h2>\n       <p>School-Name :  <span contanteditable=\"true\">").concat(schoolname, "</span> </p>\n       <p>Pass-Out :     <span contanteditable=\"true\">").concat(schoolcompletion, "</span> </p>\n       <p>Collage Name:  <span contanteditable=\"true\">").concat(collagename, "</span> </p>\n       <p>Pass-Out :     <span contanteditable=\"true\">").concat(collagecompletion, "</span> </p>\n       <p>Universty Name:<span contanteditable=\"true\">").concat(uniname, "</span> </p>\n       <p>Pass-Out :     <span contanteditable=\"true\">").concat(unicompletion, "</span> </p>\n\n       <h2>Work Experience</h2>\n\n       <p>Job-Title :    <span contanteditable=\"true\">").concat(jobtitle, "</span> </p>\n       <p>company :      <span contanteditable=\"true\">").concat(company, "</span> </p>\n       <p>Worked-Years:  <span contanteditable=\"true\">").concat(yearsworked, "</span> </p>\n\n       <h2>Skills</h2>\n       <p>Skills :       <span contanteditable=\"true\">").concat(skills, "</span> </p>\n    ");
    //Display the generated resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resume;
    }
    else {
        console.error("The resume display element is missing");
    }
});
