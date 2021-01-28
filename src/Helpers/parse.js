/**
 * Преобразование объекта
 * @param {object}
 */
export default function (obj, strDelArg = null) {
    const data = JSON.parse(JSON.stringify(obj)); // Избавляемся от [Object: null prototype]
    
	if (strDelArg) {
		delete data[strDelArg]; // Удаляем ключ
    }
    
	return data;
}
