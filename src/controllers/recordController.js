const Record = require("../models/Record");

exports.createRecord = async (req,res)=>{
  const record = await Record.create({...req.body,userId:req.user.id});
  res.status(201).json(record);
};

exports.getRecords = async (req,res)=>{
  const {type,category} = req.query;
  const filter = {};
  if(type) filter.type = type;
  if(category) filter.category = category;
  const data = await Record.find(filter);
  res.json(data);
};

exports.updateRecord = async (req,res)=>{
  const rec = await Record.findByIdAndUpdate(req.params.id,req.body,{new:true});
  res.json(rec);
};

exports.deleteRecord = async (req,res)=>{
  await Record.findByIdAndDelete(req.params.id);
  res.json({msg:"Deleted"});
};
