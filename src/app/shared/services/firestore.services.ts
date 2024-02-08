import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { CollectionPredicate, DocPredicate } from "./firestore.model";
import { Observable, map } from "rxjs";

@Injectable()
export class FirestoreService {

    constructor(private firestore: AngularFirestore) { }

    /// **************
    /// Get a Reference
    /// **************
    public col<T>(ref: CollectionPredicate<T>, queryFn?: any): AngularFirestoreCollection<T> {
        return typeof ref === 'string' ? this.firestore.collection<T>(ref, queryFn) : ref;
    }

    public doc<T>(ref: DocPredicate<T>): AngularFirestoreDocument<T> {
        return typeof ref === 'string' ? this.firestore.doc<T>(ref) : ref;
    }

    /// **************
    /// Get Data
    /// **************
    public doc$<T>(ref: DocPredicate<T>): Observable<T> {
        return this.doc(ref).snapshotChanges().pipe(map(doc => {
            return doc.payload.data() as T;
        }))

    }

    public col$<T>(ref: CollectionPredicate<T>, queryFn?: any): Observable<T[]> {
        return this.col(ref, queryFn).snapshotChanges().pipe(map(docs => {
            return docs.map(a => a.payload.doc.data()) as T[];
        }))
    }


}