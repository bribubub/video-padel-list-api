<template>
  <div class="video-card">
    <div class="video-header">
      <h3 class="video-title">{{ video.file }}</h3>

      <a
        class="download-link"
        :href="video.url"
        download
        target="_blank"
        rel="noopener"
      >
        ⬇ Download
      </a>
    </div>

    <video
      class="video-player"
      :src="video.url"
      controls
    />
  </div>
</template>

<script setup>
defineProps({
  video: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.video-card {
  background: #0f0f0f;
  border: 1px solid #1f1f1f;
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 32px;
}

.video-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.video-title {
  font-size: 15px;
  font-weight: 500;
  color: #eaeaea;
  letter-spacing: 0.3px;
}

.download-link {
  font-size: 13px;
  color: #999;
  text-decoration: none;
  border-bottom: 1px solid transparent;
}

.download-link:hover {
  color: #fff;
  border-bottom: 1px solid #fff;
}

.video-player {
  width: 100%;
  max-height: 360px;
  background: black;
}
</style>
