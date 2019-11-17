
var converter = new showdown.Converter();
var editor = document.querySelector('#front-editor');
var renderCard = document.querySelector('.card');
function renderMarkdown(){
    var html = converter.makeHtml(editor.value);
    var frontCards = document.querySelectorAll('#page1 > .card');
    frontCards.forEach(function(card){
        card.innerHTML = html;
    });
    // document.querySelector('.card').innerHTML = html;
}
function copyPictures(){
    var src = document.querySelector("#cartoonSource").value;
    var backImages = document.querySelectorAll('#page2 > .card> img');
    backImages.forEach(function(img){
        img.src = src;
    });
    // document.querySelector('.card').innerHTML = html;
}


// set textarea to handle tab correctly
var textareas = document.getElementsByTagName('textarea');
var count = textareas.length;
for(var i=0;i<count;i++){
    textareas[i].onkeydown = function(e){
        if(e.keyCode==9 || e.which==9){
            e.preventDefault();
            var s = this.selectionStart;
            this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
            this.selectionEnd = s+1; 
        }
    }
}
