export const objToArrObj = (data) =>
  Object.entries(data).map((e, i) => ({ ...e, nama_surat: e[1], id: i + 1 }));
