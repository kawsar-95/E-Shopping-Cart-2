function handleProductChange(product, isIncrease) {
  const productInput = document.getElementById(product + "-count");
  const productCount = parseInt(productInput.value);

  let productNewCount = productCount;
  if (isIncrease == true) {
    productNewCount = productCount + 1;
  }
  if (isIncrease == false && productCount > 0) {
    productNewCount = productCount - 1;
  }
  productInput.value = productNewCount;
  let productTotal = 0;
  if (product == "phone") {
    productTotal = productNewCount * 1219;
  }
  if (product == "case") {
    productTotal = productNewCount * 59;
  }

  document.getElementById(product + "-total").innerText = productTotal;
}

// Case Button

// document.getElementById("case-increase").addEventListener("click", function () {
//   // console.log("clicked plus button");
//   const caseInput = document.getElementById("case-count");
//   const caseCount = parseInt(caseInput.value);
//   // console.log(caseCount);
//   const caseNewCount = caseCount + 1;
//   caseInput.value = caseNewCount;
//   const caseTotal = caseNewCount * 59;
//   document.getElementById("case-total").innerText = caseTotal;
// });
// document.getElementById("case-decrease").addEventListener("click", function () {
//   // console.log("reduce-case");
//   const caseInput = document.getElementById("case-count");
//   const caseCount = parseInt(caseInput.value);
//   const caseNewCount = caseCount - 1;
//   caseInput.value = caseNewCount;
//   const caseTotal = caseNewCount * 59;
//   document.getElementById("case-total").innerText = caseTotal;
// });

// Phone Button

// document
//   .getElementById("phone-increase")
//   .addEventListener("click", function () {
//     // console.log("clicked plus button");
//     const phoneInput = document.getElementById("phone-count");
//     const phoneCount = parseInt(phoneInput.value);
//     // console.log(phoneCount);
//     const phoneNewCount = phoneCount + 1;
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById("phone-total").innerText = phoneTotal;
//   });
// document
//   .getElementById("phone-decrease")
//   .addEventListener("click", function () {
//     // console.log("reduce-case");
//     const phoneInput = document.getElementById("phone-count");
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount - 1;
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById("phone-total").innerText = phoneTotal;
//   });
