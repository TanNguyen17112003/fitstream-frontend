<script setup lang="ts"></script>

<template>
  <p class="text-2xl text-center py-5">Add Table</p>
  <div class="flex justify-center">
    <div class="border shadow-md w-5/12 p-5">
      <div class="col-span-full sm:col-span-3">
        <label for="firstname" class="text-sm">Table Name</label>
        <input
          id="firstname"
          type="text"
          placeholder="Table Name"
          class="w-full border py-1.5 px-2"
        />
      </div>
    </div>
  </div>
</template>
