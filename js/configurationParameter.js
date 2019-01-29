var data = [];
$(function () {

    let list = $('.config-parameters');
    data = [{
            "configParameter": "Configuration Name 1",
            "id": "1",
            "details": [{
                name: 'Name 1',
                link: 'Link1' 
            }]
        },
        {
            "configParameter": "Configuration Name 2",
            "id": "2",
            "details": [{
                name: 'Name 2',
                link: 'Link2'
            }]
        },
        {
            "configParameter": "Configuration Name 3",
            "id": "3",
            "details": [{
                name: 'Name 3',
                link: 'Link3'
            }]
        },
        {
            "configParameter": "Configuration Name 4",
            "id": "4",
            "details": [{
                name: 'Name 4',
                link: 'Link4'
            }]
        },
        {
            "configParameter": "Configuration Name 5",
            "id": "5",
            "details": [{
                name: 'Name 5',
                link: 'Link5'
            }]
        },
        {
            "configParameter": "Configuration Name 6",
            "id": "6",
            "details": [{
                name: 'Name 6',
                link: 'Link6'
            }]
        },
        {
            "configParameter": "Configuration Name 7",
            "id": "7",
            "details": [{
                name: 'Name 7',
                link: 'Link7'
            }]
        } 
        ,
        {
            "configParameter": "Configuration Name 8",
            "id": "8",
            "details": [{
                name: 'Name 8',
                link: 'Link8'
            }]
        } 
        ,
        {
            "configParameter": "Configuration Name 9",
            "id": "9",
            "details": [{
                name: 'Name 9',
                link: 'Link9'
            }]
        } 
        ,
        {
            "configParameter": "Configuration Name 10",
            "id": "10",
            "details": [{
                name: 'Name 10',
                link: 'Link10'
            }]
        } 
    ];

    function configParameters(data) {
        $.each(data, function (key, entry) {
            list.append('<a href="#" class="nav-link" onclick="dataCall(' + entry.id + ')">  <span>' + entry.configParameter + '</span> <span>' + entry.id + '</span> </a>');
        })
    }
    var obj = configParameters(data);
    $(".config-parameters,.config-details").css("max-height",$(window).height()-335);
    $(".config-parameters a").on("click", function () {
        $(".config-parameters a").removeClass("active");
        $(this).addClass("active");
    });
});

function dataCall(id) {
    for (let index = 0; index < data.length; index++) {
        if (data[index].id == id) {
            $("#name").val(data[index].details[0].name);
            $("#link").val(data[index].details[0].link);
        }
    }
}