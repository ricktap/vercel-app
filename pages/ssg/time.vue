<template>
    <Time :time="time" />
</template>

<script>
export default {
    async asyncData() {
        const { data: { datetime: time } } = await $axios.get("http://worldtimeapi.org/api/timezone/Europe/Berlin")

        return {
            time
        }
    }
}
</script>