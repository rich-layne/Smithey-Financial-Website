// Function to fetch and display newsletters
function displayNewsletters() {
    const pdfListContainer = document.getElementById('pdf-list');

    if (!pdfListContainer) return;

    // Fetch the PDF files from the server
    fetch('http://localhost:3000/api/newsletters')
        .then(response => response.json())
        .then(pdfUrls => {
            // Clear existing list
            pdfListContainer.innerHTML = '';

            // Loop through each URL and create a list item with a link
            pdfUrls.forEach(url => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');

                link.href = url;
                link.target = '_blank'; // Opens in a new tab
                link.innerText = url.split('/').pop(); // Extracts file name

                listItem.appendChild(link);
                pdfListContainer.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching newsletters:', error);
            pdfListContainer.innerHTML = '<li>Failed to load newsletters.</li>';
        });
}

// Ensure newsletters are displayed when the page loads
document.addEventListener('DOMContentLoaded', displayNewsletters);