const coupons = [
    {   name: "JuanDC_es_Batman",
        discount: 15,
    },
    {   name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {   name: "es_un_secreto",
        discount: 25,
    },
];

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;    
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const InputCoupon = document.getElementById("InputCoupon");
    const CouponValue = InputCoupon.value;

    const isCouponValueValid = function (coupons) {
        return coupons.name === CouponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio no tiene descuento: $" + priceValue;
        alert("El cupón " + CouponValue + " no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
   
}


