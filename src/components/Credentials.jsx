import { motion } from "framer-motion";
import {
	Cpu,
	BrainCircuit,
	Atom,
	Server,
	LineChart,
	ExternalLink,
	Building2,
	CalendarDays,
	ArrowRight,
} from "lucide-react";
import experiences from "../data/experiences.json";
import certifications from "../data/certifications.json";

const iconMap = { Cpu, BrainCircuit, Atom, Server, LineChart };

const container = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
	},
};

export default function Credentials() {
	return (
		<section
			id="credentials"
			className="relative border-b border-[var(--color-border)] bg-[var(--color-bg)] overflow-hidden"
			style={{ padding: "clamp(96px, 12vw, 160px) 0" }}
		>
			{/* Top & bottom separator glow lines */}
			<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-25 pointer-events-none" />
			<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-25 pointer-events-none" />

			{/* Faint grid background */}
			<div
				className="absolute inset-0 pointer-events-none opacity-[0.03]"
				style={{
					backgroundImage:
						"linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)",
					backgroundSize: "60px 60px",
				}}
			/>

			<div className="section-container relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-32 items-start">
					{/* ═══════════════════════════════
						LEFT — Certifications
					═══════════════════════════════ */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }}
						variants={container}
						className="flex flex-col"
					>
						{/* Label */}
						<motion.div
							variants={item}
							className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--color-accent)] mb-5 flex items-center gap-3"
						>
							Licenses & Accolades
							<div className="h-px bg-[var(--color-accent)] opacity-40 flex-1 max-w-[40px]" />
						</motion.div>

						{/* Heading */}
						<motion.h3
							variants={item}
							className="font-heading font-bold text-[clamp(24px,3vw,32px)] leading-[1.2] text-[var(--color-text)] mb-20"
						>
							Certifications
						</motion.h3>
						<div className="top-6 opacity-0">kemon vrororg</div>
						{/* <div className="mb-10 pb-6"></div> */}
						{/* Cert Cards — gap-5 antar card + padding p-5 dalam card */}
						<div className="flex flex-col gap-5">
							{certifications.map((cert, i) => {
								const Icon = iconMap[cert.icon] || Cpu;
								return (
									<motion.a
										key={i}
										variants={item}
										href={cert.link}
										target="_blank"
										rel="noopener noreferrer"
										className="group relative flex items-center gap-4 p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] hover:border-[var(--color-accent)] transition-all duration-300 overflow-hidden no-underline"
										whileHover={{ x: 5, transition: { duration: 0.2 } }}
									>
										{/* Card hover glow */}
										<div
											className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
											style={{
												background: `radial-gradient(ellipse at 10% 50%, ${cert.iconBg} 0%, transparent 65%)`,
											}}
										/>

										{/* Icon */}
										<div
											className="relative shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
											style={{
												background: cert.iconBg,
												boxShadow: `0 0 0 1px ${cert.iconColor}22`,
											}}
										>
											<Icon size={20} style={{ color: cert.iconColor }} />
										</div>

										{/* Text */}
										<div className="relative flex flex-col flex-1 min-w-0">
											<span className="font-bold text-[13.5px] leading-[1.35] text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors duration-300 truncate">
												{cert.name}
											</span>
											<span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mt-1.5">
												{cert.issuer}
												<span className="opacity-40 mx-1">·</span>
												{cert.year}
											</span>
										</div>

										{/* External link icon */}
										<div className="relative shrink-0 flex items-center justify-center w-7 h-7 rounded-full border border-[var(--color-border)] bg-transparent group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] transition-all duration-300">
											<ExternalLink
												size={11}
												className="text-[var(--color-text-faint)] group-hover:text-[var(--color-bg)] transition-colors duration-300"
											/>
										</div>
									</motion.a>
								);
							})}
						</div>

						{/* Footer count */}
						<motion.div
							variants={item}
							className="mt-10 flex items-center gap-2 font-mono text-[11px] text-[var(--color-text-faint)] uppercase tracking-wider"
						>
							<span className="text-[var(--color-accent)] font-bold text-[15px]">
								{certifications.length}
							</span>
							Certificates Earned
						</motion.div>
					</motion.div>

					{/* ═══════════════════════════════
						RIGHT — Experience
					═══════════════════════════════ */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }}
						variants={container}
						className="flex flex-col"
					>
						{/* Label */}
						<motion.div
							variants={item}
							className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--color-accent)] mb-5 flex items-center gap-3"
						>
							Project & Competition History
							<div className="h-px bg-[var(--color-accent)] opacity-40 flex-1 max-w-[40px]" />
						</motion.div>

						{/* Heading */}
						<motion.h3
							variants={item}
							className="font-heading font-bold text-[clamp(24px,3vw,32px)] leading-[1.2] text-[var(--color-text)] mb-20"
						>
							Experience
						</motion.h3>

						{/* Timeline */}
						<div className="relative flex flex-col top-6">
							{/* Vertical gradient line */}
							<div className="absolute left-[19px] top-2 bottom-14 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-border)] to-transparent pointer-events-none" />
							{/* <div className="mb-5 pb-5"></div> */}

							{experiences.map((exp, i) => (
								<motion.div
									key={i}
									variants={item}
									/* pb-20 — jarak yang cukup longgar antar entry */
									className="group relative flex gap-6 pb-28 last:pb-0"
								>
									{/* Timeline node */}
									<div className="relative shrink-0 z-10 flex flex-col items-center">
										<div className="w-10 h-10 rounded-full border-2 border-[var(--color-border)] bg-[var(--color-bg)] flex items-center justify-center group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/10 transition-all duration-300">
											<div className="w-2 h-2 rounded-full bg-[var(--color-border)] group-hover:bg-[var(--color-accent)] group-hover:scale-125 transition-all duration-300" />
										</div>
									</div>

									{/* Content */}
									<div className="flex-1 pt-1">
										{/* Period + org row — mb-4 */}
										<div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
											<span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)] border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 px-2 py-0.5 rounded-full">
												<CalendarDays size={9} />
												{exp.period}
											</span>
											<span className="inline-flex items-center gap-1 text-[11px] text-[var(--color-text-faint)]">
												<Building2 size={10} />
												{exp.organization}
											</span>
										</div>

										{/* Role — mb-4 jarak ke divider */}
										<h4 className="font-bold text-[17px] text-[var(--color-text)] leading-[1.25] mb-4 group-hover:text-[var(--color-accent)] transition-colors duration-300">
											{exp.role}
										</h4>

										{/* Divider */}
										<div className="w-8 h-px bg-[var(--color-accent)] opacity-30 mb-4 group-hover:w-14 group-hover:opacity-60 transition-all duration-500" />

										{/* Description */}
										<p className="text-[13.5px] text-[var(--color-text-muted)] leading-[1.8]">
											{exp.description}
										</p>

										{/* Hover detail arrow */}
										<div className="mt-4 flex items-center gap-1.5 text-[11px] font-mono text-[var(--color-accent)] uppercase tracking-wider opacity-100 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
											<ArrowRight size={11} />
											View Details
										</div>
										<div className="opacity-0">vebebeb</div>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
