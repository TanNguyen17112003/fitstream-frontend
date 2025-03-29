<script setup lang="ts">
import { ref } from 'vue'
const heading = 'Loin Here'
const description = 'Welcome back !'
import { useRouter } from 'vue-router'
const email = ref<string>('')
const password = ref<string>('')
const router = useRouter()
import { authRepository } from '@/repositories/authRepository';

const handleLogin = async (e: any) => {
  e.preventDefault()
  const res = await authRepository.login({
    email: email.value,
    password: password.value
  })
  localStorage.setItem('access_token', res.data.access_token)
  res.status === 200 && router.push('/profile')
}
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="flex flex-col max-w-md p-6 rounded-md sm:p-10 shadow-md w-full md:w-6/12 border">
      <div class="mb-8 text-center">
        <h1 class="my-3 text-4xl font-bold">{{ heading }}</h1>
        <p class="text-sm">{{ description }}</p>
      </div>
      <form @submit="handleLogin" action="" class="space-y-12">
        <div class="space-y-4">
          <div>
            <label for="email" class="block mb-2 text-sm"> Email address </label>
            <input
              type="email"
              name="email"
              id="email"
              v-model="email"
              placeholder="leroy@jenkins.com"
              class="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <div class="flex justify-between mb-2">
              <label for="password" class="text-sm"> Password </label>
              <a rel="noopener noreferrer" href="#" class="text-xs hover:underline">
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              v-model="password"
              class="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
        <div class="space-y-2">
          <div>
            <button
              type="submit"
              class="w-full px-8 py-3 font-semibold rounded-md bg-black text-white"
            >
              Sign in
            </button>
          </div>
          <p class="px-6 text-sm text-center">
            Don't have an account yet?
            <a rel="noopener noreferrer" href="#" class="hover:underline"> Sign up </a>
            .
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
