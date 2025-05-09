var typed= new Typed(".text",{
    strings: ["Front-End Developer", "Wordpress Expert"],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 200,
    loop:true
});


const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Subject: ${subject.value}<br> Message: ${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "jaberi51247@gmail.com",
        Password : "6C81D9949C0AFFE44E39EA2237AA18C86345",
        To : 'jaberi51247@gmail.com',
        From : "jaberi51247@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message =>{
        if(message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Your message sent successfully!",
                icon: "success"
              });
        }
      }
    );
}
form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
 });