
				$(function() {

				Morris.Area({
				element: 'morris-area-chart',
				data: [{
				period: '201611',
				RLR: '3',
				VLR: '4',
				DF: '3'
			},{
				period: '201612',
				RLR: '5',
				VLR: '6',
				DF: '7'
			},{
				period: '201613',
				RLR: '6',
				VLR: '3',
				DF: '8'
			},{
				period: '201614',
				RLR: '5',
				VLR: '4',
				DF: '9'
			},{
				period: '201621',
				RLR: '6',
				VLR: '5',
				DF: '0'
			},{
				period: '201622',
				RLR: '4',
				VLR: '5',
				DF: '4'
			},{
				period: '201623',
				RLR: '3',
				VLR: '5',
				DF: '5'
			},{
				period: '201624',
				RLR: '5',
				VLR: '5',
				DF: '5'
			},{
				period: '201631',
				RLR: '9',
				VLR: '6',
				DF: '2'
			},{
				period: '201632',
				RLR: '4',
				VLR: '9',
				DF: '3'
			},{
				period: '201633',
				RLR: '7',
				VLR: '4',
				DF: '5'
			},{
				period: '201634',
				RLR: '6',
				VLR: '5',
				DF: '7'
			},{
				period: '201641',
				RLR: '2',
				VLR: '7',
				DF: '2'
			},{
				period: '201642',
				RLR: '4',
				VLR: '8',
				DF: '3'
			},{
				period: '201643',
				RLR: '8',
				VLR: '5',
				DF: '4'
			},{
				period: '201644',
				RLR: '5',
				VLR: '3',
				DF: '7'
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