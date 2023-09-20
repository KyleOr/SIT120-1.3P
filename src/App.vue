<template>
  <div id="app">
    <router-view v-slot="{ Component, route }">
        <transition 
          :enter-active-class="route.meta.enterClass"
          :leave-active-class="route.meta.leaveClass"
        >
        <component :is="Component" />
      </transition>
    </router-view>
    <nav class="navigation">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/Portfolio">Portfolio</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
  overflow: hidden; 
}

.page {
  position: absolute;
  top: 30px;
  width: 100%;
  transition: transform 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0; 
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.navigation {
  position: fixed;
  top: 0;
  right: 0;
  background-color: #000; 
  padding: 1rem;
  z-index: 1000; 
}

.navigation ul {
  list-style-type: none;
  padding: 0;
}

.navigation li {
  margin-bottom: 1rem;
}

.navigation a {
  text-decoration: none;
  color: #fff;
  display: block;
}

.navigation a:hover {
  text-decoration: underline;
}

a.router-link-active {
  font-weight: bold; 
}
</style>
