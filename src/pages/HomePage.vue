<template>
  <div class="page">
    <!-- NAVBAR -->
    <header class="navbar">
      <div class="brand">Epic Replay</div>
      <nav>
        <router-link to="/videos" class="nav-link">
          Video Library
        </router-link>
      </nav>
    </header>

    <!-- HERO -->
    <section class="hero">
      <h1>Epic Replay System</h1>
      <p>
        Secure video replay and monitoring platform powered by cloud
        infrastructure.
      </p>

      <router-link to="/videos">
        <button class="primary-btn">
          View Video Library
        </button>
      </router-link>
    </section>

    <!-- FEATURES -->
    <section class="features">
      <div class="feature-card">
        <h3>Centralized Storage</h3>
        <p>
          All video assets are stored and managed centrally using scalable
          cloud architecture.
        </p>
      </div>

      <div class="feature-card">
        <h3>Secure Access</h3>
        <p>
          Token-based authentication and controlled access through API Gateway.
        </p>
      </div>

      <div class="feature-card">
        <h3>Edge Ready</h3>
        <p>
          Designed to integrate with embedded systems, cameras, and edge
          devices.
        </p>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      © 2025 Epic Replay · Internal System
    </footer>
  </div>
</template>

<style scoped>
.page {
  font-family: Inter, Arial, sans-serif;
  color: #1f2937;
}

/* NAVBAR */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 1px solid #e5e7eb;
}

.brand {
  font-size: 18px;
  font-weight: 600;
}

.nav-link {
  text-decoration: none;
  color: #374151;
  font-weight: 500;
}

/* HERO */
.hero {
  text-align: center;
  padding: 100px 20px;
  background: linear-gradient(180deg, #f9fafb, #ffffff);
}

.hero h1 {
  font-size: 42px;
  margin-bottom: 20px;
}

.hero p {
  font-size: 18px;
  color: #4b5563;
  max-width: 600px;
  margin: 0 auto 40px;
}

/* BUTTON */
.primary-btn {
  padding: 12px 28px;
  font-size: 16px;
  background-color: #111827;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.primary-btn:hover {
  background-color: #000000;
}

/* FEATURES */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 30px;
  padding: 80px 40px;
}

.feature-card {
  border: 1px solid #e5e7eb;
  padding: 30px;
  border-radius: 10px;
  background: white;
}

.feature-card h3 {
  margin-bottom: 10px;
  font-size: 18px;
}

.feature-card p {
  color: #4b5563;
  font-size: 14px;
}

/* FOOTER */
.footer {
  text-align: center;
  padding: 30px;
  font-size: 14px;
  color: #6b7280;
  border-top: 1px solid #e5e7eb;
}
</style>
