$(document).ready(function(){



/*
*************************
AFFICHAGE DES SYSTEMES

var recupClass: classe du lien cliqué

if: condition si le paragraphe et l'image ont la classe du lien cliqué (recupClass)

*************************
*/
	$("nav#compo ul li a").stop().click(function(event){
		
		var recupClass = $(this).attr("class");
		//console.log(recupClass);

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
	
		/*$('nav#compo ul li a').removeClass('selectionne');
		$( "nav#compo ul li a" ).css("border","0");
		$(this).addClass('selectionne');
		$(this).css("border","1px solid white"); 
		$(this).css("border-radius","30px");
		 center no-repeat 8vw transparent*/
			
		
		/*$('nav#compo ul li a').removeClass('selectionne');
		$( "nav#compo ul li a" ).css("background","none");
		$(this).addClass('selectionne');
		$(this).css("background-image","url('../media/cercle.png')");	
		$('myOjbect').css('background-image', 'url(' + imageUrl + ')');*/
		
		event.preventDefault();

});


/*
*************************
AFFICHAGE DES FONDAMENTAUX

var recupClass: classe du lien cliqué

if: même condition que pour le système (recupClass)

*************************
*/
	$("#explicationfondamentaux p").hide();
	$("#schemafondamentaux img").hide();
	$("#videofondamentaux video").hide();

	$("nav#concept ul li a").stop().click(function(event){
		
		var recupClass = $(this).attr("class");
		//console.log(recupClass);

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
		$( "nav#concept ul li a" ).css("color","white");
		$(this).addClass('selectionne');
		// $(this).css("text-decoration","underline");
		$(this).css("color","grey");
		
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
/*
**************************
Fonction animeFleche

	var topbody: recupère la hauteur de la page d'accueil
	
	Faire apparaitre / disparaitre la flèche quand scroll + quand sort de la page d'accueil

**************************
*/

	var topbody = $("#pageaccueil").offset().top; //offset().top: prend la hauteur du header
	

		
	function animeFleche(){
		if($(document).scrollTop()>topbody){ //scrollTop: nb de px scrollé depuis le haut de la page 
		// si la valeur du scroll top est supérieure à la hauteur du header 
			/*$("#centermenu").fadeOut();
			centerMenuPrincipal();*/
			$("#retourtop").fadeIn(500); //faire apparaitre la fleche
		}
		else{
			/*$("#centermenu").fadeOut();
			resetMenuPrincipal();*/
			$("#retourtop").fadeOut(500); //faire disparaitre la fleche
		}
	}
	//animeFleche();
	
	$(document).scroll(function(){
		animeFleche();
	});
	
/*ANIMATION DU MENU PRINCIPAL*/
/*
**************************
Au clic sur système / Fondamentaux : fadeOut du menu, width auto (se mettra à gauche et laissera de la place pour la flèche retourtop), fadeIn
Au clic sur retourtop : fadeOut du menu, width 100% (pour le centrer), fadeIn
**************************
*/
	$("#centermenu").css("width", "100%");
	
	$("#centermenu a").click(function(){
		$("#centermenu").fadeOut(-10);
		animeFleche();
		centerMenuPrincipal();
	} );
	
	$("#retourtop").click(function(){
		$("#centermenu").fadeOut();
		animeFleche();
		resetMenuPrincipal();
	} )


/*
function resetMenuPrincipal
-------------------------------
	Exécution de cette fonction quand retour top
	100% de width pour le menu (centré pour la page d'accueil)
	Réapparition du menu après ce changement de width
*/	
	function resetMenuPrincipal(){
		setTimeout(function(){
			$("#centermenu").css("width", "100%");
			$("#centermenu").fadeIn();
		},1400);	
	}

/*
function centerMenuPrincipal
-------------------------------
	Exécution de cette fonction quand clic sur fondamentaux / système
	width auto pour le menu
	Réapparition du menu après ce changement de width
*/		
	function centerMenuPrincipal(){
		setTimeout(function(){
			$("#centermenu").css("width", "auto");
			$("#centermenu").fadeIn();
		},1000);	
	}	
	
/*ANIMATION DU MENU FONDAMENTAUX*/
/*
**************************
Au survol soulignage
**************************

https://codepen.io/martinwolf/pen/eNNdme
*/
	/*$("#fondamentaux ul li a").hover(function(){
		$(this).animate({
			border-bottom: "1px solid white"
		},500 );
	});*/
} );