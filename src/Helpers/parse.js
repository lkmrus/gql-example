/**
 * Преобразование объекта
 * @param {object}  
 */
export default function(obj, strDelArg=null) {
    const data = JSON.parse(JSON.stringify(obj));
    if (strDelArg){
        delete data[strDelArg]
    }
    return data;
}