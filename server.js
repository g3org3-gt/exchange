
var phantom = require('phantom');
var url = "http://www.banguat.gob.gt/";

phantom.create(function (ph) {
	ph.createPage(function (page) {
		page.open(url, function (status) {
			//console.log("> status: ", status);
			page.evaluate(evaluate, function (result) {
				//console.log('El tipo de cambio es: Q' + result);
        		console.log(result);
				ph.exit();
      		});
    	});
  	});
});


var evaluate = function(){
	var resumenes = document.getElementsByClassName("txt-resumen");
    var row = resumenes[resumenes.length-1];
    var col = row.getElementsByTagName("td")[1];
    var value = col.textContent.trimLeft().trimRight();
	return value;
}
