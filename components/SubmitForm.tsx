"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const TYPES = [
  { value: "story", label: "A new story or case study", hint: "An object, system, innovation or design movement worth exploring." },
  { value: "person", label: "A person to profile", hint: "A designer, inventor, engineer, craftsperson or researcher." },
  { value: "correction", label: "A correction", hint: "Something on the site that is wrong, missing or unclear." },
  { value: "source", label: "A source or archive", hint: "A book, collection, interview or Japanese-language resource we should read." },
  { value: "other", label: "Something else", hint: "Ideas, feedback, image permissions, collaborations." },
] as const;

type TypeValue = (typeof TYPES)[number]["value"];

/**
 * Suggestion form with no backend. Submitting composes a message the visitor
 * sends themselves — by email (when a contact address is configured) or as a
 * GitHub issue. Nothing is stored or sent by this site.
 */
export function SubmitForm({ contactEmail, repo, siteName }: { contactEmail: string; repo: string; siteName: string }) {
  const params = useSearchParams();
  const initialType = (TYPES.find((t) => t.value === params.get("type"))?.value ?? "story") as TypeValue;
  const [type, setType] = useState<TypeValue>(initialType);
  const [subject, setSubject] = useState(params.get("subject") ?? "");
  const [details, setDetails] = useState("");
  const [sources, setSources] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [sent, setSent] = useState<null | "email" | "github">(null);
  const [attempt, setAttempt] = useState(0);
  const errorBox = useRef<HTMLDivElement>(null);

  // Move focus to the error summary after a failed attempt, so keyboard and screen-reader users hear it.
  useEffect(() => {
    if (attempt && errors.length) errorBox.current?.focus();
  }, [attempt, errors]);

  const typeLabel = TYPES.find((t) => t.value === type)!.label;
  const title = `[${type}] ${subject.trim()}`;
  const body = [
    `Type: ${typeLabel}`,
    `Subject: ${subject.trim()}`,
    "",
    "Details:",
    details.trim(),
    "",
    "Sources / links:",
    sources.trim() || "(none given)",
    "",
    name.trim() ? `From: ${name.trim()}${role.trim() ? ` (${role.trim()})` : ""}` : role.trim() ? `Background: ${role.trim()}` : "From: (not given)",
    "",
    `Sent via the ${siteName} suggestion form.`,
  ].join("\n");

  const validate = () => {
    const e: string[] = [];
    if (subject.trim().length < 3) e.push("Add a short subject, such as the name of the object, person or page.");
    if (details.trim().length < 20) e.push("Tell us a little more in the details box (at least a sentence).");
    setErrors(e);
    setAttempt((n) => n + 1);
    return e.length === 0;
  };

  const sendEmail = () => {
    if (!validate()) return;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(`${siteName}: ${title}`)}&body=${encodeURIComponent(body)}`;
    setSent("email");
  };

  const sendGithub = () => {
    if (!validate()) return;
    const url = `https://github.com/${repo}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}&labels=${encodeURIComponent(type)}`;
    window.open(url, "_blank", "noopener");
    setSent("github");
  };

  return (
    <form className="submit-form" noValidate onSubmit={(e) => { e.preventDefault(); if (contactEmail) sendEmail(); else sendGithub(); }}>
      {errors.length ? (
        <div id="form-errors" ref={errorBox} className="callout callout--uncertain" role="alert" tabIndex={-1}>
          <p className="callout__label">Please check</p>
          <ul style={{ paddingLeft: "1.1rem" }}>
            {errors.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <fieldset className="submit-types">
        <legend className="field-label">What would you like to share?</legend>
        {TYPES.map((t) => (
          <label key={t.value} className="type-option" data-checked={type === t.value}>
            <input type="radio" name="type" value={t.value} checked={type === t.value} onChange={() => setType(t.value)} />
            <span>
              <strong>{t.label}</strong>
              <span className="type-hint">{t.hint}</span>
            </span>
          </label>
        ))}
      </fieldset>

      <div className="field">
        <label className="field-label" htmlFor="f-subject">
          Subject <span className="req">required</span>
        </label>
        <p className="field-hint" id="h-subject">e.g. &ldquo;Shinkansen 0 Series&rdquo;, &ldquo;Kazumasa Nagai&rdquo; or &ldquo;Tactile paving — date of first installation&rdquo;</p>
        <input id="f-subject" aria-describedby="h-subject" value={subject} onChange={(e) => setSubject(e.target.value)} maxLength={140} required />
      </div>

      <div className="field">
        <label className="field-label" htmlFor="f-details">
          Details <span className="req">required</span>
        </label>
        <p className="field-hint" id="h-details">Why is it interesting? What should we know? For corrections, quote what the site says and what it should say.</p>
        <textarea id="f-details" aria-describedby="h-details" rows={7} value={details} onChange={(e) => setDetails(e.target.value)} maxLength={4000} required />
      </div>

      <div className="field">
        <label className="field-label" htmlFor="f-sources">Sources or links</label>
        <p className="field-hint" id="h-sources">Museum records, books, interviews, archives — Japanese-language sources are especially welcome. One per line.</p>
        <textarea id="f-sources" aria-describedby="h-sources" rows={3} value={sources} onChange={(e) => setSources(e.target.value)} maxLength={2000} />
      </div>

      <div className="field-row">
        <div className="field">
          <label className="field-label" htmlFor="f-name">Your name <span className="opt">optional</span></label>
          <input id="f-name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" maxLength={80} />
        </div>
        <div className="field">
          <label className="field-label" htmlFor="f-role">Your background <span className="opt">optional</span></label>
          <input id="f-role" placeholder="e.g. product designer, Kyoto" value={role} onChange={(e) => setRole(e.target.value)} maxLength={80} />
        </div>
      </div>

      <div className="submit-actions">
        {contactEmail ? (
          <button type="button" className="btn" onClick={sendEmail}>
            Send by email <span className="arrow" aria-hidden="true">→</span>
          </button>
        ) : null}
        <button type="button" className={contactEmail ? "btn btn--ghost" : "btn"} onClick={sendGithub}>
          Open as a GitHub issue <span className="arrow" aria-hidden="true">↗</span>
        </button>
      </div>
      <p className="field-hint" style={{ marginTop: "1rem", maxWidth: "36rem" }}>
        {contactEmail ? "Email opens your own mail app with the message filled in; nothing is sent until you press send there. " : ""}
        GitHub issues are public and need a free GitHub account. This site does not store anything you type here.
      </p>

      {sent ? (
        <p className="sent-note" role="status">
          {sent === "email"
            ? "Your mail app should have opened with the message ready. If it didn't, use the GitHub option or copy your text."
            : "A new tab should have opened on GitHub with your suggestion filled in — press “Submit new issue” there to post it."}{" "}
          Thank you.
        </p>
      ) : null}
    </form>
  );
}
