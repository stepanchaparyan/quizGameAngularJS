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
      Name: "GeographyUser",
      Email: "Email",
      Password: "Password20@",
      MainPoints: 0,
      CapitalPoints: 0,
      FlagPoints: 0,
   });
   currentUser.insert({
      currentUserName: "GeographyUser",
      currentUserNumber: 0,
   });
   db.saveDatabase();
 }
 });

 let printUsers = () => {
 for (var i = 0; i < info.data.length; i++) {
   console.log(info.data[i].Name);
   console.log(info.data[i].Password);
   console.log("current " + currentUser.data[i].currentUserName);
   console.log("current " + currentUser.data[i].currentUserNumber);
 }
 };

printUsers();
