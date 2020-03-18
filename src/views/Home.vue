<template>
<div class="wholePage">
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <catList :cats="cats" />
</div>
</template>

<script>
import catList from "../components/catList.vue"
export default {
  name: 'Home',
  components: {
    catList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    cats() {
      return this.$root.$data.cats.filter(cat => cat.name.toLowerCase().search(this.searchText) >= 0);
    }
  },
}
</script>

<style scoped>
.wholePage {
  background-color: #C6B89B;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
  border-radius: 10px;
  background-color: white;
}

form {
  display: table;
  align-self: center;
  width: 99%;
  border-radius: 10px;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>

<!-- HERE IS A LINK TO THE COLOR SCHEME THAT HAS BEEN GENERATED FROM THE MAIN image
https://coolors.co/918978-c6b89b-2e292d-746960-211807 -->
