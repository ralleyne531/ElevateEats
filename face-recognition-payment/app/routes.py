from flask import Blueprint, request, jsonify
import cv2
import numpy as np
import base64
import logging
main = Blueprint('main', __name__)

@main.route('/register-face', methods=['POST'])
def register_face():
    data = request.json
    image_data = base64.b64decode(data['image'])
    nparray = np.fromstring(image_data, np.uint8)
    img = cv2.imdecode(nparray, cv2.IMREAD_COLOR)

    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces= face_cascade.detectMultiScale(gray, 1.1, 4)

    if len(faces) == 0:
        return jsonify({"status":"error", "message":"No face detected."})
    
    for(x, y, w, h) in faces:
        face = img[y:y+h, x:x+w]
        cv2.imwrite('registered_face.jpg', face)
    logging.debug('Endpoint hit')
    return jsonify({"status":"success", "message":"Face registered successfully."})

@main.route('/verify-face', methods=['POST'])
def verify_face():
    data = request.json
    image_data = base64.b64decode(data['image'])
    nparray = np.fromstring(image_data, np.uint8)
    img = cv2.imdecode(nparray, cv2.IMREAD_COLOR)

    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces= face_cascade.detectMultiScale(gray, 1.1, 4)

    if len(faces) == 0:
        return jsonify({"status":"error", "message":"No face detected."})
    
    for(x, y, w, h) in faces:
        face = img[y:y+h, x:x+w]
        registered_face = cv2.imread('registered_face.jpg')

        #TO improve
        if face.shape == registered_face.shape:
            difference = cv2.subtract(face, registered_face)
            b, g, r = cv2.split(difference)
            if cv2.countNonZero(b) == 0 and cv2.countNonZero(g) == 0 and cv2.countNonZero(r) == 0:
                return jsonify({"status":"success", "message":"Face verified successfully"})
        else:
            return jsonify({"status":"error", "message":"Face does not match"})
        
        return jsonify({"status": "error", "message":"Face verification failed"})

@main.route('/process-payment', methods=['POST'])
def process_payment():
    return jsonify({"status":"success","message":"Payment processed succcessfully"})