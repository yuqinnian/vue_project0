<template>
    <div>
        <ul>
    <!-- <li>消息编号：{{ $route.params.id }}</li> -->
    <li>消息编号：{{ id }}</li>
    <li>消息标题：{{ $route.params.title }}</li>
  </ul>
  <div ref="charts" id="chartDiv"></div>
    </div>
</template>

<script>
// import * as echarts from 'echarts';
export default {
    props:['id','title'],
    data(){
        return {

        }
    },
    methods:{
        initCharts(){
            let myChart=this.$echarts.init(this.$refs.charts);
            console.log(myChart)
            myChart.setOption({
                title:{text:'绘制图表'},
                tooltip:{},
                xAxis:{
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis:{

                },
                series:[{
                    name: '销量',
                    type: 'line',
                    data: [5, 20, 36, 10, 10, 20]  
                }]
            })
        }
    },
    mounted(){
        this.initCharts();
    }
}
</script>

<style>
#chartDiv{
    width: 500px;
    height: 500px;
}
</style>