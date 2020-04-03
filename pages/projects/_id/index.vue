<template>
  <section class="single-project">
    <h1>{{ $route.params.id }}</h1>
    <div>
      <img class="project-image" :src="project.thumbnail" :alt="project.title">
    </div>
    <p>{{ project.descriptionText }}</p>
  </section>
</template>

<script>
  export default {
    asyncData(context) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            project: [
              {
                id: '1',
                title: 'test one',
                previewText: 'some great stuff here',
                descriptionText: 'this is the best project ever',
                thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/56/Google_maps_screenshot.png'
              },
              {
                id: '2',
                title: 'test two',
                previewText: 'totally the best',
                descriptionText: 'even better and does all the stuff you want',
                thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/56/Google_maps_screenshot.png'
              },
              {
                id: '3',
                title: 'test three',
                previewText: 'so super',
                descriptionText: 'this is the superest project ever',
                thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/56/Google_maps_screenshot.png'
              },
              {
                id: '4',
                title: 'test four',
                previewText: 'hot and new',
                descriptionText: 'as hard as it is to believe, this is even better than the last thing.',
                thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/56/Google_maps_screenshot.png'
              }
            ].find(project => project.id === context.params.id)
          })
        }, 500)
      })
    }
  }
</script>

<style scoped lang="scss">
  .single-project {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 30px;

    .project-image {
      width: 100%;
    }
  }
</style>
