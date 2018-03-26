 var info = [];
 var currentUser = [];
 var db = new loki('loki.db');

 db.loadDatabase({}, function() {
 info = db.addCollection('Info');
 info = db.getCollection('Info');
 currentUser = db.addCollection('currentUser');
 currentUser = db.getCollection('currentUser');
 //info.removeDataOnly()
 //currentUser.removeDataOnly()
 if (info.data.length === 0 || info.data.length === null) {
   console.log("info.data.length =  " + info.data.length);
   info.insert({
      Name: "User",
      Email: "Email",
      Password: "Password",
      MainPoints: 0,
      CapitalPoints: 0,
      FlagPoints: 0,
      asia1: "",
      europe1: "",
      africa1: "",
      americas1: "",
      oceania1: "",
      world1: "",
      asia2: "",
      europe2: "",
      africa2: "",
      americas2: "",
      oceania2: "",
      world2: ""
   });
   currentUser.insert({
      currentUserName: "User",
      currentUserNumber: 0
   });
   db.saveDatabase();
 }
 });

//signup//
 let addUser = () => {
   db.loadDatabase({}, function () {
   info = db.getCollection('Info');
   info.insert({
      Name: document.getElementById("form_name").value,
      Email: document.getElementById("form_email").value,
      Password: document.getElementById("form_password").value,
      MainPoints: 0,
      CapitalPoints: 0,
      FlagPoints: 0,
      asia1: "",
      europe1: "",
      africa1: "",
      americas1: "",
      oceania1: "",
      world1: "",
      asia2: "",
      europe2: "",
      africa2: "",
      americas2: "",
      oceania2: "",
      world2: ""
    });
  db.saveDatabase();
  })
  signupSweetAlert();
  };

  let findUserName = () => {
    userName = document.getElementById("form_login_name").value;
    for (var i = 0; i < info.data.length; i++) {
      if (userName == info.data[i].Name) {
        userNumber = i;
        break;
      }
    }
  }

//login//
 let loginCurrentUser = () => {
   findUserName();
   db.loadDatabase({}, function () {
   currentUser = db.getCollection('currentUser');
   currentUser.insert({
     currentUserName: userName,
     currentUserNumber: userNumber
    });
  db.saveDatabase();
  })
 }

 let addDisabledCapital2 = (continent) => {
   db.loadDatabase({}, function () {
   info = db.getCollection('Info');
   var user = info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].Name;
   for (var i = 0; i < info.data.length; i++) {
     if (continent == "asia") {
       info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].asia2 = "disabled";
     } else if (continent == "africa") {
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].africa2 = "disabled";
     } else if (continent == "europe") {
       info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].europe2 = "disabled";
     } else if (continent == "oceania") {
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].oceania2 = "disabled";
     } else if (continent == "world") {
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].world2 = "disabled";
     } else if (continent == "americas") {
       info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].americas2 = "disabled";
     }
     info.update(info.data[i]);
   }
   db.saveDatabase();
   })
  }

  let printUsers = () => {
   for (var i = 0; i < info.data.length; i++) {
     console.log(info.data[i].Name);
     console.log(info.data[i].Password);
   }
   };

  printUsers();
