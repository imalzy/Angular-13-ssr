import { AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/compat/firestore";

export type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
export type DocPredicate<T> = string | AngularFirestoreDocument<T>;