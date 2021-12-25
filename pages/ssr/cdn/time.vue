<template>
    <Time :time="time" />
</template>

<script>
import cacheControl from "~/helpers/cacheControl"
export default {
    middleware: cacheControl({
        's-maxage': 3,
    }),
    async asyncData({ $axios }) {
        const { data: { datetime: time } } = await $axios.get("http://worldtimeapi.org/api/timezone/Europe/Berlin")

        return {
            time
        }
    },
    head() {

    }
}
</script>