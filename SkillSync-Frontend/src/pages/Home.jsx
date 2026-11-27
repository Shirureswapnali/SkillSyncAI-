
import React from "react";
import { Link } from "react-router-dom";
import {
  Zap, ArrowRight, Sparkles, Target, ShieldCheck,
  Search, TrendingUp, Users, BriefcaseBusiness,
  Code2, BrainCircuit, BadgeCheck, MessageSquare,
  ChevronRight, CheckCircle2, Menu
} from "lucide-react";
import "./Home.css";

const features = [
  {
    icon: Target,
    title: "AI Skill Matching",
    desc: "Connect projects with developers based on skills, experience and project requirements."
  },
  {
    icon: TrendingUp,
    title: "Smart Bid Prediction",
    desc: "Make informed bidding decisions with intelligent bid success and price predictions."
  },
  {
    icon: ShieldCheck,
    title: "Trust & Fraud Detection",
    desc: "Identify suspicious activities and evaluate reliability through intelligent risk signals."
  },
  {
    icon: Search,
    title: "Developer Discovery",
    desc: "Discover suitable talent and find opportunities that match your technical strengths."
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Insights",
    desc: "Use data-driven recommendations to make better freelancing decisions."
  },
  {
    icon: BadgeCheck,
    title: "Reviews & Reputation",
    desc: "Build credibility through reviews, ratings and transparent project history."
  }
];

const steps = [
  {
    number: "01",
    title: "Create your profile",
    desc: "Join as a client or developer and showcase your requirements, skills and expertise."
  },
  {
    number: "02",
    title: "Discover & Connect",
    desc: "Explore relevant projects, discover developers and connect with the right opportunities."
  },
  {
    number: "03",
    title: "Collaborate & Grow",
    desc: "Submit proposals, manage projects and build lasting professional relationships."
  }
];

function Logo() {
  return (
    <div className="home-logo">
      <span className="home-logo-icon"><Zap size={20} fill="currentColor" /></span>
      <span>SkillSync</span>
      <small>AI</small>
    </div>
  );
}

