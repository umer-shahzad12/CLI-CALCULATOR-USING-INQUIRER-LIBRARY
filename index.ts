import inquirer from 'inquirer';

const calculate = (num1: number, num2: number, operation: string): number => {
    if (operation === '+') {
        return num1 + num2;
    } else if (operation === '-') {
        return num1 - num2;
    } else if (operation === '*') {
        return num1 * num2;
    } else if (operation === '/') {
        if (num2 === 0) {
            console.log('Error: Cannot divide by zero');
            return NaN;
        }
        return num1 / num2;
    } else {
        console.log('Invalid operation');
        return NaN;
    }
};

const promptCalculator = async () => {
    const questions = [
        {
            type: 'input',
            name: 'num1',
            message: 'Enter the first number:'
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter the second number:'
        },
        {
            type: 'list',
            name: 'operation',
            message: 'Choose the operation:',
            choices: ['+', '-', '*', '/']
        }
    ];

    const answers = await inquirer.prompt(questions);
    const result = calculate(parseFloat(answers.num1), parseFloat(answers.num2), answers.operation);
    console.log('Result:', result);
    // No recursive call, so the calculator will exit after performing one operation
};

promptCalculator();