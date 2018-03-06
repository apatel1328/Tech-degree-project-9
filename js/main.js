

// Line Chart

var trafficChart = document.getElementById('traffic');

var chart = new Chart (trafficChart, {

	type: "line",

	data: {
		labels: ["16 - 22", "23 - 29", "30 - 5", "6 - 12", "13 - 19", "20 - 26", "27 - 3", "4 - 10", "11 - 17", "18 - 24", "25 - 31"],

		datasets: [{
			
			label: "Traffic",
			fill: true,
			backgroundColor: "rgba(116,119,191, 0.3)",
			pointBorderColor: "rgb(116,119,191)",
			pointBackgroundColor: "rgb(255, 255, 255)",
			pointBorderWidth: 2,
            pointRadius: 5,
            lineTension: 0,
			data: [750, 1250, 1000, 1500, 2250, 1500, 1750, 1250, 1750, 2250, 1750, 2250],

		}]
	},

	options: {

        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false,
                    min: 500,
                    stepSize: 500
                }
            }]
        },

        legend: {
        	display: false,
        },
    }

});


//Bar Chart

var dailyTraffic = document.getElementById('daily-traffic');

var chart = new Chart (dailyTraffic, {

	type: "bar",

	data: {
		labels: ["S", "M", "T", "W", "T", "F", "S"],

		datasets: [{
			
			label: "Daily Traffic",
			backgroundColor: "rgb(116,119,191)",
			data: [75, 100, 175, 125, 225, 200, 100],

		}]
	},

	options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    min: 50,
                    stepSize: 50
                }
            }]
        },

        legend: {
        	display: false,
        },
    }

});


//Doughnut

var mobileUsers = document.getElementById('mobile-users');

var chart = new Chart (mobileUsers, {

	type: "doughnut",

	data: {
		labels: ["Phones", "Tablets", "Desktops"],

		datasets: [{
			
			label: "Mobile Users",
			backgroundColor: ['green', 'blue', "rgb(116,119,191)"],
			data: [10, 10, 80],

		}]
	},

	options: {
       
       legend: {
        		position: "right",
        		verticalAlign: "center",
			},


    }

});




//Remove Alert

document.getElementsByClassName('times')[0].addEventListener("click", function(){

	document.getElementsByClassName('alert')[0].style.display = "none";
	document.getElementsByClassName('notification')[0].style.display = "none";

});



//Message form submit


$('#send').on('click', function(event){

	event.preventDefault();

	var userSearch = document.getElementsByClassName('search-user')[0];
	var userSearchValue = userSearch.value.toUpperCase();
	var textArea = document.getElementsByClassName('message')[0].value;
	var users = ["Victoria Chambers", "Dale Byrd", "Dawn Wood", "Dan Oliver"];
	var toUpper = function(x) {
		return x.toUpperCase();
	};
	var userUpper = users.map(toUpper);

	if (userUpper.includes(userSearchValue) && textArea === "") {
		window.alert('Great there is a user, but don\'t forget to write the message');
		$('.search-user').val('');
		$('.message').val('');

	}

	else if (userUpper.includes(userSearchValue) && textArea !== "") {
		window.alert('Great we\'ll send this over now.');
		$('.search-user').val('');
		$('.message').val('');

	}

	 else {
		window.alert('Must enter valid inputs.');
		$('.search-user').val('');
		$('.message').val('');

	}

});


