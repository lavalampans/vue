<script setup>
defineProps(
        {
            bg: {
                default: "bg-red-100",
                type: String,
            },
        }
    )
</script>

<template>
    <div :class="`${bg} p-6 rounded-lg shadow-md`">
        <slot></slot>
    </div>
</template>