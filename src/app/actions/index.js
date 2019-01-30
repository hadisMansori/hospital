exports.signin=(text)=>{
  return {
    type:'User',
    text
  }
}
exports.dElete=(id)=>{
  return {
    type:'DELETE',
    id
  }
}
exports.addpost=(text,type)=>{
  if(type==="gh")
  return { type:'Add-gh',text }
  if(type==="jgh")
  return { type:'Add-jgh',text }
  if(type==="no")
  return { type:'Add-no',text }
  if(type==="nf")
  return { type:'Add-nf',text }
  if(type==="ra")
  return { type:'Add-ra',text }

}

exports.Deltype=(t,id)=>{
  return { type:'Delete',t,id}

}

exports.Doctor=(id)=>{
  return {
    type:'Doctor',
    id
  }
}
