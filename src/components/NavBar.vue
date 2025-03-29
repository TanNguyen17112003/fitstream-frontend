<script setup lang="ts"></script>

<template>
  <div class="flex justify-center border-b py-3">
    <div class="flex items-center justify-between w-4/12 font-medium">
      <router-link :to="'/tables'">
        <button class="cursor-pointer">Tables</button>
      </router-link>

      <router-link :to="'/items'">
        <button class="cursor-pointer">Order Items</button>
      </router-link>

      <router-link :to="'/units'">
        <button class="cursor-pointer">Item Unit</button>
      </router-link>
    </div>
  </div>
</template>
