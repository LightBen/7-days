<template>
<div>
  <LanguagePicker></LanguagePicker>
  <div id="app" :lang="$t('lang')" :dir="$t('dir')">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</div>
</template>

<script>
import LanguagePicker from '@/components/widgets/LanguagePicker.vue'

export default {
  name: "app",
  components: {
      LanguagePicker
  },
  data() {
    return {
      lang: "he"
    };
  },
  methods: {
    foo: function() {
    }
  },
  beforeMount: function() {

  },
  created:function() {
    
  },
  mounted: function() {
  
  },
};
</script>

<style src="./styles.scss" lang="scss"></style>


