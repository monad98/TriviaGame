
export function randomIndex(length) {
  return Math.floor(Math.random() * length);
}

export function putElementAtIndex(arry1, elem, index) {
  return [...arry1.slice(0, index), elem, ...arry1.slice(index)];
}

export function switchClass(jQueryObj, classToRemove, classToAdd) {
  jQueryObj.removeClass(classToRemove).addClass(classToAdd);
}