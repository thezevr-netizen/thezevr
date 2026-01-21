// مثال بسيط لإضافة وظائف مستقبلية للبحث أو السلة
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert("تم إضافة المنتج إلى السلة!");
    });
});

// بحث المنتجات
document.querySelector('.search-btn').addEventListener('click', () => {
    const query = document.querySelector('.search-input').value;
    alert("البحث عن: " + query);
});
