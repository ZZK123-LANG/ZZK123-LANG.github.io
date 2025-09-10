// 2025年九月三号阅兵知识问答 - JavaScript文件

// 问题数据库 - 基于2025年九月三号阅兵的相关信息
const questions = [
    {
        question: "2025年9月3日阅兵是为了纪念什么胜利多少周年？",
        options: ["抗日战争胜利70周年", "抗日战争胜利75周年", "抗日战争胜利80周年", "抗日战争胜利85周年"],
        correct: 2,
        explanation: "2025年9月3日阅兵是为了纪念中国人民抗日战争暨世界反法西斯战争胜利80周年。"
    },
    {
        question: "2025年9月3日阅兵在哪个城市举行？",
        options: ["上海", "北京", "南京", "天津"],
        correct: 1,
        explanation: "阅兵在北京天安门广场举行，这是中国最重要的阅兵场地。"
    },
    {
        question: "2025年9月3日阅兵的主题是什么？",
        options: ["铭记历史、缅怀先烈、珍爱和平、开创未来", "和平必胜、正义必胜、人民必胜", "强国强军、保卫和平", "纪念胜利、展示实力、维护和平"],
        correct: 0,
        explanation: "2025年9月3日阅兵的主题是'铭记历史、缅怀先烈、珍爱和平、开创未来'。"
    },
    {
        question: "2025年9月3日阅兵预计有多少个方队参加？",
        options: ["45个", "50个", "55个", "60个"],
        correct: 1,
        explanation: "预计有50个方队参加阅兵，包括徒步方队、装备方队和空中梯队。"
    },
    {
        question: "2025年9月3日阅兵中首次亮相的武器装备可能包括？",
        options: ["东风-41洲际弹道导弹", "歼-20隐身战斗机", "99A主战坦克", "东风-17高超音速导弹"],
        correct: 3,
        explanation: "东风-17高超音速导弹是较新的武器装备，可能在2025年阅兵中首次亮相。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-20战斗机属于第几代战斗机？",
        options: ["第三代", "第四代", "第五代", "第六代"],
        correct: 2,
        explanation: "歼-20是中国自主研制的第五代隐身战斗机。"
    },
    {
        question: "2025年9月3日阅兵中展示的99A主战坦克的主要特点是什么？",
        options: ["火力强大", "防护能力强", "信息化程度高", "机动性能好"],
        correct: 2,
        explanation: "99A主战坦克的最大特点是信息化程度高，集成了先进的火控系统和数字化作战能力。"
    },
    {
        question: "2025年9月3日阅兵中可能展示的东风-41导弹的主要特点是什么？",
        options: ["洲际弹道导弹", "核常兼备", "精确制导", "机动发射"],
        correct: 0,
        explanation: "东风-41是洲际弹道导弹，射程超过12000公里，是中国重要的战略威慑力量。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-10C战斗机有什么特点？",
        options: ["超音速性能优秀", "多用途作战能力强", "信息化程度高", "以上都是"],
        correct: 3,
        explanation: "歼-10C战斗机具备优秀的超音速性能、强大的多用途作战能力和高信息化程度。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-15舰载战斗机有什么特点？",
        options: ["具备航母起降能力", "重型舰载战斗机", "制空与对地攻击能力兼备", "以上都是"],
        correct: 3,
        explanation: "歼-15舰载战斗机是重型舰载战斗机，具备航母起降能力和全面的作战能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的03式远程火箭炮有什么特点？",
        options: ["射程远", "火力密集", "精度高", "以上都是"],
        correct: 3,
        explanation: "03式远程火箭炮具备射程远、火力密集、精度高等特点，是中国陆军的重要火力支援装备。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-10巡航导弹有什么特点？",
        options: ["远程精确打击", "低空突防能力强", "可打击多种目标", "以上都是"],
        correct: 3,
        explanation: "东风-10巡航导弹具备远程精确打击能力、强大的低空突防能力，可以打击多种目标。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-31AG导弹有什么特点？",
        options: ["洲际射程", "机动发射", "分导式多弹头", "以上都是"],
        correct: 3,
        explanation: "东风-31AG导弹是洲际弹道导弹，具备机动发射能力和分导式多弹头技术。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-22防空导弹的制导方式是什么？",
        options: ["雷达制导", "红外制导", "复合制导", "激光制导"],
        correct: 2,
        explanation: "红旗-22防空导弹采用复合制导方式，具备雷达和红外双重制导能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-7E战斗机的双三角翼设计有什么好处？",
        options: ["提高升力", "改善机动性", "降低阻力", "增强稳定性"],
        correct: 1,
        explanation: "歼-7E战斗机的双三角翼设计主要是为了改善机动性能。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-61防空导弹的制导方式是什么？",
        options: ["半主动雷达制导", "主动雷达制导", "红外制导", "激光制导"],
        correct: 0,
        explanation: "红旗-61防空导弹采用半主动雷达制导方式。"
    }
];

