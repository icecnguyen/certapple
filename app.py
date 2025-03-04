from flask import Flask, render_template, request

app = Flask(__name__, template_folder='html')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/verify_payment', methods=['POST'])
def verify_payment():
    payment_code = request.form.get('paymentCode')

    return "Payment Verified"

if __name__ == '__main__':
    app.run(debug=True)
