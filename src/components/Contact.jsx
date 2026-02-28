import { useState } from "react";
import { motion } from "framer-motion";
import {
	Linkedin,
	Github,
	Mail,
	Copy,
	Check,
	ExternalLink,
	MapPin,
	Coffee,
	Sparkles,
} from "lucide-react";
import profile from "../data/profile.json";
import social from "../data/social.json";

/* ─── Animation Variants ─────────────────────────────── */
const container = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
	},
};
const footerItem = {
	hidden: { opacity: 0, y: 16 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
	},
};

/* ─── Data ───────────────────────────────────────────── */
const iconMap = { Linkedin, Github, Mail, ExternalLink };

/* 2 kolom nav — pisah jadi 2 array */
const navLinksLeft = [
	{ label: "About", href: "#about" },
	{ label: "Skills", href: "#skills" },
	{ label: "Projects", href: "#projects" },
];
const navLinksRight = [
	{ label: "Credentials", href: "#credentials" },
	{ label: "Contact", href: "#contact" },
];

/* Footer dark-blue base color */
const FOOTER_BG = "#0F1C2E"; /* deep navy, soft dark blue */
const FOOTER_TEXT = "#E8EDF5"; /* near-white blue tint */
const FOOTER_DIM = "rgba(232,237,245,0.45)";
const FOOTER_FAINT = "rgba(232,237,245,0.25)";
const FOOTER_BORDER = "rgba(232,237,245,0.08)";
const SOCIAL_HOVER = "#60A5FA"; /* bright blue-400 */

/* ─── Ambient Particle ───────────────────────────────── */
function Particle({ x, y, delay }) {
	return (
		<motion.div
			className="absolute w-1 h-1 rounded-full bg-[var(--color-accent)] pointer-events-none"
			style={{ left: `${x}%`, top: `${y}%` }}
			animate={{ y: [-10, 10, -10], opacity: [0.06, 0.2, 0.06] }}
			transition={{
				duration: 5 + delay,
				repeat: Infinity,
				ease: "easeInOut",
				delay,
			}}
		/>
	);
}

const particles = [
	{ x: 8, y: 15, delay: 0 },
	{ x: 90, y: 10, delay: 1.3 },
	{ x: 20, y: 80, delay: 0.6 },
	{ x: 75, y: 65, delay: 2.1 },
	{ x: 50, y: 5, delay: 1.7 },
	{ x: 95, y: 45, delay: 0.3 },
	{ x: 3, y: 55, delay: 2.5 },
	{ x: 60, y: 92, delay: 0.9 },
];

