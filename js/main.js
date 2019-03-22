$(document).ready(function(){
$('p').css('border-bottom', '1px solid black')
$('.first').css('border-color', 'red')
$('#special').css('background-color', 'yellow')
$('p.first small').css('background-color','blue')

//content methods
//$('.first').text('Lets Learn jQuery')
$('.first').html('Lets Learn <em>jQuery</em>')
$('.first').prepend('<h2> Welcome</h2>')
$('.first').after('<small>Make webpages interactive</small>')
$('#yourName').val('Bob Builder')

//attribute selectors
$('a[href="#1"]').css('backroung-color', 'tomato')
$('a[href^="#"]').css('color', 'grey') // use $ instead of ^ to 'end with' # instead of start with
$('a[href*="google"]').css('font-weight', 'bold')

//annimation functions

//hide the first card after a 1 second delay then show
//$('.card:first').delay(1000).hide(400).show(800, function () {
//alert('we\'re back')
//})

$('.card').animate({ borderRadius: '20px'}, 400)

//attribute method
$('img:first').attr('src','./img/image-5.jpg')

//class methods
console.log($('img:first').hasClass('special'))
//$('img').addClass('special')
$('img').toggleClass('special')

//events
$('img').click(function(){
  console.log($(this).attr('src'))
  $(this).toggleClass('special')
})



});
