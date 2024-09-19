const form = document.getElementById("resumeform") as HTMLFormElement;
const resumeDisplay = document.getElementById("resume_display") as HTMLDivElement;

// handle to submit
form.addEventListener(`submit`, (event : Event)=>{
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
       <h2><b>Editable-Resume </b></h2>

       <h3>Personal Information:</h3>
       <p>Name :       <span contanteditable="true"> ${name}</span> </p> 
       <p>Email :      <span contanteditable="true"> ${email}</span></p> 
       <p>Phone :      <span contanteditable="true"> ${phone}</span></p>
       <p>Address :    <span contanteditable="true"> ${address}</span></p>

       <h2>Education</h2>
       <p>School-Name :  <span contanteditable="true">${schoolname}</span> </p>
       <p>Pass-Out :     <span contanteditable="true">${schoolcompletion}</span> </p>
       <p>Collage Name:  <span contanteditable="true">${collagename}</span> </p>
       <p>Pass-Out :     <span contanteditable="true">${collagecompletion}</span> </p>
       <p>Universty Name:<span contanteditable="true">${uniname}</span> </p>
       <p>Pass-Out :     <span contanteditable="true">${unicompletion}</span> </p>

       <h2>Work Experience</h2>

       <p>Job-Title :    <span contanteditable="true">${jobtitle}</span> </p>
       <p>company :      <span contanteditable="true">${company}</span> </p>
       <p>Worked-Years:  <span contanteditable="true">${yearsworked}</span> </p>

       <h2>Skills</h2>
       <p>Skills :       <span contanteditable="true">${skills}</span> </p>
    `


    //Display the generated resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML =resume
    }else{
        console.error("The resume display element is missing")
    }
})