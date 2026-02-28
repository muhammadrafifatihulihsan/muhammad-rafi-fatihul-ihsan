import { motion } from "framer-motion";
import {
	ArrowRight,
	Database,
	Brain,
	Layers,
	Cpu,
	GitBranch,
	Globe,
} from "lucide-react";
import profile from "../data/profile.json";

const container = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const item = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
	},
};

const leftStack = [
	{ icon: Globe, label: "React", accent: true },
	{ icon: Layers, label: "Node.js", accent: false },
	{ icon: Database, label: "MySQL", accent: false },
];

const rightStack = [
	{ icon: Brain, label: "Python", accent: true },
	{ icon: Cpu, label: "scikit-learn", accent: false },
	{ icon: GitBranch, label: "ML Pipelines", accent: false },
];

function StackCard({ icon: Icon, label, accent }) {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				gap: "8px",
				padding: "8px 12px",
				borderRadius: "10px",
				background: accent
					? "color-mix(in srgb, var(--color-accent) 8%, transparent)"
					: "var(--color-bg)",
				border: "1px solid",
				borderColor: accent
					? "var(--color-accent-border, var(--color-accent))"
					: "var(--color-border)",
				width: "100%",
			}}
		>
			<div
				style={{
					width: "28px",
					height: "28px",
					borderRadius: "8px",
					background: accent
						? "color-mix(in srgb, var(--color-accent) 15%, transparent)"
						: "rgba(0,0,0,0.04)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexShrink: 0,
				}}
			>
				<Icon
					size={14}
					color={accent ? "var(--color-accent)" : "var(--color-text-muted)"}
					strokeWidth={2}
				/>
			</div>
			<span
				style={{
					fontSize: "11px",
					fontFamily: "monospace",
					fontWeight: 600,
					color: accent ? "var(--color-accent)" : "var(--color-text-muted)",
					letterSpacing: "0.03em",
					whiteSpace: "nowrap",
				}}
			>
				{label}
			</span>
		</div>
	);
}

