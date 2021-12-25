<template>
    <div class="main">
        <dl>
            <h4>Time API Examples</h4>
            
            <dt><a href="/ssr/time">SSR ›</a> <span class="speed">🚀</span></dt>
            <dd>
                Fetches the current time from http://worldtimeapi.org and renders it's result on each request as a server side response.
            </dd>
            
            <dt><a href="/ssg/time">SSG ›</a> <span class="speed">🚀🚀🚀</span></dt>
            <dd>
                Fetches the current time during build from http://worldtimeapi.org and renders it's results from a static html file.
            </dd>
            
            <dt><a href="/ssr/cdn/time">SSR with CDN Cache ›</a> <span class="speed">🚀🚀 (can be slow on rebuilds)</span></dt>
            <dd>
                Fetches the current time from http://worldtimeapi.org and renders it's result on each request as a server side response. 
                The response is cached on the edge.
            </dd>
            
            <dt><a href="/ssr/cdn/time-fast">SSR with CDN Cache and Stale Headers ›</a> <span class="speed">🚀🚀🚀</span></dt>
            <dd>
                Fetches the current time from http://worldtimeapi.org and renders it's result on each request as a server side response. 
                The response is cached on the edge. 
                The rebuild will happen behind the scenes to be even faster.
            </dd>

            <hr />

            <h4>Storyblok Examples (WIP)</h4>
            
            <dt><a href="/ssr/story">SSR ›</a> <span class="speed">🚀</span></dt>
            <dd>
                Fetches a story from storyblock and renders it on each request as a server side response.
            </dd>
            
            <dt><a href="/ssg/story">SSG ›</a> <span class="speed">🚀🚀🚀</span></dt>
            <dd>
                Fetches a story during build from storyblock and renders it's results from a static html file.
            </dd>
            <dt><a href="/ssr/cached/story">Cached SSR (not working with serverless) ›</a> <span class="speed">🚀🚀</span></dt>
            <dd>
                Fetches a story from storyblock and renders it on each request as a server side response. 
                Uses an in memory cache identified by the deployed commit sha.
            </dd>
        </dl>
    </div>
</template>

<style scoped>
    .main dd {
        width: 33vw;
        line-height: 1.4em;
        margin-bottom: 0.3em;
    }

    .main dd p {
        padding-left: 10px;
        border-left: 3px solid #dfdfdf;
        margin-left: 5px;
    }
    .main dt {
        margin-top: 1em;
        font-weight: 700;
        font-size: 1.0em;
    }

    .main dt a {
        text-decoration: none;
        color: #2f2f2f;
    }

    hr {
        width: 110%;
        margin: 1.2em 0;
        margin-left: -5%;
    }

    .speed {
        margin: 5px 0;
        font-weight: 500;
    }
</style>