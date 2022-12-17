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

let Cart = JSON.parse(localStorage.getItem("kart"));
if (Cart == null) {
  Cart = [];
}
let showcart = document.getElementById("showcart");
showdata(Cart);
function showdata(data) {
  // showcart
  let cartprice = document.getElementById("cartprice");
  let sum = 0;
  Cart.forEach((element) => {
    sum = sum + element.price * element.quantity;
  });
  cartprice.innerHTML = sum.toFixed(2);

  showcart.innerHTML = null;
  data.forEach((element, index) => {
    let div = document.createElement("div");
    div.setAttribute("class", "flex");
    let image = document.createElement("img");
    image.setAttribute("src", element.img);
    product = document.createElement("a");
    product.setAttribute("href", "login.html");
    product.append(image);
    des = document.createElement("p");
    if (element.des == undefined) {
      des.innerHTML = element.title;
    } else {
      des.innerHTML = element.des;
    }
    des.setAttribute("class", "width");
    let price = document.createElement("p");
    price.innerHTML = element.price;
    let qty = document.createElement("div");
    qty.innerHTML = element.quantity;
    qty.setAttribute("class", "brder");
    let sub = document.createElement("div");
    sub.innerHTML = `${element.price * element.quantity}.00`;
    edit = document.createElement("div");
    btnedit = document.createElement("button");
    btnedit.innerHTML = "-";
    plus = document.createElement("button");
    plus.innerHTML = "+";
    btnremove = document.createElement("button");
    btnremove.innerHTML = "Remove Item";
    edit.append(btnedit, plus, btnremove);
    div.append(product, des, price, qty, sub);
    showcart.append(div, edit);
    // showcart
    let cartprice = document.getElementById("cartprice");
    let sum = 0;
    Cart.forEach((element) => {
      sum = sum + element.price * element.quantity;
    });
    cartprice.innerHTML = sum.toFixed(2);
    plus.addEventListener("click", () => {
      let obj = {};
      obj = { ...element };
      obj.quantity = obj.quantity + 1;
      data.splice(index, 1);
      data.splice(index, 0, obj);
      localStorage.setItem("kart", JSON.stringify(data));
      showdata(data);
    });

    btnedit.addEventListener("click", () => {
      if (element.quantity > 0) {
        let obj = {};
        obj = { ...element };
        obj.quantity = obj.quantity - 1;
        data.splice(index, 1);
        data.splice(index, 0, obj);
        localStorage.setItem("kart", JSON.stringify(data));
        showdata(data);
      }
    });

    btnremove.addEventListener("click", () => {
      data.splice(index, 1);
      localStorage.setItem("kart", JSON.stringify(data));
      showdata(data);
    });
    product.addEventListener("click", () => {
      Cart.push(element);
      localStorage.setItem("productshow", JSON.stringify(Cart));
    });
  });
}

// showcart
// cartprice
let bdy = document.getElementById("body");
let cartprice = document.getElementById("cartprice");
let sum = 0;
Cart.forEach((element) => {
  sum = sum + element.price * element.quantity;
});
cartprice.innerHTML = sum.toFixed(2);
let agian = document.getElementById("agian");
agian.innerHTML = `₹${sum + 45}`;
let sub = document.getElementById("sub");
sub.innerHTML = `₹${sum}`;

// pop
let title = document.getElementById("title");
let PROCEED = document.getElementById("PROCEED");
let opacity = document.getElementById("pop");

// inputcheck
let email = document.getElementById("email");
let name = document.getElementById("name");
let desti = document.getElementById("desti");
let Country = document.getElementById("Country");
let City = document.getElementById("City");
let Code = document.getElementById("Code");
let number = document.getElementById("number");
let state = document.getElementById("state");
PROCEED.addEventListener("click", () => {
  if (
    email.value == "" ||
    name.value == "" ||
    desti.value == "" ||
    Country.value == "" ||
    City.value == "" ||
    Code.value == "" ||
    number.value == "" ||
    state.value == ""
  ) {
    title.innerHTML = "Please Enter a Details";
  } else {
    title.innerHTML = "Your Order has been Placed Succesfully";
  }
  opacity.setAttribute("id", "check");
  let stop = setInterval(() => {
    console.log("fire");
    let countlocal = JSON.parse(localStorage.getItem("count"));
    if (countlocal == null) {
      countlocal = 7;
    }
    bdy.setAttribute("id", "bodypoint");
    let countdom = document.getElementById("countdom");
    countdom.innerHTML = "(" + countlocal + ")";
    countlocal--;
    localStorage.setItem("count", JSON.stringify(countlocal));
    if (countlocal == -2) {
      localStorage.removeItem("count");
      opacity.setAttribute("id", "pop");
      countdom.innerHTML = "";
      bdy.setAttribute("id", "body");
      clearInterval(stop);
    }
    let remover = document.getElementById("remover");
    remover.addEventListener("click", () => {
      opacity.setAttribute("id", "pop");
      bdy.setAttribute("id", "body");
      localStorage.removeItem("count");
      countdom.innerHTML = "";
      clearInterval(stop);
    });
  }, 1000);
  // viewcart
  let button = document.getElementById("button");
  button.addEventListener("click", () => {
    countdom.innerHTML = "";
    bdy.setAttribute("id", "body");
    localStorage.removeItem("count");
    countdom.innerHTML = "";
    clearInterval(stop);
  });
});
let remover = document.getElementById("remover");
remover.addEventListener("click", () => {
  opacity.setAttribute("id", "pop");
});
