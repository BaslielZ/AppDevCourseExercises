console.log("HelloWorld");


function getData(){
    fetch("https://corsproxy.io/?http://www.cc.puv.fi/~e2402595/record.txt")
  .then(x => x.text())
  .then(dispData);

}

list = []

function dispData(d){
    var p = document.getElementById("text");
    var a = d.split("\n");
    for(var i=0; i<a.length; i++){
        if(a[i].trim() === "") continue;
        line = a[i].trim();
        p.innerHTML += line + "<br>";
        parts = line.split(",").map(x => x.trim());
    
        recordObject = {
            datetime: new Date(parts[0]),
            min: Number(parts[1]),
            max: Number(parts[2]),
            name: parts[3],
            ip: parts[4]
        }
        list.push(recordObject);
    }
    
    console.log(list)
    buildChart();
}


function buildChart() {
    // Create labels from dates
    labels = list.map(item => {
        const date = new Date(item.datetime);
        return date.toLocaleString();
    });
    
    minDataPoints = list.map(item => item.min);
    maxDataPoints = list.map(item => item.max);

    ctx = document.getElementById('myChart').getContext('2d');

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Min',
                    data: minDataPoints,
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: 'rgba(75, 192, 192, 0.8)',
                    borderWidth: 2
                },
                {
                    label: 'Max',
                    data: maxDataPoints,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.8)',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date/Time'
                    }
                },
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Value'
                    }
                }
            },
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });
}


getData();



