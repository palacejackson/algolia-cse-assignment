const resultHit = (hit, { html, components, sendEvent }) => html `<a class="result-hit">
  <div class="result-hit__image-container">
    <img class="result-hit__image" src="${hit.image}" />
  </div>
  <div class="result-hit__details">
    <!-- fixed highlighting issue -->
    <h3 class="result-hit__name">${components.Highlight({ hit, attribute: 'name' })}</h3>
    <p class="result-hit__price">$${hit.price}</p>
  </div>
  <div class="result-hit__controls">
    <button id="view-item" class="result-hit__view">View</button>
    <button id="add-to-cart" class="result-hit__cart" 
     onclick="${(e) => {e.stopPropagation();
    sendEvent('conversion', hit, 'Item added to cart after search');
  }}">Add To Cart</button>
  </div>
</a>`;


export default resultHit;
