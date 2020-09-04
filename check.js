const checkCashRegister =(price, cash, cid)=>{
    const amount ={
        
        "FiveCent": 0.05,
        "TenCent": 0.10,
        "TwentyCent": 0.20,
        "FiftyCent": 0.50,
        "ONe": 1.00,
        "Two": 2.00,
        "Five": 5.00,
        "Ten": 10.00,
        "Twenty": 20.00,
        "Fifty": 50.00,
        "OneHundred": 100.00,
        "TwoHundred": 200.00
    
    }
    let drawer= 0;
    for(let value of cid){
        drawer+= value[1]
    }
    drawer = drawer.toFixed(2);
    let customerChange = cash - price;
    let Change = [];
    if (customerChange> drawer) {
        return { status: "INSUFFICIENT_FUNDS", change: change };
      } else if (customerChange.toFixed(2) === drawer) {
        return { status: "CLOSED", change: cid };
      }else {
      cid = cid.reverse();
      for (let elem of cid) {
        let temp = [elem[0], 0];
        while (customerChange >= amount[elem[0]] && elem[1] > 0) {
          temp[1] += amount[elem[0]];
          elem[1] -= amount[elem[0]];
          customerChange-= amount[elem[0]];
          customerChange = customerChange.toFixed(2);
        }
        if (temp[1] > 0) {
          change.push(temp);
        }
      }
    }
    if (customerChange > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change: change};
  }
    } 
    console.log(checkCashRegister())
