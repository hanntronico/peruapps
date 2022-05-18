
//  document.querySelector('button.tablink').addEventListener('click', function() {
//      this.classList.add('tab-button-active');
//  });

document.getElementById("defaultOpen").click();

function openPage(event, contTab) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" tab-button-active", "");
    }
  
    document.getElementById(contTab).style.display = "block";
    event.currentTarget.className += " tab-button-active";
}
  
// MODALL
var modal = document.getElementById("myModal");

var btn = document.getElementById("actualizar");

var btnClose = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

btnClose.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}