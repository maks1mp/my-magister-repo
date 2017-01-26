/**
 * Created by HP-ProBook on 26.01.2017.
 */
app.controller('test_edit', test_edit);

function test_edit($scope, $stateParams){
    $scope.course_data = $stateParams.test_for;

    $scope.questions = [];

    $scope.question = {
        title: '',
        variants: [],
    };
    $scope.back = function(){
        window.history.back();
    };
    $scope.addQuestion = function(){
        $scope.questions.push(angular.copy($scope.question));
    };
    $scope.addVariant = function(index, $event){
        var el = angular.element($event.target),
            field = el.parent().find('input');

        var value = field.val();

        if (value) {
            $scope.questions[index].variants.push({
                title: value,
                status: false
            });
            field.val('');
        }

    };

    $scope.saveChanges = function(){
        console.log($scope.questions);
    };
}