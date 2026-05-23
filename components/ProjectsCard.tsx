import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import { ProjectType } from "../types/sections";

type GitHubRepoInfo = {
  description: string | null;
  owner?: {
    avatar_url?: string;
  };
};

type GitHubLanguageMap = Record<string, number>;

const ProjectsCard = ({ name, desc, github, link, image }: ProjectType) => {
  const [repoDescription, setRepoDescription] = useState<string>(desc);
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>(image);
  const [languages, setLanguages] = useState<Array<{ name: string; percentage: number }>>([]);

  useEffect(() => {
    let isActive = true;

    const loadRepoData = async () => {
      if (!github) {
        return;
      }

      try {
        const parts = new URL(github).pathname.split("/").filter(Boolean);
        const owner = parts[0];
        const repo = parts[1];

        if (!owner || !repo) {
          return;
        }

        const [repoResponse, languageResponse] = await Promise.all([
          fetch(`https://api.github.com/repos/${owner}/${repo}`),
          fetch(`https://api.github.com/repos/${owner}/${repo}/languages`),
        ]);

        if (!repoResponse.ok || !languageResponse.ok) {
          return;
        }

        const repoData = (await repoResponse.json()) as GitHubRepoInfo;
        const languageData = (await languageResponse.json()) as GitHubLanguageMap;

        if (!isActive) {
          return;
        }

        if (repoData.description) {
          setRepoDescription(repoData.description);
        }

        if (repoData.owner?.avatar_url) {
          setAvatarUrl(repoData.owner.avatar_url);
        }

        const entries = Object.entries(languageData);
        const totalBytes = entries.reduce((sum, [, bytes]) => sum + bytes, 0);

        if (totalBytes > 0) {
          setLanguages(
            entries
              .map(([language, bytes]) => ({
                name: language,
                percentage: Math.round((bytes / totalBytes) * 100),
              }))
              .sort((a, b) => b.percentage - a.percentage),
          );
        }
      } catch {
        if (!isActive) {
          return;
        }
      }
    };

    loadRepoData();

    return () => {
      isActive = false;
    };
  }, [github, desc, image]);

  return (
    <Col xs="12" lg="6" className="mb-4 d-flex">
      <Card
        className="shadow-lg--hover shadow mt-4 w-100 h-100 d-flex flex-column"
        style={{ overflow: "hidden", minHeight: "520px" }}
      >
        <CardBody className="d-flex flex-column" style={{ padding: "1.25rem", flex: 1 }}>
          <div className="d-flex align-items-start justify-content-between" style={{ gap: "1rem" }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h3
                style={{
                  fontSize: "clamp(1.15rem, 2.8vw, 1.55rem)",
                  lineHeight: 1.15,
                  color: "#1f2937",
                  wordBreak: "break-word",
                  overflowWrap: "anywhere",
                  marginBottom: "0.75rem",
                }}
              >
                {name}
              </h3>
              <div
                style={{
                  fontSize: "0.84rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "#6b7280",
                }}
              >
               
              </div>
            </div>
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={`${name} repository avatar`}
                style={{
                  width: 84,
                  height: 84,
                  borderRadius: 16,
                  objectFit: "cover",
                  flexShrink: 0,
                  backgroundColor: "#f3f4f6",
                }}
              />
            ) : null}
          </div>

          <div style={{ marginTop: "1rem" }}>
            <p
              className="description"
              style={{
                fontSize: "clamp(0.92rem, 2.4vw, 0.98rem)",
                lineHeight: 1.7,
                color: "#4b5563",
                wordBreak: "break-word",
                marginBottom: 0,
              }}
            >
              {repoDescription}
            </p>
          </div>

          <div style={{ marginTop: "1.25rem" }}>
            <div
              style={{
                fontSize: "0.84rem",
                fontWeight: 700,
                color: "#111827",
                marginBottom: "0.75rem",
              }}
            >
              Languages Contribution %
            </div>
            <div className="d-flex flex-column" style={{ gap: "0.7rem" }}>
              {languages.length > 0 ? (
                languages.map((language) => (
                  <div key={language.name}>
                    <div className="d-flex justify-content-between" style={{ marginBottom: "0.35rem" }}>
                      <span style={{ fontSize: "0.88rem", color: "#374151", fontWeight: 600 }}>
                        {language.name}
                      </span>
                      <span style={{ fontSize: "0.88rem", color: "#6b7280" }}>{language.percentage}%</span>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: 8,
                        borderRadius: 999,
                        backgroundColor: "#e5e7eb",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${Math.max(language.percentage, 2)}%`,
                          height: "100%",
                          borderRadius: 999,
                          background: "linear-gradient(90deg, #2563eb 0%, #f97316 100%)",
                        }}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ fontSize: "0.9rem", color: "#6b7280" }}>No language data available.</div>
              )}
            </div>
          </div>

          <div className="d-flex flex-wrap" style={{ gap: "0.65rem", marginTop: "auto", paddingTop: "1.25rem" }}>
            {github ? (
              <Button
                className="btn-icon"
                color="github"
                href={github}
                target="_blank"
                rel="noopener"
                aria-label="GitHub repository"
                style={{ padding: "0.7rem 0.9rem", fontSize: "0.86rem" }}
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-github" />
                </span>
                <span className="btn-inner--text ml-1" style={{ fontSize: "0.86rem" }}>
                  GitHub Repo
                </span>
              </Button>
            ) : null}
            {link ? (
              <Button
                className="btn-icon"
                color="success"
                href={link}
                target="_blank"
                rel="noopener"
                aria-label="Project link"
                style={{ padding: "0.7rem 0.9rem", fontSize: "0.86rem" }}
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-arrow-right mr-2" />
                </span>
                <span className="nav-link-inner--text ml-1" style={{ fontSize: "0.86rem" }}>
                  View
                </span>
              </Button>
            ) : null}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectsCard;