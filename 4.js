let student=[
    {name:"tarang",rollNo:1231,marks:99},
    {name:"monu",rollNo:31,marks:79},
    {name:"sonu",rollNo:11,marks:89},
    {name:"tonu",rollNo:123,marks:90},
    {name:"ronu",rollNo:12,marks:9},
];
student.sort(function(a,b)
{
    return b.marks-a.marks;

});
console.log("top 3 student:");
for(let i=0;i<3;i++){
    console.log(student[i].name,student[i].rollNo,student[i].marks);
}