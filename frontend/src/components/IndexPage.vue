<template lang="html">
  <div class="container">
    <div class="card-deck mb-3 text-center">
        <card v-bind:printMode="printMode" v-bind:resetTrigger="resetTrigger"></card>
        <card v-bind:printMode="printMode" v-bind:resetTrigger="resetTrigger"></card>
    </div>
    <div class="card-deck mb-3 text-center">
        <card v-bind:printMode="printMode" v-bind:resetTrigger="resetTrigger"></card>
        <card v-bind:printMode="printMode" v-bind:resetTrigger="resetTrigger"></card>
    </div>
    <div class="text-center">
      <b-button v-if="!printMode" v-on:click="print" variant="danger">Print</b-button>
      <b-button v-if="!printMode" v-on:click="resetAll" variant="light">Reset</b-button>
    </div>
  </div>
</template>

<script>
import Card from './Card'

export default {
  name: 'IndexPage',
  components: {
    'card': Card
  },
  data () {
    return {
      printMode: false,
      resetTrigger: false
    }
  },
  methods: {
    print: function(event) {
      this.printMode = true
    },
    revert: function(event) {
      this.printMode = false
    },
    resetAll: function(event) {
      this.resetTrigger = !this.resetTrigger
    }
  },
  mounted() {
    window.addEventListener('keydown', (e) => {
      var key = e.which || e.keyCode

      if (this.printMode && key === 27) {
        this.revert()
      }
    })
  }
}
</script>

<style lang="css">
  @media (min-width: 768px) {
    html {
      font-size: 16px;
    }
  }

  .container {
    max-width: 960px;
  }

  .pricing-header {
    max-width: 700px;
  }

  .card-deck {
    min-width: 220px;
  }
</style>
