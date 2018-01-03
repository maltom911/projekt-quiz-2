/*Function that shows the password when checked*/
$(document).ready(function () {
    $("#chkShowPassword").bind("click", function () {
        var txtPassword = $("#txtPassword");
        if ($(this).is(":checked")) {
            txtPassword.after('<input onchange = "PasswordChanged(this);" id = "txt_' + txtPassword.attr("id") + '" type = "text" value = "' + txtPassword.val() + '" />');
            txtPassword.hide();
        } else {
            txtPassword.val(txtPassword.next().val());
            txtPassword.next().remove();
            txtPassword.show();
        }
    });
});

$(document).ready(function PasswordChanged(txt) {
    $(txt).prev().val($(txt).val());
});
/*Function that shows the password when checked End*/

/*Function that checks strength of password*/
$(document).ready(function () {
    $('#txtPassword').keyup(function () {
        $('.line').html(checkStrength($('#txtPassword').val()))
    })

    function checkStrength(password) {
        var enabledLinkClassName = "enabledLink";
        var strength = 0

        if (password.length < 7) {
            $('#enableLink').removeAttr('href');
        } else if (password.length > 7) {
            strength += 1;
            $('#enableLink').addClass(enabledLinkClassName);
            $('#enableLink').attr('href', 'form-construct-2.html');
        } else {
            $('#enableLink').removeClass(enabledLinkClassName);
        }

        //If password contains both lower and uppercase characters, increase strength value.
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1

        //If it has one special character, increase strength value.
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1

        //If value is less than 2

        if (strength < 2) {
            $('.line').removeClass('line-yellow line-green');
            $('.line').addClass('line-red');
        } else if (strength == 2) {
            $('.line').removeClass('line-red line-green');
            $('.line').addClass('line-yellow');
        } else {
            $('.line').removeClass('line-yellow line-green');
            $('.line').addClass('line-green');
        }
    }
});

/*$(document).ready(function () {
 $('#passWord').keyup(function () {
 $('.smartfon-container').html(showInformation($('#passWord').val()))



 })
 });*/

$(document).ready(function () {
    var password = $('#passWord');
    password.keyup(function () {
        console.log()

        if (password.val().length == 4) {
            $('.main-container').addClass('hide');
            $('.main-container-two').removeClass('hide');
        }
    });
});

/*Show text, animate and*/


$(document).ready(function () {
    $('.animate-paragraphs').hide();
    var btnShow = $('#button-show');

    var paragraphs = [
        {
            isDanger: false,
            isCorrect: false,
            object: $('.p-one')
        },
        {
            isDanger: true,
            isCorrect: false,
            object: $('.p-two')
        },
        {
            isDanger: false,
            isCorrect: false,
            object: $('.p-three')
        },
        {
            isDanger: false,
            isCorrect: false,
            object: $('.p-four')
        },
        {
            isDanger: false,
            isCorrect: false,
            object: $('.p-five')
        },
        {
            isDanger: false,
            isCorrect: false,
            object: $('.p-six')
        },
        {
            isDanger: false,
            isCorrect: false,
            object: $('.p-seven')
        },
        {
            isDanger: false,
            isCorrect: false,
            object: $('.p-eight')
        },
        {
            isDanger: false,
            isCorrect: false,
            object: $('.p-nine')
        },
        {
            isDanger: false,
            isCorrect: false,
            object: $('.p-ten')
        }
    ];


    function getCurrentQuestion() {
        return paragraphs[getCurrentClickedIndex()];
    }

    function getCurrentClickedIndex() {
        return getClickedIndex() === 0 ? 0 : getClickedIndex() - 1;
    }

    function getClickedIndex() {
        return parseInt(btnShow.attr('data-clicked-index'));
    }

    function incrementClickedIndex() {
        var clickedIndex = getClickedIndex();
        if (clickedIndex < paragraphs.length - 1) {
            clickedIndex++;
        }

        btnShow.attr('data-clicked-index', clickedIndex);
    }

    function decrementClickedIndex() {
        btnShow.attr('data-clicked-index', getClickedIndex() - 1);
    }
});

/*Safe logging*/
$(document).ready(function () {
    var newMessage = $('#new-message');
    var clientMessage = $('#client-message');
    var verifyMessage = $('#verify');
    var messageIcon = $('.message-icon');
    var exitIcon = $('.fa-times');
    var warningMessage = $('#warning');

    clientMessage.hide();
    verifyMessage.hide();
    exitIcon.hide();
    warningMessage.hide();

    messageIcon.click(function () {
        newMessage.hide();
        clientMessage.show();
        verifyMessage.show();
        exitIcon.show();
    });

    exitIcon.click(function () {
        alert('Świetnie! Pamiętaj, że nigdy bank nie prześle Ci linku do weryfikacji !');
        verifyMessage.preventDefault();
    });

    verifyMessage.click(function () {
        clientMessage.hide();
        verifyMessage.hide();
        exitIcon.hide();
        warningMessage.show();
    });


});

/*Tools */
$(document).ready(function () {

    var toolsParagraphs = [1, 2, 3, 4, 5, 6];

    /*    toolsParagraphs[0] = $('.first-paragraph');
     toolsParagraphs[1] = $('.second-paragraph');
     toolsParagraphs[2] = $('.third-paragraph');
     toolsParagraphs[3] = $('.fourth-paragraph');
     toolsParagraphs[4] = $('.fifth-paragraph');
     toolsParagraphs[5] = $('.sixth-paragraph');*/
    var red = $('.red-style');
    var first = $('.first-paragraph');
    var second = $('.second-paragraph');
    var third = $('.third-paragraph');
    var fourth = $('.fourth-paragraph');
    var fifth = $('.fifth-paragraph');


    first.click(function () {
        alert('Spróbuj jeszcze raz !');
        showAll();

    });

    second.click(function () {
        second.hide(2000);

    });

    third.click(function () {
        third.hide(2000);

    });

    fourth.click(function () {
        fourth.hide(2000);

    });

    fifth.click(function () {
        /* red.addClass('make-it-red');*/
        alert('Spróbuj jeszcze raz !');
        showAll();
        /*red.removeClass('make-it-red');*/

    });


    function showAll() {
        first.show(2000);
        second.show(2000);
        third.show(2000);
        fourth.show(2000);
        fifth.show(2000);

    }

});
/*Tools End*/

/*Safe Smartfon*/
$(document).ready(function () {
    $('.icon-1-hidden').hide();
    $('.icon-4-hidden').hide();
    $('.icon-5-hidden').hide();
    $('.icon-9-hidden').hide();

    /*hiding clicks*/
    $('.icon-1').click(function () {
        $('.icon-1').hide(2000);
        $('.icon-1-hidden').show(2000);
    });

    $('.icon-4').click(function () {
        $('.icon-4').hide(2000);
        $('.icon-4-hidden').show(2000);
    });

    $('.icon-5').click(function () {
        $('.icon-5').hide(2000);
        $('.icon-5-hidden').show(2000);
    });

    $('.icon-9').click(function () {
        $('.icon-9').hide(2000);
        $('.icon-9-hidden').show(2000);
    });
    /*alert clicks*/
    $('.icon-2, .icon-3, .icon-5, .icon-6, .icon-7, .icon-8, .icon-10, .icon-11, .icon-12, .icon-13').click(function () {
        alert('Ta aplikacja nie wpływa na bezpieczeństwo korzystania z bankowości mobilnej !')
    });


});
/*Safe Smartfon-End*/