const questionInput = document.getElementById('questionInput');
const questionButton = document.getElementById('questionButton');
const responseText = document.getElementById('responseText');
const responseGif = document.getElementById('responseGif');

questionButton.addEventListener('click', async () => {
    const question = questionInput.value.trim();
    
    try {
        if (question.endsWith('?')) {
            const response = await fetch('https://yesno.wtf/api');
            const data = await response.json();
        
        if (data.answer === 'yes') {
            responseText.textContent = 'Si';
        }

        else {
            responseText.textContent = 'No';
        }

        responseGif.src = data.image;
        }

        else {
            responseText.textContent = 'No';
            responseGif.src = '';
        }
    }

    catch (error) {
        responseText.textContent = 'Error: No se pudo obtener la respuesta';
        responseGif.src = '';
    }
});