export default function About() {
	const { about } = profile;

	return (
		<section id="about" className="py-32 relative bg-[var(--color-bg)]">
			<div className="section-container">
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center"
				>
					{/* ── Visual Bridge Diagram ── */}
					<motion.div
						variants={item}
						className="order-last lg:order-first w-full"
					>
						<div
							style={{
								position: "relative",
								borderRadius: "20px",
								border: "1px solid var(--color-border)",
								background: "var(--color-surface, rgba(0,0,0,0.02))",
								padding: "36px 24px 32px",
								overflow: "hidden",
							}}
						>
							{/* Background grid */}
							<div
								style={{
									position: "absolute",
									inset: 0,
									backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
									backgroundSize: "28px 28px",
									opacity: 0.25,
									pointerEvents: "none",
									borderRadius: "20px",
								}}
							/>

							{/* Accent glow center */}
							<div
								style={{
									position: "absolute",
									top: "50%",
									left: "50%",
									transform: "translate(-50%, -50%)",
									width: "120px",
									height: "120px",
									borderRadius: "50%",
									background:
										"radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
									opacity: 0.08,
									pointerEvents: "none",
									filter: "blur(20px)",
								}}
							/>

							{/* ── Top label row ── */}
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									marginBottom: "20px",
									position: "relative",
									zIndex: 1,
								}}
							>
								{["Production Systems", "Intelligent Models"].map(
									(label, i) => (
										<div
											key={i}
											style={{
												fontFamily: "monospace",
												fontSize: "9px",
												letterSpacing: "0.15em",
												textTransform: "uppercase",
												color: "var(--color-text-muted)",
												opacity: 0.7,
												width: "45%",
												textAlign: i === 0 ? "left" : "right",
											}}
										>
											{label}
										</div>
									),
								)}
							</div>

							{/* ── Main 3-column layout ── */}
							<div
								style={{
									display: "grid",
									gridTemplateColumns: "1fr auto 1fr",
									gap: "12px",
									alignItems: "center",
									position: "relative",
									zIndex: 1,
								}}
							>
								{/* Left stack */}
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "8px",
									}}
								>
									{leftStack.map((s, i) => (
										<StackCard key={i} {...s} />
									))}
								</div>

								{/* Center bridge */}
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										gap: "8px",
										padding: "0 8px",
									}}
								>
									{/* Top dot */}
									<div
										style={{
											width: "1px",
											height: "24px",
											background:
												"linear-gradient(to bottom, transparent, var(--color-accent))",
										}}
									/>

									{/* Center badge */}
									<div
										style={{
											width: "44px",
											height: "44px",
											borderRadius: "12px",
											background: "var(--color-text)",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
											flexShrink: 0,
										}}
									>
										<GitBranch size={18} color="#fff" strokeWidth={2} />
									</div>

									{/* Bottom dot */}
									<div
										style={{
											width: "1px",
											height: "24px",
											background:
												"linear-gradient(to top, transparent, var(--color-accent))",
										}}
									/>

									{/* Label */}
									<div
										style={{
											fontFamily: "monospace",
											fontSize: "8px",
											letterSpacing: "0.1em",
											textTransform: "uppercase",
											color: "var(--color-accent)",
											textAlign: "center",
											lineHeight: 1.5,
											whiteSpace: "nowrap",
										}}
									>
										Full
										<br />
										Stack
									</div>
								</div>

								{/* Right stack */}
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "8px",
									}}
								>
									{rightStack.map((s, i) => (
										<StackCard key={i} {...s} />
									))}
								</div>
							</div>

							{/* ── Bottom tag line ── */}
							<div
								style={{
									marginTop: "28px",
									paddingTop: "20px",
									borderTop: "1px solid var(--color-border)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									gap: "8px",
									position: "relative",
									zIndex: 1,
								}}
							>
								<div
									style={{
										height: "1px",
										flex: 1,
										background: "var(--color-border)",
									}}
								/>
								<span
									style={{
										fontFamily: "monospace",
										fontSize: "9px",
										letterSpacing: "0.15em",
										textTransform: "uppercase",
										color: "var(--color-accent)",
										opacity: 0.8,
										whiteSpace: "nowrap",
									}}
								>
									Robust Architecture meets Practical AI
								</span>
								<div
									style={{
										height: "1px",
										flex: 1,
										background: "var(--color-border)",
									}}
								/>
							</div>
						</div>
					</motion.div>

					{/* ── Text narrative ── */}
					<div
						className="flex flex-col gap-6 order-first lg:order-last"
						style={{ paddingTop: "24px", paddingBottom: "24px" }}
					>
						<motion.div variants={item}>
							<div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--color-accent)] mb-6 flex items-center gap-3">
								{about.sectionLabel}
								<div className="h-px bg-[var(--color-accent)] opacity-40 flex-1 max-w-[60px]" />
							</div>
							<h2 className="font-heading font-bold text-[clamp(28px,4vw,40px)] leading-[1.2] tracking-tight text-[var(--color-text)] whitespace-pre-line">
								{about.heading}
							</h2>
						</motion.div>

						<motion.div variants={item} className="flex flex-col gap-4">
							{about.paragraphs.map((p, i) => (
								<p
									key={i}
									className="text-[15px] text-[var(--color-text-muted)] leading-[1.75] [&>strong]:text-[var(--color-text)] [&>strong]:font-medium"
									dangerouslySetInnerHTML={{ __html: p }}
								/>
							))}
						</motion.div>

						{/* ── CTA Button ── */}
						<motion.div variants={item} className="mt-4 mb-10">
							<a
								href="#projects"
								style={{
									display: "inline-flex",
									alignItems: "center",
									gap: "8px",
									padding: "12px 24px",
									borderRadius: "999px",
									background: "var(--color-text)",
									color: "#fff",
									fontSize: "13px",
									fontWeight: 600,
									textDecoration: "none",
									letterSpacing: "0.02em",
									boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
									transition:
										"background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease",
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.background = "var(--color-accent)";
									e.currentTarget.style.transform = "translateY(-2px)";
									e.currentTarget.style.boxShadow =
										"0 8px 20px rgba(0,0,0,0.15)";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.background = "var(--color-text)";
									e.currentTarget.style.transform = "translateY(0)";
									e.currentTarget.style.boxShadow =
										"0 4px 14px rgba(0,0,0,0.12)";
								}}
							>
								{about.ctaText}
								<ArrowRight size={15} />
							</a>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
