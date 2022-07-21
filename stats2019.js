const chartdata='stats2019.csv';

d3.csv(chartdata).then(function(datapoints) {
    console.log(datapoints)
    const Points =[];
    const Goals =[];
    const Titles =[];
    
 
 
       for (i=0;i<datapoints.length;i++){
          Points.push(datapoints[i].Points)
          Goals.push(datapoints[i].Goals)
          Titles.push(datapoints[i].Titles)
          
       }

const myChart= document.getElementById('myChart').getContext('2d');
      
        const StandingsChart = new Chart(myChart,{
            type:'bar',
            data:{
                labels:['Lionel Messi',	
                'Virgil van Dijk',	
                'Cristiano Ronaldo',	
                'Mohamed Salah',	
                'Sadio Mané',	
                'Kylian Mbappé',	
                'Frenkie de Jong',	
                'Eden Hazard',
                'Matthijs de Ligt',	
                'Harry Kane'	   
                ],
                datasets:[{
                    label:'Points',
                    data: Points,
                            backgroundColor:[
                            'rgba(175, 0, 66, 0.75)',
                            'rgba(6, 229, 254, 0.8)',
                            'rgba(6, 0, 254, 0.98)',
                            'rgba(146, 0, 0, 10)',
                            'rgba(146, 250, 0, 1)',
                            'rgba(255, 169, 0, 0.98)',
                            'rgba(0, 0, 148, 0.39)',
                            'rgba(6, 0, 254, 0.98)',
                            'rgba(255, 234, 0, 1)',
                            'rgba(255, 37, 163, 0.71)',
                            'rgba(255, 169, 0, 0.98)',
                            'rgba(146, 0, 0, 1)',
                            'rgba(0, 0, 148, 0.39)',
                            'rgba(255, 234, 0, 1)',
                            'rgba(255, 37, 163, 0.71)',
                            'rgba(175, 0, 66, 0.75)',  
                            ]
                }]
            },
            options: {

                scales:{
                 x:{ ticks:{
                         color:'white'
                     
                     }

                 },
                 y:{
                     ticks:{
                         color:'white'
                     
                     }
                   
                 }
             },
               
                
            plugins: {
                
            title: {
                display: true,
                text: 'Points Scored',
                color:'white'
            },
          
            legend: {
                display: false
                

            }
        }
    }
            
        });  

        const ctx1= document.getElementById('myChart1').getContext('2d');
             const myChart1 = new Chart(ctx1,{
            type:'line',
            data :{
                labels:[
                'Lionel Messi',	
                'Virgil van Dijk',	
                'Cristiano Ronaldo',	
                'Mohamed Salah',	
                'Sadio Mané',	
                'Kylian Mbappé',	
                'Frenkie de Jong',	
                'Eden Hazard',
                'Matthijs de Ligt',	
                'Harry Kane'	],
             datasets:[{
                            label:'Goals',
                            data:	Goals,
                                    backgroundColor:[
                            
                           
                                    'rgba(6, 229, 254, 0.8)',
                                    'rgba(146, 250, 0, 1)',
                                    'rgba(255, 169, 0, 0.98)',  
                                    'rgba(255, 37, 163, 0.71)',
                                    'rgba(255, 234, 0, 1)',
                                    'rgba(247, 0, 0, 0.8)',
                                    'rgba(0, 0, 148, 0.39)',
                                    'rgba(146, 0, 0, 1)',
                                    'rgba(175, 0, 66, 0.75)',                        
                                    'rgba(46, 164, 210, 0.75)',
                                    
                                    ],
                                    borderColor:'rgba(15, 100, 54, 5)',
                                    tension:0.4,
                                    fill:true
                            
                            
                                    
                        }]
            },
            options:{
                scales:{
                 x:{ ticks:{
                         color:'white'
                     
                     }

                 },
                 y:{
                     ticks:{
                         color:'white'
                     
                     }
                     
                   
                 }
             },
                plugins: {
            title: {
                display: true,
                text: 'Goals Scored',
                color:'white'
            },
            legend: {
                display: false

            }
        }
            }
        });
        const ctx2= document.getElementById('myChart2').getContext('2d');
        const myChart2 = new Chart(ctx2,{
            type:'pie',
            data :{
                labels:[ 'Lionel Messi',	
                'Virgil van Dijk',	
                'Cristiano Ronaldo',	
                'Mohamed Salah',	
                'Sadio Mané',	
                'Kylian Mbappé',	
                'Frenkie de Jong',	
                'Eden Hazard',
                'Matthijs de Ligt',	
                'Harry Kane'],
                datasets :[{
                    label:'Titles',
                    data: Titles,
                    backgroundColor:['rgba(6, 229, 254, 0.8)',
                    'rgba(146, 250, 0, 1)',
                    'rgba(6, 0, 254, 0.98)',
                    'rgba(255, 165, 700, 150)',
                    'rgba(175, 0, 66, 0.75)',
                    'rgba(255, 169, 0, 0.98)',
                    'rgba(146, 0, 0, 10)',
                    'rgba(505, 106, 27, 0.98)',                   
                    'rgba(370, 45, 80, 60)'],                                     
                }]
                
            },
            options:{
             scales:{
                 
             },
             
                plugins: {
            title: {
                display: true,
                text: 'Titles Won',
                color:'white'
            },
            legend: {
                display: false

            }
        }
            }

        });
    });
           
