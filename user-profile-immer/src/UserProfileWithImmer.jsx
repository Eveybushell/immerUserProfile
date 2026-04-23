import {useImmer} from "use-immer";
import { useState } from "react";

export default function UserProfileWithImmer () {
    const [userProfile, setUserProfile] = useImmer({
        name: "",
        email: "",
        contactDetails: {phone: "", address: ""},
        preferences: {newsletter: false, notifications: false}
    });

    const [newPhone, setNewPhone] = useState("");
    const [newAddress, setNewAddress] = useState("");

    const updateContactDetails = (newPhone, newAddress) => {
        setUserProfile(draft => {
            draft.contactDetails.phone = newPhone;
            draft.contactDetails.address = newAddress;
        });
    }

    const toggleNewsletterSubscription = () => {
        setUserProfile(draft => {
            draft.preferences.newsletter = !draft.preferences.newsletter;
        });
    }

    return (
        <div>
            <p>Name</p>
            <input
            value={userProfile.name}
            onChange={(e) => setUserProfile(draft => {draft.name = e.target.value})}
            />

            <p>Phone Number</p>
            <input
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
            />

            <p> Street Address</p>
            <input
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            />
            <br/>
            <button onClick={() => updateContactDetails(newPhone,newAddress)}>Change contact details</button>
            <br/>
            <p>Subscribe to our newsletter?</p>
            <input
            onChange={() => toggleNewsletterSubscription()}
            type="checkbox"
            checked={userProfile.preferences.newsletter}
            />
            <pre>
                Name: {userProfile.name}
                Email: {userProfile.email}
                Contact Details:
                    Phone Number: {userProfile.contactDetails.phone}
                    Address: {userProfile.contactDetails.address}
                Subscription Preferences:
                    Newsletter: {userProfile.preferences.newsletter ? "Yes" : "No"}
                    Notifications: {userProfile.preferences.notifications ? "Yes" : "No"}
            </pre>
        </div>
    );
}