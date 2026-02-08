<template>
  <div class="container">
    <header class="page-header">
      <h1>Video Archive</h1>
      <p class="subtitle">
        “One must still have chaos in oneself to give birth to a dancing star.”
      </p>
    </header>

    <div v-if="loading" class="state">Loading…</div>
    <div v-else-if="error" class="state error">
      {{ error }}
    </div>

    <div v-else>
      <div v-if="videos.length === 0" class="state">
        No videos found.
      </div>

      <VideoItem
        v-for="video in videos"
        :key="video.file"
        :video="video"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { fetchVideos } from "../services/videoService";
import VideoItem from "../components/VideoItem.vue";

const videos = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    videos.value = await fetchVideos();
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  background: #080808;
  min-height: 100vh;
}

.page-header {
  margin-bottom: 48px;
}

.page-header h1 {
  font-size: 32px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 14px;
  color: #888;
  max-width: 600px;
}

.state {
  color: #aaa;
  font-size: 14px;
}

.error {
  color: #ff6b6b;
}
</style>
