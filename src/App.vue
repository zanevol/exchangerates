<template>
  <div id="app">
		<ExchangeRates/>
  </div>
</template>

<script>
import ExchangeRates from "@/components/ExchangeRates";

export default {
  name: 'App',
  components: {ExchangeRates}
}
</script>

<style lang="sass">
#app 
	max-width: 1140px
	height: 100vh
	display: flex
	align-items: center
	justify-content: center
	margin: 0 auto
	background: #F2F2F2
	font-family: 'Roboto', sans-serif
</style>
