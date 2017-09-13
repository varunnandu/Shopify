(function(){
    angular
        .module("Shopify")
        .controller("MainController", MainController);

    function MainController(MainService) {
        var vm = this;
        vm.checkemail = checkemail;

        function checkemail(email) {
            if (email == undefined) {
                vm.error = 'Please enter a valid email address';
                vm.message = undefined
            }
            else {
                vm.message = "You are now subscribed to Shopify's Mailing List"
                vm.error = undefined
            }
        }
        // vm.registerUser = registerUser;

        // function registerUser(user) {
        //     UserService
        //         .findUserByUsername(user.username)
        //         .success(function () {
        //             vm.error = "sorry that username is taken"
        //         })
        //         .error(function(){
        //             UserService
        //                 .createUser(user)
        //                 .success(function(user){
        //                     $location.url('/user/' + user._id);
        //                 })
        //                 .error(function () {
        //                     vm.error = 'sorry could not register';
        //                 });
        //         });
        // }
    }
})();