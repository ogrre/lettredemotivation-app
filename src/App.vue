<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup></script>

<style>
#app {
  min-height: 100vh;
  background: #0a0a0a;
  color: #e5e7eb;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>
