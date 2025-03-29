<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import axios from 'axios'

interface IUser {
  fullName: string
  email: string
}

const user = ref<IUser>()

onMounted(() => {
  const get_user_from_token = async () => {
    const access_token = localStorage.getItem('access_token')
    const res = await axios.get(
      `http://localhost:8000/auth/get-user-from-token?token=${access_token}`
    )
    user.value = res.data
  }
  get_user_from_token()
})

const inputValue = ref('')

watch(inputValue, (newValue, oldValue) => {
  console.log('Input value changed from', oldValue, 'to', newValue)
})
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-2xl bg-green-300">User Authentication success</h1>
    <p>Full Name : {{ user?.fullName }}</p>
    <p>Email : {{ user?.email }}</p>
    <h1 class="font-semibold">Watch Demo</h1>
    <input v-model="inputValue" placeholder="Enter something" />
  </div>
</template>
