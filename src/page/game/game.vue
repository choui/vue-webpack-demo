<template>
    <div class="game-panel">
        <!-- 组装上、中、下三个部分组件 -->
        <div class="status-bar">
            <h1 class="logo"><a href="https://github.com/leftstick/vue-memory-game" target="_blank">Memory</a></h1>
            <div class="board">
                <span>Pairs Left To Match</span>
                <h2>{{ leftMatched }}</h2>
            </div>
            <div class="score">
                <span>Highest Speed</span>
                <h2>{{ highestSpeed }}</h2>
            </div>
        </div>
        <div class="chessboard">
            <Card v-for="(card, index) of cards" :key="index" :option="card" v-on:flipped="onFlipped"></Card>
        </div>
        <div class="status-footer">
            <span v-if="status === 'READY'">Ready</span>
            <span v-if="status === 'PLAYING'">Playing</span>
            <a v-if="status === 'PASS'" v-on:click.prevent.stop="reset" href>Play again</a>
            <span class="elapsed">{{ elapsedMs }} s</span>
        </div>
    </div>
</template>
<style scoped>
   @import "../../css/game.css";
</style>
<script>
    import  Card  from "../../component/Card";
    import  {shuffle} from  "../../util/util";

    function rest() {
        var cards  = ['8-ball', 'kronos', 'baked-potato', 'dinosaur', 'rocket', 'skinny-unicorn','that-guy', 'zeppelin'];
        cards = [...cards,...cards];
        var index = 0;
        return shuffle(cards = cards.map(function (item) {
            return {cardName:item,flipped:false,id:index++}
        }));
    }


    export default {
        data(){
           return {
                leftMatched:0,
                highestSpeed:0,
                cards:[],
                status:'READY',
                elapsedMs:0,
                timeOutChange:null,
                preItem:null,
                isLastCard:false,
                interVal:null
            }
        },
        methods:{
//            ...mapActions([
//                'updateCards'
//            ]),
            onFlipped(card){
                   var selected = null,twoSame=false,that=this;
                   if(this.status=='READY'){
                       this.status = 'PLAYING';
                       this.interVal = setInterval(function () {
                           that.elapsedMs++
                       },1000)
                   }


                this.cards.forEach(function (item) {
                    if(item.flipped && that.preItem && that.preItem.cardName == item.cardName && item !== card && item.cardName == card.cardName){
                        that.preItem = null;
                        twoSame = true;
                        return;
                    }
                });
                   this.cards.forEach(function (item) {
                       if(item===card && !item.flipped){
                           selected = item;
                           selected.flipped = true;
                           return;
                       }
                   });




                   console.log('twoSame:',twoSame)
                   if(twoSame){
                         this.leftMatched++;
                         clearTimeout(this.timeOutChange);
                   }else {
                       this.preItem = selected;
                       this.timeOutChange = setTimeout(function () {
                           selected.flipped = false;
                       },1000);
                   }

                  if(this.leftMatched==8){
                      this.status = 'PASS';
                      clearInterval(this.interVal);
                  }

            },
            reset(){
                Object.assign(this, {
                    leftMatched: 0,
                    highestSpeed: 0,
                    cards: rest(this.cards),
                    status: 'READY',
                    elapsedMs: 0,
                    timeOutChange: null,
                    preItem: null,
                    isLastCard: false,
                    interVal: null
                });
            }
        },
        created(){
            this.cards = rest(this.cards);
        },
        components: {Card}
    }
</script>