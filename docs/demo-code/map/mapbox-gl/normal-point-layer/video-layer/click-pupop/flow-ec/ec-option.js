export default {
    getVehicleFlowEc() {
        return {
            legend: {
                icon: 'roundRect',
                show: true,
                top: 0,
                left: 50,
                itemWidth: 20,
                itemHeight: 10,
            },
            grid: {
                top: 20,
                right: 45,
                left: 5,
                bottom: 5,
                containLabel: true
            },
            yAxis: {
                name: '辆',
                // max: function({max}){
                //     // 曲线保持在百分之60左右浮动
                //     if(max==0){
                //         return 10
                //     }
                //     return (Math.ceil(max/0.6/10))*10;
                // },
                nameTextStyle: {
                    padding: [0, 0, -10, 0]
                },
            }
        }
    },
}