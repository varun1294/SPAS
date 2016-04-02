
				$(function() {

				Morris.Area({
				element: 'morris-area-chart',
				data: [{
				period: '201611',
				RLR: '205',
				VLR: '134',
				DF: '93'
			},{
				period: '201612',
				RLR: '115',
				VLR: '182',
				DF: '164'
			},{
				period: '201613',
				RLR: '113',
				VLR: '144',
				DF: '86'
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
            value: 343

        }, {
            label: "RLR",
            value: 433

        }, {
            label: "VLR",
            value: 460

        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'DF',
            a: 343
,
            b: 354
        }, {
            y: 'RLR',
            a: 433
,
            b: 440
        }, {
            y: 'VLR',
            a: 460
,
            b: 451
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Your Activity', 'Cluster Activity'],
        hideHover: 'auto',
        resize: true
    });

});