<template>
    <section class="py-24 bg-slate-900">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-white mb-4">Our Team</h2>
                <p class="text-gray-400 text-lg">Meet the talented individuals behind Astra Propulsion</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Team Member 1 -->
                <div class="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
                    <div class="relative w-32 h-32 mx-auto mb-4">
                        <img src="https://via.placeholder.com/128" alt="Team member"
                            class="rounded-full object-cover w-full h-full" />
                        <div class="absolute inset-0 rounded-full bg-red-500/10"></div>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2">Sarah Johnson</h3>
                    <p class="text-red-500 mb-3">Chief Executive Officer</p>
                    <p class="text-gray-400 mb-4">Visionary leader with 15+ years in aerospace innovation</p>
                    <div class="flex justify-center space-x-4">
                        <a href="#" class="text-gray-400 hover:text-red-500 transition-colors">
                            <i class="fab fa-linkedin text-xl"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-red-500 transition-colors">
                            <i class="fab fa-twitter text-xl"></i>
                        </a>
                    </div>
                </div>

                <!-- Team Member 2 -->
                <div class="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
                    <div class="relative w-32 h-32 mx-auto mb-4">
                        <img src="https://via.placeholder.com/128" alt="Team member"
                            class="rounded-full object-cover w-full h-full" />
                        <div class="absolute inset-0 rounded-full bg-red-500/10"></div>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2">Michael Chen</h3>
                    <p class="text-red-500 mb-3">Chief Technology Officer</p>
                    <p class="text-gray-400 mb-4">Propulsion systems expert with NASA background</p>
                    <div class="flex justify-center space-x-4">
                        <a href="#" class="text-gray-400 hover:text-red-500 transition-colors">
                            <i class="fab fa-linkedin text-xl"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-red-500 transition-colors">
                            <i class="fab fa-github text-xl"></i>
                        </a>
                    </div>
                </div>

                <!-- Team Member 3 -->
                <div class="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
                    <div class="relative w-32 h-32 mx-auto mb-4">
                        <img src="https://via.placeholder.com/128" alt="Team member"
                            class="rounded-full object-cover w-full h-full" />
                        <div class="absolute inset-0 rounded-full bg-red-500/10"></div>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2">Elena Rodriguez</h3>
                    <p class="text-red-500 mb-3">Lead Engineer</p>
                    <p class="text-gray-400 mb-4">Specializes in sustainable propulsion technologies</p>
                    <div class="flex justify-center space-x-4">
                        <a href="#" class="text-gray-400 hover:text-red-500 transition-colors">
                            <i class="fab fa-linkedin text-xl"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-red-500 transition-colors">
                            <i class="fab fa-github text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TeamComponent'
}
</script>
