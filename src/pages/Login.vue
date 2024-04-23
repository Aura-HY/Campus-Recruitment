<template>
    <!-- 最外层的大盒子 -->
    <div class="box">
        <!-- 滑动盒子 -->
        <div class="pre-box">
            <h1>WELCOME</h1>
            <p>JOIN US!</p>
            <div class="img-box">
                <img src="" alt="" />
            </div>
        </div>
        <!-- 注册盒子 -->
        <div class="register-form">
            <!-- 标题 -->
            <div class="title-box">
                <h1>注册</h1>
            </div>

            <!-- 输入框 -->
            <div class="input-box">
                <input type="text" placeholder="用户名" />
                <input type="password" placeholder="密码" />
                <input type="password" placeholder="确认密码" />
            </div>

            <!-- 按钮 -->
            <div class="btn-box">
                <button>注册</button>
                <!-- 点击使用函数-->
                <p onclick="mySwitch()">去登录</p>
            </div>
        </div>

        <!-- 登录盒子 -->
        <div class="login-form">
            <!-- 标题 -->
            <div class="title-box">
                <h1>登录</h1>
            </div>

            <!-- 输入框 -->
            <div class="input-box">
                <input type="text" placeholder="用户名" />
                <input type="password" placeholder="密码" />
            </div>

            <!-- 按钮 -->
            <div class="btn-box">
                <button>登录</button>
                <!-- 点击使用函数-->
                <p @onclick="mySwitch()">去注册</p>
            </div>
        </div>
    </div>
</template>

<script>
let flag = true;
const mySwitch = () => {
    const preBox = document.querySelector('.pre-box');
    const img = document.querySelector('.img-box img');
    if (flag) {
        // 修改它移动的位置
        preBox.style.transform = 'translateX(100%)';
        // 修改背景颜色
        preBox.style.backgroundColor = '#c9e0ed';
        //修改图片的路径
        img.src = './sy.jpg';
    } else {
        preBox.style.transform = 'translateX(0%)';
        preBox.style.backgroundColor = '#edd4dc';
        img.src = './jq.jpg';
    }
    flag = !flag;
    console.log(flag);
};
</script>

<style>
* {
    /* 去除浏览器默认内外边距 */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.5s;
}

input {
    /* 去除input的轮廓 */
    outline: none;
}

body {
    /* 设置背景为渐变色 */
    background: linear-gradient(to right, rgb(249, 192, 202), rgb(192, 230, 245));
    /* 弹性布局 + 延水平方向居中对齐 */
    display: flex;
    justify-content: center;
    /* 在交叉轴上居中对齐 高度可以不相等 但它们将在垂直方向上居中对齐。 */
    align-items: center;
    height: 100vh;
    margin: 0;
}

/* 最外层的大盒子 */
.box {
    width: 700px;
    height: 600px;
    display: flex;
    /* 相对定位 */
    position: relative;
    /* 在水平方向上使元素居中对齐 */
    margin: auto;
    /* 设置圆角样式 */
    border-radius: 8px;
    /* 设置边框样式 */
    border: 1px solid rgba(255, 255, 255, 0.6);
    /* 设置盒子的阴影 */
    box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.1);
}

/* 滑动的盒子 */
.pre-box {
    /* 宽度为大盒子的一半 或者用width:50% */
    width: calc(700px / 2);
    /* 距离大盒子边缘&顶部为0 */
    left: 0;
    top: 0;
    height: 100%;
    /* 绝对定位 */
    position: absolute;
    /* 设置圆角样式 */
    border-radius: 4px;
    /* 设置背景颜色 */
    background-color: #edd4dc;
    /* 盒子阴影 */
    box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.1);
}

/* 滑动盒子的标题 */
.pre-box h1 {
    /* 设置上边距*/
    margin-top: 150px;
    /* 文本水平居中*/
    text-align: center;
    /* 文字间距 */
    letter-spacing: 5px;
    /* 字体颜色 */
    color: white;
    /* 文字阴影 */
    text-shadow: 4px 4px 3px rgba(0, 0, 0, 0.1);
}

