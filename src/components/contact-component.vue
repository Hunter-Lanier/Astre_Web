<template>
    <div id="contact" class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-16">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-white mb-4">Contact Us</h2>
                <p class="text-gray-300 max-w-2xl mx-auto">
                    Have questions about our propulsion technology? Get in touch with our team and we'll be happy to
                    help.
                </p>
            </div>

            <div class="max-w-4xl mx-auto">
                <div class="bg-white/10 backdrop-blur-lg rounded-xl p-8">
                    <form class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="name" class="block text-white mb-2">Name</label>
                                <input type="text" id="name"
                                    class="w-full px-4 py-2 bg-white/5 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500"
                                    placeholder="Your name">
                            </div>
                            <div>
                                <label for="email" class="block text-white mb-2">Email</label>
                                <input type="email" id="email"
                                    class="w-full px-4 py-2 bg-white/5 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500"
                                    placeholder="your@email.com">
                            </div>
                        </div>

                        <div>
                            <label for="subject" class="block text-white mb-2">Subject</label>
                            <input type="text" id="subject"
                                class="w-full px-4 py-2 bg-white/5 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500"
                                placeholder="How can we help?">
                        </div>

                        <div>
                            <label for="message" class="block text-white mb-2">Message</label>
                            <textarea id="message" rows="5"
                                class="w-full px-4 py-2 bg-white/5 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500"
                                placeholder="Your message"></textarea>
                        </div>

                        <button type="submit"
                            class="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactComponent'
}
</script>
