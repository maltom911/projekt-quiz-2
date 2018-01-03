var correctCards = 0;
$(init);

function init() {

    // Hide the success message
    $('#successMessage').hide();
    $('#successMessage').css({
        left: '580px',
        top: '250px',
        width: 0,
        height: 0
    });

    // Reset the game
    correctCards = 0;
    $('#cardPile').html('');
    $('#cardSlots').html('');

    // Create the pile of shuffled cards
    var numbers = [1, 2, 3, 4];   
    numbers.sort(function () {
        return Math.random() - .5
    });

    for (var i = 0; i < 4; i++) {
        
            $('<div>' + numbers[i] + '</div>').data('number', numbers[i]).attr('id', 'card' + numbers[i]).appendTo('#cardPile').draggable({
                containment: '#content',
                stack: '#cardPile div',
                cursor: 'move',
                revert: true
            });
        $('#card1').text('Zbliżeniowe płatności mobilne realizowane za pomocą telefonu komórkowego (smartfona) wykorzystujące karty SIM.');
        $('#card2').text('Wspólny system płatności mobilnych powołany przez 6 banków.');
        $('#card3').text('Pierwsza aplikacja mobilna na tablety.');
        $('#card4').text('Pierwsze komercyjne wdrożenie serwisu mobilnego przygotowanego w technologii Responsive Web Design.');
        
    }
    // Create the card slots
    var words = ['Pierwsza', 'Druga', 'Trzecia', 'Czwarta'];
    for (var i = 1; i <= 4; i++) {
        $('<div>' + words[i - 1] + '</div>').data('number', i).appendTo('#cardSlots').droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
    }

}

function handleCardDrop(event, ui) {

    //Grab the slot number and card number
    var slotNumber = $(this).data('number');
    var cardNumber = ui.draggable.data('number');

    //If the cards was dropped to the correct slot,
    //change the card colour, position it directly
    //on top of the slot and prevent it being dragged again
    if (slotNumber === cardNumber) {
        ui.draggable.addClass('correct');
        ui.draggable.draggable('disable');
        $(this).droppable('disable');
        ui.draggable.position({ of: $(this),
            my: 'left top',
            at: 'left top'
        });
        //This prevents the card from being
        //pulled back to its initial position
        //once it has been dropped
        ui.draggable.draggable('option', 'revert', false);
        correctCards++; //increment keep track correct cards
    }

    //If all the cards have been placed correctly then
    //display a message and reset the cards for
    //another go
    if (correctCards === 4) {
        $('#successMessage').show();
        $('#successMessage').animate({
            left: '300px',
            top: '200px',
            width: '400px',
            height: '100px',
            opacity: 1
        });
    }
}