/* 滑动盒子的文字 */
.pre-box p {
    height: 30px;
    /* 行高 */
    line-height: 30px;
    /* 位置居中 */
    text-align: center;
    /* 设置上下边距*/
    margin: 20px 0;
    /* 
    设置文本粗细程度 normal：默认的字体粗细（通常为 400）。
    bold：较粗的字体。
    bolder：比父元素更粗的字体。
    lighter：比父元素更细的字体。
    100、200、300、400、500、600、700、800、900：具体的数字值，用于设置相应粗细的字体。
    */
    font-weight: bold;
    /* 设置字体颜色*/
    color: white;
    /* 文字阴影 */
    text-shadow: 4px 4px 3px rgba(0, 0, 0, 0.1);
    /* 过渡，先加速再减速 */
    transition: 0.5s ease-in-out;
}

/* 图片盒子 */
.img-box {
    width: 200px;
    height: 200px;
    /* 设置上下边距*/
    margin: 20px auto;
    /* 设置为圆形 */
    border-radius: 50%;
    /* 超出隐藏 */
    overflow: hidden;
    /* 盒子阴影 */
    box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.1);
}

/* 图片 */
.img-box img {
    width: 100%;
    /* 过渡 */
    transition: 0.5s;
}

/* 登录和注册盒子 两个盒子一起设置 */
.login-form,
.register-form {
    flex: 1;
    height: 100%;
}

/* 标题盒子 */
.title-box {
    height: 200px;
    /* 设置行距*/
    line-height: 300px;
}

/* 标题 */
.title-box h1 {
    /* 注册/登录的标题居中+字体间距+颜色+阴影*/
    text-align: center;
    letter-spacing: 5px;
    color: white;
    text-shadow: 4px 4px 3px rgba(0, 0, 0, 0.1);
}

/* 输入框盒子 */
.input-box {
    /* 创建弹性布局 */
    display: flex;
    /* 纵向布局 */
    flex-direction: column;
    /* 水平居中 */
    align-items: center;
}

/* 输入框 */
input {
    width: 60%;
    height: 40px;
    /* 设置底部外边距 */
    margin-bottom: 20px;
    /* 文本首行缩进 */
    text-indent: 4px;
    /* 宽度为 1 像素、颜色为 #b0cfe9 的实线边框 */
    border: 1px solid #b0cfe9;
    /* 边框圆角 */
    border-radius: 4px;
}

input:focus {
    /* 设置光标颜色 */
    color: #b0cfe9;
}

input:focus::placeholder {
    /* 光标在输入框内时文字隐藏 */
    opacity: 0;
}

/* 按钮盒子 */
.btn-box {
    display: flex;
    /* 在弹性布局中 延水平方向居中对齐 */
    justify-content: center;
}

/* 按钮 */
button {
    width: 100px;
    height: 30px;
    /* 设置上下边距*/
    margin: 0 7px;
    /* 行高 */
    line-height: 30px;
    /* 移除边框属性 */
    border: none;
    /* 边框圆角 */
    border-radius: 4px;
    background-color: #69b3f0;
    color: white;
}

/* 按钮悬停时 */
button:hover {
    /* 鼠标变成一只小手 */
    cursor: pointer;
    /* 透明度 */
    opacity: 0.8;
}

/* 按钮文字 */
.btn-box p {
    height: 30px;
    /* 行高 */
    line-height: 30px;
    /* 文本字号大小 */
    font-size: 14px;
    color: white;
}

/* 在文本悬停的状态 */
.btn-box p:hover {
    /* 鼠标变成一只小手 */
    cursor: pointer;
    /* 宽度为 3 像素、颜色为 white 的实线边框 */
    border-bottom: 3px solid white;
}
</style>
