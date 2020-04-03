<template>
  <nuxt-link :to="'/projects/' + id">
    <article class="project">
      <div class="thumbnail" :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div>
      <h1>{{ title }}</h1>
      <p>{{ previewText }}</p>
    </article>
  </nuxt-link>
</template>

<script>
  export default {
    props: ['thumbnail', 'title', 'previewText', 'id']
  }
</script>

<style scoped lang="scss">
  .projects {
    display:flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    a {
      text-decoration: none;
      color: black;
    }
    .project {
      box-sizing: border-box;
      width: 280px;
      padding: 8px;
      border: 1px solid gray;
      box-shadow: 0 2px 2px darkgrey;
      .thumbnail {
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 200px;

      }
    }
  }
</style>
