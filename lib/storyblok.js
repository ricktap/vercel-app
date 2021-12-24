const useStoryblock = async ({ $storyapi, route }, cv) => {
    const result = await $storyapi.get('cdn/stories/' + route.path, {
        version: 'draft'
    }).then((res) => {
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