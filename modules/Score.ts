// 定义记分牌类
class Score {
  score = 0;
  level = 1;
  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  // 限制等级
  maxLevel: number;
  // 升级
  upScore: number;

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById('scores')!;
    this.levelEle = document.getElementById('level')!;
    this.maxLevel = maxLevel
    this.upScore = upScore
  }

  // 加分
  addScore() {
    this.scoreEle.innerHTML = ++this.score + ''
    // 分数每十分升一级
    if (this.score % this.upScore === 0) {
      this.levelUp()
    }
  }
  // 升级
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + ''
    }
  }
}

export default Score;