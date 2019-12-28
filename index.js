function updateObjectWithKeyAndValue(object, key, value){
  var obj = {[key]: object[[key]]}
  return Object.assign({}, object,{[key]: value});
}