<script setup lang="ts">
const url = window.location.href
const id = url.split('/').slice(-1)[0]
console.log(id)

import axios from 'axios'
import { ref, onMounted } from 'vue'
const itemUnit = ref<any>()

onMounted(() => {
  const get_single_itemUnit = async () => {
    const headers = {
      'x-authorization':
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJleHAiOjE2OTY1MTkzMjZ9.zkrafHGkE5iLnLYAoNRqeHxYWccvgyfMfdJp8DqZYIA' // Replace with your token
    }
    try {
      const res = await axios.get(`http://localhost:8000/itemUnits/${id}`, {
        headers: headers
      })
      itemUnit.value = res?.data
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  get_single_itemUnit()
  console.log(itemUnit)
})
</script>

<template>
  <P class="text-2xl">ItemUnit Detail</P>
  <div>
    <p>{{ itemUnit?.name }}</p>
    <p>{{ itemUnit?.selling_price }}</p>
    <p>{{ itemUnit?.ratio }}</p>
    <p>{{ itemUnit?.organization_id }}</p>
    <p>{{ itemUnit?.created_at }}</p>
    <p>{{ itemUnit?.modified_at }}</p>
  </div>
</template>
