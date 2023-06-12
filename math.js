$(document).ready(function () {
    var url = "https://api.weswap.digital/api/rate";
    $.get(url, function (data) {
        var trx_rate = data.result.TRX;

        $("#plan").change(function () {
            var plan = $(this).val();
            var price;
            switch (plan) {
                case "1":
                    price = 70000;
                    break;
                case "2":
                    price = 100000;
                    break;
                case "3":
                    price = 120000;
                    break;
                case "4":
                    price = 140000;
                    break;
                default:
                    price = 0;
            }
            var price_trx = price / trx_rate;
            $("#price").text(Math.round(price_trx) + " TRX");
        });

        // Redirect to payment page when final_pay button is clicked
        $("#final_pay").click(function () {
            // Get the selected plan and calculate the price in USD
            var plan = $("#plan").val();
            var amount;
            switch (plan) {
                case "1":
                    amount = 70000;
                    break;
                case "2":
                    amount = 100000;
                    break;
                case "3":
                    amount = 120000;
                    break;
                case "4":
                    amount = 140000;
                    break;
                default:
                    amount = 0;
            }
            var amount_trx = amount / trx_rate + 0.05;
            // Redirect to payment page with the calculated amount
            window.location.href = "https://weswap.digital/quick?amount=" + amount_trx.toFixed(2) + "&currency=TRX&address=TXP1a7ypuJ9ZqghawosY8xdT2yG3rjsUJM";
        });
    });
});

function validatePayment() {
    var agreement = document.getElementById("agreement");
    if (!agreement.checked) {
        alert("لطفاً قوانین و مقررات را تأیید کنید.");
        return false;
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var agreementCheckbox = document.getElementById("agreement");
    var finalPayButton = document.getElementById("final_pay");
    });