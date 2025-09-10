// 计算题库中问题的总数

// 从script.js文件中提取questions数组并计算长度

// 注意：这个脚本需要在浏览器环境中运行，或者将script.js中的questions数组内容复制到这里

// 如果在浏览器中运行，可以直接访问window.questions
if (typeof window !== 'undefined' && window.questions) {
    console.log('原始题库问题数量：', window.questions.length);
    console.log('添加共产党相关问题后总数量：', window.questions.length + 10);
} else {
    // 如果在Node.js环境中运行，需要手动计算
    // 从之前查看的内容，script.js文件大约有663行，其中questions数组大约有50-60个问题
    // 但为了准确，最好的方法是直接在浏览器中运行这个脚本
    console.log('请在浏览器中打开index.html，然后在控制台中执行：');
    console.log('"console.log(\'总题目数量：\', window.questions.length);"');
}