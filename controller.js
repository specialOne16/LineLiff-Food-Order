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
}

function cekLogin() {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    alert("Login dulu yuk!");
    return false;
  }
  return true;
}

function load() {
  const salamPembuka = document.getElementById("header");
  const namapengunjung = document.getElementById("namapengunjung");
  const btnLogin = document.getElementById("login");
  const btnLogout = document.getElementById("logout");

  if (cekLogin) {
    btnLogin.style.display = "none";
    namapengunjung.innerHTML = "Easta";
  } else {
    salamPembuka.style.display = "none";
    btnLogout.style.display = "none";
  }
}
