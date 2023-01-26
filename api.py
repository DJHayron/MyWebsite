from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import re

app = Flask(__name__)
CORS(app)

@app.route("/getQuestion", methods=['GET'])
def getQuestion():
    try:
        conn = sqlite3.connect('data.db')
        c = conn.cursor()
        data = c.execute(f"SELECT question, answer from Question WHERE isCheck='true'")
        outData = []
        for row in data:
            outData.append({"question": row[0], "answer": row[1]})
        conn.close()
        return jsonify({"data": outData})
    except Exception as err:
        return err

@app.route("/newQuestion", methods=['POST'])
def newQuestion():
    inData = request.get_json()
    try :
        conn = sqlite3.connect('data.db')
        c = conn.cursor()
        c.execute(f"INSERT INTO Question (question) VALUES ('{inData['question']}')")
        conn.commit()
        print ("New Question")
        conn.close()
        return jsonify({"status": "傳送成功"})
    except Exception as err:
        return err

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=80, debug=True)