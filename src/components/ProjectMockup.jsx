import { Mountain, Activity, Building2, BookOpen, Coffee } from "lucide-react";

function BrowserChrome({ children, url }) {
	return (
		<div
			style={{
				position: "absolute",
				inset: "24px 0 0 0",
				borderRadius: "10px 10px 0 0",
				overflow: "hidden",
				border: "1px solid var(--color-border)",
				boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
				background: "#fff",
			}}
		>
			{/* Browser bar */}
			<div
				style={{
					height: "28px",
					background: "#f5f5f5",
					borderBottom: "1px solid var(--color-border)",
					display: "flex",
					alignItems: "center",
					padding: "0 10px",
					gap: "6px",
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					zIndex: 10,
				}}
			>
				<div style={{ display: "flex", gap: "5px", flexShrink: 0 }}>
					<div
						style={{
							width: "8px",
							height: "8px",
							borderRadius: "50%",
							background: "#FF5F56",
						}}
					/>
					<div
						style={{
							width: "8px",
							height: "8px",
							borderRadius: "50%",
							background: "#FFBD2E",
						}}
					/>
					<div
						style={{
							width: "8px",
							height: "8px",
							borderRadius: "50%",
							background: "#27C93F",
						}}
					/>
				</div>
				<div
					style={{
						flex: 1,
						height: "16px",
						background: "#fff",
						border: "1px solid var(--color-border)",
						borderRadius: "4px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						maxWidth: "200px",
						margin: "0 auto",
					}}
				>
					<span
						style={{
							fontFamily: "monospace",
							fontSize: "8px",
							color: "#999",
							letterSpacing: "0.02em",
						}}
					>
						{url}
					</span>
				</div>
			</div>
			{/* Content */}
			<div
				style={{
					position: "absolute",
					inset: "28px 0 0 0",
					overflow: "hidden",
					background: "#fff",
				}}
			>
				{children}
			</div>
		</div>
	);
}

/* ── Image Mockup — renders thumbnail inside browser chrome ── */
function ImageMockup({ thumbnail, url, fallback }) {
	if (!thumbnail) return fallback;

	return (
		<BrowserChrome url={url}>
			<img
				src={thumbnail}
				alt="Project preview"
				style={{
					width: "100%",
					height: "100%",
					objectFit: "cover",
					objectPosition: "top",
					display: "block",
				}}
			/>
		</BrowserChrome>
	);
}

