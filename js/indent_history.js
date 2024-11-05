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

// 假设从后端获取的用户选择状态
let dineOption = 'dine-in'; // 或者 'take-away'，根据实际情况来

function updateDineOption() {
    let indentdetailElement = document.getElementById('indentdetail');
    let optionText = dineOption === 'dine-in' ? '堂食' : '打包带走';

    // 显示是堂食还是打包带走的状态
    indentdetailElement.innerHTML = `
        <div class="box">
            <p>当前选择：${optionText}</p>
        </div>
    `; // 使用 = 而不是 += 来设置内容
}

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

}

// 先更新用户选择状态
updateDineOption();

// 然后更新购物车详情
updateindentdetail();
