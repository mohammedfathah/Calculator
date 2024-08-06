function buttonclick(val){
    document.getElementById("inp").value=document.getElementById("inp").value+val;
}
function buttonclear(){
    document.getElementById("inp").value=""
}
function equalClick(){
    var text = document.getElementById("inp").value
    var result=eval(text)
    document.getElementById('inp').value=result
}