const buyButtons = document.querySelectorAll('.buyBtn');
buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        const bankName = 'BIDV';
        const accountNumber = '4650764696';
        const paymentCode = Math.floor(1000 + Math.random() * 9000);
        const amount = this.getAttribute('data-price');

        document.getElementById('bankName').textContent = bankName;
        document.getElementById('accountNumber').textContent = accountNumber;
        document.getElementById('paymentCode').textContent = paymentCode;

        const transactionInfo = `${accountNumber}-${paymentCode}-${amount}`;
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${transactionInfo}&size=200x200`;

        document.getElementById('qrCode').src = qrCodeUrl;
        document.getElementById('paymentModal').style.display = 'block';
    });
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('paymentModal').style.display = 'none';
});