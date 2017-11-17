function addToCart(id,price){
	var total = parseFloat($('#count').html());
	total += 1;
	$.get("/addToCart?product_id="+id, function(string) {
    $('#count').html(total);
    $('#cartModal').modal('show');
	})
};
function removeFromCart(id, total) {
  var updatedTotal = total;
	updatedTotal -= 1;
	$.get("/removeFromCart?product_id="+id, function(string) {
    $('#count').html(updatedTotal);
    $('#product_'+id).fadeOut('slow');
    $('#continue').fadeOut('slow');
    $('#total').hide().html("Your cart is empty").fadeIn('slow');
	})
};
