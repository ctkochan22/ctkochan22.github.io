$(document).ready(() => {
    console.log('Running JS');

    let guesses = [];
    let number = Math.floor(Math.random() * 50);
    $('#binarySearchStart').on('click', (e) => {
        e.preventDefault();
        console.log('Starting Binary Game!');

        // Show instructions
        $('#binary_game_message').html(
            '<p>Try out a binary search yourself. Guess a number from 0 to 50, and we\'ll tell you left or right</p>' +
            '<p>Pick the middle to find the answer most efficiently</p>' +
            '<p>Guesses: <span id="guesses"></span></p>'
        );

        // Lets generate random number

        // Create input form
        $('#binary_game_container').append(
            '<form id="binary_game_form">' +
                '<input type="text" name="binary_answer">' +
                '<input type="submit" value="Submit">' +
            '</form>'
        );

        // Click handler: for each guess
        $('#binary_game_form').on('submit', (e) => {
            e.preventDefault();

            // Add it to the message
            let input = $('input[name="binary_answer"]');
            let ans = input.val();
            $('#binary_game_form')[0].reset();

            // Validate input
            if (isNaN(ans)) {
                $('#binary_error_message').html('Not a number!');
                return;
            }

            // If its an int, lets convert it into an int
            ans = parseInt(ans);

            if (guesses.includes(ans)) {
                console.log("in array");
                $('#binary_error_message').html('Already guessed that number.');
            }

            // Push into guesses
            guesses.push(ans);
            $('#guesses').html(guesses.join(', '));

            if (ans === number) {
                $('#binary_error_message').html(`You guessed it right in ${guess.length + 1} tries!`);
            }

            if (ans < number) {
                $('#binary_error_message').html('Too low!');
            }

            if (ans > number) {
                ('#binary_error_message').html('Too low!');
            }
        })

        // User inputs guess
        // Display Smaller or Greater
        // Displays guesses
        // Shows 
    })
});