 $(function () {  
    $(".slim-mainpanel > .container").css("min-height",$(window).height()-265);
    $('#datetimepicker1,#datetimepicker2').datepicker({
        autoclose: true
    });
    $(".select2-dd").select2();
      
    let dropdown = $('.models');
    dropdown.select2();
    dropdown.empty();
    // dropdown.append('<option selected="true" disabled>Choose Model</option>');
    dropdown.prop('selectedIndex', 0);
    const data = [{
            "modelName": "Model Name 1",
            "id": "id-number"
        },
        {
            "modelName": "Model Name 2",
            "id": "id-number"
        },
        {
            "modelName": "Model Name 3",
            "id": "id-number"
        },
        {
            "modelName": "Model Name 4",
            "id": "id-number"
        },
        {
            "modelName": "Model Name 5",
            "id": "id-number"
        },
        {
            "modelName": "Model Name 6",
            "id": "id-number"
        },
        {
            "modelName": "Model Name 7",
            "id": "id-number"
        },
        {
            "modelName": "Model Name 8",
            "id": "id-number"
        },
        {
            "modelName": "Model Name 9",
            "id": "id-number"
        },
        {
            "modelName": "Model Name 10",
            "id": "id-number"
        },
        {
            "modelName": "Model Name 11",
            "id": "id-number"
        },
        {
            "modelName": "Model Name 12",
            "id": "id-number"
        },
        {
            "modelName": "Model Name 13",
            "id": "id-number"
        }
    ];
    function autopopulateDropdown(data) { 
        $.each(data, function (key, entry) {
            // dropdown.append($('<option></option>').attr('value', entry.modelName).text(entry.modelName));
            dropdown.append($('<option></option>').html('<a class="modal-effect" data-toggle="modal" data-effect="effect-just-me" href="#gridModal">' + entry.modelName+'</a>'));
        })
    }
    var obj = autopopulateDropdown(data); 
 });
  $(window).on("resize",function(){
      $(".slim-mainpanel > .container").css("min-height", $(window).height() - 265);
  })