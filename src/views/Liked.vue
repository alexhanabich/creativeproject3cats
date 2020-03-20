<template>
<div class="wrapper">
  <div class="cats">

    <h1 class="noLike" v-if="liked.length === 0">Oh No! You didn't like any cats!</h1>
    

    <div v-if="liked.length > 0">
      <div class="specialNotice">
        <h1>Here are all the <br> cats you liked! <br> <br> But I know you <br> love all of them!</h1>
      </div>
    </div>

    <div class="cat" v-for="cat in liked" :key="cat.id">
      <div class="info">
        <h1>{{cat.name}}</h1>
        <!-- <p>{{cat.category}}</p> -->
      </div>

      <div class="image">
        <img :src="'/images/'+cat.image">
      </div>

      <div class="gender">
        <h2 v-if="cat.gender === 'Male'"><i class="fas fa-mars fa-lg" style="color:#2F81C7;"></i></h2>
        <h2 v-if="cat.gender === 'Female'"><i class="fas fa-venus fa-lg" style="color:#E4787E"></i></h2>
        <button class="auto" @click="unLike(cat)">Unlike</button>
      </div>
    </div>

  </div>
</div>
</template>



<script>
export default {
  name: 'Liked',

  computed: {
    liked() {
      return this.$root.$data.liked;
    },
  },
  methods: {
    unLike: function(cat) {
      cat.bool = true;
      var filteredliked = [];
      filteredliked = this.$root.$data.liked.filter(item => item !== cat)
      this.$root.$data.liked = filteredliked
    }
  },
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
  font-family: 'Amatic SC';
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
  padding: 10px 30px;
  height: 80px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.specialNotice {
  background: white;
  color: black;
  padding: 10px 30px;
  height: 280px;
  border-radius: 50px;
  border-bottom-right-radius: 0;
  font-family: 'Amatic SC';font-size: 15px
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
  margin-top: 0px !important;
}

.quantity {
  display: flex;
  justify-content: center;
}

button {
  height: 60px;
  background: #000;
  color: white;
  border: none;
  border-radius: 7px;
  font-size: 20px;
}

.auto {
  margin-left: auto;
}

.noLike {
  font-family: 'Amatic SC';
  font-size: 70px;
}

</style>
