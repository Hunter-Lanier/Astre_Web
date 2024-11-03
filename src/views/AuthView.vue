<template>
    <div class="w-full">
        <navbar-component class="z-50" />
    </div>
    <div
        class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold text-white">
                    {{ isLogin ? 'Welcome Back' : 'Create Account' }}
                </h2>
                <p class="mt-2 text-gray-300">
                    {{ isLogin ? 'Sign in to your account' : 'Sign up for a new account' }}
                </p>
            </div>

            <form class="space-y-6" @submit.prevent="handleSubmit">
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-300">
                        Email address
                    </label>
                    <div class="mt-1">
                        <input id="email" v-model="email" type="email" required class="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-lg 
                            bg-gray-800/50 placeholder-gray-400 text-white focus:outline-none 
                            focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Enter your email">
                    </div>
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium text-gray-300">
                        Password
                    </label>
                    <div class="mt-1">
                        <input id="password" v-model="password" type="password" required class="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-lg 
                            bg-gray-800/50 placeholder-gray-400 text-white focus:outline-none 
                            focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            placeholder="Enter your password">
                    </div>
                </div>

                <!-- Confirm Password field (shown only during registration) -->
                <div v-if="!isLogin">
                    <label for="confirmPassword" class="block text-sm font-medium text-gray-300">
                        Confirm Password
                    </label>
                    <div class="mt-1">
                        <input id="confirmPassword" v-model="confirmPassword" type="password" required class="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-lg 
                            bg-gray-800/50 placeholder-gray-400 text-white focus:outline-none 
                            focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            placeholder="Confirm your password">
                    </div>
                </div>

                <!-- Additional fields based on form type -->
                <div v-if="isLogin" class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember-me" v-model="rememberMe" type="checkbox"
                            class="h-4 w-4 rounded border-gray-600 bg-gray-800/50 text-red-500 focus:ring-red-500">
                        <label for="remember-me" class="ml-2 block text-sm text-gray-300">
                            Remember me
                        </label>
                    </div>

                    <div class="text-sm">
                        <a href="#" class="font-medium text-red-500 hover:text-red-400">
                            Forgot your password?
                        </a>
                    </div>
                </div>

                <div v-if="!isLogin" class="flex items-center">
                    <input id="terms" v-model="agreeToTerms" type="checkbox"
                        class="h-4 w-4 rounded border-gray-600 bg-gray-800/50 text-red-500 focus:ring-red-500">
                    <label for="terms" class="ml-2 block text-sm text-gray-300">
                        I agree to the Terms and Conditions
                    </label>
                </div>

                <div>
                    <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg 
                        text-sm font-medium text-white bg-red-500 hover:bg-red-600 
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 
                        transition-colors duration-300">
                        {{ isLogin ? 'Sign in' : 'Sign up' }}
                    </button>
                </div>
            </form>

            <div class="mt-6 text-center">
                <p class="text-sm text-gray-300">
                    {{ isLogin ? "Don't have an account?" : 'Already have an account?' }}
                    <button @click="toggleForm" class="font-medium text-red-500 hover:text-red-400">
                        {{ isLogin ? 'Sign up' : 'Sign in' }}
                    </button>
                </p>
            </div>

            <!-- Decorative elements -->
            <div class="absolute inset-0 overflow-hidden -z-10">
                <div class="absolute -top-40 -right-40 w-80 h-80 bg-red-500 rounded-full opacity-10"></div>
                <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500 rounded-full opacity-10"></div>
            </div>
        </div>
    </div>
</template>

<script>
import NavbarComponent from '../components/navbar-component.vue'

export default {
    name: 'AuthView',
    components: {
        NavbarComponent
    },
    data() {
        return {
            isLogin: true,
            email: '',
            password: '',
            confirmPassword: '',
            rememberMe: false,
            agreeToTerms: false
        }
    },
    methods: {
        toggleForm() {
            this.isLogin = !this.isLogin
            this.clearForm()
        },
        clearForm() {
            this.email = ''
            this.password = ''
            this.confirmPassword = ''
            this.rememberMe = false
            this.agreeToTerms = false
        },
        handleSubmit() {
            if (this.isLogin) {
                console.log('Login attempt:', {
                    email: this.email,
                    password: this.password,
                    rememberMe: this.rememberMe
                })
            } else {
                console.log('Register attempt:', {
                    email: this.email,
                    password: this.password,
                    confirmPassword: this.confirmPassword,
                    agreeToTerms: this.agreeToTerms
                })
            }
        }
    },
    watch: {
        '$route.query.mode': {
            immediate: true,
            handler(newMode) {
                if (newMode === 'login') {
                    this.isLogin = true;
                } else if (newMode === 'register') {
                    this.isLogin = false;
                }
            }
        }
    }
}
</script>