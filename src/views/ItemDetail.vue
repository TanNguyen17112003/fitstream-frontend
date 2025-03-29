<script setup lang="ts">
const url = window.location.href
const id = url.split('/').slice(-1)[0]
console.log(id)

import axios from 'axios'
import { ref, onMounted } from 'vue'
const item = ref<any>()

onMounted(() => {
  const get_single_item = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/items/${id}`)
      item.value = res?.data
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  get_single_item()
  console.log(item)
})
</script>

<template>
  <P class="text-2xl">item Detail</P>
  <div>
    <p>{{ item?.name }}</p>
    <p>{{ item?.is_inventory_trackable }}</p>
    <p>{{ item?.is_service_item }}</p>
    <p>{{ item?.organization_id }}</p>
    <p>{{ item?.created_at }}</p>
    <p>{{ item?.modified_at }}</p>
  </div>
</template>
