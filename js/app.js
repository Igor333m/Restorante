$("button").on('click', function() {
	console.info("Button clicked");
});

$(".slicky").slick({
          fade : true,
          autoplay : true,
          autoplaySpeed : 10000,
          arrows : false,
          dots : true
        });

