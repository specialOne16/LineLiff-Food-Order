const liffId = "1655531871-YgWB4z5l";

function inc(x) {
  if (!cekLogin()) return;
  x.innerHTML = parseInt(x.innerHTML) + 1;
}

function dec(x) {
  if (!cekLogin()) return;
  if (parseInt(x.innerHTML) <= 0) return;
  x.innerHTML = parseInt(x.innerHTML) - 1;
}

function order() {
  if (!cekLogin()) return;
  document.getElementById("makanan1").innerHTML = 0;
  document.getElementById("makanan2").innerHTML = 0;
  document.getElementById("makanan3").innerHTML = 0;
  document.getElementById("minuman1").innerHTML = 0;
  document.getElementById("minuman2").innerHTML = 0;
  if (!cekLine()) {
    alert("Buka dari line ya");
  } else {
    liff
      .sendMessages([
        {
          type: "text",
          text: "Anda telah menggunakan fitur Send Message!", // ganti sesuai konteks
        },
      ])
      .then(function () {
        window.alert("Pesanan terkirim");
      })
      .catch(function (error) {
        window.alert("Pesanan gagal terkirim");
      });
  }
}

function openExternal() {
  liff.openWindow({
    url: "https://liff-juseat.herokuapp.com/",
    external: true,
  });
}

function cekLogin() {
  return liff.isLoggedIn();
}

function cekLine() {
  if (liff.isInClient()) {
    return true;
  }
  document.getElementById("external").style.display = "none";
  return false;
}

function load() {
  const salamPembuka = document.getElementById("header");
  const namapengunjung = document.getElementById("namapengunjung");
  const btnLogin = document.getElementById("login");
  const btnLogout = document.getElementById("logout");
  cekLine();
  initLiff();
  if (cekLogin()) {
    btnLogin.style.display = "none";
    namapengunjung.innerHTML = "Easta";
  } else {
    salamPembuka.style.display = "none";
    btnLogout.style.display = "none";
  }
}

function initLiff() {
  liff
    .init({
      liffId: liffId,
    })
    .then(() => {
      isLoggedIn = liff.isLoggedIn();
      bukaDariLine = liff.isInClient();
    })
    .catch((err) => {});
}

function login() {
  if (!liff.isLoggedIn()) {
    liff.login();
  }
}

function logout() {
  if (liff.isLoggedIn()) {
    liff.logout();
    window.location.reload();
  }
}
