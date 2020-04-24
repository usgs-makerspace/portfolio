<template>
  <section class="single-project">
    <h1>{{ project.title }}</h1>
    <div>
      <img class="project-image" :src="project.thumbnail" :alt="project.title">
    </div>
    <div class="project-details">
      <p>{{ project.title }}</p>
      <p>{{ project.descriptionText }}</p>
      <p>Project Funding:
        <span v-for="(funder, index) in project.fundingProviders">
        <span v-if="index !== 0">, </span><span>{{ funder }}</span>
      </span>
      </p>
      <p>Current Status: {{ project.currentStatus }}</p>
      <p>Rationale for Current Status: {{ project.currentStatusRationale }}</p>
      <p>Technology used:
        <span v-for="(technologyType, index) in project.technologyUsed">
        <span v-if="index !== 0">, </span><span>{{ technologyType }}</span>
      </span>
      </p>
      <p>Key Terms:
        <span v-for="(term, index) in project.keyTerms">
        <span v-if="index !== 0">, </span><span>{{ term }}</span>
      </span>
      </p>
    </div>
    <div class="key-points">
      <hr>
      <p>Key Points:</p>
      <p>{{ project.keyPoints }}</p>
    </div>
    <div class="project-related-links">
      <hr>
      <p>Project Links:</p>
      <div v-for="(link, index) in project.links">
        <p>
          <a
            :href="link[1]"
            target="_blank"
          >
            <span v-html="link[0]" />
          </a>
        </p>
      </div>
    </div>
    <div class="periods-of-work">
      <hr>
      <p>Periods of Work and Contributors</p>
      <div v-for="(workPeriod, index) in project.periodsOfWork">
        <ul>
          <li>Period {{ index + 1 }}
            <p>{{ workPeriod.workPeriod.startDate }} to
              <span v-if="workPeriod.workPeriod.endDate === ''">current</span>
              <span v-if="workPeriod.workPeriod.endDate !== ''">{{ workPeriod.workPeriod.endDate }}</span>
            </p>
            <p>
              - contributors
              <span v-for="(contributor, index) in workPeriod.contributors">
                <span v-if="index !== 0">, </span>
                <span>{{ contributor }}</span>
              </span>
            </p>
          </li>
        </ul>
      </div>
      <hr>
    </div>
  </section>
</template>
<script>

  export default {
    data() {
      return {
        project: []
      }
    },
    async fetch () {
      const url = 'https://maptiles-prod-website.s3-us-west-2.amazonaws.com/misc/projectDetails.js';
      const projects = await this.$http.$get(url);
      this.project = await projects.find(project => project.id === this.$route.params.id);
    },
    serverPrefetch: false
  }
</script>

<style scoped lang="scss">
  .single-project {
    display: flex;
    flex-flow: column;
    justify-content: left;
    text-align: left;
    padding: 30px;

    .project-image {
      width: 100%;
    }
  }
</style>
