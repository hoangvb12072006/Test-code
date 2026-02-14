// Đợi trang load xong
document.addEventListener('DOMContentLoaded', () => {
    // Lấy URL hiện tại
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.nav-btn');

    // Lặp qua các nút trên menu, nếu link khớp với trang hiện tại thì thêm class 'active'
    menuItems.forEach(item => {
        if (currentLocation.includes(item.getAttribute('href'))) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
});
