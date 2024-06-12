(function() {
  const style = document.createElement('style');
  style.textContent = `
    .lhw-widget-button {
      position: fixed;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      gap: 10px;
      z-index: 2147483647; /* Maximum z-index value */
    }
    .lhw-widget-button button {
      background-color: #4CAF50;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
    .lhw-popup {
      display: none;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      padding: 20px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      z-index: 2147483647; /* Maximum z-index value */
      width: 90%;
      max-width: 500px;
      box-sizing: border-box;
    }
    .lhw-popup.active {
      display: block;
    }
    .lhw-popup h2 {
      margin-bottom: 10px;
    }
    .lhw-popup input {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
    }
    .lhw-popup .btn {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .lhw-popup .btn-secondary {
      background-color: #ccc;
      margin-right: 10px;
    }
    .lhw-popup .btn-primary {
      background-color: #4CAF50;
      color: white;
    }
    .lhw-blur {
      filter: blur(5px);
      transition: filter 0.3s;
    }
  `;
  document.head.append(style);

  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'lhw-widget-button';
  buttonsContainer.innerHTML = `
    <button id="loveBtn">❤️</button>
    <button id="hateBtn">😡</button>
    <button id="wantBtn">🎁</button>
  `;
  document.body.append(buttonsContainer);

  const popup = document.createElement('div');
  popup.id = 'popup';
  popup.className = 'lhw-popup';
  popup.innerHTML = `
    <h2 id="popupTitle"></h2>
    <input type="text" id="popupInput" placeholder="Your feedback...">
    <div>
      <button class="btn btn-secondary" id="cancelBtn">Cancel</button>
      <button class="btn btn-primary" id="submitBtn">Submit</button>
    </div>
  `;
  document.body.append(popup);

  const loveBtn = document.getElementById('loveBtn');
  const hateBtn = document.getElementById('hateBtn');
  const wantBtn = document.getElementById('wantBtn');
  const popupTitle = document.getElementById('popupTitle');
  const popupInput = document.getElementById('popupInput');
  const cancelBtn = document.getElementById('cancelBtn');
  const submitBtn = document.getElementById('submitBtn');

  loveBtn.addEventListener('click', () => showPopup('Share something you love'));
  hateBtn.addEventListener('click', () => showPopup('Share something you hate'));
  wantBtn.addEventListener('click', () => showPopup('Share something you want'));
  cancelBtn.addEventListener('click', closePopup);
  submitBtn.addEventListener('click', () => {
    console.log(popupInput.value);
    closePopup();
  });

  function showPopup(title) {
    popupTitle.textContent = title;
    popupInput.value = '';
    popup.classList.add('active');
    document.body.classList.add('lhw-blur');
  }

  function closePopup() {
    popup.classList.remove('active');
    document.body.classList.remove('lhw-blur');
  }
})();
