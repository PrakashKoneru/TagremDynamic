var allproducts = {
    1: {
        id : 1,
        order: 1,
        'dollor': 500,
        'title' : 'Product Title 1',
        'price' : 'Staring at $500',
        'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br><br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.<br><br>'
        +'<ul class="sprite">'
        + '     <li>Non porta dui euismod nec</li>'
        + '     <li>Ut tristique ipsum velit</li>'
        + '     <li>Quisque mollis justo</li>'
        +'</ul>',
        'uri-stub'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
        'src'        : 'images/cereal_b.jpg'
    },
    2: {
        id : 2,
        order: 2,
        'dollor': 1900,
        'title' : 'Product Title 2',
        'price' : 'Staring at $1900',
        'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
        'uri-stub'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
        'src'        : 'images/flower_b.jpg'
    },
    3: {
        id : 3,
        order: 3,
        'dollor': 2730,
        'title' : 'Product Title 3',
        'price' : 'Staring at $2730',
        'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
        'uri-stub'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
        'src'        : 'images/candy_b.jpg'
    },
    4: {
        id : 4,
        order: 4,
        'dollor': 731,
        'title' : 'Product Title 4',
        'price' : 'Staring at $731',
        'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
        'uri-stub'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
        'src'        : 'images/machine_b.jpg'
    }
};

$(document).ready(function(){

    var filter=[[0,500],[500,1000],[1000,2000],[2000,10000]]
    
    var displayproducts=function(products) {
        for (x in products){
            $(".product_list").append("<div class='each_product' id="+products[x].id+"></div>");
            $("#"+products[x].id+"").append("<h3>"+products[x].title+"</h3>")
            $("#"+products[x].id+"").append("<h4>"+products[x].price+"</h3>")
            $("#"+products[x].id+"").append("<p>"+products[x].desc.substring(0,150)+"</p>")
            $("#"+products[x].id+"").append("<img src="+products[x].src+" />")
            $("#"+products[x].id+"").append("<a href='#'>Learn More</a>")
        }
    }

    displayproducts(allproducts);

    var filterproducts=function(price,products){
        var filterallproducts=[];
        for(x in products){
            if(products[x].dollor>=filter[price][0] && products[x].dollor<=filter[price][1]){
                filterallproducts.push(products[x])
            }
        }
        return filterallproducts;
    }

    $(".filter").change(function() {
        var filtervalue=$(this).val();
        if(filtervalue=="all"){
            $(".product_list").empty();
            displayproducts(allproducts)
        }
        else{
            $(".product_list").empty();
            displayproducts(filterproducts(filtervalue,allproducts))
        }
    });

    // for displaying product details
    var displayproductdetails=function(productid,products) {
        for(x in products){
            if(products[x].id==productid){
                $(".product_detailsouter h3").text(products[x].title);
                $(".product_detailsouter h4").text(products[x].price);
                $(".product_description p").html(products[x].desc);
                $(".product_description img").attr("src",products[x].src);
                $(".product_detailsouter").css('display','block');
                var height = $(document).height();
                $(window).scrollTop(height);
            }
        }
    }

    $(".each_product").click(function() { 
        var productid=$(this).attr('id')
        displayproductdetails(productid,allproducts)
    })

    $("#close").click(function () {
        $(".product_detailsouter").css('display','none');
    });
    
    $("#search").click(function () {
        var city = $(".states").val();
        if (city === "") {
        } else {
            $(".blanket").css("display", "inherit");
            $(".pop-up").css("display", "inherit");
            $(".pop-up h2").html(city);
        }
    });

    $(".closex").click(function () {
        $(".pop-up").css("display","none");
        $(".blanket").css("display", "none");
        $(".product_detailsouter").css('display', 'none');
    });
});

