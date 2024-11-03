<template>
    <section id="roadmap" class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-16">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-white mb-4">Our Roadmap</h2>
                <p class="text-gray-300 max-w-2xl mx-auto">
                    Follow our journey as we develop next-generation propulsion technologies.
                </p>
            </div>

            <div class="max-w-4xl mx-auto mb-12">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Milestone 1 -->
                    <div class="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                                <span class="text-white font-bold">Q1</span>
                            </div>
                            <h3 class="text-xl font-bold text-white ml-4">Research Phase</h3>
                        </div>
                        <p class="text-gray-300">Initial research and development of sustainable propulsion concepts.
                        </p>
                    </div>

                    <!-- Milestone 2 -->
                    <div class="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                                <span class="text-white font-bold">Q2</span>
                            </div>
                            <h3 class="text-xl font-bold text-white ml-4">Prototype Development</h3>
                        </div>
                        <p class="text-gray-300">Building and testing initial prototypes of our propulsion systems.</p>
                    </div>
                </div>
            </div>

            <div class="text-center">
                <router-link to="/roadmap"
                    class="inline-block px-8 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors duration-300">
                    View Full Roadmap
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'RoadmapComponent'
}
</script>
