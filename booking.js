document.getElementById('search-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const from = formData.get('from');
    const to = formData.get('to');
    const onwardDate = formData.get('onward-date');
    const returnDate = formData.get('return-date');

    console.log(`Searching for buses from ${from} to ${to} on ${onwardDate} ${returnDate ? 'and returning on ' + returnDate : ''}.`);