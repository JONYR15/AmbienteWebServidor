function mostrar(boton){
    if('inicio'===boton){
        $('#inicio').show();
                $('#People').hide();
                 $('#Planets').hide(); 
                    $('#Spaceships').hide(); 
                    $('#Vehicles').hide(); 
                    $('#Species').hide(); 
                    $('#Films').hide();
                    }   
            
                if('People'===boton){
                    $('#inicio').hide();
                $('#People').show();
                 $('#Planets').hide(); 
                    $('#Spaceships').hide(); 
                    $('#Vehicles').hide(); 
                    $('#Species').hide(); 
                    $('#Films').hide();  
                }else if ('Planets'===boton) {
                    $('#inicio').hide();
                    $('#People').hide();
                    $('#Planets').show(); 
                    $('#Spaceships').hide(); 
                    $('#Vehicles').hide(); 
                    $('#Species').hide(); 
                    $('#Films').hide();   
                }else if ('Spaceships'===boton) {
                    $('#inicio').hide();
                    $('#People').hide();
                    $('#Planets').hide(); 
                    $('#Spaceships').show(); 
                    $('#Vehicles').hide(); 
                    $('#Species').hide(); 
                    $('#Films').hide();   
                }else if ('Vehicles'===boton) {
                    $('#inicio').hide();
                    $('#People').hide();
                    $('#Planets').hide(); 
                    $('#Spaceships').hide(); 
                    $('#Vehicles').show(); 
                    $('#Species').hide(); 
                    $('#Films').hide();   
                }else if ('Species'===boton) {
                    $('#inicio').hide();
                    $('#People').hide();
                    $('#Planets').hide(); 
                    $('#Spaceships').hide(); 
                    $('#Vehicles').hide(); 
                    $('#Species').show(); 
                    $('#Films').hide();   
                }else if ('Films'===boton) {
                    $('#inicio').hide();
                    $('#People').hide();
                    $('#Planets').hide(); 
                    $('#Spaceships').hide(); 
                    $('#Vehicles').hide(); 
                    $('#Species').hide(); 
                    $('#Films').show();   
                }   

        }





var personajes = [];
var conteoPersonajes = 0;

    function CargarPersonajes(pagina) {
    $.get("https://swapi.co/api/people/?page="+pagina+"&format=json", function (json, result) {
      for (var i = 0; i < json.results.length; i++) {
        var personaje = json.results[i];
        personajes.push(personaje);
        $('#tabla-personajes tbody')[0].innerHTML +=
        "<tr>" +
          "<td>" + personaje.name + "</td>" + 
          "<td>" + personaje.height + "</td>" + 
          "<td>" + personaje.mass + "</td>" + 
          "<td>" + personaje.hair_color + "</td>" + 
          "<td>" + personaje.skin_color + "</td>" + 
          "<td>" + personaje.eye_color + "</td>" + 
          "<td>" + personaje.gender + "</td>" + 
          "<td>" + personaje.birth_year + "</td>" +           
        "</tr>";
        
        conteoPersonajes++;
      }
      
      if (json.next == null) {
        $('#tabla-personajes').DataTable({
        "scrollCollapse": true,
        "responsive": true,       
        "searching": true,        
        "paging": true,            
        "language":{search: "Buscar:"}  
      });
        $('#tabla-personajes').show(5);
        $('#tabla-personajes-cargador').hide(5);
      } else {
        var nuevaPagina = pagina + 1;
        CargarPersonajes(nuevaPagina);
      }

    });
  }
$(document).ready(function(){
    CargarPersonajes(1);

  });

var planetas = [];

var conteoPlanetas = 0;

function CargarPlanetas(pagina) {
    $.get("https://swapi.co/api/planets/?page="+pagina+"&format=json", function (json, result) {
      for (var i = 0; i < json.results.length; i++) {
        var planeta = json.results[i];

        planetas.push(planeta);

        $('#tabla-planetas tbody')[0].innerHTML +=
        "<tr>" +
        "<td>" + planeta.name + "</td>" + 
        "<td>" + planeta.rotation_period + "</td>" +
        "<td>" + planeta.orbital_period + "</td>" + 
        "<td>" + planeta.diameter + "</td>" + 
          "<td>" + planeta.climate + "</td>" + 
          "<td>" + planeta.gravity + "</td>" +
          "<td>" + planeta.terrain+ "</td>" +
          "<td>" + planeta.surface_water + "</td>" + 
          "<td>" + planeta.population + "</td>" +   
          
        "</tr>";
      
        conteoPlanetas++;
      }      
      if (json.next == null) {
        $('#tabla-planetas').DataTable({
        "scrollCollapse": true,
        "responsive": true,       
        "searching": true,        
        "paging": true,            
        "language":{search: "Buscar:"}
        });
        $('#tabla-planetas').show(5);
        $('#tabla-planetas-cargador').hide(5);
      } else {
        var nuevaPagina = pagina + 1;
        CargarPlanetas(nuevaPagina);
      }

    });
  }
$(document).ready(function(){
    CargarPlanetas(1);
  });



