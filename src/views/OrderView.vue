<!-- <script setup lang="ts">
import { ref } from 'vue'
const heading = 'Loin Here'
const description = 'Welcome back !'
import axios from 'axios'
import { useRouter } from 'vue-router'

const sale_id = ref<number>()
const item_id = ref<number>()
const status = ref<number>()
const rate = ref<number>()
const amount = ref<number>()
const quantity = ref<number>()
const unit_id = ref<number>()
const organization_id = ref<number>()
const created_by_id = ref<number>()
const response = ref<any>()
const router = useRouter()

const handleCreate = async (e: any) => {
  e.preventDefault()
  const res = await axios.post('http://localhost:8000/order-items', {
    // sale_id:2,
    item_id: 4,
    status: 'Processing',
    rate: 10,
    amount: 5,
    quantity: 2,
    unit_id: 2,
    organization_id: 1,
    created_by_id: 1
  })
  response.value = res?.data
}
console.log(response)
</script> -->

<script setup lang="ts">
import { ref } from 'vue'
const heading = 'Loin Here'
const description = 'Welcome back !'
import axios from 'axios'
import { useRouter } from 'vue-router'

const sale_id = ref<number>()
const item_id = ref<number>()
const status = ref<number>()
const rate = ref<number>()
const amount = ref<number>()
const quantity = ref<number>()
const unit_id = ref<number>()
const organization_id = ref<number>()
const created_by_id = ref<number>()
const response = ref()
const router = useRouter()

const handleCreate = async (e: any) => {
  e.preventDefault()
  try {
    const res = await axios.post('http://localhost:8000/order-items', {
      // sale_id:2,
      item_id: 4,
      status: 'Processing',
      rate: 10,
      amount: 5,
      quantity: 2,
      unit_id: 2,
      organization_id: 1,
      created_by_id: 1
    })
    console.log('Test')
    // response.value = res?.data
    console.log(response.value) // Log the response here
    console.log('Test')
  } catch (error: any) {
    // console.log(error?.response.data.detail)
    // console.log(error?.response.data.detail[0].msg)
    response.value = error?.response.data.detail[0].msg
  }
}
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="flex flex-col max-w-md p-6 rounded-md sm:p-10 shadow-md w-full md:w-6/12 border">
      <div>
        <p>Email: {{ response }}</p>
      </div>

      <form @submit="handleCreate" action="" class="space-y-12">
        <div class="space-y-4">
          <div>
            <label class="block mb-2 text-sm"> Sale Id</label>
            <input type="number" v-model="sale_id" class="w-full px-3 py-2 border rounded-md" />
            <p class=" text-red-500 text-xs"> {{ response }}</p>
          </div>

          <div>
            <label class="block mb-2 text-sm"> Item Id</label>
            <input type="number" v-model="item_id" class="w-full px-3 py-2 border rounded-md" />
          </div>

          <div>
            <label class="block mb-2 text-sm"> Status </label>
            <input type="text" v-model="status" class="w-full px-3 py-2 border rounded-md" />
          </div>

          <div>
            <label class="block mb-2 text-sm"> Rate </label>
            <input type="number" v-model="rate" class="w-full px-3 py-2 border rounded-md" />
          </div>

          <div>
            <label class="block mb-2 text-sm"> Amount </label>
            <input type="number" v-model="amount" class="w-full px-3 py-2 border rounded-md" />
          </div>

          <div>
            <label class="block mb-2 text-sm">Quantity</label>
            <input type="number" v-model="quantity" class="w-full px-3 py-2 border rounded-md" />
          </div>

          <div>
            <label class="block mb-2 text-sm">Unit</label>
            <input type="number" v-model="unit_id" class="w-full px-3 py-2 border rounded-md" />
          </div>

          <div>
            <label class="block mb-2 text-sm">Organization</label>
            <input
              type="number"
              v-model="organization_id"
              class="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm">Created By</label>
            <input
              type="number"
              v-model="created_by_id"
              class="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
        <div class="space-y-2">
          <div>
            <button
              type="submit"
              class="w-full px-8 py-3 font-semibold rounded-md bg-black text-white"
            >
              Sign in
            </button>
          </div>
          <p class="px-6 text-sm text-center">
            Don't have an account yet?
            <a rel="noopener noreferrer" href="#" class="hover:underline"> Sign up </a>
            .
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
