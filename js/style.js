$(function() {
	CollapsibleLists.apply();

	$('input:checkbox').click(function() {
		var id = $(this).attr('id');

		if(id !== undefined) {
			var el = $("input[id*='"+id+"']");
			var elParent = $("input[id='"+id.split('_')[0]+"']");
			var numElement = $("input[id*='"+id.split('_')[0]+"']");
			var numChecked = $("input[id*='"+id.split('_')[0]+"']:not(:checked)");

			if(this.checked) {
				if(id.indexOf('_') > -1) {
					elParent.prop('checked', true);
				} else {
					el.prop('checked', true);
				}
			} else {
				el.prop('checked', false);
			}
			
			if(! this.checked) {
				if(numChecked.length + 1 == numElement.length ) {
					elParent.prop('checked', false);
				}
			}
		}
	});
});