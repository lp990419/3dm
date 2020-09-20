<template>
  <div>
    <sousuo></sousuo>
    <seriesgames></seriesgames>
  </div>
</template>

<script>
import sousuo from "@/components/Sousuo.vue"
import seriesgames from "@/components/Seriesgames.vue";
export default {
  components: {
    seriesgames,
    sousuo
  },
};
</script>