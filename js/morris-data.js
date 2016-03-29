
				$(function() {

				Morris.Area({
				element: 'morris-area-chart',
				data: [{
				period: '201611',
				RLR: '183',
				VLR: '116',
				DF: '190'
			},{
				period: '201612',
				RLR: '102',
				VLR: '66',
				DF: '49'
			},{
				period: '201613',
				RLR: '0',
				VLR: '0',
				DF: '0'
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
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});