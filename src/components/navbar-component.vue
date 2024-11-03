<template>
  <div id="navbar-container" class="fixed w-full transition-all duration-300 px-6 py-4 z-50" :class="{
    'bg-white shadow-lg': isScrolled || isMobileMenuOpen,
    'bg-transparent': !isScrolled && !isMobileMenuOpen
  }">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo Section -->
      <div id="logo-container" class="flex items-center space-x-2">
        <h1 class="text-xl md:text-2xl font-bold transition-colors duration-300"
          :class="{ 'text-black': isScrolled, 'text-white': !isScrolled }">
          ASTRA PROPULSION
        </h1>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden p-2 rounded-lg transition-colors duration-300"
        :class="{ 'text-black': isScrolled, 'text-white': !isScrolled }">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Main Navigation (Desktop) -->
      <nav id="nav-container" class="hidden md:flex space-x-8">
        <template v-for="item in navItems" :key="item.id">
          <!-- Desktop nav items remain unchanged -->
          <router-link v-if="item.href.startsWith('/')" :to="item.href"
            class="font-medium hover:opacity-75 transition-all duration-300 cursor-pointer" :class="{
              'text-black': isScrolled,
              'text-white': !isScrolled,
              'text-red-500': activeSection === item.id
            }">
            {{ item.name }}
          </router-link>
          <a v-else @click.prevent="handleNavigation(item.href)"
            class="font-medium hover:opacity-75 transition-all duration-300 cursor-pointer" :class="{
              'text-black': isScrolled,
              'text-white': !isScrolled,
              'text-red-500': activeSection === item.id
            }">
            {{ item.name }}
          </a>
        </template>
      </nav>

      <!-- Secondary Navigation (Desktop) -->
      <div id="secondary-nav-container" class="hidden md:flex items-center space-x-6">
        <button @click="toggleTheme" class="p-2 rounded-full hover:bg-gray-200/20 transition-colors duration-300">
          <span v-if="isDark" class="text-xl">🌞</span>
          <span v-else class="text-xl">🌙</span>
        </button>

        <div class="flex items-center space-x-4">
          <router-link :to="{ path: '/auth', query: { mode: 'login' } }"
            class="font-medium hover:opacity-75 transition-all duration-300"
            :class="{ 'text-black': isScrolled, 'text-white': !isScrolled }">
            Sign In
          </router-link>
          <router-link :to="{ path: '/auth', query: { mode: 'register' } }"
            class="px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-colors duration-300">
            Sign Up
          </router-link>
        </div>
      </div>
    </div>

    <!-- Mobile Menu (Slide-out) -->
    <div v-if="isMobileMenuOpen"
      class="md:hidden fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out"
      :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'" @click.stop>
      <!-- Close button -->
      <button @click="isMobileMenuOpen = false" class="absolute top-6 right-6 p-2 text-gray-600 hover:text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div class="flex flex-col h-full pt-20 pb-6 px-6">
        <!-- Mobile Navigation Items -->
        <div class="flex-1">
          <template v-for="item in navItems" :key="item.id">
            <router-link v-if="item.href.startsWith('/')" :to="item.href"
              class="block py-3 text-gray-800 font-medium text-lg hover:text-red-500 transition-all duration-300"
              @click="isMobileMenuOpen = false">
              {{ item.name }}
            </router-link>
            <a v-else @click="handleMobileNavigation(item.href)"
              class="block py-3 text-gray-800 font-medium text-lg hover:text-red-500 transition-all duration-300">
              {{ item.name }}
            </a>
          </template>
        </div>

        <!-- Mobile Bottom Section -->
        <div class="border-t border-gray-200 pt-6">
          <!-- Mobile Theme Toggle -->
          <div class="flex items-center justify-between mb-6">
            <span class="text-gray-800 font-medium">Theme</span>
            <button @click="toggleTheme" class="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300">
              <span v-if="isDark" class="text-xl">🌞</span>
              <span v-else class="text-xl">🌙</span>
            </button>
          </div>

          <!-- Mobile Auth Buttons -->
          <div class="space-y-3">
            <router-link :to="{ path: '/auth', query: { mode: 'login' } }"
              class="block w-full py-2 text-center text-gray-800 font-medium hover:bg-gray-100 rounded-lg transition-colors duration-300"
              @click="isMobileMenuOpen = false">
              Sign In
            </router-link>
            <router-link :to="{ path: '/auth', query: { mode: 'register' } }"
              class="block w-full py-2 text-center bg-red-500 text-white font-medium hover:bg-red-600 rounded-lg transition-colors duration-300"
              @click="isMobileMenuOpen = false">
              Sign Up
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Backdrop -->
    <div v-if="isMobileMenuOpen" class="md:hidden fixed inset-0 bg-black/50 z-30" @click="isMobileMenuOpen = false">
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      isScrolled: false,
      isDark: false,
      activeSection: 'hero',
      isMobileMenuOpen: false,
      navItems: [
        { name: 'Home', id: 'hero', href: '#hero' },
        { name: 'About', id: 'about', href: '#about' },
        { name: 'Features', id: 'features', href: '#features' },
        { name: 'Roadmap', id: 'roadmap', href: '#roadmap' },
        { name: 'Team', id: 'team', href: '#team' },
        { name: 'Contact', id: 'contact', href: '#contact' },
        { name: 'Shop', id: 'shop', href: '/shop' },
        { name: 'Blog', id: 'blog', href: '/blog' },
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.setupIntersectionObserver();
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 20
    },
    toggleTheme() {
      this.isDark = !this.isDark
      // Add theme toggle logic here
    },
    handleNavigation(href) {
      // Check if it's an external route (starts with '/')
      if (href.startsWith('/')) {
        this.$router.push(href)
        return
      }

      // Handle internal anchor links
      if (this.$route.path !== '/') {
        this.$router.push('/')
        this.$nextTick(() => {
          setTimeout(() => {
            const element = document.querySelector(href)
            if (element) element.scrollIntoView({ behavior: 'smooth' })
          }, 100)
        })
        return
      }

      const element = document.querySelector(href)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    },
    setupIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '-50% 0px',
        threshold: 0
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      }, options);

      // Observe all sections
      this.navItems.forEach(item => {
        const element = document.getElementById(item.id);
        if (element) observer.observe(element);
      });
    },
    handleMobileNavigation(href) {
      this.isMobileMenuOpen = false
      this.handleNavigation(href)
    }
  },
  watch: {
    // Close mobile menu when route changes
    '$route'() {
      this.isMobileMenuOpen = false
    }
  }
};
</script>

<style scoped>
.router-link-active {
  @apply font-semibold;
}

/* Prevent body scroll when mobile menu is open */
:deep(body.mobile-menu-open) {
  overflow: hidden;
}
</style>
