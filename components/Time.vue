<template>
    <div class="time">
        <p>
            <strong>Time of last rendered resonse:</strong>
        </p>
        <p>
            {{ time }}
        </p>
        <slot />
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