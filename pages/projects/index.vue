<template>
  <section class="projects">
    <Project
      v-for="project in projects"
      :key="project.id"
      :thumbnail="project.thumbnail"
      :preview-text="project.previewText"
      :id="project.id"
    />
  </section>
</template>

<script>
  import Project from "../../components/Project";
  export default {
    components: {
      Project
    },
    asyncData() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            projects: [
              {
                id: '1',
                title: 'test one',
                previewText: 'some great stuff here',
                thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/56/Google_maps_screenshot.png'
              },
              {
                id: '2',
                title: 'test two',
                previewText: 'totally the best',
                thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/56/Google_maps_screenshot.png'
              },
              {
                id: '3',
                title: 'test three',
                previewText: 'so super',
                thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/56/Google_maps_screenshot.png'
              },
              {
                id: '4',
                title: 'test four',
                previewText: 'hot and new',
                thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/56/Google_maps_screenshot.png'
              }
            ]
          })
        }, 500)
      })
    }
  }
</script>

<style scoped lang="scss">
  .projects {
    display:flex;
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
</style>
