<template>
    <div>
        <wx-parse ref="wxParse" :content="article" />
    </div>
</template>
<script>
import wxParse from 'mpvue-wxparse'
import fly from '@/api/fly'
export default {
    data() {
        return {
            article: null,
        }
    },
    components: { wxParse },
    mounted () {
        this.getData()
    },
    methods: {
        getData() {
            fly.get('https://admin.yuezidao.cn/nursingApi/nurs/item/get?id=4028813036093440').then(res => {
                console.log(res)
                this.article = res.data.content
            });
            
        }
    }    
}
</script>
<style lang="scss" scoped>
// @import url("~mpvue-wxparse/src/wxParse.css");
</style>
