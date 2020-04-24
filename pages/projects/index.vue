<template>
  <div id="projects-page">
    <section class="projects">
      <Project
        v-for="project of projects"
        :key="project.id"
        :thumbnail="project.thumbnail"
        :preview-text="project.previewText"
        :id="project.id"
      />
    </section>
  </div>
</template>

<script>
  import Project from "../../components/Project";
  export default {
    components: {
      Project
    },
    methods: {
      addOne() {
        console.log('add one')
      }
    },
    data () {
      return {
        projects: []
      }
    },
    async fetch () {
      // const url = 'https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/makerspace-portfolio-application/projectDetails.js';
      const url = 'https://maptiles-prod-website.s3-us-west-2.amazonaws.com/misc/projectDetails.js';
      this.projects = await this.$http.$get(url);
    },
    serverPrefetch: false
  }
</script>

<style scoped lang="scss">
#projects-page {
  h1 { color: white }
  background-color: black;

  .projects {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

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
}
</style>
