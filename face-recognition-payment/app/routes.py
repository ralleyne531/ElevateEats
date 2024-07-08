from flask import Blueprint, routes, jsonify
import cv2
import numpy as np

main = Blueprint('main', __name__)

@main.route('/register-face', methods=['POST'])
def register_face():
    return jsonify({"status":"success", "message":"Face registered successfully."})

@main.route('/verify-face', methods=['POST'])
def verify_face():
    return jsonify({"status":"success", "message":"Face verified successfully"})

@main.route('/process-payment', methods=['POST'])
def process_payment():
    return jsonify({"status":"success","message":"Payment processed succcessfully"})