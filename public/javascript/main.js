const ele_basehp = document.querySelector(".basehp");
const ele_bonushp = document.querySelector(".bonushp");
const ele_totalhp = document.querySelector(".totalhp");
const basehp = parseFloat(ele_basehp.textContent);
const bonushp = parseFloat(ele_bonushp.textContent);
const totalhp = basehp + bonushp;
ele_basehp.textContent = basehp;
ele_bonushp.textContent = bonushp;
ele_totalhp.textContent = totalhp;

const ele_damage = document.querySelectorAll(".damage");
for (let i = 0; i < ele_damage.length; i++) {
  const damage = parseFloat(ele_damage[i].textContent);
  console.log(damage);
}