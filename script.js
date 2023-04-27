function checkAnswer() {
    const answerInput = document.getElementById("answer1");
    const result = document.getElementById("result1");
    const riddle1 = document.getElementById("riddle1");
    const riddle2 = document.getElementById("riddle2");
    
    // Convert the answer to lowercase to make the comparison case-insensitive
    const answer = answerInput.value.toLowerCase();
    
    // Check if the answer is correct for Riddle 1
    if (answer === "rowel") {
      result.innerHTML = "TAMA!!!!! kilalang kilala ah .";
      
      // Remove the first riddle and show the second riddle
      riddle1.style.display = "none";
      riddle2.style.display = "block";
    } else {
      result.innerHTML = "TANGINA MO MALI.";
    }
  }
  
  function checkAnswer2() {
    const answerInput = document.getElementById("answer2");
    const result = document.getElementById("result2");
    
    // Convert the answer to lowercase to make the comparison case-insensitive
    const answer = answerInput.value.toLowerCase();
    
    // Check if the answer is correct for Riddle 2
    if (answer === "tony") {
      result.innerHTML = "SAMA MO KAY PED GAGU KA";

       // Remove the first riddle and show the second riddle
       riddle2.style.display = "none";
       riddle3.style.display = "block";
    } else {
      result.innerHTML = "BAKIT PED NILALAGAY MO MALI.";
    }
  }

  function checkAnswer3() {
    const answerInput = document.getElementById("answer3");
    const result = document.getElementById("result3");
    
    // Convert the answer to lowercase to make the comparison case-insensitive
    const answer = answerInput.value.toLowerCase();
    
    // Check if the answer is correct for Riddle 3
    if (answer === "charles") {
      result.innerHTML = "TAMA WALA NAMANG IBA E";
    } else {
      result.innerHTML = "MALI GAGU ISIP KAPA NG IBA";
    }
  }