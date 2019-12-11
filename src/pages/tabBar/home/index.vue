<template>
    <div>
        {{ 'text:' + text }}
        <button @click="editText" >修改text</button>
        <button @click="onClick" >进入分包页面</button>
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


