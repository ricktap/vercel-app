<template>
    <Time :time="time">
        <Description>
            <ul>
                <li>The page is rendered during build time and it's result is stored as a static html file from where it'll be served.</li> 
            </ul>
        </Description>
    </Time>
</template>

<script>
import Description from "~/components/Description.vue"
export default {
    async asyncData({ $axios }) {
        const { data: { datetime: time } } = await $axios.get("http://worldtimeapi.org/api/timezone/Europe/Berlin");
        return {
            time
        };
    },
    components: { Description }
}
</script>