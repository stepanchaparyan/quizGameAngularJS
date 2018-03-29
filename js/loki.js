 var info = [];
 var currentUser = [];
 var db = new loki('loki.db');

 db.loadDatabase({}, function() {
 info = db.addCollection('Info');
 info = db.getCollection('Info');
 currentUser = db.addCollection('currentUser');
 currentUser = db.getCollection('currentUser');
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

 let printUsers = () => {
 for (var i = 0; i < info.data.length; i++) {
   console.log(info.data[i].Name);
   console.log(info.data[i].Password);
 }
 };

printUsers();
