const tiku ={
    '贷款人应完善内部控制机制，实行贷款()管理，全面了解客户信息，建立流动资金贷款风险管理制度和有效的岗位制衡机制。': 'C',
    '（）是全国银行业保险业消费投诉处理工作的监督单位，对全国银行业保险业消费投诉处理工作进行监督指导。': 'C',
    '根据《流动资金贷款管理暂行办法》规定，贷款人应采取()的形式履行尽职调查，形成书面报告，并对其内容的真实性、完整性和有效性负责。': 'C',
    '金融机构应当按照规定建立客户身份资料和交易记录保存制度。在业务关系存续期间，客户身份资料发生变更的，应当及时更新客户身份资料。客户身份资料在业务关系结束后、客户交易信息在交易结束后，应当至少保存（）。': 'B',
    '保障金融消费者受教育权，金融机构应当（）。': 'ABCD',
    '根据《流动资金贷款管理暂行办法》规定，贷款人与借款人签订的流动资金借款合同应明确约定哪些条款。（）': 'ABD',
    '从业人员在办理授信、资信调查、融资等业务涉及本人、亲属或其他利益相关人时，可由单位负责人视情况决定该员工是否回避。': 'B',
    '《个人贷款管理暂行办法》规定，通过电子银行渠道发放低风险质押贷款的，借款人真实身份不必核实。': 'B',
    '商业银行因行使抵押权、质权而取得的不动产或者股权，应当自取得之日起二年内予以处分。': 'A',
    '金融机构应当将保护金融消费者合法权益纳入公司治理、企业文化建设和经营发展战略中统筹规划，落实人员配备和经费预算，完善金融消费者权益保护工作机制。': 'A'
};
// 整理给定文本的函数：替换换行符、回车和空格
function cleanText(text) {
    if (!text) return '';
    return text.replace(/[\n\r]/g, '').replace(/\s+/g, '');
}
function autoAnswer() {
    //题干放在class为question-stem clearF的div中---------------------考试时根据实际修改
    const sjtgs = document.querySelectorAll('div[class^="question-stem clearF"]');
    for (let i = 0; i < sjtgs.length; i++) {
        const sjtg = sjtgs[i];    
        // 获取并清理题干文本-----------------1.5分还是2分根据实际修改
        let sjtgText = sjtg.innerText;
        //sjtgText = cleanText(sjtgText).replace(/^\d{1,3}\./, '').replace(/\./g, '').replace(/（1分）/, '').replace(/（15分）/, '').replace(/（2分）/, '');
        sjtgText = cleanText(sjtgText).replace(/^\d{1,3}\./, '').replace(/（1分）/, '').replace(/（15分）/, '').replace(/（2分）/, '');
        //console.log(sjtgText)
        // 在题库中查找答案
        if (tiku.hasOwnProperty(sjtgText)) {
            const answer = tiku[sjtgText];   
            //console.log(`题目是：${sjtgText}`)  
            //console.log(`答案是：${answer}`)     
            let options = [];
            //从试卷题干向上查找class包含question-panel的div元素
            const questionContainer = sjtg.closest('div[class*="question-panel"]');
            if (questionContainer) {              
	//作答选项放在class为item-detail的div中----------------------------考试时根据实际修改
                options = questionContainer.querySelectorAll('div[class^="item-detail"');     
            }
            // 修复选项匹配逻辑
            for (let j = 0; j < options.length; j++) {
                const option = options[j];
                let optionText = cleanText(option.innerText);
                // 处理判断题的"正确"/"错误"
                if (optionText === '正确') optionText = 'A';
                if (optionText === '错误') optionText = 'B';            
                // 提取选项标识（A/B/C/D）
                const optionChar = optionText.charAt(0).toUpperCase();
                if (answer.includes(optionChar)) {
                    //console.log(`点击选项: ${optionChar}`);
                    option.click();
                }
            }
        } 
    }
}

autoAnswer();