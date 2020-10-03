<template lang="html">
  <div class="card mb-4 shadow-sm">
      <div class="card-header text-white bg-primary">
          <h4 class="my-0 font-weight-normal">What is the meaning of the word?</h4>
      </div>
      <div class="card-body align-middle">
          <div v-if="printMode">
            <h1 class="card-title card-title-ext">{{word}}</h1>
          </div>
          <div v-else>
            <input v-model="word" class="form-control" type="text" placeholder="Input English Word"/>
          </div>
      </div>
      <hr class="mt-2 mb-3"/>
      <div class="card-body">
          <div v-if="printMode">
            <h1 class="card-title card-title-ext text-flip">{{meaning}}</h1>
          </div>
          <div v-else>
            <input v-model="meaning" class="form-control" type="text" placeholder="Input the meaning of word"/>
          </div>
      </div>
      <div class="card-header text-white text-flip bg-primary">
          <h4 class="my-0 font-weight-normal">What is the word in English?</h4>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    printMode: Boolean,
    resetTrigger: Boolean
  },
  data () {
    return {
      word: '',
      meaning: ''
    }
  },
  methods: {
    resetAll() {
      this.word = ''
      this.meaning = ''
    }
  },
  watch: {
    resetTrigger: function(newVal, oldVal) {
      this.resetAll()
    }
  }
}
</script>

<style lang="css">
  .card {
    min-width: 220px;
  }

  .card-title-ext {
    font-size: 4em;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 220px;
  }

  .text-flip {
    transform: scale(-1, -1);
  }
  </style>
