class Snake {
  element: HTMLElement;
  // 表示蛇头的元素
  head: HTMLElement;
  // 蛇的身体（包括舌头）
  bodys: HTMLCollection;

  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodys = this.element.getElementsByTagName('div')
  }

  // 获取蛇的坐标（蛇头）
  get X() {
    return this.head.offsetLeft
  }
  get Y() {
    return this.head.offsetTop
  }

  set X(value: number) {
    if (this.X === value) {
      return
    }
    // X值的范围
    if (value < 0 || value > 290) {
      throw new Error('游戏结束')
    }
    if (this.bodys[1] && (this.bodys[1] as HTMLElement).offsetLeft === value) {
      if (value > this.X) {
        value = this.X - 10
      } else {
        value = this.X + 10
      }
    }
    this.moveBody()
    this.head.style.left = value + 'px'
    this.checkHeadBody()
  }
  set Y(value: number) {
    if (this.Y === value) {
      return
    }
    // Y值的范围
    if (value < 0 || value > 290) {
      throw new Error('游戏结束')
    }

    if (this.bodys[1] && (this.bodys[1] as HTMLElement).offsetTop === value) {
      if (value > this.Y) {
        value = this.Y - 10
      } else {
        value = this.Y + 10
      }
    }
    this.moveBody()
    this.head.style.top = value + 'px'
    this.checkHeadBody()

  }

  // 蛇增加div的方法
  addBody() {
    this.element.insertAdjacentHTML('beforeend', "<div></div>")
  }

  //身体移动
  moveBody() {
    for (let i = this.bodys.length - 1; i > 0; i--) {
      let X = (this.bodys[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodys[i - 1] as HTMLElement).offsetTop;
      (this.bodys[i] as HTMLElement).style.left = X + 'px';
      (this.bodys[i] as HTMLElement).style.top = Y + 'px';
    }
  }

  checkHeadBody() {
    for (let i = 1; i < this.bodys.length; i++) {
      let bd = this.bodys[i] as HTMLElement
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        throw new Error('游戏结束')
      }
    }
  }
}

export default Snake;