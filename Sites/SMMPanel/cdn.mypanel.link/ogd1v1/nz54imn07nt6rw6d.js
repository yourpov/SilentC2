document.onreadystatechange = function () {
  var state = document.readyState;
  if (state == "complete") {
    console.log(
      "%cIf you're reading this, you found the secret easter egg <3",
      "color:#c3073f;font-size:8px;font-weight:800;"
    );
  }
};

function sortArray(array) {
    clearTimeout(delay);
    var delay = setTimeout(function(){
        var firstElem = array.shift();
        array.push(firstElem);
        return startAnim(array); 
    },5000)
}


$(document).ready(function () {
  
$(document).click(function(e) {
  var container = $(".sidebar, .mobile-nav");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $(".mobile-nav").removeClass("active");
    $(".sidebar").removeClass("active");
    $("body").removeClass("mnav-open");
  }
});

$(".mobile-nav-btn").click(function(e){
  e.stopPropagation();
  $(".mobile-nav").toggleClass("active");
  $(".sidebar").toggleClass("active");
  $("body").toggleClass("mnav-open");
});
  
    $(".copy_link").click(function () {
        var content = $(".to-copy").text();
        navigator.clipboard
            .writeText(content)
            .then(function () {
                
var success_pop = $('<div>').addClass('success-pop').text('Copied Successfully');
$('body').append(success_pop);

success_pop.delay(10).queue(function(next) {
  $(this).addClass('load-in');
  next();
});

success_pop.delay(2000).queue(function(next) {
  $(this).removeClass('load-in');
  next();
});

success_pop.delay(150).queue(function(next) {
  $(this).remove();
  next();
});
          
             }).catch(function (error) {
                console.error("Failed to copy to clipboard:", error);
            });
    });
  $(".scroll").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 20,
      },
      500
    );
    return false;
  });
  $(".dropdown").click(function(){
      $(this).toggleClass("active");
  });

  $(".reviews-r").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    nav: true,
    navText: [
      '<i class="fa-regular fa-arrow-left-long"></i>',
      '<i class="fa-regular fa-arrow-right-long"></i>',
    ],
    autoplayTimeout: 3500,
    autoplayHoverPause: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      1000: {
        items: 2,
        margin: 30
      }
    },
    onChanged: function (event) {
      if (event.item.index) {
        var loading = $(".review-loading");
        loading.css("transition-duration", "0ms");        
        loading.css("transition-duration", "3000ms");
        loading.css("width", "100%");
        setTimeout(function () {
          loading.css("transition-duration", "100ms");
          loading.css("width", "0%");
        }, 2995);
      }
    },
  });

  $(".faq-box").click(function () {
    if ($(this).hasClass("fopen")) {
      $(".faq-box").removeClass("fopen");
    } else {
      $(".faq-box").removeClass("fopen");
      $(this).toggleClass("fopen");
    }
  });
  
  $(".document-bar-in").click(function () {
    $(".document-bar-in, .document-block").removeClass("active");
    $(this).addClass("active");
    
    if ($(this).hasClass("a")) {
      $(".document-block.a").addClass("active");
    } else if ($(this).hasClass("b")) {
      $(".document-block.b").addClass("active");
    } else if ($(this).hasClass("c")) {
      $(".document-block.c").addClass("active");
    }
  });
  
  function formatNumberToK(number) {
    if (number < 1000) {
      return number.toString(); 
    } else if (number < 1000000) {
      return (number / 1000).toFixed(1) + 'K'; 
    } else {
      return (number / 1000000).toFixed(1) + 'M';
    }
  }

  function updateFormattedNumber(id) {
    var originalNumber = parseInt($('#' + id).text());
    var formattedNumber = formatNumberToK(originalNumber);
    $('#' + id).text(formattedNumber + '+');
  }

  updateFormattedNumber('stat-users-x');
  updateFormattedNumber('stat-orders-x');
  
});
		function highlightJSON(className) {
			const preList = document.querySelectorAll("." + className);
			preList.forEach(pre => {
				const json = pre.textContent;
				const formatted = JSON.stringify(JSON.parse(json), null, 2)
					.replace(/&/g, "&amp;")
					.replace(/</g, "&lt;")
					.replace(/>/g, "&gt;")
					.replace(/"(\\u[a-fA-F0-9]{4}|[^\\"])*"/g, match => {
						return `<span class="string">${match}</span>`;
					})
					.replace(/\b\d+(\.\d+)?\b/g, match => {
						return `<span class="number">${match}</span>`;
					})
					.replace(/(\{|\}|\[|\]|true|false|null)/g, match => {
						return `<span class="property">${match}</span>`;
					});
				pre.innerHTML = formatted;
			});
		}
		highlightJSON("xn-json");


