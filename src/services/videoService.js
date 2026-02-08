const API_URL =
  "https://m4yg56y35l.execute-api.ap-southeast-1.amazonaws.com/allvideos";

const ADMIN_TOKEN = "CHANGE_ME";

export async function fetchVideos() {
  const res = await fetch(API_URL, {
    headers: {
      "x-admin-token": ADMIN_TOKEN,
    },
  });

  if (!res.ok) {
    throw new Error(`HTTP error ${res.status}`);
  }

  const data = await res.json();
  return data.videos || [];
}
