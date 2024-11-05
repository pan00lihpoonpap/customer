// 假设这是从后端获取的订单详情
var orderDetails = {
    orderId: '123456',
    orderDate: '2024-05-12',
    items: [
        { name: '宫保鸡丁', quantity: 2 },
        { name: '麻婆豆腐', quantity: 1 }
    ],
    total: '¥399.98',
    username: '张三'
};

var orderDetails1 = {
    orderId: '234567',
    orderDate: '2024-05-12',
    items: [
        { name: '宫保鸡丁', quantity: 2 },
        { name: '麻婆豆腐', quantity: 1 }
    ],
    total: '¥399.98',
    username: '张三'
};

// 从后端获取订单详情并填充到页面
/*function fetchOrderDetails() {
    fetch('/api/orders')
    .then(response => {
        // 检查响应是否成功
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // 解析JSON
    })
    .then(data => {
        // 假设后端返回的是一个包含多个订单的数组
        data.forEach(order => {
            fillOrderDetails(order); // 填充每个订单到页面
        });
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}*/

// 填充订单详情并添加取消订单按钮
function fillOrderDetails(details) {
    var container = document.getElementById('order-details');
    // 使用 += 来累加内容，而不是替换内容
    container.innerHTML += `
        <div class="order-item">
            <p><b>订单编号：</b>${details.orderId}</p>
            <p><b>下单日期：</b>${details.orderDate}</p>
            <!-- 将商品列表转换为超链接 -->
            <a href="http://127.0.0.1:5500/html/indent_history.html" onclick="showOrderItems(details.items)">订单详情</a>
            <p><b>总价格：</b>${details.total}</p>
            <p><b>用户名：</b>${details.username}</p>
            <!-- 添加取消订单按钮 -->
            <button class="btn" type="button" onclick="cancelOrder(this)">退款</button>
            <p class="status">已支付</p>
        </div>
    `;
}

// 显示订单商品详情的函数
function showOrderItems(items) {
    var itemsList = items.map(item => `<li>${item.name} x ${item.quantity}</li>`).join('');
    alert('订单商品详情:\\n' + itemsList);
}


// 取消订单并更新状态为已退款
function cancelOrder(button) {
    // 获取订单项元素
    var orderItem = button.closest('.order-item');
    // 更新订单状态为已退款
    var statusElement = orderItem.querySelector('.status');
    if (statusElement) {
        statusElement.textContent = '已退款';
    } else {
        // 如果状态元素不存在，则创建一个新的状态元素
        statusElement = document.createElement('p');
        statusElement.classList.add('status');
        statusElement.textContent = '已退款';
        orderItem.appendChild(statusElement);
    }
    // 显示退款成功提示
    alert("退款成功");
    // 移除取消订单按钮
    button.remove();
}

// 页面加载完成后，调用fetchOrderDetails函数获取订单详情
/*document.addEventListener('DOMContentLoaded', fetchOrderDetails); */

//示例，可以注释掉
// 调用函数填充订单详情
fillOrderDetails(orderDetails);
fillOrderDetails(orderDetails1); // 添加第二个订单
