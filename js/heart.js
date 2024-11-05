// 假设您已经有一个数组来存储菜品信息
let favorites = [];

// 函数用于更新收藏夹的显示
function updateFavorites() {
    let favoritesElement = document.querySelector('.heart'); // 修改为正确的选择器
    favoritesElement.innerHTML = ''; // 清空收藏夹
    favorites.forEach(item => {
        favoritesElement.innerHTML += `
            <div class="box">
                <img src="${item.image}" alt="菜品" class="favorite-image">
                <h3 class="favorite-name">${item.name}</h3>
                <p class="favorite-price">单价: ${item.unitPrice}元</p>
                <button class="add-to-cart-btn" onclick="addToCart('${item.id}')">添加至购物车</button>
            </div>
        `;
    });
}

// 函数用于添加菜品到购物车
function addToCart(itemId) {
    let item = favorites.find(item => item.id === itemId);
    // 这里应该有一个添加到购物车的逻辑
    // 例如，可以调用之前定义的 increaseQuantity 函数
    increaseQuantity(itemId);
}

// 示例：添加菜品到收藏夹
favorites.push({
    id: 'item2',
    name: '烤乳猪',
    unitPrice: 50, // 单价
    image: '../pic/烤乳猪.jpg'
});
// 示例：添加菜品到收藏夹
favorites.push({
    id: 'item3',
    name: '白切鸡',
    unitPrice: 35, // 单价
    image: '../pic/白切鸡.jpg'
});

// 更新收藏夹显示
updateFavorites();

// 新增的清空收藏夹函数
function clearFavorites() {
    favorites = []; // 将收藏夹数组清空
    updateFavorites(); // 更新收藏夹显示
}

// 页面加载完成后，为清空收藏夹按钮添加事件处理器
window.onload = function() {
    document.getElementById('clear-heart-button').onclick = clearFavorites; // 修改为正确的按钮 ID
}
