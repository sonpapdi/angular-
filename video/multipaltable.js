function tables(num1,num2){
    for(var i=1;i<num2;i++){
        for(var j=1;j<=10;j++){
            var table=num1*j;
            console.log(table);
        }
        num1++;
    }
}
tables(2,8);