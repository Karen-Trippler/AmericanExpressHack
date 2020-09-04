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
  //let choices = document.getElementsByTagName('input');
  let q1_vals = document.getElementsByName("q1");
  let q2_vals = document.getElementsByName("q2");
  let q3_vals = document.getElementsByName("q3");
  let q4_vals = document.getElementsByName("q4");

  //Question 1
  if (q1_vals[0].checked == true) {
    basicscore = basicscore + 1;
  } else if (q1_vals[1].checked == true) {
    goldscore = goldscore + 1;
    bascore = bascore +1;
  } else if (q1_vals[2].checked == true) {
    platscore = platscore + 1;
  } else {
    //alert the user
    alert('Some questions were not answered');
    //return to current slide
    showSlides(slideIndex);
    //exit the function
    return false;
  };

  //Question 2
  if (q2_vals[0].checked == true) {
    basicscore = basicscore + 1;
  } else if (q2_vals[1].checked == true) {
    goldscore = goldscore + 1;
  } else if (q2_vals[2].checked == true) {
    bascore = bascore +1;
  } else if (q2_vals[3].checked == true) {
    platscore = platscore +1;
  } else {
    //alert the user
    alert('Some questions were not answered');
    //return to current slide
    showSlides(slideIndex);
    //exit the function
    return false;
  };

  //Question 3
  if (q3_vals[0].checked == true) {
    basicscore = basicscore + 1;
  } else if (q3_vals[1].checked == true) {
    goldscore = goldscore + 1;
  } else if (q3_vals[2].checked == true) {
    bascore = bascore +3;
  } else if (q3_vals[3].checked == true) {
    platscore = platscore +1;
  } else {
    //alert the user
    alert('Some questions were not answered');
    //return to current slide
    showSlides(slideIndex);
    //exit the function
    return false;
  };

  //Question 4
  if (q4_vals[0].checked == true) {
    basicscore = basicscore + 1;
  } else if (q4_vals[1].checked == true) {
    goldscore = goldscore + 1;
    bascore = bascore +1;
  } else if (q4_vals[2].checked == true) {
    platscore = platscore +1;
  } else {
    //alert the user
    alert('Some questions were not answered');
    //return to current slide
    showSlides(slideIndex);
    //exit the function
    return false;
  };


  /*alert(bascore);
  alert(basicscore);
  alert(goldscore);
  alert(platscore);*/




  // loop through all the radio inputs
  /*for (i=0; i<choices.length; i++) {
    //if the radio is not checked
    if (choices[i].checked == false) {
      //alert the user
      alert('Some questions were not answered'+i);
      //return to current slide
      showSlides(slideIndex);
      //exit the function
      return false;
    }
  };*/

  /*var quests = ["q1","q2","q3","q4"];
  for (var i of quests) {
    alert(i);
    radbut = getElementsByName(String(i));
    var radcheck = false;
    for (x=0; x<radbut.length; x++){
      if (radbut[x].checked == true){
        radcheck = true;
      };
    };
    if (radcheck==false) {
      //alert the user
      alert('Some questions were not answered'+i);
      //return to current slide
      showSlides(slideIndex);
      //exit the function
      return false;
    };

  };*/
  /*q1rads = document.getElementsByName('q1');
  q2rads = document.getElementsByName('q2');
  q3rads = document.getElementsByName('q3');
  q4rads = document.getElementsByName('q4');

  for (choices in {q1rads,q2rads,q3rads,q4rads}) {
    if (choices.checked == false) {
      //alert the user
      alert('Some questions were not answered');
      //return to current slide
      showSlides(slideIndex);
      //exit the function
      return false;
    }
  }*/

  //get the radio choices
  /*var q2val = choices[1].value;
  var q3val = choices[2].value;
  var q4val = choices[3].value;

  alert(q1val);
  alert(q2val);
  alert(q3val);
  alert(q4val);*/

  //alert(bascore);
  //alert(basicscore);
  //alert(goldscore);
  //alert(platscore);

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
      //basic card template string
      var cardtext = `
          <h2>Business Basic Card:</h2>
          <p>We recommend the American Express Business Basic Card (no annual fee). This card offers:</p>
          <div class="alist">
            <ul class ="a">
              <li>No pre-set spending limit</li>
              <li>Up to 42 calender days as payment period</li>
            </ul>
          </div>

          <div> 
            <p>We are excited to watch your business grow. <a href="https://www.americanexpress.com/uk/business/business-charge-cards/basic-business-card/?inav=gb_menu_business_viewallcards&linknav=uk-acq-sbs-landing-basiccard">Apply here</a>.</p>
          </div>
          <div>
            <p>Not sure? Check out the <a href="https://www.americanexpress.com/uk/business/business-charge-cards/gold-business-card/?inav=gb_menu_business_viewallcards&linknav=uk-acq-sbs-landing-goldcard">American Express Business Gold Card</a> as a secondary recommendation.</p>
          </div>`;
  }
  //Gold card
  if (goldscore == maxscore) { // If user chooses the second choice the most, this outcome will be displayed.
      //answerbox.innerHTML = "Option 2 was chosen";
      var cardimg = "img/gold_card.jpg";
      var cardtext = `<h2> Business Gold Card:</h2>      
          <p>We recommend the American Express Business Gold Card (£125 annual fee with first year free). This card offers:</p>
          <ul class ="a">
            <li>Ability to earn 1 reward point for every £ spent on the card</li>
            <li>Up to 99 supplementary cards for those you work with</li>
            <li>54 days interest free payment period</li>
          </ul>
         
          <div>        
            <p>We are excited to watch your business grow. <a href="https://www.americanexpress.com/uk/business/business-charge-cards/gold-business-card/?inav=gb_menu_business_viewallcards&linknav=uk-acq-sbs-landing-goldcard">Apply here</a>.</p>        
          </div>

          <div>        
            <p>Not sure? Check out the <a href="https://www.americanexpress.com/uk/business/business-charge-cards/platinum-business-card/?inav=gb_menu_business_viewallcards&linknav=uk-acq-sbs-britisishairwaysacceleratingdetails-platinumcompare">American Express Business Platinum Card</a> as a secondary recommendation.</p>        
          </div>
          <div>
            <p>Why <a href="https://www.americanexpress.com/uk/business/rewards/?inav=gb_menu_business_viewallcards&linknav=uk-acq-sbs-nav-usefulinfo-rewards&fbclid=IwAR0uBoamxBz2o3Zo9voek97c05xm1O8yzLXY_EoMb2gE9vQo9xC-n2DwJtU">AMEX</a> and why a <a href="https://www.americanexpress.com/uk/business/running-a-business/?inav=gb_menu_business_viewallcards&linknav=uk-acq-sbs-nav-usefulinfo-whybusiness&fbclid=IwAR2BqEwibsuRSAoB4QPM_CdyR4vJDGwxTeRTy9Txfe49c3CRT2fkGeYMxA4">credit card</a>? Know the benefits over loans and lines of credits.</p>       
          </div>`;
  }
  // BA card
  if (bascore == maxscore) { // If user chooses the third choice the most, this outcome will be displayed.
      var cardimg = "img/airways_card.jpg";
      var cardtext = `<h2>British Airways American Express Accelerating Business Card:</h2>
        <p>We recommend the British Airways American Express Accelerating Business Card (£210 annual fee). This card offers:</p>
        <ul class="a">
          <li>Ability to earn 1.5 reward points for every £1 spent with British Airways. 1.5 Avios for every eligible £1 spent on credit card</li>
          <li>56 days interest free payment period</li>
          <li>Travel protection (such as accident protection)</li>
        </ul>
        <div>
           <p>We are excited to watch your business grow. <a href="https://www.americanexpress.com/uk/business/credit-cards/british-airways-accelerating-card/?inav=gb_menu_business_viewallcards&linknav=uk-acq-sbs-landing-britishairwaysacceleratingcard">Apply here</a>.</p>
        </div>
        <div> 
           <p>Not sure? Check out the <a href="https://www.americanexpress.com/uk/business/business-charge-cards/platinum-business-card/?inav=gb_menu_business_viewallcards&linknav=uk-acq-sbs-golddetails-platinumcompare">American Express Business Platinum Card</a> as a secondary recommendation.</p>
        </div>
        <div style="float: right;">
          <p>Why <a href="https://www.americanexpress.com/uk/business/rewards/?inav=gb_menu_business_viewallcards&linknav=uk-acq-sbs-nav-usefulinfo-rewards&fbclid=IwAR0uBoamxBz2o3Zo9voek97c05xm1O8yzLXY_EoMb2gE9vQo9xC-n2DwJtU">AMEX</a> and why a <a href="https://www.americanexpress.com/uk/business/running-a-business/?inav=gb_menu_business_viewallcards&linknav=uk-acq-sbs-nav-usefulinfo-whybusiness&fbclid=IwAR2BqEwibsuRSAoB4QPM_CdyR4vJDGwxTeRTy9Txfe49c3CRT2fkGeYMxA4">credit card</a>? Know the benefits over loans and lines of credits.</p>
        </div>`;
      
  }  
  //Platinum card
  if (platscore == maxscore) { // If user chooses the second choice the most, this outcome will be displayed.
      var cardimg = "img/platinum_card.jpg";
      var cardtext = `<h2>Business Platinum Card:</h2>
        <p>We recommend the American Express Business Platinum Card (£595 annual fee). This card offers:</p>
        <ul class="a">
          <li>Ability to earn 1 reward point for every £ spent on the card</li>
          <li>Premium travel insurance and benefits (such as world wide insurance travel)</li>
          <li>54 days interest free payment period</li>
        </ul>
        <div>
          <p>We are excited to watch your business grow. <a href="https://www.americanexpress.com/uk/business/business-charge-cards/platinum-business-card/?inav=gb_menu_business_viewallcards&linknav=uk-acq-sbs-golddetails-platinumcompare">Apply Here</a>.</p>
        </div>
        <div>
          <p>Not sure? Check out the <a href="https://www.americanexpress.com/uk/business/business-charge-cards/gold-business-card/?inav=gb_menu_business_viewallcards&linknav=uk-acq-sbs-landing-goldcard">American Express Business Gold Card</a> as a secondary recommendation.</p>
        </div>
        <div>
          <p>Why <a href="https://www.americanexpress.com/uk/business/rewards/?inav=gb_menu_business_viewallcards&linknav=uk-acq-sbs-nav-usefulinfo-rewards&fbclid=IwAR0uBoamxBz2o3Zo9voek97c05xm1O8yzLXY_EoMb2gE9vQo9xC-n2DwJtU">AMEX</a> and why a <a href="https://www.americanexpress.com/uk/business/running-a-business/?inav=gb_menu_business_viewallcards&linknav=uk-acq-sbs-nav-usefulinfo-whybusiness&fbclid=IwAR2BqEwibsuRSAoB4QPM_CdyR4vJDGwxTeRTy9Txfe49c3CRT2fkGeYMxA4">credit card</a>? Know the benefits over loans and lines of credits.</p>
        </div>`;
  }   

  //Putting everything together
  //card img html
  var img = "<img class='cardimg' src='"+cardimg+"'>";
  //cardtext html
  var txt = "<div class='anstext'>"+cardtext+"</div>";
  // combination
  answerbox.innerHTML = img.concat(txt);

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

