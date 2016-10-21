Tasks = new Mongo.Collection("tasks");
if (Meteor.isClient) {
  Template.body.helpers({
    tasks: function () {
      return Tasks.find({}); 
    }
  });

  Template.body.events({
    "submit .adjust": function (event) {
      event.preventDefault();
      for (var i= 1; i<=13;i++) {
        // var textTop = event.target.elements["text"+i+"t"].value;
        var textTop = event.target.elements["text1t"].value;
        var textLeft = event.target.elements["text1l"].value;
        Tasks.insert({
          textTop: textTop,
          textLeft: textLeft,
          createdAt: new Date() // current time
        });
      }
    },
   "change form.adjust input": function (event) {
    // var name = event.target.elements["text1t"].parentNode.parentNode.querySelector("input[type=hidden]").getAttribute("name");
      console.log("[9999999999999999999"); console.log(event.target); 
      var name = event.target.parentNode.parentNode.querySelector("input[type=hidden]").getAttribute("name");
      var id= event.target.parentNode.parentNode.querySelector("input[type=hidden]").value;
      console.log(name+"[9999999999999999999"); 
      var textTop  = event.target.parentNode.parentNode.querySelector("input[name="+name+"t]").value;
      var textLeft  = event.target.parentNode.parentNode.querySelector("input[name="+name+"l]").value;
      var textTitle = event.target.parentNode.parentNode.querySelector("input[name="+name+"title]").value;
      console.log(textTop  +"[9999999999999999999"); console.log(textLeft+"[9999999999999999999"); 
      Tasks.update({_id:id},{
        _id:id,
        textTitle: textTitle,
        textTop: textTop,
        textLeft: textLeft,
        createdAt: new Date() // current time
      },{upsert:true});
   } 
});
} 
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
