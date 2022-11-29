class Counter {
  constructor({ initialNumber = 0, counterId, plusId, minusId }) {
    this.count = initialNumber;
    this.counter = document.getElementById(counterId);
    this.plusBtn = document.getElementById(plusId);
    this.minusBtn = document.getElementById(minusId);
    this.addEventListeners();
  }
  addEventListeners() {
    this.plusBtn.addEventListener("click", this.increase);
    this.minusBtn.addEventListener("click", this.decrease);
  }
  increase() {
    this.count = this.count + 1;
    this.repaintCounter();
  }
  decrease() {
    this.count = this.count - 1;
    this.repaintCounter();
  }
  repaintCounter() {
    this.counter.innerText = this.count;
  }
}

new Counter({ counterId: "count", plusId: "add", minusId: "minus" });
