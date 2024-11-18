const generatedPasswordEl = document.querySelector('.generated-password');
const copyBtn = document.querySelector('.copy-btn');
const generateBtn = document.querySelector('.generate-btn');
const tooltipEl = document.querySelector('.tooltip');
const pwLengthEl = document.querySelector('.pw-lenght-num');

const generatePassword = () => {
	let passwordLength = pwLengthEl.value;
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@$%';
	const charactersLength = characters.length;

	if (passwordLength < 1 || passwordLength > 20) {
		alert('Please enter a digit from 1 to 20.');
		location.reload();
	} else {
		for (let i = 0; i < passwordLength; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}
};

const displayPasswordOnScreen = () => {
	const pwd = generatePassword();
	generatedPasswordEl.textContent = pwd;
};

const copyPassword = () => {
	navigator.clipboard.writeText(generatedPasswordEl.textContent);
	tooltipEl.style.display = 'block';
	setTimeout(() => {
		tooltipEl.style.display = 'none';
	}, 800);
};

displayPasswordOnScreen();
generateBtn.addEventListener('click', displayPasswordOnScreen);
copyBtn.addEventListener('click', copyPassword);
