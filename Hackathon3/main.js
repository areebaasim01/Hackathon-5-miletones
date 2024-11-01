var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var resumehtml = "\n    \n<h2> <b> Resume <b> </h2> \n\n<h2> First Name: </h2>\n<p>".concat(name, "</p>\n\n<h2> Last Name: </h2>\n<p>").concat(lastname, "</p>\n\n<h2> Email Id: </h2>\n<p>").concat(email, "</p>\n\n<h2> Mobile Number: </h2>\n<p>").concat(phone, "</p>\n\n<h2> Address: </h2>\n<p>").concat(address, "</p>\n\n<h2> Education: </h2>\n<p>").concat(education, "</p>\n\n<h2> Work Experience: </h2>\n<p>").concat(experience, "</p>\n\n<h2> Skills: </h2>\n<p>").concat(skills, "</p>\n\n\n\n");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumehtml;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
