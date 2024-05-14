const { Firestore } = require('@google-cloud/firestore');
 
class storeData{
  static async storePrediction(id, data) {

    try {
      const db = new Firestore();
      const predictCollection = db.collection('predictions').doc(id).set(data);
      return predictCollection;
    } catch (error) {
      console.log(error);
    }
  }

  static async getPredictAll(){
    try {
      const db = new Firestore();
      const predictCollection = db.collection('predictions');
      const response = await predictCollection.get();

      let responArr = [];
      response.forEach(doc =>{
        responArr.push({id: doc.data().id, history: doc.data()});
      })
      return responArr;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = storeData;