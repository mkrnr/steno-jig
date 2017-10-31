// Wrap everything in a function to avoid polluting the global namespace.
(function() {
Papa.parse("https://raw.githubusercontent.com/mkrnr/rope/master/lists/ngsl.tsv", {
  download:true,
	complete: function(results) {
    TypeJig.WordSets['ROPE NGSL']=[];
    results.data.map( function(item) {
      TypeJig.WordSets['ROPE NGSL'].push(item[0]);
      TypeJig.Translations.Plover[item[0]]=item[1];
    });
	},
  delimiter:"\t",
});
})();  // Execute the code in the wrapper function.
