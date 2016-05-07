$(document).ready(function() {
    console.log("document ready");
    var offset = 0;
    plot();

    function plot() {
        var sin = [],
            cos = [],
			tan = [];sin.push([1,7083
]);cos.push([2,7263
]);cos.push([3,8103
]);cos.push([4,7234
]);cos.push([5,8280
]);tan.push([6,9738
]);sin.push([7,6569
]);sin.push([8,6609
]);cos.push([9,7423
]);tan.push([10,8692
]);sin.push([11,6633
]);cos.push([12,7328
]);cos.push([13,7490
]);sin.push([14,6819
]);cos.push([15,7221
]);sin.push([16,5896
]);sin.push([17,5951
]);cos.push([18,8147
]);cos.push([19,7675
]);sin.push([20,7015
]);cos.push([21,7602
]);sin.push([22,6591
]);sin.push([23,6997
]);sin.push([24,7046
]);cos.push([25,7485
]);sin.push([26,6996
]);cos.push([27,7209
]);sin.push([28,6873
]);cos.push([29,7874
]);cos.push([30,7569
]);cos.push([31,8047
]);cos.push([32,7799
]);tan.push([33,9052
]);cos.push([34,7551
]);cos.push([35,8000
]);cos.push([36,7718
]);cos.push([37,7172
]);sin.push([38,6853
]);cos.push([39,7573
]);sin.push([40,6623
]);cos.push([41,8147
]);cos.push([42,7853
]);cos.push([43,7710
]);sin.push([44,6132
]);cos.push([45,7522
]);cos.push([46,7597
]);sin.push([47,5736
]);sin.push([48,6811
]);sin.push([49,6433
]);cos.push([50,7550
]);var options = {
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: true
                }
            },
            grid: {
                hoverable: true //IMPORTANT! this is needed for tooltip to work
            },
            yaxis: {
                min: 5736,
                max: 9738
            },
            tooltip: true,
            tooltipOpts: {
                content: "'%s' : Student : %x : Activity : %y",
                shifts: {
                    x: -60, //x: -60,
                    y: 25 //y: 25
                }
            }
        };

        var plotObj = $.plot($("#flot-line-chart"), [{
                data: sin,
                label: "Cluster 1"
            }, {
                data: cos,
                label: "Cluster 2"
            }, {
				data:tan,
				label: "Cluster 3"
			}],
            options);
    }
});