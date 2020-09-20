<template>
  <div>
    <sousuo></sousuo>
    <shouyous></shouyous>
  </div>
</template>

<script>
import sousuo from "@/components/Sousuo.vue"
import shouyous from "@/components/Shouyous.vue";
export default {
  components: {
    shouyous,
    sousuo
  },
};
</script>