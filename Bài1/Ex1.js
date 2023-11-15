// Lấy các phần tử DOM
const counterElement = document.querySelector('.counter');
const countButton = document.getElementById('countBtn');
const resetButton = document.getElementById('resetBtn');

// Khởi tạo biến count
let count = 0;

// Định nghĩa watcher để kiểm tra và hiển thị thông báo khi count chia hết cho 10
const watcher = () => {
  if (count % 10 === 0) {
    alert('Enough!Stop here!');
  }
};

// Đặt sự kiện click cho button count
countButton.addEventListener('click', () => {
  count++;
  counterElement.textContent = count;
  watcher();
});

// Đặt sự kiện click cho button reset
resetButton.addEventListener('click', () => {
  count = 0;
  counterElement.textContent = count;
});