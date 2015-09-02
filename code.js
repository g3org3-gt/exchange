
var resumenes = document.getElementsByClassName("txt-resumen");
var row = resumenes[resumenes.length-1];
var col = row.getElementsByTagName("td")[1];
var value = col.textContent.trimLeft().trimRight();
