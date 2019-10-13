function ntsConvert(value) {
    let input = String(value).split('');
    let mapData = {
        "0": "Zero",
        "1": "One",
        "2": "Two",
        "3": "Three",
        "4": "Four",
        "5": "Five",
        "6": "Six",
        "7": "Seven",
        "8": "Eight",
        "9": "Nine"
    };
    let output = '';
    var tempArray = []
    for (let i = 0; i < input.length; i++) {
        tempArray.push(mapData[input[i]])
    }
    output = tempArray.join(' ');
    return output;
    }
    
    console.log(ntsConvert(20892)) // 'One Two Three Four Five'