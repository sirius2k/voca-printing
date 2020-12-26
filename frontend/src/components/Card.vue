<template lang="html">
  <div class="card mb-4 shadow-sm">
      <div class="card-body card-body-ext rounded" v-bind:class="borderClass">
          <div v-if="printMode">
            <div class="h-25 text-flip tag">
              {{tag}}
            </div>
            <div class="h-75 text-flip">
              <div class="card-title card-title-ext" v-resize-text="{ratio:0.8, minFontSize:'50px'}" v-html="htmlNewLine(word)"></div>
            </div>
          </div>
          <div v-else>
            <div class="mb-2">
              <textarea v-model="word" class="form-control" placeholder="Input English Word"/>
            </div>
            <div>
              <div class="row">
                <div class="col-sm"></div>
                <div class="col-sm"></div>
                <div class="col-sm"><input v-model="tag" class="form-control" type="text" placeholder="Tag"/></div>
              </div>
            </div>
          </div>
      </div>
      <div class="divider"></div>
      <div class="card-body card-body-ext rounded" v-bind:class="borderClass">
          <div v-if="printMode">
            <div class="h-75" v-resize-text>
              <div class="card-title card-title-ext" v-resize-text="{ratio:0.8, minFontSize:'50px'}" v-html="htmlNewLine(meaning)"></div>
            </div>
            <div class="h-25 tag">
              {{tag}}
            </div>
          </div>
          <div v-else>
            <div class="mb-2">
              <textarea v-model="meaning" class="form-control" placeholder="Input the meaning of word"/>
            </div>
            <div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    printMode: Boolean,
    resetTrigger: Boolean,
    borderClass: String
  },
  data () {
    return {
      word: '',
      meaning: '',
      tag: ''
    }
  },
  methods: {
    resetAll() {
      this.word = ''
      this.meaning = ''
      this.tag = ''
      this.$props.borderClass = 'border-primary'
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

  .card-body-ext {
    border: 10px solid;
  }

  .card-title-ext {
    font-weight: bold;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 220px;
  }

  .text-flip {
    transform: scale(-1, -1);
  }

  .tag {
    font-size: 1em;
    text-align: right;
  }

  .divider {
    height: 1px;
  }
  </style>
