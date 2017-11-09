<style lang="scss">
[activity-card] {
  width: 100px;
}
</style>
<template lang="pug">
el-card(activity-card)
  img.protrait(:src="activity_img")
  div.line1
    x-avatar

</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
import { Prop, Watch } from 'vue-property-decorator';

@Component
export default class ActivityCardComponent extends Vue {
}
</script>

