(function() {
  const style = document.createElement('style');
  style.textContent = `
    .lhw-widget-container {
      position: fixed;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2147483647; /* Maximum z-index value */
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .lhw-widget-container button {
      background-color: #4CAF50;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
    .lhw-widget-container .popup {
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
    .lhw-widget-container .popup.active {
      display: block;
    }
    .lhw-widget-container .popup h2 {
      margin-bottom: 10px;
    }
    .lhw-widget-container .popup input {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
    }
    .lhw-widget-container .popup .btn {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .lhw-widget-container .popup .btn-secondary {
      background-color: #ccc;
      margin-right: 10px;
    }
    .lhw-widget-container .popup .btn-primary {
      background-color: #4CAF50;
      color: white;
    }
  `;
  document.head.append(style);

  const widget = document.createElement('div');
  widget.className = 'lhw-widget-container';
  widget.innerHTML = `
    <button id="loveBtn">❤️</button>
    <button id="hateBtn">😡</button>
    <button id="wantBtn">🎁</button>
    <div id="popup" class="popup">
      <h2 id="popupTitle"></h2>
      <input type="text" id="popupInput" placeholder="Your feedback...">
      <div>
        <button class="btn btn-secondary" id="cancelBtn">Cancel</button>
        <button class="btn btn-primary" id="submitBtn">Submit</button>
      </div>
    </div>
  `;
  document.body.append(widget);

  const loveBtn = document.getElementById('loveBtn');
  const hateBtn = document.getElementById('hateBtn');
  const wantBtn = document.getElementById('wantBtn');
  const popup = document.getElementById('popup');
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
  }

  function closePopup() {
    popup.classList.remove('active');
  }
})();
