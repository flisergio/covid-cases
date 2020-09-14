async function getData() {
    const response = await fetch("Nasa-zones.csv");
    const data = await response.text();

    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const year = columns[0];
        const temp = columns[1];
    });
}

getData();

function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
}

function vw(v) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
}

var covidData = [];

var covidData1 = [
    {
        country: "Spain", 
        quantity: 217452
    },
    {
        country: "Italy", 
        quantity: 207428
    },
    {
        country: "South Africa", 
        quantity: 5951
    },
    {
        country: "China", 
        quantity: 82875
    },
    {
        country: "Poland", 
        quantity: 13105
    },
    {
        country: "Ukraine", 
        quantity: 11411
    },
    {
        country: "Canada", 
        quantity: 55061
    },
    {
        country: "Germany", 
        quantity: 160758
    },
    {
        country: "Portugal", 
        quantity: 25351
    },
    {
        country: "France", 
        quantity: 130185
    },
    {
        country: "Argentina", 
        quantity: 4519
    }
]

var covidData2 = [
    {
        country: "Spain", 
        quantity: 230698
    },
    {
        country: "Italy", 
        quantity: 223885
    },
    {
        country: "South Africa", 
        quantity: 13524
    },
    {
        country: "China", 
        quantity: 82941
    },
    {
        country: "Poland", 
        quantity: 18016
    },
    {
        country: "Ukraine", 
        quantity: 17858
    },
    {
        country: "Canada", 
        quantity: 74613
    },
    {
        country: "Germany", 
        quantity: 173152
    },
    {
        country: "Portugal", 
        quantity: 28583
    },
    {
        country: "France", 
        quantity: 141919
    },
    {
        country: "Argentina", 
        quantity: 7466
    }
]

var covidData3 = [
    {
        country: "Spain", 
        quantity: 239638
    },
    {
        country: "Italy", 
        quantity: 233197
    },
    {
        country: "South Africa", 
        quantity: 34357
    },
    {
        country: "China", 
        quantity: 83022
    },
    {
        country: "Poland", 
        quantity: 24159
    },
    {
        country: "Ukraine", 
        quantity: 24340
    },
    {
        country: "Canada", 
        quantity: 91705
    },
    {
        country: "Germany", 
        quantity: 181815
    },
    {
        country: "Portugal", 
        quantity: 32700
    },
    {
        country: "France", 
        quantity: 152091
    },
    {
        country: "Argentina", 
        quantity: 17402
    }
]

var covidData4 = [
    {
        country: "Spain", 
        quantity: 244109
    },
    {
        country: "Italy", 
        quantity: 237290
    },
    {
        country: "South Africa", 
        quantity: 73533
    },
    {
        country: "China", 
        quantity: 83221
    },
    {
        country: "Poland", 
        quantity: 29788
    },
    {
        country: "Ukraine", 
        quantity: 32476
    },
    {
        country: "Canada", 
        quantity: 99147
    },
    {
        country: "Germany", 
        quantity: 186461
    },
    {
        country: "Portugal", 
        quantity: 37036
    },
    {
        country: "France", 
        quantity: 157372
    },
    {
        country: "Argentina", 
        quantity: 32772
    }
]

var covidData5 = [
    {
        country: "Spain", 
        quantity: 249659
    },
    {
        country: "Italy", 
        quantity: 240760
    },
    {
        country: "South Africa", 
        quantity: 159333
    },
    {
        country: "China", 
        quantity: 83537
    },
    {
        country: "Poland", 
        quantity: 34775
    },
    {
        country: "Ukraine", 
        quantity: 45887
    },
    {
        country: "Canada", 
        quantity: 104420
    },
    {
        country: "Germany", 
        quantity: 194725
    },
    {
        country: "Portugal", 
        quantity: 42523
    },
    {
        country: "France", 
        quantity: 165719
    },
    {
        country: "Argentina", 
        quantity: 67184
    }
]

var covidData6 = [
    {
        country: "Spain", 
        quantity: 257494
    },
    {
        country: "Italy", 
        quantity: 243506
    },
    {
        country: "South Africa", 
        quantity: 311049
    },
    {
        country: "China", 
        quantity: 83612
    },
    {
        country: "Poland", 
        quantity: 38721
    },
    {
        country: "Ukraine", 
        quantity: 56455
    },
    {
        country: "Canada", 
        quantity: 108827
    },
    {
        country: "Germany", 
        quantity: 199726
    },
    {
        country: "Portugal", 
        quantity: 47426
    },
    {
        country: "France", 
        quantity: 173304
    },
    {
        country: "Argentina", 
        quantity: 111147
    }
]

