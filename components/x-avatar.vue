<style lang="scss">
</style>
<template lang="pug">
img(x-avatar
  :src="src" :style="size")
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
import { Prop, Watch } from 'vue-property-decorator';

@Component
export default class XAvatarComponent extends Vue {
  @Prop({ default: '' })
  src: string;
  @Prop({ default: 40 })
  size: number;

  get style() {
    return {
      height: this.size,
      width: this.size,
    }
  }
}
</script>

