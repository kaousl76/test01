let items = document.querySelectorAll('.item');
	let points = document.querySelectorAll('.point');
	let btnPrev = document.querySelector('.prev');
	let btnNext = document.querySelector('.next');
	let time = 0;
	
	let index = 0;
	
	
	function clearActive() {
	    for (let i = 0; i < items.length; i++) {
	        items[i].className = 'item';
	        points[i].className = 'point';
	    }
	}
	
	
	function goIndex() {
	    clearActive();
	    items[index].className = 'item active';
	    points[index].className = 'point active';
	}
	
	
	function goNext() {
	    if (index < items.length - 1) {
	        index++;
	    } else {
	        index = 0;
	    }
	
	    goIndex();
	}
	
	
	function goPrev() {
	    if (index == 0) {
	        index = items.length - 1;
	    } else {
	        index--;
	    }
	
	    goIndex();
	}
	
	
	btnNext.addEventListener('click', function () {
	    goNext();
	    time = 0;
	});
	
	
	btnPrev.addEventListener('click', function () {
	    goPrev();
	    time = 0;
	});
	
	
	for (let i = 0; i < items.length; i++) {
	    points[i].addEventListener('click', function () {
	        let pointIndex = points[i].getAttribute('data-index');
	        index = pointIndex;
	        goIndex();
	        time = 0;
	    })
	}
	
	
	setInterval(function () {
	    time++;
	    if (time == 30) {
	        goNext();
	        time = 0;
	    }
	}, 100);