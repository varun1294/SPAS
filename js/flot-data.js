$(document).ready(function() {
    console.log("document ready");
    var offset = 0;
    plot();

    function plot() {
        var sin = [],
            cos = [],
			tan = [];tan.push([1,1236
]);cos.push([2,1127
]);sin.push([3,1535
]);tan.push([4,1228
]);sin.push([5,1376
]);sin.push([6,1746
]);sin.push([7,1388
]);sin.push([8,1376
]);tan.push([9,1241
]);sin.push([10,1389
]);tan.push([11,1332
]);sin.push([12,1399
]);cos.push([13,1093
]);cos.push([14,1165
]);sin.push([15,1460
]);cos.push([16,1000
]);tan.push([17,1189
]);sin.push([18,1404
]);tan.push([19,1274
]);cos.push([20,1163
]);sin.push([21,1473
]);tan.push([22,1236
]);tan.push([23,1312
]);tan.push([24,1243
]);tan.push([25,1331
]);tan.push([26,1265
]);tan.push([27,1313
]);tan.push([28,1297
]);sin.push([29,1366
]);tan.push([30,1215
]);sin.push([31,1488
]);cos.push([32,1098
]);tan.push([33,1351
]);tan.push([34,1337
]);sin.push([35,1501
]);cos.push([36,1032
]);cos.push([37,984
]);cos.push([38,1148
]);sin.push([39,1511
]);cos.push([40,1139
]);sin.push([41,1454
]);tan.push([42,1335
]);tan.push([43,1194
]);tan.push([44,1201
]);tan.push([45,1251
]);tan.push([46,1308
]);cos.push([47,1066
]);cos.push([48,1121
]);tan.push([49,1189
]);sin.push([50,1391
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
                min: 984,
                max: 1746
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