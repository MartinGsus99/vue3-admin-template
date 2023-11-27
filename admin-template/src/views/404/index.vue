<template>
  <div class="not-found">
    <img src="./assets/404-image.png" alt="404 Not Found Image" />
    <h1>Oops! Page Not Found</h1>
    <p>Sorry, the page you are looking for might be in another castle.</p>
    <router-link to="/">Go back to home</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotFound',
});
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 20px;
  margin: 50px auto;
  max-width: 400px;
}

.not-found img {
  width: 100%;
  max-width: 200px;
  margin-bottom: 20px;
}

.not-found h1 {
  color: #333;
  font-size: 24px;
}

.not-found p {
  color: #666;
  font-size: 16px;
}

.not-found a {
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
}
</style>
