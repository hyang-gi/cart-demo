<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/products" class="top-bar-link pa-2">
        <span>Products</span>
      </router-link>
      <router-link to="past-orders" class="top-bar-link pa-2">
        <span>Past Orders</span>
      </router-link>
      <button @click="toggleSidebar" class="top-bar-cart-link pa-2">
        <i class="icofont-cart-alt icofont-1x"></i>
        <span>Cart ({{ totalQuantity }})</span>
      </button>
    </nav>
  </header>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      totalQuantity: 10,
    };
  },
  methods: {
    toggleSidebar() {
      console.log("toggling sidebar");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>