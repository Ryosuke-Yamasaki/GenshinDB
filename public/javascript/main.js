const ele_basehp = document.querySelector(".basehp");
const ele_bonushp = document.querySelector(".bonushp");
const ele_totalhp = document.querySelector(".totalhp");
const basehp = parseFloat(ele_basehp.textContent);
const bonushp = parseFloat(ele_bonushp.textContent);
const totalhp = basehp + bonushp;
ele_basehp.textContent = basehp;
ele_bonushp.textContent = bonushp;
ele_totalhp.textContent = totalhp;

const ele_a = document.querySelectorAll(".normal");
for (let i = 0; i < ele_a.length; i++) {
  const a = parseFloat(ele_a[i].textContent);
  console.log(a + 1);
}