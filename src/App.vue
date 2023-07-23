<template>
  <div class="page">
    <nav class="navbar_custom">
      <a href="#home" class="navbar_title">Liew Kai Le</a>
      <div class="navbar_section">
        <a href="#home" class="home active">Home</a>
        <a href="#about" class="about">About</a>
        <a href="#services" class="services">Services</a>
        <a href="#workExperience" class="workExperience">Work Experience</a>
        <a href="#portfolio" class="portfolio">Portfolio</a>
        <a href="#rating" class="rating">Rating</a>
        <a href="#contact" class="contact">Contact</a>
      </div>
    </nav>
    <div class="page_inner">
      <section id="home">
        <div class="home_empty"></div>
        <div class="home_div reveal_left">
          <p class="description">I'm a</p>
          <p class="description" style="text-decoration: underline;">Freelancer</p>
          <p class="description">as</p>
          <div class="typewriter" id="myTypewriter">
            <h1 class="typewriterText" id="myTypewriterText">Python developer</h1>
          </div>
          <div></div>
        </div>
        <div class="home_empty"></div>
        <div class="home_div reveal_right">
          <img class="profile_pic" src="./assets/profile_pic.jpg" alt="Profile pic" />
        </div>
        <div class="home_empty"></div>
      </section>
      <section id="about">
        <h1 class="title">About</h1>
        <div class="about_div">
          <div class="about_div_inner">
            <p class="about_description reveal">
              Hey there! I got 3 years plus of experience as developer. I like to discover new technologies, especially in software field.
              I switched to freelance and dedicated to <u>Upwork</u>. Feel free to contact me for any exciting project!
            </p>
          </div>
          <div class="about_div_inner">
            <p class="about_description reveal">
              My speciality on programming language is <u>Python, PHP and Vue</u>. I prefer doing web programming than native app programming
              because there is so much possibility in web, also with responsive design.
            </p>
          </div>
        </div>
      </section>
      <section id="services">
        <h1 class="title">Services</h1>
      </section>
      <section id="workExperience">
        <h1 class="title">Work Experience</h1>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: function() {
    return {
      messages: ["PHP developer","Vue developer","Python developer"],
      rank: 0,
      currentHath: "",
    };
  },
  created() {
    document.title = "Liew Kai Le";
  },
  mounted() {
    this.reveal();
    this.active_link();

    this.currentPath = window.location.pathname + "#home";

    window.addEventListener("scroll", this.reveal);
    window.addEventListener("scroll", this.active_link);
    window.addEventListener("scroll", this.change_url);

    // Code for Chrome, Safari and Opera
    document.getElementById("myTypewriter").addEventListener("webkitAnimationEnd", this.changeTxt);

    // Standard syntax
    document.getElementById("myTypewriter").addEventListener("animationend", this.changeTxt);
  },
  methods: {
    changeTxt(){
      let _h1 = document.getElementById("myTypewriterText");
      _h1.style.webkitAnimation = 'none'; // set element animation to none
      setTimeout(() => { // you surely want a delay before the next message appears
          _h1.innerHTML=this.messages[this.rank];
          let speed =3.5*this.messages[this.rank].length/20; // adjust the speed (3.5 is the original speed, 20 is the original string length
          _h1.style.webkitAnimation = 'typing '+speed+'s steps(40, end), blink-caret .75s step-end infinite'; //  switch to the original set of animation      
          (this.rank===this.messages.length-1)?this.rank=0:this.rank++; // if you have displayed the last message from the array, go back to the first one, else go to next message
      }, 1000)
    },
    reveal() {
      var reveals = document.querySelectorAll(".reveal");
      var reveal_lefts = document.querySelectorAll(".reveal_left");
      var reveal_rights = document.querySelectorAll(".reveal_right");

      this.reveal_inner(reveals);
      this.reveal_inner(reveal_lefts);
      this.reveal_inner(reveal_rights);
    },
    reveal_inner(reveals) {
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    },
    active_link() {
        const sections = document.querySelectorAll("section");
        const navA = document.querySelectorAll("nav .navbar_section a");
        var current = "";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
          }
        });

        navA.forEach((a) => {
          a.classList.remove("active");

          if (a.classList.contains(current)) {
            a.classList.add("active");
          }
        });
    },
    change_url() {
      const sections = document.querySelectorAll("section");
      const navA = document.querySelectorAll("nav .navbar_section a");
      var current = "";
      var path = window.location.pathname + "#" + current;
      var changePath = false;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200)
          current = section.getAttribute("id");
        }
      );

      navA.forEach((a) => {
        if (a.classList.contains(current)) {
          path = window.location.pathname + "#" + current;
          if(path != this.currentPath) {
            changePath = true;
          }
        }
      });

      if(changePath == true) {
          console.log("window.location.pathname", path);
          this.currentPath = path;
          window.history.pushState(null, "", this.currentPath);
      }
    },
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap");

