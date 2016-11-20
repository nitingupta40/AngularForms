angularFormsApp.controller('HomeController', 
    function ($scope, $location, DataService) {

        $scope.showCreateEmployeeForm = function () {
            //$modal.open({
            //    templateUrl: 'app/EmployeeForm/employeeFormTemplate.html',
            //    controller: "employeeFormController"
            //});
            $location.path('/newEmployeeForm');

        };

        $scope.showUpdateEmployeeForm = function (id) {
            $location.path('/updateEmployeeForm/' + id);
        };
    });

