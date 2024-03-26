
function energyAuditActive(){
  document.getElementById("energyAudit").style.display = "block";
  document.getElementById("splash").style.display = "none";
  document.getElementById("settingsMain").style.display = "none";
  document.getElementById("schedule").style.display = "none";
  document.getElementById("shopping").style.display = "none";
  navAudit.classList.add("active");
  navHome.classList.remove("active");
  navSchedule.classList.remove("active");
  navSettings.classList.remove("active");
  navShopping.classList.remove("active");
}

function scheduleActive(){
  document.getElementById("schedule").style.display = "block";
  document.getElementById("energyAudit").style.display = "none";
  document.getElementById("splash").style.display = "none";
  document.getElementById("settingsMain").style.display = "none";
  document.getElementById("shopping").style.display = "none";
  navHome.classList.remove("active");
  navSchedule.classList.add("active");
  navAudit.classList.remove("active");
  navSettings.classList.remove("active");
  navShopping.classList.remove("active");
}

function splashActive(){
  document.getElementById("energyAudit").style.display = "none";
  document.getElementById("splash").style.display = "block";
  document.getElementById("settingsMain").style.display = "none";
  document.getElementById("schedule").style.display = "none";
  document.getElementById("shopping").style.display = "none";
  navHome.classList.add("active");
  navAudit.classList.remove("active");
  navSchedule.classList.remove("active");
  navSettings.classList.remove("active");
  navShopping.classList.remove("active");
}

function settingsActive(){
  document.getElementById("energyAudit").style.display = "none";
  document.getElementById("splash").style.display = "none";
  document.getElementById("settingsMain").style.display = "block";
  document.getElementById("schedule").style.display = "none";
  document.getElementById("shopping").style.display = "none";
  navSettings.classList.add("active");
  navHome.classList.remove("active");
  navAudit.classList.remove("active");
  navSchedule.classList.remove("active");
  navShopping.classList.remove("active");
}

function shoppingActive(){
  document.getElementById("shopping").style.display = "block";
  document.getElementById("energyAudit").style.display = "none";
  document.getElementById("splash").style.display = "none";
  document.getElementById("settingsMain").style.display = "none";
  document.getElementById("schedule").style.display = "none";
  navShopping.classList.add("active");
  navSettings.classList.remove("active");
  navHome.classList.remove("active");
  navAudit.classList.remove("active");
  navSchedule.classList.remove("active");
}



document.addEventListener('DOMContentLoaded', function () {
  var modeSwitch = document.querySelector('.mode-switch');

  modeSwitch.addEventListener('click', function () {                     document.documentElement.classList.toggle('dark');
    modeSwitch.classList.toggle('active');
  });
  
  var listView = document.querySelector('.list-view');
  var gridView = document.querySelector('.grid-view');
  var projectsList = document.querySelector('.project-boxes');

});




