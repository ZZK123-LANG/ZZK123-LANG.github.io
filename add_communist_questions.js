// 添加中国共产党一大和建党时间相关问题到题库

// 定义需要添加的问题
const communistQuestions = [
    {
        question: "中国共产党第一次全国代表大会召开的时间是？",
        options: ["1919年5月4日", "1921年7月1日", "1921年7月23日", "1922年7月16日"],
        correct: 2,
        explanation: "中国共产党第一次全国代表大会于1921年7月23日在上海法租界望志路106号（今兴业路76号）开幕。"
    },
    {
        question: "中国共产党第一次全国代表大会最后一天的会议是在哪里召开的？",
        options: ["北京天安门", "上海望志路", "浙江嘉兴南湖", "广州东山"],
        correct: 2,
        explanation: "由于受到法租界巡捕的干扰，中共一大最后一天的会议转移到浙江嘉兴南湖的游船上举行。"
    },
    {
        question: "中国共产党第一次全国代表大会共有多少名代表出席？",
        options: ["10名", "12名", "15名", "18名"],
        correct: 1,
        explanation: "中共一大共有12名代表出席，代表全国50多名党员。"
    },
    {
        question: "中国共产党成立的正式时间被确定为哪一天？",
        options: ["1921年7月1日", "1921年7月23日", "1949年10月1日", "1927年8月1日"],
        correct: 0,
        explanation: "1941年，中共中央确定将1921年7月1日作为中国共产党建党日。"
    },
    {
        question: "中国共产党第一次全国代表大会选举产生的中央局书记是谁？",
        options: ["毛泽东", "陈独秀", "李大钊", "周恩来"],
        correct: 1,
        explanation: "中共一大选举陈独秀为中央局书记，他当时虽然没有出席会议，但由于在五四运动和建党过程中的重要贡献而被选为领导人。"
    },
    {
        question: "以下哪位人物没有出席中国共产党第一次全国代表大会？",
        options: ["毛泽东", "董必武", "李大钊", "李达"],
        correct: 2,
        explanation: "李大钊当时是北京大学教授，负责领导北方的革命工作，由于工作繁忙未能出席中共一大。"
    },
    {
        question: "中国共产党第一次全国代表大会通过的第一个纲领规定党的名称是什么？",
        options: ["中国共产党", "中国社会党", "中国劳动党", "中国革命党"],
        correct: 0,
        explanation: "中共一大通过的第一个纲领明确规定党的名称为'中国共产党'。"
    },
    {
        question: "截至2023年，中国共产党成立多少周年？",
        options: ["95周年", "98周年", "100周年", "102周年"],
        correct: 3,
        explanation: "中国共产党成立于1921年，截至2023年是102周年。"
    },
    {
        question: "中国共产党第一次全国代表大会的主要任务是什么？",
        options: ["制定党的纲领和章程", "组织工人运动", "发动武装起义", "开展土地革命"],
        correct: 0,
        explanation: "中共一大的主要任务是制定党的第一个纲领和决议，选举党的中央领导机构。"
    },
    {
        question: "中国共产党的诞生地是哪里？",
        options: ["北京", "上海", "广州", "武汉"],
        correct: 1,
        explanation: "中国共产党于1921年7月在上海诞生，标志着中国革命进入了新的阶段。"
    }
];

// 检查是否已经在浏览器环境中运行
if (typeof window !== 'undefined') {
    // 在浏览器环境中，将问题添加到全局questions数组
    if (window.questions && Array.isArray(window.questions)) {
        // 添加新问题到现有题库
        window.questions = [...window.questions, ...communistQuestions];
        console.log('中国共产党相关问题已成功添加到题库！');
    } else {
        console.error('未找到全局questions数组，无法添加问题。');
    }
} else {
    // 在Node.js环境中，导出问题以便其他脚本使用
    module.exports = { communistQuestions };
}