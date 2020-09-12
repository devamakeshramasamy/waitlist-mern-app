function GetNextSequenceValue(sequenceName){
    var sequenceDocument = db.counters.findAndModify({
       query:{queue: sequenceName },
       update: {$inc:{sequence_value:1}},
       new:true
    });
    return sequenceDocument.sequence_value;
 }
module.exports=GetNextSequenceValue