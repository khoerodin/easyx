<template>
  <div>
    <h4>Another Component</h4>
    <input :value="sebuahData" @keyup='tulis'>
  </div>
</template>

<script>
export default {
  name: 'Another',
  computed: {
    sebuahData: function () {
      return this.$store.getters.getSebuahData
    }
  },
  methods: {
    tulis: function (event) {
      this.$store.commit('changeSebuahData', event.target.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
