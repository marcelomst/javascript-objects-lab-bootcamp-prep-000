function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object,{[key]: value});
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   return Object.assign(object,{[key]: value});
}
function deleteFromObjectByKey(object, key){
  newObj = Object.assign({},object)
  delete newObject[[key]]
  return newObj 
}