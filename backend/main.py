from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/", methods=["POST"])
def index():
    print(request.get_json())
    return {"hello": "world"}


if __name__ == "__main__":
    app.run(debug=True, port=5000)
