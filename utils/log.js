const chalk = require('chalk');
module.exports = (data, option) => {
  const arrayColor = ['blue', 'yellow', 'green', 'red', 'magenta', 'yellowBright', 'blueBright', 'magentaBright']
	const color_one = chalk[arrayColor[Math.floor(Math.random() * arrayColor.length)]]
	const color_two = chalk[arrayColor[Math.floor(Math.random() * arrayColor.length)]]
	switch (option) {
		case "warn":
			console.log(chalk.yellow('» ❕ Lỗi rồi « ') + data);
			break;
		case "error":
			console.log(chalk.red('» ❕ Lỗi rồi « ') + data);
			break;
		default:
			console.log(color_one(`${option} `) + color_two(data));
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.hex("#99FF66")('[ MODE ] - ') + data);
			break;
		case "error":
			console.log(chalk.hex("#FF0000")(`> ${data}`));
			break;
		default:
			console.log(chalk.hex("#99FFFF")(`> ${data}`));
			break;
	}
}
