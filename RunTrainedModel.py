import pyrebase
childValue=0

def temp(url):
    import numpy
    import os
    import tflearn
    from tflearn.layers.conv import conv_2d, max_pool_2d
    from tflearn.layers.core import input_data, dropout, fully_connected
    from tflearn.layers.estimator import regression

    testDir = url

    imageSize = 100
    def processTestData(image):
        testingData=[]
        image_num = image.split()[0]
        testingData.append([numpy.array(image), image_num])
        numpy.save('testing_data.npy', testingData)
        return testingData

    test_data = processTestData("test.py")
    LearningRate = 0.001

    Model_Name = 'diabeticvsnormal-{}-{}.model'.format(LearningRate, '2-conv-basic-video')


    NeuralNet = input_data(shape=[None, imageSize, imageSize, 1], name='input')
    NeuralNet = conv_2d(NeuralNet, 32, 2, activation='relu')
    NeuralNet = max_pool_2d(NeuralNet, 2)
    NeuralNet = conv_2d(NeuralNet, 64, 2, activation='relu')
    NeuralNet = max_pool_2d(NeuralNet, 2)
    NeuralNet = fully_connected(NeuralNet, 1024, activation='relu')
    NeuralNet = dropout(NeuralNet, 0.8)
    NeuralNet = fully_connected(NeuralNet, 2, activation='softmax')
    NeuralNet = regression(NeuralNet, optimizer='adam', learning_rate=LearningRate, loss='categorical_crossentropy', name='targets')
    model = tflearn.DNN(NeuralNet, tensorboard_dir='log')

    model.load(Model_Name)
    for num, data in enumerate(test_data):
        try:
            model_out = model.predict([data])
        except:
            continue

        if numpy.argmax(model_out) == 1: return 1
        else: return 0
    return 1
while True:
    if (childValue!=0 or childValue!=1):
        childValue=1
    try:
        config = {
            "apiKey": "AIzaSyBTYrBylU9YuiJqmngAc614GgkRAfOPDc4",
            "databaseURL": "https://ml-diabetes-detection.firebaseio.com/",
            "authDomain": "ml-diabetes-detection.firebaseapp.com",
            "storageBucket": "gs://ml-diabetes-detection.appspot.com/"
        }

        firebase = pyrebase.initialize_app(config)
        st = firebase.storage()
        childValue="1"
        url="https://firebasestorage.googleapis.com/v0/b/ml-diabetes-detection.appspot.com/o/test.png?alt=media&token=cc9a361a-9a4e-4fa0-ab27-3e30cf99becf"
        if childValue==0 or childValue==1:
            inte = temp(url)
        db=firebase.database()
        db.child("result")
        try:
            if childValue == 1 or childValue ==0:
                db.child("result").child(childValue).set(str(inte))
        except:
            continue
        childValue=str(inte)
    except:
        continue