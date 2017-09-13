(function () {
    angular
        .module("Shopify")
        .factory("MainService", mainService);

    function mainService($http) {
        var api = {
            "checkemail": checkemail
            // "findUserByCredentials": findUserByCredentials,
            // "findUserById": findUserById,
            // "updateUser": updateUser,
            // "createUser": createUser,
            // "deleteUser": deleteUser,
            // "findUserByUsername": findUserByUsername
        };
        return api;

        function checkemail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

    //     function updateUser(userId, newUser) {
    //         return $http.put("/api/user/"+userId, newUser);
    //
    //     }
    //
    //     function findUserByUsername(username){
    //         return $http.get("/api/user?username="+username);
    //     }
    //
    //     function createUser(user) {
    //         return $http.post("/api/user/", user);
    //     }
    //
    //     function deleteUser(userId) {
    //         return $http.delete('/api/user/'+userId);
    //     }
    //
    //     function findUserById(userId) {
    //         return $http.get("/api/user/"+userId);
    //
    //     }
    //
    //     function findUserByCredentials(username, password) {
    //         return $http.get("/api/user?username="+username+"&password="+password);
    //     }
    //
    }
})();