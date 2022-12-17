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

// scroll functionality
let second = document.getElementById("secod-div");
let image = document.createElement("img");
image.setAttribute(
  "src",
  "https://www.beautybebo.com/pub/media/ads/home-slider/Slider_banner_1-min.jpg"
);
second.append(image);
let arr = [
  "https://www.beautybebo.com/pub/media/ads/home-slider/Slider_banner_1-min.jpg",
  "https://www.beautybebo.com/pub/media/ads/home-slider/Mamaearth_banner_1-min.jpg",
  "https://www.beautybebo.com/pub/media/ads/home-slider/Ponds_Forent_Banner_6-min.jpg",
  "https://www.beautybebo.com/pub/media/ads/home-slider/Slider_banner_1-min.jpg",
  "https://www.beautybebo.com/pub/media/ads/home-slider/Mamaearth_banner_1-min.jpg",
  "https://www.beautybebo.com/pub/media/ads/home-slider/Ponds_Forent_Banner_6-min.jpg",
  "https://www.beautybebo.com/pub/media/ads/home-slider/Slider_banner_1-min.jpg",
  "https://www.beautybebo.com/pub/media/ads/home-slider/Mamaearth_banner_1-min.jpg",
  "https://www.beautybebo.com/pub/media/ads/home-slider/Ponds_Forent_Banner_6-min.jpg",
  "https://www.beautybebo.com/pub/media/ads/home-slider/Ponds_Forent_Banner_6-min.jpg",
];

// sevenfiximages
fetch("home.json")
  .then((res) => {
    return res.json();
  })
  .then((rsponce) => {
    showdata(rsponce.sevenfiximage);
  })
  .catch((err) => {
    console.log(err);
  });

let seven = document.getElementById("seven");

let localtype = JSON.parse(localStorage.getItem("type"));
if (localtype == null) {
  localtype = [];
}

function showdata(data) {
  seven.innerHTML = null;
  data.forEach((element) => {
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", element.img);
    let a = document.createElement("a");
    a.setAttribute("href", "filter.html");
    a.setAttribute("type", element.name);
    a.append(image);
    let p = document.createElement("p");
    p.innerHTML = element.name;
    div.append(a, p);
    seven.append(div);
    a.addEventListener("click", () => {
      let help;
      help = a.type;
      localtype.push(help);
      localStorage.setItem("type", JSON.stringify(localtype));
    });
  });
}

// navbarfiler
let anchor = document.getElementsByClassName("Tofilter");
for (let i = 0; i < anchor.length; i++) {
  anchor[i].addEventListener("click", () => {
    let help;
    help = anchor[i].type;
    localtype.push(help);
    localStorage.setItem("type", JSON.stringify(localtype));
  });
}

// fourstickimages
let four = document.getElementById("four");
fetch("home.json")
  .then((res) => {
    return res.json();
  })
  .then((rsponce) => {
    showfour(rsponce.homepage);
  })
  .catch((err) => {
    console.log(err);
  });