* {
  margin: 0;
  font-family: 'Inter', sans-serif;
  scroll-behavior: smooth;
}

.page {
  background: #FAF2DF;
  color: #000;
}

.dark {
  background: #192841;
  color: #FFF;
}

.navbar_custom {
  position: fixed;
  width: 100%;
  display: flex;
  background: #50C878;
  padding-top: 50px;
  padding-bottom: 50px;
  z-index: 1;
}

.navbar_title {
  margin-left: 50px;
  font-size: 50px;
  margin-right: 0;
  text-decoration: none;
  background: linear-gradient(
      to right,
      crimson 20%,
      #0190cd 40%,
      #0575E6 60%,
      #764ada 80%,
      crimson 100%
  );
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 1s linear infinite;
}

@keyframes shine {
    to {
      background-position: 200% center;
    }
  }

.navbar_section {
  margin-left: auto;
  margin-right: 50px;
  margin-top: 25px;
}

.navbar_section > * {
  position: relative;
  display: inline-block;
  margin-left: 20px;
  color: #000;
  overflow: hidden;
  background: linear-gradient(to right, #FAF2DF, #FAF2DF 50%, #000 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 500ms ease;
  text-decoration: none;

}

.navbar_section > *:hover, .navbar_section > *.active {
  background-position: 0 100%;
  cursor: pointer;
}

.page_inner {
  padding-top: 100px;
  z-index: 0;
}

.reveal{
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 1.5s all ease;
}

.reveal.active{
  transform: translateY(0);
  opacity: 1;
}

.reveal_left {
  position: relative;
  transform: translateX(-150px);
  opacity: 0;
  transition: 1.5s all ease;
}

.reveal_right {
  position: relative;
  transform: translateX(150px);
  opacity: 0;
  transition: 1.5s all ease;
}

.reveal_left.active, .reveal_right.active {
  transform: translateX(0);
  opacity: 1;
}

section {
  height: calc(100vh - 200px);
  width: calc(100vw - 97px);
  padding: 80px 40px 0;
  scroll-margin-top: 120px;
}

section#home {
  padding: 100px 40px 0 40px;
  display: flex;
  background-image: url('./assets/sunset.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.home_div {
  width: 30%;
  margin: auto;
}

.home_empty {
  width: 10%;
}

.title {
  font-size: 60px;
}

.description {
  font-size: 45px;
  color: #ECE090;
}

.typewriter {
  display: inline-block;
}

.typewriterText {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  float: left; /* Lean to left */
  font-size: 45px;
  color: #ECE090;
  animation: 
  typing 2.5s steps(30, end),
  blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: blue; }
}

.profile_pic {
  width: 300px;
  height: 300px;
  border-radius: 300px;
  object-fit: cover;
}

section#about {
  background: lightgreen;
}

.about_div {
  display: flex;
}

.about_div_inner {
  width: 45vw;
  margin: 20px 2.5vw 0 0;
}

.about_description {
  font-size: 30px;
}

section#services {
  background: #FF8BA0;
}

section#workExperience {
  background: #598BAf;
}

@media only screen and (max-width: 499px) {
  section {
    width: 100vw;
  }

  section#home {
    width: 120vw;
  }

  .title {
    font-size: 36px;
  }
}

@media only screen and (max-width: 1016px) {
  section {
    height: calc(100vh - 100px);
    scroll-margin-top: 160px;
  }

  section#home {
    flex-direction: column;
    margin: auto;
    padding: 120px 0 0;
  }

  .home_div {
    width: 100%;
    text-align: center;
  }

  .description {
    font-size: 30px;
  }

  .typewriterText {
    font-size: 30px;
  }

  .profile_pic {
    width: 200px;
    height: 200px;
    border-radius: 200px;
  }

  .about_div {
    flex-direction: column;
  }

  .about_div_inner {
    width: 100%;
    margin: 20px 0 0 0;
  }

  .about_description {
    font-size: 20px;
  }

}
</style>
