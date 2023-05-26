(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
    
          form.classList.add('was-validated')
        }, false)
      })
    })()


    var countrySelect = document.getElementById("country");

    // Fetch country data from the REST Countries API
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(data => {
        // Loop through the country data and create options
        data.forEach(country => {
          var option = document.createElement("option");
          option.text = country.name.common;
          option.value = country.alpha2Code;
          countrySelect.add(option);
        });
      })
      .catch(error => {
        console.log("Error fetching country data:", error);
      });

      
  // // Fetch city data from the API
  // fetch("https://api.opencagedata.com/geocode/v1/json?q=india&countrycode=in&no_annotations=1&limit=1000&key=5dd341abdfed4c6eaba6bf9155829786")
  //   .then(response => response.json())
  //   .then(data => {
  //     // Loop through the city data and create options
  //     data.forEach(city => {
  //       var option = document.createElement("option");
  //       option.text = city.name.common;
  //       option.value = city.alpha2Code;
  //       citySelect.add(option);
  //     });
  //   })
  //   .catch(error => {
  //     console.log("Error fetching city data:", error);
  //   });

  var citySelect = document.getElementById("city");

  // fetch("https://api.opencagedata.com/geocode/v1/json?q=india&countrycode=in&no_annotations=1&limit=1000&key=5dd341abdfed4c6eaba6bf9155829786")
  //   .then(response => response.json())
  //   .then(data => {
  //     // Loop through the city data and create options
  //     data.results.forEach(result => {
  //       var option = document.createElement("option");
  //       option.text = result.components.city || result.components.town || result.components.village;
  //       option.value = option.text;
  //       citySelect.add(option);
  //     });
  //   })
  //   .catch(error => {
  //     console.log("Error fetching city data:", error);
  //   });

  fetch("http://api.geonames.org/searchJSON?q=&country=IN&featureClass=P&maxRows=1000&username=YOUR_USERNAME")
  .then(response => response.json())
  .then(data => {
    // Loop through the city data and create options
    data.geonames.forEach(city => {
      var option = document.createElement("option");
      option.text = city.name;
      option.value = city.name;
      citySelect.add(option);
    });
  })
  .catch(error => {
    console.log("Error fetching city data:", error);
  });

  



      // fetch("https://api.countrystatecity.in/v1/countries/IN/states/IN-CWB/cities", {
      //   headers: {
      //     "X-CSCAPI-KEY": "YOUR_API_KEY"
      //   }
      // })
      // .then(response => response.json())
      // .then(data => {
      //   // Loop through the city data and create options
      //   data.forEach(city => {
      //     var option = document.createElement("option");
      //     option.text = city.name;
      //     option.value = city.id;
      //     citySelect.add(option);
      //   });
      // })
      // .catch(error => {
      //   console.log("Error fetching city data:", error);
      // });
      