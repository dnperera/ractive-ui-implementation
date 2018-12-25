import Ractive from "ractive";
import mainTemplate from "./js/templates/main";
import usersTemplate from "./js/templates/users";

//Define component
//Ractive.DEBUG = false;
var UserList = Ractive.extend({
  isolated: true,
  template: usersTemplate,
  oninit: function() {
    this.on("addUser", function() {
      if (this.get("selectedId")) {
        this.set("users[" + this.get("selectedId") + "]", {
          name: this.get("name"),
          email: this.get("email"),
          city: this.get("city")
        });

        return false;
      } else {
        var newUser = {
          name: this.get("name"),
          email: this.get("email"),
          city: this.get("city")
        };
        this.push("users", newUser);
        return false;
      }
    });

    this.on("deleteUser", function(event, ind) {
      this.splice("users", ind, 1);
    });
    this.on("editUser", function(event, ind) {
      this.set("selectedId", ind);
      this.set("name", this.get("users")[ind].name);
      this.set("email", this.get("users")[ind].email);
      this.set("city", this.get("users")[ind].city);
    });
  },
  data: function() {
    return {
      users: [
        {
          name: "Dasith Perera",
          email: "dasithp@gmail.com",
          city: "San Francisco"
        },
        {
          name: "Belden Schroeder",
          email: "belden@gmail.com",
          city: "Oakland"
        },
        {
          name: "Denith Perera",
          email: "denitht@gmail.com",
          city: "San Rafael"
        },
        { name: "Dayan Perera", email: "dnp@gmail.com", city: "Nicasio" }
      ],
      name: "",
      email: "",
      city: "",
      selectedId: false
    };
  }
});

var ractive = new Ractive({
  el: "#app",
  template: mainTemplate,
  components: {
    userList: UserList
  },
  data: {
    title: "Welcome to Ractive User Manager"
  }
});
