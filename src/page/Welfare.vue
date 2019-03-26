<template>
    <div class="container" v-infinite-scroll="loadmore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <LazyImg v-for="data in dataSet" :url="data.url" :key="data._id"></LazyImg>
    </div>
</template>

<script>
import LazyImg from '../components/LazyImg'
import {getBeauty} from '../api/api'
export default {
    components: {
        LazyImg
    },
    data() {
        return {
            dataSet: [],
            busy: false,
            page: 1
        }
    },
    methods: {
        load() {
            this.$store.commit('updateLoading', true)
            getBeauty(this.page).then(res => {
                console.log(res)
                this.dataSet = this.dataSet.concat(res.data.results)
                this.busy = false
                this.$nextTick(() => {
                    this.$store.commit('updateLoading', false)
                })
            })
        },
        loadmore() {
            this.busy = true
            this.load()
            this.page++
        }
    }
}
</script>

<style lang='less' scoped>
    
</style>