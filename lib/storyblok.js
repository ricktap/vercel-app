const useStoryblock = async ({ $storyapi }, cv) => {
    const result = await $storyapi.get('cdn/stories/ssg/story', {
        version: 'draft',
        cv
    }).then((res) => {
        console.log(res)
        return res.data
    })

    return result.story
}

const addVisualEditorEventListener = ($storybridge, story) => {
    $storybridge(() => {
        const storyblokInstance = new StoryblokBridge()

        // Listen to Storyblok's Visual Editor event
        storyblokInstance.on(['input', 'published', 'change'], (event) => {
            if (event.action == 'input') {
                if (event.story.id === story.id) {
                    story.content = event.story.content
                }
            }
        })
    }, (error) => {
        console.error(error)
    })
}

export {
    useStoryblock,
    addVisualEditorEventListener
}