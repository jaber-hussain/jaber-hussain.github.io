var typed= new Typed(".text",{
    strings: ["GoHighLevel(GHL) Expert", "Wordpress Expert"],
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

 let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  const screenWidth = window.innerWidth;

  if (screenWidth > 768) { // Only apply header hide/show on larger screens
      if (currentScroll > lastScroll && currentScroll > 100) {
          // Scroll down
          header.style.transform = 'translateY(-100%)';
      } else if (currentScroll < lastScroll) {
          // Scroll up
          header.style.transform = 'translateY(0)';
      }

      header.style.transition = 'transform 0.3s ease-in-out';
      lastScroll = currentScroll;
  } else {
      // Always keep header visible on mobile
      header.style.transform = 'translateY(0)';
  }
});


const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close the menu when any nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});
