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
      const res = await axios.get(`http://localhost:8000/itemUnits/${id}`)
      table.value = res?.data
      name.value = res?.data?.name || ''
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  get_single_table()
  console.log(table)
})


const update_unit = async () => {
  try {
    const res = await axios.patch(`http://localhost:8000/itemUnits/${id}`, {
      name: name.value,
      organization_id: 1,
      selling_price:10,
      ratio:1
    })
  } catch (error) {
    console.error('Error updating data:', error)
  }
}
</script>

<template>
  <p class="text-2xl">Update Unit</p>
  <h1>
    {{ id }}

    <div class="col-span-full sm:col-span-3">
      <label for="firstname" class="text-sm">Unit Name</label>
      <input
        v-model="name"
        id="firstname"
        type="text"
        placeholder="Unit Name"
        class="w-full border py-1.5 px-2"
      />
    </div>
    <Button @click="update_unit">Update</Button>
  </h1>
</template>
