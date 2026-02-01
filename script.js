document.addEventListener('DOMContentLoaded', () => {
    const giftPage = document.getElementById('giftPage');
    const birthdayPage = document.getElementById('birthdayPage');
    const openLetterBtn = document.getElementById('openLetterBtn');
    const letterModal = document.getElementById('letterModal');
    const closeLetterBtn = document.getElementById('closeLetterBtn');
    const floatingImagesContainer = document.getElementById('floatingImages');

    // Mảng chứa các URL hình ảnh của Ju Jing Yi
    const imageUrls = [
        "https://i.ibb.co/v3861J1/img1.jpg",
        "https://i.ibb.co/sK3zD8d/img2.jpg",
        "https://i.ibb.co/vJ0z08g/img3.jpg",
        "https://i.ibb.co/Wc6K42j/img4.jpg",
        "https://i.ibb.co/d244n99/img5.jpg",
        "https://i.ibb.co/F8tM4Wb/img6.jpg",
        "https://i.ibb.co/Lg9GqM7/img7.jpg",
        "https://i.ibb.co/CBy12Q7/star.png", // Thêm một vài ảnh trang trí
        "https://i.ibb.co/3k5fS4j/flower.png",
        "https://i.ibb.co/m00zX03/bears.png"
    ];

    // Thêm các hoa và ngôi sao vào trang sinh nhật
    function addDecorations() {
        const numDecorations = 6; // Số lượng hoa và ngôi sao
        for (let i = 0; i < numDecorations; i++) {
            const isFlower = Math.random() > 0.5;
            const decoration = document.createElement('div');
            decoration.classList.add(isFlower ? 'flower' : 'star');
            // Đặt vị trí ngẫu nhiên
            decoration.style.top = `${Math.random() * 90}%`;
            decoration.style.left = `${Math.random() * 90}%`;
            decoration.style.animationDelay = `${Math.random() * 5}s`; // Delay ngẫu nhiên
            birthdayPage.appendChild(decoration);
        }
    }

    addDecorations();


    // Sự kiện click để mở hộp quà
    giftPage.addEventListener('click', () => {
        giftPage.classList.add('hidden');
        birthdayPage.classList.remove('hidden');
    });

    // Sự kiện click để mở thư
    openLetterBtn.addEventListener('click', () => {
        letterModal.classList.remove('hidden');
        addFloatingImages(); // Thêm ảnh khi mở thư
    });

    // Sự kiện click để đóng thư
    closeLetterBtn.addEventListener('click', () => {
        letterModal.classList.add('hidden');
        floatingImagesContainer.innerHTML = ''; // Xóa ảnh khi đóng thư
    });

    // Thêm ảnh nổi ngẫu nhiên vào thư
    function addFloatingImages() {
        const numImages = 10; // Số lượng ảnh muốn nổi
        floatingImagesContainer.innerHTML = ''; // Xóa ảnh cũ trước khi thêm mới

        for (let i = 0; i < numImages; i++) {
            const img = document.createElement('img');
            img.src = imageUrls[Math.floor(Math.random() * imageUrls.length)];
            img.style.top = `${Math.random() * 80}%`;
            img.style.left = `${Math.random() * 80}%`;
            img.style.transform = `rotate(${Math.random() * 360}deg)`; // Xoay ngẫu nhiên ban đầu
            img.style.animationDelay = `${Math.random() * 10}s`; // Delay animation ngẫu nhiên
            floatingImagesContainer.appendChild(img);
        }
    }
});
