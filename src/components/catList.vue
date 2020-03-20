<template>
<div class="wrapper">
  <div class="cats">
    <div class="cat" v-for="cat in cats" :key="cat.id">
      <div class="info">
        <h1>{{cat.name}}</h1>
        <!-- <p>{{cat.category}}</p> -->
      </div>
      <div class="image">
        <img :src="'/images/'+cat.image">
      </div>
      <div class="gender">
        <!--<h2>{{cat.name}} is a {{cat.category}} {{cat.gender}} cat!</h2>-->
        <h2 v-if="cat.gender === 'Male'"><i class="fas fa-mars fa-2x" style="color:#2F81C7;"></i></h2>
        <h2 v-if="cat.gender === 'Female'"><i class="fas fa-venus fa-2x" style="color:#E4787E"></i></h2>
        <h2 class ="category"> {{cat.category}} </h2>
        <button class="auto" @click="addLiked(cat)"><i class="far fa-thumbs-up fa-2x"></i></button>
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
        if (cat.like === 0) {
          this.$root.$data.liked.push(cat);
        }
        cat.like += 1;
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
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
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
  height: 65px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.info h1 {
  font-size: 25px;
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
  border-radius: 7px;
}

.auto {
  margin-left: auto;
  transition-duration: 0.1s;
}

.auto:hover {
  background-color: white;
  color: black;
}

.info {
  font-family: 'Amatic SC';
  font-size: 40px !important;
}

.category {
  margin-left: auto;
  margin-top: auto;
  font-family: 'Amatic SC';font-size: 30px
}
</style>
