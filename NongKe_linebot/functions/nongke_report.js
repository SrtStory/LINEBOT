function getReport(list_position) {

    let Report_items = list_position.map((item) => {
        return {
            type : "action",
            action: {
              label: item.label,
              text: item.text,
              type: item.type
            },
            imageUrl: item.imageUrl
          };
        });
        return { 
            type : "text",
            text : "กรุณาเลือกแผนกงาน ที่พี่ๆ ต้องการติดต่อสอบถาม / แจ้งปัญหา เพื่อดำเนินการในขั้นตอนต่อไปนะคะ",                     
            quickReply : {
                items : Report_items
            }
            
            
          };
        }
module.exports = {
    getReport,
  };