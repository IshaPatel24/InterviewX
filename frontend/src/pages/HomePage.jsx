import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/clerk-react";
import toast from "react-hot-toast";

function HomePage() { 
    return (
        <div>
            <button 
              className="btn btn-secondary" onClick={() => TransformStream.error("This is a success toast")}>
                Click me
            </button>
            
            <SignedOut>
              <SignInButton mode="modal">
                <button>Lohin</button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
                <SignoutButton />
            </SignedIn>

            <UserButton />
        </div>
    );
}

export default HomePage;
