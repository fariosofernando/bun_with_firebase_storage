import { type FirebaseApp, initializeApp } from "firebase/app";

import { Firestore, getFirestore } from "firebase/firestore";

import { type FirebaseStorage, getStorage } from "firebase/storage";

export type FirebaseConfig = {
	apiKey: string;
	authDomain: string;
	projectId: string;
	storageBucket: string;
	messagingSenderId: string;
	appId: string;
	measurementId: string;
};

export class FirebaseService {
	public fApp: FirebaseApp;
	public db: Firestore;
	public bucket: FirebaseStorage;

	constructor() {
		this.fApp = this.app();
		this.db = getFirestore(this.fApp);
		this.bucket = getStorage(this.fApp);
	}

	private config(): FirebaseConfig {
		return {
			apiKey: "",
			authDomain: "",
			projectId: "",
			storageBucket: "",
			messagingSenderId: "",
			appId: "",
			measurementId: "",
		};
	}

	private app(): FirebaseApp {
		return initializeApp(this.config());
	}
}
