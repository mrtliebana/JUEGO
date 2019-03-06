$( function() {

let uno=false, 
    dos=false, 
    tres=false, 
    cuatro=false, 
    cinco=false;
    seis=false, 
    siete=false, 
    ocho=false, 
    nueve=false, 
    diez=false, 
    once=false, 
    doce=false, 
    trece=false, 
    catorce=false, 
    quince=false;
    
    
    $( "#uno , #once , #cinco" ).draggable({ revert: "invalid" });
    $( "#co" ).droppable({
    	 drop: function(){
            uno=true, once=true, cinco=true;
            comprobar();
        },
    	tolerance:"intersect",
        accept:"#uno , #once , #cinco"
    });


    $( "#quince , #seis , #ocho" ).draggable({ revert: "invalid" });
    $( "#cv" ).droppable({
    	 drop: function(){
            quince=true, seis=true, ocho=true;
            comprobar();
        },
    	tolerance:"intersect",
        accept:"#quince , #seis , #ocho"
    });


    $( "#cuatro , #doce , #nueve" ).draggable({ revert: "invalid" });
    $( "#caz" ).droppable({
    	 drop: function(){
            cuatro=true, doce=true, nueve=true;
            comprobar();
        },
    	tolerance:"intersect",
        accept:"#cuatro , #doce , #nueve"
    });


    $( "#dos , #tres , #trece" ).draggable({ revert: "invalid" });
    $( "#ca" ).droppable({
    	 drop: function(){
            dos=true, tres=true, trece=true;
            comprobar();
        },
    	tolerance:"intersect",
        accept:"#dos , #tres , #trece" 
    });


    $( "#catorce , #siete , #diez" ).draggable({ revert: "invalid" });
    $( "#cm" ).droppable({
    	 drop: function(){
            catorce=true, siete=true, diez=true;
            comprobar();
        },
    	tolerance:"intersect",
        accept:"#catorce , #siete , #diez"
    });


   function comprobar(){
        if (uno && dos && tres && cuatro && cinco && seis && siete && ocho && nueve && diez && once && doce && trece && catorce && quince){ 
            
            alert("Enhorabuena, has superado todos los niveles!");
            
        }
    }
    

});