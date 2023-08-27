const eroorHandleMidelwerw=(err,req,res,next)=>{
  //  return res.status(500).json({msg:err})
    return res.status(500).json({msg:'nesto nije ok probaj ponovo'})
    }
    module.exports=eroorHandleMidelwerw