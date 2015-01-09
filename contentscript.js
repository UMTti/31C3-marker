$(document).ready(function() {

  $( ".events-header" ).html( "<h1>31C3 marker</h1>" );

  var amount = 0;
  $('.caption').each(function(){
    amount++;
  });

  modifyData(amount);

});


function modifyData(amount) {
        // Get a value saved in a form.
         
        chrome.storage.local.get('lista', function (result) {
            lista = result.lista;
            if (!lista) {
                lista = [];
                for(var i =0;i<amount;i++){
                	lista.push("0");
                }
            }
            
            var index = 0;
            $('.caption').each(function(){
                $(this).append('<input type="checkbox" class="inputti" id="'+ index + '" value="unwatched">watched<br>');
                if(lista[index] == "1"){
                    $("#" + index + ".inputti").prop('checked', true);
                    $(this).css({"backgroundColor": "pink"});
                }
                index++;
            });

            $('input:checkbox').change(
                    function(){
                    var a = $(this).attr('id');
                    lista[a] = "1";
                    var indeksi = 0;
                    $('.caption').each(function(){
                        if(indeksi == a){
                            $(this).css({"backgroundColor": "pink"});
                            //window.reload();
                        }
                        indeksi++;
                    });
                    chrome.storage.local.set({'lista': lista}, function() {
                    });
            });

        });

}