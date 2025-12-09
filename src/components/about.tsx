import { useRef, useState } from 'react';
import { motion } from 'motion/react';

import { Badge } from './ui/badge';
import {
	UserRound,
	ExternalLink,
	Code2,
	Database,
	Server,
	Wrench,
	Terminal,
	Cpu,
} from 'lucide-react';
import { Trans, useTranslation } from 'react-i18next';

export function About() {
	const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

	const { t } = useTranslation();

	const techCategories = useRef([
		{
			id: 'frontend',
			icon: Code2,
			title: t('about.stacks.frontend'),
			techs: ['React', 'Astro', 'Tailwind'],
			color: 'text-blue-400',
			bg: 'bg-blue-500/10',
			border: 'group-hover:border-blue-500/50',
		},
		{
			id: 'backend',
			icon: Server,
			title: t('about.stacks.backend'),
			techs: ['Node.js', 'Bun', 'Express', 'Hono', 'Rust'],
			color: 'text-emerald-400',
			bg: 'bg-emerald-500/10',
			border: 'group-hover:border-emerald-500/50',
		},
		{
			id: 'database',
			icon: Database,
			title: t('about.stacks.database'),
			techs: ['PostgreSQL', 'MySQL', 'MongoDB'],
			color: 'text-purple-400',
			bg: 'bg-purple-500/10',
			border: 'group-hover:border-purple-500/50',
		},
		{
			id: 'tools',
			icon: Wrench,
			title: t('about.stacks.tools'),
			techs: ['Tauri', 'Drizzle', 'Docker', 'Linux'],
			color: 'text-orange-400',
			bg: 'bg-orange-500/10',
			border: 'group-hover:border-orange-500/50',
		},
	]);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.15 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<section
			id="about"
			className="py-24 px-4 relative overflow-hidden bg-background mt-50 md:mt-0"
		>
			<div className="absolute top-40 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
			<div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

			<div className="container mx-auto max-w-6xl relative z-10">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start"
				>
					<div className="space-y-10">
						<motion.div variants={itemVariants} className="flex justify-start">
							<Badge
								variant="outline"
								className="px-4 py-1.5 text-sm bg-primary/10 text-primary border-primary/20 backdrop-blur-md"
							>
								<UserRound className="w-4 h-4 mr-2" />
								{t('about.badge')}
							</Badge>
						</motion.div>

						<motion.div variants={itemVariants} className="relative">
							<h2 className="text-4xl md:text-5xl font-bold font-mono tracking-tight text-foreground">
								<span className="text-primary mr-2">&lt;</span>
								{t('about.title')}
								<span className="text-primary ml-2">/&gt;</span>
							</h2>
						</motion.div>

						<motion.div
							variants={itemVariants}
							className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed"
						>
							<Trans
								i18nKey="about.content"
								components={{
									1: <strong className="text-foreground" />,
									2: <strong className="text-foreground" />,
									3: (
										<span className="text-primary underline decoration-primary/30 underline-offset-4" />
									),
								}}
							/>
						</motion.div>

						<motion.div
							variants={itemVariants}
							whileHover={{ scale: 1.02 }}
							className="relative group rounded-xl overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-sm"
						>
							<div className="absolute inset-0 bg-linear-to-r from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

							<div className="p-6 flex items-center gap-5 relative z-10">
								<div className="w-12 h-12 rounded-lg bg-linear-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
									<Cpu className="w-6 h-6" />
								</div>

								<div className="flex-1">
									<p className="text-xs font-mono text-primary mb-1 uppercase tracking-wider">
										Founder
									</p>
									<a
										href="https://kingdomsoftwares.com.br"
										className="text-xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2"
									>
										Kingdom Softwares
										<ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
									</a>
									<p className="text-sm text-muted-foreground mt-1">
										{t('about.founder.description')}
									</p>
								</div>
							</div>
						</motion.div>
					</div>

					<div className="space-y-8">
						<motion.div
							variants={itemVariants}
							className="flex justify-center lg:justify-end mb-8"
						>
							<motion.div
								animate={{ y: [0, -10, 0] }}
								transition={{
									duration: 4,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
								className="relative w-48 h-48 sm:w-48 sm:h-48"
							>
								<div className="absolute inset-0 bg-linear-to-tr from-primary to-purple-500 rounded-2xl rotate-6 blur-2xl opacity-40 animate-pulse" />
								<div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl bg-zinc-800">
									<img
										src="https://github.com/DouglasMai4.png"
										alt="Douglas Maia"
										loading="lazy"
										decoding="async"
										className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
									/>
								</div>
							</motion.div>
						</motion.div>

						<motion.div variants={itemVariants} className="space-y-4">
							<div className="flex items-center gap-2 text-muted-foreground mb-4">
								<Terminal className="w-4 h-4" />
								<span className="text-sm font-mono">stack.config.json</span>
								<div className="h-px bg-border flex-1 ml-2" />
							</div>

							<div className="grid gap-3">
								{techCategories.current.map((category) => {
									const Icon = category.icon;
									const isHovered = hoveredCategory === category.id;

									return (
										<motion.div
											key={category.id}
											onMouseEnter={() => setHoveredCategory(category.id)}
											onMouseLeave={() => setHoveredCategory(null)}
											className={`group relative p-4 rounded-xl border border-white/5 bg-zinc-900/40 backdrop-blur-md transition-all duration-300 ${category.border} hover:bg-zinc-900/80`}
										>
											<div className="flex items-start gap-4">
												<div
													className={`p-2.5 rounded-lg ${category.bg} ${category.color}`}
												>
													<Icon className="w-5 h-5" />
												</div>

												<div className="flex-1">
													<h4 className="text-sm font-semibold text-foreground mb-2 flex items-center justify-between">
														{category.title}
														{isHovered && (
															<span
																className={`text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 ${category.color} animate-in fade-in zoom-in`}
															>
																{category.techs.length} skills
															</span>
														)}
													</h4>

													<div className="flex flex-wrap gap-1.5">
														{category.techs.map((tech) => (
															<span
																key={tech}
																className={`text-xs px-2 py-1 rounded bg-white/5 text-zinc-400 border border-transparent transition-colors ${
																	isHovered
																		? 'group-hover:border-white/10 group-hover:text-zinc-200'
																		: ''
																}`}
															>
																{tech}
															</span>
														))}
													</div>
												</div>
											</div>
										</motion.div>
									);
								})}
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
