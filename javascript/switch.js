var user = "admin";

switch(user){
    case "admin":
        console.log("You have the full access");
        break;
    case "subadmin":
        console.log("You have the access to update and delete");
        break;

    case "user":
        console.log("You have the access to Read only");
        break;

    default:
        console.log("You have the Trial Membership");
        break;
}