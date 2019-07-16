<template>
  <ul class="languagepicker roundborders">
    <router-link :to="{ path: 'fr' }">
     
        
          <li>
            <img src="http://i65.tinypic.com/300b30k.png" />Français
          </li>
       
     
   </router-link>
    <router-link :to="{ path: 'en' }">
      <li>
        <img src="http://i64.tinypic.com/fd60km.png" />English
      </li>
    </router-link>
  </ul>
</template>

<script>
const initialData = () => {
  return {
    productInForm: {
      id: null,
      name: "",
      description: "",
      price: null
    }
  };
};

export default {
  data: initialData,
  methods: {}
};
</script>

<style scoped lang="scss">


.languagepicker {
    background-color: #FFF;
    padding: 0;
    height: 40px;
    overflow: hidden;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    margin: 0 auto;
    vertical-align: top;
    position: sticky;
    width: 200px;
    cursor: pointer;
    z-index: 2;
    position:absolute;
}

.languagepicker:hover {
	/* don't forget the 1px border */
	height: 81px;
}

.languagepicker a{
	color: #000;
	text-decoration: none;
}

.languagepicker li {
	display: block;
	padding: 0px 20px;
	line-height: 40px;
	border-top: 1px solid #EEE;
}

.languagepicker li:hover{
	background-color: #EEE;
}

.languagepicker a:first-child li {
	border: none;
	background: #FFF !important;
}

.languagepicker li img {
	margin-right: 5px;
}

.roundborders {
	border-radius: 5px;
}
</style>
