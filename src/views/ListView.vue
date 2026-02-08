<template>
  <div>
    <h2>Machine: {{ machine_id }}</h2>
    <ul>
      <li v-for="video in videos" :key="video.id">
        {{ video.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['machine_id'],
  data() {
    return {
      videos: []
    }
  },
  mounted() {
    // Contoh ambil data sesuai machine_id
    this.fetchVideos()
  },
  methods: {
    fetchVideos() {
      // Contoh: fetch dari API (bisa dari Lambda/Amplify)
      // fetch(`/api/videos?machine_id=${this.machine_id}`)
      //   .then(res => res.json())
      //   .then(data => this.videos = data)
      
      // Dummy data
      this.videos = [
        { id: 1, name: 'video1.mp4' },
        { id: 2, name: 'video2.mp4' }
      ]
    }
  }
}
</script>
