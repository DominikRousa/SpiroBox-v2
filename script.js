document.addEventListener('DOMContentLoaded', function () {
    displayCards();
  });
  
  function displayCards(english, czech, explanation) {
    let cards = getCards();
    let cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.innerHTML = '';
  
  
    cards.forEach((item, index) => {
      let itemElement = document.createElement('div');
      itemElement.className = 'card';
      itemElement.innerHTML = `
            <div class="card">
                <img src="https://iczc.cz/9dg6sfiucsgii913unofjffe21-1_1/obrazek" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Název</h5>
                    <p class="card-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae est ex.</p>
                    <a onclick="addToCard()" class="card-btn"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ffffff" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>Do košíku</a>                                
                </div>
            </div>
        `;
  
      cardsContainer.appendChild(itemElement);
    });
  }

function sendForm(){
    
}