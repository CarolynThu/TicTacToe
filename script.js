var gameApp = angular.module('gameApp',[]);
 

gameApp.controller("ticController", function($scope){

var board;
var checkWin;
var reset;

$scope.board = [" "," "," "," "," "," "," "," "," "];

$scope.clicked = 0
 
$scope.clicker = function(b) {

	if ($scope.board[b] == " ") {

		$scope.clicked+=1;
		// console.log($scope.clicked);
  		if ($scope.clicked % 2 == 0) { 
			$scope.board[b] = 'O';
			checkWin();
		} 
		else {
			$scope.board[b] = 'X';
			checkWin();
		}
	}

};	
$scope.reset = function(b){
		// $scope.game.board = $scope.initial;		
		$scope.board = [" "," "," "," "," "," "," "," "," "];
		$scope.clicked = 0;
		$scope.gameWin = false;

};

var checkWin = function() {
	if ($scope.board[0] == $scope.board[1] && 
		$scope.board[2] == $scope.board[1] &&
		$scope.board[1] !== " ") {
			if ($scope.board[0] == 'X') {
				alert("X wins!");
			}else {
				alert("O wins!");
			}
	}

	if ($scope.board[3] == $scope.board[4] &&
		$scope.board[5] == $scope.board[4] &&
		$scope.board[5] !== " ") {
			if ($scope.board[3] == 'X') {
				alert("X wins");
			} else {
				alert("O wins!");
			}
	}

	if ($scope.board[6] == $scope.board[7] &&
		$scope.board[8] == $scope.board[7] &&
		$scope.board[8] !== " ") {
			if ($scope.board[6] =='X') {
				alert("X wins!");
			} else {
				alert("O wins!");
			}

	}

	if ($scope.board[0] == $scope.board[3] &&
		$scope.board[6] == $scope.board[3] &&
		$scope.board[6] !==" "){
			if ($scope.board[0] == 'X') {
				alert("X wins!");
			} else {
				alert("O wins!");
			}
	}

	if ($scope.board[1] == $scope.board[4] && 
		$scope.board[7]== $scope.board[4] && 
		$scope.board[7]!==" "){
			if ($scope.board[1] == 'X') {
				alert("X wins!");
			} else {
				alert("O wins!");
			}
		}
		if ($scope.board[2] == $scope.board[5] && 
			$scope.board[8]== $scope.board[5] && 
			$scope.board[8]!==" "){
			if ($scope.board[2] == 'X') {
				alert("X wins!");
			} else {
				alert("O wins!");
			}
		}
		if ($scope.board[0] == $scope.board[4] && 
			$scope.board[8]== $scope.board[4] && 
			$scope.board[8]!==" "){
			if ($scope.board[0] == 'X') {
				alert("X wins!");				
			} else {
				alert("O wins!");
			}		
		}
		if ($scope.board[2] == $scope.board[4] && 
			$scope.board[6]== $scope.board[4] && 
			$scope.board[6]!==" "){
			if ($scope.board[2] == 'X') {
				alert("X wins!");				
			} else {
				alert("O wins!");				
			}
		}	
		if ($scope.clicked === 9 && !$scope.checkWin) {
			alert("Draw!");
		}
};


}); // end of controller


