<template>

  <div class="wrapper">
   <div class ="header">
      <h1>The Cat with the Most Likes</h1>
    </div>
  <div class = "cats">
  
    
  
    <div class="cat" v-for="cat in cats" :key="cat.id">
      <div v-if="cat.like === maxVal(cats)">
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
          <h2 class ="category"> {{cat.category}} /  Like:{{cat.like}}</h2>
        </div>
      </div>
    </div>
  </div>
  </div>

</template>

<script>
  export default {
    name: 'Rank',
    computed: {
      cats() {
        return this.$root.$data.cats;
      },
    },
    methods: {
      maxVal: function(array) {
        var highest = Number.NEGATIVE_INFINITY;
        var tmp;
        for (var i=array.length-1; i>=0; i--) {
          tmp = array[i].like;
          if (tmp > highest) highest = tmp;
        }
        return highest;
      }  
    },
  }
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .header {
    font-family: 'Amatic SC';
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

.info h1 {
  font-size: 25px;
  margin-bottom:
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

button {
  height: 60px;
  background: #000;
  color: white;
  border: none;
  border-radius: 7px;
  font-size: 20px;
}
.category {
  margin-left: auto;
  margin-top: auto;
  font-family: 'Amatic SC';font-size: 30px
}

.gender {
  display: flex;
  align-items: flex-start;
  font-size: 100%;
}

</style>
