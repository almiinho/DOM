const paragraph = document.getElementById('paragraph');

const text = paragraph.textContent;
const words = text.split(' ');
const highlightedText = words.map(word => {
    if (word.length > 8) {
        return `<span class='highlight'>${word}</span>`;
    }
    return word;
}).join(' ');
paragraph.innerHTML = highlightedText;

const sourceLink = document.createElement('a');
sourceLink.href = 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html';
sourceLink.textContent = 'Source';
paragraph.insertAdjacentElement('afterend', sourceLink);

const sentences = text.split('. ');
paragraph.textContent = sentences.join('.\n');

const wordCount = words.length;
const wordCountElement = document.createElement('p');
wordCountElement.textContent = `Word Count: ${wordCount}`;
document.body.insertBefore(wordCountElement, paragraph);

paragraph.innerHTML = paragraph.innerHTML.replace(/\?/g, '🤔').replace(/!/g, '😲');
