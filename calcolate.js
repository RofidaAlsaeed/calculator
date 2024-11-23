function insert(num) {
    var mystring = document.form.textview.value;
    var lastchar = mystring[mystring.length - 1];

    if (mystring.length < 30) {
        if (!isNaN(lastchar) || !lastchar || !isNaN(num)) {
            document.form.textview.value += num;
        } else if (num != lastchar) {
            document.form.textview.value = mystring.slice(0, -1) + num;
        }
    }
}

function equal (){
    var sum = document.form.textview.value;
    if(sum){
        document.form.textview.value = eval(sum)
    }
}
function clean(){
    document.form.textview.value = "";
}
function back(){
    var  exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);
}