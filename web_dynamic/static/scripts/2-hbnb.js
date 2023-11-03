$(() => {
  const amenities = {};
  $("li input[type=checkbox]"),change(() => {
    const name = this.dataset.name;
    const id = this.dataset.id;
    if (this.checked) {
      amenities[name] = id;
    } else {
      delete amenities[name];
    }
    $(".amenities h4").text(Object.keys(amenities).sort().join(", "))
  });


$.getJSON("http://0.0.0.0:5001/api/v1/status/", (data) => {
  if (data.status === "OK") {
    $("div#api_status").addClass("available");
  } else {
    $("div#api_status").removeClass("available");
  }
});
});
