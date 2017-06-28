var ClozeCard = function() {
    this.MakeCard = function(text, cloze){
        var full_text = cloze + text;
        console.log("Cloze:  " + cloze);
        console.log("Text:  ..." + text);        
        console.log("Full-Text:  " + full_text);
    }
}


module.exports = ClozeCard;