      
    var nombreLogement = 0;
    var nombreEtage = 0;
    var nombreSoussol = 0;
    var gammeStandard = 0;
    var fraisInstallation = 0;
        
    function typeGammeS(){
        var radiobtn = document.getElementById("standard").checked;
        if(radiobtn = true){
            gammeStandard = 7565;
            fraisInstallation = 0.1;
        }
    }
    
    function typeGammeP(){
        var radiobtn = document.getElementById("premium").checked;
        if(radiobtn = true){
            gammeStandard = 12345;
            fraisInstallation = 0.13;
        }
    }
        
    function typeGammeE(){
        var radiobtn = document.getElementById("excelium").checked;
        if(radiobtn = true){
            gammeStandard = 15400;
            fraisInstallation = 0.16;
        }
    }
    
    
        

    

        
    function calcul() {
        
            var nombreLogement = document.getElementById("appartement").value;
            var nombreEtage = document.getElementById("etage").value;
            var nombreSoussol = document.getElementById("soussol").value;
        
            
        
        if ( ( (nombreLogement > 5 && nombreEtage > 1) || (nombreSoussol > 0 && nombreEtage > 0 && nombreLogement > 5) ) && ((nombreLogement/nombreEtage)) >= 1  ) {
            
            var moyenneAppFloor = nombreLogement / nombreEtage;
            var nbCageAscenseur = Math.ceil(moyenneAppFloor/6);           
            
            var colonneAscensur = 1 + Math.round(nombreEtage/20);
            
            if(colonneAscensur > 1) {
                nbCageAscenseur = nbCageAscenseur * colonneAscensur;
            }
            
            document.getElementById("demo4").innerHTML = "Number of recommanded elevator: " + nbCageAscenseur;
            var elevatorCost = nbCageAscenseur * gammeStandard;
            document.getElementById("demo7").innerHTML = elevatorCost.toFixed(2) + " $";
            var InstallationCost = elevatorCost *  fraisInstallation;
            document.getElementById("demo8").innerHTML = InstallationCost.toFixed(2) + " $";
            var Total = elevatorCost + InstallationCost;
            document.getElementById("demo9").innerHTML = Total.toFixed(2) + " $";
            
            document.getElementById("demo6").innerHTML = "elavatorCost: " + elevatorCost + " Frais d'installation: " + InstallationCost + " Total: " + Total;
            
            document.getElementById("demo2").innerHTML = "Cage Asc need: " + nbCageAscenseur + "  Nombre de colonne: " + colonneAscensur + "  nb cage par col: " + nbCageAscenseur/2 ;
            

        }
        else {
            document.getElementById("demo3").innerHTML = "erreur, veuillez recommencer";
        }
    }
    
    function calculCommercial() {
        var cageEstime = document.getElementById("numberElevatorCage").value;
        
        document.getElementById("demo10").innerHTML = "Number of recommanded elevator: " + cageEstime;
        var elevatorCost = cageEstime * gammeStandard;
        document.getElementById("demo11").innerHTML = elevatorCost.toFixed(2) + " $";
        var InstallationCost = elevatorCost *  fraisInstallation;
        document.getElementById("demo12").innerHTML = InstallationCost.toFixed(2) + " $";
        var Total = elevatorCost + InstallationCost;
        document.getElementById("demo13").innerHTML = Total.toFixed(2) + " $";                
        
    }
    
     function calculCorporatif() {
         var y = 0;
         var y = document.getElementById("numberFloorB").value;
         y = parseInt(y);
         var x = 0;
         var x = document.getElementById("numberBasementsB").value;
         var x = parseInt(x);
         var xy = 0;
         var xy = parseInt(x) + parseInt(y);
         var a = document.getElementById("numberMaxOccupantsB").value;
         var xyA = xy * parseInt(a);
         var nbAs = Math.ceil(xyA / 1000);
         var nbC = Math.ceil(xy / 20);
         var nbAsnbC = Math.ceil(nbAs / nbC);
         var tot = nbC * nbAsnbC;
         document.getElementById("demo14").innerHTML = "Recommended number of elevators: " + tot;
         
        var elevatorCost = tot * gammeStandard;
        document.getElementById("demo15").innerHTML = elevatorCost.toFixed(2) + " $";
        var InstallationCost = elevatorCost *  fraisInstallation;
        document.getElementById("demo16").innerHTML = InstallationCost.toFixed(2) + " $";
        var Total = elevatorCost + InstallationCost;
        document.getElementById("demo17").innerHTML = Total.toFixed(2) + " $";                
    }
    
    function calculHybrid() {
         var y = 0;
         var y = document.getElementById("numberFloorA").value;
         y = parseInt(y);
         var x = 0;
         var x = document.getElementById("numberBasementsA").value;
         var x = parseInt(x);
         var xy = 0;
         var xy = parseInt(x) + parseInt(y);
         var a = document.getElementById("numberMaxOccupantsA").value;
         var xyA = xy * parseInt(a);
         var nbAs = Math.ceil(xyA / 1000);
         var nbC = Math.ceil(xy / 20);
         var nbAsnbC = Math.ceil(nbAs / nbC);
         var tot = nbC * nbAsnbC;
         document.getElementById("demo18").innerHTML = "Recommended number of elevators: " + tot;
        
         var elevatorCost = tot * gammeStandard;
         document.getElementById("demo19").innerHTML = elevatorCost.toFixed(2) + " $";
         var InstallationCost = elevatorCost *  fraisInstallation;
         document.getElementById("demo20").innerHTML = InstallationCost.toFixed(2) + " $";
         var Total = elevatorCost + InstallationCost;
         document.getElementById("demo21").innerHTML = Total.toFixed(2) + " $";      
        
    }
    
// Cacher les options

$(document).ready(function () {
    $('.building_type').hide();
    
    $('#building').change(function () {
        $('.building_type').hide();
        $('#'+$(this).val()).show();
    })
});    