// scroll back

window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;
  var btnVoltarAoTopo = document.getElementById('btnVoltarAoTopo');

  if (scrollPosition > 100) {
    btnVoltarAoTopo.style.display = 'block';
  } else {
    btnVoltarAoTopo.style.display = 'none';
  }
});

function voltarAoTopo() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