$(document).ready(function() {
  // Select all blog-card elements inside the blog-grid div
  var blogCards = $('.blog-grid .blog-card');
  
  // Sort the blog-cards based on whether they have an image or not
  blogCards.sort(function(a, b) {
    var hasImageA = $(a).find('.blog-image').length > 0;
    var hasImageB = $(b).find('.blog-image').length > 0;
    
    if (hasImageA && !hasImageB) {
      return -1; // a comes first
    } else if (!hasImageA && hasImageB) {
      return 1; // b comes first
    } else {
      return 0; // order doesn't matter
    }
  });
  
  // Append the sorted blog-cards to the blog-grid div
  $('.blog-grid').append(blogCards);
});

// Get all elements with class name "blog-card-content"
const blogCardContents = document.querySelectorAll('.blog-card-content');

// Loop through all elements and replace "&nbsp;" with " " in their inner HTML
blogCardContents.forEach(content => {
  content.innerHTML = content.innerHTML.replace(/&nbsp;/g, ' ');
});

function utf8_to_b64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

function setGravatar() {
  const emailElement = document.querySelector('.xn-s-email');
  const email = emailElement.innerText.trim();

  const encodedEmail = utf8_to_b64(email);
  const gravatarUrl = `https://www.gravatar.com/avatar/${encodedEmail}?s=200&r=pg&d=identicon&cache=${Date.now()}`;

  const imgElement = document.querySelector('.xn-s-usrl img');
  imgElement.src = gravatarUrl;
}

setGravatar();

$("#orderform-service").change(function () {

	$('#field-orderform-fields-expiry').attr('type', 'date');
    service_id = $(this).val();
    $("#s_id").text(service_id);

    description = window.modules.siteOrder.services[service_id].description
    $("#s_desc").html(description);

    name = window.modules.siteOrder.services[service_id].name
    $("#s_name").html(name);
});

function hideall(){
	$('.order_id').hide();
	$('.issue').hide();
	$('.payment').hide();
}

$(document).ready(function () {
    $("#xnt-subject").change(function () {
      	hideall();
        if ($(this).val() == "Order") {
			$('.order_id').show();
			$('.issue').show();
        }
        if ($(this).val() == "Payment") {
			$('.payment').show();
        }
        if ($(this).val() == "Service") {
			$('.service').show();
        }
    });
    $("#submit").click(function (e) {
        e.preventDefault();
        console.log("working");
      	$sub = $("#xnt-subject").val();
      	$msg = $("#message").val();
    	let final;
      
		if ($sub === 'Order') {
		    if (!$('#order_id').val()) {
		      alert("Please enter your Order ID");
		      return;
		    }
            $("#subject").val($('#issue').val() + " #" + $('#order_id').val());
		    final = 'Order ID: ' + $('#order_id').val() + '\n' + 'Request: ' + $('#issue').val();
		} else if ($sub === 'Payment') {
            $("#subject").val("Payment");
		    final = 'Gateway: ' + $('#payment').val();
		} else if ($sub === 'Child Panel') {
		    if (!$msg) {
		      alert("Please enter a message.");
		      return;
		    }
            $("#subject").val("Child Panel");
		    final = '';
		} else if ($sub === 'Other') {
		    if (!$msg) {
		      alert("Please enter a message.");
		      return;
		    }
            $("#subject").val("Other");
		    final = '';
		} else {
          	$("#subject").val("NO SUBJECT");
		    final = "NO MESSAGE";
		}

      	if (!$msg) {
          $("#message").val(final);
        } else {
          $("#message").val(final + "\n\n" + $msg);
        }
        
        $("#submit").submit();
    });
});



