
function tryOnOverlay(imageUrl, modelPartClass, bgSize) {
    const modelPart = document.querySelector('.' + modelPartClass);
    const overlayImage = document.createElement('div');

    overlayImage.style.backgroundImage = `url(${imageUrl})`;
    overlayImage.style.backgroundBlendMode = 'overlay';
    overlayImage.style.position = 'absolute';
    overlayImage.style.width = '100%';
    overlayImage.style.height = '100%';
    overlayImage.style.top = '-17px';
    overlayImage.style.left = '0';
    overlayImage.style.zIndex = '1';
    overlayImage.className = 'overlay-image';
    overlayImage.style.backgroundRepeat = 'no-repeat';
    overlayImage.style.backgroundSize = bgSize;

    const existingOverlay = modelPart.querySelector('.overlay-image');
    if (existingOverlay) {
        modelPart.removeChild(existingOverlay);
    }

    modelPart.appendChild(overlayImage);
}

// Hàm thiết lập sự kiện thử đồ
function setupTryOnEvent(elementId, imageUrl, modelPart, bgSize) {
    document.getElementById(elementId).addEventListener('click', function () {
        tryOnOverlay(imageUrl, modelPart, bgSize);
    });
}

// Áo
const aoData = [
    { id: 'ao1', imageUrl: '../assets/images/clothes/topcloth1.png', modelPart: 'handbag', bgSize: '1' },
    { id: 'ao2', imageUrl: '../assets/images/clothes/topcloth2.png', modelPart: 'handbag', bgSize: '1' },
    { id: 'ao3', imageUrl: '../assets/images/clothes/topcloth3.png', modelPart: 'handbag', bgSize: '1' },
    { id: 'ao4', imageUrl: '../assets/images/clothes/topcloth4.png', modelPart: 'handbag', bgSize: '1' },
    { id: 'ao5', imageUrl: '../assets/images/clothes/topcloth5.png', modelPart: 'handbag', bgSize: '1' },
    { id: 'ao6', imageUrl: '../assets/images/clothes/topcloth6.png', modelPart: 'handbag', bgSize: '1' },

];
aoData.forEach(item => setupTryOnEvent(item.id, item.imageUrl, item.modelPart, item.bgSize));

//QUẦN
const quanData = [
    { id: 'quan1', imageUrl: '../assets/images/clothes/botcloth1.png', modelPart: 'handbag' },
    { id: 'quan2', imageUrl: '../assets/images/clothes/botcloth2.png', modelPart: 'handbag' },
    { id: 'quan3', imageUrl: '../assets/images/clothes/botcloth3.png', modelPart: 'handbag' },
    { id: 'quan4', imageUrl: '../assets/images/clothes/botcloth4.png', modelPart: 'handbag' },
    { id: 'quan5', imageUrl: '../assets/images/clothes/botcloth5.png', modelPart: 'handbag' },
];
quanData.forEach(item => setupTryOnEvent(item.id, item.imageUrl, item.modelPart));

//GIÀY
const giayData = [
    { id: 'giay1', imageUrl: '../assets/images/shoes/shoes1.png', modelPart: 'feet' },
    { id: 'giay2', imageUrl: '../assets/images/shoes/shoes2.png', modelPart: 'feet' },
    { id: 'giay3', imageUrl: '../assets/images/shoes/shoes3.png', modelPart: 'feet' },
    { id: 'giay4', imageUrl: '../assets/images/shoes/shoes4.png', modelPart: 'feet' },
    { id: 'giay5', imageUrl: '../assets/images/shoes/shoes5.png', modelPart: 'feet' },
];
giayData.forEach(item => setupTryOnEvent(item.id, item.imageUrl, item.modelPart, item.bgSize));

//TÚI XÁCH
const tuiXachData = [
    { id: 'tuiXach1', imageUrl: '../assets/images/handbags/handbag1.png', modelPart: 'handbag' },
    { id: 'tuiXach2', imageUrl: '../assets/images/handbags/handbag2.png', modelPart: 'handbag' },
    { id: 'tuiXach3', imageUrl: '../assets/images/handbags/handbag3.png', modelPart: 'handbag' },
];
tuiXachData.forEach(item => setupTryOnEvent(item.id, item.imageUrl, item.modelPart, item.bgSize));

//DÂY CHUYỀN
const dayChuyenData = [
    { id: 'dayChuyen1', imageUrl: '../assets/images/necklaces/necklace1.png', modelPart: 'necklace' },
    { id: 'dayChuyen2', imageUrl: '../assets/images/necklaces/necklace2.png', modelPart: 'necklace' },
    { id: 'dayChuyen3', imageUrl: '../assets/images/necklaces/necklace3.png', modelPart: 'necklace' },
];
dayChuyenData.forEach(item => setupTryOnEvent(item.id, item.imageUrl, item.modelPart, item.bgSize));


//KIỂU TÓC
const kieuTocData = [
    { id: 'kieuToc1', imageUrl: '../assets/images/hairstyle/hairstyle1.png', modelPart: 'hairstyle', bgSize: '1' },
    { id: 'kieuToc2', imageUrl: '../assets/images/hairstyle/hairstyle2.png', modelPart: 'hairstyle', bgSize: '1' },
    { id: 'kieuToc3', imageUrl: '../assets/images/hairstyle/hairstyle3.png', modelPart: 'hairstyle', bgSize: '1' },
];
kieuTocData.forEach(item => setupTryOnEvent(item.id, item.imageUrl, item.modelPart, item.bgSize));

//BACKGROUND
const bgData = [
    { id: 'bG1', imageUrl: '../assets/images/background/background1.jpg', modelPart: 'background', bgSize: 'cover' },
    { id: 'bG2', imageUrl: '../assets/images/background/background2.jpg', modelPart: 'background', bgSize: 'cover' },
    { id: 'bG3', imageUrl: '../assets/images/background/background3.jpg', modelPart: 'background', bgSize: 'cover' },
    { id: 'bG4', imageUrl: '../assets/images/background/background4.jpg', modelPart: 'background', bgSize: 'cover' },
    { id: 'bG5', imageUrl: '../assets/images/background/background5.jpg', modelPart: 'background', bgSize: 'cover' },
    { id: 'bG6', imageUrl: '../assets/images/background/background6.jpg', modelPart: 'background', bgSize: 'cover' },
    { id: 'bG7', imageUrl: '../assets/images/background/background7.jpg', modelPart: 'background', bgSize: 'cover' },
];
bgData.forEach(item => setupTryOnEvent(item.id, item.imageUrl, item.modelPart, item.bgSize));