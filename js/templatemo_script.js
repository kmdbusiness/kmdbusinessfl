var top_menu_height = 0;
jQuery(function($) {
		$(window).load( function() {
			$('.external-link').unbind('click');	
		});
		
        $(document).ready( function() {

            // load google map
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
            'callback=initialize';
        document.body.appendChild(script);

        top_menu_height = $('.templatemo-top-menu').height();
        // scroll spy to auto active the nav item
        $('body').scrollspy({ target: '#templatemo-nav-bar', offset: top_menu_height + 10 });
		$('.external-link').unbind('click');


        // scroll to specific id when click on menu
        $('.templatemo-top-menu .navbar-nav a').click(function(e){
            e.preventDefault(); 
            var linkId = $(this).attr('href');
            scrollTo(linkId);
            if($('.navbar-toggle').is(":visible") == true){
                $('.navbar-collapse').collapse('toggle');
            }
            $(this).blur();
            return false;
        });
		/*
		var dt = window.atob('IHwgRGVzaWduOiA8YSByZWw9Im5vZm9sbG93IiBocmVmPSJodHRwOi8vd3d3LnRlbXBsYXRlbW8uY29tL3RtLTM5NS11cmJhbmljIiB0YXJnZXQ9Il9wYXJlbnQiPlVyYmFuaWM8L2E+'); // decode the string
		var div = document.getElementById('footer-line');
		div.innerHTML = div.innerHTML + dt;
		*/
        // to stick navbar on top
        $('.templatemo-top-menu ').stickUp();

        // gallery category
        $('.templatemo-gallery-category a').click(function(e){
            e.preventDefault(); 
            $(this).parent().children('a').removeClass('active');
            $(this).addClass('active');
            var linkClass = $(this).attr('href');
            $('.gallery').each(function(){
                if($(this).is(":visible") == true){
                   $(this).hide();
                };
            });
            $(linkClass).fadeIn();  
        });

        //gallery light box setup
        $('a.colorbox').colorbox({
                                    rel: function(){
                                        return $(this).data('group');

                                    }
        });
    });
});

function initialize() {
    var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(16.8451789,96.1439764)
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions);
}

// scroll animation 
function scrollTo(selectors)
{

    if(!$(selectors).size()) return;
    var selector_top = $(selectors).offset().top - top_menu_height;
    $('html,body').animate({ scrollTop: selector_top }, 'slow');

}

