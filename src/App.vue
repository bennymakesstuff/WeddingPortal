<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
body {padding: 0;
      margin: 0;}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 0; /* This font size is needed to allow nav and content to appear inline. */
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  border: 0;
}

h1 {margin: 0;}
</style>
