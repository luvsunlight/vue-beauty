<template>
    <div class='container'>
        <img v-lazy="data.images?data.images[0]+'?imageView2/0/w/200':null" class="img">
        <div class="content">
            <div class="desc">{{ data.desc }}</div>
            <div class="detail">
                <div class="who">{{ data.who }}</div>
                <div class="date">{{ date }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: Object
    },
    computed: {
        date() {
            return this.data.createdAt.split("T")[0]
        }
    },
}
</script>

<style lang='less' scoped>
    .container {
        position: relative;
        margin: 10px;
        height: 200px; 
        overflow: hidden;
        border-radius: 5px;
        box-shadow: 0 0 10px #ccc;
        
        .content {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 10px;
            color: @color-white;
            background: rgba(0,0,0,0.5);
            text-decoration: none;
            text-align: left;

            .detail {
                display: flex;
                .who {
                    flex: 1;
                    text-align: left;
                }
                .date {
                    flex: 1;
                    text-align: right;
                }
            }
        }
    }
</style>