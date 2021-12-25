<template>
    <Time :time="time">
        <Description>
            <ul>
                <li>Each request is served by a serverless function.</li> 
                <li>There is no caching involved.</li>
            </ul>
        </Description>
    </Time>
</template>

<script>
export default {
    async asyncData({ $axios }) {
        const { data: { datetime: time } } = await $axios.get("http://worldtimeapi.org/api/timezone/Europe/Berlin")

        return {
            time
        }
    }
}
</script>