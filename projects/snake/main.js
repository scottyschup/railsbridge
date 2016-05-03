var advanceGame = function() {
  drawSnake(snake);
  snake = moveSnake(snake);
  if (CHUNK.detectCollisionBetween(snake, CHUNK.gameBoundaries())) {
    CHUNK.endGame();
    CHUNK.flashMessage("Whoops! you hit a wall!");
  }
}

var changeDirection = function(direction) {
  snake[0].direction = direction;
}

var drawSnake = function (snakeToDraw) {
  var drawableSnake = { color: "green", pixels: snake },
      drawableObjects = [drawableSnake];
  CHUNK.draw(drawableObjects);
};

var moveSegment = function(segment) {
  if (segment.direction === "down") {
    return { top: segment.top + 1, left: segment.left }
  } else if (segment.direction === "up") {
    return { top: segment.top - 1, left: segment.left }
  } else if (segment.direction === "right") {
    return { top: segment.top, left: segment.left + 1 }
  } else if (segment.direction === "left") {
    return { top: segment.top, left: segment.left - 1 }
  }
  return segment;
}

var moveSnake = function (snake) {
  var newSnake = [];
  snake.forEach(function(oldSegment) {
    var newSegment = moveSegment(oldSegment);
    newSegment.direction = oldSegment.direction;
    newSnake.push(newSegment);
  });

  return newSnake;
};

var snake = [
  {
    top: 1,
    left: 0,
    direction: "down"
  },
  {
    top: 0,
    left: 0,
    direction: "down"
  }
];
CHUNK.executeNTimesPerSecond(advanceGame, 5);
CHUNK.onArrowKey(changeDirection);
