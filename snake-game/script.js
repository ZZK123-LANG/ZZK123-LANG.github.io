// 获取DOM元素
const canvas = document.getElementById('game-board');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('high-score');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');

// 游戏配置
const GRID_SIZE = 20;
const BOARD_SIZE = 400;
const SNAKE_SPEED = 150; // 毫秒

// 游戏状态
let snake = [];
let food = {};
let direction = '';
let nextDirection = '';
let score = 0;
let highScore = localStorage.getItem('snakeGameHighScore') || 0;
let gameInterval = null;
let isGameRunning = false;
let isGameOver = false;

// 初始化分数显示
highScoreElement.textContent = highScore;

// 初始化游戏
function initGame() {
    // 重置蛇的位置和长度
    snake = [
        { x: 10, y: 10 },
        { x: 9, y: 10 },
        { x: 8, y: 10 }
    ];
    
    // 初始化方向
    direction = 'right';
    nextDirection = 'right';
    
    // 生成食物
    generateFood();
    
    // 重置分数
    score = 0;
    scoreElement.textContent = score;
    
    // 重置游戏状态
    isGameRunning = false;
    isGameOver = false;
    
    // 绘制游戏画面
    draw();
}

// 生成食物
function generateFood() {
    let newFood;
    
    // 确保食物不会出现在蛇身上
    do {
        newFood = {
            x: Math.floor(Math.random() * (BOARD_SIZE / GRID_SIZE)),
            y: Math.floor(Math.random() * (BOARD_SIZE / GRID_SIZE))
        };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    
    food = newFood;
}

// 移动蛇
function moveSnake() {
    // 获取蛇头
    const head = { ...snake[0] };
    
    // 更新方向
    direction = nextDirection;
    
    // 根据方向移动蛇头
    switch (direction) {
        case 'up':
            head.y--;
            break;
        case 'down':
            head.y++;
            break;
        case 'left':
            head.x--;
            break;
        case 'right':
            head.x++;
            break;
    }
    
    // 添加新的蛇头
    snake.unshift(head);
    
    // 检测是否吃到食物
    if (head.x === food.x && head.y === food.y) {
        // 增加分数
        score += 10;
        scoreElement.textContent = score;
        
        // 更新最高分
        if (score > highScore) {
            highScore = score;
            highScoreElement.textContent = highScore;
            localStorage.setItem('snakeGameHighScore', highScore);
        }
        
        // 生成新的食物
        generateFood();
    } else {
        // 移除蛇尾
        snake.pop();
    }
    
    // 检测碰撞
    checkCollision();
}

// 检测碰撞
function checkCollision() {
    const head = snake[0];
    
    // 检测是否撞到边界
    if (head.x < 0 || head.x >= BOARD_SIZE / GRID_SIZE || 
        head.y < 0 || head.y >= BOARD_SIZE / GRID_SIZE) {
        gameOver();
        return;
    }
    
    // 检测是否撞到自己
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            gameOver();
            return;
        }
    }
}

// 游戏结束
function gameOver() {
    isGameRunning = false;
    isGameOver = true;
    clearInterval(gameInterval);
    
    // 显示游戏结束信息
    alert(`游戏结束！你的分数是: ${score}`);
}

// 绘制游戏画面
function draw() {
    // 清空画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 绘制网格背景
    drawGrid();
    
    // 绘制食物
    ctx.fillStyle = '#e74c3c';
    ctx.beginPath();
    ctx.arc(
        food.x * GRID_SIZE + GRID_SIZE / 2,
        food.y * GRID_SIZE + GRID_SIZE / 2,
        GRID_SIZE / 2 - 2,
        0,
        Math.PI * 2
    );
    ctx.fill();
    
    // 绘制蛇
    snake.forEach((segment, index) => {
        // 蛇头特殊颜色
        if (index === 0) {
            ctx.fillStyle = '#2ecc71';
        } else {
            // 蛇身渐变色
            const colorIndex = Math.floor((index / snake.length) * 30);
            ctx.fillStyle = `hsl(145, 70%, ${60 - colorIndex}%)`;
        }
        
        // 绘制蛇的身体部分
        ctx.fillRect(
            segment.x * GRID_SIZE + 1,
            segment.y * GRID_SIZE + 1,
            GRID_SIZE - 2,
            GRID_SIZE - 2
        );
        
        // 添加边框
        ctx.strokeStyle = '#27ae60';
        ctx.lineWidth = 1;
        ctx.strokeRect(
            segment.x * GRID_SIZE + 1,
            segment.y * GRID_SIZE + 1,
            GRID_SIZE - 2,
            GRID_SIZE - 2
        );
    });
}

