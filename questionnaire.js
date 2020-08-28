var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myQ");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// function to calculate the result of the survey
function tabulateAnswers() {
  // initialize variables for each choice's score
  // If you add more choices and outcomes, you must add another variable here.
  var c1score = 0;
  var c2score = 0;
  var c3score = 0;

  // get a list of the radio inputs on the page
  var choices = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<choices.length; i++) {
    // if the radio is checked..
    if (choices[i].checked) {
      // add 1 to that choice's score
      if (choices[i].value == 'c1') {
        c1score = c1score + 1;
      }
      if (choices[i].value == 'c2') {
        c2score = c2score + 1;
      }
      if (choices[i].value == 'c3') {
        c3score = c3score + 1;
      }
      // If you add more choices and outcomes, you must add another if statement below.
    }
  }

 	// Find out which choice got the highest score.
  	// If you add more choices and outcomes, you must add the variable here.
  	var maxscore = Math.max(c1score,c2score,c3score);
	  	// Display answer corresponding to that choice
	var answerbox = document.getElementById('answer');
	if (c1score == maxscore) { // If user chooses the first choice the most, this outcome will be displayed.
	    answerbox.innerHTML = "Option 1 was chosen"
	}
	if (c2score == maxscore) { // If user chooses the second choice the most, this outcome will be displayed.
	    answerbox.innerHTML = "Option 2 was chosen"
	}
	if (c3score == maxscore) { // If user chooses the third choice the most, this outcome will be displayed.
	    answerbox.innerHTML = "Option 3 was chosen";
	}
	  
	  // If you add more choices, you must add another response below.
}

// program the reset button
function resetAnswer() {
  var answerbox = document.getElementById('answer');
  answerbox.innerHTML = "Your result will show up here!";
}