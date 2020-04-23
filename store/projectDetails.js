export const state = () => ({
  projectsDetails: []
});

export const actions = {
  async getProjectDetails ({ commit }) {
    const projectDetails = await this.$axios.$get('https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/makerspace-portfolio-application-details-file/projectDetails.js')
    commit('SET_PROJECT_DETAILS', projectDetails);
  }
};

export const mutations = {
  SET_PROJECT_DETAILS (state, projectsDetails) {
    state.projectsDetails = projectsDetails;
  }
};
