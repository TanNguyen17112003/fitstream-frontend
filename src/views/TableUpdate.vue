<script setup lang="ts">
const url = window.location.href
const id = url.split('/').slice(-1)[0]
console.log(id)

import axios from 'axios'
import { ref, onMounted } from 'vue'
const table = ref<any>({})
const name = ref<string>('')

onMounted(() => {
  const get_single_table = async () => {
    try {
      const headers = {
        'x-authorization':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJleHAiOjE2OTY1MTkzMjZ9.zkrafHGkE5iLnLYAoNRqeHxYWccvgyfMfdJp8DqZYIA' // Replace with your token
      }
      const res = await axios.get(`http://localhost:8000/tables/${id}`, {
        headers: headers
      })
      table.value = res?.data
      name.value = res?.data?.name || ''
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  get_single_table()
  console.log(table)
})

const update_table = async () => {
  try {
    const res = await axios.patch(`http://localhost:8000/tables/${id}`, {
      name: name.value,
      organization_id: 1
    })
  } catch (error) {
    console.error('Error updating data:', error)
  }
}
</script>

<template>
  <div class="flex items-center justify-center p-5">
    <div class="border w-6/12 shadow-md flex flex-col gap-4 p-5">
      <p class="text-2xl">Update Table</p>
      <h1>
        {{ id }}

        <div class="col-span-full sm:col-span-3 flex flex-col gap-2">
          <label for="firstname" class="text-sm">Table Name</label>
          <input
            v-model="name"
            id="firstname"
            type="text"
            placeholder="Table Name"
            class="w-full border py-1.5 px-2"
          />
        </div>
        <Button @click="update_table" class="bg-blue-500 text-white px-2 mt-3">Update</Button>
      </h1>
    </div>
  </div>
</template>
