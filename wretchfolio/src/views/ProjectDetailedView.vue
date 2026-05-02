<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import { ref, onMounted } from 'vue';
  import {marked} from 'marked'
  const route = useRoute();
  const repoName = route.params.slug;
  const readme = ref('')
  onMounted(async () => {
        try {
           const response = await
           fetch(`https://api.github.com/repos/souls-syntax/${repoName}/readme`);
           const basedRes = await response.json();
           const cleaned = basedRes.content.replace(/\n/g, '')
           const decoded = atob(cleaned)
           readme.value = marked(decoded)
           console.log(decoded)
        } catch (err) {
            console.log(err);
        }
  })
</script>
<template>
  <h1>Project {{ repoName }}</h1>
  <div v-html="readme"></div>
  <a :href="`https://github.com/souls-syntax/${repoName}`">GitHub Link</a>
</template>
