<template>
  <div>监护</div>
</template>
<script>
import api from '@/api'
export default {
  data() {
    return {};
  },
  onShow() {
    api.getCity().then(res => {
      console.log(res)
    })
  }
};
</script>
