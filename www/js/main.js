
function start(menu) {
	let sweVer = {
		"whole-week": "Hela Veckan",
		"monday": "Måndag",
		"tuesday": "Tisdag",
		"wednesday": "Onsdag",
		"thursday": "Torsdag",
		"friday": "Fredag",
		"saturday": "Lördag",
		"sunday": "Söndag"
	};

	let engVer = {
		"whole-week": "Whole week",
		"monday": "Monday",
		"tuesday": "Tuesday",
		"wednesday": "Wednesday",
		"thursday": "Thursday",
		"friday": "Friday",
		"saturday": "Saturday",
		"sunday": "Sunday"
	};

	let ul = $("<ul/>");
	let li = $("<li/>");
	for (let week in menu) {
		li.append("<h4 class='sv'>" + sweVer[week] + "</h4>");
		li.append("<h4 class='en'>" + engVer[week] + "</h4>");

		let dayDataSv = menu[week]["sv"];
		let dayDataEn = menu[week]["en"];
		for (let meal of dayDataSv) {
			li.append("<h5 class='sv'>" + meal.name + "</p>");
			li.append("<p class='sv text'>" + meal.desc + "</p>");
		};
		for (let meal of dayDataEn) {
			li.append("<h5 class='en'>" + meal.name + "</p>");
			li.append("<p class='en text'>" + meal.desc + "</p>");


		};
	}
	ul.append(li);
	$("main").append(ul);
};

$('.english').on('click', function () {
	$('.en').show();
	$('.sv').hide();
})
$('.swedish').on('click', function () {
	$('.sv').show();
	$('.en').hide();
})

$.getJSON('/json/meny.json', start);
