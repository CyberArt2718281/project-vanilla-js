export class Main{
   constructor(openNewRoute) {
      this.openNewRoute = openNewRoute;
      this.pieChartCanvas = $('#donutChart').get(0).getContext('2d')
      this.pieChartCanvas2 = $('#donutChart2').get(0).getContext('2d')

      const pieData        = {
         labels: [
            'Chrome',
            'IE',
            'FireFox',
            'Safari',
            'Opera',
            'Navigator',
         ],
         datasets: [
            {
               data: [700,500,400,600,300,100],
               backgroundColor : ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
            }
         ]
      }
      const pieOptions     = {
         maintainAspectRatio : false,
         responsive : true,
      }
      new Chart(this.pieChartCanvas, {
         type: 'pie',
         data: pieData,
         options: pieOptions
      })
      new Chart(this.pieChartCanvas2, {
         type: 'pie',
         data: pieData,
         options: pieOptions
      })
   }

}