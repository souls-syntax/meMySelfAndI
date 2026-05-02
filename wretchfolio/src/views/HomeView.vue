<script setup lan="ts">
    import { ref } from 'vue'
    const count = ref(0)
</script>

<template>
    <div>
      <button @click="count++">
          You clicked me {{ count }} times.
      </button>
    </div>
    <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus lacus eu magna aliquet, vitae volutpat lorem aliquet. Phasellus ut lobortis augue. In in magna libero. Aenean at magna aliquam, volutpat nibh vel, hendrerit justo. Sed condimentum ligula eget dignissim facilisis. Curabitur at augue lacinia, faucibus nisi vel, feugiat nulla. Integer tristique sem ac posuere tincidunt. Nam scelerisque sagittis ullamcorper. Vestibulum a sagittis nunc, at faucibus lacus.

mauris. Nam eget diam id neque faucibus vehicula nec et est. Nullam venenatis sed metus non gravida.
Nunc tortor odio, facilisis at tempus a, eleifend vel eros. Morbi aliquam tortor eget mauris
ultrices, interdum convallis nulla accumsan. Curabitur a sapien at mauris vehicula pretium. Vivamus
auctor ex vitae diam fermentum dapibus. </div>
</template>