// 游戏状态
let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];
let userAnswers = [];
let gameStarted = false;

// DOM元素
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const currentQuestionElement = document.getElementById('currentQuestion');
const totalQuestionsElement = document.getElementById('totalQuestions');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const scoreSection = document.getElementById('scoreSection');
const scoreNumberElement = document.getElementById('scoreNumber');
const accuracyElement = document.getElementById('accuracy');
const correctCountElement = document.getElementById('correctCount');
const wrongCountElement = document.getElementById('wrongCount');
const scoreMessageElement = document.getElementById('scoreMessage');
const progressFill = document.getElementById('progressFill');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    totalQuestionsElement.textContent = '5';
    startBtn.addEventListener('click', startGame);
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', restartGame);
});

// 开始游戏
function startGame() {
    gameStarted = true;
    score = 0;
    currentQuestionIndex = 0;
    userAnswers = [];
    
    // 随机选择5个问题
    selectedQuestions = getRandomQuestions(5);
    
    // 隐藏开始按钮，显示下一题按钮
    startBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';
    scoreSection.style.display = 'none';
    
    // 更新进度条
    updateProgress();
    
    // 显示第一题
    showQuestion();
}

// 获取随机问题
function getRandomQuestions(count) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// 显示问题
function showQuestion() {
    const question = selectedQuestions[currentQuestionIndex];
    
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    questionText.textContent = question.question;
    
    // 清空选项容器
    optionsContainer.innerHTML = '';
    
    // 创建选项按钮
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(button);
    });
    
    // 更新进度条
    updateProgress();
}

// 选择答案
function selectAnswer(selectedIndex) {
    const question = selectedQuestions[currentQuestionIndex];
    const optionButtons = document.querySelectorAll('.option-btn');
    
    // 禁用所有按钮
    optionButtons.forEach(btn => btn.disabled = true);
    
    // 记录用户答案
    userAnswers.push(selectedIndex);
    
    // 高亮显示正确答案和用户答案
    optionButtons.forEach((btn, index) => {
        if (index === question.correct) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && selectedIndex !== question.correct) {
            btn.classList.add('wrong');
        }
    });
    
    // 更新分数
    if (selectedIndex === question.correct) {
        score += 20;
    }
    
    // 显示解释
    setTimeout(() => {
        const explanation = document.createElement('div');
        explanation.className = 'explanation';
        explanation.textContent = question.explanation;
        optionsContainer.appendChild(explanation);
    }, 1000);
    
    // 如果是最后一题，显示结果
    if (currentQuestionIndex === selectedQuestions.length - 1) {
        setTimeout(() => {
            showResults();
        }, 2000);
    } else {
        nextBtn.style.display = 'inline-block';
    }
}

// 下一题
function nextQuestion() {
    currentQuestionIndex++;
    nextBtn.style.display = 'none';
    showQuestion();
}

// 显示结果
function showResults() {
    const correctCount = userAnswers.filter((answer, index) => 
        answer === selectedQuestions[index].correct
    ).length;
    const wrongCount = userAnswers.length - correctCount;
    const accuracy = Math.round((correctCount / userAnswers.length) * 100);
    
    scoreNumberElement.textContent = score;
    accuracyElement.textContent = accuracy + '%';
    correctCountElement.textContent = correctCount;
    wrongCountElement.textContent = wrongCount;
    
    // 生成评分消息
    let message = '';
    if (accuracy >= 90) {
        message = '🎉 优秀！您对2025年九月三号阅兵非常了解！';
    } else if (accuracy >= 80) {
        message = '👍 良好！您对阅兵知识掌握得不错！';
    } else if (accuracy >= 70) {
        message = '📚 及格！建议多了解一些阅兵相关知识！';
    } else {
        message = '💪 加油！继续学习，了解更多阅兵知识！';
    }
    scoreMessageElement.textContent = message;
    
    // 隐藏问题区域，显示结果
    document.querySelector('.question-section').style.display = 'none';
    scoreSection.style.display = 'block';
    restartBtn.style.display = 'inline-block';
    nextBtn.style.display = 'none';
    
    // 更新进度条到100%
    progressFill.style.width = '100%';
}

// 重新开始
function restartGame() {
    gameStarted = false;
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    // 重置界面
    document.querySelector('.question-section').style.display = 'block';
    scoreSection.style.display = 'none';
    startBtn.style.display = 'inline-block';
    nextBtn.style.display = 'none';
    restartBtn.style.display = 'none';
    
    questionText.textContent = '点击"开始答题"按钮开始测试';
    optionsContainer.innerHTML = '';
    currentQuestionElement.textContent = '1';
    
    // 重置进度条
    progressFill.style.width = '0%';
}

// 更新进度条
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / selectedQuestions.length) * 100;
    progressFill.style.width = progress + '%';
}
