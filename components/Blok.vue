<template>
    <component :is="blok.component" :blok="blok" />
</template>

<script>
export default {
    props: {
        blok: {
            type: Object,
            required: true
        }
    }
} 
</script>