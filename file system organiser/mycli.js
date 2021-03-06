//input
let input=process.argv.slice(2)



let cmd= input[0]
switch(cmd){
    case "view":
        console.log("view command implemented");
break;
case "organise":
    console.log("organise command implemented");
break;
case "help":
    console.log(`list of all commands
    1. node mycli.js view <dirname> tree
    2. node mycli.js organise <dirname> tree
    3. node mycli.js help <dirname> tree`);

    break;

default:
    console.log("wrongcommand :(");

}