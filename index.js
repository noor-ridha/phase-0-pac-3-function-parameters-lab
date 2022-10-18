function introduction(userName) {
return "hey my name is #{userName}." ;
}
introduction("noreen");

function introductionWithLanguage(userName,language) {
    return "Hi, my Name is [userName] and I am learning to program in [language]."
}
    introduction("noreen","java");

    function iintroductionWithLanguageOptional(userName,language="Javascript") {
        return "Hi, my Name is [userName] and I am learning to program in [language]."
    }
        introduction("noreen", "Javascript");
