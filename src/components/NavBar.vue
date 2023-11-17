<template>
  <div>
    <!-- Desktop Navbar -->
    <div v-if="!isMobile" class="desktop-nav">
      <img src="@/assets/svg/logo.svg" alt="Logo" class="logo"/>
      <div class="nav-container">
        <div class="menu-items-wrapper">
          <router-link to="/" class="desktop-item">Услуги</router-link>
          <router-link to="/" class="desktop-item">Контакты</router-link>
          <router-link to="/" class="desktop-item">Команда</router-link>
        </div>

        <button @click="handleTerminalClick('universal')" class="btn btn-primary">получить консультацию</button>
      </div>
    </div>

    <!-- Mobile Navbar -->
    <div v-else class="navbar-mobile">
      <div @click="toggleSidebar" class="burger-icon">☰</div>
      <transition name="fade">
        <div v-if="isSidebarOpen" class="sidebar-overlay" @click="closeSidebar"></div>
      </transition>
      <transition name="slide">
        <div v-if="isSidebarOpen" class="mobile-sidebar">
          <img src="@/assets/svg/logo.svg" alt="Logo" class="logo"/>
          <router-link to="/" class="desktop-item">Услуги</router-link>
          <router-link to="/" class="desktop-item">Контакты</router-link>
          <router-link to="/" class="desktop-item">Команда</router-link>

          <button @click="openModal" class="btn btn-primary">получить консультацию</button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isMobile: false,
      isSidebarOpen: false,
    }
  },
  methods: {
    openModal(modalType) {
      console.log(modalType)
    },

    handleTerminalClick(modalType) {
      console.log(modalType)
    },

    toggleSidebar() {
      console.log('toggleSidebar')
    },

    closeSidebar() {
      console.log('closeSidebar')
    },

  }
}
</script>

<style scoped>
* {
  font-family: Point, sans-serif;
}

.navbar-mobile {
  height: 4rem;
  position: fixed;
  z-index: 99999999;
  background-color: rgba(231, 236, 239, 0.81);
  backdrop-filter: blur(20px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

/* Стили по необходимости */
.logo {
  height: 100%;
  max-height: 9rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  float: left;
}

/* Дополнительные стили для мобильной версии */
.burger-icon {
  font-size: 20px;
  cursor: pointer;
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  z-index: 1;
}

.mobile-sidebar {
  position: fixed;
  font-size: 2rem;
  top: 0;
  left: 0;
  display: flex;
  width: 80%;
  height: 100vh;
  background: #e7ecef;
  z-index: 2;
  padding: 20px;
  overflow-y: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
}

.fade-enter-active, .fade-leave-active, .slide-enter-active, .slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter, .fade-leave-to, .slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.desktop-item {
  background-color: transparent;
  color: #3a3a3a;
  font-weight: 600;
  padding-bottom: 1rem;
  margin-top: 1rem;
  width: 100%;
  text-decoration: none;
}

.desktop-nav {
  height: 100%;
  min-height: 5rem;
  max-height: 5rem;
  display: flex;
  width: 100%;
  position: fixed;
  background-color: rgba(231, 236, 239, 0.81);
  backdrop-filter: blur(20px);
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 3rem;
  padding-left: 5.6rem;
  z-index: 99999999;
}

.btn {
  text-transform: lowercase;
  padding: 0.9rem;
  font-family: Point, sans-serif;
  border-radius: 50px;
  font-weight: 500;
  justify-content: center;
  border: none;
  color: white;
  font-size: 1rem;
  align-items: center;
  display: flex;
}

.btn-primary {
  background-color: #274c77;
}

.mobile-item {
  background-color: transparent;
  border-bottom: 2px solid #274c77;
  color: #274c77;
  padding-bottom: 1rem;
  margin-top: 1rem;
  width: 100%;
  text-decoration: none;
}

.nav-container {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.menu-items-wrapper {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
</style>
