<template>
    <Time :time="time" />
</template>

<script>
import cacheControl from "~/helpers/cacheControl"
import sleep from "~/lib/sleep"

export default {
    middleware: cacheControl({
        's-maxage': 3,
    }),
    async asyncData({ $axios }) {
        const { data: { datetime: time } } = await $axios.get("http://worldtimeapi.org/api/timezone/Europe/Berlin")

        await sleep(1500)

        return {
            time
        }
    },
    head() {

    }
}
</script>