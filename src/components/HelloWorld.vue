<template>
  <div>
    <h4>HelloWorld Component</h4>
    <h4>{{ sebuahData }}</h4>
    <hr>
    <another></another>
  </div>  
</template>

<script>
import Another from '@/components/Another'

export default {
  name: 'HelloWorld',
  components: { Another },
  computed: {
    sebuahData: function () {
      return this.$store.getters.getSebuahData
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
