<template>
    <div class="container" v-on:click="flip">
        <div class="card" v-bind:class="{ flipped: option.flipped }">
            <img class="front" v-if="option.cardName === '8-ball'" src="../image/8-ball.png"/>
            <img class="front" v-if="option.cardName === 'baked-potato'" src="../image/baked-potato.png"/>
            <img class="front" v-if="option.cardName === 'dinosaur'" src="../image/dinosaur.png"/>
            <img class="front" v-if="option.cardName === 'kronos'" src="../image/kronos.png"/>
            <img class="front" v-if="option.cardName === 'rocket'" src="../image/rocket.png"/>
            <img class="front" v-if="option.cardName === 'skinny-unicorn'" src="../image/skinny-unicorn.png"/>
            <img class="front" v-if="option.cardName === 'that-guy'" src="../image/that-guy.png"/>
            <img class="front" v-if="option.cardName === 'zeppelin'" src="../image/zeppelin.png"/>

            <img class="back" src="../image/back.png"/>
        </div>
    </div>
</template>

<script>

    export default{
        props: {
            option: {
                type: Object,
                default () {
                    return {
                        flipped: false,
                        cardName: ''
                    };
                }
            }
        },
        methods: {
            flip() {
                if(this.option.flipped){
                    return;
                }
                this.$emit('flipped', this.option);
            }
        }
    }

</script>

<style scoped>
    .container{
        width: 100px;
        height: 121px;
        margin-right: 3px;
        cursor: pointer;
        position: relative;
        perspective: 800px;
    }

    .card {
        width: 100%;
        height: 100%;
        transition: transform 1s;
        transform-style: preserve-3d;
    }

    .card.flipped {
        transform: rotateY( 180deg );
    }

    .card img {
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        backface-visibility: hidden;
    }

    .card .back {
        background: blue;
        transform: rotateY( 0deg );
    }

    .card .front {
        background: blue;
        transform: rotateY( 180deg );
    }

    @media screen and (max-width: 450px) {
        .container{
            width: 92px;
            height: 111px;
            margin-right: 1px;
        }
    }

    @media screen and (max-width: 380px) {
        .container{
            width: 85px;
            height: 102px;
            margin-right: 1px;
        }
    }

    @media screen and (max-width: 360px) {
        .container{
            width: 70px;
            height: 84px;
            margin-right: 1px;
        }
    }
</style>
