const hashtags = [
    "#travel", "#food", "#fitness", "#technology", "#photography", "#art", "#love", "#nature",
    "#fashion", "#music", "#fun", "#life", "#inspiration", "#motivation", "#health", "#education"
];

const searchInput = document.getElementById('searchInput');
const hashtagList = document.getElementById('hashtagList');
const noResults = document.getElementById('noResults');

function displayHashtags(filteredHashtags) {
    hashtagList.innerHTML = '';
    if (filteredHashtags.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    noResults.style.display = 'none';
    filteredHashtags.forEach(hashtag => {
        const li = document.createElement('li');
        li.innerHTML = `${hashtag} <button onclick="copyToClipboard('${hashtag}')">Copy</button>`;
        hashtagList.appendChild(li);
    });
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert(`Copied: ${text}`);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredHashtags = hashtags.filter(hashtag => hashtag.toLowerCase().includes(query));
    displayHashtags(filteredHashtags);
});

// Display all hashtags initially
displayHashtags(hashtags);

