export const toRupiah = (angka) => {
  let rupiah = "";
  let angkarev = angka.toString().split("").reverse().join("");
  for (let i = 0; i < angkarev.length; i++)
    if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + ".";
  rupiah = rupiah
    .split("", rupiah.length - 1)
    .reverse()
    .join("");
  return "Rp. " + (rupiah.length < 1 ? "0" : rupiah) + ",-";
};
