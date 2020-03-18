<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="/images/catLogo.jpg">
      </router-link>
    </div>
    <div id="side">
      <router-link to="/category">
        <div class="menu-item browse">
          <img src="/images/catFavicon.ico">
          <p>Category</p>
        </div>
      </router-link>
      <router-link to="/liked">
        <div class="menu-item">
          <img src="/images/catFavicon.ico">
          <p>Liked</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
</div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
  background-color: #C6B89B;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
  font-size: 150%;
  /* Changes the font size of the menu items on the top right */
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 400px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>
