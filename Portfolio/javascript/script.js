let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

menuIcon.onclick= () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () =>{
    sections.forEach((sec) => {
        let top =window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id")

        if (top >= offset && top < offset +height){
            navlinks.forEach((links)=>{
                links.classList.remove("active");
                document.querySelector("header nav a[href+="+id+"]")
                .classList.add("active");
            });

        }
    });
    let header= document.querySelector("header");

    header.classList.toggle("sticky", window.screenY > 100);

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("ac")
}

//scrollreveol

ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.heading,.home-content h1, .home-sci, .about-content p,.progress span, .progress i', {orgin:'top'});
ScrollReveal().reveal(".about-img,.contact,.textarea-field", {orgin:'bottom'});
ScrollReveal().reveal(".btn-box,.text-animate,.about-content h3,.progressh3,.bar span,.portfolio-box,.input-box" ,{orgin:'left'});
ScrollReveal().reveal(".logo,.home-content p,.title", {orgin:'right'});


const typed =new Typed('.text',{
    strings:['frontend deveoper', 'backend developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
})