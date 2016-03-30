
				$(function() {

				Morris.Area({
				element: 'morris-area-chart',
				data: [{
				period: '201611',
				RLR: '197',
				VLR: '158',
				DF: '123'
			},{
				period: '201612',
				RLR: '119',
				VLR: '174',
				DF: '147'
			},{
				period: '201613',
				RLR: '113',
				VLR: '169',
				DF: '189'
			},{
				period: '201614',
				RLR: '0',
				VLR: '0',
				DF: '0'
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
            value: 459

        }, {
            label: "RLR",
            value: 429

        }, {
            label: "VLR",
            value: 501

        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'DF',
            a: 459
,
            b: 490
        }, {
            y: 'RLR',
            a: 429
,
            b: 440
        }, {
            y: 'VLR',
            a: 501
,
            b: 513
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Your Activity', 'Cluster Activity'],
        hideHover: 'auto',
        resize: true
    });

});