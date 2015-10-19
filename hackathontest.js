var all_products = [

        [ {
            "product" : "book1",
            "name": "The Phantom Tollbooth",
            "category": "Children's Book",
            "picture_url": "media/phantomtollbooth.jpg",
            "price": "$6.00",
            "sellingpoints": ["This is one of my favorite books ever.", "Great for kids. Great for Adults.", "You'll laugh, you'll cry."]
        } ,  {
            "product" : "book2",
            "name": "Mossflower",
            "category": "Children's Book",
            "picture_url": "media/mossflower.jpg",
            "price": "$7.99",
            "sellingpoints": ["This is one of my favorite books ever.", "Great for the imagination.", "You'll laugh, you'll cry."]
        } ] ,

        [ {
            "product" : "album1",
            "name": "Blink 182",
            "category": "Rock Album",
            "picture_url": "media/blink182.jpeg",
            "price": "$9.99",
            "sellingpoints": ["This is one of my favorite albums.", "Great for adults.", "You'll laugh, you'll cry."]
        } , {
            "product" : "album2",
            "name": "Coldplay",
            "category": "Rock Album",
            "picture_url": "media/vivalavida.jpg",
            "price": "$9.99",
            "sellingpoints": ["This is one of my favorite albums.", "Great for roadtrips.", "You'll laugh, you'll cry."]
        } ]
];


        var add_to_page = function(array) {
            for (var i = 0; i < array.length; i++) {
                var arrayobject = array[i];
                for (var a = 0; a < arrayobject.length; a++){
                    var obj = arrayobject[a];
                    for (var key in obj) {
                    console.log(obj[key]);
// <!--                     $('#content').append($('<div id="'+ obj.product + '"></div>').html($('<h3 class=name></h3>').text(obj.name)));
//                     $('#' + obj.product).append($('<div class=category></div>').text(obj.category));
//                     $('.picture_url').attr("style", "height: 225px");
//                     $('#' + obj.product).append($('<br>'));
//                     $('#' + obj.product).append($('<img class=picture_url></img>').attr("src", obj.picture_url));
//                     $('.picture_url').attr("style", "height: 225px");
//                     $('#' + obj.product).append($('<br>'));
//                     $('#' + obj.product).append($('<div class=price></div>').text(obj.price));
//                     $('#' + obj.product).append($('<ul class=sellingpoints></ul>'));
//                     $('#' + obj.product + ' > .sellingpoints').append($('<li id=point1></li>').text(obj.sellingpoints[0]));
//                     $('#' + obj.product + ' > .sellingpoints').append($('<li id=point2></li>').text(obj.sellingpoints[1]));
//                     $('#' + obj.product + ' > .sellingpoints').append($('<li id=point3></li>').text(obj.sellingpoints[2]));
//                     $('#' + obj.product).append($('<br>')); -->
// <!--                     console.log(obj[key]);
//                     return;

            }
        }

    }
    // return;
};

add_to_page(all_products);