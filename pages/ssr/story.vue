<template>
<div>
    <Blok :blok="story.content" />
    {{ process.env.VERCEL_GIT_COMMIT_SHA }}
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