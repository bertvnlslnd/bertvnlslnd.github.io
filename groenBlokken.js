
const kolommen=["Expleciet","begrijpelijk"]
for (i = 0; i < kolommen.length; i++) {
    var $clone = $('#kolomGroeneBlokken-template').html();
    $clone = $clone.replace("{{tekst}}",kolommen[i]);
    $clone = $clone.replace("{{id}}",i);
    $clone = $clone.replace("{{id2}}",i);
    $("#groenBlokken").append($clone)

    //leds plaatsen
    var aantal = 10
	for (var j = 0; j <= aantal-1; j++){
		var div = $(`<div id = led${i}${aantal-j} class = led/>`);
		$(div).appendTo($("#k"+i));
	}
    $("#slider"+i).roundSlider({
        radius: 40,
        sliderType: "min-range",
        circleShape: "half-top",
        showTooltip: false,
        value: 0,
        });
}