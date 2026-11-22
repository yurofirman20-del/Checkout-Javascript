const HargaProduk = 300000;
const JumlahProduk =1;
const IsMember = false
 
const valid = 
    typeof HargaProduk === "number" &&
    HargaProduk > 0 &&
    Number.isInteger(JumlahProduk)&&
    JumlahProduk > 0;

valid && (() => {

    let subTotal = HargaProduk * JumlahProduk ;
    let diskon = subTotal * 0.10 ;
    let Didiskon = subTotal - diskon * IsMember ;
    let ongkir = (Didiskon < 250000) * 15000;
    let TotalPembayaran = Didiskon + ongkir;
 
console.log(TotalPembayaran)

})();
