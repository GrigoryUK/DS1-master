function textareaHeight() {
	const elemAll = document.querySelectorAll("textarea");
  
	if (elemAll) {
	  (function () {
  
  
		[...elemAll].forEach((elem) => {
		  elem.style.height = `${elem.style.scrollHeight}px`;
		  elem.addEventListener("input", OnInput, false);
		});
  
		function OnInput() {
		  this.style.height = "auto";
		  this.style.height = this.scrollHeight + "px";
		}
	  })();
  
	  (function () {
		const elemClassName = "x";
  
		function elemTarget(e) {
		  e = e || window.event;
		  e.preventDefault();
		  return e.target;
		}
  
		document.addEventListener("input", (e) => {
		  let elem = elemTarget(e);
		  //!--- Если
		  if (elem.classList.contains(elemClassName)) {
			OnInput(elem);
		  }
		});
  
		function OnInput(elem) {
		  elem.style.height = "auto";
		  elem.style.height = elem.scrollHeight + "px";
		}
	  })();
	}
  }
  
  export default textareaHeight;
  