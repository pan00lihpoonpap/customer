document.getElementById('checkout-button').addEventListener('click', function(event){
    event.preventDefault(); // 阻止表单默认提交行为
    alert('支付成功！'); // 显示支付成功提示
    window.location.href = 'http://127.0.0.1:5500/html/indent.html'; // 跳转到指定页面
});

// 假设这是从数据库中获取的购物车数据
let indentdetailItems = [
    {
        id: 'dish1',
        name: '白切鸡',
        quantity: 2,
        unitPrice: 45,
        image: '../pic/白切鸡.jpg'
    },
    {
        id: 'dish2',
        name: '菠萝咕噜肉',
        quantity: 1,
        unitPrice: 30,
        image: '../pic/菠萝咕噜肉.jpg'
    }
];

function updateindentdetail() {
    let indentdetailElement = document.getElementById('indentdetail');
    let totalPrice = 0; // 初始化总价
    indentdetailElement.innerHTML = ''; // 清空购物车

    // 遍历购物车中的每个项目并显示
    indentdetailItems.forEach(item => {
        let itemTotalPrice = item.unitPrice * item.quantity;
        totalPrice += itemTotalPrice; // 累加到总价

        indentdetailElement.innerHTML += `
            <div class="box">
                <img src="${item.image}" alt="菜品" id="${item.id}-image">
                <h3 id="${item.id}-name">${item.name}</h3>
                <span class="quantity" id="${item.id}-quantity"><b>数量： </b>${item.quantity}</span>
                <p class="price" id="${item.id}-price">单价: <span class="unit-price">${item.unitPrice}</span>元，总价: <span class="total-price">${itemTotalPrice}</span>元</p>
            </div>
        `;
    });

    // 显示总价
    indentdetailElement.innerHTML += `
        <div class="box total-price">
            <h3>总价: ${totalPrice}元</h3>
        </div>
    `;

    // 添加选择堂食或打包带走的功能
    /*indentdetailElement.innerHTML += `
        <div class="box choose">
            <select id="dine-option">
                <option value="dine-in">堂食</option>
                <option value="take-away">打包带走</option>
            </select>
        </div>
    `;*/
}

// 调用函数更新购物车
updateindentdetail();