var Naves = [];
var mostrarNaves = 0;

    function VerNaves (pagina){
        $.get ("https://swapi.co/api/starships/?page="+pagina+"&format=json", function (json, result){
            for (var i = 0; i < json.results.length; i++) {
                var nave = json.results[i];
                Naves.push(nave);
             $('#tabla-naves tbody')[0].innerHTML +=
           "<tr>" +
          "<td>" + nave.name + "</td>" + 
          "<td>" + nave.model + "</td>" + 
          "<td>" + nave.manufacturer + "</td>" + 
          "<td>" + nave.cost_in_credits + "</td>" +
          "<td>" + nave.length + "</td>" +
          "<td>" + nave.max_atmosphering_speed + "</td>" +
          "<td>" + nave.crew + "</td>" +
          "<td>" + nave.passengers + "</td>" +
          "<td>" + nave.cargo_capacity + "</td>" +
          "<td>" + nave.cosumables + "</td>" +
          "<td>" + nave.hyperdrive_rating + "</td>" +
          "<td>" + nave.MGLT + "</td>" +          
        "</tr>";

        mostrarNaves++;
        }
        if (json.next == null) {
        $('#tabla-naves').DataTable({
            
        "scrollCollapse": true,
        "responsive": true,       
        "searching": true,        
        "paging": true,            
        "language":{search: "Buscar:"}  
      });
        $('#tabla-naves').show(5);
        $('#tabla-naves-cargador').hide(5);
      } else {
        var nuevaPagina = pagina + 1;
        VerNaves(nuevaPagina);
      }
    });
        }
    $ (document).ready (function(){
       VerNaves(1);
    }); 



var Vehiculos= [];
var MostarVehiculos = 0;

        function VerVehiculos (pagina){
           $.get ("https://swapi.co/api/vehicles/?page="+pagina+"&format=json", function (json, result){
            for (var i = 0; i < json.results.length; i++) {
            var vehiculo = json.results[i];
            Vehiculos.push(vehiculo);
            $('#tabla-Vehiculos tbody')[0].innerHTML +=
        "<tr>" +
          "<td>" + vehiculo.name + "</td>" + 
          "<td>" + vehiculo.model + "</td>" + 
          "<td>" + vehiculo.manufacturer + "</td>" + 
          "<td>" + vehiculo.cost_in_credits + "</td>" +
          "<td>" + vehiculo.length + "</td>" +
          "<td>" + vehiculo.max_atmosphering_speed + "</td>" +
          "<td>" + vehiculo.crew + "</td>" +
          "<td>" + vehiculo.passengers + "</td>" +
          "<td>" + vehiculo.cargo_capacity + "</td>" +
          "<td>" + vehiculo.consumables + "</td>" +
          "<td>" + vehiculo.vehicle_class + "</td>" +                   
        "</tr>";

        MostarVehiculos++;
           }
         if (json.next == null){
            $('#tabla-Vehiculos').DataTable({
        "scrollCollapse": true,
        "responsive": true,       
        "searching": true,        
        "paging": true,            
        "language":{search: "Buscar:"}  
      });
            $('#tabla-Vehiculos').show(5);
            $('#tabla-Vehiculos-cargador').hide(5);

        }else{
           var NuevaPagina = pagina + 1;
           VerVehiculos(NuevaPagina);
        }
        });
    }
    $(document).ready(function(){
      VerVehiculos(1);
    });    



var especies= [];
var mostrarEspecies = 0;

        function VerEspecies (pagina){
           $.get ("https://swapi.co/api/species/?page="+pagina+"&format=json", function (json, result){
            for (var i = 0; i < json.results.length; i++) {
            var especie = json.results[i];
            especies.push(especie);
            $('#tabla-especies tbody')[0].innerHTML +=
        "<tr>" +
        "<td>" + especie.name + "</td>" + 
        "<td>" + especie.classification + "</td>" +
        "<td>" + especie.designation + "</td>" + 
        "<td>" + especie.average_height + "</td>" + 
        "<td>" + especie.skin_color + "</td>" + 
        "<td>" + especie.hair_color + "</td>" +
        "<td>" + especie.eye_color + "</td>" +
        "<td>" + especie.average_lifespan + "</td>" + 
        "<td>" + especie.homeworld + "</td>" +   
        "<td>" + especie.language + "</td>" +
        "<td>" + especie.people + "</td>" +   
        "<td>" + especie.films + "</td>" +  
        "</tr>";
        mostrarEspecies++;
           }
         if (json.next == null){
             $('#tabla-especies').DataTable({
        "scrollCollapse": true,
        "responsive": true,       
        "searching": true,        
        "paging": true,            
        "language":{search: "Buscar:"}  
      });
            $('#tabla-especies').show(5);
            $('#tabla-especies-cargador').hide(5);

        }else{
           var NuevaPagina = pagina + 1;
           VerEspecies(NuevaPagina);
        }
        });
    }
    $(document).ready(function(){
      VerEspecies(1);
    });


    var filmes = [];
      var contarFilmes = 0;


    function MostrarFilmes (pagina){
        $.get ("https://swapi.co/api/films/?page="+pagina+"&format=json", function (json, result){
        for (var i = 0; i < json.results.length; i++) {
            var filme = json.results[i];
        filmes.push (filme);
        $('#tabla-filmes tbody')[0].innerHTML +=
        "<tr>" +
        "<td>" + filme.title + "</td>" + 
        "<td>" + filme.episode_id + "</td>" +
        "<td>" + filme.opening_crawl + "</td>" + 
        "<td>" + filme.director + "</td>" + 
        "<td>" + filme.release_date + "</td>" + 
              
        "</tr>";
        contarFilmes++;
    } 
    if (json.next == null) {
        $('#tabla-filmes').DataTable();
        $('#tabla-filmes').show(5);
        $('#tabla-filmes-cargador').hide(5);
      } else {
        var nuevaPagina = pagina + 1;
        MostrarFilmes(nuevaPagina);
      }
    });
      }

    

     $(document).ready(function(){
      MostrarFilmes(1);
    });
