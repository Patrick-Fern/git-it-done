var getUserRepos = function(user) {
    var apiUrl = "https://api.github.com/users/facebook/repos";

    //make a request to the url
    fetch(apiUrl).then(function(respone){
        respone.json().then(function(data){
            console.log(data);
        });
    });
};

getUserRepos();