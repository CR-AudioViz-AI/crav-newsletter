// app/page.tsx — Javari Newsletter
// AI-powered email campaigns
// CR AudioViz AI · EIN 39-3646201 · May 2026
"use client";
import { useState } from "react";

const TYPES = [
  { id:"welcome",     label:"Welcome Email",     emoji:"👋", desc:"First impression that converts" },
  { id:"newsletter",  label:"Newsletter",         emoji:"📰", desc:"Weekly/monthly updates" },
  { id:"promo",       label:"Promotional",        emoji:"💰", desc:"Drive sales and conversions" },
  { id:"nurture",     label:"Drip/Nurture",       emoji:"🌱", desc:"Long-term relationship building" },
  { id:"reengagement",label:"Re-engagement",      emoji:"🔥", desc:"Win back inactive subscribers" },
  { id:"announcement",label:"Announcement",       emoji:"📣", desc:"New product/feature launch" },
];

export default function NewsletterHome() {
  const [type, setType] = useState("newsletter");
  const [brand, setBrand] = useState("");
  const [topic, setTopic] = useState("");
  const [audience, setAudience] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const t = TYPES.find(x => x.id === type) || TYPES[0];

  async function generate() {
    if (!topic.trim()) return;
    setLoading(true); setEmail("");
    try {
      const res = await fetch("/api/chat", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          messages: [{ role:"user", content:`Write a complete ${t.label} email.

Brand/Company: ${brand || "Our Company"}
Topic/Purpose: ${topic}
Audience: ${audience || "our subscribers"}

Include:
- Subject line (A/B test: give 2 options)
- Preview text (under 100 chars)
- Email body with proper structure (greeting, main content, CTA)
- Signature/footer

Tone: ${t.id === "promo" ? "Persuasive and urgent" : t.id === "welcome" ? "Warm and welcoming" : "Professional and engaging"}
Format clearly with labeled sections.` }],
          stream:false,
          systemOverride:"You are an email marketing expert who has written campaigns generating millions in revenue. Write compelling, high-converting emails with strong subject lines, clear CTAs, and personalized content that drives action.",
        }),
      });
      const data = await res.json();
      setEmail(data?.choices?.[0]?.message?.content || data?.content || "Error.");
    } catch { setEmail("Connection error."); }
    setLoading(false);
  }

  return (
    <div style={{ minHeight:"100vh", background:"#040912", color:"#e2e8f0", fontFamily:"system-ui" }}>
      <nav style={{ background:"#1E3A5F", padding:"0 20px", height:52, display:"flex", alignItems:"center", justifyContent:"space-between", position:"sticky", top:0, zIndex:100 }}>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <span style={{ fontSize:18 }}>📧</span>
          <span style={{ fontWeight:800, color:"#00B4D8", fontSize:15 }}>Javari Newsletter</span>
        </div>
        <a href="https://craudiovizai.com/auth/signup" style={{ background:"#FF0800", color:"#fff", borderRadius:7, padding:"5px 14px", fontSize:12, fontWeight:700, textDecoration:"none" }}>Sign Up Free</a>
      </nav>

      <section style={{ background:"linear-gradient(135deg,#1E3A5F,#040912)", padding:"56px 24px 48px", textAlign:"center" }}>
        <h1 style={{ fontSize:"clamp(26px,4vw,46px)", fontWeight:900, color:"#fff", margin:"0 0 14px", lineHeight:1.05 }}>
          Emails That Get<br /><span style={{ color:"#00B4D8" }}>Opened and Clicked</span>
        </h1>
        <p style={{ color:"rgba(255,255,255,0.7)", fontSize:15, lineHeight:1.65, margin:0, maxWidth:480, marginLeft:"auto", marginRight:"auto" }}>
          Complete email campaigns in seconds. Subject lines, body copy, CTAs — all done.
        </p>
      </section>

      <div style={{ maxWidth:900, margin:"0 auto", padding:"32px 20px 72px", display:"grid", gridTemplateColumns:"280px 1fr", gap:24 }}>
        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
          <div>
            <p style={{ fontSize:11, fontWeight:700, color:"#6B7280", textTransform:"uppercase", letterSpacing:"0.06em", margin:"0 0 8px" }}>Email Type</p>
            <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
              {TYPES.map(tp => (
                <button key={tp.id} onClick={() => setType(tp.id)}
                  style={{ background: type===tp.id ? "rgba(0,180,216,0.15)" : "#0F1F32", border:`1px solid ${type===tp.id ? "rgba(0,180,216,0.3)" : "rgba(255,255,255,0.07)"}`, borderRadius:8, padding:"8px 12px", cursor:"pointer", fontFamily:"system-ui", textAlign:"left", display:"flex", alignItems:"center", gap:8 }}>
                  <span style={{ fontSize:18 }}>{tp.emoji}</span>
                  <div>
                    <div style={{ fontSize:12, color: type===tp.id ? "#00B4D8" : "#e2e8f0", fontWeight:600 }}>{tp.label}</div>
                    <div style={{ fontSize:10, color:"#374151" }}>{tp.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {[["brand","Brand / Company","CR AudioViz AI"],["audience","Target Audience","Small business owners"],["topic","Email Topic / Goal","New feature launch, monthly updates..."]].map(([k,l,ph]) => (
            <div key={k}>
              <p style={{ fontSize:11, fontWeight:700, color:"#6B7280", textTransform:"uppercase", letterSpacing:"0.06em", margin:"0 0 6px" }}>{l}</p>
              {k === "topic" ? (
                <textarea value={topic} onChange={e => setTopic(e.target.value)} rows={2} placeholder={ph}
                  style={{ width:"100%", background:"#0F1F32", border:"1px solid rgba(0,180,216,0.15)", borderRadius:8, padding:"9px 12px", color:"#e2e8f0", fontSize:13, outline:"none", fontFamily:"system-ui", boxSizing:"border-box", resize:"vertical" }} />
              ) : (
                <input value={k==="brand" ? brand : audience} onChange={e => k==="brand" ? setBrand(e.target.value) : setAudience(e.target.value)} placeholder={ph}
                  style={{ width:"100%", background:"#0F1F32", border:"1px solid rgba(0,180,216,0.15)", borderRadius:8, padding:"9px 12px", color:"#e2e8f0", fontSize:13, outline:"none", fontFamily:"system-ui", boxSizing:"border-box" }} />
              )}
            </div>
          ))}

          <button onClick={generate} disabled={loading||!topic.trim()}
            style={{ background: loading||!topic.trim() ? "#0F1F32" : "linear-gradient(135deg,#1E3A5F,#00B4D8)", color: loading||!topic.trim() ? "#374151" : "#fff", border:"none", borderRadius:10, padding:"12px", fontSize:14, fontWeight:700, cursor: loading||!topic.trim() ? "not-allowed":"pointer", fontFamily:"system-ui" }}>
            {loading ? "Writing email..." : "✉️ Generate Email"}
          </button>
        </div>

        <div>
          {email ? (
            <div style={{ background:"#0F1F32", border:"1px solid rgba(0,180,216,0.12)", borderRadius:14, padding:"20px 24px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:14 }}>
                <span style={{ fontSize:13, fontWeight:700, color:"#00B4D8" }}>{t.emoji} {t.label}</span>
                <button onClick={() => navigator.clipboard?.writeText(email)}
                  style={{ background:"transparent", color:"#6B7280", border:"1px solid rgba(255,255,255,0.08)", borderRadius:6, padding:"3px 10px", fontSize:12, cursor:"pointer", fontFamily:"system-ui" }}>Copy</button>
              </div>
              <pre style={{ margin:0, fontSize:13, color:"#e2e8f0", lineHeight:1.7, whiteSpace:"pre-wrap", fontFamily:"system-ui" }}>{email}</pre>
            </div>
          ) : (
            <div style={{ background:"#0F1F32", border:"1px solid rgba(0,180,216,0.06)", borderRadius:14, padding:"56px 24px", textAlign:"center", color:"#374151" }}>
              <div style={{ fontSize:40, marginBottom:12 }}>✉️</div>
              <p style={{ fontSize:13 }}>Your complete email will appear here</p>
              {loading && <p style={{ fontSize:12, marginTop:8 }}>Writing your {t.label}...</p>}
            </div>
          )}
        </div>
      </div>

      <footer style={{ borderTop:"1px solid rgba(0,180,216,0.08)", padding:"14px 24px", textAlign:"center" }}>
        <p style={{ color:"#374151", fontSize:11, margin:0 }}>© 2026 CR AudioViz AI, LLC — EIN: 39-3646201 · <a href="https://craudiovizai.com/auth/signup" style={{ color:"#FF0800", textDecoration:"none", fontWeight:600 }}>Sign Up Free</a></p>
      </footer>
    </div>
  );
}