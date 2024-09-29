import React, { useState } from 'react';
import './Settings.css';
import NavBar from './NavBarUser.jsx';

const ProfileSettings = () => {
    const [name, setName] = useState("Yuki Hayashi");
    const [email, setEmail] = useState("yuki@Maxwell.com");
    const [about, setAbout] = useState("I'm Yuki. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.");
    const [profilePic, setProfilePic] = useState("https://bootdey.com/img/Content/avatar/avatar7.png");

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        console.log("Profile updated:", { name, email, about, profilePic });
    };

    return (
        <>
            <NavBar />
            <div className="settings-wrapper">
                <div className="settings-container">
                    <div className="row gutters">
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="account-settings">
                                        <div className="user-profile">
                                            <div className="user-avatar">
                                                <img src={profilePic} alt="Maxwell Admin" />
                                            </div>
                                        </div>
                                        <div className="about">
                                            <h5>About</h5>
                                            <textarea
                                                value={about}
                                                onChange={(e) => setAbout(e.target.value)}
                                                placeholder="Tell us about yourself"
                                                rows="4"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="row gutters">
                                        <div className="col-xl-12">
                                            <h6 className="mb-2 text-primary">Personal Details</h6>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="fullName">Full Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="fullName"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    placeholder="Enter full name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="eMail">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="eMail"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="Enter email ID"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="phone"
                                                    placeholder="Enter phone number"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="website">Website URL</label>
                                                <input
                                                    type="url"
                                                    className="form-control"
                                                    id="website"
                                                    placeholder="Website url"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row gutters">
                                        <div className="col-xl-12">
                                            <h6 className="mt-3 mb-2 text-primary">Address</h6>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="Street">Street</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="Street"
                                                    placeholder="Enter Street"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="ciTy">City</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="ciTy"
                                                    placeholder="Enter City"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="sTate">State</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="sTate"
                                                    placeholder="Enter State"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="zIp">Zip Code</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="zIp"
                                                    placeholder="Zip Code"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row gutters">
                                        <div className="col-xl-12">
                                            <div className="text-right">
                                                <button type="button" className="btn btn-secondary">Cancel</button>
                                                <button type="button" onClick={handleSubmit} className="btn btn-primary">Update</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileSettings;
