angular.module('legal').controller('CabinetController', function (QueryService, $mdDialog, SessionManager) {
   const self = this;
    QueryService.getQuestions().then(function (results) {
        self.questions = results;
    });
    QueryService.getUsers().then(function (results) {
        self.users = results;
    });


    self.cancelChanges = function () {
        $mdDialog.hide();
    };

    self.saveChanges = function (birthday) {
        alert(birthday);
    };


    self.auth = function (login, password) {
        SessionManager.auth(login, password);
        $mdDialog.hide();
    };

    self.regUser = function (name) {
        alert(name)
    };

    self.editUser = function (user) {
        $mdDialog.show({
            controller: function(){
                self.user = user;
                self.user.birthday = new Date(self.user.birthday);
                self.user.date_of_registration = new Date(self.user.date_of_registration);
                return self;
            },
            controllerAs: 'cc',
            templateUrl: '../../templates/edit-user-part.html',
            parent: angular.element(document.body),
            clickOutsideToClose:true
        })
            .then(function() {
                },
                function() {
                });
    };
});