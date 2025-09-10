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
        options: ["铭记历史、缅怀先烈、珍爱和平、开创未来", "和平必胜、正义必胜、人民必胜", "强国强军、保卫和平", "以上都是"],
        correct: 3,
        explanation: "阅兵的主题体现了对历史的铭记、对和平的珍爱和对未来的开创。"
    },
    {
        question: "2025年9月3日阅兵预计有多少个方队参加？",
        options: ["45个", "50个", "55个", "60个"],
        correct: 1,
        explanation: "预计有50个方队参加阅兵，包括徒步方队、装备方队和空中梯队。"
    },
    {
        question: "2025年9月3日阅兵中首次亮相的武器装备可能包括？",
        options: ["东风-41洲际弹道导弹", "歼-20隐身战斗机", "99A主战坦克", "以上都是"],
        correct: 3,
        explanation: "这些武器装备都是中国军队的重要装备，可能在阅兵中展示。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-20战斗机属于第几代战斗机？",
        options: ["第三代", "第四代", "第五代", "第六代"],
        correct: 2,
        explanation: "歼-20是中国自主研制的第五代隐身战斗机。"
    },
    {
        question: "2025年9月3日阅兵中展示的99A主战坦克的主要特点是什么？",
        options: ["火力强大", "防护能力强", "信息化程度高", "以上都是"],
        correct: 3,
        explanation: "99A主战坦克集火力、防护、机动、信息化于一体，是中国陆军的主战装备。"
    },
    {
        question: "2025年9月3日阅兵中可能展示的东风-41导弹的主要特点是什么？",
        options: ["洲际弹道导弹", "核常兼备", "精确制导", "以上都是"],
        correct: 3,
        explanation: "东风-41是洲际弹道导弹，具备核常兼备和精确制导能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的运-20运输机的主要特点是什么？",
        options: ["大型运输机", "载重能力强", "航程远", "以上都是"],
        correct: 3,
        explanation: "运-20是中国自主研制的大型运输机，具备载重能力强、航程远的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的直-20直升机的主要特点是什么？",
        options: ["通用性强", "可靠性高", "维护性好", "以上都是"],
        correct: 3,
        explanation: "直-20运输直升机具备通用性强、可靠性高和维护性好的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-9防空导弹的主要特点是什么？",
        options: ["远程防空", "精确制导", "抗干扰能力强", "以上都是"],
        correct: 3,
        explanation: "红旗-9是远程防空导弹，具备精确制导和抗干扰能力强的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的轰-6K轰炸机的主要特点是什么？",
        options: ["远程轰炸", "精确打击", "多用途作战", "以上都是"],
        correct: 3,
        explanation: "轰-6K轰炸机具备远程轰炸、精确打击和多用途作战能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-16战斗机的主要特点是什么？",
        options: ["多用途战斗机", "对地攻击能力强", "电子战能力", "以上都是"],
        correct: 3,
        explanation: "歼-16是多用途战斗机，具备对地攻击和电子战能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-26导弹的主要特点是什么？",
        options: ["中远程弹道导弹", "反舰作战能力", "核常兼备", "以上都是"],
        correct: 3,
        explanation: "东风-26是中远程弹道导弹，具备反舰作战和核常兼备能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-21D导弹的主要特点是什么？",
        options: ["反舰弹道导弹", "精确制导", "突防能力强", "以上都是"],
        correct: 3,
        explanation: "东风-21D是反舰弹道导弹，具备精确制导和突防能力强的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-17导弹的主要特点是什么？",
        options: ["高超音速导弹", "精确打击", "难以拦截", "以上都是"],
        correct: 3,
        explanation: "东风-17是高超音速导弹，具备精确打击和难以拦截的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-10C战斗机的主要特点是什么？",
        options: ["多用途战斗机", "机动性强", "精确制导", "以上都是"],
        correct: 3,
        explanation: "歼-10C是多用途战斗机，具备机动性强和精确制导能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-11B战斗机的主要特点是什么？",
        options: ["重型战斗机", "远程作战", "多用途", "以上都是"],
        correct: 3,
        explanation: "歼-11B是重型多用途战斗机，具备远程作战能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-15舰载战斗机的主要特点是什么？",
        options: ["舰载战斗机", "短距起降", "多用途作战", "以上都是"],
        correct: 3,
        explanation: "歼-15是舰载战斗机，具备短距起降和多用途作战能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的直-10武装直升机的主要特点是什么？",
        options: ["武装直升机", "对地攻击", "空中支援", "以上都是"],
        correct: 3,
        explanation: "直-10武装直升机具备对地攻击和空中支援能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的直-19武装直升机的主要特点是什么？",
        options: ["轻型武装直升机", "侦察攻击", "机动性强", "以上都是"],
        correct: 3,
        explanation: "直-19是轻型武装直升机，具备侦察攻击和机动性强的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的03式远程火箭炮的主要特点是什么？",
        options: ["远程火力支援", "精确打击", "机动性强", "以上都是"],
        correct: 3,
        explanation: "03式远程火箭炮具备远程火力支援、精确打击和机动性强的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-16防空导弹的主要特点是什么？",
        options: ["中程防空", "多目标拦截", "抗干扰能力强", "以上都是"],
        correct: 3,
        explanation: "红旗-16是中程防空导弹，具备多目标拦截和抗干扰能力强的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-12防空导弹的主要特点是什么？",
        options: ["中程防空", "机动性强", "抗干扰能力强", "以上都是"],
        correct: 3,
        explanation: "红旗-12是中程防空导弹，具备机动性强和抗干扰能力强的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-6防空导弹的主要特点是什么？",
        options: ["近程防空", "反应速度快", "机动性强", "以上都是"],
        correct: 3,
        explanation: "红旗-6是近程防空导弹，具备反应速度快和机动性强的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-15B导弹的主要特点是什么？",
        options: ["短程弹道导弹", "精确制导", "突防能力强", "以上都是"],
        correct: 3,
        explanation: "东风-15B是短程弹道导弹，具备精确制导和突防能力强的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-11A导弹的主要特点是什么？",
        options: ["战术弹道导弹", "精确制导", "机动发射", "以上都是"],
        correct: 3,
        explanation: "东风-11A是战术弹道导弹，具备精确制导和机动发射能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-10巡航导弹的主要特点是什么？",
        options: ["巡航导弹", "精确打击", "低空突防", "以上都是"],
        correct: 3,
        explanation: "东风-10巡航导弹具备精确打击和低空突防能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-31AG导弹的主要特点是什么？",
        options: ["洲际弹道导弹", "机动发射", "生存能力强", "以上都是"],
        correct: 3,
        explanation: "东风-31AG导弹具备机动发射和生存能力强的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-5B导弹的主要特点是什么？",
        options: ["洲际弹道导弹", "核常兼备", "精确制导", "以上都是"],
        correct: 3,
        explanation: "东风-5B是洲际弹道导弹，具备核常兼备和精确制导能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-8F战斗机的主要特点是什么？",
        options: ["高空高速", "远程拦截", "多用途", "以上都是"],
        correct: 3,
        explanation: "歼-8F战斗机具备高空高速、远程拦截和多用途作战能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-7G战斗机的主要特点是什么？",
        options: ["轻型战斗机", "机动性强", "多用途", "以上都是"],
        correct: 3,
        explanation: "歼-7G是轻型战斗机，具备机动性强和多用途作战能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-6III战斗机的主要特点是什么？",
        options: ["高空高速", "多用途", "短距起降", "电子战"],
        correct: 0,
        explanation: "歼-6III战斗机主要特点是高空高速性能。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-5甲战斗机的主要特点是什么？",
        options: ["中国第一代喷气式战斗机", "高空高速", "多用途", "以上都是"],
        correct: 3,
        explanation: "歼-5甲是中国第一代喷气式战斗机，具备高空高速和多用途作战能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-4A战斗机的主要特点是什么？",
        options: ["中国第一代战斗机", "高空高速", "多用途", "以上都是"],
        correct: 3,
        explanation: "歼-4A是中国第一代战斗机，具备高空高速和多用途作战能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-3A战斗机的主要特点是什么？",
        options: ["中国第一代战斗机", "高空高速", "多用途", "以上都是"],
        correct: 3,
        explanation: "歼-3A是中国第一代战斗机，具备高空高速和多用途作战能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-2A战斗机的主要特点是什么？",
        options: ["中国第一代战斗机", "高空高速", "多用途", "以上都是"],
        correct: 3,
        explanation: "歼-2A是中国第一代战斗机，具备高空高速和多用途作战能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-1A战斗机的主要特点是什么？",
        options: ["中国第一代战斗机", "高空高速", "多用途", "以上都是"],
        correct: 3,
        explanation: "歼-1A是中国第一代战斗机，具备高空高速和多用途作战能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-1导弹的历史意义是什么？",
        options: ["中国第一枚弹道导弹", "中国第一枚洲际导弹", "中国第一枚巡航导弹", "中国第一枚反舰导弹"],
        correct: 0,
        explanation: "东风-1是中国第一枚弹道导弹，具有重要的历史意义。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-3导弹的主要特点是什么？",
        options: ["中程弹道导弹", "核常兼备", "精确制导", "以上都是"],
        correct: 3,
        explanation: "东风-3是中程弹道导弹，具备核常兼备和精确制导能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-4导弹的主要特点是什么？",
        options: ["远程弹道导弹", "核常兼备", "精确制导", "以上都是"],
        correct: 3,
        explanation: "东风-4是远程弹道导弹，具备核常兼备和精确制导能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-5导弹的主要特点是什么？",
        options: ["洲际弹道导弹", "核常兼备", "精确制导", "以上都是"],
        correct: 3,
        explanation: "东风-5是洲际弹道导弹，具备核常兼备和精确制导能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-6导弹的主要特点是什么？",
        options: ["洲际弹道导弹", "核常兼备", "精确制导", "以上都是"],
        correct: 3,
        explanation: "东风-6是洲际弹道导弹，具备核常兼备和精确制导能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-7导弹的主要特点是什么？",
        options: ["洲际弹道导弹", "核常兼备", "精确制导", "以上都是"],
        correct: 3,
        explanation: "东风-7是洲际弹道导弹，具备核常兼备和精确制导能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-1防空导弹的历史意义是什么？",
        options: ["中国第一枚防空导弹", "中国第一枚反舰导弹", "中国第一枚弹道导弹", "中国第一枚巡航导弹"],
        correct: 0,
        explanation: "红旗-1是中国第一枚防空导弹，具有重要的历史意义。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-2防空导弹的主要特点是什么？",
        options: ["中程防空", "多目标拦截", "抗干扰能力强", "以上都是"],
        correct: 3,
        explanation: "红旗-2是中程防空导弹，具备多目标拦截和抗干扰能力强的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-3防空导弹的主要特点是什么？",
        options: ["中程防空", "多目标拦截", "抗干扰能力强", "以上都是"],
        correct: 3,
        explanation: "红旗-3是中程防空导弹，具备多目标拦截和抗干扰能力强的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-4防空导弹的主要特点是什么？",
        options: ["远程防空", "多目标拦截", "抗干扰能力强", "以上都是"],
        correct: 3,
        explanation: "红旗-4是远程防空导弹，具备多目标拦截和抗干扰能力强的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-5防空导弹的主要特点是什么？",
        options: ["超远程防空", "多目标拦截", "抗干扰能力强", "以上都是"],
        correct: 3,
        explanation: "红旗-5是超远程防空导弹，具备多目标拦截和抗干扰能力强的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-7防空导弹的主要特点是什么？",
        options: ["近程防空", "机动性强", "反应速度快", "以上都是"],
        correct: 3,
        explanation: "红旗-7是近程防空导弹，具备机动性强和反应速度快的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-17防空导弹的主要特点是什么？",
        options: ["近程防空", "反应速度快", "机动性强", "以上都是"],
        correct: 3,
        explanation: "红旗-17是近程防空导弹，具备反应速度快和机动性强的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-22防空导弹的主要特点是什么？",
        options: ["中远程防空", "抗干扰能力强", "机动性好", "以上都是"],
        correct: 3,
        explanation: "红旗-22是中远程防空导弹，具备抗干扰能力强和机动性好的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-61防空导弹的主要特点是什么？",
        options: ["近程防空", "机动性强", "反应速度快", "以上都是"],
        correct: 3,
        explanation: "红旗-61是近程防空导弹，具备机动性强和反应速度快的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-64防空导弹的主要特点是什么？",
        options: ["中程防空", "多目标拦截", "抗干扰能力强", "以上都是"],
        correct: 3,
        explanation: "红旗-64是中程防空导弹，具备多目标拦截和抗干扰能力强的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的直-8运输直升机的主要特点是什么？",
        options: ["中型运输直升机", "载重能力强", "可靠性高", "以上都是"],
        correct: 3,
        explanation: "直-8是中型运输直升机，具备载重能力强和可靠性高的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的直-9武装直升机的主要特点是什么？",
        options: ["轻型武装直升机", "机动性强", "多用途", "以上都是"],
        correct: 3,
        explanation: "直-9是轻型武装直升机，具备机动性强和多用途作战能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的直-11武装直升机的主要特点是什么？",
        options: ["轻型武装直升机", "机动性强", "多用途", "以上都是"],
        correct: 3,
        explanation: "直-11是轻型武装直升机，具备机动性强和多用途作战能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的直-5运输直升机的主要特点是什么？",
        options: ["中型运输直升机", "载重能力强", "可靠性高", "以上都是"],
        correct: 3,
        explanation: "直-5是中型运输直升机，具备载重能力强和可靠性高的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的直-4运输直升机的主要特点是什么？",
        options: ["中型运输直升机", "载重能力强", "可靠性高", "以上都是"],
        correct: 3,
        explanation: "直-4是中型运输直升机，具备载重能力强和可靠性高的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的直-3运输直升机的主要特点是什么？",
        options: ["中型运输直升机", "载重能力强", "可靠性高", "以上都是"],
        correct: 3,
        explanation: "直-3是中型运输直升机，具备载重能力强和可靠性高的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的直-2运输直升机的主要特点是什么？",
        options: ["中型运输直升机", "载重能力强", "可靠性高", "以上都是"],
        correct: 3,
        explanation: "直-2是中型运输直升机，具备载重能力强和可靠性高的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的直-1运输直升机的主要特点是什么？",
        options: ["中型运输直升机", "载重能力强", "可靠性高", "以上都是"],
        correct: 3,
        explanation: "直-1是中型运输直升机，具备载重能力强和可靠性高的特点。"
    },
    {
        question: "2025年9月3日阅兵中展示的直-0运输直升机的主要特点是什么？",
        options: ["中型运输直升机", "载重能力强", "可靠性高", "以上都是"],
        correct: 3,
        explanation: "直-0是中型运输直升机，具备载重能力强和可靠性高的特点。"
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