const FREE_SHIPPING_THRESHOLD = 4;

const cart = {
  items: JSON.parse(localStorage.getItem('cart') || '[]'),

  add(title) {
    this.items.push(title);
    localStorage.setItem('cart', JSON.stringify(this.items));
    this.updateCount();
    this.updateProgress();
    this.updateMessage();
  },

  remove(index) {
    this.items.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.items));
    this.updateCount();
    this.updateProgress();
    this.updateMessage();
  },

  get count() {
    return this.items.length;
  },

  get progress() {
    return Math.min((this.count / FREE_SHIPPING_THRESHOLD) * 100, 100);
  },

  updateCount() {
    const badge = document.getElementById('cart-count');
    if (badge) {
      badge.textContent = this.count;
    }
  },

  updateProgress() {
    const fill = document.getElementById('shipping-bar-fill');
    if (fill) {
      fill.style.width = `${this.progress}%`;
      fill.parentElement.setAttribute('aria-valuenow', this.progress);
      fill.classList.toggle('unlocked', this.count >= FREE_SHIPPING_THRESHOLD);
    }
  },

  updateMessage() {
    const message = document.getElementById('shipping-progress-message');
    if (!message) return;
    if (this.count >= FREE_SHIPPING_THRESHOLD) {
      message.textContent = "You've unlocked free shipping!";
    } else {
      const remaining = FREE_SHIPPING_THRESHOLD - this.count;
      const word = remaining === 1 ? 'book' : 'books';
      message.textContent = `Add ${remaining} more ${word} for free shipping`;
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  cart.updateCount();
  cart.updateProgress();
  cart.updateMessage();

  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      cart.add(btn.dataset.title);
    });
  });
});
