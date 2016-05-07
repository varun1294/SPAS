
				$(function() {

				Morris.Area({
				element: 'morris-area-chart',
				data: [{
				period: '201611',
				RLR: '639',
				VLR: '486',
				DF: '638'
			},{
				period: '201612',
				RLR: '626',
				VLR: '515',
				DF: '680'
			},{
				period: '201613',
				RLR: '696',
				VLR: '644',
				DF: '840'
			},{
				period: '201614',
				RLR: '783',
				VLR: '797',
				DF: '915'
				}],
				xkey: 'period',
				ykeys: ['RLR', 'VLR', 'DF'],
				labels: ['RLR', 'VLR', 'DF'],
				pointSize: 2,
				hideHover: 'auto',
				resize: true
			});Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Discussion Forum",
            value: 3149

        }, {
            label: "RLR",
            value: 2983

        }, {
            label: "VLR",
            value: 2560

        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'DF',
            a: 3149
,
            b: 3068
        }, {
            y: 'RLR',
            a: 2983
,
            b: 2791
        }, {
            y: 'VLR',
            a: 2560
,
            b: 2737
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Your Activity', 'Cluster Activity'],
        hideHover: 'auto',
        resize: true
    });

});