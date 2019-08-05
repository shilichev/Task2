document.getElementById("buttomHoris").style.display = "none";
const handleChangePosition1 = () => {
  const blocks = document.getElementsByClassName("block1");
  console.log(blocks);
  Array.from(blocks).forEach(element => {
    console.log(element);
    element.classList.toggle("block1");
    element.classList.toggle("block2");
    element.classList.toggle("block1");
  });
  const middle = document.getElementById("middle");
  middle.classList.toggle("middle");
  middle.classList.toggle("middle2");
  const available = document.getElementsByClassName("availableColors");
  Array.from(available).forEach(available1 => {
    console.log(available1);
    available1.classList.toggle("availableColors");
    available1.classList.toggle("availableColors1");
  });
  const product = document.getElementsByClassName("productName");
  Array.from(product).forEach(product1 => {
    console.log(product1);
    product1.classList.toggle("productName");
    product1.classList.toggle("productName1");
    product1.classList.toggle("productName");
  });
  const img = document.getElementsByClassName("imgModel");
  Array.from(img).forEach(img1 => {
    console.log(img1);
    img1.classList.toggle("imgModel");
    img1.classList.toggle("imgModel1");
    img1.classList.toggle("imgModel");
  });
  const price = document.getElementsByClassName("price");
  Array.from(price).forEach(price1 => {
    console.log(price1);
    price1.classList.toggle("price");
    price1.classList.toggle("price1");
    price1.classList.toggle("price");
  });
  const discount = document.getElementsByClassName("discount");
  Array.from(discount).forEach(discount1 => {
    console.log(discount1);
    discount1.classList.toggle("discount");
    discount1.classList.toggle("discount1");
    discount1.classList.toggle("discount");
  });
  const stars = document.getElementsByClassName("stars");
  Array.from(stars).forEach(stars1 => {
    console.log(stars1);
    stars1.classList.toggle("stars");
    stars1.classList.toggle("stars1");
    stars1.classList.toggle("stars");
  });
  document.getElementById("buttomVert").style.display = "none";
  document.getElementById("buttomHoris").style.display = "block";

};
const handleChangePosition2 = () => {
  const blocks = document.getElementsByClassName("block1");
  console.log(blocks);
  Array.from(blocks).forEach(element => {
    console.log(element);
    element.classList.toggle("block1");
    element.classList.toggle("block2");
    element.classList.toggle("block1");
  });
  const middle = document.getElementById("middle");
  middle.classList.toggle("middle");
  middle.classList.toggle("middle2");
  const available = document.getElementsByClassName("availableColors");
  
  Array.from(available).forEach(available1 => {
    console.log(available1);
    available1.classList.toggle("availableColors");
    available1.classList.toggle("availableColors1");
  });
  const product = document.getElementsByClassName("productName");
  Array.from(product).forEach(product1 => {
    console.log(product1);
    product1.classList.toggle("productName");
    product1.classList.toggle("productName1");
    product1.classList.toggle("productName");
  });
  const img = document.getElementsByClassName("imgModel");
  Array.from(img).forEach(img1 => {
    console.log(img1);
    img1.classList.toggle("imgModel");
    img1.classList.toggle("imgModel1");
    img1.classList.toggle("imgModel");
  });
  const price = document.getElementsByClassName("price");
  Array.from(price).forEach(price1 => {
    console.log(price1);
    price1.classList.toggle("price");
    price1.classList.toggle("price1");
    price1.classList.toggle("price");
  });
  const discount = document.getElementsByClassName("discount");
  Array.from(discount).forEach(discount1 => {
    console.log(discount1);
    discount1.classList.toggle("discount");
    discount1.classList.toggle("discount1");
    discount1.classList.toggle("discount");
  });
  const stars = document.getElementsByClassName("stars");
  Array.from(stars).forEach(stars1 => {
    console.log(stars1);
    stars1.classList.toggle("stars");
    stars1.classList.toggle("stars1");
    stars1.classList.toggle("stars");
  }); 
  document.getElementById("buttomHoris").style.display = "none";
  document.getElementById("buttomVert").style.display = "block";
};

