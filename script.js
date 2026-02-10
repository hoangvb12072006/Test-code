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
