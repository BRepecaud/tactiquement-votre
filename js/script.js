$(document).ready(function(){



/**************************
AFFICHAGE DES SYSTEMES

var recupClass: classe du lien cliqué

if: condition si le paragraphe et l'image ont la classe du lien cliqué (recupClass)

**************************/
	$("nav#compo ul li a").stop().click(function(event){
		

		
		var recupClass = $(this).attr("class");
		console.log(recupClass);

		//Cacher paragraphe/image à chaque clic (sorte de reset)
		$("#explicationsysteme p").hide(); 
		$("#schemasysteme img").hide();
			
		if($("#explicationsysteme p").hasClass(recupClass)){ //si le paragraphe a la classe correspondant à celle cliquée
			if($("#schemasysteme img").hasClass(recupClass)){	//et si l'image a la classe correspondant à celle cliquée
			
				$("#schemasysteme img."+recupClass).fadeIn(1000);	//Affiche l'image
				$("#explicationsysteme p."+recupClass).fadeIn(1000);	//Affiche le paragraphe
			}
		}
		
	/*Rond autour de l'item cliqué*/	
	
		$('nav#compo ul li a').removeClass('selectionne');
		$( "nav#compo ul li a" ).css("border","0");
		$(this).addClass('selectionne');
		$(this).css("border","1px solid white"); 
		$(this).css("border-radius","30px");
		
		
		event.preventDefault();

		
});


/**************************
AFFICHAGE DES FONDAMENTAUX

var recupClass: classe du lien cliqué

if: même condition que pour le système (recupClass)

**************************/
	$("nav#concept ul li a").stop().click(function(event){
		
		var recupClass = $(this).attr("class");
		console.log(recupClass);

			$("#explicationfondamentaux p").hide();
			$("#schemafondamentaux img").hide();
			$("#videofondamentaux video").hide();
			
			$("#videofondamentaux video").get(0).pause(); //pause de toutes les autres
			
			if($("#schemafondamentaux img").hasClass(recupClass)){	
				if($("#explicationfondamentaux p").hasClass(recupClass)){
						if($("#videofondamentaux video").hasClass(recupClass)){
							$("#schemafondamentaux img."+recupClass).fadeIn(1000);	
							$("#explicationfondamentaux p."+recupClass).fadeIn(1000);		
							$("#videofondamentaux video."+recupClass).fadeIn(1000);	
						}	
					}
			}
		

		/*Item souligné*/	
		
		$('nav#concept ul li a').removeClass('selectionne');
		$( "nav#concept ul li a" ).css("text-decoration","none");
		$(this).addClass('selectionne');
		$( this).css("text-decoration","underline");
		
		event.preventDefault();

		
});


/*DEFILEMENT FLUIDE*/

$(".smoothscroll").click(function(event){
	
	var idancre = $(this).attr("href"); 
	var idancretop = $(idancre).offset().top;

	$("html, body").animate({
		
		scrollTop : idancretop 
		
	}, 800);
	
	event.preventDefault();
	
});



/*FLECHE HAUT DE PAGE*/
/***************************
Fonction animeFleche

	var topbody: recupère la hauteur de la page d'accueil
	
	Faire apparaitre / disparaitre la flèche quand scroll + quand sort de la page d'accueil

***************************/

	var topbody = $("#pageaccueil").offset().top; //offset().top: prend la hauteur du header
	

		
	function animeFleche(){
		if($(document).scrollTop()>topbody){ //scrollTop: nb de px scrollé depuis le haut de la page 
		// si la valeur du scroll top est supérieure à la hauteur du header 
			$("#retourtop").stop().fadeIn(500); //faire apparaitre la fleche			
			
		}
		else{
			$("#retourtop").fadeOut(500); //faire disparaitre la fleche
		}
	}

	animeFleche();
	
	$(document).scroll(function(){
		animeFleche();
	});


} );