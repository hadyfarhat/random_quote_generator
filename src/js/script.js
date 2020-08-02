/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * Array of quotes. Each quote is stored as an object.
***/
var quotes = [
    {
        quote: "The problem you see, it is easy. Most eyes can see what the player can do, but few eyes can see the effect the player has.",
        source: "Andrea Pirlo",
        tag: "educational"
    },
    {
        quote: "God gives gifts to everyone. Some can write. Some can sing. He gave me the skill to play football and I'm making the most of it.",
        source: "Ronaldinho",
        tag: "spiritual"
    },
    {
        quote: "In most scenarios it isn't the man on the ball who decides where the ball goes, but players without the ball. Their running actions determine the next pass.",
        source: "Johan Cruyff",
        tag: "educational"
    },
    {
        quote: "Goals are only important if they win games.",
        source: "Lionel Messi",
        tag: "inspirational"
    },
    {
        quote: "Your love makes me strong. Your hate makes me unstoppable.",
        source: "Cristiano Ronaldo",
        tag: "motivational"
    },
    {
        quote: "Football is played in the head. Your feet are just the tools.",
        source: "Andrea Pirlo",
        tag: "educational"
    },
    {
        quote: "If you train badly, you play badly. If you work like a beast in training, you play the same way.",
        source: "Pep Guardiola",
        tag: "motivational"
    },
    {
        quote: "I've never played for a draw in my life.",
        source: "Sir Alex Ferguson",
        tag: "motivational",
        citation: "Alex Ferguson: My Autobiography",
        year: 2013
    }
]


/**
 * Calculates a random number and uses it as an index to retrieve a quote from
 * the quotes array.
 * 
 * @return {object} quote
 */
const getRandomQuote = () => {
    let randomNum = Math.floor(Math.random() * quotes.length);
    return quotes[randomNum];
}


/**
 * Changes the background colour to a random one:
 */
const randomChangeBackgroundColour = () => {
    let colours = ["#001f3f", "#0074D9", "#39CCCC", "#3D9970", "#2ECC40", "#FF851B", "#FF4136", "#85144b", "#111111"];
    let random = Math.floor(Math.random() * colours.length);
    document.body.style.backgroundColor = colours[random];
}


/**
 * - Gets a random quote
 * - Builds up html using the quote's contents
 * - Randomly changes background colour
 * - Displays quote on screen
 * 
 * @return {string} html structure of the quote
 */
const printQuote = () => {
    randomQuote = getRandomQuote();

    html = `<p class="quote">${randomQuote.quote}</p>`;
    html += `<p class="source">${randomQuote.source}`;
    if (randomQuote.citation) {
        html += `<span class="citation">${randomQuote.citation}</span>`;
    }
    if (randomQuote.year) {
        html += `<span class="year">${randomQuote.year}</span>`;
    }
    if (randomQuote.tag) {
        html += `<span class="tag">${randomQuote.tag}</span>`;
    }
    html += "</p>";

    randomChangeBackgroundColour();

    document.getElementById('quote-box').innerHTML = html;

    return html;
}

/**
 * Print quote every 5 seconds and shows progress bar for that interval
 */
const updateQuoteAtRegularIntervals = () => {
    printQuote();

    // set background color of progress bar to body's background color
    let backgroundColor = document.body.style.backgroundColor;
    document.getElementById("bar").style.backgroundColor = backgroundColor;

    // Set interval and update progress bar
    let i = 0;
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("bar");
        var width = 1;
        var id = setInterval(frame, 100);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
                updateQuoteAtRegularIntervals();
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


updateQuoteAtRegularIntervals();