document.addEventListener('DOMContentLoaded', function () {
  const cookieBanner = document.getElementById('cookieConsentBanner');
  const acceptButton = document.getElementById('acceptCookiesButton');
  const declineButton = document.getElementById('declineCookiesButton');

  if (getCookie('cookiesAccepted') !== 'true') {
    cookieBanner.classList.add('show');
  }

  acceptButton.addEventListener('click', function () {
    setCookie('cookiesAccepted', 'true', 365);
    cookieBanner.classList.remove('show');
  });

  declineButton.addEventListener('click', function () {
    setCookie('cookiesAccepted', 'false', 0); // Expiração definida para 0 para não armazenar
    cookieBanner.classList.remove('show');
  });

  function setCookie(name, value, days) {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
  }

  function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
});
