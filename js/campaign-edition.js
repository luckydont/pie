/**
 * Created by Роман on 18.07.2015.
 */
var switcher = document.querySelectorAll(".changeTypeOfReward");


for (var j = 0; j < switcher.length; j++) {
   switcher[j].onclick = function() {
       var type   = this.getAttribute("type");
       var parent = this.closest("div.input-group-btn");
       var child  = parent.childNodes;

       var deactivationOfElements = this.parentElement.parentElement.children;
       for ( var i = 0; i < deactivationOfElements.length; i++) {
           if (deactivationOfElements[i].classList.contains("active")) {
               deactivationOfElements[i].classList.remove("active");
           }
       }
       // Находим блок с символом
       for (i = 0; i < child.length ; i++) {
           if (child[i].className == "reward-input input-group") {
               child = child[i];
               break;
           }
       }
       child = child.childNodes;
       for (i = 0; i < child.length ; i++) {
           if (child[i].className == "currency") {
               child = child[i];
               break;
           }
       }
       // Меняем символ
       if (type == "fixed") {
           child.innerHTML = "$";
            this.parentElement.className = "active";
       } else if (type == "slice"){
           child.innerHTML = "%";
           this.parentElement.className = "active";
       } else if (type == "bonus"){
           child.innerHTML = "";
           this.parentElement.className = "active";

       }
   };
}
