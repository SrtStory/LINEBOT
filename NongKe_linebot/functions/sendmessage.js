// function getCards(menu){

//     let items = menu.map((items) =>{
//         return {
//             type : "image_carousel",
//             columns: [
//                 {
//                   action: {
//                     label: "เริ่มต้นใช้งาน",
//                     text: "about",
//                     type: "message"
//                   },
//                   imageUrl: "https://www.img.in.th/images/cc5d49de68865d07a8e0ffc399e3212e.jpg"
//                 },
//                 {
//                   action: {
//                     text: "report",
//                     label: "แจ้งเหตุ/ปัญหา",
//                     type: "message"
//                   },
//                   imageUrl: "https://www.img.in.th/images/7e10f6199c2621c4b3a7979eb974bab7.jpg"
//                 },
//                 {
//                   action: {
//                     label: "คีย์ลัด",
//                     text: "hotkey",
//                     type: "message"
//                   },
//                   imageUrl: "https://www.img.in.th/images/9bf950237d455cd52607c8586703bb38.jpg"
//                 },
//                 {
//                   imageUrl: "https://www.img.in.th/images/7e10f6199c2621c4b3a7979eb974bab7.jpg",
//                   action: {
//                     type: "message",
//                     text: "questions",
//                     label: "คำถาม"
//                   }
//                 },
//                 {
//                   action: {
//                     label: "Contact dev",
//                     text: "contact",
//                     type: "message"
//                   },
//                   imageUrl: "https://www.img.in.th/images/41ab00960f24f648de38ffc402471330.jpg"
//                 }
//               ]
//         }
//     })

//     return{
//         type : "template",
//         altText : "List of menu",
//         template : {
//             type : "carousel",
//             contents : items,
//         },
//     };
// }

// module.exports = {
//     getCards,
// };