<template>
  <div>
    <label :for="label">{{ label }}</label>
    <input type="text" :id="label" v-bind="$attrs" v-model="modelValue" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const { label, modelValue } = defineProps({
  label: String,
  modelValue: String
});

const emit = defineEmits(['update:modelValue']);
</script>
