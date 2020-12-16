const student = {id: 123, phone: "01234", name: "Latif"};
const student2 = {id: 123, phone: "012545", name: "Fahim"};

var phoneNo = student.phone;
 student2.phone = 457638;
 student2["phone"] = '99876'

console.log(phoneNo);
console.log(student2);
