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

// fetchData
fetch("filter.json")
  .then((responce) => {
    return responce.json();
  })
  .then((result) => {
    filterdata(result.filter);
  })
  .catch((err) => {
    console.log(err);
  });

let paratitle = document.getElementById("paratitle");
let opacity = document.getElementById("pop");
let cont = document.getElementById("showitem");
let storetype = JSON.parse(localStorage.getItem("type"));
if (storetype == null) {
  storetype = [];
}
let forfilter = [];

let arr = [];
function filterdata(data) {
  let str = storetype[storetype.length - 1];
  arr = data.filter((ele) => {
    if (ele.type == str) {
      return ele;
    }
  });
  forfilter = [...arr];
  showdata(arr);
}
let remover = document.getElementById("remover");
remover.addEventListener("click", () => {
  opacity.setAttribute("id", "pop");
  bdy.setAttribute("id", "body");
});

let select = document.getElementById("filterselect");
select.addEventListener("change", () => {
  let data = [];
  if (select.value == "LTH") {
    forfilter.sort((a, b) => {
      return Number(a.price - b.price);
    });
    showdata(forfilter);
  } else if (select.value == "HTL") {
    forfilter.sort((a, b) => {
      return Number(b.price - a.price);
    });
    showdata(forfilter);
  } else {
    showdata(arr);
  }
});

function showdata(data) {
  cont.innerHTML = null;
  data.forEach((element) => {
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", element.img);
    product = document.createElement("a");
    product.setAttribute("href", "login.html");
    product.append(image);
    let p = document.createElement("p");
    p.innerHTML = element.title;
    let star = document.createElement("i");
    star.setAttribute("class", element.star);
    let one = document.createElement("i");
    one.setAttribute("class", element.star);
    let two = document.createElement("i");
    two.setAttribute("class", element.star);
    let a = document.createElement("i");
    a.setAttribute("class", element.star);
    let b = document.createElement("i");
    b.setAttribute("class", element.star);
    let rupy = document.createElement("span");
    rupy.setAttribute("class", element.rupy);
    let price = document.createElement("span");
    price.innerHTML = element.price;
    let combine = document.createElement("div");
    let dis = document.createElement("span");
    dis.setAttribute("class", "off");
    dis.innerHTML = element.off;
    let btn = document.createElement("button");
    btn.innerHTML = "Add To Cart";
    let heart = document.createElement("i");
    heart.setAttribute("class", element.heart);
    combine.append(rupy, price, dis);
    div.append(product, p, star, one, two, a, b, combine, btn, heart);
    cont.append(div);
    btn.addEventListener("click", () => {
      let flag = true;
      let quan = 0;
      Cart.forEach((elem, index) => {
        if (elem.id == element.id) {
          flag = false;
          quan = elem.quantity + 1;
          Cart.splice(index, 1);
        }
      });

      if (flag == true) {
        let obj = {};
        obj = { ...element, quantity: 1 };
        Cart.push(obj);
        localStorage.setItem("kart", JSON.stringify(Cart));
      } else {
        let obj = {};
        obj = { ...element, quantity: quan };
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
    });
    // productlocalstoreage
    product.addEventListener("click", () => {
      productshow.push(element);
      localStorage.setItem("productshow", JSON.stringify(productshow));
    });
    // pop
    btn.addEventListener("click", () => {
      opacity.setAttribute("id", "check");
      paratitle.innerHTML = `You added ${element.title} to your shopping cart`;
      let stop = setInterval(() => {
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
  });
}

let bdy = document.getElementById("body");

// productshow
let productshow = JSON.parse(localStorage.getItem("productshow"));
if (productshow == null) {
  productshow = [];
}

// navbarfiler
let anchor = document.getElementsByClassName("Tofilter");
for (let i = 0; i < anchor.length; i++) {
  anchor[i].addEventListener("click", () => {
    let help;
    console.log(anchor[i]);
    help = anchor[i].type;
    storetype.push(help);
    localStorage.setItem("type", JSON.stringify(storetype));
  });
}

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
