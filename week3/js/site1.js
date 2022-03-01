const StockPriceList = {
    Apple: .60,
    Orange : .25
}
function GetPriceOfItem(StockPriceList, item) {
    let priceOfItem = 10;

    //  if (item == 'A') priceOfItem = .6;
    //  if (item == '0') priceOfItem = .25

    switch (item.toUpperCase()) {

        case 'A': 
            priceOfItem = StockPriceList.Apple; 
            break
        case 'O': 
            priceOfItem = StockPriceList.Orange; 
            break;
        default: priceOfItem = -1; 
            break;
    }
    return priceOfItem;
}

function ScanItemsAtTill(shopItems) {

    let runningTotal = 0;

    for (const currentItem of shopItems) {

        runningTotal += GetPriceOfItem(StockPriceList,currentItem);
    }


    return runningTotal;

}

//  pass the current stockprice to the funciton
function ScanItemsAtTillAndReturnReceiptObject(priceList, shopItems) {
    


    let receipt = {
        runningTotal : 0,
        appleTotal : 0,
        orangeTotal: 0

    };

    for (const currentItem of shopItems) {

        receipt.runningTotal += GetPriceOfItem(currentItem);
        if(currentItem.toUpperCase()=='A') receipt.appleTotal += priceList.Apple
        if(currentItem.toUpperCase()=='O') receipt.orangeTotal += priceList.Orange
    }


    return receipt;

}



let shoppingList1 = ['A', 'O', 'A', 'A', 'O'];

const currentCost = ScanItemsAtTill(shoppingList1);

console.log(`Total Cost : ${currentCost}`)



const receipt = ScanItemsAtTillAndReturnReceiptObject(StockPriceList, shoppingList1);

console.log({receipt})