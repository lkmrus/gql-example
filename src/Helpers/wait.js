/**
 * задержка на нужное кол-во секунд
 * @param sTimeMs
 */
module.exports = function wait(sTimeMs) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, sTimeMs);
	});
};
