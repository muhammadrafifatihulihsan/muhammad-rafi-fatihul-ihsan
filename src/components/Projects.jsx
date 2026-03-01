import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	ExternalLink,
	Github,
	X,
	ArrowUpRight,
	Activity,
	Mountain,
	BookOpen,
	Coffee,
	Image,
	Compass,
	BarChart3,
	CheckCircle2,
	Grid3X3,
	LineChart,
	Landmark,
	Home,
	LayoutDashboard,
	Smartphone,
	CupSoda,
	MapPin,
	PenTool,
	Library,
	Moon,
} from "lucide-react";
import projects from "../data/projects.json";
import ProjectMockup from "./ProjectMockup";

const itemVariant = {
	hidden: { opacity: 0, y: 28 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
	},
};

const iconMap = {
	Mountain,
	Activity,
	BookOpen,
	Coffee,
	Image,
	Compass,
	BarChart3,
	CheckCircle2,
	Grid3X3,
	LineChart,
	Landmark,
	Home,
	LayoutDashboard,
	Smartphone,
	CupSoda,
	MapPin,
	PenTool,
	Library,
	Moon,
};

/* ── Shared button styles ── */
function LinkButton({ href, icon: Icon, label, variant = "outline", onClick }) {
	const base = {
		display: "inline-flex",
		alignItems: "center",
		gap: "6px",
		padding: "8px 16px",
		borderRadius: "999px",
		fontSize: "12px",
		fontWeight: 600,
		textDecoration: "none",
		letterSpacing: "0.02em",
		cursor: "pointer",
		border: "1px solid",
		transition: "all 0.2s ease",
		whiteSpace: "nowrap",
	};
	const styles = {
		solid: {
			...base,
			background: "var(--color-text)",
			color: "#fff",
			borderColor: "var(--color-text)",
		},
		outline: {
			...base,
			background: "transparent",
			color: "var(--color-text-muted)",
			borderColor: "var(--color-border)",
		},
		accent: {
			...base,
			background: "color-mix(in srgb, var(--color-accent) 8%, transparent)",
			color: "var(--color-accent)",
			borderColor: "color-mix(in srgb, var(--color-accent) 30%, transparent)",
		},
	};

	const handleEnter = (e) => {
		if (variant === "solid") {
			e.currentTarget.style.background = "var(--color-accent)";
			e.currentTarget.style.borderColor = "var(--color-accent)";
			e.currentTarget.style.transform = "translateY(-1px)";
		} else if (variant === "accent") {
			e.currentTarget.style.background =
				"color-mix(in srgb, var(--color-accent) 15%, transparent)";
			e.currentTarget.style.transform = "translateY(-1px)";
		} else {
			e.currentTarget.style.borderColor = "var(--color-text)";
			e.currentTarget.style.color = "var(--color-text)";
			e.currentTarget.style.transform = "translateY(-1px)";
		}
	};
	const handleLeave = (e) => {
		Object.assign(e.currentTarget.style, styles[variant]);
		e.currentTarget.style.transform = "translateY(0)";
	};

	const props = {
		style: styles[variant],
		onMouseEnter: handleEnter,
		onMouseLeave: handleLeave,
	};

	if (onClick) {
		return (
			<button {...props} onClick={onClick}>
				{Icon && <Icon size={13} strokeWidth={2} />}
				{label}
			</button>
		);
	}
	return (
		<a href={href} target="_blank" rel="noreferrer" {...props}>
			{Icon && <Icon size={13} strokeWidth={2} />}
			{label}
		</a>
	);
}

