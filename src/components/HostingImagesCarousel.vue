<script setup lang="ts">
import { ref } from 'vue';

const slide = ref(1);

const carouselImages = [
  { url: 'assets/image-1.jpg' },
  { url: 'assets/image-2.jpg' },
  { url: 'assets/image-3.jpeg' },
  { url: 'assets/image-4.jpg' },
  { url: 'assets/image-5.jpg' },
];
</script>

<template>
  <q-carousel v-model="slide" swipeable animated thumbnails infinite>
    <q-carousel-slide :name="1" img-src="../assets/image-1.jpg" />
    <q-carousel-slide :name="2" img-src="../assets/image-2.jpg" />
    <q-carousel-slide :name="3" img-src="../assets/image-3.jpeg" />
    <q-carousel-slide :name="4" img-src="../assets/image-4.jpg" />
    <q-carousel-slide :name="5" img-src="../assets/image-5.jpg" />
  </q-carousel>
</template>
