import SwiftUI
import Firebase

@main
struct YourAppNameApp: App {
    init() {
        FirebaseApp.configure()
    }
    
    var body: some Scene {
        WindowGroup {
            TabView {
                // ... existing code ...
            }
        }
    }
} 