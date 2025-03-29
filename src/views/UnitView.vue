<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue'
const tableHeadings = [
  'S.N',
  'Name',
  'Organization',
  'Selling Price',
  'Ratio',
  'CreatedAt',
  'UpdatedAt',
  'Actions'
]
const itemUnits = ref<any>([])

onMounted(() => {
  const get_all_itemUnits = async () => {
    try {
      const res = await axios.get('http://localhost:8000/itemUnits')
      itemUnits.value = res.data
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  get_all_itemUnits()
})

const deleteTable = async (id) => {
  try {
    await axios.delete(`http://localhost:8000/itemUnits/${id}`)
    // Assuming the delete request was successful, remove the item from the itemUnits array
    itemUnits.value = itemUnits.value.filter((item) => item.id !== id)
  } catch (error) {
    console.error('Error deleting item:', error)
  }
}
</script>

<template>
  <div class="container p-2 mx-auto sm:p-4">
    <h2 class="mb-4 text-2xl font-semibold leadi">All itemUnits</h2>
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
          <tr v-for="(item, index) in itemUnits" :key="index">
            <td class="px-3 text-xl">{{ index + 1 }}</td>
            <td class="px-3 py-2">{{ item.name }}</td>
            <td class="px-3 py-2">
              {{ item.organization_id }}
            </td>
            <td class="px-3 py-2">{{ item.selling_price }}</td>

            <td class="px-3 py-2">{{ item.ratio }}</td>
            <td class="px-3 py-2">
              {{ item.created_at }}
            </td>
            <td class="px-3 py-2">
              {{ item.modified_at }}
            </td>
            <td class="px-3 py-2 flex gap-5">
              <router-link :to="'/units/view/' + item.id">
                <button class="cursor-pointer">View</button>
              </router-link>

              <router-link :to="'/units/update/' + item.id">
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
