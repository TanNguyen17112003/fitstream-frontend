<script setup lang="ts">
const url = window.location.href
const id = url.split('/').slice(-1)[0]
console.log(id)

import axios from 'axios'
import { ref, onMounted } from 'vue'
const item = ref<any>({})
const name = ref<string>('')

onMounted(() => {
  const get_single_item = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/items/${id}`)
      item.value = res?.data
      name.value = res?.data?.name || ''
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  get_single_item()
  console.log(item)
})

const update_item = async () => {
  try {
    const res = await axios.patch(`http://localhost:8000/items/${id}`, {
      name: name.value,
      organization_id: 1,
      is_inventory_trackable: false,
      is_service_item: false
    })
  } catch (error) {
    console.error('Error updating data:', error)
  }
}

const selectedOption = ref<string>('')
</script>

<template>
  <p class="text-2xl">Update Item</p>
  <div class="col-span-full sm:col-span-3">
    <label for="firstname" class="text-sm">Item Name</label>
    <input
      v-model="name"
      id="firstname"
      type="text"
      placeholder="Item Name"
      class="w-full border py-1.5 px-2"
    />
  </div>

  <div class="flex flex-col">
    <label for="dropdown">Select an option:</label>
    <select id="dropdown" v-model="selectedOption">
      <option value="true" selected>True</option>
      <option value="false">False</option>
    </select>
  </div>
  <Button @click="update_item">Update</Button>
</template>
