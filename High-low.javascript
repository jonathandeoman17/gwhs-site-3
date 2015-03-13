function generateRandomNumber() {
  // YOUR CODE GOES HERE
  return Math.floor((Math.random() * 10) + 1);
}


function checkGuess(guess, generatedRandomNumber) {
  // Do not change these two lines
  var statusCode;
  var statusMessage;

  // YOUR CODE GOES HERE
  if(guess > generatedRandomNumber) {
    statusCode = 1;
    statusMessage = "too high";
  }else if(guess < generatedRandomNumber){
    statusCode = 2;
    statusMessage = "too low";
  }else {
    statusCode = 0;
    statusMessage = "Correct Number";
  }

  // Do not change this line
  return { "statusCode": statusCode, "statusMessage": statusMessage };
}


console.log(generateRandomNumber());






var generatedRandomNumber = null;

$(document).ready(function()
{
	$('#check-btn').hide();
	$('#guess').hide();
	$('#correct').hide();

	$('#generate-btn').click(function()
	{
		generatedRandomNumber = generateRandomNumber();
		$('#generate-btn').hide();
		
		$('#check-btn').fadeIn(500);
		$('#guess').fadeIn(500);
	
		$('#guess').focus();

		return false;	
	});

    $('#reset-btn').click(function(){
      		generatedRandomNumber = generateRandomNumber();
      $('#correct').hide();
      $('#guess').val('');
    });
  
  
  
	$('#check-btn').click(function()
	{
		var returnHash = checkGuess(parseInt($('#guess').val()), generatedRandomNumber);
		console.log(returnHash);

		if (returnHash["statusCode"] == 0 || returnHash["statusCode"] == 1 || returnHash["statusCode"] == 2)
		{
			$('#correct').text(returnHash["statusMessage"]);
			$('#correct').removeClass("alert-success alert-warning alert-danger");

			if (returnHash["statusCode"] == 0)
				$('#correct').addClass("alert-success");

			else if (returnHash["statusCode"] == 1)
				$('#correct').addClass("alert-warning");

			else if (returnHash["statusCode"] == 2)
				$('#correct').addClass("alert-danger");

			$('#correct').hide();
			$('#correct').fadeIn(500);
		}

		return false;	
	});



});


 
