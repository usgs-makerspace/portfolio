<template>
  <header>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">home</nuxt-link>
          <nuxt-link to="/projects">projects</nuxt-link>
          <nuxt-link to="/about">about</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
  header {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #35495e;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        margin: 0 10px;

        a {
          text-decoration: none;
          color: white;
        }
      }
    }
  }
</style>
