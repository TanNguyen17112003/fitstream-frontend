<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue'

const tableHeadings = [
  'S.N',
  'Name',
  'Organization',
  'Inventory Trackable ',
  'Service Item',
  'CreatedAt',
  'UpdatedAt',
  'Actions'
]
const items = ref<any>([])

onMounted(() => {
  const get_all_items = async () => {
    try {
      const res = await axios.get('http://localhost:8000/items')
      items.value = res.data
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  get_all_items()
})

const deleteTable = async (id) => {
  try {
    await axios.delete(`http://localhost:8000/items/${id}`)
    // Assuming the delete request was successful, remove the item from the items array
    items.value = items.value.filter((item) => item.id !== id)
  } catch (error) {
    console.error('Error deleting item:', error)
  }
}
</script>

<template>
  <div class="container p-2 mx-auto sm:p-4">
    <h2 class="mb-4 text-2xl font-semibold leadi">All items</h2>
    <div class="overflow-x-auto">
      <table class="w-full p-6 text-xs text-left whitespace-nowrap">
        <colgroup>
          <col class="w-5" />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col class="w-5" />
        </colgroup>
        <thead>
          <tr class="">
            <th class="p-3" v-for="(heading, index) in tableHeadings" :key="index">
              {{ heading }}
            </th>
          </tr>
        </thead>
        <tbody class="border-b">
          <tr v-for="(item, index) in items" :key="index">
            <td class="px-3 text-xl">{{ index + 1 }}</td>
            <td class="px-3 py-2">{{ item.name }}</td>
            <td class="px-3 py-2">
              {{ item.organization_id }}
            </td>
            <td class="px-3 py-2">{{ item.is_inventory_trackable }}</td>

            <td class="px-3 py-2">{{ item.is_service_item }}</td>
            <td class="px-3 py-2">
              {{ item.created_at }}
            </td>
            <td class="px-3 py-2">
              {{ item.modified_at }}
            </td>
            <td class="px-3 py-2 flex gap-5">
              <router-link :to="'/items/view/' + item.id">
                <button class="cursor-pointer">View</button>
              </router-link>

              <router-link :to="'/items/update/' + item.id">
                <button class="cursor-pointer">Edit</button>
              </router-link>
              <button class="cursor-pointer" @click="deleteTable(item.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
