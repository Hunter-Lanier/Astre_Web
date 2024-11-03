<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <navbar-component />

        <div class="container mx-auto px-4 py-24">
            <div class="text-center mb-16">
                <h1 class="text-5xl font-bold text-white mb-6">Shop</h1>
                <p class="text-gray-300 max-w-3xl mx-auto text-lg">
                    Browse our collection of cutting-edge propulsion technologies and merchandise.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Shop Items -->
                <div v-for="item in shopItems" :key="item.id"
                    class="bg-white/10 backdrop-blur-lg rounded-xl p-6 flex flex-col">
                    <div class="aspect-w-16 aspect-h-9 mb-4">
                        <img :src="item.image" :alt="item.name" class="object-cover w-full h-64 rounded-lg">
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2">{{ item.name }}</h3>
                    <p class="text-gray-300 mb-4 flex-grow">{{ item.description }}</p>
                    <div class="flex justify-between items-center">
                        <span class="text-white text-xl font-bold">${{ item.price }}</span>
                        <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg 
                            transition duration-300 ease-in-out">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavbarComponent from '../components/navbar-component.vue'

export default {
    name: 'ShopView',
    components: {
        NavbarComponent
    },
    data() {
        return {
            shopItems: [
                {
                    id: 1,
                    name: 'Basic Propulsion Unit',
                    description: 'Entry-level propulsion system perfect for small applications.',
                    price: 999.99,
                    image: '/images/propulsion-1.jpg'
                },
                {
                    id: 2,
                    name: 'Advanced Thruster Pack',
                    description: 'High-performance thruster system with enhanced efficiency.',
                    price: 1499.99,
                    image: '/images/propulsion-2.jpg'
                },
                {
                    id: 3,
                    name: 'Premium Controller',
                    description: 'Professional-grade control system for precise management.',
                    price: 299.99,
                    image: '/images/controller.jpg'
                },
                {
                    id: 4,
                    name: 'Company T-Shirt',
                    description: 'Premium quality t-shirt with our company logo.',
                    price: 24.99,
                    image: '/images/tshirt.jpg'
                },
                {
                    id: 5,
                    name: 'Technical Manual',
                    description: 'Comprehensive guide to our propulsion systems.',
                    price: 49.99,
                    image: '/images/manual.jpg'
                },
                {
                    id: 6,
                    name: 'Maintenance Kit',
                    description: 'Essential tools and parts for system maintenance.',
                    price: 199.99,
                    image: '/images/toolkit.jpg'
                }
            ]
        }
    }
}
</script>
