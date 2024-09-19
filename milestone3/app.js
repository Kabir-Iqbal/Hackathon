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
    var resume = "\n       <h2><b>Resume </b></h2>\n\n       <h3>Personal Information:</h3>\n       <p>Name :              ".concat(name, "</p> \n       <p>Email :             ").concat(email, "</p> \n       <p>Phone :             ").concat(phone, "</p>\n       <p>Address :           ").concat(address, " </p>\n\n       <h2>Education</h2>\n       <p>School-Name :          ").concat(schoolname, " </p>\n       <p>Pass-Out :             ").concat(schoolcompletion, " </p>\n       <p>Collage Name:          ").concat(collagename, " </p>\n       <p>Pass-Out :             ").concat(collagecompletion, " </p>\n       <p>Universty Name:        ").concat(uniname, " </p>\n       <p>Pass-Out :             ").concat(unicompletion, " </p>\n\n       <h2>Work Experience</h2>\n\n       <p>Job-Title :           ").concat(jobtitle, " </p>\n       <p>company :             ").concat(company, " </p>\n       <p>Worked-Years:         ").concat(yearsworked, " </p>\n\n       <h2>Skills</h2>\n       <p>Skills :              ").concat(skills, " </p>\n    ");
    //Display the generated resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resume;
    }
    else {
        console.error("The resume display element is missing");
    }
});
