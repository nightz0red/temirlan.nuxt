<template>
    <div class="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-8">
      <h1 class="text-4xl font-bold text-center mb-10 text-purple-700 animate-pulse">Lab 3/4: Creative Gallery</h1>
  
      <div class="flex justify-center mb-6 space-x-6">
        <label class="flex items-center gap-2 text-lg text-purple-800">
          <input type="radio" v-model="showGallery" value="yes" class="accent-purple-500" /> Show Gallery
        </label>
        <label class="flex items-center gap-2 text-lg text-purple-800">
          <input type="radio" v-model="showGallery" value="no" class="accent-purple-500" /> Hide Gallery
        </label>
      </div>
  
      <div v-if="showGallery === 'yes'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div v-for="(item, index) in genpic" :key="index" class="bg-white shadow-xl rounded-2xl p-4 hover:scale-105 transition-transform">
          <img :src="item.image" alt="Gallery Image" class="rounded-xl w-full h-48 object-cover mb-4" />
          <p class="text-lg font-semibold text-purple-700 text-center">{{ item.text }}</p>
        </div>
      </div>
  
      <div class="mt-12 space-y-8">
        <div class="bg-white p-6 rounded-xl shadow-md">
          <h2 class="text-2xl font-bold text-purple-800 mb-4">🎧 Audio Player</h2>
          <audio controls class="w-full">
            <source src="/audio/sample1.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
        </div>
  
        <div class="bg-white p-6 rounded-xl shadow-md">
          <h2 class="text-2xl font-bold text-purple-800 mb-4">🎥 Video Player</h2>
          <video controls class="w-full rounded-xl">
            <source src="/video/sample1.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue'

  import pic1 from '@/assets/images/pic1.jpeg'
  import pic2 from '@/assets/images/pic2.jpg'
  import pic3 from '@/assets/images/pic3.jpg'
  import pic4 from '@/assets/images/pic4.jpg'
  import pic5 from '@/assets/images/pic5.jpg'
  import pic6 from '@/assets/images/pic6.jpg'
  import pic7 from '@/assets/images/pic7.jpg'
  import pic8 from '@/assets/images/pic8.jpg'
  import pic9 from '@/assets/images/pic9.jpg'
  import pic10 from '@/assets/images/pic10.jpg'
  
  const showGallery = ref('no')
  
  const genpic = reactive([
  { image: pic1, text: 'Sunset Harmony' },
  { image: pic2, text: 'Mountain Peace' },
  { image: pic3, text: 'Urban Dream' },
  { image: pic4, text: 'Ocean Calm' },
  { image: pic5, text: 'Forest Vibes' },
  { image: pic6, text: 'Nature Glow' },
  { image: pic7, text: 'Wild Spirit' },
  { image: pic8, text: 'Golden Fields' },
  { image: pic9, text: 'Cloudy Peaks' },
  { image: pic10, text: 'Starlit Night' }
])
  </script>
  

  