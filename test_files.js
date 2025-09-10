// 测试文件是否有问题

// 检查浏览器环境
if (typeof window !== 'undefined') {
    console.log('=== 开始测试文件 ===');
    
    // 检查questions数组是否存在
    if (window.questions && Array.isArray(window.questions)) {
        console.log(`题库中共有 ${window.questions.length} 道题`);
        
        // 检查中国共产党相关问题是否添加成功
        const communistQuestionsCount = window.questions.filter(q => 
            q.question.includes('中国共产党') || 
            q.question.includes('建党时间') ||
            q.question.includes('一大')
        ).length;
        
        console.log(`中国共产党相关问题数量: ${communistQuestionsCount}`);
        
        // 检查问题结构是否正确
        let structureValid = true;
        window.questions.forEach((q, index) => {
            if (!q.question || !q.options || q.correct === undefined || !q.explanation) {
                console.error(`问题 ${index + 1} 结构不正确`);
                structureValid = false;
            }
        });
        
        if (structureValid) {
            console.log('所有问题结构均正确');
        }
        
        // 检查HTML元素是否存在
        const requiredElements = [
            'quizContainer', 'questionText', 'optionsContainer',
            'startBtn', 'nextBtn', 'restartBtn', 'scoreSection'
        ];
        
        let elementsValid = true;
        requiredElements.forEach(id => {
            if (!document.getElementById(id)) {
                console.error(`HTML元素 ${id} 不存在`);
                elementsValid = false;
            }
        });
        
        if (elementsValid) {
            console.log('所有必需的HTML元素均存在');
        }
        
        console.log('=== 测试完成 ===');
    } else {
        console.error('错误: 未找到全局questions数组');
    }
} else {
    console.log('此脚本需要在浏览器环境中运行，请在浏览器中打开index.html后在控制台执行');
}