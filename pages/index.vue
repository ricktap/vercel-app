<template>
    <div class="main">
        <dl>
            <dt><a href="/ssr/time">🐌 SSR Time ›</a></dt>
            <dd>Fetches the current time from http://worldtimeapi.org and renders it's result on each request as a server side response.</dd>
            <dt><a href="/ssg/time">🚀 SSG Time ›</a></dt>
            <dd>Fetches the current time during build from http://worldtimeapi.org and renders it's results from a static html file.</dd>
            <dt><a href="/ssr/cdn/time">🚀 SSR CDN Cached Time ›</a></dt>
            <dd>Fetches the current time from http://worldtimeapi.org and renders it's result on each request as a server side response. The response is cached on the edge.</dd>

            <dt><a href="/ssr/story">🐌 SSR Story ›</a></dt>
            <dd>Fetches a story from storyblock and renders it on each request as a server side response.</dd>
            <dt><a href="/ssg/story">🚀 SSG Story ›</a></dt>
            <dd>Fetches a story during build from storyblock and renders it's results from a static html file.</dd>
            <dt><a href="/ssr/cached/story">🚀 Cached SSR Story ›</a></dt>
            <dd>Fetches a story from storyblock and renders it on each request as a server side response. Uses an in memory cache identified by the deployed commit sha.</dd>
        </dl>
    </div>
</template>

<style scoped>
    .main dd {
        width: 33vw;
    }
    .main dt {
        margin-top: 1em;
        font-weight: 700;
    }

    .main dt a {
        text-decoration: none;
        color: #2f2f2f;
    }
</style>