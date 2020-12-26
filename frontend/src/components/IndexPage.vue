<template lang="html">
  <div class="container">
    <div class="card-deck mb-3 text-center">
      <card v-bind:printMode="printMode" v-bind:resetTrigger="resetTrigger" v-bind:borderClass="borderClass"></card>
      <card v-bind:printMode="printMode" v-bind:resetTrigger="resetTrigger" v-bind:borderClass="borderClass"></card>
    </div>
    <div class="card-deck mb-3 text-center">
      <card v-bind:printMode="printMode" v-bind:resetTrigger="resetTrigger" v-bind:borderClass="borderClass"></card>
      <card v-bind:printMode="printMode" v-bind:resetTrigger="resetTrigger" v-bind:borderClass="borderClass"></card>
    </div>
    <div v-if="!printMode" class="mb-2">
      <div class="text-center">
        <color-selector color="bg-primary" @change-color="onChangeColor"></color-selector>
        <color-selector color="bg-secondary" @change-color="onChangeColor"></color-selector>
        <color-selector color="bg-success" @change-color="onChangeColor"></color-selector>
        <color-selector color="bg-danger" @change-color="onChangeColor"></color-selector>
        <color-selector color="bg-warning" @change-color="onChangeColor"></color-selector>
        <color-selector color="bg-info" @change-color="onChangeColor"></color-selector>
        <color-selector color="bg-light" @change-color="onChangeColor"></color-selector>
        <color-selector color="bg-dark" @change-color="onChangeColor"></color-selector>
      </div>
    </div>
    <div v-if="!printMode" class="text-center">
      <b-button v-on:click="print" variant="danger">Print</b-button>
      <b-button v-on:click="resetAll" variant="light">Reset</b-button>
    </div>
  </div>
</template>

<script>
import Card from './Card'
import ColorSelector from './ColorSelector'

export default {
  name: 'IndexPage',
  components: {
    'card': Card,
    'color-selector': ColorSelector
  },
  data () {
    return {
      printMode: false,
      resetTrigger: false,
      borderClass: 'border-primary'
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
    },
    onChangeColor: function(color) {
      console.log('border-' + color.split('-')[1])

      this.borderClass = 'border-' + color.split('-')[1]
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