function checkSelectedOption() {
  const selectedOption = $("#method").val();
  
  $("#xn-pay-now").remove();

  setTimeout(function() {
    const elementWithText = $('#instruction_instruction').find('a').filter(function() {
      return $(this).text().trim() === "USE ME";
    });
    const elementWithSellix = $('#instruction_instruction').find('a').filter(function() {
      return $(this).text().includes("SELLIX ME");
    });

    if (elementWithText.length > 0) {
      const pay_now_link = elementWithText.attr('href');
      elementWithText.closest('h4').remove();
      $("#instruction_instruction").after('<a id="xn-pay-now" target="_blank" class="btn-primary" href="' + pay_now_link + '">PAY NOW</a>');
    }

    if (elementWithSellix.length > 0) {
      const text = elementWithSellix.text();
	  const sellix_link = text.match(/SELLIX ME "(.*?)"/)[1];
      
      elementWithSellix.closest('h6, h4').remove();
      $("#instruction_instruction").after(`<button id="xn-pay-now" class="btn-primary" type="button" data-sellix-product="${sellix_link}">PAY NOW</button>`);
    }
  }, 10);
}


$('#method').on('change', function() {
  checkSelectedOption();
  var selectedValue = $(this).val();
  
  $('.xn_amount, #xn_crypto_checkout').remove();

  if (selectedValue === '71482') {
    var amountDiv = `
      <div class="form-group xn_amount">
        <label for="xn_amount" class="control-label">Amount</label>
        <input type="text" id="xn_amount" class="form-control" placeholder="Enter an Amount" required>
      </div>`;
    $(this).closest('.form-group').after(amountDiv);
    
    var checkoutButton = `<button id="xn_crypto_checkout" class="btn btn-primary">Checkout</button>`;
    $('#xn_amount').closest('.form-group').after(checkoutButton);
  } else if (selectedValue === '71483') { // Replace 'YourNewID' with your actual ID
    var amountDiv = `
      <div class="form-group xn_amount">
        <label for="xn_amount" class="control-label">Amount</label>
        <input type="text" id="xn_amount" class="form-control" placeholder="Enter an Amount" required>
      </div>`;
    $(this).closest('.form-group').after(amountDiv);
    
    var checkoutButton = `<button id="xn_crypto_checkout" class="btn btn-primary">Checkout</button>`;
    $('#xn_amount').closest('.form-group').after(checkoutButton);
  }
});

$(document).on('click', '#xn_crypto_checkout', function() {
  var amount = $('#xn_amount').val();
  var email = $('#xn_use_email').val();
  var username = $('#xn_use_user').val();

  if (!amount || parseFloat(amount) < 1) {
    alert("Please enter an amount greater or equal to 1.");
    return;
  }

  var checkoutButton = $(this);
  var originalText = checkoutButton.text();
  
  checkoutButton.text('Loading...');
  checkoutButton.prop('disabled', true);

  var xn_email = email;
  var xn_user = username;
  var xn_amount = parseFloat(amount);

  var selectedValue = $('#method').val();
  var ajaxURL = "https://Silent.lol/checkout.php";
  if (selectedValue === '71483') { // Replace 'YourNewID' with your actual ID
    ajaxURL = "https://Silent.lol/cashapp.php"; // Replace with your new URL
  }

  $.ajax({
    type: "GET",
    url: ajaxURL,
    data: { email: xn_email, username: xn_user, amount: xn_amount },
    dataType: "json",
    success: function(response) {
      if (!response.error) {
        window.location.href = response.data;
      } else {
        alert("Payment currently not working. Please try again later.");
        checkoutButton.text(originalText);
        checkoutButton.prop('disabled', false);
      }
    },
    error: function() {
      alert("Payment request failed. Please try again later.");
      checkoutButton.text(originalText);
      checkoutButton.prop('disabled', false);
    }
  });
});