var covidData7 = [
    {
        country: "Spain", 
        quantity: 297054
    },
    {
        country: "Italy", 
        quantity: 247832
    },
    {
        country: "South Africa", 
        quantity: 503290
    },
    {
        country: "China", 
        quantity: 84385
    },
    {
        country: "Poland", 
        quantity: 46346
    },
    {
        country: "Ukraine", 
        quantity: 72168
    },
    {
        country: "Canada", 
        quantity: 116599
    },
    {
        country: "Germany", 
        quantity: 209653
    },
    {
        country: "Portugal", 
        quantity: 51310
    },
    {
        country: "France", 
        quantity: 191295
    },
    {
        country: "Argentina", 
        quantity: 196530
    }
]

var covidData8 = [
    {
        country: "Spain", 
        quantity: 342813
    },
    {
        country: "Italy", 
        quantity: 252809
    },
    {
        country: "South Africa", 
        quantity: 579140
    },
    {
        country: "China", 
        quantity: 84808
    },
    {
        country: "Poland", 
        quantity: 55319
    },
    {
        country: "Ukraine", 
        quantity: 89719
    },
    {
        country: "Canada", 
        quantity: 121652
    },
    {
        country: "Germany", 
        quantity: 221413
    },
    {
        country: "Portugal", 
        quantity: 53783
    },
    {
        country: "France", 
        quantity: 212211
    },
    {
        country: "Argentina", 
        quantity: 282424
    }
]

var covidData9 = [
    {
        country: "Spain", 
        quantity: 470973
    },
    {
        country: "Italy", 
        quantity: 270189
    },
    {
        country: "South Africa", 
        quantity: 628259
    },
    {
        country: "China", 
        quantity: 85066
    },
    {
        country: "Poland", 
        quantity: 67922
    },
    {
        country: "Ukraine", 
        quantity: 125798
    },
    {
        country: "Canada", 
        quantity: 129425
    },
    {
        country: "Germany", 
        quantity: 243599
    },
    {
        country: "Portugal", 
        quantity: 58243
    },
    {
        country: "France", 
        quantity: 286007
    },
    {
        country: "Argentina", 
        quantity: 428226
    }
]

var covidData10 = [
    {
        country: "Spain", 
        quantity: 566326
    },
    {
        country: "Italy", 
        quantity: 284796
    },
    {
        country: "South Africa", 
        quantity: 646398
    },
    {
        country: "China", 
        quantity: 85174
    },
    {
        country: "Poland", 
        quantity: 73047
    },
    {
        country: "Ukraine", 
        quantity: 151859
    },
    {
        country: "Canada", 
        quantity: 135626
    },
    {
        country: "Germany", 
        quantity: 256850
    },
    {
        country: "Portugal", 
        quantity: 62813
    },
    {
        country: "France", 
        quantity: 363350
    },
    {
        country: "Argentina", 
        quantity: 535692
    }
]

var colors = [
    "#006aff", "#0e66e3", "#1460cc", "#1d5cb5", "#245396", "#6e00ff", "#690ee3", "#6313cf", "#5b18b5", "#541c9e", "#4c2382"
]

var years = [
    "1 May 2020",
    "15 May 2020",
    "1 Jun 2020",
    "15 Jun 2020",
    "1 Jul 2020",
    "15 Jul 2020",
    "1 Aug 2020",
    "14 Aug 2020",
    "1 Sep 2020",
    "11 Sep 2020"
]

var svg = d3.select("#chart1");

