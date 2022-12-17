let show = document.getElementById("makupshow");
let grid = document.getElementById("makup");
show.addEventListener("mouseover", () => {
  grid.style.display = "grid";
});
show.addEventListener("mouseleave", () => {
  grid.style.display = "none";
});
grid.addEventListener("mouseover", () => {
  grid.style.display = "grid";
});
grid.addEventListener("mouseleave", () => {
  grid.style.display = "none";
});

// skin section

let gridSkin = document.getElementById("Skin");
let showskin = document.getElementById("showskin");
showskin.addEventListener("mouseover", () => {
  gridSkin.style.display = "grid";
});
showskin.addEventListener("mouseleave", () => {
  gridSkin.style.display = "none";
});
gridSkin.addEventListener("mouseover", () => {
  gridSkin.style.display = "grid";
});
gridSkin.addEventListener("mouseleave", () => {
  gridSkin.style.display = "none";
});

// hair section
let childhair = document.getElementById("hair");
let showhair = document.getElementById("showhair");
showhair.addEventListener("mouseover", () => {
  childhair.style.display = "grid";
});
showhair.addEventListener("mouseleave", () => {
  childhair.style.display = "none";
});
childhair.addEventListener("mouseover", () => {
  childhair.style.display = "grid";
});
childhair.addEventListener("mouseleave", () => {
  childhair.style.display = "none";
});

// care section
let childcare = document.getElementById("care");
let parentcare = document.getElementById("showcare");
parentcare.addEventListener("mouseover", () => {
  childcare.style.display = "grid";
});
parentcare.addEventListener("mouseleave", () => {
  childcare.style.display = "none";
});
childcare.addEventListener("mouseover", () => {
  childcare.style.display = "grid";
});
childcare.addEventListener("mouseleave", () => {
  childcare.style.display = "none";
});

// M&B section
let childMoms = document.getElementById("Moms");
let MB = document.getElementById("M&B");
MB.addEventListener("mouseover", () => {
  childMoms.style.display = "grid";
});
MB.addEventListener("mouseleave", () => {
  childMoms.style.display = "none";
});
childMoms.addEventListener("mouseover", () => {
  childMoms.style.display = "grid";
});
childMoms.addEventListener("mouseleave", () => {
  childMoms.style.display = "none";
});
// ayrveda
let childayur = document.getElementById("childayur");
let parentAyur = document.getElementById("Ayur");
parentAyur.addEventListener("mouseover", () => {
  childayur.style.display = "grid";
});
parentAyur.addEventListener("mouseleave", () => {
  childayur.style.display = "none";
});
childayur.addEventListener("mouseover", () => {
  childayur.style.display = "grid";
});
childayur.addEventListener("mouseleave", () => {
  childayur.style.display = "none";
});
// chidfreg section
let chidfreg = document.getElementById("chidfreg");
let freg = document.getElementById("freg");
freg.addEventListener("mouseover", () => {
  chidfreg.style.display = "grid";
});
freg.addEventListener("mouseleave", () => {
  chidfreg.style.display = "none";
});
chidfreg.addEventListener("mouseover", () => {
  chidfreg.style.display = "grid";
});
chidfreg.addEventListener("mouseleave", () => {
  chidfreg.style.display = "none";
});
// brand section
let brand = document.getElementById("brand");
let childbrand = document.getElementById("childbrand");
brand.addEventListener("mouseover", () => {
  childbrand.style.display = "grid";
});
brand.addEventListener("mouseleave", () => {
  childbrand.style.display = "none";
});
childbrand.addEventListener("mouseover", () => {
  childbrand.style.display = "grid";
});
childbrand.addEventListener("mouseleave", () => {
  childbrand.style.display = "none";
});

// cartprice

let Cart = JSON.parse(localStorage.getItem("kart"));
if (Cart == null) {
  Cart = [];
}
// cartprice
let cartprice = document.getElementById("cartprice");
let sum = 0;
Cart.forEach((element) => {
  sum = sum + element.price * element.quantity;
});
cartprice.innerHTML = sum.toFixed(2);

