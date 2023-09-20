<template>
    <div class="portfolio-page">
      <h2 class="page-title">My Projects</h2>
        <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
            <Slide v-for="project in projects" :key="project.id">
            <div class="carousel__item">
                <div class="project-content">
                <div class="project-details">
                    <h3>{{ project.title }}</h3>
                    <p>{{ project.description }}</p>
                </div>
              <img :src="project.imageUrl" :alt="project.title" class="project-image" />
            </div>
          </div>
        </Slide>
      </Carousel>
  
      <Carousel
        id="thumbnails"
        :items-to-show="4"
        :wrap-around="true"
        v-model="currentSlide"
        ref="carousel"
      >
        <Slide v-for="project in projects" :key="project.id">
            <div class="carousel__item" @click="slideTo(projects.indexOf(project))">
            <span>{{ project.title }}</span> 
            </div>
        </Slide>
    </Carousel>
    </div>
  </template>
  
  <link rel="stylesheet" type="text/css" href="@/components/PortfolioPageStyles.css" />

  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'PortfolioPage',
    components: {
      Carousel,
      Slide,
    },
    data() {
      return {
        projects: [
          {
            id: 1,
            title: "Grocery Web Scraper",
            description: "A grocery application that combined IGA, Coles, and Woolies into one",
            imageUrl: require('@/assets/webscraper.jpg'),
          },
          {
            id: 2,
            title: "Webscraped AI character chatbot",
            description: "Webscraped youtube caption of characters to train AI model and used as Discord bot",
            imageUrl: require('@/assets/AIchatkorone.jpg'),
          },
          {
            id: 3,
            title: "Text-based Adventure Game",
            description: "Interactive text-based adventure Game with ASCII art played entirely in terminal.",
            imageUrl: require('@/assets/asciigame.jpg'),
          },          {
            id: 4,
            title: "JRPG short game ",
            description: "Collaborated to produce a JRPG in RPGVX Maker",
            imageUrl: require('@/assets/jrpggame.jpg'),
          },
        ],
        currentSlide: 0,
      };
    },
    methods: {
      slideTo(index) {
        this.currentSlide = index;
      },
    },
  });
</script>
