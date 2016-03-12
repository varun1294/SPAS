
				$(function() {

				Morris.Area({
				element: 'morris-area-chart',
				data: [{
				period: '201611',
				RLR: '165',
				VLR: '176',
				DF: '148'
			},{
				period: '201612',
				RLR: '195',
				VLR: '204',
				DF: '257'
			},{
				period: '201613',
				RLR: '191',
				VLR: '158',
				DF: '141'
			},{
				period: '201614',
				RLR: '152',
				VLR: '141',
				DF: '108'
			},{
				period: '201621',
				RLR: '208',
				VLR: '147',
				DF: '198'
			},{
				period: '201622',
				RLR: '117',
				VLR: '77',
				DF: '96'
			},{
				period: '201623',
				RLR: '165',
				VLR: '159',
				DF: '113'
			},{
				period: '201624',
				RLR: '180',
				VLR: '157',
				DF: '142'
			},{
				period: '201631',
				RLR: '181',
				VLR: '160',
				DF: '151'
			},{
				period: '201632',
				RLR: '180',
				VLR: '79',
				DF: '117'
			},{
				period: '201633',
				RLR: '228',
				VLR: '124',
				DF: '110'
			},{
				period: '201634',
				RLR: '171',
				VLR: '104',
				DF: '230'
			},{
				period: '201641',
				RLR: '99',
				VLR: '128',
				DF: '103'
			},{
				period: '201642',
				RLR: '138',
				VLR: '155',
				DF: '97'
			},{
				period: '201643',
				RLR: '100',
				VLR: '130',
				DF: '105'
			},{
				period: '201644',
				RLR: '202',
				VLR: '120',
				DF: '223'
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