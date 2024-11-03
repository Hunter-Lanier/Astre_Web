<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <navbar-component />

        <div class="container mx-auto px-4 py-24">
            <div class="text-center mb-16">
                <h1 class="text-5xl font-bold text-white mb-6">Development Roadmap</h1>
                <p class="text-gray-300 max-w-3xl mx-auto text-lg">
                    Our comprehensive plan for developing next-generation propulsion technologies. Follow our journey
                    from research to implementation.
                </p>
            </div>

            <div class="max-w-5xl mx-auto">
                <div class="space-y-12">
                    <!-- Q1 2024 -->
                    <div class="bg-white/10 backdrop-blur-lg rounded-xl p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                                <span class="text-white font-bold text-xl">Q1</span>
                            </div>
                            <div class="ml-6">
                                <h3 class="text-2xl font-bold text-white">Research Phase</h3>
                                <p class="text-gray-400">January - March 2024</p>
                            </div>
                        </div>
                        <div class="space-y-4 text-gray-300">
                            <p>• Initial research and development of sustainable propulsion concepts</p>
                            <p>• Market analysis and feasibility studies</p>
                            <p>• Formation of core research team</p>
                            <p>• Establishment of research partnerships</p>
                        </div>
                    </div>

                    <!-- Q2 2024 -->
                    <div class="bg-white/10 backdrop-blur-lg rounded-xl p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                                <span class="text-white font-bold text-xl">Q2</span>
                            </div>
                            <div class="ml-6">
                                <h3 class="text-2xl font-bold text-white">Prototype Development</h3>
                                <p class="text-gray-400">April - June 2024</p>
                            </div>
                        </div>
                        <div class="space-y-4 text-gray-300">
                            <p>• Design and development of initial prototypes</p>
                            <p>• Component testing and validation</p>
                            <p>• Performance optimization</p>
                            <p>• Safety protocol development</p>
                        </div>
                    </div>

                    <!-- Q3 2024 -->
                    <div class="bg-white/10 backdrop-blur-lg rounded-xl p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                                <span class="text-white font-bold text-xl">Q3</span>
                            </div>
                            <div class="ml-6">
                                <h3 class="text-2xl font-bold text-white">Testing & Refinement</h3>
                                <p class="text-gray-400">July - September 2024</p>
                            </div>
                        </div>
                        <div class="space-y-4 text-gray-300">
                            <p>• Comprehensive system testing</p>
                            <p>• Performance analysis and optimization</p>
                            <p>• Integration testing with various platforms</p>
                            <p>• Documentation and certification preparation</p>
                        </div>
                    </div>

                    <!-- Q4 2024 -->
                    <div class="bg-white/10 backdrop-blur-lg rounded-xl p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                                <span class="text-white font-bold text-xl">Q4</span>
                            </div>
                            <div class="ml-6">
                                <h3 class="text-2xl font-bold text-white">Production Planning</h3>
                                <p class="text-gray-400">October - December 2024</p>
                            </div>
                        </div>
                        <div class="space-y-4 text-gray-300">
                            <p>• Manufacturing process development</p>
                            <p>• Supply chain establishment</p>
                            <p>• Quality control implementation</p>
                            <p>• Initial production run planning</p>
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
    name: 'RoadmapView',
    components: {
        NavbarComponent
    }
}
</script>
