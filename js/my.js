 $(document).ready(function() {
  $('.faq__question').on('click', f_acc);
});

function f_acc(){
  $('.faq__answer').not($(this).next()).slideUp(250);
    $(this).next().slideToggle(500);
}