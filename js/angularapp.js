// Angular.js
(function () {

	var dishes=[
                 {
                   name:'Uthapizza',
                   image: 'img/uthappizza.png',
                   category: 'mains',
                   label:'Hot',
                   price:'4.99',
                   description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                   comment: ''
                },
                {
                    name: 'Ćevapi',
                    image: 'img/cevapi.jpg',
                    category: 'main',
                    label:'',
                    price:'8.25',
                    description: 'Ćevapi is a grilled dish of minced meat, a type of skinless sausage, found traditionally in the countries of southeastern Europe (the Balkans). They are considered a national dish in Bosnia and Herzegovina and Serbia and are also common in Croatia, Montenegro, Slovenia, as well as in Albania, Republic of Macedonia, Bulgaria, Romania.Ćevapi has its origins in the Balkans during the Ottoman period, and represents a regional speciality similar to the kofte kebab.',
                    comment:''
                },
                {
                   name:'Zucchipakoda',
                   image: 'img/zucchipakoda.png',
                   category: 'appetizer',
                   label:'',
                   price:'1.99',
                   description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                   comment: ''
                },
                {
                   name:'Vadonut',
                   image: 'img/vadonut.png',
                   category: 'appetizer',
                   label:'New',
                   price:'1.99',
                   description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
                   comment: ''
                },
                {
                   name:'ElaiCheese Cake',
                   image: 'img/elaicheesecake.png',
                   category: 'dessert',
                   label:'',
                   price:'2.99',
                   description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                   comment: ''
                }
    ];

    var app = angular.module('confusionApp', []);
    
	app.controller('menuController', function (){
	       this.dishes = dishes;
	});

})();