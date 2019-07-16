<template>
<div>
<LanguagePicker></LanguagePicker>
  <div id="app" :lang="lang" :dir="$t('dir')">
   
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
      lang: "en"
    };
  },
methods: {
foo: function() {
  console.log("button")
 }
},

beforeMount: function(){
  let me = this;
 me.$i18n.locale=this.lang;
},
created:function() {
  let me = this;
      me.$router.beforeEach((to, from, next) => {
      let lang = to.params.lang;
      me.$i18n.locale=lang
      next();
})},
 mounted: function() {
  console.log("Mounted!")
 },
};
</script>

<style src="./styles.scss" lang="scss"></style>


