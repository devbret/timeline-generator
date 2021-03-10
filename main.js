function main() {
    const datePickers = document.querySelectorAll('.date-picker');
    const dates = document.querySelectorAll('.dates');
    //Make sure to validate that the first date is before the second date.
    datePickers.forEach(function(item,index){
        item.addEventListener('input', function(){
            dates[index].innerHTML = item.value;
        });
    });
}
main();