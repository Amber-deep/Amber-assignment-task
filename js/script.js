fetch("https://dummyjson.com/products/")
    .then((response) => response.json())
    .then((data) => console.log(data));

getdata("https://dummyjson.com/products/");

const userName = document.querySelector("#searchbar");
let userArr = [];
async function getdata(file) {
    await fetch(file)
        .then((response) => response.json())
        .then((response) => {
            const setdata = response.products;
            console.log(setdata);
            for (let i = 0; i < setdata.length; i++) {
                let column = document.createElement("div");
                // console.log(column);
                column.className = "col-md-3 my-4 " + "upnew" + i + " ";
                document.getElementsByClassName("row")[0].appendChild(column);
                const imgs = new Image(); // width, height
                imgs.className = "w-100 " + "height-img";
                imgs.src = setdata[i].thumbnail;
                
                document.getElementsByClassName("upnew" + i)[0].appendChild(imgs);

                let img = document.createElement("p");
                img.className = "card-img-top" + " fw-bold mb-0 mt-3";
                const imgNode = document.createTextNode(setdata[i].title);
                img.appendChild(imgNode);

                let description = document.createElement("p");
                description.className = "card-text"+" "+"for-star";
                const des = document.createTextNode(setdata[i].description);
                description.appendChild(des);

                let starr = document.createElement("input");
                starr.className = "rating";
                starr.max = "5";
                starr.readOnly
                let ranking = setdata[i].rating;
                console.log(ranking)
                starr.step = "0.01";
                starr.style = `--value:${ranking}`;
                starr.type = "range";
                
                let price = document.createElement("p");
                price.className = "card-img-top"+" "+"pt-2";
                const priceNode = document.createTextNode("$" + setdata[i].price);
                price.appendChild(priceNode);

                let btn = document.createElement("button");
                btn.className = "btn btn-primary";
                const buyNow = document.createTextNode("Buy Now");
                btn.appendChild(buyNow);

                document.getElementsByClassName("upnew" + i)[0].appendChild(img);
                document.getElementsByClassName("upnew" + i)[0].appendChild(description);
                document.getElementsByClassName("upnew" + i)[0].appendChild(starr);
                document.getElementsByClassName("upnew" + i)[0].appendChild(price);
                document.getElementsByClassName("upnew" + i)[0].appendChild(btn);

                userName.addEventListener("input", (e) => {
                    const val = e.target.value;
                    userArr.push(setdata[i].title);
                    console.log(val);
                    userArr.map((curEle) => {
                        curEle.toLowerCase().includes(val.toLowerCase()) ? 
                        document.getElementsByClassName("upnew" + i)[0].classList.remove("hide")
                         : document.getElementsByClassName("upnew" + i)[0].classList.add("hide");
                    });
                });
            }
        });
    
}