// showproduct
let getid = document.getElementById("getid");
let product = JSON.parse(localStorage.getItem("productshow"));
if (product == null) {
  product = [];
}
showone(product);
function showone(array) {
  getid.innerHTML = null;
  for (let i = array.length - 1; i < array.length; i++) {
    let image = document.createElement("img");
    image.setAttribute("src", array[i].img);
    getid.append(image);
  }
}

// showlast

// showcart
let localCart = JSON.parse(localStorage.getItem("kart"));
if (localCart == null) {
  localCart = [];
}

let pricedetails = document.getElementById("price");
let lastid = document.getElementById("last");
function showlast(array) {
  lastid.innerHTML = null;
  for (let i = array.length - 1; i < array.length; i++) {
    console.log(array[i]);
    let des = document.createElement("h4");
    if (array[i].des != undefined) {
      des.innerHTML = array[i].des;
    } else {
      des.innerHTML = array[i].title;
    }
    let star = document.createElement("i");
    star.setAttribute("class", "fas fa-star");
    let a = document.createElement("i");
    a.setAttribute("class", "fas fa-star");
    let b = document.createElement("i");
    b.setAttribute("class", "fas fa-star");
    let c = document.createElement("i");
    c.setAttribute("class", "fas fa-star");
    let d = document.createElement("i");
    d.setAttribute("class", "fas fa-star");
    let stock = document.createElement("p");
    stock.innerHTML = "In Stock";
    let sku = document.createElement("p");
    sku.innerHTML = "SKU  BBJ0004084";
    let price = document.createElement("div");
    price.innerHTML = `₹${array[i].price}`;
    pricedetails.innerHTML = array[i].price;
    price.setAttribute("class", "price");
    let tax = document.createElement("p");
    tax.innerHTML = "(Inclusive of all taxes)";
    let brand = document.createElement("p");
    brand.innerHTML = "Brand: Miss Claire";
    let btn = document.createElement("button");
    btn.innerHTML = "Add To Cart";
    let gen = document.createElement("span");
    gen.setAttribute("class", "samecss");
    gen.innerHTML = "100% GENUINE PRODUCT";
    let retur = document.createElement("span");
    retur.setAttribute("class", "samecss");
    retur.innerHTML = "EASY RETURN POLICY";
    lastid.append(
      des,
      star,
      a,
      b,
      c,
      d,
      stock,
      sku,
      price,
      tax,
      brand,
      btn,
      gen,
      retur
    );
    btn.addEventListener("click", () => {
      // cartchecker
      let flag = true;
      let quan = 0;
      Cart.forEach((elem, index) => {
        if (elem.id == array[i].id) {
          flag = false;
          quan = elem.quantity + 1;
          Cart.splice(index, 1);
        }
      });

      if (flag == true) {
        let obj = {};
        obj = { ...array[i], quantity: 1 };
        Cart.push(obj);
        localStorage.setItem("kart", JSON.stringify(Cart));
      } else {
        let obj = {};
        obj = { ...array[i], quantity: quan };
        Cart.push(obj);
        localStorage.setItem("kart", JSON.stringify(Cart));
      }
      // cartprice
      let cartprice = document.getElementById("cartprice");
      let sum = 0;
      Cart.forEach((element) => {
        sum = sum + element.price * element.quantity;
      });
      cartprice.innerHTML = sum.toFixed(2);

      // opacitychanger
      opacity.setAttribute("id", "check");
      let checker;
      if (array[i].des != undefined) {
        checker = array[i].des;
      } else {
        checker = array[i].title;
      }
      paratitle.innerHTML = `You added ${checker} to your shopping cart`;
    });
  }
}
showlast(product);
let opacity = document.getElementById("pop");
let remover = document.getElementById("remover");
remover.addEventListener("click", () => {
  opacity.setAttribute("id", "pop");
});
