let userId = 1;
function displayItemCart() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/cart/"+userId,
        success: function (data) {
            let contentForm = ""
            for (let i = 0; i < data.length; i++) {
                contentForm += getFromItemCart(data[i])
            }
            document.getElementById("form-item-cart").innerHTML = contentForm;
        }
    });
}
function getFromItemCart(cart) {
    return `<li><a href="single-product.html" class="image"><img src="assets/images/product-image/1.webp"
                            alt="Cart product Image"></a>
                            <div class="content">
                                <a href="single-product.html" class="title">${cart.product.name}</a>
                                <span class="quantity-price">${cart.quantity} x <span class="amount">
                                ${cart.product.price*(1-cart.product.discount/100)} $</span></span>
                                <a href="#" onclick="deleteItemCart(${cart.product.id})" class="remove">×</a>
                            </div></li>`
}