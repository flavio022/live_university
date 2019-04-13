$(document).ready(function(){
    $("#botao").click(function(){
      $("#slide").animate({
        width: "toggle"
      });
    });
  });

  $(document).ready(function () {
    $('#dtBasicExample').DataTable();
    $('.dataTables_length').addClass('bs-select');
  });

  