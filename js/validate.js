function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.

  var lat = parseInt(document.getElementById("formLat").value);
  var lng = parseInt(document.getElementById("formLong").value);
  var validStatus = true;

  if (isNaN(lat) || lat > 90 || lat < -90){
    document.getElementById("latError").innerHTML = " must be a valid Latitude (-90 to 90)";
    validStatus = false;
  }
  else{
    document.getElementById("latError").innerHTML = "";
  }
  if(isNaN(lng) || lng > 180 || lng < -180){
    document.getElementById("lngError").innerHTML = " must be a valid Longitude (-180 to 180)";
    validStatus = false;
  }
  else{
    document.getElementById("lngError").innerHTML = "";
  }
  
  if(validStatus){
    return true;
  }
  else{
    return false;
  }

    console.log(
    "TODO - validate the longitude, latitude values before submitting"
  );
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
