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
});
