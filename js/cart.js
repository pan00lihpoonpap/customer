// JavaScript代码，用于管理购物车功能
// 假设您已经有一个数组来存储菜品信息
let cartItems = [];

// 函数用于增加数量
function increaseQuantity(itemId) {
    let item = cartItems.find(item => item.id === itemId);
    item.quantity++;
    updateCart();
}

// 函数用于减少数量
function decreaseQuantity(itemId) {
    let item = cartItems.find(item => item.id === itemId);
    if (item.quantity > 1) {
        item.quantity--;
    } else {
        // 如果数量为1，则从购物车中移除
        cartItems = cartItems.filter(item => item.id !== itemId);
    }
    updateCart();
}

// 函数用于更新购物车的显示
function updateCart() {
    let cartElement = document.getElementById('cart');
    cartElement.innerHTML = ''; // 清空购物车
    cartItems.forEach(item => {
        cartElement.innerHTML += `
            <div class="box">
                <img src="${item.image}" alt="菜品" id="${item.id}-image">
                <h3 id="${item.id}-name">${item.name}</h3>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="decreaseQuantity('${item.id}')">-</button>
                    <span class="quantity" id="${item.id}-quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="increaseQuantity('${item.id}')">+</button>
                </div>
                <p class="price" id="${item.id}-price">单价: <span class="unit-price">${item.unitPrice}</span>元，总价: <span class="total-price">${item.unitPrice * item.quantity}</span>元</p>
            </div>
        `;
    });
}

// 示例：添加菜品到购物车
cartItems.push({
    id: 'item2',
    name: '烤乳猪',
    quantity: 1,
    unitPrice: 50, // 单价
    image: '../pic/烤乳猪.jpg'
});
// 示例：添加菜品到购物车
cartItems.push({
    id: 'item3',
    name: '白切鸡',
    quantity: 1,
    unitPrice: 35, // 单价
    image: '../pic/白切鸡.jpg'
});

// 更新购物车显示
updateCart();

// 新增的清空购物车函数
function clearCart() {
    cartItems = []; // 将购物车数组清空
    updateCart(); // 更新购物车显示
}

// 页面加载完成后，为清空购物车按钮添加事件处理器
window.onload = function() {
    document.getElementById('clear-cart-button').onclick = clearCart;
}
// 计算总数量
function calculateTotalQuantity() {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
}

// 计算总价格
function calculateTotalPrice() {
    return cartItems.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
}

function updateCart() {
    let cartElement = document.getElementById('cart');
    cartElement.innerHTML = ''; // 清空购物车
    cartItems.forEach(item => {
        cartElement.innerHTML += `
            <div class="box">
                <img src="${item.image}" alt="菜品" id="${item.id}-image">
                <h3 id="${item.id}-name">${item.name}</h3>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="decreaseQuantity('${item.id}')">-</button>
                    <span class="quantity" id="${item.id}-quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="increaseQuantity('${item.id}')">+</button>
                </div>
                <p class="price" id="${item.id}-price">单价: <span class="unit-price">${item.unitPrice}</span>元，总价: <span class="total-price">${item.unitPrice * item.quantity}</span>元</p>
            </div>
        `;
    });

    // 更新底部的总结信息
    document.getElementById('item-count').textContent = calculateTotalQuantity();
    document.getElementById('total-price').textContent = calculateTotalPrice();
}

function increaseQuantity(itemId) {
    let item = cartItems.find(item => item.id === itemId);
    item.quantity++;
    updateCart(); // 更新购物车显示
}

function decreaseQuantity(itemId) {
    let item = cartItems.find(item => item.id === itemId);
    if (item.quantity > 1) {
        item.quantity--;
    } else {
        cartItems = cartItems.filter(item => item.id !== itemId);
    }
    updateCart(); // 更新购物车显示
}

document.querySelector('form').onsubmit = function(event) {
    event.preventDefault();
    // 发送AJAX请求到后端处理订单
    // 假设后端返回订单详情
    fetch('/create-order', {
        method: 'POST',
        body: new FormData(event.target),
        // 其他需要的设置
    })
    .then(response => response.json())
    .then(orderDetails => {
        // 跳转到订单详情页面
        window.location.href = '/indent.html';
    });
};
