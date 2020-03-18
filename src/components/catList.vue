<template>
<div class="wrapper">
  <div class="cats">
    <div class="cat" v-for="cat in cats" :key="cat.id">
      <div class="info">
        <h1>{{cat.name}}</h1>
        <p>{{cat.category}}</p>
      </div>
      <div class="image">
        <img :src="'/images/'+cat.image">
      </div>
      <div class="gender">
        <h2>{{cat.gender}}</h2>
        <button class="auto" @click="addLiked(cat)">Like</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'catList',
  props: {
    cats: Array
  },
  methods: {
    addLiked: function(cat) {
        this.$root.$data.liked.push(cat);
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cats {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.cat {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.cat img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.cat .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #2E292D;
  color: white;
  font-size: large !important;
  /* color: #000; */
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.gender {
  display: flex;
  font-size: 75%;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
