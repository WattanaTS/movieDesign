$(function() {

    document.addEventListener('init', function(event) {
        var page = event.target;

        console.log(page.id);
        if (page.id === 'Home') {
            $('#back').hide();
            page.querySelector('#detail1').onclick = function() {
                document.querySelector('#myNavigator').pushPage('views/detail.html');

            };
            page.querySelector('#detail2').onclick = function() {
                document.querySelector('#myNavigator').pushPage('views/detail2.html');
            };
            page.querySelector('#detail3').onclick = function() {
                document.querySelector('#myNavigator').pushPage('views/detail3.html');
            };
        } else if (page.id === 'detail1' || page.id === 'detail2' || page.id === 'detail3') {
            $('#back').show();
            document.querySelector('ons-back-button').onclick = function(event) {
                document.querySelector('#myNavigator').popPage();
            };

        }



    });
})