<template>
    <div class="time">
        {{ time }}
    </div>
</template>

<script>
export default {
    props: {
        time: {
            required: true,
        }
    }
}
</script>