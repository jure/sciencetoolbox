$('#searchform').onsubmit = function() { return false }
$('#search').keydown(function() {
  var searchVal = $(this).val()
  if (searchVal.length > 1) {
    $('a').not('a:contains("'+searchVal+'")').closest('li').css('display', 'none')
    $('a:contains("'+searchVal+'")').closest('li').css('display', 'block')
  }
  else {
    $('a').closest('li').css('display', 'block')
  }
})