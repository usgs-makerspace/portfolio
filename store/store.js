// import Vue from 'vue'
// import Vuex from 'vuex'
//
// Vue.use(Vuex)
//
//
// export default new Vuex.Store({
//   state: {
//     projectsDetails: []
//   },
//   actions: {
    // loadProjects ({ commit }) {
    //   axios
    //     .get('https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/makerspace-portfolio-application-details-file/projectDetails.js')
    //     .then(r => r.data)
    //     .then(projectsDetails => {
    //       console.log(projectsDetails)
    //     })
    // }
//
//     async getIP ({ commit }) {
//       const ip = await this.$axios.$get('https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/makerspace-portfolio-application-details-file/projectDetails.js')
//       commit('SET_PROJECTS', projectsDetails)
//       console.log('in state projectsDetails ', projectsDetails)
//     }
//   },
//   mutations: {
//     SET_PROJECTS (state, projectsDetails) {
//       state.projectsDetails = projectsDetails
//     }
//   }
// });
