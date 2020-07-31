/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/
var quotes = [
    {
        quote: "The problem you see, it is easy. Most eyes can see what the player can do, but few eyes can see the effect the player has.",
        source: "Andrea Pirlo"
    },
    {
        quote: "God gives gifts to everyone. Some can write. Some can sing. He gave me the skill to play football and I'm making the most of it.",
        source: "Ronaldinho"
    },
    {
        quote: "In most scenarios it isn't the man on the ball who decides where the ball goes, but players without the ball. Their running actions determine the next pass.",
        source: "Johan Cruyff"
    },
    {
        quote: "Goals are only important if they win games.",
        source: "Lionel Messi"
    },
    {
        quote: "Your love makes me strong. Your hate makes me unstoppable.",
        source: "Cristiano Ronaldo"
    },
    {
        quote: "Football is played in the head. Your feet are just the tools.",
        source: "Andrea Pirlo"
    },
    {
        quote: "If you train badly, you play badly. If you work like a beast in training, you play the same way.",
        source: "Pep Guardiola"
    },
    {
        quote: "I've never played for a draw in my life.",
        source: "Sir Alex Ferguson",
        citation: "Alex Ferguson: My Autobiography",
        year: 2013
    }
]

/***
 * `getRandomQuote` function
***/
const getRandomQuote = () => {
    let randomNum = Math.floor(Math.random() * quotes.length);
    return quotes[randomNum];
}

/***
 * `printQuote` function
***/
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
    html += "</p>";
    document.getElementById('quote-box').innerHTML = html;
    return html;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);