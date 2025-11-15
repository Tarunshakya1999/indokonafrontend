// src/components/ProfileAssets.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

export default function ProfileAssets() {
  const [profile, setProfile] = useState(null);
  const [assets, setAssets] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        if (!token) {
          setError("Please login first.");
          setLoading(false);
          return;
        }

        // AXIOS instance with token
        const axiosAuth = axios.create({
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // 1) fetch profile (list)
        const res = await axiosAuth.get(
          "https://indokonabackend-1.onrender.com/api/userprofiles/"
        );

        if (res.data && res.data.length > 0) {
          const prof = res.data[0];
          setProfile(prof);

          // 2) fetch assets for profile
          const as = await axiosAuth.get(
            `https://indokonabackend-1.onrender.com/api/userprofiles/${prof.id}/assets/`
          );

          setAssets(as.data);

        } else {
          setError("No profile found. Please create a profile first.");
        }

      } catch (err) {
        console.error("ERROR:", err.response?.data);
        setError("Failed to load profile/assets.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="alert alert-warning m-4">{error}</div>;

  return (
    <div className="container py-4">
      <h3 className="mb-4">Your Generated Documents</h3>

      <div className="row g-4">
        {/* Certificate */}
        <div className="col-md-6 col-lg-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Certificate (PDF)</Card.Title>
              <Card.Text>Official certificate generated from your profile.</Card.Text>

              {assets?.certificate ? (
                <>
                  <a
                    href={assets.certificate}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary me-2"
                  >
                    View
                  </a>
                  <a
                    href={assets.certificate}
                    download={`certificate_${profile.id}.pdf`}
                    className="btn btn-outline-primary"
                  >
                    Download
                  </a>
                </>
              ) : (
                <div className="text-muted">Not generated yet</div>
              )}
            </Card.Body>
          </Card>
        </div>

        {/* ID Card */}
        <div className="col-md-6 col-lg-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>ID Card (PNG)</Card.Title>
              <Card.Text>ID card generated from your profile.</Card.Text>

              {assets?.id_card ? (
                <>
                  <a
                    href={assets.id_card}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary me-2"
                  >
                    View
                  </a>
                  <a
                    href={assets.id_card}
                    download={`idcard_${profile.id}.png`}
                    className="btn btn-outline-primary"
                  >
                    Download
                  </a>
                </>
              ) : (
                <div className="text-muted">Not generated yet</div>
              )}
            </Card.Body>
          </Card>
        </div>

        {/* Visiting Card */}
        <div className="col-md-6 col-lg-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Visiting Card (PNG)</Card.Title>
              <Card.Text>Generated digital visiting card.</Card.Text>

              {assets?.visiting_card ? (
                <>
                  <a
                    href={assets.visiting_card}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary me-2"
                  >
                    View
                  </a>
                  <a
                    href={assets.visiting_card}
                    download={`visitingcard_${profile.id}.png`}
                    className="btn btn-outline-primary"
                  >
                    Download
                  </a>
                </>
              ) : (
                <div className="text-muted">Not generated yet</div>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
