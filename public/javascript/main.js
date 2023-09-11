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

function alertDebug(arg) {
  //alert(arg);   // ﾃﾞﾊﾞｯｸﾞ時に有効化すると良い
}

function save_restore3_select(target_class) {
  var ddstate;

  window.addEventListener('load', function () {
    ddstate = JSON.parse(localStorage['DDState'] || '{}');
    alertDebug('ddstate = ' + JSON.stringify(ddstate));
    for (var key in ddstate) {
      var value = ddstate[key]; // =selectindex値
      alertDebug('key=' + key + ' ,value=' + value);
      var el_lst = document.querySelectorAll('select[data-savekey="' + key + '"].' + target_class);
      set_select_selectindex_all(el_lst, value);
    }

    var dd = document.getElementsByClassName(target_class);
    alertDebug('dd = ' + JSON.stringify(dd));

    for (var c = 0; c < dd.length; c++) {
      alertDebug('dd[' + c + ']:name=' + dd[c].name + ', value=' + dd[c].value);
      dd[c].addEventListener('change', function (evt) {
        alertDebug('input:value=' + this.value);
        var savekey = this.getAttribute('data-savekey');
        var selectElement = evt.target;
        var selectindex = selectElement.selectedIndex;
        alertDebug('selectindex=' + selectindex);
        ddstate[savekey] = selectindex;
        localStorage['DDState'] = JSON.stringify(ddstate);
      });
    }
  });

  function set_select_selectindex_all(el_lst, selectindex) {

    for (var c = 0; c < el_lst.length; c++) {
      var el = el_lst[c];
      //alertDebug('el=' + JSON.stringify(el) + ' ,el.name=' + el.name);
      if (el) {
        //alertDebug('el.checked=' + el.checked);
        el.selectedIndex = selectindex;
      }
    }
  }
}
save_restore3_select('save-state3');