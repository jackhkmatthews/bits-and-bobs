// var transform_styles = ['transform'];
//
// window.randomize = function() {
//   var rotation = Math.floor(Math.random() * 180);
//   $('.circle .fill').css(transform_styles[0], 'rotate(' + rotation + 'deg)');
// };
//
// $(animate);
//
// function animate(){
//   var rotation = Math.floor(Math.random() * 180);
//   console.log(rotation);
//   // rotation = 60;
//   $('.circle .fill').css(transform_styles[0], 'rotate(' + rotation + 'deg)');
//   $('.circle .mask.full').css(transform_styles[0], 'rotate(' + rotation + 'deg)');
// }

var progress = Math.floor(Math.random() * 100);
window.randomize = function() {
  $('.radial-progress').attr('data-progress', progress);
};
setTimeout(window.randomize, 200);
$('.radial-progress').click(window.randomize);
