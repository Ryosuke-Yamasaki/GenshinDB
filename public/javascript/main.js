//各ステータスの宣言
let hp = [];
let atk = [];
let def = [];
let em = [];
let er = [];
let cr = [];
let cd = [];
let pyro_db = [];
let hydro_db = [];
let cryo_db = [];
let electro_db = [];
let anemo_db = [];
let geo_db = [];
let dendro_db = [];
let physical_db = [];


//攻撃倍率
const ele_damage = document.querySelectorAll(".damage");
for (let i = 0; i < ele_damage.length; i++) {
  const damage = parseFloat(ele_damage[i].textContent);
}


//localstorageに保存
function save_restore1_checkbox(target_class) {
  let cbstate;

  window.addEventListener('DOMContentLoaded', function () {
    cbstate = JSON.parse(localStorage['CBState'] || '{}');

    for (let key in cbstate) {
      let el_lst = document.querySelectorAll('input[data-savekey="' + key + '"].' + target_class);
      set_checkbox_checked_all(el_lst, true);
    }

    let cb = document.getElementsByClassName(target_class);

    for (let c = 0; c < cb.length; c++) {
      cb[c].addEventListener('change', function (evt) {
        let savekey = this.getAttribute('data-savekey');
        if (this.checked) {
          if (savekey == "constellation-0") {
            cbstate[savekey] = true;
            for (let i = 1; i < 7; i++) {
              delete cbstate['constellation-' + i];
            }
          } else if (savekey.indexOf("constellation-") != -1) {
            delete cbstate["constellation-0"];
            let conkey = this.getAttribute('constellation-key');
            for (let i = conkey; i > 0; i--) {
              cbstate['constellation-' + i] = true;
            }
          } else {
            cbstate[savekey] = true;
          }
        } else if (cbstate[savekey]) {
          if (savekey.indexOf("constellation-") != -1) {
            let conkey = this.getAttribute('constellation-key');
            for (let i = conkey; i < 7; i++) {
              delete cbstate['constellation-' + i];
            }
          } else {
            delete cbstate[savekey];
          }
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

function save_restore2_inputtext(target_class) {
  var tbstate;

  window.addEventListener('DOMContentLoaded', function () {
    tbstate = JSON.parse(localStorage['TBState'] || '{}');
    for (var key in tbstate) {
      var value = tbstate[key];
      var el_lst = document.querySelectorAll('input[data-savekey="' + key + '"].' + target_class);
      set_textbox_string_all(el_lst, value);
    }
    var tb = document.getElementsByClassName(target_class);
    for (var c = 0; c < tb.length; c++) {
      tb[c].addEventListener('input', function (evt) {
        var savekey = this.getAttribute('data-savekey');
        tbstate[savekey] = this.value;
        localStorage['TBState'] = JSON.stringify(tbstate);
      });
    }
  });

  function set_textbox_string_all(el_lst, value) {
    for (var c = 0; c < el_lst.length; c++) {
      var el = el_lst[c];
      if (el) {
        el.value = value;
      }
    }
  }
}
save_restore2_inputtext('save-state2');

function save_restore3_select(target_class) {
  let ddstate;

  window.addEventListener('DOMContentLoaded', function () {
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
let constellation_0 = document.querySelector(".C0");
let constellation_1 = document.querySelector(".C1");
let constellation_2 = document.querySelector(".C2");
let constellation_3 = document.querySelector(".C3");
let constellation_4 = document.querySelector(".C4");
let constellation_5 = document.querySelector(".C5");
let constellation_6 = document.querySelector(".C6");

constellation_0.onchange = function () {
  constellation_1.checked = false;
  constellation_2.checked = false;
  constellation_3.checked = false;
  constellation_4.checked = false;
  constellation_5.checked = false;
  constellation_6.checked = false;
}
constellation_1.onchange = function () {
  constellation_0.checked = false;
  constellation_2.checked = false;
  constellation_3.checked = false;
  constellation_4.checked = false;
  constellation_5.checked = false;
  constellation_6.checked = false;
}

constellation_2.onchange = function () {
  constellation_0.checked = false;
  constellation_1.checked = true;
  constellation_3.checked = false;
  constellation_4.checked = false;
  constellation_5.checked = false;
  constellation_6.checked = false;
}

constellation_3.onchange = function () {
  constellation_0.checked = false;
  constellation_1.checked = true;
  constellation_2.checked = true;
  constellation_4.checked = false;
  constellation_5.checked = false;
  constellation_6.checked = false;
}
constellation_4.onchange = function () {
  constellation_0.checked = false;
  constellation_1.checked = true;
  constellation_2.checked = true;
  constellation_3.checked = true;
  constellation_5.checked = false;
  constellation_6.checked = false;
}
constellation_5.onchange = function () {
  constellation_0.checked = false;
  constellation_1.checked = true;
  constellation_2.checked = true;
  constellation_3.checked = true;
  constellation_4.checked = true;
  constellation_6.checked = false;
}
constellation_6.onchange = function () {
  constellation_0.checked = false;
  constellation_1.checked = true;
  constellation_2.checked = true;
  constellation_3.checked = true;
  constellation_4.checked = true;
  constellation_5.checked = true;
}

//聖遺物の表示
window.addEventListener('DOMContentLoaded', function () {
  //メインオプションの表示
  let mainOP = document.querySelectorAll("select.mainop");
  for (let i = 0; i < mainOP.length; i++) {
    mainOP[i].addEventListener('change', function () {
      let change_name = mainOP[i].getAttribute("name");
      let form_name = mainOP[i].getAttribute("form")
      mainOP[i].setAttribute("form", change_name);
      document.forms[change_name].submit();
      mainOP[i].setAttribute("form", form_name);
    });
  }

  //サブオプションの表示
  let subOP = document.querySelectorAll("select.subop");
  for (let i = 0; i < subOP.length; i++) {
    let subop_label = subOP[i].getAttribute("data-subop-label");
    let ele_subOP = document.querySelector("." + subop_label);
    let subOP_list = subOP[i].querySelectorAll("select[ data-subop-label = " + subop_label + "] option");
    for (let subOP_lists of subOP_list) {
      if (subOP_lists.selected) {
        ele_subOP.textContent = subOP_lists.textContent;
      }
    }
    subOP[i].addEventListener('change', function () {
      subop_label = subOP[i].getAttribute("data-subop-label");
      ele_subOP = document.querySelector("." + subop_label);
      subOP_list = subOP[i].querySelectorAll("select[ data-subop-label = " + subop_label + "] option");
      for (let subOP_lists of subOP_list) {
        if (subOP_lists.selected) {
          ele_subOP.textContent = subOP_lists.textContent;
        }
      }
    });
  }

  //数値の表示
  let subSTE = document.querySelectorAll("input.subste");
  for (let i = 0; i < subSTE.length; i++) {
    let subste_label = subSTE[i].getAttribute("data-subste-label");
    let ele_subSTE = document.querySelector("." + subste_label);
    ele_subSTE.textContent = "+" + subSTE[i].value;
    subSTE[i].addEventListener('change', function () {
      subste_label = subSTE[i].getAttribute("data-subste-label");
      ele_subSTE = document.querySelector("." + subste_label);
      ele_subSTE.textContent = "+" + subSTE[i].value;
    })
  }


  //命ノ星座の効果

  let con_list = document.querySelectorAll(".constellation");
  for (let con_lists of con_list) {
    con_lists.addEventListener('change', function () {
      let con_id = con_lists.id.substring(14);
      if (con_lists.checked) {
        if (con_id == 2) {
          let CR = { name: con_lists.id, num: 0.1 }
          cr.push(CR);
        }
      } else {
        if (con_id == 2) {
          console.log(cr.name);
          if (cr.name == con_lists.id) {
          }
        }
      }
      /*for (let i = 0; i < con_list.length; i++) {
        let con_id = con_list[i].id.substring(14);
        console.log(con_lists.id);
        if (con_lists.checked) {
          if (con_id == 2) {
            cr = 0.1;
            console.log(cr);
          }
        } else if (!con_lists.checked) {
          if (con_id == 2) {
            cr = 0.1;
            console.log(cr);
          }
        }
      }*/
    });
  }


  window.addEventListener('change', function () {
    //HP
    let ele_baseHP = document.querySelector(".base-hp");
    let ele_bonusHP = document.querySelector(".bonus-hp");
    let ele_totalHP = document.querySelector(".total-hp");
    let baseHP = parseFloat(ele_baseHP.textContent);
    let bonusHP = hp.reduce((sum, element) => sum + element, 0);
    let totalHP = baseHP + bonusHP;
    ele_baseHP.textContent = baseHP;
    ele_bonusHP.textContent = bonusHP;
    ele_totalHP.textContent = totalHP;


    //ATK
    let ele_baseATK = document.querySelector(".base-atk");
    let ele_bonusATK = document.querySelector(".bonus-atk");
    let ele_totalATK = document.querySelector(".total-atk");
    let baseATK = parseFloat(ele_baseATK.textContent);
    let bonusATK = atk.reduce((sum, element) => sum + element, 0);
    let totalATK = baseATK + bonusATK;
    ele_baseATK.textContent = baseATK;
    ele_bonusATK.textContent = bonusATK;
    ele_totalATK.textContent = totalATK;


    //DEF
    let ele_baseDEF = document.querySelector(".base-def");
    let ele_bonusDEF = document.querySelector(".bonus-def");
    let ele_totalDEF = document.querySelector(".total-def");
    let baseDEF = parseFloat(ele_baseDEF.textContent);
    let bonusDEF = def.reduce((sum, element) => sum + element, 0);
    let totalDEF = baseDEF + bonusDEF;
    ele_baseDEF.textContent = baseDEF;
    ele_bonusDEF.textContent = bonusDEF;
    ele_totalDEF.textContent = totalDEF;


    //EM
    let ele_baseEM = document.querySelector(".base-em");
    let ele_bonusEM = document.querySelector(".bonus-em");
    let ele_totalEM = document.querySelector(".total-em");
    let baseEM = parseFloat(ele_baseEM.textContent);
    let bonusEM = em.reduce((sum, element) => sum + element, 0);
    let totalEM = baseEM + bonusEM;
    ele_baseEM.textContent = baseEM;
    ele_bonusEM.textContent = bonusEM;
    ele_totalEM.textContent = totalEM;


    //ER
    let ele_baseER = document.querySelector(".base-er");
    let ele_bonusER = document.querySelector(".bonus-er");
    let ele_totalER = document.querySelector(".total-er");
    let baseER = parseFloat(ele_baseER.textContent);
    let bonusER = er.reduce((sum, element) => sum + element, 0);
    let totalER = baseER + bonusER;
    ele_baseER.textContent = baseER;
    ele_bonusER.textContent = bonusER;
    ele_totalER.textContent = totalER;


    //CR
    let ele_baseCR = document.querySelector(".base-cr");
    let ele_bonusCR = document.querySelector(".bonus-cr");
    let ele_totalCR = document.querySelector(".total-cr");
    let baseCR = parseFloat(ele_baseCR.textContent);
    let bonusCR = cr.reduce((sum, element) => sum + element, 0);
    let totalCR = baseCR + bonusCR;
    ele_baseCR.textContent = baseCR;
    ele_bonusCR.textContent = bonusCR;
    ele_totalCR.textContent = totalCR;


    //CD
    let ele_baseCD = document.querySelector(".base-cd");
    let ele_bonusCD = document.querySelector(".bonus-cd");
    let ele_totalCD = document.querySelector(".total-cd");
    let baseCD = parseFloat(ele_baseCD.textContent);
    let bonusCD = cd.reduce((sum, element) => sum + element, 0);
    let totalCD = baseCD + bonusCD;
    ele_baseCD.textContent = baseCD;
    ele_bonusCD.textContent = bonusCD;
    ele_totalCD.textContent = totalCD;
  });
});