export default function ProjectMockup({ type, thumbnail, previewUrl }) {
	switch (type) {
		case "minangverse":
			return (
				<ImageMockup
					thumbnail={thumbnail}
					url={previewUrl || "minangverse.kemdikbud.go.id"}
					fallback={
						<BrowserChrome url={previewUrl || "minangverse.kemdikbud.go.id"}>
							<div
								style={{
									height: "100%",
									background: "#f0f4ee",
									display: "flex",
									flexDirection: "column",
									padding: "10px",
									gap: "8px",
								}}
							>
								<div
									style={{
										width: "100%",
										height: "64px",
										background:
											"linear-gradient(135deg, #1a4731 0%, #2d6a4f 100%)",
										borderRadius: "8px",
										overflow: "hidden",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										position: "relative",
									}}
								>
									<Mountain
										size={20}
										color="rgba(255,255,255,0.3)"
										style={{ position: "absolute", right: 10, bottom: 4 }}
									/>
									<span
										style={{
											fontFamily: "serif",
											fontSize: "11px",
											fontWeight: 700,
											color: "#fff",
											fontStyle: "italic",
											letterSpacing: "0.05em",
										}}
									>
										Minangverse
									</span>
								</div>
								<div
									style={{
										display: "grid",
										gridTemplateColumns: "1fr 1fr",
										gap: "6px",
										flex: 1,
									}}
								>
									{["#d1fae5", "#a7f3d0", "#6ee7b7", "#34d399"].map((bg, i) => (
										<div
											key={i}
											style={{
												borderRadius: "6px",
												background: bg,
												border: "1px solid rgba(0,0,0,0.06)",
											}}
										/>
									))}
								</div>
							</div>
						</BrowserChrome>
					}
				/>
			);

		case "ml":
			return (
				<ImageMockup
					thumbnail={thumbnail}
					url={previewUrl || "jupyter.localhost:8888"}
					fallback={
						<BrowserChrome url={previewUrl || "jupyter.localhost:8888"}>
							<div
								style={{
									height: "100%",
									background: "#fff",
									padding: "10px",
									display: "flex",
									flexDirection: "column",
									gap: "6px",
								}}
							>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										gap: "6px",
										paddingBottom: "6px",
										borderBottom: "1px solid #eee",
									}}
								>
									<Activity size={12} color="#4f46e5" />
									<div
										style={{
											height: "8px",
											width: "80px",
											background: "#f0f0f0",
											borderRadius: "4px",
										}}
									/>
								</div>
								<div
									style={{
										display: "flex",
										gap: "6px",
										alignItems: "flex-start",
									}}
								>
									<span
										style={{
											fontFamily: "monospace",
											fontSize: "7px",
											color: "#4f46e5",
											paddingTop: "3px",
											flexShrink: 0,
										}}
									>
										[1]:
									</span>
									<div
										style={{
											flex: 1,
											background: "#f8f9ff",
											border: "1px solid #e0e7ff",
											borderRadius: "4px",
											padding: "5px",
											display: "flex",
											flexDirection: "column",
											gap: "3px",
										}}
									>
										<div
											style={{
												height: "5px",
												width: "90%",
												background: "#c7d2fe",
												borderRadius: "3px",
											}}
										/>
										<div
											style={{
												height: "5px",
												width: "70%",
												background: "#ddd6fe",
												borderRadius: "3px",
											}}
										/>
									</div>
								</div>
								<div
									style={{
										flex: 1,
										marginTop: "4px",
										display: "flex",
										alignItems: "flex-end",
										gap: "3px",
										padding: "0 4px",
									}}
								>
									{[45, 70, 40, 90, 60, 80, 55].map((h, i) => (
										<div
											key={i}
											style={{
												flex: 1,
												height: `${h}%`,
												background: `linear-gradient(to top, #4f46e5, #818cf8)`,
												borderRadius: "3px 3px 0 0",
											}}
										/>
									))}
								</div>
							</div>
						</BrowserChrome>
					}
				/>
			);

		case "btn":
			return (
				<ImageMockup
					thumbnail={thumbnail}
					url={previewUrl || "btn-housingpreneur.vercel.app"}
					fallback={
						<BrowserChrome url={previewUrl || "btn-housingpreneur.vercel.app"}>
							<div
								style={{
									height: "100%",
									background: "#f8fafc",
									display: "flex",
									flexDirection: "column",
								}}
							>
								<div
									style={{
										height: "32px",
										background: "#0f172a",
										borderBottom: "2px solid #f59e0b",
										display: "flex",
										alignItems: "center",
										padding: "0 10px",
										gap: "8px",
										flexShrink: 0,
									}}
								>
									<Building2 size={12} color="#3b82f6" />
									<div
										style={{
											height: "6px",
											width: "48px",
											background: "#334155",
											borderRadius: "3px",
										}}
									/>
									<div
										style={{
											marginLeft: "auto",
											height: "6px",
											width: "32px",
											background: "#f59e0b",
											borderRadius: "3px",
										}}
									/>
								</div>
								<div
									style={{
										flex: 1,
										padding: "8px",
										display: "flex",
										gap: "8px",
									}}
								>
									<div
										style={{
											width: "30%",
											background: "#fff",
											borderRadius: "6px",
											border: "1px solid #e2e8f0",
										}}
									/>
									<div
										style={{
											flex: 1,
											display: "flex",
											flexDirection: "column",
											gap: "6px",
										}}
									>
										<div
											style={{
												height: "36px",
												background: "#fff",
												borderRadius: "6px",
												border: "1px solid #e2e8f0",
											}}
										/>
										<div
											style={{
												height: "36px",
												background: "#fff",
												borderRadius: "6px",
												border: "1px solid #e2e8f0",
											}}
										/>
										<div
											style={{
												flex: 1,
												background: "#fff",
												borderRadius: "6px",
												border: "1px solid #e2e8f0",
											}}
										/>
									</div>
								</div>
							</div>
						</BrowserChrome>
					}
				/>
			);

		case "notes":
			return (
				<ImageMockup
					thumbnail={thumbnail}
					url={previewUrl || "notedqu.id"}
					fallback={
						<BrowserChrome url={previewUrl || "notedqu.id"}>
							<div
								style={{
									height: "100%",
									background: "#16171e",
									display: "flex",
									position: "relative",
								}}
							>
								<div
									style={{
										width: "32%",
										borderRight: "1px solid rgba(255,255,255,0.08)",
										padding: "8px 6px",
										display: "flex",
										flexDirection: "column",
										gap: "4px",
										flexShrink: 0,
									}}
								>
									{[
										{ label: "Personal", active: true },
										{ label: "Work", active: false },
										{ label: "Ideas", active: false },
									].map((f, i) => (
										<div
											key={i}
											style={{
												height: "18px",
												borderRadius: "5px",
												padding: "0 6px",
												background: f.active
													? "rgba(99,102,241,0.2)"
													: "transparent",
												border: f.active
													? "1px solid rgba(99,102,241,0.4)"
													: "1px solid transparent",
												display: "flex",
												alignItems: "center",
												fontSize: "8px",
												fontFamily: "monospace",
												color: f.active ? "#a5b4fc" : "rgba(255,255,255,0.4)",
											}}
										>
											{f.label}
										</div>
									))}
								</div>
								<div
									style={{
										flex: 1,
										padding: "10px",
										display: "flex",
										flexDirection: "column",
										gap: "6px",
									}}
								>
									<BookOpen
										size={10}
										color="rgba(255,255,255,0.2)"
										style={{ marginBottom: "2px" }}
									/>
									<div
										style={{
											height: "10px",
											width: "70%",
											background: "rgba(255,255,255,0.85)",
											borderRadius: "3px",
										}}
									/>
									<div
										style={{
											display: "flex",
											flexDirection: "column",
											gap: "4px",
											marginTop: "4px",
										}}
									>
										{[100, 85, 92, 60, 78].map((w, i) => (
											<div
												key={i}
												style={{
													height: "5px",
													width: `${w}%`,
													background: "rgba(255,255,255,0.15)",
													borderRadius: "3px",
												}}
											/>
										))}
									</div>
								</div>
							</div>
						</BrowserChrome>
					}
				/>
			);

		case "kopi":
			return (
				<ImageMockup
					thumbnail={thumbnail}
					url={previewUrl || "kopinongki.id"}
					fallback={
						<BrowserChrome url={previewUrl || "kopinongki.id"}>
							<div
								style={{
									height: "100%",
									background: "#fdfbf7",
									display: "flex",
									flexDirection: "column",
								}}
							>
								<div
									style={{
										height: "72px",
										flexShrink: 0,
										background:
											"linear-gradient(135deg, #292524 0%, #44403c 100%)",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										flexDirection: "column",
										gap: "4px",
										position: "relative",
										overflow: "hidden",
									}}
								>
									<Coffee
										size={14}
										color="rgba(255,255,255,0.2)"
										style={{ position: "absolute", right: 10, bottom: 6 }}
									/>
									<span
										style={{
											fontFamily: "serif",
											fontSize: "11px",
											fontWeight: 700,
											color: "#fff",
											fontStyle: "italic",
										}}
									>
										kopiNongki
									</span>
									<div
										style={{
											width: "28px",
											height: "1.5px",
											background: "#d97706",
											borderRadius: "2px",
										}}
									/>
								</div>
								<div
									style={{
										flex: 1,
										padding: "8px",
										display: "grid",
										gridTemplateColumns: "1fr 1fr",
										gap: "6px",
									}}
								>
									{["#fef3c7", "#fde8c8", "#fff7ed", "#fef9ee"].map((bg, i) => (
										<div
											key={i}
											style={{
												borderRadius: "8px",
												background: bg,
												border: "1px solid rgba(120,53,15,0.08)",
											}}
										/>
									))}
								</div>
							</div>
						</BrowserChrome>
					}
				/>
			);

		default:
			return (
				<div
					style={{
						position: "absolute",
						inset: "24px 0 0 0",
						borderRadius: "10px 10px 0 0",
						overflow: "hidden",
						border: "1px solid var(--color-border)",
						background: "#f9f9f9",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Activity size={18} color="var(--color-text-muted)" />
				</div>
			);
	}
}
