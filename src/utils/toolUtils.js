//深度合并-深拷贝,参数同Objec.assign
export function deepMerge(obj1, obj2) {
    let key;
    for (key in obj2) {
      // 如果target(也就是obj1[key])存在，且是对象的话再去调用deepMerge，否则就是obj1[key]里面没这个对象，需要与obj2[key]合并
      // 如果obj2[key]没有值或者值不是对象，此时直接替换obj1[key]
      obj1[key] =
        obj1[key] &&
          obj1[key].toString() === "[object Object]" &&
          (obj2[key] && obj2[key].toString() === "[object Object]")
          ? deepMerge(obj1[key], obj2[key])
          : (obj1[key] = obj2[key]);
    }
    return deepClone(obj1)
  }
  //深拷贝
  export function deepClone(obj) {
    //判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
    var objClone = Array.isArray(obj) ? [] : {};
    //进行深拷贝的不能为空，并且是对象或者是
    if (obj && typeof obj === "object") {
      let key;
      for (key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
          if (obj[key] && typeof obj[key] === "object") {
            objClone[key] = deepClone(obj[key]);
          } else {
            objClone[key] = obj[key];
          }
        }
      }
    }
    return objClone;
  }
export function debounce(fn, wait) {
  let timeout;
  return function() {
    let that = this;
    let arg = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function(){
      fn.apply(that,arg)//使用apply改变this指向
    }, wait);
  }
}