export default function Home() {
  return (
    <div className="home-page">

      {/* NAVBAR */}
      <header className="home-navbar">
        <div className="home-nav-inner">
          <a href="#home" className="home-brand">
            <Logo />
          </a>

          <nav className="home-nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#how-it-works">How it works</a>
            <a href="#features">Features</a>
            <a href="#benefits">Benefits</a>
          </nav>

          <div className="home-nav-actions">
            <Link to="/login" className="home-login-btn">Login</Link>
            <a href="#join" className="home-primary-btn">
              Get Started <ArrowRight size={16} />
            </a>
          </div>

          <a href="#join" className="home-mobile-menu" aria-label="Get started">
            <Menu size={23} />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="home-hero" id="home">
        <div className="home-hero-grid">
          <div className="home-hero-content">
            <div className="home-eyebrow">
              <Sparkles size={15} />
              INTELLIGENT FREELANCING PLATFORM
            </div>

            <h1>
              Where Skills Meet
              <span> Smart Opportunities.</span>
            </h1>

            <p className="home-hero-description">
              Discover the right talent, find meaningful projects and make
              smarter freelancing decisions with the power of Artificial
              Intelligence.
            </p>

            <div className="home-hero-actions">
              <a href="#join" className="home-primary-btn home-large-btn">
                Explore SkillSync <ArrowRight size={18} />
              </a>
              <a href="#about" className="home-outline-btn">
                Discover More
              </a>
            </div>

            <div className="home-hero-note">
              <CheckCircle2 size={16} />
              Smarter connections. Better opportunities. Greater trust.
            </div>
          </div>

          {/* VISUAL DASHBOARD CARD */}
          <div className="home-hero-visual">
            <div className="hero-glow"></div>

            <div className="hero-dashboard">
              <div className="hero-dash-top">
                <div>
                  <span className="hero-dash-label">SKILLSYNC AI</span>
                  <h3>Intelligent Matching</h3>
                </div>
                <span className="hero-live"><i></i> AI ACTIVE</span>
              </div>

              <div className="hero-match-card">
                <div className="hero-match-heading">
                  <div className="hero-icon-box"><BrainCircuit size={22}/></div>
                  <div>
                    <strong>Project Compatibility</strong>
                    <small>AI-powered skill analysis</small>
                  </div>
                </div>
                <div className="hero-match-score">
                  <div>
                    <strong>92%</strong>
                    <small>Match quality</small>
                  </div>
                  <div className="hero-score-circle">92</div>
                </div>
                <div className="hero-progress"><span></span></div>
                <div className="hero-skills">
                  <span>React.js</span>
                  <span>Python</span>
                  <span>Machine Learning</span>
                </div>
              </div>

              <div className="hero-bottom-cards">
                <div className="hero-mini-card">
                  <Users size={19}/>
                  <strong>Right Talent</strong>
                  <small>Skill-based discovery</small>
                </div>
                <div className="hero-mini-card">
                  <ShieldCheck size={19}/>
                  <strong>Trusted Work</strong>
                  <small>Intelligent risk signals</small>
                </div>
              </div>

              <div className="hero-floating-tag">
                <Sparkles size={15}/>
                AI Insights
                <span>+</span>
              </div>
            </div>
          </div>
        </div>

        <div className="home-hero-bottom">
          <span>BUILT FOR BETTER FREELANCING</span>
          <span>AI-POWERED MATCHING</span>
          <span>SMARTER DECISIONS</span>
          <span>TRUST & TRANSPARENCY</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="home-section home-about" id="about">
        <div className="home-section-heading">
          <span className="home-section-label">ABOUT SKILLSYNC AI</span>
          <h2>Freelancing, made <span>smarter.</span></h2>
          <p>
            SkillSync AI brings clients and developers together through
            intelligent technology, meaningful connections and
            data-driven insights.
          </p>
        </div>

        <div className="home-about-grid">
          <div className="home-about-main">
            <div className="home-about-icon"><Zap size={25}/></div>
            <h3>More than just a freelancing platform.</h3>
            <p>
              Traditional freelancing platforms can make it difficult to
              identify the right talent, choose suitable projects and
              evaluate reliability. SkillSync AI aims to make this process
              more intelligent.
            </p>
            <p>
              By combining project discovery, skill matching, bidding and
              AI-based risk insights, we aim to create a more transparent
              and efficient freelancing experience.
            </p>
            <a href="#features" className="home-text-link">
              Explore our features <ArrowRight size={16}/>
            </a>
          </div>

          <div className="home-about-side">
            <div className="home-about-point">
              <Target size={21}/>
              <div>
                <strong>Right Match</strong>
                <p>Bring the right skills and project requirements together.</p>
              </div>
            </div>
            <div className="home-about-point">
              <ShieldCheck size={21}/>
              <div>
                <strong>Better Trust</strong>
                <p>Support informed decisions with intelligent risk signals.</p>
              </div>
            </div>
            <div className="home-about-point">
              <TrendingUp size={21}/>
              <div>
                <strong>Smarter Growth</strong>
                <p>Help clients and developers discover better opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="home-section home-process" id="how-it-works">
        <div className="home-section-heading">
          <span className="home-section-label">SIMPLE PROCESS</span>
          <h2>How SkillSync AI <span>works.</span></h2>
          <p>From discovering opportunities to building successful connections.</p>
        </div>

        <div className="home-steps-grid">
          {steps.map((step, index) => (
            <div className="home-step-card" key={step.number}>
              <div className="home-step-number">{step.number}</div>
              <div className="home-step-line"></div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              {index !== 2 && <ChevronRight className="home-step-arrow"/>}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="home-section home-features" id="features">
        <div className="home-section-heading">
          <span className="home-section-label">POWERFUL CAPABILITIES</span>
          <h2>Technology that works <span>smarter.</span></h2>
          <p>
            Intelligent features designed to improve project discovery,
            decision-making and trust.
          </p>
        </div>

        <div className="home-features-grid">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div className="home-feature-card" key={feature.title}>
                <div className="home-feature-icon"><Icon size={23}/></div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
                <span className="home-feature-arrow"><ArrowRight size={17}/></span>
              </div>
            );
          })}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="home-section home-benefits" id="benefits">
        <div className="home-section-heading">
          <span className="home-section-label">ONE PLATFORM, TWO OPPORTUNITIES</span>
          <h2>Designed for <span>everyone.</span></h2>
          <p>Whether you need talent or want to showcase your skills, SkillSync AI brings you closer to your goals.</p>
        </div>

        <div className="home-benefits-grid">
          <div className="home-benefit-card client-card">
            <div className="home-benefit-icon"><BriefcaseBusiness size={25}/></div>
            <span className="home-benefit-tag">FOR CLIENTS</span>
            <h3>Find the right people for your next big idea.</h3>
            <p>
              Discover skilled developers, evaluate proposals and make
              informed project decisions with intelligent insights.
            </p>
            <ul>
              <li><CheckCircle2/> Discover suitable developers</li>
              <li><CheckCircle2/> Compare proposals and bids</li>
              <li><CheckCircle2/> Evaluate trust and project risks</li>
              <li><CheckCircle2/> Manage projects in one place</li>
            </ul>
            <a href="#join" className="home-benefit-link">
              Explore as a Client <ArrowRight size={17}/>
            </a>
          </div>

          <div className="home-benefit-card developer-card">
            <div className="home-benefit-icon"><Code2 size={25}/></div>
            <span className="home-benefit-tag">FOR DEVELOPERS</span>
            <h3>Turn your skills into meaningful opportunities.</h3>
            <p>
              Discover relevant projects, showcase your expertise and
              make smarter bidding decisions.
            </p>
            <ul>
              <li><CheckCircle2/> Find projects matching your skills</li>
              <li><CheckCircle2/> Submit competitive proposals</li>
              <li><CheckCircle2/> Get intelligent bidding insights</li>
              <li><CheckCircle2/> Build your professional reputation</li>
            </ul>
            <a href="#join" className="home-benefit-link">
              Explore as a Developer <ArrowRight size={17}/>
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="home-join-section" id="join">
        <div className="home-join-content">
          <div className="home-section-label">YOUR NEXT OPPORTUNITY STARTS HERE</div>
          <h2>Ready to make your next move <span>smarter?</span></h2>
          <p>
            Discover a better way to connect, collaborate and grow
            with SkillSync AI.
          </p>
          <div className="home-join-actions">
            <Link to="/login" className="home-join-login">
              Login to SkillSync <ArrowRight size={17}/>
            </Link>
            <span className="home-register-note">
              New to SkillSync? Registration coming soon.
            </span>
          </div>
        </div>
        <div className="home-join-decoration"><BrainCircuit size={130}/></div>
      </section>

      {/* FOOTER */}
      <footer className="home-footer">
        <div className="home-footer-main">
          <div>
            <Logo/>
            <p>
              Connecting skills with opportunities through
              intelligent freelancing.
            </p>
          </div>

          <div className="home-footer-links">
            <strong>Explore</strong>
            <a href="#about">About us</a>
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
          </div>

          <div className="home-footer-links">
            <strong>Get started</strong>
            <Link to="/login">Login</Link>
            <a href="#join">Registration</a>
            <a href="#benefits">For clients & developers</a>
          </div>
        </div>
        <div className="home-footer-bottom">
          <span>© {new Date().getFullYear()} SkillSync AI. All rights reserved.</span>
          <span>Built for smarter freelancing.</span>
        </div>
      </footer>
    </div>
  );
}
