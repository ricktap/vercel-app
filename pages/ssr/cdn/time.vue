<template>
    <Time :time="time">
        <Description>
            <ul>
                <li>Each request is served from cache. each cache lives for <strong>3</strong> seconds.</li> 
                <li>After that the next request will be served by a serverless function that renders the page, and stores the rendered results in it's cache.</li>
            </ul>
        </Description>
    </Time>
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