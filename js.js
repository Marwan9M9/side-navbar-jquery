$(function () {
  var navIsOpen = false

  function closeProcess() {
    $('.side-navigation').animate({ width: '3rem' }, 1000)
    $('.nav-list').animate({ opacity: '0' }, 500)
    $('.close-icon').hide(1000)
    $('.toggler-icon').show(1000)
    navIsOpen = false
  }

  $('.close-icon').hide()

  $('.toggler-icon').on('click', function () {
    $('.side-navigation').animate({ width: '25rem' }, 1000)
    $('.nav-list').animate({ opacity: '1' }, 500)
    $(this).hide(1000)
    $('.close-icon').show(1000)
    navIsOpen = true
  })

  $('.close-icon').on('click', function () {
    closeProcess()
  })

  $('.nav-link').on('click', function () {
    closeProcess()
  })

  $(document).mouseup(function(e) {
    if (navIsOpen === true && !$('.side-navigation').is(e.target) && $('.side-navigation').has(e.target).length === 0) {
      closeProcess()
    }
  })

})