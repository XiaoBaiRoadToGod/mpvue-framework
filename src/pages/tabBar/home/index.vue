<template>
    <div>
        {{ 'text:' + text }}
        <van-button @click="editText" type="default" class="edit-text" >修改text</van-button>
        <van-button @click="onClick" type="primary" >进入分包页面</van-button>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters(['text'])
    },
    methods: {
        ...mapMutations(['updateText']),
        onClick() {
            wx.navigateTo({
                url: '/home/index'
            })
        },
        editText () {
            this.updateText('修改了')
        }
    }
}
</script>
<style lang="scss" scoped>

</style>


