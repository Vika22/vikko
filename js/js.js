$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('nav').toggleClass('active');
        $('.bi-justify-right').toggleClass('active');
        $('.bi-x').toggleClass('active');
    })
    $('.service__item').click(function () {
        $('.info').toggleClass('active');
    })
})
