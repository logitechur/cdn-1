var d = new Date();
var n = d.getFullYear();
document.getElementById('getYear').innerHTML = n;
$(window).scroll(function() {
    $(this).scrollTop() > 0 ? $('.avatar').addClass('show') : $('.avatar').removeClass('show')
});