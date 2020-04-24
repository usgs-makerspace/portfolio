<template>
  <div class="placeholder-container">
    <div class="left-panel"></div>
    <div class="center-panel">
      <h3>This is just some placeholder text for what will become the home page.</h3><br>
      <hr>
      <p>Most likely what you want is the 'projects' page. Look toward the top and click the 'projects' button on the navigational bar found there.</p><br>
      <p>
        If you are interested in adding or modifying the content of the 'projects' page, your interests lie in our GitHub repository.
        There you will find the instructions you need: https://github.com/usgs-makerspace/portfolio .
      </p>
    </div>
    <div class="right-panel"></div>
  </div>
</template>

<style scoped lang="scss">
  .placeholder-container {
    margin-top: 5em;
    display: flex;
    .left-panel {
      flex: 1;
    }
    .center-panel {
      flex: 2;
      h3 {
        text-align: center;
      }
    }
    .right-panel {
      flex: 1;
    }
  }
</style>