/* ── Modal ── */
function ProjectModal({ project, onClose }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			style={{
				position: "fixed",
				inset: 0,
				zIndex: 100,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "16px",
			}}
		>
			<div
				style={{
					position: "absolute",
					inset: 0,
					background: "rgba(0,0,0,0.55)",
					backdropFilter: "blur(6px)",
				}}
				onClick={onClose}
			/>

			<motion.div
				initial={{ opacity: 0, scale: 0.96, y: 16 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				exit={{ opacity: 0, scale: 0.96, y: 16 }}
				transition={{ type: "spring", damping: 26, stiffness: 320 }}
				style={{
					position: "relative",
					width: "100%",
					maxWidth: "860px",
					background: "#fff",
					borderRadius: "20px",
					boxShadow: "0 32px 80px rgba(0,0,0,0.18)",
					border: "1px solid var(--color-border)",
					overflow: "hidden",
					display: "flex",
					flexDirection: "column",
					maxHeight: "90vh",
				}}
			>
				{/* Modal header */}
				<div
					style={{
						padding: "20px 24px",
						borderBottom: "1px solid var(--color-border)",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						background: "#fff",
						flexShrink: 0,
					}}
				>
					<div>
						<div
							style={{
								fontFamily: "monospace",
								fontSize: "10px",
								letterSpacing: "0.15em",
								textTransform: "uppercase",
								color: "var(--color-accent)",
								marginBottom: "4px",
							}}
						>
							{project.type}
						</div>
						<h3
							style={{
								fontWeight: 700,
								fontSize: "18px",
								color: "var(--color-text)",
								lineHeight: 1.2,
							}}
						>
							{project.title}
						</h3>
					</div>
					<button
						onClick={onClose}
						style={{
							width: "32px",
							height: "32px",
							borderRadius: "8px",
							background: "rgba(0,0,0,0.04)",
							border: "1px solid var(--color-border)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							cursor: "pointer",
							color: "var(--color-text-muted)",
							transition: "all 0.2s",
						}}
					>
						<X size={16} />
					</button>
				</div>

				{/* Modal body */}
				<div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
					<p
						style={{
							fontSize: "14px",
							color: "var(--color-text-muted)",
							lineHeight: "1.75",
							marginBottom: "24px",
						}}
					>
						{project.modalDescription}
					</p>

					{/* Screenshots grid */}
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
							gap: "12px",
							marginBottom: "24px",
						}}
					>
						{project.screenshots.map((ss, i) => {
							const IconComponent = iconMap[ss.emoji] || Activity;
							const hasImage = ss.image && ss.image.trim() !== "";

							return (
								<div
									key={i}
									style={{
										borderRadius: "12px",
										overflow: "hidden",
										border: "1px solid var(--color-border)",
										background: "#f9f9f9",
									}}
								>
									{/* Screenshot label bar */}
									<div
										style={{
											height: "30px",
											borderBottom: "1px solid var(--color-border)",
											display: "flex",
											alignItems: "center",
											padding: "0 12px",
											background: "#fff",
										}}
									>
										<span
											style={{
												fontFamily: "monospace",
												fontSize: "9px",
												textTransform: "uppercase",
												letterSpacing: "0.1em",
												color: "var(--color-text-muted)",
											}}
										>
											{ss.label}
										</span>
									</div>

									{/* Screenshot image or gradient fallback */}
									<div
										style={{
											height: "140px",
											overflow: "hidden",
											position: "relative",
											background: hasImage ? "#000" : ss.gradient,
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										{hasImage ? (
											<img
												src={ss.image}
												alt={ss.label}
												style={{
													width: "100%",
													height: "100%",
													objectFit: "cover",
													objectPosition: "top",
													display: "block",
												}}
											/>
										) : (
											<>
												<div
													style={{
														position: "absolute",
														inset: 0,
														background: "rgba(0,0,0,0.08)",
													}}
												/>
												<IconComponent
													size={32}
													color="rgba(255,255,255,0.9)"
													strokeWidth={1.5}
													style={{ position: "relative", zIndex: 1 }}
												/>
											</>
										)}
									</div>
								</div>
							);
						})}
					</div>

					{/* Action buttons */}
					<div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
						{project.demo && (
							<LinkButton
								href={project.demo}
								icon={ExternalLink}
								label="Live Demo"
								variant="solid"
							/>
						)}
						{project.github && (
							<LinkButton
								href={project.github}
								icon={Github}
								label="View on GitHub"
								variant="outline"
							/>
						)}
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}

/* ── Card ── */
function ProjectCard({ project, onClick }) {
	const isFeatured = project.featured;

	return (
		<motion.div
			variants={itemVariant}
			onClick={() => onClick(project)}
			style={{
				display: "flex",
				flexDirection: isFeatured ? undefined : "column",
				background: "#fff",
				border: "1px solid var(--color-border)",
				borderRadius: "16px",
				overflow: "hidden",
				cursor: "pointer",
				transition: "all 0.3s ease",
				/* Desktop: featured spans 2 cols */
				gridColumn: isFeatured ? "span 2" : undefined,
			}}
			/* Mobile override via className — see grid below */
			className={`group${isFeatured ? " project-card--featured" : ""}`}
			whileHover={{
				y: -4,
				boxShadow: "0 20px 48px rgba(0,0,0,0.08)",
				borderColor: "color-mix(in srgb, var(--color-accent) 40%, transparent)",
			}}
		>
			{/* Preview pane */}
			<div
				style={{
					position: "relative",
					background: "#f5f5f5",
					borderBottom: isFeatured ? "none" : "1px solid var(--color-border)",
					borderRight: isFeatured ? "1px solid var(--color-border)" : "none",
					flexShrink: 0,
					height: isFeatured ? "auto" : "200px",
					width: isFeatured ? "380px" : "100%",
					overflow: "hidden",
				}}
				className={isFeatured ? "project-preview--featured" : ""}
			>
				<div
					style={{
						position: "absolute",
						inset: "8px 8px 0 8px",
						transition: "transform 0.4s ease",
					}}
					className="group-hover:scale-[1.02]"
				>
					<ProjectMockup
						type={project.mockupType}
						thumbnail={project.thumbnail}
						previewUrl={project.previewUrl}
					/>
				</div>
			</div>

			{/* Card body */}
			<div
				style={{
					flex: 1,
					padding: isFeatured ? "32px" : "22px",
					display: "flex",
					flexDirection: "column",
				}}
			>
				{/* Type + badge */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "8px",
						marginBottom: "10px",
					}}
				>
					<span
						style={{
							fontFamily: "monospace",
							fontSize: "9px",
							letterSpacing: "0.15em",
							textTransform: "uppercase",
							color: "var(--color-accent)",
						}}
					>
						{project.type}
					</span>
					{isFeatured && (
						<span
							style={{
								fontFamily: "monospace",
								fontSize: "8px",
								letterSpacing: "0.12em",
								textTransform: "uppercase",
								color: "#fff",
								background: "var(--color-text)",
								padding: "2px 8px",
								borderRadius: "999px",
							}}
						>
							Featured
						</span>
					)}
				</div>

				{/* Title */}
				<h3
					style={{
						fontWeight: 700,
						fontSize: isFeatured ? "26px" : "18px",
						lineHeight: 1.2,
						color: "var(--color-text)",
						marginBottom: "10px",
						letterSpacing: "-0.01em",
					}}
				>
					{project.title}
				</h3>

				{/* Description */}
				<p
					style={{
						fontSize: "13px",
						color: "var(--color-text-muted)",
						lineHeight: "1.7",
						flex: 1,
						marginBottom: "16px",
					}}
				>
					{project.description.replace(/<[^>]*>?/gm, "")}
				</p>

				{/* Tech tags */}
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						gap: "6px",
						marginBottom: "20px",
					}}
				>
					{project.tech.slice(0, 5).map((t) => (
						<span
							key={t}
							style={{
								padding: "3px 10px",
								background: "rgba(0,0,0,0.03)",
								border: "1px solid var(--color-border)",
								borderRadius: "6px",
								fontSize: "10px",
								fontFamily: "monospace",
								color: "var(--color-text-muted)",
								letterSpacing: "0.02em",
							}}
						>
							{t}
						</span>
					))}
				</div>

				{/* Action buttons */}
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						gap: "8px",
						marginTop: "auto",
					}}
					onClick={(e) => e.stopPropagation()}
				>
					{project.github && (
						<LinkButton
							href={project.github}
							icon={Github}
							label="GitHub"
							variant="outline"
						/>
					)}
					{project.demo && (
						<LinkButton
							href={project.demo}
							icon={ExternalLink}
							label="Live Demo"
							variant="accent"
						/>
					)}
					<LinkButton
						icon={ArrowUpRight}
						label="Details"
						variant="solid"
						onClick={(e) => {
							e.stopPropagation();
							onClick(project);
						}}
					/>
				</div>
			</div>
		</motion.div>
	);
}

