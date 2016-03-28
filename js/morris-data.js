
				$(function() {

				Morris.Area({
				element: 'morris-area-chart',
				data: [{
				period: '201611',
				RLR: '172',
				VLR: '227',
				DF: '120'
			},{
				period: '201612',
				RLR: '156',
				VLR: '166',
				DF: '142'
			},{
				period: '201613',
				RLR: '213',
				VLR: '178',
				DF: '180'
			},{
				period: '201614',
				RLR: '217',
				VLR: '197',
				DF: '172'
			},{
				period: '201621',
				RLR: '157',
				VLR: '152',
				DF: '146'
			},{
				period: '201622',
				RLR: '123',
				VLR: '166',
				DF: '150'
			},{
				period: '201623',
				RLR: '201',
				VLR: '223',
				DF: '108'
			},{
				period: '201624',
				RLR: '118',
				VLR: '119',
				DF: '119'
			},{
				period: '201631',
				RLR: '157',
				VLR: '120',
				DF: '190'
			},{
				period: '201632',
				RLR: '150',
				VLR: '105',
				DF: '90'
			},{
				period: '201633',
				RLR: '177',
				VLR: '141',
				DF: '133'
			},{
				period: '201634',
				RLR: '115',
				VLR: '153',
				DF: '227'
			},{
				period: '201641',
				RLR: '152',
				VLR: '94',
				DF: '164'
			},{
				period: '201642',
				RLR: '154',
				VLR: '150',
				DF: '138'
			},{
				period: '201643',
				RLR: '107',
				VLR: '92',
				DF: '213'
			},{
				period: '201644',
				RLR: '141',
				VLR: '174',
				DF: '192'
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