function addmatrix(m1,m2){
    var result=[];
    for(var i=0; i<m1.length;i++)
    {
        result[i]=[]
        for(var j=0;j<m2.length;j++){
          
            var sum=0;
            
            for(var k=0;k<m2[0].length;k++){
                sum=m1[k][k]+m2[k][j]
            }
            
            result[i][j]=sum;
        }}
            return result;
            }
            var m1=[[1,1],[1,1]]
            var m2=[[4,2],[4,5]]
            console.log("addition of matrix");
            console.log(addmatrix(m1,m2));
            
        