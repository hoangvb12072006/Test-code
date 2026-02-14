// Đợi trang load xong
document.addEventListener('DOMContentLoaded', () => {
    // Lấy URL hiện tại để gán class 'active' cho nút tương ứng
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-btn');
    const menuLength = menuItem.length;

    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].classList.add("active");
        } else {
            menuItem[i].classList.remove("active");
        }
    }
});
