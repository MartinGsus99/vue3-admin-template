<!-- NotFound.vue -->
<template>
  <div class="not-found">
    <div class="emoji">😕</div>
    <h1>404 Not Found</h1>
    <p>Oops! The page you are looking for might be in another castle.</p>
    <router-link to="/">Go back to home</router-link>
  </div>
</template>
  
  <script>
export default {
  name: 'NotFound'
}
  </script>
  
  <style scoped>
.not-found {
  font-family: "Arial", sans-serif;
  text-align: center;
  margin-top: 20vh;
}

.emoji {
  font-size: 3em;
  margin-bottom: 20px;
}

h1 {
  color: #333;
}

p {
  color: #555;
  font-size: 1.2em;
}

router-link {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}
</style>
  