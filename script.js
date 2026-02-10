// Hàm chuyển Tab trong khung nạp thẻ
function switchTab(tabName) {
    // 1. Xóa class 'active' ở tất cả các tab và nội dung cũ
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(t => t.classList.remove('active'));
    
    // Ở bản demo này, mình chỉ làm nội dung cho tab 'napthe'
    // Nên khi bấm tab khác, nó vẫn sẽ giữ layout để không bị vỡ, 
    // bạn có thể thêm nội dung cho 'topnap' sau.
    
    // Tìm tab vừa bấm và thêm class active
    event.target.classList.add('active');
    
    if (tabName === 'napthe') {
        document.getElementById('napthe-content').style.display = 'block';
    } else {
        // Ví dụ: Ẩn nội dung nạp đi nếu bấm tab khác
        document.getElementById('napthe-content').style.display = 'none';
        alert("Chức năng " + tabName + " đang cập nhật!");
        // Quay lại tab nạp thẻ để tránh trống web
        setTimeout(() => switchTab('napthe'), 500);
    }
}

// Hiệu ứng click Nạp ngay
document.querySelector('.btn-submit-topup').addEventListener('click', function() {
    alert("Đang xử lý nạp thẻ... (Demo)");
});

// Hiệu ứng click Mua ngay
document.querySelectorAll('.btn-buy').forEach(btn => {
    btn.addEventListener('click', function() {
        alert("Vui lòng đăng nhập để mua hàng!");
    });
});

// --- XỬ LÝ POPUP LOGIN / REGISTER ---

// 1. Hàm bật/tắt Popup
function toggleLogin() {
    const modal = document.getElementById('auth-modal');
    // Nếu đang ẩn thì hiện, đang hiện thì ẩn
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
    }
}

// 2. Hàm chuyển đổi qua lại giữa Đăng Nhập & Đăng Ký
function switchAuth(type) {
    const formLogin = document.getElementById('form-login');
    const formRegister = document.getElementById('form-register');
    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');

    if (type === 'login') {
        // Hiện form đăng nhập
        formLogin.style.display = 'block';
        formRegister.style.display = 'none';
        // Đổi màu tab
        tabLogin.classList.add('active');
        tabRegister.classList.remove('active');
    } else {
        // Hiện form đăng ký
        formLogin.style.display = 'none';
        formRegister.style.display = 'block';
        // Đổi màu tab
        tabLogin.classList.remove('active');
        tabRegister.classList.add('active');
    }
}

// 3. (Tùy chọn) Bấm ra ngoài khoảng trắng để đóng popup
window.onclick = function(event) {
    const modal = document.getElementById('auth-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
