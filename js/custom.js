$( document ).ready(function() {

	var panes = document.querySelectorAll('.pane');
	Array.prototype.forEach.call(panes, function(p) {

		p.addEventListener('dragover', handleDragOver);
		p.addEventListener('dragenter', handleDragEnter);
		p.addEventListener('dragleave', handleDragLeave);
		p.addEventListener('drop', handleDropOntoPane);
	});

	
	function handleDragStart(e) {
		this.style.opacity = '0.4';
	}

	function handleDragOver(e) {
		if (e.preventDefault) {
			e.preventDefault();
		}
		return false;
	}

	
	function handleDragEnter(e) {
		this.classList.add('over');
		//this.style.background = '#CCCCCC';
	}

	function handleDragLeave(e) {
		this.classList.remove('over');
		this.classList.add()
	}

	function handleDropOntoPane(e) {
		if (e.stopPropagation) {
			e.stopPropagation();
		}

		dragSrcEl.parentNode.removeChild(dragSrcEl);
		this.appendChild(dragSrcEl);

		return false;
	}

	var cards = document.querySelectorAll('.card');
	Array.prototype.forEach.call(cards, function(p) {

		p.addEventListener('dragover', handleCardDragOver);
		p.addEventListener('dragstart', handleCardDragStart);
		p.addEventListener('dragenter', handleCardDragEnter);
		p.addEventListener('dragleave', handleCardDragLeave);
		p.addEventListener('drop', handleCardDropOntoPane);
		

	});

	function handleCardDragStart(e) {
		this.style.opacity = '0.8';
		dragSrcEl = this;
		this.classList.add('dragging');
	}

	function handleCardDragOver(e) {
		/* Omits default behaviour of the element. Required to enable dropping */
		if (e.preventDefault) {
			e.preventDefault();
		}

    /* Some Browsers expect this instead of e.preventDefault(). 
    Doesn't hurt to do both.*/
    return false;
}

function handleCardDragEnter(e) {
	this.classList.add('over');
}

function handleCardDragLeave(e) {
	this.classList.remove('over');
}

function handleCardDropOntoPane(e) {
	this.classList.remove('over');
}

});