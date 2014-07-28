var gameApp = angular.module('gameApp',["firebase"]);
 

gameApp.controller("ticController", function($scope, $firebase){
var TTTRef = new Firebase("https://tictactoetime.firebaseio.com") ;

$scope.clickCounter = $firebase(new Firebase("https://tictactoetime.firebaseio.com"));

$scope.remoteCellList = 
  $firebase(new Firebase("https://tictactoetime.firebaseio.com" + '/remoteboard')) ;

var board;
var checkWin;
var reset;
var endGame = false;


$scope.player1 = true;
$scope.resultOne = ' ';

$scope.board = [" "," "," "," "," "," "," "," "," "];
$scope.result = true;
$scope.clicked = 0

$scope.firstScreen = true;

$scope.remoteCellList.$bind($scope, "board");
$scope.$watch('board', function() {
    console.log('Model changed!') ;
  }) ;
 
$scope.clicker = function(b) {

	if ($scope.board[b] == " " && endGame == false){
		$scope.clicked+=1;
		// console.log($scope.clicked);
  		if ($scope.clicked % 2 == 0) { 
  			$scope.board[b] = 'O';
  			$scope.player1 = true;
		} 
		else {
			$scope.board[b] = 'X';
			$scope.player1 = false;
		} 
	};

	checkWin();
};

$scope.reset = function(b){
	location.reload(true);


};

$scope.startGame = function () {
	$scope.firstScreen = false;

}

var checkWin = function() {
	if ($scope.board[0] == $scope.board[1] && 
		$scope.board[2] == $scope.board[1] &&
		$scope.board[1] !== " ") {
		endGame = true; 
		$scope.resultOne = 'Winner!';
		console.log(endGame);
			console.log(result);

	}
	if ($scope.board[3] == $scope.board[4] &&
		$scope.board[5] == $scope.board[4] &&
		$scope.board[5] !== " ") {
		endGame = true;
		$scope.resultOne = 'Winner!';
	}
	if ($scope.board[6] == $scope.board[7] &&
		$scope.board[8] == $scope.board[7] &&
		$scope.board[8] !== " ") {
		endGame = true;
		$scope.resultOne = 'Winner!';
	}
	if ($scope.board[0] == $scope.board[3] &&
		$scope.board[6] == $scope.board[3] &&
		$scope.board[6] !==" ") {
		endGame = true;
		$scope.resultOne = 'Winner!';
	}
	if ($scope.board[1] == $scope.board[4] && 
		$scope.board[7] == $scope.board[4] && 
		$scope.board[7] !==" ") {
		endGame = true;
		$scope.resultOne = 'Winner!';
	}
	if ($scope.board[2] == $scope.board[5] && 
		$scope.board[8] == $scope.board[5] && 
		$scope.board[8] !==" ") {
		endGame = true;
		$scope.resultOne = 'Winner!';
	}
	if ($scope.board[0] == $scope.board[4] && 
		$scope.board[8] == $scope.board[4] && 
		$scope.board[8] !==" "){
		endGame = true;
		$scope.resultOne = 'Winner!';
	}
	if ($scope.board[2] == $scope.board[4] && 
		$scope.board[6] == $scope.board[4] && 
		$scope.board[6] !==" "){
		endGame = true;
		$scope.resultOne = 'Winner!';
	}	
	if ($scope.clicked === 9 && endGame===false) {
		$scope.resultOne = "It's a Tie";
	}
};


}); // end of controller
