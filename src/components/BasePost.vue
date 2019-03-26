<template>
    <div class='container' v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
        <a v-for="data in dataSet" :key="data.id" :href="data.url" target="view_window">
            <Card :data="data"></Card>
        </a>
    </div>
</template>

<script>
import Card from './card'
import {getPost} from '../api/api'

export default {
    components: {
        Card
    },
    props: {
        type: String
    },
    data() {
       return {
           dataSet: [],
           page: 1,
           busy: false
       } 
    },
    methods: {
        load() {
            this.$store.commit('updateLoading', true)
            getPost(this.type, this.page).then(res => {
                // console.log(res)
                this.dataSet = this.dataSet.concat(res.data.results)
                this.busy = false
                this.$nextTick(() => {
                    this.$store.commit('updateLoading', false)
                })
            })
        },
        loadMore() {
            this.busy = true
            this.load()
            this.page++
        }
    }
}
</script>

<style lang='less' scoped>
</style>