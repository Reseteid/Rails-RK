// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "jquery"
import "jquery_ujs"
import "popper"
function show_result(data){
    var result = document.getElementById("result");
    if (data.type == 'String'){
        result.innerHTML = "<div class = \"h1 false\" >"+ data.value+"</div>"
        return
    }
    let table_num_str = "<table><thead><th>№</th><th>Число</th><th>Счастливое?</th></thead><tbody>"
    let i = 0
    for (let num of data.value){
        i+=1
        table_num_str += "<tr class=table><td>" + i +"</td><td>"+num+"</td><td class = true> счастливое</td></tr>"
    }
    result.innerHTML = table_num_str+"</tbody></table>"
}
$(document).ready(function(){
    $('#numbers_form').bind("ajax:success", 
    function(xhr, data, status) {
    // data is already an object
    show_result(data)
    })
})
