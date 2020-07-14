// document.getElementsByClassName("overviewCaseImage");

// document
//   .getElementsByClassName("overviewCaseImage")
//   .addEventListener("click", function(target) {
//     console.log(target);
//   });

// document.onreadystatechange = function() {
(function() {
  var elements = document.getElementsByClassName("overviewCaseImage");

  Array.from(elements).forEach(function(element) {
    element.addEventListener("mouseover", myFunction);
  });

  //   var els = document.getElementsByClassName("title_line");
  //   Array.from(els).forEach((el) => {
  //     // Do stuff here
  //     console.log(el.tagName);
  //     el.classList.add("title_in");
  //   });
  //   console.log(document.getElementsByClassName("title_line"));
  // Initialize your application or run some code.
})();

var myFunction = function(element) {
  console.log(element.path["2"].getAttribute("data-color"));
  document.getElementById("body");
  // var attribute = this.getAttribute("data-color");
  // alert(attribute);
};
