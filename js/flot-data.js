$(document).ready(function() {
    console.log("document ready");
    var offset = 0;
    plot();

    function plot() {
        var sin = [],
            cos = [],
			tan = [];sin.push([1,7101
]);tan.push([2,7353
]);tan.push([3,7230
]);tan.push([4,7336
]);sin.push([5,7030
]);cos.push([6,7577
]);sin.push([7,6944
]);tan.push([8,7234
]);cos.push([9,7554
]);cos.push([10,7451
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
                min: 6944
,
                max: 7577

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