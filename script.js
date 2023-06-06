function displayCityReviews() {
    var citySelect = document.getElementById("city");
    var reviewsDiv = document.getElementById("reviews");
  



    while (reviewsDiv.firstChild) {
      reviewsDiv.removeChild(reviewsDiv.firstChild);
    }
  

    var selectedCity = citySelect.value;
  



    if (selectedCity === "calicut") {
      var cityName = "Comments";
      var review1 = "Anna:' Excellent playing surface and well-maintained.'";
    var review2 = "Kate: 'The staff is friendly and accommodating.'";
    var review3 = "John: 'Highly recommended for football Lovers.'";
    var review4 = "Stephen:'Not Good";
    } 
    
    else if (selectedCity === "kannur") {
      var cityName = "Comments";
      var review1 = "Jake: 'Spacious playing area with high-quality turf.'";
      var review2 = "'Britas:The venue offers on-site parking facilites.'";
      var review3 = "'Aami:A popular choice among local football teams.'";
    }

    else if (selectedCity === "kochi") {
        var cityName = "Comments";
        var review1 = "Sam:'Top-notch facilities with great lighting.'";
        var review2 = "Stuart:'Easy booking process and reasonable rates.'";
        var review3 = "'Juan:The Behaviour staffs is very rude'";
        var review4 = "Thomas:'Ideal for both casual and competitive matches.'";
      }

      
    else if (selectedCity === "thrissur") {
        var cityName = "Comments";
        var review1 = "Jake:'Top-notch facilities with great lighting.'";
        var review2 = "Samuel:'Easy booking process and reasonable rates.'";
        var review3 = "Jacob:'Ideal for both casual and competitive matches.'";
      }
    
    
  
    
    var nameHeading = document.createElement("h2");
    nameHeading.textContent = cityName;
    reviewsDiv.appendChild(nameHeading);
  
    var review1Para = document.createElement("p");
    review1Para.textContent = review1;
    reviewsDiv.appendChild(review1Para);
  
    var review2Para = document.createElement("p");
    review2Para.textContent = review2;
    reviewsDiv.appendChild(review2Para);
  
    var review3Para = document.createElement("p");
    review3Para.textContent = review3;
    reviewsDiv.appendChild(review3Para);

    var review4Para = document.createElement("p");
    review4Para.textContent = review4;
    reviewsDiv.appendChild(review4Para);
  }
  