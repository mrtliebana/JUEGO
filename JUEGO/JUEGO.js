
$( function() {

  let amarillo=false, 
      verde=false, 
      rojo=false, 
      azul=false, 
      morado = false;



    $("#amarillo").draggable({revert:"invalid"});
    $("#camarillo").droppable({
        drop: function(){
            alert("Bieen!");
            amarillo=true;
            comprobar();
        },
    	tolerance:"intersect",
        accept:"#amarillo"

    });

 
    $("#verde" ).draggable({ revert:"invalid" });
    $("#cverde" ).droppable({
    	drop: function(){
            alert("Bieen!");
            verde=true;
            comprobar();
        },
        tolerance:"intersect",
        accept:"#verde"
    });


    $("#azul" ).draggable({ revert:"invalid" });
    $("#cazul" ).droppable({
    	drop: function(){
            alert("Bieen!");
            azul=true;
            comprobar();
        },
        tolerance:"intersect",
        accept:"#azul"
    });


    $("#rojo").draggable({revert:"invalid"});
    $("#crojo").droppable({
    	drop: function(){
            alert("Bieen!");
            rojo=true;
            comprobar();
        },
        tolerance:"intersect",
        accept:"#rojo"
    });


    $("#morado").draggable({revert:"invalid"});
    $("#cmorado").droppable({
    	drop: function(){
            alert("Bieen!");
            morado=true;
            comprobar();
        },
        tolerance:"intersect",
        accept:"#morado",
    });


    function comprobar(){
        if (amarillo && verde && azul && rojo && morado ){ 
            
            let confirme = confirm("Lo has conseguido! ¿Quieres pasar al siguiente nivel?");
            if (confirme == true)
              {
              location.href="JUEGO2.html";
             }
        }
    }




  });


