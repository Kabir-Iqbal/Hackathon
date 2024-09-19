const form = document.getElementById("resumeform") as HTMLFormElement;
const resumeDisplay = document.getElementById("resume_display") as HTMLDivElement;

// handle to submit
form.addEventListener("submit", (event : Event)=>{
    event.preventDefault()  //preven page reloded

    //collect input values 
    const name = (document.getElementById("name")as HTMLInputElement).value
    const email = (document.getElementById("email")as HTMLInputElement).value
    const phone = (document.getElementById("phone")as HTMLInputElement).value
    const address = (document.getElementById("address")as HTMLInputElement).value
    const schoolname = (document.getElementById("schoolname")as HTMLInputElement).value
    const schoolcompletion = (document.getElementById("schoolcompletion")as HTMLInputElement).value
    const collagename = (document.getElementById("collagename")as HTMLInputElement).value
    const collagecompletion = (document.getElementById("collagecompletion")as HTMLInputElement).value
    const uniname = (document.getElementById("uniname")as HTMLInputElement).value
    const unicompletion= (document.getElementById("unicompletion")as HTMLInputElement).value
    const jobtitle = (document.getElementById("jobtitle")as HTMLInputElement).value
    const company = (document.getElementById("company")as HTMLInputElement).value
    const yearsworked= (document.getElementById("yearsworked")as HTMLInputElement).value
    const skills = (document.getElementById("skills")as HTMLInputElement).value

    //generate rezume dynamicaly
    const resume = `
       <h2><b>Resume </b></h2>

       <h3>Personal Information:</h3>
       <p>Name :              ${name}</p> 
       <p>Email :             ${email}</p> 
       <p>Phone :             ${phone}</p>
       <p>Address :           ${address} </p>

       <h2>Education</h2>
       <p>School-Name :          ${schoolname} </p>
       <p>Pass-Out :             ${schoolcompletion} </p>
       <p>Collage Name:          ${collagename} </p>
       <p>Pass-Out :             ${collagecompletion} </p>
       <p>Universty Name:        ${uniname} </p>
       <p>Pass-Out :             ${unicompletion} </p>

       <h2>Work Experience</h2>

       <p>Job-Title :           ${jobtitle} </p>
       <p>company :             ${company} </p>
       <p>Worked-Years:         ${yearsworked} </p>

       <h2>Skills</h2>
       <p>Skills :              ${skills} </p>
    `


    //Display the generated resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML =resume
    }else{
        console.error("The resume display element is missing")
    }
})