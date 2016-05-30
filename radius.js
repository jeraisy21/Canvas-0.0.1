var setRadius = function(newRadius){
	if(newRadius<minRad)
		newRadius = minRad;
	else if (newRadius>maxRad)					//Radius Toolbar conditions
		newRadius = maxRad;
	radius = newRadius;
	context.lineWidth = radius*2;

	radSpan.innerHTML = radius;
}

var minRad = 0.5,
	maxRad = 60,
	defaultRad = 20,
	interval = 5,
	radSpan = document.getElementById('radval'),	//variables for the toolbar
	decRad = document.getElementById('decrad'),
	incRad = document.getElementById('incrad');


decRad.addEventListener('click', function(){		//Decreasing the lineWidth of the radius
	setRadius(radius-interval);
});

incRad.addEventListener('click', function(){		//Increasing the lineWidth of the radius
	setRadius(radius+interval);
});

setRadius(defaultRad)