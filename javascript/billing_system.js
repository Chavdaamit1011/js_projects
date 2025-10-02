var btn = document.getElementById("total")

btn.addEventListener("click",()=>{
    
    var a = document.getElementById("bread").value
    var b = document.getElementById("rice").value
    var c = document.getElementById("beans").value
    var d = document.getElementById("wine").value
    var e = document.getElementById("milk").value
    var totalcostitem = Number(a)+Number(b)+Number(c)+Number(d)+Number(e)
    document.getElementById("totalcostitem").value = totalcostitem;
    
    var breadans = a * 50
    var riceans = b * 45
    var beansans = c * 90
    var wineans = d * 74
    var milkans = e * 66
    var totalcostans = Number(breadans)+Number(riceans)+Number(beansans)+Number(wineans)+Number(milkans)

    document.getElementById("breadans").textContent = "₹" + breadans;
    document.getElementById("riceans").textContent = "₹" + riceans;
    document.getElementById("beansans").textContent = "₹" + beansans;
    document.getElementById("wineans").textContent = "₹" + wineans;
    document.getElementById("milkans").textContent = "₹" + milkans;
    document.getElementById("totalcostans").textContent = "₹" + totalcostans;
    
    
    document.getElementById("breaditems").textContent = a;
    document.getElementById("breadcost").textContent = breadans;

     document.getElementById("Riceitems").textContent = b;
    document.getElementById("Ricecost").textContent = riceans;

     document.getElementById("beansitems").textContent = c;
    document.getElementById("beanscost").textContent = beansans;

     document.getElementById("Wineitems").textContent = d;
    document.getElementById("Winecost").textContent = wineans;

     document.getElementById("Milkitems").textContent = e;
    document.getElementById("Milkcost").textContent = milkans;
    

    
})