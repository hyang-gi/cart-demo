/* eslint-disable */
// eslint-disable-next-line
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
    </nav>
    <div @click="toggleSidebar" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ totalQuantity }})</span>
    </div>
  </header>
  <router-view :inventory="inventory" />

  <Sidebar
    v-if="showSideBar"
    :toggle="toggleSidebar"
    :cart="cart"
    :inventory="inventory"
    :remove="removeItem"
  />
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import food from "./food.json";

export default {
  name: "App",
  components: {
    Sidebar,
  },
  data() {
    return {
      showSideBar: false,
      inventory: food,
      cart: {},
    };
  },
  computed: {
    totalQuantity() {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr;
      }, 0);
    },
  },
  methods: {
    addToCart(name, index) {
      if (!this.cart[name]) this.cart[name] = 0;
      console.log(name, index);
      this.cart[name] += this.inventory[index].quantity;
      this.inventory[index].quantity = 0;
      console.log("cart", this.cart);
    },
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
      console.log("Click", this.showSideBar);
    },
    removeItem(name) {
      delete this.cart[name];
    },
  },
};
</script>
