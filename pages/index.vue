<template>
    <div>
    <ul>
    <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
  </ul>
<div v-for="content in posts" :key="content.id">
  <div v-html="content.html"></div>
</div>
  </div>
</template>

<script>
  import { getPages } from '../api/posts';

  export default {
    async asyncData () {
      const posts = await getPages();
      return { posts: posts }
    }
  }
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
