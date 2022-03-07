import { initializeApp } from 'firebase/app'
import { getDatabase, onValue, ref, set} from 'firebase/database'

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}

class Firebase {
    constructor() {
        const app = initializeApp(config)

        this.db = getDatabase(app)
    }

    addAthlete = ( name, city, club, age ) => set(ref(this.db, 'athletes'), {
        name, city, club, age
    } )

    getBoys = (data) => onValue(ref(this.db, 'boys'), (snapshot) => {
        data(snapshot.val().map((item) => JSON.parse(item)))
    })
    
    getGirls = (data) => onValue(ref(this.db, 'girls'), (snapshot) => {
        data(snapshot.val().map((item) => JSON.parse(item)))
    })

    getAthletes = (data) => onValue(ref(this.db, 'athletes'), (snapshot) => {
        data(Object.values(snapshot.val()))
    })
}

export default Firebase