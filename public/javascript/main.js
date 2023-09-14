//HP
const ele_baseHP = document.querySelector(".base-hp");
const ele_bonusHP = document.querySelector(".bonus-hp");
const ele_totalHP = document.querySelector(".total-hp");
const baseHP = parseFloat(ele_baseHP.textContent);
const bonusHP = parseFloat(ele_bonusHP.textContent);
const totalHP = baseHP + bonusHP;
ele_baseHP.textContent = baseHP;
ele_bonusHP.textContent = bonusHP;
ele_totalHP.textContent = totalHP;


//ATK
const ele_baseATK = document.querySelector(".base-atk");
const ele_bonusATK = document.querySelector(".bonus-atk");
const ele_totalATK = document.querySelector(".total-atk");
const baseATK = parseFloat(ele_baseATK.textContent);
const bonusATK = parseFloat(ele_bonusATK.textContent);
const totalATK = baseATK + bonusATK;
ele_baseATK.textContent = baseATK;
ele_bonusATK.textContent = bonusATK;
ele_totalATK.textContent = totalATK;


//DEF
const ele_baseDEF = document.querySelector(".base-def");
const ele_bonusDEF = document.querySelector(".bonus-def");
const ele_totalDEF = document.querySelector(".total-def");
const baseDEF = parseFloat(ele_baseDEF.textContent);
const bonusDEF = parseFloat(ele_bonusDEF.textContent);
const totalDEF = baseDEF + bonusDEF;
ele_baseDEF.textContent = baseDEF;
ele_bonusDEF.textContent = bonusDEF;
ele_totalDEF.textContent = totalDEF;


//EM
const ele_baseEM = document.querySelector(".base-em");
const ele_bonusEM = document.querySelector(".bonus-em");
const ele_totalEM = document.querySelector(".total-em");
const baseEM = parseFloat(ele_baseEM.textContent);
const bonusEM = parseFloat(ele_bonusEM.textContent);
const totalEM = baseEM + bonusEM;
ele_baseEM.textContent = baseEM;
ele_bonusEM.textContent = bonusEM;
ele_totalEM.textContent = totalEM;


//ER
const ele_baseER = document.querySelector(".base-er");
const ele_bonusER = document.querySelector(".bonus-er");
const ele_totalER = document.querySelector(".total-er");
const baseER = parseFloat(ele_baseER.textContent);
const bonusER = parseFloat(ele_bonusER.textContent);
const totalER = baseER + bonusER;
ele_baseER.textContent = baseER;
ele_bonusER.textContent = bonusER;
ele_totalER.textContent = totalER;


//CR
const ele_baseCR = document.querySelector(".base-cr");
const ele_bonusCR = document.querySelector(".bonus-cr");
const ele_totalCR = document.querySelector(".total-cr");
const baseCR = parseFloat(ele_baseCR.textContent);
const bonusCR = parseFloat(ele_bonusCR.textContent);
const totalCR = baseCR + bonusCR;
ele_baseCR.textContent = baseCR;
ele_bonusCR.textContent = bonusCR;
ele_totalCR.textContent = totalCR;


//CD
const ele_baseCD = document.querySelector(".base-cd");
const ele_bonusCD = document.querySelector(".bonus-cd");
const ele_totalCD = document.querySelector(".total-cd");
const baseCD = parseFloat(ele_baseCD.textContent);
const bonusCD = parseFloat(ele_bonusCD.textContent);
const totalCD = baseCD + bonusCD;
ele_baseCD.textContent = baseCD;
ele_bonusCD.textContent = bonusCD;
ele_totalCD.textContent = totalCD;


//各ステータスの宣言
const pyro_db = 0;
const hydro_db = 0;
const cryo_db = 0;
const electro_db = 0;
const anemo_db = 0;
const geo_db = 0;
const dendro_db = 0;
const physical_db = 0;



//攻撃倍率
const ele_damage = document.querySelectorAll(".damage");
for (let i = 0; i < ele_damage.length; i++) {
  const damage = parseFloat(ele_damage[i].textContent);
}


//localstorageに保存
function save_restore1_checkbox(target_class) {
  let cbstate;

  window.addEventListener('load', function () {
    cbstate = JSON.parse(localStorage['CBState'] || '{}');

    for (let key in cbstate) {
      let el_lst = document.querySelectorAll('input[data-savekey="' + key + '"].' + target_class);
      set_checkbox_checked_all(el_lst, true);
    }

    let cb = document.getElementsByClassName(target_class);

    for (let c = 0; c < cb.length; c++) {
      cb[c].addEventListener('click', function (evt) {
        let savekey = this.getAttribute('data-savekey');
        if (this.checked) {
          cbstate[savekey] = true;
        }
        else if (cbstate[savekey]) {
          delete cbstate[savekey];
        }
        localStorage['CBState'] = JSON.stringify(cbstate);
      });
    }
  });

  function set_checkbox_checked_all(el_lst, checked) {
    for (let c = 0; c < el_lst.length; c++) {
      let el = el_lst[c];
      if (el) {
        el.checked = checked;
      }
    }
  }
}
save_restore1_checkbox('save-state1');

function save_restore3_select(target_class) {
  let ddstate;

  window.addEventListener('load', function () {
    ddstate = JSON.parse(localStorage['DDState'] || '{}');
    for (let key in ddstate) {
      let value = ddstate[key];
      let el_lst = document.querySelectorAll('select[data-savekey="' + key + '"].' + target_class);
      set_select_selectindex_all(el_lst, value);
    }

    let dd = document.getElementsByClassName(target_class);

    for (let c = 0; c < dd.length; c++) {
      dd[c].addEventListener('change', function (evt) {
        let savekey = this.getAttribute('data-savekey');
        let selectElement = evt.target;
        let selectindex = selectElement.selectedIndex;
        ddstate[savekey] = selectindex;
        localStorage['DDState'] = JSON.stringify(ddstate);
      });
    }
  });

  function set_select_selectindex_all(el_lst, selectindex) {

    for (let c = 0; c < el_lst.length; c++) {
      let el = el_lst[c];
      if (el) {
        el.selectedIndex = selectindex;
      }
    }
  }
}
save_restore3_select('save-state3');


//命ノ星座の凸数選択
let constellation_6 = document.querySelector(".C6");

let constellation_list = document.querySelectorAll(".constellation");


constellation_6.addEventListener('change', change_6);


function change_6() {
  if (constellation_6.checked) {
    for (let i in constellation_list) {
      if (constellation_list.hasOwnProperty(i)) {
        constellation_list[i].checked = true;
      }
    }
  } else {
    for (let i in constellation_list) {
      if (constellation_list.hasOwnProperty(i)) {
        constellation_list[i].checked = false;
      }
    }
  }
};