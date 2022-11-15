var dataBarang = [{ nama_barang: "Nama", jumlah: "Hari", total: 0 }];

function showBarang() {
  var listBarang = document.getElementById("table");

  // listBarang.innerHTML = "<tr> <th>Nama</th> <td><input type='checkbox' onclick='sortTable(0)'></td> <th>Jumlah</th> <td></td> <th>Total</th> <td></td> <th>Action</th></tr>";
  listBarang.innerHTML = "<tr> <th class='text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'>Barang <input id='checkbox' type='checkbox' onclick='sortTable(0)'></th><th class='text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'>Jumlah</th><th class='text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'>Total</th><th  id='aksiId' class='text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'>Action</th></tr>";

  for (let i = 0; i < dataBarang.length; i++) {
    if (i !== 0) {
      var btnEdit = "<a href='#' class='text-secondary font-weight-bold text-xs' data-toggle='tooltip' data-original-title='Edit user' onclick='editBarang(" + i + ")'>Edit</a>";
      var btnHapus = "<a   href='#' class='text-secondary font-weight-bold text-xs' data-toggle='tooltip' data-original-title='Edit user' onclick='deleteBarang(" + i + ")'>Hapus</a>";
      listBarang.innerHTML +=
        "<tr><td class='mb-0 text-sm'>" + dataBarang[i].nama_barang + "<td class='mb-0 text-sm'>" + dataBarang[i].jumlah + "</td><td class='mb-0 text-sm'>" + dataBarang[i].total + "</td><td  id='aksiConentId' class='mb-0 text-sm'><button class='btn'>" + btnEdit + "</button><button class='btn'> " + btnHapus + "</button></td></tr>";
    } else {
      // listBarang.innerHTML +=
      // "<th>Data Belum Di Masukan</th>";
    }
  }

  const sum = dataBarang.reduce((accumulator, object) => {
    return accumulator + object.total;
  }, 0);

  const totalBayar = document.getElementById("total_bayar");
  totalBayar.innerHTML = sum;
}

function cekTotalHarga(jenisBarang, jumlah) {
  // if (jenisBarang == "Air Mineral" && jumlah > 5) {
  //   const total = jumlah * 3000;
  //   const totalFinal = total - 3000;
  //   return {
  //     nama_barang: jenisBarang,
  //     jumlah: jumlah,
  //     total: totalFinal,
  //   };
  // } else if (jenisBarang == "Air Mineral" && jumlah <= 5) {
  //   const total = jumlah * 3000;
  //   return {
  //     nama_barang: jenisBarang,
  //     jumlah: jumlah,
  //     total: total,
  //   };
  // } else if (jenisBarang == "Sedan" && jumlah > 3) {
  //   const total = jumlah * 100000;
  //   const totalFinal = total - 100000;
  //   return {
  //     nama_barang: jenisBarang,
  //     jumlah: jumlah,
  //     total: totalFinal,
  //   };
  // } else if (jenisBarang == "Sedan" && jumlah <= 3) {
  //   const total = jumlah * 100000;
  //   return {
  //     nama_barang: jenisBarang,
  //     jumlah: jumlah,
  //     total: total,
  //   };
  // } else
  //  if (jenisBarang == "Hiace") {
  //   const total = jumlah * 150000;
  //   return {
  //     nama_barang: jenisBarang,
  //     jumlah: jumlah,
  //     total: total,
  //   };
  // }
  if (jenisBarang == "Air Mineral") {
    const total = jumlah * 3000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  }else if (jenisBarang == "Kecap") {
    const total = jumlah * 2000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  }else if (jenisBarang == "Telur") {
    const total = jumlah * 32000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  }else if (jenisBarang == "Minyak") {
    const total = jumlah * 18000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  }else if (jenisBarang == "Terigu") {
    const total = jumlah * 12000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  }else if (jenisBarang == "Gula") {
    const total = jumlah * 13500;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  }else if (jenisBarang == "Aci") {
    const total = jumlah * 3000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  }
}

function addBarang() {
  var jenisBarang = document.getElementById("jenis_barang").value;
  var jumlah = document.getElementById("jumlah").value;

  const newDataBarang = cekTotalHarga(jenisBarang, jumlah);
  dataBarang.push(newDataBarang);
  showBarang();
}

function editBarang(id) {
  var newjumlah = prompt("Edit jumlah", dataBarang[id].jumlah);
  const detailJenisBarang = dataBarang[id].nama_barang;

  const newDataBarang = cekTotalHarga(
    detailJenisBarang,
    newjumlah || dataBarang[id].jumlah
  );

  dataBarang[id] = newDataBarang;
  showBarang();
}

function deleteBarang(id) {
        dataBarang.splice(id, 1);
        showBarang();
    }
  // dataBarang.splice(id, 1);


showBarang();

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}





function cetak() {
  window.print();
  
}