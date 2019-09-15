import React from 'react';
import ImageUploader from 'react-images-upload';
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBTYrBylU9YuiJqmngAc614GgkRAfOPDc4",
    authDomain: "ml-diabetes-detection.firebaseapp.com",
    databaseURL: "https://ml-diabetes-detection.firebaseio.com",
    projectId: "ml-diabetes-detection",
    storageBucket: "ml-diabetes-detection.appspot.com",
    messagingSenderId: "745848845016",
    appId: "1:745848845016:web:714df48a3f71f4c3ed9dad"
  };
firebase.initializeApp(firebaseConfig);
 
class UploadImage extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
    
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
        if(picture.length != 0) {
            const file = picture[0];
            const storageRef = firebase.storage().ref("test.png");
            storageRef.put(file);

            const timer = setTimeout(() => {
                console.log('This will run after 1 second!')

                const react = firebase.database().ref("result");
                react.once("value").then(data => {
                    if(data.val() !== null){
                        console.log(data.val());
                    }
                    else {
                        console.log("nope");
                    }
                });
              }, 5000);
              return () => clearTimeout(timer);
        }
    }
 
    render() {
        return (
            <div>
                <ImageUploader
                    withIcon={true}
                    withPreview={true}
                    buttonText='Choose images'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                />
            </div>
        );
    }
}
export default UploadImage;