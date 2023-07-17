<template>
  <div class="page">
    <div class="navbar_custom">
      <p class="navbar_title">Liew Kai Le</p>
      <div class="navbar_section">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#workExperience">Work Experience</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#rating">Rating</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
    <div class="page_inner">
      <section id="home">
        <p class="description">I'm a freelancer</p>
        <p class="description">as</p>
        <div class="typewriter" id="myTypewriter">
          <h1 class="typewriterText" id="myTypewriterText">Python developer</h1>
        </div>
        <div></div>
        <img class="profile_pic" src="./assets/profile_pic.jpg" alt="Profile pic" />
      </section>
      <section id="about">
        <h1 class="title">About</h1>
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
    };
  },
  created() {
    document.title = "Liew Kai Le";
  },
  mounted() {
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
    }
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
}

.navbar_title {
  margin-left: 50px;
  font-size: 50px;
  margin-right: 0;
  color: black;
  overflow: hidden;
  background: linear-gradient(to right, #FAF2DF, #FAF2DF 50%, black 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 500ms ease;
  text-decoration: none;
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
  color: lightblue;
  overflow: hidden;
  background: linear-gradient(to right, #FAF2DF, #FAF2DF 50%, lightblue 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 500ms ease;
  text-decoration: none;

}

.navbar_title:hover, .navbar_section > *:hover {
  background-position: 0 100%;
  cursor: pointer;
}

.page_inner {
}

section {
  height: calc(100vh - 40px);
  width: calc(100vw - 80px);
  padding: 80px 40px 0 40px;
  scroll-margin-top: 120px;
}

section#home {
  padding: 200px 40px 0 40px;
}

.title {
  font-size: 60px;
}

.description {
  font-size: 30px;
}

.typewriter {
  display: inline-block;
}

.typewriterText {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  float: left;
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
</style>