let langSelected;
function changeLanguage(){
	langSelected = event.target.value;
	if(langSelected !== undefined || langSelected !== null || langSelected !== ''){
		document.documentElement.lang = langSelected;
		switch (langSelected){
			case "en":
				document.getElementById("menuHome").innerHTML = "HOME";
				document.getElementById("menuServices").innerHTML = "SERVICES";
				document.getElementById("menuForms").innerHTML = "FORMS";
				document.getElementById("menuAbout").innerHTML = "ABOUT US";
				document.getElementById("menuContact").innerHTML = "CONTACT";
				document.getElementById("titleHeader").innerHTML = "Notary Public Services in Broward & South Florida";
				document.getElementById("slogan").innerHTML = "Welcome to ";
				document.getElementById("slogan1").innerHTML = "We speak Spanish and English.";
				document.getElementById("slogan2").innerHTML = "In the US, a notary public is not a lawyer and cannot provide legal representation or legal advise.";
				document.getElementById("hCarousel1").innerHTML = "Welcome to KMD Bussiness Consulting & Notary Public";
				document.getElementById("pCarousel1").innerHTML = "Weddings | Contracts | Affidavits | Wills | Business Consulting";
				document.getElementById("hCarousel2").innerHTML = "On-demand 24/7";
				document.getElementById("pCarousel2").innerHTML = "Reliable, Quick, Mobile Notary Public in Fort Lauderdale, FL, and Surrounding Areas.";
				document.getElementById("hCarousel3").innerHTML = "Apostille Authentication";
				document.getElementById("pCarousel3").innerHTML = "We assist in verifying foreign documents, ensuring they meet international standards.";
				document.getElementById("hCarousel4").innerHTML = "Why Choose KMD Business Consulting & Notary Public?";
				document.getElementById("pCarousel4").innerHTML = "We come to your home, office, or any location of your choice.";
				document.getElementById("pCarousel4b").innerHTML = "Need help outside regular business hours? We’ve got you covered.";
				document.getElementById("botonCarousel").innerHTML = "We respond in less than 24 hours";
				document.getElementById("headerService").innerHTML = "SERVICES";
				document.getElementById("blogHeader1").innerHTML = "WHAT DOES A NOTARY PUBLIC DO?";
				document.getElementById("blog1").innerHTML = "We help with personal documents like wills, power of attorney forms, affidavits, and school permission slips. Whether it’s for legal, medical, or financial purposes, we ensure your documents are properly notarized.";
				document.getElementById("blogHeader2").innerHTML = "EXIT PERMIT FOR MINORS";
				document.getElementById("blog2").innerHTML = "Exit Permit and Apostille. Obtaining this document and its corresponding Apostille ensures that the minor can travel safely and legally.";
				document.getElementById("blogHeader3").innerHTML = "MORTGAGE SIGNING & LEASES";
				document.getElementById("blog3").innerHTML = "It is used in leases, sales, in communications to the city council regarding new properties transferred or created, in the establishment of usufructs and rents, or in the creation of the real estate registry of properties.";
				document.getElementById("blogHeader4").innerHTML = "INHERITANCES";
				document.getElementById("blog4").innerHTML = "Regarding inheritances, a notary public is necessary for making a will, but also for a declaration of intestate heirs or the submission of forms to the registry of last wills, informing beneficiaries of legacies or inheritances they are unaware of, participating in the payment of inheritance taxes or the division of an inheritance, etc.";
				document.getElementById("blogHeader5").innerHTML = "WEDDINGS";
				document.getElementById("blog5").innerHTML = "In Florida a Notary Public is authorized to perform wedding ceremonies";
				document.getElementById("blogHeader6").innerHTML = "CONTRACTS AND AFFIDAVITS";
				document.getElementById("blog6").innerHTML = "A notary public affidavit is a written statement made under oath, where the person making the statement (the affiant) swears to the truthfulness of its contents.";
				document.getElementById("aboutHeader").innerHTML = "GET TO KNOW US";
				document.getElementById("pAbout1").innerHTML = "We take your needs very seriously";
				document.getElementById("pAbout2").innerHTML = "Your satisfaction is our priority";
				document.getElementById("pAbout3").innerHTML = "We are proud to have you as a customer";
				document.getElementById("pAbout4").innerHTML = "We offer expert assistance, making the process easy and efficient";
				document.getElementById("contactHeader").innerHTML = "CONTACT US";
				document.getElementById("contacto1").innerHTML = "Your satisfaction is our priority. Thank you so much for your trust and for making us better every day!";
				document.getElementById("tweets1").innerHTML = "Your trust is a priceless gift that motivates us to continue offering the best in every service.";
				document.getElementById("goTopBtn").innerHTML = "Back To Top &#9757;";
				document.getElementById("forms").innerHTML = "FORMS";
				document.getElementById("buttonForms").innerHTML = "Show Forms";				
				break;
			case "es":
				document.getElementById("menuHome").innerHTML = "INICIO";
				document.getElementById("menuServices").innerHTML = "SERVICIOS";
				document.getElementById("menuForms").innerHTML = "FORMULARIOS";
				document.getElementById("menuAbout").innerHTML = "NOSOTROS";
				document.getElementById("menuContact").innerHTML = "CONTACTO";
				document.getElementById("titleHeader").innerHTML = "Servicios de Notary Public en el sur de la Florida";
				document.getElementById("slogan").innerHTML = "Bienvenido a ";
				document.getElementById("slogan1").innerHTML = "Hablamos Español e Inglés";
				document.getElementById("slogan2").innerHTML = "En Estados Unidos, un notario público no es un abogado y no puede proporcionar representación legal ni consejos legales.";
				document.getElementById("hCarousel1").innerHTML = "Bienvenido a KMD Bussiness Consulting & Notary Public";
				document.getElementById("pCarousel1").innerHTML = "Bodas | Contratos | Declaraciones juradas | Testamentos | Consultoría empresarial";
				document.getElementById("hCarousel2").innerHTML = "Disponibles 24/7";
				document.getElementById("pCarousel2").innerHTML = "Notario público confiable, rápido y móvil en Fort Lauderdale, FL y áreas circundantes.";
				document.getElementById("hCarousel3").innerHTML = "Autenticación de Apostilla";
				document.getElementById("pCarousel3").innerHTML = "Ayudamos a verificar documentos extranjeros, garantizando que cumplan con los estándares internacionales.";
				document.getElementById("hCarousel4").innerHTML = "¿Por qué elegir KMD Business Consulting & Notary Public?";
				document.getElementById("pCarousel4").innerHTML = "Llegamos a tu domicilio, oficina o cualquier lugar de tu elección.";
				document.getElementById("pCarousel4b").innerHTML = "¿Necesitas ayuda fuera del horario laboral? Te ayudamos.";
				document.getElementById("botonCarousel").innerHTML = "Respondemos en menos de 24 horas";
				document.getElementById("headerService").innerHTML = "SERVICIOS";
				document.getElementById("blogHeader1").innerHTML = "¿QUÉ HACE UN NOTARY PUBLIC?";
				document.getElementById("blog1").innerHTML = "Ayudamos con documentos personales como testamentos, poderes notariales, declaraciones juradas y permisos escolares. Ya sea para fines legales, médicos o financieros, nos aseguramos de que sus documentos estén debidamente notariados.";
				document.getElementById("blogHeader2").innerHTML = "PERMISO DE SALIDA PARA MENORES";
				document.getElementById("blog2").innerHTML = "Permiso de Salida y Apostilla. Obtener este documento y su correspondiente Apostilla garantiza que el menor pueda viajar de forma segura y legal.";
				document.getElementById("blogHeader3").innerHTML = "FIRMA DE HIPOTECA y ARRENDAMIENTOS";
				document.getElementById("blog3").innerHTML = "Se utiliza en arrendamientos, compraventas, en las comunicaciones al ayuntamiento sobre nuevas fincas transmitidas o creadas, en la constitución de usufructos y rentas, o en la creación del registro inmobiliario de propiedades.";
				document.getElementById("blogHeader4").innerHTML = "HERENCIAS";
				document.getElementById("blog4").innerHTML = "En materia de herencias, es necesario un notario público para hacer testamento, pero también para la declaración de herederos intestado o la presentación de formularios en el registro de últimas voluntades, informar a los beneficiarios de legados o herencias que desconocen, participar en el pago del impuesto de sucesiones o en la división de una herencia, etc.";
				document.getElementById("blogHeader5").innerHTML = "BODAS";
				document.getElementById("blog5").innerHTML = "En Florida, un notario público está autorizado para realizar ceremonias de boda.";
				document.getElementById("blogHeader6").innerHTML = "CONTRATOS Y DECLARACIONES JURADAS";
				document.getElementById("blog6").innerHTML = "Una declaración jurada notarial pública es una declaración escrita hecha bajo juramento, donde la persona que hace la declaración (el declarante) jura la veracidad de su contenido.";
				document.getElementById("aboutHeader").innerHTML = "CONÓCENOS";
				document.getElementById("pAbout1").innerHTML = "Nos tomamos muy en serio sus necesidades";
				document.getElementById("pAbout2").innerHTML = "Su satisfacción es nuestra prioridad";
				document.getElementById("pAbout3").innerHTML = "Estamos orgullosos de tenerle como cliente";
				document.getElementById("pAbout4").innerHTML = "Ofrecemos asistencia experta, haciendo que el proceso sea fácil y eficiente";
				document.getElementById("contactHeader").innerHTML = "CONTÁCTENOS";
				document.getElementById("contacto1").innerHTML = "Su satisfacción es nuestra prioridad. ¡Muchas gracias por su confianza y por ayudarnos a ser mejores cada día!";
				document.getElementById("tweets1").innerHTML = "Su confianza es un regalo invaluable que nos motiva a seguir ofreciendo lo mejor en cada servicio.";
				document.getElementById("goTopBtn").innerHTML = "Volver arriba &#9757;";
				document.getElementById("forms").innerHTML = "FORMULARIOS";
				document.getElementById("buttonForms").innerHTML = "Mostrar Formularios";
				break;
		}		
	}
}

function changeButtonLabel(){
	let buttonLabel = event.target.innerText;
	if(buttonLabel !== undefined || buttonLabel !== null || buttonLabel !== ''){
		if(buttonLabel === 'Show Forms' || buttonLabel === 'Mostrar Formularios'){
			document.getElementById("buttonForms").innerHTML = "Hide Forms";
				if(langSelected === 'es'){
					document.getElementById("buttonForms").innerHTML = "Ocultar Formularios";
				}
		}else if(buttonLabel === 'Hide Forms' || buttonLabel === 'Ocultar Formularios'){
			document.getElementById("buttonForms").innerHTML = "Show Forms";
				if(langSelected === 'es'){
					document.getElementById("buttonForms").innerHTML = "Mostrar Formularios";
				}			
		}
	}	
}

window.onscroll = function() {scrollFunction()};
let mybutton = document.getElementById("goTopBtn");

function scrollFunction() {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}