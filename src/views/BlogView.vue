<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-900 to-black">
        <NavbarComponent />

        <div class="container mx-auto px-6 py-24">
            <div class="text-center mb-16">
                <h1 class="text-5xl font-bold text-white mb-6">Blog</h1>
                <p class="text-gray-300 max-w-3xl mx-auto text-lg">
                    Stay updated with the latest news and insights from Astra Propulsion
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="post in blogPosts" :key="post.id"
                    class="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden hover:transform hover:scale-105 transition duration-300">
                    <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <span class="text-red-500 text-sm">{{ post.category }}</span>
                            <span class="mx-2 text-gray-400">•</span>
                            <span class="text-gray-400 text-sm">{{ post.date }}</span>
                        </div>
                        <h2 class="text-xl font-bold text-white mb-3">{{ post.title }}</h2>
                        <p class="text-gray-300 mb-4 line-clamp-3">{{ post.excerpt }}</p>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <img :src="post.author.avatar" :alt="post.author.name"
                                    class="w-8 h-8 rounded-full mr-2">
                                <span class="text-gray-300 text-sm">{{ post.author.name }}</span>
                            </div>
                            <button class="text-red-500 hover:text-red-400 font-medium">
                                Read More →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavbarComponent from '../components/navbar-component.vue'

export default {
    name: 'BlogView',
    components: {
        NavbarComponent
    },
    data() {
        return {
            blogPosts: [
                {
                    id: 1,
                    title: 'The Future of Space Propulsion Technology',
                    excerpt: 'Exploring the latest innovations in propulsion systems and their impact on space exploration.',
                    category: 'Technology',
                    date: 'May 15, 2023',
                    image: '/images/blog-1.jpg',
                    author: {
                        name: 'Dr. Sarah Chen',
                        avatar: '/images/avatar-1.jpg'
                    }
                },
                {
                    id: 2,
                    title: 'Sustainable Propulsion: A Green Future',
                    excerpt: 'How eco-friendly propulsion systems are revolutionizing the aerospace industry.',
                    category: 'Sustainability',
                    date: 'May 12, 2023',
                    image: '/images/blog-2.jpg',
                    author: {
                        name: 'James Wilson',
                        avatar: '/images/avatar-2.jpg'
                    }
                },
                {
                    id: 3,
                    title: 'Breaking Records: New Speed Milestones',
                    excerpt: 'Recent breakthroughs in propulsion technology leading to unprecedented speeds.',
                    category: 'Achievement',
                    date: 'May 10, 2023',
                    image: '/images/blog-3.jpg',
                    author: {
                        name: 'Maria Rodriguez',
                        avatar: '/images/avatar-3.jpg'
                    }
                },
                {
                    id: 4,
                    title: 'The Role of AI in Modern Propulsion',
                    excerpt: 'How artificial intelligence is optimizing propulsion system performance.',
                    category: 'Technology',
                    date: 'May 8, 2023',
                    image: '/images/blog-4.jpg',
                    author: {
                        name: 'Alex Kumar',
                        avatar: '/images/avatar-4.jpg'
                    }
                },
                {
                    id: 5,
                    title: 'Space Tourism: The Next Frontier',
                    excerpt: 'Examining how advanced propulsion enables commercial space travel.',
                    category: 'Industry',
                    date: 'May 5, 2023',
                    image: '/images/blog-5.jpg',
                    author: {
                        name: 'Emma Thompson',
                        avatar: '/images/avatar-5.jpg'
                    }
                },
                {
                    id: 6,
                    title: 'Maintenance Tips for Propulsion Systems',
                    excerpt: 'Essential guidelines for maintaining optimal performance of propulsion units.',
                    category: 'Maintenance',
                    date: 'May 3, 2023',
                    image: '/images/blog-6.jpg',
                    author: {
                        name: 'David Park',
                        avatar: '/images/avatar-6.jpg'
                    }
                }
            ]
        }
    }
}
</script>
