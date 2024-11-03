<template>
    <div id="hero"
        class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 relative">
        <div class="container mx-auto px-4 text-center">
            <h1 class="text-6xl font-bold text-white mb-6">
                Welcome to Astra Propulsion
            </h1>
            <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Pioneering the future of space travel with cutting-edge propulsion technology. Join us in our mission to
                revolutionize space exploration.
            </p>
            <router-link to="/register"
                class="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                Get Started
            </router-link>
        </div>

        <!-- Decorative background elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute -top-40 -right-40 w-80 h-80 bg-red-500 rounded-full opacity-10"></div>
            <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500 rounded-full opacity-10"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeroComponent'
}
</script>
