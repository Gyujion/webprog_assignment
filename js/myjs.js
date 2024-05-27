$(document).ready(function() {
  function showPage(page) {
    $('.page').removeClass('active');
    $('#' + page).addClass('active');
    $('.nav-link').removeClass('active');
    $('a[href="#' + page + '"]').addClass('active');
  }

  $('.nav-link').click(function(e) {
    e.preventDefault();
    const page = $(this).attr('href').substring(1);
    showPage(page);
  });

  const initialPage = location.hash ? location.hash.substring(1) : 'home';
  showPage(initialPage);

  $(window).on('hashchange', function() {
    const page = location.hash.substring(1);
    showPage(page);
  });
});
