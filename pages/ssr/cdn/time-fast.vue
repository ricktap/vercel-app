<template>
    <Time :time="time">
        <Description>
            <ul>
                <li>Each request is served from cache. each cache lives for <strong>3</strong> seconds.</li> 
                <li>After that the next request is still served from cache and a serverless function renders the page new, to store the rendered results in it's cache.</li>
                <li>Any subsequent calls will be served from this cache for the next <strong>3</strong> seconds, before repeating the whole process.</li>
            </ul>
        </Description>
    </Time>
</template>

<script>
import cacheControl from "~/helpers/cacheControl"
import sleep from "~/lib/sleep"

export default {
    middleware: cacheControl({
        'stale-while-revalidate, s-maxage': 3,
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