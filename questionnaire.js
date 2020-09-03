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
  //available card scores
  var basicscore = 0;
  var goldscore = 0;
  var bascore = 0;
  var platscore = 0;
  // get a list of the radio inputs on the page
  var choices = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<choices.length; i++) {
    //if the radio is not checked
    if (choices[i].checked == false) {
      //alert the user
      alert('Some questions were not answered');
      //return to current slide
      showSlides(slideIndex);
      //exit the function
      return false;
    }

  }

  //get the radio choices
  var q1val = choices[0].value;
  var q2val = choices[1].value;
  var q3val = choices[2].value;
  var q4val = choices[3].value;


  //Q1
  if (q1val == 'c1') {
    basicscore = basicscore + 1;
  }
  if (q1val == 'c2') {
    goldscore = goldscore + 1;
    bascore = bascore +1;
  }
  if (q1val == 'c3') {
    platscore = platscore + 1;
  }

  //Q2
  if (q2val == 'c1') {
    basicscore = basicscore + 1;
  }
  if (q2val == 'c2') {
    goldscore = goldscore + 1;
  }
  if (q2val == 'c3') {
    bascore = bascore +1;
  }
  if (q2val == 'c4') {
    platscore = platscore + 1;
  }

  //Q3
  if (q3val == 'c1') {
    basicscore = basicscore + 1;
  }
  if (q3val == 'c2') {
    goldscore = goldscore + 1;
  }
  if (q3val == 'c3') {
    bascore = bascore +1;
  }
  if (q3val == 'c4') {
    platscore = platscore + 1;
  }

  //Q4
  if (q4val == 'c1') {
    basicscore = basicscore + 1;
  }
  if (q4val == 'c2') {
    goldscore = goldscore + 1;
    bascore = bascore + 1;
  }
  if (q4val == 'c3') {
    platscore = platscore + 1;
  }

  // Find out which choice got the highest score.
  var maxscore = Math.max(bascore,basicscore,goldscore,platscore);
  // Display answer corresponding to that choice
  var answerbox = document.getElementById('answer');
  answerbox.style.display = "block";
  var anstext = document.getElementById('anstext');

  //basic card
  if (basicscore == maxscore) { // If user chooses the first choice the most, this outcome will be displayed.
      //answerbox.innerHTML = "Option 1 was chosen";
      var cardimg = "img/basic_card.jpg";
  }
  //Gold card
  if (goldscore == maxscore) { // If user chooses the second choice the most, this outcome will be displayed.
      //answerbox.innerHTML = "Option 2 was chosen";
      var cardimg = "img/gold_card.jpg";
  }
  // BA card
  if (bascore == maxscore) { // If user chooses the third choice the most, this outcome will be displayed.
      var cardimg = "img/airways_card.jpg";
      var cardtext = "...";
      var cardlink = "https://www.americanexpress.com/uk/customer-service/?inav=gb_sitefooter_faqs";
      //answerbox.innerHTML = "<img src='"+cardimg+"'>"
  }  
  //Platinum card
  if (platscore == maxscore) { // If user chooses the second choice the most, this outcome will be displayed.
      var cardimg = "img/platinum_card.jpg";
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

