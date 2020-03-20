$("#gc").mouseenter(function () {
    $("#gc").attr("src", "grandCanyon.jpg")
    $(this).css("transform", "rotate(90deg)")
});

$("#gc").mouseleave(function () {
    $("#gc").attr("src", "graygrandCanyon.jpg")
    $(this).css("transform", "rotate(0deg)")

});


$("#sunset").mouseenter(function () {
    $("#sunset").attr("src", "sunset.jpg")
});
$("#sunset").mouseleave(function () {
    $("#sunset").attr("src", "graysunset.jpg")

});
