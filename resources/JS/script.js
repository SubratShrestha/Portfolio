/*____________________________________________________________________________*/
/*_______________________________NAVIGATION.__________________________________*/
/*____________________________________________________________________________*/

$(document).ready(function () {
    const nav = document.querySelector('.navi');
    const topOfNav = nav.offsetTop;
    $('.navi').waypoint(function (direction) {
        if (direction == "down") {
            document.body.style.paddingTop = nav.offsetHeight + 'px';
            $('.navi').addClass('sticky');
        }
        else {
            document.body.style.paddingTop = 0;
            $('.navi').removeClass('sticky');
        }
    })

    $('.budgetor').waypoint(function (direction) {
        if (direction == 'down') {
            $('.budgetor__indicator').addClass('active');
            $('.flavoury__indicator').removeClass('active');
            $('.riskDice__indicator').removeClass('active');
        } else {
            $('.budgetor__indicator').removeClass('active');
            $('.flavoury__indicator').removeClass('active');
            $('.riskDice__indicator').removeClass('active');
        }
    }, { offset: '320px;' })

    $('.flavoury').waypoint(function (direction) {
        if (direction == 'down') {
            $('.flavoury__indicator').addClass('active');
            $('.budgetor__indicator').removeClass('active');
            $('.riskDice__indicator').removeClass('active');
        } else {
            $('.budgetor__indicator').addClass('active');
            $('.flavoury__indicator').removeClass('active');
            $('.riskDice__indicator').removeClass('active');
        }
    }, { offset: '100px;' })

    $('.riskDice').waypoint(function (direction) {
        if (direction == 'down') {
            $('.riskDice__indicator').addClass('active');
            $('.flavoury__indicator').removeClass('active');
            $('.budgetor__indicator').removeClass('active');
        } else {
            $('.budgetor__indicator').removeClass('active');
            $('.riskDice__indicator').removeClass('active');
            $('.flavoury__indicator').addClass('active');
        }
    }, { offset: '100px;' })
});
