'use strict';



eventsApp.filter('durations', function() {
    return function(duration) {
        switch (duration) {
            case 1:
                return "Half Hour";
            case 2:
                return "1 Hour";
            case 3:
                return "Half Day";
            case 4:
                return "Full Day";
        }
    }
});



eventsApp.filter('nile', function() {
    return function(item) {
        switch (item) {
            case 1:
                return "ahmed Hour";
            case 2:
                return "1 Hour";
            case 3:
                return "ahmed Day";
            case 4:
                return "ahmed Day";
        }
    }
});

eventsApp.filter('capitalizeFirst',function(){
	return function(item){
		return item.charAt(0).toUpperCase()+item.substring(1);
	}
});