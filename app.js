angular.module( "myapp", [] )
        .controller( 'AppController', function( $scope ){
            $scope.username = "";
            $scope.users = [];
            //ng-submit="submit()"
            $scope.submit = function(){
                $scope.users.push({
                    username : $scope.username,
                    url:'//twitter.com/' + $scope.username
                } );
            };
        } );
        