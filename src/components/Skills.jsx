import { motion } from "framer-motion";
import { useState } from "react";
import skills from "../data/skills.json";

const container = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
	hidden: { opacity: 0, y: 28 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
	},
};

const cardVar = {
	hidden: { opacity: 0, y: 32, scale: 0.96 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
	},
};

export default function Skills() {
	const [hovered, setHovered] = useState(null);

	return (
		<section
			id="skills"
			className="relative bg-[var(--color-bg)] overflow-hidden"
			/* ↓ clamp padding — atas lebih longgar agar tidak nempel section sebelumnya */
			style={{ padding: "clamp(96px, 12vw, 160px) 0" }}
		>
			{/* Background mesh blobs */}
			{[
				{ top: "5%", right: "-10%", size: 500, opacity: 0.05 },
				{ bottom: "5%", left: "-8%", size: 380, opacity: 0.04 },
				{ top: "45%", left: "40%", size: 260, opacity: 0.025 },
			].map((blob, i) => (
				<div
					key={i}
					style={{
						position: "absolute",
						...(blob.top ? { top: blob.top } : {}),
						...(blob.bottom ? { bottom: blob.bottom } : {}),
						...(blob.right ? { right: blob.right } : {}),
						...(blob.left ? { left: blob.left } : {}),
						width: blob.size,
						height: blob.size,
						borderRadius: "50%",
						background:
							"radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
						opacity: blob.opacity,
						filter: "blur(70px)",
						pointerEvents: "none",
					}}
				/>
			))}

			{/* Decorative grid pattern */}
			<div
				style={{
					position: "absolute",
					inset: 0,
					backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
					backgroundSize: "64px 64px",
					opacity: 0.18,
					pointerEvents: "none",
					maskImage:
						"radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
				}}
			/>

			<div className="section-container relative z-10">
				{/* ── Header ── */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={container}
					className="mb-20"
				>
					<motion.div
						variants={fadeUp}
						className="flex items-center gap-3 mb-6"
					>
						<span
							style={{
								fontFamily: "monospace",
								fontSize: "10px",
								letterSpacing: "0.22em",
								textTransform: "uppercase",
								color: "var(--color-accent)",
							}}
						>
							Toolkit
						</span>
						<div
							style={{
								height: "1px",
								width: "40px",
								background: "var(--color-accent)",
								opacity: 0.4,
							}}
						/>
					</motion.div>

					<div
						style={{ display: "grid", gap: "20px" }}
						className="grid-cols-1 md:grid-cols-12 grid"
					>
						<motion.div variants={fadeUp} className="md:col-span-7">
							<h2
								className="font-heading font-bold tracking-tight text-[var(--color-text)]"
								style={{
									fontSize: "clamp(30px, 4.5vw, 48px)",
									lineHeight: 1.08,
									letterSpacing: "-0.02em",
								}}
							>
								What I{" "}
								{/* ↓ konsisten dengan heading section lain — italic accent biasa */}
								<span
									className="font-serif italic font-medium"
									style={{ color: "var(--color-accent)" }}
								>
									Build
								</span>{" "}
								With
							</h2>
						</motion.div>

						<motion.div
							variants={fadeUp}
							className="md:col-span-4 md:col-start-9 flex items-end"
						>
							<p
								style={{
									fontSize: "14px",
									lineHeight: "1.8",
									color: "var(--color-text-muted)",
								}}
							>
								Technologies and frameworks across the full stack — from
								interactive UIs to intelligent ML pipelines.
							</p>
						</motion.div>
					</div>

					{/* Animated divider */}
					<motion.div
						initial={{ scaleX: 0 }}
						whileInView={{ scaleX: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
						style={{ originX: 0, marginTop: "40px" }}
					>
						<div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
							<div
								style={{
									height: "1px",
									flex: 1,
									background: "var(--color-border)",
								}}
							/>
							<div
								style={{
									width: "6px",
									height: "6px",
									borderRadius: "50%",
									background: "var(--color-accent)",
									boxShadow: "0 0 8px var(--color-accent)",
								}}
							/>
							<div
								style={{
									height: "1px",
									width: "40px",
									background: "var(--color-border)",
								}}
							/>
						</div>
					</motion.div>
				</motion.div>

				{/* ── Cards Grid ── */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.1 }}
					variants={container}
					style={{ display: "grid", gap: "16px" }}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
				>
					{skills.map((cat, idx) => (
						<motion.div
							key={idx}
							variants={cardVar}
							onHoverStart={() => setHovered(idx)}
							onHoverEnd={() => setHovered(null)}
							whileHover={{ y: -6 }}
							transition={{ duration: 0.3 }}
							style={{
								position: "relative",
								borderRadius: "16px",
								padding: "28px",
								overflow: "hidden",
								cursor: "default",
								border: "1px solid",
								borderColor:
									hovered === idx
										? "var(--color-accent)"
										: "var(--color-border)",
								background: "var(--color-surface, rgba(255,255,255,0.02))",
								backdropFilter: "blur(8px)",
								transition: "border-color 0.3s ease",
							}}
						>
							{/* Card corner accent */}
							<div
								style={{
									position: "absolute",
									top: 0,
									right: 0,
									width: "80px",
									height: "80px",
									background:
										"radial-gradient(circle at top right, var(--color-accent), transparent 70%)",
									opacity: hovered === idx ? 0.12 : 0.05,
									transition: "opacity 0.4s ease",
									borderRadius: "0 16px 0 0",
								}}
							/>

							{/* Top accent bar */}
							<div
								style={{
									position: "absolute",
									top: 0,
									left: "16px",
									right: "16px",
									height: "1.5px",
									background:
										"linear-gradient(90deg, transparent, var(--color-accent), transparent)",
									opacity: hovered === idx ? 0.8 : 0.3,
									transition: "opacity 0.3s",
								}}
							/>

							{/* Card header */}
							<div
								style={{
									display: "flex",
									alignItems: "flex-start",
									justifyContent: "space-between",
									marginBottom: "24px",
								}}
							>
								<div>
									<div
										style={{
											fontFamily: "monospace",
											fontSize: "9px",
											letterSpacing: "0.2em",
											color: "var(--color-accent)",
											opacity: 0.5,
											marginBottom: "8px",
										}}
									>
										{String(idx + 1).padStart(2, "0")}
									</div>
									<h3
										style={{
											fontSize: "18px",
											fontWeight: 700,
											color: "var(--color-text)",
											letterSpacing: "-0.01em",
											lineHeight: 1.2,
											marginBottom: "3px",
										}}
									>
										{cat.category.replace("// ", "")}
									</h3>
									<div
										style={{
											fontFamily: "monospace",
											fontSize: "10px",
											letterSpacing: "0.1em",
											textTransform: "uppercase",
											color: "var(--color-accent)",
											opacity: 0.6,
										}}
									>
										{cat.label}
									</div>
								</div>

								{/* Icon */}
								<div
									style={{
										fontSize: "28px",
										color: "var(--color-accent)",
										opacity: hovered === idx ? 0.7 : 0.2,
										transition: "opacity 0.3s",
										lineHeight: 1,
										marginTop: "2px",
										filter:
											hovered === idx
												? "drop-shadow(0 0 8px var(--color-accent))"
												: "none",
									}}
								>
									{cat.icon}
								</div>
							</div>

							{/* Divider */}
							<div
								style={{
									height: "1px",
									background: "var(--color-border)",
									marginBottom: "20px",
								}}
							/>

							{/* Skills — pill tags */}
							<div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
								{cat.skills.map((skill, i) => (
									<motion.span
										key={i}
										initial={{ opacity: 0, scale: 0.9 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{ delay: i * 0.04 + idx * 0.06, duration: 0.3 }}
										style={{
											display: "inline-flex",
											alignItems: "center",
											gap: "5px",
											fontSize: "12px",
											fontWeight: skill.highlight ? 500 : 400,
											letterSpacing: "0.02em",
											padding: "5px 10px",
											borderRadius: "6px",
											border: "1px solid",
											borderColor: skill.highlight
												? "var(--color-accent)"
												: "var(--color-border)",
											background: skill.highlight
												? "color-mix(in srgb, var(--color-accent) 12%, transparent)"
												: "transparent",
											color: skill.highlight
												? "var(--color-accent)"
												: "var(--color-text-muted)",
										}}
									>
										{skill.highlight && (
											<span
												style={{
													width: "4px",
													height: "4px",
													borderRadius: "50%",
													background: "var(--color-accent)",
													boxShadow: "0 0 5px var(--color-accent)",
													flexShrink: 0,
													display: "inline-block",
												}}
											/>
										)}
										{skill.name}
									</motion.span>
								))}
							</div>

							{/* Bottom count */}
							<div
								style={{
									marginTop: "20px",
									fontFamily: "monospace",
									fontSize: "10px",
									letterSpacing: "0.1em",
									color: "var(--color-text-muted)",
									opacity: 0.4,
									display: "flex",
									alignItems: "center",
									gap: "8px",
								}}
							>
								<div
									style={{
										height: "1px",
										flex: 1,
										background: "var(--color-border)",
									}}
								/>
								{cat.skills.length} technologies
							</div>

							{/* Hover glow */}
							<div
								style={{
									position: "absolute",
									inset: 0,
									background:
										"radial-gradient(ellipse at 50% 100%, var(--color-accent) 0%, transparent 60%)",
									opacity: hovered === idx ? 0.06 : 0,
									transition: "opacity 0.4s ease",
									pointerEvents: "none",
									borderRadius: "16px",
								}}
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
