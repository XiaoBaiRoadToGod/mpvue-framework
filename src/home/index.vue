<template>
    <div>
        二级分包页面
        {{ 'homeText:' +  homeText }}
        <button @click="change" >修改homeText</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
    export default {
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters({
               homeText: 'home/text' 
            })
        },
        mounted () {
            console.log(this.$store)
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