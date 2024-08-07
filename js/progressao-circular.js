$('.circle').each(function() {
    var $this = $(this);
    var percentageText = $this.find('span').text();
    var value = parseFloat(percentageText.replace('%', '')) / 100;
    var fillColor;
    if (value <= 0.30) {
        fillColor = ["green", "lightgreen"];
    } else if (value <= 0.70) {
        fillColor = ["yellow", "orange"];
    } else {
        fillColor = ["red", "darkred"];
    }

    if (isNaN(value) || value < 0 || value > 1) {
        value = 0;
    }

    $this.circleProgress({
        value: value,
        size: 80,
        fill: {
            gradient: fillColor
        }
    });
});