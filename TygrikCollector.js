(function () {
  const BUTTON_QUERY = '.tw-button.tw-button--success';

  const successDiv = document.createElement('div');
  successDiv.style.width = '270px';
  successDiv.style.height = '64px';
  successDiv.style.display = 'none';
  successDiv.style.alignItems = 'center';
  successDiv.style.justifyContent = 'center';
  successDiv.style.position = 'absolute';
  successDiv.style.top = '64px';
  successDiv.style.left = '50%';
  successDiv.style.marginLeft = '-270px';
  successDiv.style.zIndex = '9999999999';
  successDiv.style.backgroundColor = 'rgba(16, 16, 16, .67)';
  successDiv.style.borderRadius = '8px';
  successDiv.style.fontSize = '18px';
  successDiv.innerHTML = '+50 тугриков';

  document.body.appendChild(successDiv);

  const showCollected = () => {
    successDiv.style.display = 'flex';
  }

  const hideCollected = () => {
    successDiv.style.display = 'none';
  }

  const checker = () => {
    const item = document.querySelector(BUTTON_QUERY);
  
    if (item) {
      showCollected();
      setTimeout(() => hideCollected(), 5000);
  
      item.click();
  
      const date = new Date().toLocaleString().split(',')[1].trim();
      console.log(date, '50 тугриков собрано');
    }
  }

  let checkerTygrik = null;

  window.TYGRIK = {};

  window.TYGRIK.start = () => {
    if (!checkerTygrik) {
      checkerTygrik = setInterval(checker, 1000);

      console.log('Бот включен');
    }

    console.log('Бот уже включен');
  }

  window.TYGRIK.stop = () => {
    clearInterval(checkerTygrik);
    checkerTygrik = null;
    console.log('Бот выключен');
  }

  window.TYGRIK.start();
})();