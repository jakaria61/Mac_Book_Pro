document.getElementById('memory8gb').addEventListener('click', function () {
    setZero('extra-memory', 0);
});
document.getElementById('memory16gb').addEventListener('click', function () {
    setZero('extra-memory', 180);
});
document.getElementById('ssd-256').addEventListener('click', function () {
    setZero('extra-storage', 0);
})
document.getElementById('ssd-512').addEventListener('click', function () {
    setZero('extra-storage', 100);

});
document.getElementById('ssd-1tb').addEventListener('click', function () {
    setZero('extra-storage', 180);
});
document.getElementById('free-delevary').addEventListener('click', function () {
    setZero('delevry-cost', 0);
});
document.getElementById('charge-delevary').addEventListener('click', function () {
    setZero('delevry-cost', 20);
});

document.getElementById('promo-btn').addEventListener('click', function () {
    const promoText = document.getElementById('promo-text').value;
    const totalPrice = document.getElementById('total-price').innerText;
    let totalNetPrice = parseFloat(totalPrice);
    //promocode check condition
    if (promoText == 'stevekaku') {
        const promoPrice = parseFloat(totalPrice);
        const offer = promoPrice * 0.2;
        totalNetPrice = totalNetPrice - offer;

    }
    document.getElementById('net-price').innerText = totalNetPrice;

})
// set all zero /default value
function setZero(id, price) {
    document.getElementById(id).innerText = price;
    total();
}
//calculate and set total price
function total() {
    const totalPrice = document.getElementById('base-price').innerText;
    const totalMoney = parseInt(totalPrice);
    const extraMemory = document.getElementById('extra-memory').innerText;
    const extraMemoryCost = parseInt(extraMemory);
    const extraStorage = parseInt(document.getElementById('extra-storage').innerText);
    const delevaryCost = parseInt(document.getElementById('delevry-cost').innerText);
    const totalCost = totalMoney + extraMemoryCost + extraStorage + delevaryCost;
    document.getElementById('total-price').innerText = totalCost;
    document.getElementById('net-price').innerText = totalCost;
}

