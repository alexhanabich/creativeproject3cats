<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('beautiful')" href="#" class="pure-menu-link">Beautiful</a></li>
      <li class="pure-menu-item"><a @click="select('cool')" href="#" class="pure-menu-link">Cool</a></li>
      <li class="pure-menu-item"><a @click="select('cute')" href="#" class="pure-menu-link">Cute</a></li>
      <li class="pure-menu-item"><a @click="select('fun')" href="#" class="pure-menu-link">Fun</a></li>
    </ul>
  </div>
  <catList :cats="cats" />
</div>
</template>

<script>
import catList from "../components/catList.vue"
export default {
  name: 'Category',
  components: {
    catList
  },
  data() {
    return {
      category: '',
    }
  },
  computed: {
    cats() {
      return this.$root.$data.cats.filter(cat => cat.category === this.category);
    }
  },
  methods: {
    select(category) {
      this.category = category;
    }
  }
}
</script>
