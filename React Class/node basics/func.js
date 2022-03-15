const callMe = () => {
    console.log(global);
}


// Exporting a javascript file/code so that other files can make use of it
module.exports = callMe;