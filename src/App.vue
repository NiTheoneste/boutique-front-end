<script >
  export default {
  
  } 
</script>

<template>
  <div class="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<style>
.app{
  margin:0;
  padding:0;
}
</style>
