var contacts=[
    {
        "first name":"pooja",
        "last name":"nakate",
        "number":"9807898767",
        "likes":["sonpapdi","jamun","civda"]
    },
    {
        "first name":"sampu",
        "last name":"nakate",
        "number":"9807678900",
        "likes":["sonkadi","papdi","panipuri"]  
    },
    {
        "first name":"akshu",
        "last name":"nakate",
        "number":"9805678900",
        "likes":["rise","chakali","bhel"]    
    }
];
function lookupprofile(name,prop)
{
for(var i=0;i<contacts.length;i++){
    if(contacts[i].firstname === name){
        return contacts[i][prop] || "no such property";
    }
}
return "no such contact";
}

var data=lookupprofile("pooja","maggi");
console.log(data);