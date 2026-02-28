import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import profile from "../data/profile.json";
import avatarImg from "../img/muhammad_rafi_fatihul_ihsan.jpeg";

function useTypingText(texts) {
	const [text, setText] = useState("");
	const [index, setIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		let timeout;
		const currentText = texts[index];
		if (!isDeleting) {
			if (text !== currentText) {
				timeout = setTimeout(
					() => setText(currentText.slice(0, text.length + 1)),
					60,
				);
			} else {
				timeout = setTimeout(() => setIsDeleting(true), 2500);
			}
		} else {
			if (text === "") {
				setIsDeleting(false);
				setIndex((i) => (i + 1) % texts.length);
			} else {
				timeout = setTimeout(() => setText(text.slice(0, -1)), 30);
			}
		}
		return () => clearTimeout(timeout);
	}, [text, isDeleting, index, texts]);

	return text;
}

export default function Hero() {
	const typedText = useTypingText(profile.roles);

	return (
		<section
			id="hero"
			className="relative min-h-[100svh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-[var(--color-bg)] w-full"
		>
			{/* Decorative gradients */}
			<div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[280px] bg-blue-500/8 rounded-full blur-[150px] pointer-events-none" />
			<div className="absolute top-1/3 right-[-80px] w-[320px] h-[320px] bg-amber-500/8 rounded-full blur-[110px] pointer-events-none" />

			<div className="section-container relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
				{/* ── Avatar ── */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					className="mb-6 relative"
				>
					<div className="absolute inset-0 bg-gray-200 rounded-full blur-xl scale-110 opacity-60" />

					<div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-[3px] border-white shadow-xl overflow-hidden relative z-10 bg-gray-100">
						<img
							src={avatarImg}
							alt={profile.name}
							className="w-full h-full object-cover grayscale"
							onError={(e) => {
								e.target.style.display = "none";
								e.target.parentElement.innerHTML =
									'<div class="w-full h-full flex items-center justify-center font-bold text-3xl text-gray-400">MR</div>';
							}}
						/>
					</div>

					{/* Available badge */}
					<div
						style={{
							position: "absolute",
							bottom: "-4px",
							left: "50%",
							transform: "translateX(-50%)",
							zIndex: 20,
							background: "#fff",
							border: "1px solid var(--color-border)",
							borderRadius: "999px",
							padding: "4px 10px",
							display: "flex",
							alignItems: "center",
							gap: "6px",
							boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
							whiteSpace: "nowrap",
						}}
					>
						{/* Pulsing green dot */}
						<span
							style={{
								position: "relative",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								width: "8px",
								height: "8px",
							}}
						>
							<span
								style={{
									position: "absolute",
									width: "8px",
									height: "8px",
									borderRadius: "50%",
									background: "#22c55e",
									opacity: 0.4,
									animation: "ping 1.4s cubic-bezier(0,0,0.2,1) infinite",
								}}
							/>
							<span
								style={{
									width: "6px",
									height: "6px",
									borderRadius: "50%",
									background: "#22c55e",
									display: "block",
									position: "relative",
								}}
							/>
						</span>
						<span
							style={{
								fontSize: "11px",
								fontWeight: 600,
								color: "var(--color-text)",
								letterSpacing: "0.01em",
							}}
						>
							Available
						</span>
					</div>

					<style>{`
                        @keyframes ping {
                            75%, 100% { transform: scale(2.2); opacity: 0; }
                        }
                    `}</style>
				</motion.div>

				{/* ── Name + Location ── */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="flex items-center justify-center gap-2 mt-4 mb-6"
				>
					<span className="font-semibold text-[15px] text-[var(--color-text)]">
						{profile.name}
					</span>
					<span className="text-gray-300">•</span>
					<span className="flex items-center gap-1 text-[13px] text-[var(--color-text-muted)]">
						<MapPin size={13} /> Indonesia
					</span>
				</motion.div>

				{/* ── Headline ── */}
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
					className="font-heading font-extrabold text-[clamp(40px,7vw,84px)] leading-[1.05] tracking-tightest text-[var(--color-text)] mb-5 text-center"
				>
					{profile.headline1}{" "}
					<span className="block sm:inline font-serif italic font-medium text-[var(--color-accent)]">
						{profile.headline2}
					</span>
				</motion.h1>

				{/* ── Typing Role ── */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="text-lg sm:text-xl font-medium text-[var(--color-text-muted)] mb-16 h-8 flex items-center justify-center gap-2"
				>
					<span>I specialize in</span>
					<span className="text-[var(--color-text)] font-semibold border-b-2 border-amber-400 typing-cursor">
						{typedText}
					</span>
				</motion.div>

				{/* ── CTA Buttons ── */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
						gap: "12px",
						flexWrap: "wrap",
						marginTop: "20px",
					}}
				>
					{/* Primary */}
					<a
						href="#projects"
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: "8px",
							padding: "13px 28px",
							borderRadius: "999px",
							background: "var(--color-text)",
							color: "#fff",
							fontSize: "14px",
							fontWeight: 600,
							textDecoration: "none",
							letterSpacing: "0.01em",
							boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
							transition:
								"background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease",
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.background = "var(--color-accent)";
							e.currentTarget.style.transform = "translateY(-2px)";
							e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.18)";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.background = "var(--color-text)";
							e.currentTarget.style.transform = "translateY(0)";
							e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.15)";
						}}
					>
						Explore My Work
						<ArrowRight size={16} />
					</a>

					{/* Secondary */}
					<a
						href="#about"
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: "8px",
							padding: "13px 28px",
							borderRadius: "999px",
							background: "transparent",
							color: "var(--color-text)",
							fontSize: "14px",
							fontWeight: 600,
							textDecoration: "none",
							letterSpacing: "0.01em",
							border: "2px solid var(--color-border)",
							transition:
								"border-color 0.2s ease, background 0.2s ease, transform 0.15s ease",
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.borderColor = "var(--color-text)";
							e.currentTarget.style.background = "rgba(0,0,0,0.03)";
							e.currentTarget.style.transform = "translateY(-2px)";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.borderColor = "var(--color-border)";
							e.currentTarget.style.background = "transparent";
							e.currentTarget.style.transform = "translateY(0)";
						}}
					>
						Read My Story
					</a>
				</motion.div>
			</div>
		</section>
	);
}
