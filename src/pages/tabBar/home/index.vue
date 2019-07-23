<template>
    <div>
        {{ 'state:' + homeState }}
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import * as types from "@/store/types";
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState({
            homeState: state => state.home.state
        })
    },
    methods: {
        ...mapActions('home', [
            types.REQUEST_DATA
        ])
    }
}
</script>
<style lang="scss" scoped>

</style>


