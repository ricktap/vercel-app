<template>
<div>
    <Blok :blok="story.content" />
    </div>
</template>

<script>
import { useStoryblock, addVisualEditorEventListener } from "~/lib/storyblok";

export default {
    data() {
        return {
            data: { content: {}}
        }
    },
    async asyncData(ctx) {
        const story = await useStoryblock(ctx);

        return {
            story
        }
    },
    mounted() {
        addVisualEditorEventListener(this.$storybridge, this.story)
    }
}
</script>