<template>
  <div class="home-page body">
    <div class="black-box">
      <div class="content">
        <div class="intro">
          <h1 class="main-title">Welcome to My Portfolio</h1>
          <p class="subtitle">Explore my work and skills</p>
          <div class="description-container">
            <p class="description">
              Hello! My name is Kyle Oris, and I have done a couple
              of cool projects over my short life of 19 years.
              You can check some out on the portfolio page!  
            </p>
            <div class="contact-icons">
            <a href="https://github.com/KyleOr" target="_blank">
              <i class="fab fa-github"></i> 
            </a>
            <a href="https://www.linkedin.com/in/kyleoris/" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="mailto:kyleerikoris@example.com">
              <i class="far fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
    <HangmanGame />
  </div>
</template>


<link rel="stylesheet" type="text/css" href="@/components/HomePageStyles.css" />

<script>
import HangmanGame from "@/components/HangmanGame.vue";

export default {
  name: "HomePage",
  components: {
    HangmanGame,
  },
};
</script>
