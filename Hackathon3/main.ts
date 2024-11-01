var form= document.getElementById("resume-form") as HTMLFormElement;
var resumeDisplayElement =document.getElementById("resume-display") as HTMLDivElement


form.addEventListener("submit", (event: Event) => {
    event.preventDefault();


    const name= (document.getElementById("name") as HTMLInputElement). value
    const lastname= (document.getElementById("lastname") as HTMLInputElement). value
    const email= (document.getElementById("email") as HTMLInputElement). value
    const phone = (document.getElementById("phone") as HTMLInputElement). value
    const address = (document.getElementById("address") as HTMLInputElement). value
    const education = (document.getElementById("education") as HTMLInputElement). value
    const experience = (document.getElementById("experience") as HTMLInputElement). value
    const skills = (document.getElementById("skills") as HTMLInputElement). value
  
    
    const resumehtml = `
    
<h2> <b> Resume <b> </h2> 

<h2> First Name: </h2>
<p>${name}</p>

<h2> Last Name: </h2>
<p>${lastname}</p>

<h2> Email Id: </h2>
<p>${email}</p>

<h2> Mobile Number: </h2>
<p>${phone}</p>

<h2> Address: </h2>
<p>${address}</p>

<h2> Education: </h2>
<p>${education}</p>

<h2> Work Experience: </h2>
<p>${experience}</p>

<h2> Skills: </h2>
<p>${skills}</p>



`;


if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumehtml;
} else{
    console.error('The resume display element is missing.')
}

})