/* ── Section ── */
export default function Projects() {
	const [selectedProject, setSelectedProject] = useState(null);

	return (
		<>
			{/* ── Mobile-specific overrides ── */}
			<style>{`
				@media (max-width: 639px) {
					.projects-grid {
						grid-template-columns: 1fr !important;
					}
					.project-card--featured {
						grid-column: span 1 !important;
						flex-direction: column !important;
					}
					.project-preview--featured {
						width: 100% !important;
						height: 220px !important;
						border-right: none !important;
						border-bottom: 1px solid var(--color-border) !important;
					}
				}
			`}</style>

			<section
				id="projects"
				className="py-32 relative border-b border-[var(--color-border)]"
			>
				<div className="section-container">
					{/* Header */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }}
						variants={{
							hidden: { opacity: 0 },
							visible: {
								opacity: 1,
								transition: { staggerChildren: 0.1 },
							},
						}}
						style={{ marginBottom: "56px", paddingTop: "16px" }}
					>
						<motion.div
							variants={itemVariant}
							style={{
								fontFamily: "monospace",
								fontSize: "11px",
								letterSpacing: "0.2em",
								textTransform: "uppercase",
								color: "var(--color-accent)",
								marginBottom: "16px",
								display: "flex",
								alignItems: "center",
								gap: "10px",
							}}
						>
							Proof of Work
							<div
								style={{
									height: "1px",
									width: "48px",
									background: "var(--color-accent)",
									opacity: 0.4,
								}}
							/>
						</motion.div>

						<motion.h2
							variants={itemVariant}
							style={{
								fontWeight: 700,
								fontSize: "clamp(28px, 4vw, 40px)",
								lineHeight: 1.1,
								color: "var(--color-text)",
								letterSpacing: "-0.02em",
								marginBottom: "20px",
							}}
						>
							Selected Projects
						</motion.h2>

						<motion.div variants={itemVariant}>
							<LinkButton
								href="https://github.com/muhammadrafifatihulihsan"
								icon={Github}
								label="View All on GitHub"
								variant="outline"
							/>
						</motion.div>
					</motion.div>

					{/* Grid — desktop: 2 col | mobile: 1 col via .projects-grid class */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.05 }}
						variants={{
							hidden: { opacity: 0 },
							visible: {
								opacity: 1,
								transition: { staggerChildren: 0.1 },
							},
						}}
						className="projects-grid"
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(2, 1fr)",
							gap: "16px",
							paddingBottom: "16px",
						}}
					>
						{projects.map((p) => (
							<ProjectCard
								key={p.id}
								project={p}
								onClick={setSelectedProject}
							/>
						))}
					</motion.div>
				</div>

				<AnimatePresence>
					{selectedProject && (
						<ProjectModal
							project={selectedProject}
							onClose={() => setSelectedProject(null)}
						/>
					)}
				</AnimatePresence>
			</section>
		</>
	);
}
