<template>
  <div class="page">
    <h1 class="name">Liew Kai Le</h1>
    <p class="description">I'm a frontend developer</p>
    <img class="profile_pic" src="./assets/profile_pic.jpg" alt="Profile pic" />
    <h1>Work experience</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  created() {
    document.title = "Liew Kai Le";
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap');

* {
  margin: 0;
  font-family: 'Inter', sans-serif;
  scroll-behavior: smooth;
}

.page {
  height: calc(100vh - 40px);
  width: calc(100vw - 80px);
  padding: 40px 40px 0 40px;
  background: #FAF2DF;
  color: #000;
}

.dark {
  background: #192841;
  color: #FFF;
}

.name {
  font-weight: 800;
  font-size: 60px;
}

.description {
  font-size: 30px;
}

.profile_pic {
  width: 300px;
  height: 300px;
  border-radius: 300px;
  object-fit: cover;
}
</style>
