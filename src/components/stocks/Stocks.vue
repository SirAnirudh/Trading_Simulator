<template>
  <div>

    <stock v-for=" stock in stocks" :stock="stock"></stock>

  </div>
</template>


<script>
  import Stock from './Stock'

  export default {
    components: {
      stock: Stock
    },

    computed: {
      stocks() {
        return this.$store.getters.stocks;
      }
    }
  }


</script>
