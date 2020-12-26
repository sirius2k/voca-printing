<template lang="html">
  <span class="color-box border" v-bind:class="color" @click="onClick"></span>
</template>

<script>
export default {
  name: 'ColorSelector',
  props: {
    color: String
  },
  data () {
    return {
    }
  },
  methods: {
    onClick: function() {
      this.$emit('change-color', this.$props.color)
    }
  }
}
</script>

<style lang="css">
  .color-box {
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    margin: .25rem;
    cursor: pointer;
  }
  </style>
