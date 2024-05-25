$(document).ready(function() {
    const closeModal = document.getElementById('close');
    const adoptButton = document.getElementById('zakaz');
    const modal = document.getElementById('dog-modal');
    // Функція для отримання списку собак з сервера
    function fetchDogs() {
        $.ajax({
            url: 'https://usersdogs.dmytrominochkin.cloud/dogs',
            method: 'GET',
            success: function(data) {
                displayDogs(data);
            },
            error: function(error) {
                console.error('Error fetching dogs:', error);
            }
        });
    }

    // Функція для відображення собак у списку
    function displayDogs(dogs) {
        const $dogsContainer = $('#dogs');
        $dogsContainer.empty();
        dogs.forEach(dog => {
            const $dogItem = $(`
                <section class="dog-item" data-id="${dog.id}">
                    <img src="https://usersdogs.dmytrominochkin.cloud${dog.dogImage}" alt="${dog.title}">
                    <div>
                        <h3>${dog.title}</h3>
                        <p>${dog.sex}</p>
                    </div>
                </section>
            `);
            $dogItem.on('click', function() {
                showModal(dog);
            });
            $dogsContainer.append($dogItem);
        });
    }

    // Функція для відображення модального вікна з детальною інформацією про собаку
    function showModal(dog) {
        $('#image').html(`<img src="https://usersdogs.dmytrominochkin.cloud${dog.dogImage}" alt="${dog.title}">`);
        $('#info').html(`
            <h2>${dog.title}</h2>
            <p><b>Sex:</b> ${dog.sex}</p>
            <p><b>Age:</b> ${dog.age}</p>
            <p><b>Personality</b> ${dog.description}</p>
        `);
        adoptButton.dataset.dogId = dog.id;
        $('#dog-modal').css('display', 'flex');
        modal.style.display = 'flex';
    }

    // Закриття модального вікна
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    adoptButton.addEventListener('click', () => {
        const dogId = adoptButton.dataset.dogId;
        alert(`ID собачки: ${dogId}`);
        modal.style.display = 'none';
    });

    // Ініціалізація завантаження собак
    fetchDogs();
});