function showfour(data) {
  four.innerHTML = null;
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
    four.append(div);
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
  });

  // leaveone
  let leave = document.getElementById("leavespace");
  fetch("home.json")
    .then((res) => {
      return res.json();
    })
    .then((rsponce) => {
      leavefour(rsponce.done);
    })
    .catch((err) => {
      console.log(err);
    });

  function leavefour(data) {
    leave.innerHTML = null;
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
      leave.append(div);
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
          // console.log("fire");
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

    // threcontainer
    fetch("home.json")
      .then((res) => {
        return res.json();
      })
      .then((rsponce) => {
        showthree(rsponce.threecontainer);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  let bdy = document.getElementById("body");
  let paratitle = document.getElementById("paratitle");
  let Cart = JSON.parse(localStorage.getItem("kart"));
  if (Cart == null) {
    Cart = [];
  }

  let productshow = JSON.parse(localStorage.getItem("productshow"));
  if (productshow == null) {
    productshow = [];
  }
  let three = document.getElementById("lastthreeimg");
  function showthree(data) {
    three.innerHTML = null;
    data.forEach((element) => {
      let div = document.createElement("div");
      let des = document.createElement("p");
      des.innerHTML = element.des;
      let rupy = document.createElement("i");
      rupy.setAttribute("class", "fa-sharp fa-solid fa-indian-rupee-sign grey");
      let rupys = document.createElement("i");
      rupys.setAttribute(
        "class",
        "fa-sharp fa-solid fa-indian-rupee-sign orange"
      );
      let old = document.createElement("span");
      old.setAttribute("class", "line");
      let price = document.createElement("span");
      price.setAttribute("class", "orange");
      let off = document.createElement("span");
      off.setAttribute("class", "green");
      off.innerHTML = element.off;
      price.innerHTML = element.price;
      old.innerHTML = element.old;
      let heart = document.createElement("i");
      let br = document.createElement("br");
      let btn = document.createElement("button");
      btn.innerHTML = "Add To Cart";
      heart.setAttribute("class", "fa-sharp fa-solid fa-heart");
      div.append(des, rupy, old, rupys, price, off, br, btn, heart);
      let second = document.createElement("div");
      second.setAttribute("class", "secondiv");
      let image = document.createElement("img");
      image.setAttribute("src", element.img);
      let product = document.createElement("a");
      product.setAttribute("href", "login.html");
      product.append(image);
      second.append(product, div);
      three.append(second);
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
        paratitle.innerHTML = `You added ${element.des} to your shopping cart`;
        // counton popup
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
  // cartprice
  // cartprice
  let cartprice = document.getElementById("cartprice");
  let sum = 0;
  Cart.forEach((element) => {
    sum = sum + element.price * element.quantity;
  });
  cartprice.innerHTML = sum.toFixed(2);
  // para
  let para = document.getElementById("para");
  fetch("home.json")
    .then((res) => {
      return res.json();
    })
    .then((rsponce) => {
      showpara(rsponce.lastpara);
    })
    .catch((err) => {
      console.log(err);
    });
  function showpara(obj) {
    a = document.createElement("h4");
    a.innerHTML = obj.header;
    b = document.createElement("p");
    b.innerHTML = obj.b;
    h3 = document.createElement("h4");
    h3.innerHTML = obj.face;
    c = document.createElement("p");
    c.innerHTML = obj.c;
    d = document.createElement("p");
    d.innerHTML = obj.d;
    apply = document.createElement("h4");
    apply.innerHTML = obj.apply;
    e = document.createElement("p");
    e.innerHTML = obj.e;
    f = document.createElement("p");
    f.innerHTML = obj.f;
    makup = document.createElement("h4");
    makup.innerHTML = obj.makup;
    g = document.createElement("p");
    g.innerHTML = obj.g;
    eye = document.createElement("h4");
    eye.innerHTML = obj.eye;
    h = document.createElement("p");
    h.innerHTML = obj.h;
    i = document.createElement("p");
    i.innerHTML = obj.i;
    lips = document.createElement("h4");
    lips.innerHTML = obj.lips;
    j = document.createElement("p");
    j.innerHTML = obj.j;
    bottom = document.createElement("h4");
    bottom.innerHTML = obj.bottom;
    bottom = document.createElement("p");
    bottom.innerHTML = obj.bottom;
    para.append(h, a, b, h3, c, d, apply, e, f, makup, g, eye, h, i, lips, j);
  }
}
// pop

let PROCEED = document.getElementById("PROCEED");
let opacity = document.getElementById("pop");
// PROCEED.addEventListener("click", () => {
//   opacity.setAttribute("id", "check");
//   console.log(opacity);
// });
let remover = document.getElementById("remover");
remover.addEventListener("click", () => {
  opacity.setAttribute("id", "pop");
});

// let filter = document.getElementById("filter");
// filter.addEventListener("change", () => {
//   localtype.push(filter.value);
//   localStorage.setItem("type", JSON.stringify(localtype));
// });
