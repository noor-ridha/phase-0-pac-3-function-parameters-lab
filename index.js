function introduction(userName) {
return "hey my name is #{userName}." ;
}
console.log(introduction(noreen));


function introductionWithLanguage(userName,language) {
    return "Hi, my Name is [userName] and I am learning to program in [language]."
}
 console.log(introductionWithLanguage(noreen,javascript));

 

    function introductionWithLanguageOptional(userName,language="Javascript") {
        return "Hi, my Name is [userName] and I am learning to program in [language]."
    }
        console.log(introduction("noreen", "c++"));
