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
  import projectDetails from "../../assets/projectDetails";

  export default {
    components: {
      Project
    },
    data() {
      return {
        projects: projectDetails.projects,
      }
    },
    computed: {
      projectDetails: function() {
        return this.$store.state.projectDetails;
      }
    },
    mounted() {
      this.xxxloadProjectDetails();
    },
    methods: {
      xxxloadProjectDetails() {
        console.log('computed ', this.projectDetails)

        console.log('state ', this.$store.state.projectDetails)

      }
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
