var ContactUs = function () {

	return {
		//main function to initiate the module
		init: function () {
			var map;
			$(document).ready(function () {
				map = new GMaps({
					div: '#map',
					lat: 57.696170,
					lng: 11.928350,
				});
				var marker = map.addMarker({
					lat: 57.696170,
					lng: 11.928350,
					title: 'Loop, Inc.',
					infoWindow: {
						content: "<b>Zanerio, Group AB.</b> Styrmansgatan 24, 414 58<br>Göteborg, Sweden"
					}
				});

				marker.infoWindow.open(map, marker);
			});
		}
	};

}();
