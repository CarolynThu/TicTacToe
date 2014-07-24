var gameApp = angular.module('gameApp',[]);
 

gameApp.controller("ticController", function($scope){

var board;
var checkWin;
var reset;
var endGame = false;
// var result;

$scope.resultOne = ' ';



$scope.board = [" "," "," "," "," "," "," "," "," "];
$scope.result = true;
$scope.clicked = 0
 
$scope.clicker = function(b) {

	if ($scope.board[b] == " " && endGame == false){
		$scope.clicked+=1;
		// console.log($scope.clicked);
  		if ($scope.clicked % 2 == 0) { 
  			$scope.board[b] = 'O';
		} 
		else {
			$scope.board[b] = 'X';
		} 
	};
	
	checkWin();
};

$scope.reset = function(b){
	location.reload(true);
// 		// $scope.game.board = $scope.initial;		
// 		$scope.board = [" "," "," "," "," "," "," "," "," "];
// 		$scope.clicked = 0;
// 		$scope.gameWin = false;

		

};

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
	if ($scope.clicked === 9 && !$scope.checkWin) {
		$scope.resultOne = "It's a Tie";
	}
};


}); // end of controller