// 绘制网格
function drawGrid() {
    ctx.strokeStyle = '#ecf0f1';
    ctx.lineWidth = 0.5;
    
    // 绘制水平线
    for (let y = 0; y <= BOARD_SIZE; y += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(BOARD_SIZE, y);
        ctx.stroke();
    }
    
    // 绘制垂直线
    for (let x = 0; x <= BOARD_SIZE; x += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, BOARD_SIZE);
        ctx.stroke();
    }
}

// 开始游戏
function startGame() {
    if (!isGameRunning && !isGameOver) {
        isGameRunning = true;
        gameInterval = setInterval(() => {
            moveSnake();
            draw();
        }, SNAKE_SPEED);
    }
}

// 暂停游戏
function pauseGame() {
    if (isGameRunning) {
        isGameRunning = false;
        clearInterval(gameInterval);
    } else if (!isGameOver) {
        startGame();
    }
}

// 重置游戏
function resetGame() {
    clearInterval(gameInterval);
    initGame();
}

// 键盘控制
function handleKeyDown(e) {
    // 防止页面滚动
    if ([37, 38, 39, 40, 32].includes(e.keyCode)) {
        e.preventDefault();
    }
    
    // 方向控制
    switch (e.keyCode) {
        case 38: // 上箭头
        case 87: // W
            if (direction !== 'down') {
                nextDirection = 'up';
            }
            break;
        case 40: // 下箭头
        case 83: // S
            if (direction !== 'up') {
                nextDirection = 'down';
            }
            break;
        case 37: // 左箭头
        case 65: // A
            if (direction !== 'right') {
                nextDirection = 'left';
            }
            break;
        case 39: // 右箭头
        case 68: // D
            if (direction !== 'left') {
                nextDirection = 'right';
            }
            break;
        case 32: // 空格键
            if (isGameOver) {
                resetGame();
            } else {
                pauseGame();
            }
            break;
        case 13: // 回车键
            if (!isGameRunning && !isGameOver) {
                startGame();
            } else if (isGameOver) {
                resetGame();
            }
            break;
    }
}

// 触摸控制 - 移动端支持
let touchStartX = 0;
let touchStartY = 0;

function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}

function handleTouchMove(e) {
    if (!touchStartX || !touchStartY) {
        return;
    }
    
    const touchEndX = e.touches[0].clientX;
    const touchEndY = e.touches[0].clientY;
    
    const dx = touchEndX - touchStartX;
    const dy = touchEndY - touchStartY;
    
    // 检测哪个方向的移动更大
    if (Math.abs(dx) > Math.abs(dy)) {
        // 水平移动
        if (dx > 0 && direction !== 'left') {
            nextDirection = 'right';
        } else if (dx < 0 && direction !== 'right') {
            nextDirection = 'left';
        }
    } else {
        // 垂直移动
        if (dy > 0 && direction !== 'up') {
            nextDirection = 'down';
        } else if (dy < 0 && direction !== 'down') {
            nextDirection = 'up';
        }
    }
    
    // 重置触摸起点
    touchStartX = touchEndX;
    touchStartY = touchEndY;
}

// 事件监听器
startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);
window.addEventListener('keydown', handleKeyDown);
canvas.addEventListener('touchstart', handleTouchStart);
canvas.addEventListener('touchmove', handleTouchMove);

// 初始化游戏
initGame();