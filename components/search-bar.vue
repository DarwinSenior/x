<style lang="stylus">
</style>
<template lang="pug">
div(search-bar)
  div.search-line1
    el-input(v-model="activities"
      placeholder="What do you want to explore?")
  div.search-line2
    el-date-picker(
      v-model="date" type="date"
      placeholder="Pick a date" suffix-icon="el-icon-date")
    el-input(
      placeholder="Pick a place")
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
import { Prop, Watch } from 'vue-property-decorator';

@Component({})
export default class SearchBarComponent extends Vue {
}
</script>

