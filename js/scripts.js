$(document).ready(function () {
    let items = [];
    let count = 0;
    $.getJSON('api/quotes.json', function (data) {
        $.each(data, function (key, value) {
            items.push(value);
        });
    });

    function updateUrl() {
        document.getElementById('twitter-link').setAttribute("href", "https://twitter.com/intent/tweet?text=\"" + "Hey Jack, " + $('#quote').text() + " -Si Robertson");
    }

    $('.next-btn').click(function () {
        $('.quote').html(items[count]);
        count++;
        if (count >= items.length) {
            count = 0;
        }

        updateUrl();
    });


});