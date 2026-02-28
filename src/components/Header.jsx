import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
	{ name: "About", href: "#about" },
	{ name: "Projects", href: "#projects" },
	{ name: "Experience", href: "#credentials" },
	{ name: "Contact", href: "#contact" },
];

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [hoveredLink, setHoveredLink] = useState(null);
	const [activeLink, setActiveLink] = useState(null);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		const observers = navLinks.map(({ href }) => {
			const el = document.getElementById(href.replace("#", ""));
			if (!el) return null;
			const obs = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) setActiveLink(href);
				},
				{ rootMargin: "-40% 0px -55% 0px", threshold: 0 },
			);
			obs.observe(el);
			return obs;
		});
		return () => observers.forEach((o) => o && o.disconnect());
	}, []);

	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				zIndex: 50,
				display: "flex",
				justifyContent: "center",
				padding: "20px 24px 0",
				pointerEvents: "none",
			}}
		>
			{/* ══ Navbar Pill ══ */}
			<motion.header
				initial={{ opacity: 0, y: -16 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
				style={{
					width: "100%",
					maxWidth: "820px",
					borderRadius: "999px",
					/* 3-column grid: logo | nav | cta */
					display: "grid",
					gridTemplateColumns: "1fr auto 1fr",
					alignItems: "center",
					gap: "8px",
					padding: "8px 8px 8px 16px",
					backdropFilter: "blur(20px)",
					WebkitBackdropFilter: "blur(20px)",
					background: scrolled
						? "rgba(255,255,255,0.93)"
						: "rgba(255,255,255,0.76)",
					border: "1px solid var(--color-border)",
					boxShadow: scrolled
						? "0 8px 32px rgba(0,0,0,0.08)"
						: "0 4px 20px rgba(0,0,0,0.04)",
					transition: "background 0.3s, box-shadow 0.3s",
					pointerEvents: "auto",
				}}
			>
				{/* ── Col 1: Logo (left-aligned) ── */}
				<a
					href="#"
					style={{
						display: "flex",
						alignItems: "center",
						gap: "10px",
						textDecoration: "none",
						justifySelf: "start",
					}}
				>
					<div
						style={{
							width: "34px",
							height: "34px",
							borderRadius: "50%",
							background: "var(--color-text)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexShrink: 0,
						}}
					>
						<Code2 size={16} color="#fff" strokeWidth={2.2} />
					</div>
					<span
						style={{
							fontWeight: 700,
							fontSize: "15px",
							letterSpacing: "-0.02em",
							color: "var(--color-text)",
							whiteSpace: "nowrap",
						}}
					>
						mrfi.dev
					</span>
				</a>

				{/* ── Col 2: Desktop Nav (center) ── */}
				<nav
					className="hidden md:flex"
					style={{ alignItems: "center", gap: "2px" }}
				>
					{navLinks.map((link) => {
						const isActive = activeLink === link.href;
						const isHovered = hoveredLink === link.name;
						return (
							<a
								key={link.name}
								href={link.href}
								onMouseEnter={() => setHoveredLink(link.name)}
								onMouseLeave={() => setHoveredLink(null)}
								style={{
									fontSize: "13px",
									fontWeight: isActive ? 600 : 500,
									color: isActive
										? "#fff"
										: isHovered
											? "var(--color-text)"
											: "var(--color-text-muted)",
									padding: "6px 12px",
									borderRadius: "999px",
									background: isActive
										? "var(--color-text)"
										: isHovered
											? "rgba(0,0,0,0.05)"
											: "transparent",
									transition: "all 0.22s ease",
									textDecoration: "none",
									whiteSpace: "nowrap",
								}}
							>
								{link.name}
							</a>
						);
					})}
				</nav>

				{/* ── Col 2 mobile: empty spacer so col 3 still aligns right ── */}
				<div className="md:hidden" />

				{/* ── Col 3: CTA + Mobile Toggle (right-aligned) ── */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-end",
						gap: "8px",
					}}
				>
					{/* CTA — desktop only */}
					<a
						href="#contact"
						className="cta-btn hidden md:inline-block"
						style={{
							padding: "9px 20px",
							borderRadius: "999px",
							fontSize: "13px",
							fontWeight: 600,
							letterSpacing: "0.01em",
							textDecoration: "none",
							whiteSpace: "nowrap",
						}}
					>
						Let's Talk
					</a>

					{/* Mobile Toggle */}
					<button
						onClick={() => setMobileMenuOpen((v) => !v)}
						className="md:hidden"
						style={{
							width: "36px",
							height: "36px",
							borderRadius: "50%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							color: mobileMenuOpen ? "#fff" : "var(--color-text)",
							background: mobileMenuOpen
								? "var(--color-text)"
								: "rgba(0,0,0,0.04)",
							border: "1px solid var(--color-border)",
							cursor: "pointer",
							flexShrink: 0,
							transition: "background 0.2s",
						}}
					>
						{mobileMenuOpen ? <X size={18} color="#fff" /> : <Menu size={18} />}
					</button>
				</div>
			</motion.header>

			{/* CSS for CTA hover — avoids stuck-state bug */}
			<style>{`
                .cta-btn {
                    background: var(--color-text) !important;
                    color: #fff !important;
                    transition: background 0.2s ease, transform 0.15s ease;
                    display: inline-block;
                }
                .cta-btn:hover {
                    background: var(--color-accent) !important;
                    transform: scale(1.03);
                }
            `}</style>

			{/* ══ Mobile Drawer ══ */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						key="mobile-menu"
						initial={{ opacity: 0, scale: 0.96, y: -8 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.96, y: -8 }}
						transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
						style={{
							position: "absolute",
							top: "76px",
							left: "16px",
							right: "16px",
							maxWidth: "820px",
							margin: "0 auto",
							background: "rgba(255,255,255,0.97)",
							backdropFilter: "blur(20px)",
							WebkitBackdropFilter: "blur(20px)",
							border: "1px solid var(--color-border)",
							borderRadius: "24px",
							boxShadow: "0 16px 48px rgba(0,0,0,0.10)",
							padding: "10px",
							zIndex: 40,
							pointerEvents: "auto",
						}}
					>
						{navLinks.map((link) => {
							const isActive = activeLink === link.href;
							return (
								<a
									key={link.name}
									href={link.href}
									onClick={() => setMobileMenuOpen(false)}
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
										padding: "13px 18px",
										marginBottom: "4px",
										borderRadius: "12px",
										fontSize: "15px",
										fontWeight: isActive ? 700 : 600,
										color: isActive ? "#fff" : "var(--color-text)",
										background: isActive
											? "var(--color-text)"
											: "rgba(0,0,0,0.03)",
										textDecoration: "none",
										transition: "all 0.2s",
									}}
								>
									{link.name}
									{isActive && (
										<span
											style={{
												width: "6px",
												height: "6px",
												borderRadius: "50%",
												background: "#fff",
												opacity: 0.6,
											}}
										/>
									)}
								</a>
							);
						})}
						<a
							href="#contact"
							onClick={() => setMobileMenuOpen(false)}
							style={{
								display: "block",
								marginTop: "4px",
								padding: "13px 18px",
								borderRadius: "12px",
								fontSize: "15px",
								fontWeight: 700,
								color: "#fff",
								background: "var(--color-accent, #111)",
								textDecoration: "none",
								textAlign: "center",
							}}
						>
							Let's Talk
						</a>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
