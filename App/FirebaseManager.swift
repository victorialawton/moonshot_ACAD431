import Firebase
import FirebaseFirestore

class FirebaseManager {
    static let shared = FirebaseManager()
    let db = Firestore.firestore()
    
    private init() {}
    
    func saveProfile(name: String, age: String, gender: String, treatmentPlan: String) async throws {
        let profileData: [String: Any] = [
            "name": name,
            "age": age,
            "gender": gender,
            "treatmentPlan": treatmentPlan,
            "updatedAt": FieldValue.serverTimestamp()
        ]
        
        try await db.collection("profiles").document(name).setData(profileData)
    }
} 