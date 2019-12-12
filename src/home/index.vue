<template>
    <div>
        二级分包页面
        {{ 'homeText:' +  homeText }}
        <van-button @click="change" type="primary" >修改homeText</van-button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      homeText: 'home/text'
    })
  },
  mounted () {

  },
  methods: {
    ...mapActions({
      changeHomeText: 'home/updateText'
    }),
    change () {
      this.changeHomeText('修改了')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>