function createSvg() {
    d3.selectAll("svg > *").remove();

    var padding = {
        top: vw(2),
        right: vw(2),
        bottom: vw(2),
        left: vw(5)
    }
    
    var chartArea = {
        "width": parseInt(svg.style("width")) - padding.left - padding.right,
        "height": parseInt(svg.style("height")) - padding.top - padding.bottom
    }
    
    var yScale = d3.scaleLinear()
        .domain([0, d3.max(covidData, function(d, i) {
            return d.quantity
        })])
        .range([chartArea.height, 0]).nice();
    
    var xScale = d3.scaleBand()
        .domain(covidData.map(function(d) {
            return d.country
        }))
        .range([0, chartArea.width])
        .padding(.2);
    
    // X Axis
    var xAxis = svg.append("g")
        .classed("xAxis", true)
        .attr(
            "transform", "translate(" + padding.left + "," + (chartArea.height + padding.top) + ")"
        )
        .call(d3.axisBottom(xScale));
        
    // Y Axis
    var yAxisFn = d3.axisLeft(yScale);
    var yAxis = svg.append("g")
        .classed("yAxis", true)
        .attr(
            "transform", "translate(" + padding.left + "," + padding.top + ")"
        );
    yAxisFn(yAxis);
    
    // Bars
    var rectGrp = svg.append("g").attr(
        "transform", "translate(" + padding.left + "," + padding.top + ")"
    );
    
    rectGrp.selectAll("rect").data(covidData).enter()
        .append("rect")
        .attr("width", xScale.bandwidth())
        .attr("height", function(d, i) {
            return chartArea.height - yScale(d.quantity);
        })
        .attr("x", function(d, i) {
            return xScale(d.country);
        })
        .attr("y", function(d, i) {
            return yScale(d.quantity);
        })
        .attr("fill", function(d, i) {
            return colors[i];
        })
        .attr("opacity", 0.75)
        .classed("bar")

    rectGrp.selectAll(".text")
        .data(covidData)
        .enter()
        .append("text")
        .attr("dy", ".75em")
        .attr("y", function(d) {
            return yScale(d.quantity) - 16;
        })
        .attr("x", function(d) {
            return xScale(d.country) + xScale.bandwidth() / 2;
        })
        .attr("text-anchor", "middle")
        .text(function(d) {
            return d.quantity + " cases";
        });
}

window.addEventListener("scroll", function(event) { 
  
    var scrollPosition = this.scrollY; 
    var chart_container = document.getElementById("chart_container");
    var p_date = document.getElementById("p_date");
    var description_container = document.getElementById("description_container");
    // var img_chart = document.getElementById("img_chart");

    if (scrollPosition > 198) {
        chart_container.classList.add("fixed");
        chart_container.classList.remove("absolute_top");
        description_container.style.opacity = ".5";

        covidData = covidData1;
        p_date.innerHTML = years[0];
        createSvg();

        if (scrollPosition > vh(500)) {
            chart_container.classList.add("absolute_top");
            chart_container.classList.remove("fixed");
        }

        if (scrollPosition > (198 + vh(50)) && scrollPosition <= (198 + vh(100))) {
            covidData = covidData2;
            p_date.innerHTML = years[1];
            createSvg();
        }

        else if (scrollPosition > (198 + vh(100)) && scrollPosition <= (198 + vh(150))) {
            covidData = covidData3;
            p_date.innerHTML = years[2];
            createSvg();
        }

        else if (scrollPosition > (198 + vh(150)) && scrollPosition <= (198 + vh(200))) {
            covidData = covidData4;
            p_date.innerHTML = years[3];
            createSvg();
        }

        else if (scrollPosition > (198 + vh(200)) && scrollPosition <= (198 + vh(250))) {
            covidData = covidData5;
            p_date.innerHTML = years[4];
            createSvg();
        }

        else if (scrollPosition > (198 + vh(250)) && scrollPosition <= (198 + vh(300))) {
            covidData = covidData6;
            p_date.innerHTML = years[5];
            createSvg();
        }

        else if (scrollPosition > (198 + vh(300)) && scrollPosition <= (198 + vh(350))) {
            covidData = covidData7;
            p_date.innerHTML = years[6];
            createSvg();
        }

        else if (scrollPosition > (198 + vh(350)) && scrollPosition <= (198 + vh(400))) {
            covidData = covidData8;
            p_date.innerHTML = years[7];
            createSvg();
        }

        else if (scrollPosition > (198 + vh(400)) && scrollPosition <= (198 + vh(450))) {
            covidData = covidData9;
            p_date.innerHTML = years[8];
            createSvg();
        }

        else if (scrollPosition > (198 + vh(450))) {
            covidData = covidData10;
            p_date.innerHTML = years[9];
            createSvg();
        }
    } else {
        chart_container.classList.remove("fixed");
        chart_container.classList.remove("absolute_top");
        description_container.style.opacity = "0";
    }
}); 