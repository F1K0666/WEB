document.getElementById('calculateButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    const multiplier = 0.022;
    const divisor = 180;

    if (isNaN(userInput) || userInput === '') {
        alert('请输入一个有效的数字！');
        return;
    }

    const inputNumber = parseFloat(userInput);

    const intermediateResult = inputNumber * multiplier;
    if (intermediateResult === 0) {
        alert('计算结果为无穷大，请输入一个非零数值！');
        return;
    }

    const finalResult = divisor / intermediateResult;

    document.getElementById('result').innerText = `最终结果是：${finalResult.toFixed(3)} ,建议进行小数点第二位加一的四舍五入`;
});