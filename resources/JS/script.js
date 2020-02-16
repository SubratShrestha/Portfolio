/*____________________________________________________________________________*/
/*_______________________________NAVIGATION.__________________________________*/
/*____________________________________________________________________________*/

$(document).ready(function() {
    const nav = document.querySelector('.navi');
    const topOfNav = nav.offsetTop;
    $('.navi').waypoint(function(direction) {
        if (direction == "down") {
            document.body.style.paddingTop = nav.offsetHeight + 'px';
            $('.navi').addClass('sticky');
        }
        else {
            document.body.style.paddingTop = 0;
            $('.navi').removeClass('sticky');
        }
    })

    $('.flavoury').waypoint(function(direction) {
        if (direction == 'down') {
            $('.flavoury__indicator').addClass('active');
            $('.riskDice__indicator').removeClass('active');
        } else {
            $('.flavoury__indicator').removeClass('active');
            $('.riskDice__indicator').removeClass('active');
        }
    },{ offset: '320px;' })

    $('.riskDice').waypoint(function(direction) {
        if (direction == 'down') {
            $('.riskDice__indicator').addClass('active');
            $('.flavoury__indicator').removeClass('active');
        } else {
            $('.riskDice__indicator').removeClass('active');
            $('.flavoury__indicator').addClass('active');
        }
    }, { offset: '100px;' })
});
