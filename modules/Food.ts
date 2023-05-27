
// 定义食物类
class Food {
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById('food')!;
  }

  // 获取食物的坐标
  get X() {
    return this.element.offsetLeft
  }
  get Y() {
    return this.element.offsetTop
  }

  // 修改食物位置
  change() {
    let left = Math.round(Math.random() * 29) * 10
    let top = Math.round(Math.random() * 29) * 10
    this.element.style.left = left + 'px';
    this.element.style.top = top + 'px';
  }
}

export default Food;