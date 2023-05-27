import Snake from "./Snake";
import Food from "./Food";
import Score from "./Score";

class GameControl {

  snake: Snake;
  food: Food;
  score: Score;
  // 存储键盘方向
  direction: string = ''
  isLive = true;

  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.score = new Score(10, 3)
    this.init()
  }

  init() {
    document.addEventListener('keydown', this.keyDownHandler.bind(this));
    this.run()
  }

  // 键盘按下事件
  keyDownHandler(event: KeyboardEvent) {
    this.direction = event.key
  }

  // 控制蛇移动
  run() {
    console.log('zhixingl');

    let X = this.snake.X
    let Y = this.snake.Y

    switch (this.direction) {
      case "ArrowUp":
        Y -= 10
        break;
      case "ArrowDown":
        Y += 10
        break;
      case "ArrowLeft":
        X -= 10
        break;
      case "ArrowRight":
        X += 10
        break;
    }

    this.checkEat(X, Y)

    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch (e) {
      alert((e as any).message)
      this.isLive = false
    }

    this.isLive && setTimeout(this.run.bind(this), 300 - (this.score.level - 1) * 30);
  }

  // 蛇吃到食物
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.food.change()
      this.score.addScore()
      this.snake.addBody()
    }
  }
}

export default GameControl;