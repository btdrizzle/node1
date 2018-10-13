switch(process.argv[2]) {
    case "add":
        console.log(parseFloat(process.argv[3]) + parseFloat(process.argv[4]));
        break;
    case "subtract":
        console.log(parseFloat(process.argv[3]) - parseFloat(process.argv[4]));
        break;
    case "multiply":
        console.log(parseFloat(process.argv[3]) * parseFloat(process.argv[4]));
        break;
    case "divide":
        console.log(parseFloat(process.argv[3]) / parseFloat(process.argv[4]));
        break;
    case "exp":
        console.log(Math.pow(parseFloat(process.argv[3]),parseFloat(process.argv[4])));
        break;
}