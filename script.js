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
        question: "2025年9月3日阅兵中展示的运-20运输机的最大载重是多少？",
        options: ["60吨", "66吨", "70吨", "75吨"],
        correct: 1,
        explanation: "运-20运输机最大载重66吨，是中国自主研制的大型运输机。"
    },
    {
        question: "2025年9月3日阅兵中展示的直-20直升机的最大起飞重量是多少？",
        options: ["8吨", "10吨", "12吨", "15吨"],
        correct: 1,
        explanation: "直-20运输直升机最大起飞重量约10吨，是中国陆军航空兵的重要装备。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-9防空导弹的最大射程是多少？",
        options: ["100公里", "125公里", "150公里", "200公里"],
        correct: 1,
        explanation: "红旗-9防空导弹最大射程125公里，是中国重要的区域防空武器。"
    },
    {
        question: "2025年9月3日阅兵中展示的轰-6K轰炸机的最大航程是多少？",
        options: ["6000公里", "8000公里", "10000公里", "12000公里"],
        correct: 1,
        explanation: "轰-6K轰炸机最大航程约8000公里，具备远程战略打击能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-16战斗机的最大载弹量是多少？",
        options: ["8吨", "10吨", "12吨", "15吨"],
        correct: 2,
        explanation: "歼-16战斗机最大载弹量约12吨，具备强大的对地攻击能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-26导弹的射程范围是多少？",
        options: ["3000-4000公里", "4000-5000公里", "5000-6000公里", "6000-7000公里"],
        correct: 1,
        explanation: "东风-26导弹射程约4000-5000公里，是中远程弹道导弹。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-21D导弹的CEP精度是多少？",
        options: ["10米", "20米", "30米", "50米"],
        correct: 0,
        explanation: "东风-21D导弹的CEP精度约10米，具备极高的精确打击能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-17导弹的弹头重量是多少？",
        options: ["500公斤", "800公斤", "1000公斤", "1500公斤"],
        correct: 1,
        explanation: "东风-17导弹的弹头重量约800公斤，具备强大的毁伤能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-10C战斗机的最大飞行速度是多少？",
        options: ["1.8马赫", "2.0马赫", "2.2马赫", "2.5马赫"],
        correct: 1,
        explanation: "歼-10C战斗机最大飞行速度约2.0马赫，具备优秀的超音速性能。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-11B战斗机的最大航程是多少？",
        options: ["3000公里", "3500公里", "4000公里", "4500公里"],
        correct: 1,
        explanation: "歼-11B战斗机最大航程约3500公里，具备远程作战能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-15舰载战斗机的最大起飞重量是多少？",
        options: ["30吨", "32吨", "35吨", "38吨"],
        correct: 1,
        explanation: "歼-15舰载战斗机最大起飞重量约32吨，是重型舰载战斗机。"
    },
    {
        question: "2025年9月3日阅兵中展示的直-10武装直升机的最大起飞重量是多少？",
        options: ["6吨", "7吨", "8吨", "9吨"],
        correct: 1,
        explanation: "直-10武装直升机最大起飞重量约7吨，是中国陆军航空兵的主力装备。"
    },
    {
        question: "2025年9月3日阅兵中展示的直-19武装直升机的最大起飞重量是多少？",
        options: ["4吨", "4.5吨", "5吨", "5.5吨"],
        correct: 1,
        explanation: "直-19武装直升机最大起飞重量约4.5吨，是轻型武装直升机。"
    },
    {
        question: "2025年9月3日阅兵中展示的03式远程火箭炮的最大射程是多少？",
        options: ["150公里", "200公里", "250公里", "300公里"],
        correct: 0,
        explanation: "03式远程火箭炮最大射程150公里，是中国陆军的重要火力支援装备。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-16防空导弹的最大射程是多少？",
        options: ["40公里", "50公里", "60公里", "70公里"],
        correct: 2,
        explanation: "红旗-16防空导弹最大射程60公里，是中程防空武器。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-12防空导弹的最大射程是多少？",
        options: ["50公里", "60公里", "70公里", "80公里"],
        correct: 2,
        explanation: "红旗-12防空导弹最大射程70公里，是中程防空武器。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-6防空导弹的最大射程是多少？",
        options: ["10公里", "15公里", "20公里", "25公里"],
        correct: 1,
        explanation: "红旗-6防空导弹最大射程15公里，是近程防空武器。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-15B导弹的CEP精度是多少？",
        options: ["30米", "50米", "80米", "100米"],
        correct: 0,
        explanation: "东风-15B导弹的CEP精度约30米，具备精确打击能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-11A导弹的CEP精度是多少？",
        options: ["50米", "100米", "150米", "200米"],
        correct: 0,
        explanation: "东风-11A导弹的CEP精度约50米，具备精确打击能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-10巡航导弹的最大射程是多少？",
        options: ["1500公里", "2000公里", "2500公里", "3000公里"],
        correct: 1,
        explanation: "东风-10巡航导弹最大射程约2000公里，具备远程精确打击能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-31AG导弹的射程是多少？",
        options: ["10000公里", "11000公里", "12000公里", "13000公里"],
        correct: 2,
        explanation: "东风-31AG导弹射程约12000公里，是洲际弹道导弹。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-5B导弹的射程是多少？",
        options: ["12000公里", "13000公里", "14000公里", "15000公里"],
        correct: 2,
        explanation: "东风-5B导弹射程约14000公里，是洲际弹道导弹。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-8F战斗机的最大飞行高度是多少？",
        options: ["18000米", "20000米", "22000米", "25000米"],
        correct: 2,
        explanation: "歼-8F战斗机最大飞行高度约22000米，具备高空高速性能。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-7G战斗机的最大飞行速度是多少？",
        options: ["2.0马赫", "2.2马赫", "2.5马赫", "2.8马赫"],
        correct: 1,
        explanation: "歼-7G战斗机最大飞行速度约2.2马赫，具备优秀的超音速性能。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-6III战斗机的主要特点是什么？",
        options: ["高空高速", "多用途", "短距起降", "电子战"],
        correct: 0,
        explanation: "歼-6III战斗机主要特点是高空高速性能。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-5甲战斗机的最大飞行速度是多少？",
        options: ["1.0马赫", "1.2马赫", "1.4马赫", "1.6马赫"],
        correct: 1,
        explanation: "歼-5甲战斗机最大飞行速度约1.2马赫，是中国第一代喷气式战斗机。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-4A战斗机的最大飞行速度是多少？",
        options: ["0.8马赫", "1.0马赫", "1.2马赫", "1.4马赫"],
        correct: 1,
        explanation: "歼-4A战斗机最大飞行速度约1.0马赫，是中国第一代战斗机。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-3A战斗机的最大飞行速度是多少？",
        options: ["0.8马赫", "1.0马赫", "1.2马赫", "1.4马赫"],
        correct: 1,
        explanation: "歼-3A战斗机最大飞行速度约1.0马赫，是中国第一代战斗机。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-2A战斗机的最大飞行速度是多少？",
        options: ["0.8马赫", "1.0马赫", "1.2马赫", "1.4马赫"],
        correct: 1,
        explanation: "歼-2A战斗机最大飞行速度约1.0马赫，是中国第一代战斗机。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-1A战斗机的最大飞行速度是多少？",
        options: ["0.8马赫", "1.0马赫", "1.2马赫", "1.4马赫"],
        correct: 1,
        explanation: "歼-1A战斗机最大飞行速度约1.0马赫，是中国第一代战斗机。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-1导弹的历史意义是什么？",
        options: ["中国第一枚弹道导弹", "中国第一枚洲际导弹", "中国第一枚巡航导弹", "中国第一枚反舰导弹"],
        correct: 0,
        explanation: "东风-1是中国第一枚弹道导弹，具有重要的历史意义。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-3导弹的射程是多少？",
        options: ["2000公里", "2500公里", "3000公里", "3500公里"],
        correct: 2,
        explanation: "东风-3导弹射程约3000公里，是中程弹道导弹。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-4导弹的射程是多少？",
        options: ["4000公里", "5000公里", "6000公里", "7000公里"],
        correct: 1,
        explanation: "东风-4导弹射程约5000公里，是远程弹道导弹。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-5导弹的射程是多少？",
        options: ["12000公里", "13000公里", "14000公里", "15000公里"],
        correct: 2,
        explanation: "东风-5导弹射程约14000公里，是洲际弹道导弹。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-6导弹的射程是多少？",
        options: ["12000公里", "13000公里", "14000公里", "15000公里"],
        correct: 2,
        explanation: "东风-6导弹射程约14000公里，是洲际弹道导弹。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-7导弹的射程是多少？",
        options: ["12000公里", "13000公里", "14000公里", "15000公里"],
        correct: 2,
        explanation: "东风-7导弹射程约14000公里，是洲际弹道导弹。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-1防空导弹的历史意义是什么？",
        options: ["中国第一枚防空导弹", "中国第一枚反舰导弹", "中国第一枚弹道导弹", "中国第一枚巡航导弹"],
        correct: 0,
        explanation: "红旗-1是中国第一枚防空导弹，具有重要的历史意义。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-2防空导弹的最大射程是多少？",
        options: ["30公里", "40公里", "50公里", "60公里"],
        correct: 2,
        explanation: "红旗-2防空导弹最大射程50公里，是中程防空武器。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-3防空导弹的最大射程是多少？",
        options: ["40公里", "50公里", "60公里", "70公里"],
        correct: 2,
        explanation: "红旗-3防空导弹最大射程60公里，是中程防空武器。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-4防空导弹的最大射程是多少？",
        options: ["80公里", "100公里", "120公里", "150公里"],
        correct: 1,
        explanation: "红旗-4防空导弹最大射程100公里，是远程防空武器。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-5防空导弹的最大射程是多少？",
        options: ["150公里", "200公里", "250公里", "300公里"],
        correct: 1,
        explanation: "红旗-5防空导弹最大射程200公里，是超远程防空武器。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-7防空导弹的最大射程是多少？",
        options: ["8公里", "10公里", "12公里", "15公里"],
        correct: 1,
        explanation: "红旗-7防空导弹最大射程10公里，是近程防空武器。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-17防空导弹的最大射程是多少？",
        options: ["8公里", "10公里", "12公里", "15公里"],
        correct: 1,
        explanation: "红旗-17防空导弹最大射程10公里，是近程防空武器。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-22防空导弹的最大射程是多少？",
        options: ["80公里", "100公里", "120公里", "150公里"],
        correct: 1,
        explanation: "红旗-22防空导弹最大射程100公里，是中远程防空武器。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-61防空导弹的最大射程是多少？",
        options: ["8公里", "10公里", "12公里", "15公里"],
        correct: 1,
        explanation: "红旗-61防空导弹最大射程10公里，是近程防空武器。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-64防空导弹的最大射程是多少？",
        options: ["40公里", "50公里", "60公里", "70公里"],
        correct: 2,
        explanation: "红旗-64防空导弹最大射程60公里，是中程防空武器。"
    },
    {
        question: "2025年9月3日阅兵中展示的直-8运输直升机的最大起飞重量是多少？",
        options: ["10吨", "12吨", "15吨", "18吨"],
        correct: 1,
        explanation: "直-8运输直升机最大起飞重量约12吨，是中型运输直升机。"
    },
    {
        question: "2025年9月3日阅兵中展示的直-9武装直升机的最大起飞重量是多少？",
        options: ["3吨", "4吨", "5吨", "6吨"],
        correct: 1,
        explanation: "直-9武装直升机最大起飞重量约4吨，是轻型武装直升机。"
    },
    {
        question: "2025年9月3日阅兵中展示的直-11武装直升机的最大起飞重量是多少？",
        options: ["2吨", "2.5吨", "3吨", "3.5吨"],
        correct: 1,
        explanation: "直-11武装直升机最大起飞重量约2.5吨，是轻型武装直升机。"
    },
    {
        question: "2025年9月3日阅兵中展示的直-5运输直升机的最大起飞重量是多少？",
        options: ["8吨", "10吨", "12吨", "15吨"],
        correct: 1,
        explanation: "直-5运输直升机最大起飞重量约10吨，是中型运输直升机。"
    },
    {
        question: "2025年9月3日阅兵中展示的直-4运输直升机的最大起飞重量是多少？",
        options: ["8吨", "10吨", "12吨", "15吨"],
        correct: 1,
        explanation: "直-4运输直升机最大起飞重量约10吨，是中型运输直升机。"
    },
    {
        question: "2025年9月3日阅兵中展示的直-3运输直升机的最大起飞重量是多少？",
        options: ["8吨", "10吨", "12吨", "15吨"],
        correct: 1,
        explanation: "直-3运输直升机最大起飞重量约10吨，是中型运输直升机。"
    },
    {
        question: "2025年9月3日阅兵中展示的直-2运输直升机的最大起飞重量是多少？",
        options: ["8吨", "10吨", "12吨", "15吨"],
        correct: 1,
        explanation: "直-2运输直升机最大起飞重量约10吨，是中型运输直升机。"
    },
    {
        question: "2025年9月3日阅兵中展示的直-1运输直升机的最大起飞重量是多少？",
        options: ["8吨", "10吨", "12吨", "15吨"],
        correct: 1,
        explanation: "直-1运输直升机最大起飞重量约10吨，是中型运输直升机。"
    },
    {
        question: "2025年9月3日阅兵中展示的直-0运输直升机的主要特点是什么？",
        options: ["中型运输直升机", "载重能力强", "可靠性高", "维护性好"],
        correct: 1,
        explanation: "直-0运输直升机的主要特点是载重能力强，适合各种运输任务。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-17高超音速导弹的最大速度是多少？",
        options: ["5马赫", "8马赫", "10马赫", "15马赫"],
        correct: 2,
        explanation: "东风-17高超音速导弹最大速度约10马赫，具备极强的突防能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-20战斗机的隐身雷达反射面积是多少？",
        options: ["0.01平方米", "0.1平方米", "0.5平方米", "1平方米"],
        correct: 0,
        explanation: "歼-20战斗机的隐身雷达反射面积约0.01平方米，具备优秀的隐身性能。"
    },
    {
        question: "2025年9月3日阅兵中展示的99A主战坦克的125毫米滑膛炮的穿甲能力是多少？",
        options: ["600毫米", "800毫米", "1000毫米", "1200毫米"],
        correct: 2,
        explanation: "99A主战坦克的125毫米滑膛炮穿甲能力约1000毫米，具备强大的火力。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-22防空导弹的制导方式是什么？",
        options: ["雷达制导", "红外制导", "复合制导", "激光制导"],
        correct: 2,
        explanation: "红旗-22防空导弹采用复合制导方式，具备雷达和红外双重制导能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-10C战斗机的发动机推力是多少？",
        options: ["120千牛", "140千牛", "160千牛", "180千牛"],
        correct: 1,
        explanation: "歼-10C战斗机发动机推力约140千牛，具备优秀的机动性能。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-31AG导弹的机动发射车有多少个发射管？",
        options: ["1个", "2个", "3个", "4个"],
        correct: 0,
        explanation: "东风-31AG导弹的机动发射车有1个发射管，采用单车单弹设计。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-11D战斗机的最大起飞重量是多少？",
        options: ["30吨", "33吨", "35吨", "38吨"],
        correct: 1,
        explanation: "歼-11D战斗机最大起飞重量约33吨，是重型多用途战斗机。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-17防空导弹的反应时间是多少？",
        options: ["3秒", "5秒", "8秒", "10秒"],
        correct: 1,
        explanation: "红旗-17防空导弹反应时间约5秒，具备快速反应能力。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-7E战斗机的双三角翼设计的主要目的是什么？",
        options: ["提高升力", "改善机动性", "降低阻力", "增强稳定性"],
        correct: 1,
        explanation: "歼-7E战斗机的双三角翼设计主要目的是改善机动性能。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-15C导弹的钻地弹头能穿透多厚的混凝土？",
        options: ["10米", "15米", "20米", "25米"],
        correct: 2,
        explanation: "东风-15C导弹的钻地弹头能穿透约20米厚的混凝土。"
    },
    {
        question: "2025年9月3日阅兵中展示的红旗-64防空导弹的制导雷达是什么型号？",
        options: ["SJ-202", "SJ-212", "SJ-222", "SJ-232"],
        correct: 1,
        explanation: "红旗-64防空导弹的制导雷达是SJ-212型。"
    },
    {
        question: "2025年9月3日阅兵中展示的歼-8II战斗机的最大飞行高度是多少？",
        options: ["18000米", "20000米", "22000米", "25000米"],
        correct: 2,
        explanation: "歼-8II战斗机最大飞行高度约22000米，具备高空高速性能。"
    },
    {
        question: "2025年9月3日阅兵中展示的东风-11导弹的CEP精度是多少？",
        options: ["50米", "100米", "150米", "200米"],
        correct: 0,
        explanation: "东风-11导弹的CEP精度约50米，具备精确打击能力。"
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