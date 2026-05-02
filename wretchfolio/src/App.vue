<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/blogs">Blogs</RouterLink> |
    <RouterLink to="/projects">Projects</RouterLink> |
    <RouterLink to="/ramble">Ramble</RouterLink> |
    <RouterLink to="/bits">Bits</RouterLink>
  </nav>

  <RouterView />
</template>
