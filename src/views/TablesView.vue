<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import TablesTable from '../components/TablesTable.vue'

const name = ref<string>('')
const organization_id = ref<number>()

const createTable = async (e: any) => {
  e.preventDefault()
  const res = await axios.post('http://localhost:8000/tables', {
    name: name.value,
    organization_id: organization_id.value
  })
}
</script>

<template>
  <h1>Here is a child component!</h1>
  <TablesTable />

  <div class="flex justify-center items-center">
    <div class="flex flex-col max-w-md p-6 rounded-md sm:p-10 shadow-md w-full md:w-6/12 border">
      <div class=" text-2xl">Create Table</div>
      <div class="mb-8 text-center"></div>
      <form @submit="createTable" action="" class="space-y-12">
        <div class="space-y-4">
          <div>
            <label for="name" class="block mb-2 text-sm"> Table Name </label>
            <input
              type="test"
              name="name"
              id="name"
              v-model="name"
              placeholder="leroy@jenkins.com"
              class="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <label for="organization_id" class="block mb-2 text-sm"> Organization Id </label>
            <input
              type="number"
              name="organization_id"
              id="organization_id"
              v-model="organization_id"
              placeholder="leroy@jenkins.com"
              class="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <button
            type="submit"
            class="w-full px-8 py-3 font-semibold rounded-md bg-black text-white"
          >
            Create Table
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