/* ═══════════════════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════════════════ */
export default function Contact() {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(profile.email);
		setCopied(true);
		setTimeout(() => setCopied(false), 2500);
	};

	return (
		<>
			{/* ════════════════════════════════════════
		    CONTACT SECTION
		════════════════════════════════════════ */}
			<section
				id="contact"
				className="relative bg-[var(--color-bg)] overflow-hidden"
				style={{
					paddingTop: "clamp(100px, 12vw, 160px)",
					paddingBottom: "clamp(80px, 10vw, 128px)",
				}}
			>
				{/* Top separator glow */}
				<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-20 pointer-events-none" />

				{/* Ambient particles */}
				{particles.map((p, i) => (
					<Particle key={i} {...p} />
				))}

				{/* Soft radial glow */}
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						background:
							"radial-gradient(ellipse 55% 45% at 50% 35%, color-mix(in srgb, var(--color-accent) 7%, transparent), transparent 70%)",
					}}
				/>

				<div className="section-container relative z-10">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.15 }}
						variants={container}
						className="flex flex-col items-center text-center"
					>
						{/* Coffee badge */}
						<motion.div
							variants={item}
							className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--color-accent)] mb-10 px-6 py-3 rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5"
						>
							<Coffee size={12} className="animate-pulse" />
							Let's Make a Coffee Together
							<Coffee size={12} className="animate-pulse" />
						</motion.div>

						{/* Heading */}
						<motion.h2
							variants={item}
							className="font-heading font-bold text-[clamp(44px,7vw,80px)] leading-none tracking-tight text-[var(--color-text)] mb-8"
						>
							Let's{" "}
							<span className="font-serif italic font-medium text-accent relative inline-block">
								Collaborate.
								<motion.span
									className="absolute -bottom-2 left-0 h-[2px] bg-accent opacity-35 rounded-full"
									initial={{ width: 0 }}
									whileInView={{ width: "100%" }}
									viewport={{ once: true }}
									transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
								/>
							</span>
						</motion.h2>

						{/* Subtext */}
						<div className="opacity-0">untuk spacing</div>
						<motion.p
							variants={item}
							className="text-[16px] md:text-[18px] text-[var(--color-text-muted)] leading-[1.85] mb-7"
							style={{ maxWidth: "820px" }}
						>
							{profile.contactSubtext}
						</motion.p>

						{/* Status pill */}
						<motion.div
							variants={item}
							className="inline-flex items-center gap-3 mb-16"
						>
							<span className="text-[14px] text-text-muted">Currently</span>
							<span className="inline-flex items-center gap-2 font-semibold text-[13px] text-[var(--color-text)] px-4 py-2 rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/6">
								<span className="relative flex items-center h-2 w-3 shrink-0">
									<span className="left-1 animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-55" />
									<span className="left-1.5 relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]" />
								</span>
								{profile.status}
								<div className="opacity-0"></div>
							</span>
							<span className="text-[14px] text-[var(--color-text-muted)]">
								for new opportunities.
							</span>
						</motion.div>

						{/* Contact Cards */}
						<div className="opacity-0">untuk kasispacae</div>
						<motion.div
							variants={item}
							className="flex flex-col sm:flex-row gap-4 items-stretch w-full"
							style={{ maxWidth: "600px" }}
						>
							{/* Email card */}
							<motion.div
								className="group flex items-center gap-5 border border-[var(--color-border)] rounded-2xl px-6 py-5 bg-[var(--color-bg)] hover:border-[var(--color-accent)]/40 transition-all duration-300 flex-1"
								whileHover={{ y: -3, transition: { duration: 0.2 } }}
							>
								<div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/8 border border-[var(--color-accent)]/12 flex items-center justify-center text-[var(--color-accent)] shrink-0">
									<Mail size={20} />
								</div>
								<div className="flex flex-col flex-1 min-w-0 text-left">
									<span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-1">
										Email Address
									</span>
									<span className="font-mono text-[13px] font-semibold text-[var(--color-text)] truncate">
										{profile.email}
									</span>
								</div>
								<motion.button
									onClick={handleCopy}
									whileTap={{ scale: 0.93 }}
									className={`flex items-center gap-2 px-5 py-3 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all duration-300 shrink-0 ${
										copied
											? "bg-[var(--color-accent)] text-white shadow-lg shadow-[var(--color-accent)]/20"
											: "border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5"
									}`}
								>
									{copied ? (
										<>
											<Check size={13} /> Copied!
										</>
									) : (
										<>
											<Copy size={13} /> Copy
										</>
									)}
								</motion.button>
							</motion.div>

							{/* Location card */}
							<motion.div
								className="flex items-center gap-5 border border-[var(--color-border)] rounded-2xl px-6 py-5 bg-[var(--color-bg)] hover:border-[var(--color-accent)]/40 transition-all duration-300 sm:w-[210px] shrink-0"
								whileHover={{ y: -3, transition: { duration: 0.2 } }}
							>
								<div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/8 border border-[var(--color-accent)]/12 flex items-center justify-center shrink-0">
									<MapPin size={20} className="text-[var(--color-accent)]" />
								</div>
								<div className="flex flex-col text-left">
									<span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-1">
										Based in
									</span>
									<span className="font-bold text-[15px] text-[var(--color-text)]">
										Indonesia
									</span>
								</div>
							</motion.div>
						</motion.div>

						{/* Response note */}
						<motion.p
							variants={item}
							className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] text-[var(--color-text-faint)] uppercase tracking-widest"
						>
							<Sparkles size={10} className="text-[var(--color-accent)]" />
							Usually responds within 24 hours
							<Sparkles size={10} className="text-[var(--color-accent)]" />
						</motion.p>
					</motion.div>
				</div>
			</section>

			{/* ════════════════════════════════════════
		    FOOTER — deep navy dark, Figma-clean
		════════════════════════════════════════ */}
			<footer
				className="relative w-full overflow-hidden"
				style={{ backgroundColor: FOOTER_BG }}
			>
				{/* Top accent glow line */}
				<div
					className="absolute top-0 left-0 right-0 h-px"
					style={{
						background: `linear-gradient(90deg, transparent 0%, var(--color-accent) 50%, transparent 100%)`,
						opacity: 0.4,
					}}
				/>

				{/* Subtle grid texture */}
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						backgroundImage:
							"linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
						backgroundSize: "56px 56px",
					}}
				/>

				{/* Ambient glow spot */}
				<div
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none blur-3xl"
					style={{
						background: "var(--color-accent)",
						opacity: 0.04,
					}}
				/>

				<div
					className="section-container relative z-10"
					style={{
						paddingTop: "clamp(52px, 6vw, 80px)",
						paddingBottom: "clamp(28px, 3vw, 40px)",
					}}
				>
					{/* ── Top grid: brand / nav / social ── */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }}
						variants={{
							hidden: { opacity: 0 },
							visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
						}}
						className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-12"
					>
						{/* ── Brand column ── */}
						<motion.div variants={footerItem} className="flex flex-col gap-5">
							<div className="flex flex-col gap-1.5">
								<span
									className="font-heading font-bold text-[22px] tracking-tight"
									style={{ color: FOOTER_TEXT }}
								>
									{profile.name}
								</span>
								<span
									className="font-mono text-[10px] uppercase tracking-[0.22em]"
									style={{ color: FOOTER_DIM }}
								>
									Fullstack · ML Engineer
								</span>
							</div>

							<p
								className="text-[13px] leading-[1.8]"
								style={{ color: FOOTER_DIM, maxWidth: "215px" }}
							>
								{profile.tagline ||
									"Building production-ready systems at the intersection of engineering and intelligence."}
							</p>

							{/* Made with coffee */}
							<div
								className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest"
								style={{ color: FOOTER_FAINT }}
							>
								Made with
								<motion.span
									animate={{ scale: [1, 1.4, 1] }}
									transition={{
										duration: 1.6,
										repeat: Infinity,
										ease: "easeInOut",
									}}
									style={{ color: "#F87171", fontSize: "13px", lineHeight: 1 }}
								>
									♥
								</motion.span>
								&amp;
								<motion.span
									animate={{ rotate: [0, -15, 15, 0] }}
									transition={{
										duration: 2.5,
										repeat: Infinity,
										ease: "easeInOut",
										delay: 0.8,
									}}
									className="inline-flex"
								>
									<Coffee size={11} style={{ color: "var(--color-white)" }} />
								</motion.span>
								too much coffee
							</div>
						</motion.div>

						{/* ── Navigation column — 2 sub-columns ── */}
						<motion.div
							variants={footerItem}
							className="flex flex-col gap-4 md:items-center"
						>
							<span
								className="font-mono text-[10px] uppercase tracking-[0.22em] mb-1 w-full md:text-center"
								style={{ color: FOOTER_FAINT }}
							>
								Navigation
							</span>
							{/* 2-column grid for nav links */}
							<div className="grid grid-cols-2 gap-x-8 gap-y-3 w-full md:w-auto">
								{[...navLinksLeft, ...navLinksRight].map((link) => (
									<motion.a
										key={link.label}
										href={link.href}
										className="group inline-flex items-center gap-2 text-[13px] font-medium transition-all duration-200"
										style={{ color: FOOTER_DIM }}
										whileHover={{ x: 3, transition: { duration: 0.15 } }}
										onHoverStart={(e) => {
											e.target.style.color = FOOTER_TEXT;
										}}
										onHoverEnd={(e) => {
											e.target.style.color = FOOTER_DIM;
										}}
									>
										<span
											className="w-0 h-px group-hover:w-3 transition-all duration-300 rounded-full shrink-0"
											style={{ background: "var(--color-accent)" }}
										/>
										{link.label}
									</motion.a>
								))}
							</div>
						</motion.div>

						{/* ── Social column ── */}
						<motion.div
							variants={footerItem}
							className="flex flex-col gap-3 md:items-end"
						>
							<span
								className="font-mono text-[10px] uppercase tracking-[0.22em] mb-1"
								style={{ color: FOOTER_FAINT }}
							>
								Connect
							</span>
							{social.map((s) => {
								const Icon = iconMap[s.icon] || ExternalLink;
								return (
									<motion.a
										key={s.platform}
										href={s.url}
										target="_blank"
										rel="noreferrer"
										aria-label={s.platform}
										className="group inline-flex items-center gap-3 text-[13px] font-medium w-fit md:ml-auto transition-all duration-200"
										style={{ color: FOOTER_DIM }}
										whileHover={{ x: -4, transition: { duration: 0.15 } }}
										onHoverStart={(e) => {
											e.target.style.color = SOCIAL_HOVER;
										}}
										onHoverEnd={(e) => {
											e.target.style.color = FOOTER_DIM;
										}}
									>
										<span>{s.platform}</span>
										<span
											className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 group-hover:border-[#60A5FA]"
											style={{
												border: `1px solid ${FOOTER_BORDER}`,
												background: "rgba(255,255,255,0.04)",
											}}
										>
											<Icon size={14} />
										</span>
									</motion.a>
								);
							})}
						</motion.div>
					</motion.div>

					{/* ── Divider ── */}
					<div
						className="w-full h-px mb-7"
						style={{ background: FOOTER_BORDER }}
					/>

					{/* ── Bottom bar ── */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="flex flex-col sm:flex-row items-center justify-between gap-3"
					>
						<span
							className="font-mono text-[11px] uppercase tracking-widest"
							style={{ color: FOOTER_FAINT }}
						>
							&copy; {new Date().getFullYear()} {profile.name}. All Rights
							Reserved.
						</span>
						<span
							className="font-mono text-[11px] uppercase tracking-widest"
							style={{ color: FOOTER_FAINT }}
						>
							Let's build a team.
						</span>
					</motion.div>
				</div>
			</footer>
		</>
	);
}
