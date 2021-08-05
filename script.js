//flex-flow
function setFlexboxFlowClass(value) {
  console.log('setFlexboxFlow value :: ' + value);
  var mainContainer = $('#flexFlowClass');
  mainContainer.removeClass().addClass('container');
  // //adding selected class to container
  mainContainer.addClass(value);
}
