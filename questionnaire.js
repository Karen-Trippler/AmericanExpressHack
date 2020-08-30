var slideIndex = 1;
var qform = document.getElementById("quiz");
qform.style.display = "none";
//showSlides(slideIndex);

//right/left slide showing
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//setting current slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myQ");
  var dots = document.getElementsByClassName("dot");
  
  //set slide index
  if (n > slides.length) {slideIndex = 1}   //clockwise loop through questions 
  if (n < 1) {slideIndex = slides.length}   //anti-clockwise loop through questions

  //enable submit button only on last question
  //if (n === slides.length) {
  //  document.getElementsById('submit').disable = true;
  //}

  //deleting shown slide
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  //deleting dots
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  //display new slide
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
  var maxscore = Math.max(c1score,c2score,c3score);
  // Display answer corresponding to that choice
  var answerbox = document.getElementById('answer');
  answerbox.style.display = "block";
  var anstext = document.getElementById('anstext');

  if (c1score == maxscore) { // If user chooses the first choice the most, this outcome will be displayed.
      answerbox.innerHTML = "Option 1 was chosen";
  }
  if (c2score == maxscore) { // If user chooses the second choice the most, this outcome will be displayed.
      answerbox.innerHTML = "Option 2 was chosen";
  }
  if (c3score == maxscore) { // If user chooses the third choice the most, this outcome will be displayed.
      answerbox.innerHTML = "Option 3 was chosen";
      var cardimg = "img/basic_card.jpg";
      var cardtext = "...";
      var cardlink = "https://www.americanexpress.com/uk/customer-service/?inav=gb_sitefooter_faqs";
      //answerbox.innerHTML = "<img src='"+cardimg+"'>"
  }   
  // If you add more choices, you must add another response below.

  //card link html
  var link = "<a class='cardlink' href='"+cardlink+"'>More Info</a>";
  //card img html
  var img = "<img class='cardimg' src='"+cardimg+"'>";
  //cardtext html
  var txt = "<div class='anstext'>"+cardtext+"</div>"+link;
  // combination
  answerbox.innerHTML = img.concat(txt);
  //"<img class='cardimg' src='"+cardimg+"'><div class='anstext'>"+cardtext+"</div>";
  //anstext.innerHTML = cardtext;

  //deletes the input form
  var quizform = document.getElementById("quiz");
  quizform.style.display = "none";
    
  return false;
}


//must be changed (result shoowing while form is visible)
// program the reset button
function resetAnswer() {
  var answerbox = document.getElementById('answer');
  answerbox.style.display = "none";
  answerbox.innerHTML = "Your result will show up here!";
  currentSlide(1);
}