<script setup lang="ts">
const url = window.location.href
const id = url.split('/').slice(-1)[0]
console.log(id)

import axios from 'axios'
import { ref, onMounted } from 'vue'
const table = ref<any>()

onMounted(() => {
  const get_single_table = async () => {
    const headers = {
      'x-authorization':
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJleHAiOjE2OTY1MTkzMjZ9.zkrafHGkE5iLnLYAoNRqeHxYWccvgyfMfdJp8DqZYIA' // Replace with your token
    }
    try {
      const res = await axios.get(`http://localhost:8000/tables/${id}`, {
        headers: headers
      })
      table.value = res?.data
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  get_single_table()
  console.log(table)
})
</script>

<template>
  <P class="text-2xl">Table Detail</P>
  <div>
    <p>{{ table?.name }}</p>
    <p>{{ table?.organization_id }}</p>
    <p>{{ table?.created_at }}</p>
    <p>{{ table?.modified_at }}</p>
  </div>
</template>
