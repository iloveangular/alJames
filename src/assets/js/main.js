(function($){


/***
 * view cart page
 * script
 */


/**
 * updateTheTotal function
 * update the total price
 * @returns {none}
 */
function updateTheTotal(){
    var i = 0;
    $('.total').each(function(){
        i += Number($(this)[0].innerHTML);
    });
    $('#the-total')[0].innerHTML = i;
}
updateTheTotal();

/**
 *   updateTotal function
 * @returns {The total price of a product}
 */
function updateTotal(select){
    var select_val = select.val();
    var price      = select.parent().next().children('span')[0].innerHTML;
    select.parent().next().next().children('span')[0].innerHTML = price * select_val;
    updateTheTotal();
}

$('.num-items').each(function(){
   $(this).change(function(){
        updateTotal($(this));
    });
});
//service description
$('.open-desc').each(function(){
    $(this).click(function(evt){
        evt.preventDefault();
        $(this)
                .next()
                .toggle();

    });
});


//add service
$('.plus-service').each(function(){
    $(this).click(function(evt){
        evt.preventDefault();
        var class_service = $(this).parent().parent().attr('class');
        var price_service = $(this).prev()[0].innerHTML;
        var name_service = $(this).parent().prev().children()[0].innerHTML;
        var name_product = $(this).parent().parent().siblings('tr.bg-gray').data('to-product');
        var class_product   = '.' + name_product;
        var product = $(class_product);
        $('<tr data-service-be="'+name_product+'" class="extra">\n\
                            <td><a class="delete-service" data-service-class="'+class_service+'" href="javascript:;"><i class="fa fa-times" aria-hidden="true"></i> </a><a href="#">'+name_service +'</a></td>\n\
                            <td><select class="num-items">\n\
                                        <option selected="selected">1</option>\n\
                                        <option>2</option>\n\
                                        <option>3</option>\n\
                                        <option>4</option>\n\
                                        <option>5</option>\n\
                                        <option>6</option>\n\
                                        <option>7</option>\n\
                                        <option>8</option>\n\
                                        <option>9</option>\n\
                                        <option>10</option>\n\
                                    </select></td>\n\
                            <td>$<span class="price">'+price_service +'</span></td>\n\
                            <td>$<span class="total">'+price_service +'</span></td>\n\
                            </tr>\n\
        ').insertAfter(class_product);

$('.num-items').each(function(){

   $(this).change(function(){
        updateTotal($(this));
    });
});
        product.nextAll('.product:first').css('border-top','1px solid #ddd');
        //remove it

        $(this).parent().parent().hide();
    });
});

//delete service
$('.table-items').delegate('a.delete-service','click',function(){
    var product =  $(this).parent().parent().prevAll('.product:first');

       var service_class = '.'+$(this).data('service-class');
       $(service_class).show();
        $(this).parent().parent().remove();
        product.next('.product').css('border-top','0px');

});


})(jQuery);
