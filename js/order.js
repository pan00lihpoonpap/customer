let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    section.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');
        if (top => offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
            });
        };
    });
}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider",{
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
})

var swiper = new Swiper(".review-slider",{
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
})

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 3000);
}

window.onload = fadeOut;

// 假设您的后端提供了一个API来检查登录状态
function checkLoginStatus() {
    // 这里应该是调用后端API的逻辑
    // 假设返回已登录，则更新UI
    updateLoginUI(true);
}

// 更新登录UI的函数
function updateLoginUI(isLoggedIn) {
    var loginLink = document.getElementById('loginLink');
    var favoriteLink = document.getElementById('favoriteLink');
    var cartLink = document.getElementById('cartLink');

    // 检查是否从收藏或购物车页面返回
    if (window.performance) {
        var navigation = window.performance.getEntriesByType("navigation");
        if (navigation.length > 0 && (navigation[0].type === 'back_forward')) {
            var previousPage = document.referrer;
            // 如果前一个页面是收藏或购物车页面，则不需要重新登录
            if (previousPage.includes('favorite.html') || previousPage.includes('cart.html')) {
                isLoggedIn = true;
            }
        }
    }

    if (isLoggedIn) {
        loginLink.textContent = '已登录';
        // 如果已登录，可以禁用点击事件或更改点击行为
        loginLink.href = '#'; // 防止再次跳转到登录页面
    } else {
        loginLink.textContent = '登录/注册';
        // 如果未登录，设置点击事件跳转到登录页面
        loginLink.href = 'log.html'; // 替换为您的登录页面URL
    }
}


//添加购物车
// 假设每个菜品都有一个唯一的ID
function addToCart(itemId) {
    // 获取菜品的DOM元素
    var itemImage = document.getElementById(itemId + '-image').src;
    var itemName = document.getElementById(itemId + '-name').textContent;
    var itemPrice = document.getElementById(itemId + '-price').textContent;

    // 创建菜品的对象
    var item = {
        id: itemId,
        image: itemImage,
        name: itemName,
        price: itemPrice,
        quantity: 1 // 默认数量为1
    };

    // 将菜品信息保存到localStorage
    var cartItems = localStorage.getItem('cartItems');
    if (cartItems === null) {
        cartItems = [];
    } else {
        cartItems = JSON.parse(cartItems);
    }
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// 为添加按钮添加点击事件监听器
document.getElementById('add-to-cart').addEventListener('click', function() {
    // 假设当前菜品的ID为1，实际应用中应该根据实际情况获取
    addToCart(1);
});


function showModal(imageSrc, event) {
    // 阻止<a>标签的默认跳转行为
    event.preventDefault();
    // 获取模态框元素
    var modal = document.getElementById('myModal');
    // 获取图片元素
    var modalImg = document.getElementById('img01');
    // 显示模态框
    modal.style.display = "block";
    // 设置图片路径
    modalImg.src = "../pic/" + imageSrc;
    // 获取关闭按钮元素
    var span = document.getElementsByClassName("close")[0];
    // 当点击关闭按钮时，隐藏模态框
    span.onclick = function() {
        modal.style.display = "none";
    }
}

// 获取模态框元素
var modal = document.getElementById('myModal');

// 当用户点击模态框的任何地方时
modal.onclick = function(event) {
    // 如果点击的是模态框本身（不是图片或关闭按钮）
    if (event.target == modal) {
        // 隐藏模态框
        modal.style.display = "none";
    }
}

// 为所有的 'fas fa-heart' 图标添加点击事件监听器
document.querySelectorAll('.fas.fa-heart').forEach(function(heartIcon) {
    heartIcon.addEventListener('click', function(event) {
        // 阻止<a>标签的默认跳转行为
        event.preventDefault();
        // 这里可以添加点击心形图标后想要执行的代码
        // 例如，可以在这里添加或移除收藏的逻辑
    });
});
